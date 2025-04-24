import React, { useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "@/components/Wrapper";
import CartItem from "@/components/CartItem";
import { DELIVERY_COST } from "@/utils/variables";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { sha256 } from "@/utils/helper";

import { makePaymentRequest } from "@/utils/api";
import { loadStripe } from "@stripe/stripe-js";
import EditUserDetailsModal from "@/components/EditUserDetailsModal";
import { toast } from "react-toastify";
const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const Cart = () => {
    const [ loading, setLoading ] = useState(false);
    const [ userEmail, setUserEmail ] = useState("");
    const { cartItems } = useSelector((state) => state.cart);
    const loggedInUser = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();
    let paymentForm = useRef(null);
    let [ userDetailsShown, setUserDetailsShown ] = useState(false);
    let [ selectedDeliveryMethod, setSelectedDeliveryMethod ] = useState("1");
    let userContactData = window.localStorage.getItem("userContactData");

    const subTotal = useMemo(() => {
        return cartItems.reduce((total, val) => {
            total += val.totalPrice;
            return total;
        }, 0);
    }, [cartItems]);

    const handlePayment = async () => {
        setLoading(true);

        try {
            let savedUserContactData = window.localStorage.getItem("userContactData");

            if (!savedUserContactData) {
                return;
            }

            savedUserContactData = JSON.parse(savedUserContactData);

            let response = await fetch("https://api.cryptocloud.plus/v2/invoice/create?locale=ru", {
                method: "POST",
                headers: {
                    "Accept": "*/*", 
                    "content-type": "application/json",
                    "Authorization": "Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1dWlkIjoiTlRJeE9URT0iLCJ0eXBlIjoicHJvamVjdCIsInYiOiIxYmJhYjJkM2E1NWNjMWU2MDQ4MWY4ZWY4NDBhNTExOTFmMzY0M2MxYWY3Zjc2MDhjNzRjMjcyNmEzNTU5ZjViIiwiZXhwIjo4ODE0NTQzODc1OH0.iAgHJ1xwkoNyUy7V7dvN8mfpV5MWLspvg6Pv68_qt-w"
                },
                body: JSON.stringify({
                    shop_id: "6BwcPTgjt62HYQXu",
                    amount: subTotal,
                    currency: "UAH",
                    email: savedUserContactData.email,
                    time_to_pay: { "hours": 0, "minutes": 20 }
                })
            })
console.log(response)
            if (response.ok) {
                console.log(response)
                response = response.json();
            }
        } catch (e) {
            setLoading(false);
        }
    };

    return (
        <div className="w-full mt-5 md:py-20 cart-page">
            <Wrapper>
                {cartItems.length > 0 && (
                    <>
                        {/* HEADING AND PARAGRAPH START */}
                        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
                            <div className="text-[28px] md:text-[34px] font-semibold leading-tight">
                                Кошик
                            </div>
                        </div>
                        {/* HEADING AND PARAGRAPH END */}

                        {/* CART CONTENT START */}
                        <div className="flex flex-col lg:flex-row gap-12 py-10">
                            {/* CART ITEMS START */}
                            <div className="flex-[2]">
                                <div className="text-lg font-bold">
                                    Товари
                                </div>
                                {cartItems.map((item) => (
                                    <CartItem key={item.id} data={item} />
                                ))}
                            </div>
                            {/* CART ITEMS END */}

                            {/* SUMMARY START */}
                            <div className="flex-[1]">
                                <div className="text-lg font-bold">Підсумок</div>

                                <div className="p-5 my-5 bg-black/[0.05] rounded-xl">
                                    <div className="flex justify-between">
                                        <div className="text-md md:text-lg font-medium text-black">
                                            Вартість товарів
                                        </div>
                                        <div className="text-md md:text-lg font-medium text-black">
                                            {subTotal} грн
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <div className="text-md md:text-lg font-medium text-black">
                                            Доставка
                                        </div>
                                        <div className="text-md md:text-lg font-medium text-black">
                                            {selectedDeliveryMethod === "1" ? "Безкоштовно" : (DELIVERY_COST + " ₽")}
                                        </div>
                                    </div>
                                    <div className="text-sm md:text-md py-5 border-t mt-5 totals-text-content">
                                        Ваше замовлення буде доставлено новою поштою протягом 1-3 днів, доставка є безкоштовною.
                                        <b> Після оплати з вами зв'яжуться через вказаний номер телефону.</b>
                                    </div>
                                </div>

                                {/* BUTTONS START */}

                                <button 
                                    onClick={() => setUserDetailsShown(true)}
                                    className="edit-user-details-button"
                                >
                                   {!userContactData ? "Додати" : "Змінити"} дані отримувача
                                </button>

                                <button
                                    disabled={!userContactData ? "true" : ""}
                                    className="come-to-checkout-button"
                                    onClick={handlePayment}
                                >
                                    {selectedDeliveryMethod === "1" ? ("Оплатити " + subTotal + " грн") : ("Оплатить " + DELIVERY_COST + " ₽")}
                                    {loading && <img src="/spinner.svg" />}
                                </button>

                                {/* BUTTONS END */}
                            </div>
                            {/* SUMMARY END */}
                        </div>
                        {/* CART CONTENT END */}
                    </>
                )}

                {/* This is empty screen */}
                {cartItems.length < 1 && (
                    <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">
                        <Image
                            src="/empty-cart.jpg"
                            width={300}
                            height={300}
                            className="w-[300px] md:w-[400px]"
                        />
                        <span className="text-xl font-bold">
                            У кошику поки порожньо
                        </span>
                        <span className="text-center mt-4">
                            Схожи ви ще нічого не додавали
                            <br />
                            Замовте наші товари, вам сподобається :)
                        </span>
                        <Link
                            href="/"
                            className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8"
                        >
                            За покупками
                        </Link>
                    </div>
                )}
            </Wrapper>

            {
                userDetailsShown ? <EditUserDetailsModal setUserDetailsShown={setUserDetailsShown} setUserEmail={setUserEmail} /> : <div></div>
            }

            <form className="d-none" method="POST" action="https://aaio.so/merchant/pay" ref={paymentForm}>
                <input type="hidden" name="merchant_id" value="" />
                <input type="hidden" name="amount" value="" />
                <input type="hidden" name="currency" value="" />
                <input type="hidden" name="order_id" value="" />
                <input type="hidden" name="sign" value="" />
                <input type="hidden" name="email" value="" />
                <input type="hidden" name="lang" value="ru" />
                <input type="submit" name="pay" value="Пополнить" />
            </form>
        </div>
    );
};

export default Cart;