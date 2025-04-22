import { useEffect, useRef, useState } from "react";

function EditUserDetailsModal(props) {
    let savedUserContactData = window.localStorage.getItem("userContactData");
    let setUserDetailsShown = props.setUserDetailsShown;
    let setUserEmail = props.setUserEmail;
    let userDataForm = useRef(null);
    let phoneInput = useRef(null);

    let [ firstNameVal, setFirstNameVal ] = useState("");
    let [ lastNameVal, setLastNameVal ] = useState("");
    let [ emailVal, setEmailVal ] = useState("");
    let [ cityVal, setCityVal ] = useState("");
    let [ deliveryOffice, setDeliveryOffice ] = useState("")
    let [ phoneVal, setPhoneVal ] = useState("");
    let [ formWasEdited, setFormWasEdited ] = useState(false);

    if (savedUserContactData) {
        savedUserContactData = JSON.parse(savedUserContactData);
    }

    useEffect(() => {
        formatAllInputs(userDataForm, savedUserContactData);

        if (!formWasEdited && savedUserContactData && savedUserContactData.firstName && savedUserContactData.lastName) {
            setFirstNameVal(savedUserContactData.firstName);
            setLastNameVal(savedUserContactData.lastName);
            setCityVal(savedUserContactData.city);
            setEmailVal(savedUserContactData.email);
            setPhoneVal(savedUserContactData.phone);
            setDeliveryOffice(savedUserContactData.deliveryOffice);
        }
    }, [userDataForm, savedUserContactData]);

    return (
        <div className="checkapp-modal__mask">
            <div className="checkapp-modal__wrapper">
                <div tabindex="98" className="checkapp-modal__container shipping-modal">
                    <div className="checkapp-modal__header">
                        <div className="checkapp-modal__title">  </div>
                        <button onClick={() => setUserDetailsShown(false)} tabindex="99" className="checkapp-modal__close"></button>
                    </div>
                    <div className="checkapp-modal__body">
                        <div></div>
                        <div className="shipping-options">
                            <div className="shipping-options__item">
                                <h3 className="shipping-options__title">
                                    <button aria-label="посмотреть списком" className="shipping-options__back" onClick={() => setUserDetailsShown(false)}>
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.1716 31.8284L1.17157 18.8284L1.17157 13.1715L14.1716 0.171516L19.8284 5.82837L13.6569 11.9999L31 11.9999L31 19.9999L13.6569 19.9999L19.8284 26.1715L14.1716 31.8284Z" fill="#110D1C"></path>
                                        </svg>
                                    </button>
                                    Дані отримувача
                                </h3>
                                <form className="address-form" onSubmit={(e) => submitUserData(userDataForm, setUserDetailsShown, setUserEmail, e)} ref={userDataForm}>
                                    <div className="input-item input-item_half">
                                        <div className="form-group form-group_relative" required="required" hide-required-label="">
                                            <input onInput={(e) => validateLabelPosition(e)} className="search-form__input input input_default" id="user-firstname" name="user-firstname" value={firstNameVal} onChange={(e) => {setFormWasEdited(true);setFirstNameVal(e.target.value)}} />
                                            <label className="label label_default label_absolute" for="user-firstname"> Ім'я </label>
                                            <div className="form-group__append"></div>
                                            <div className="form-group__signature form-group__signature_default">  </div>
                                        </div>
                                    </div>
                                    <div className="input-item input-item_half">
                                        <div className="form-group form-group_relative" required="required" hide-required-label="">
                                            <input onInput={(e) => validateLabelPosition(e)} className="search-form__input input input_default" id="user-lastname" name="user-lastname" value={lastNameVal} onChange={(e) => {setFormWasEdited(true);setLastNameVal(e.currentTarget.value)}} />
                                            <label className="label label_default label_absolute disabled" for="user-lastname"> Фамілія </label>
                                            <div className="form-group__append"></div>
                                            <div className="form-group__signature form-group__signature_default">  </div>
                                        </div>
                                    </div>

                                    <div className="input-item input-item_half input-item_mobile-wide">
                                        <div className="form-group form-group_relative">
                                        <input onInput={(e) => validateLabelPosition(e)} className="input input_default" id="user-city" name="user-city" value={cityVal} onChange={(e) => {setFormWasEdited(true);setCityVal(e.currentTarget.value)}} />
                                        <label className="label label_default label_absolute disabled" for="user-city"> Місто </label>
                                        <div className="form-group__append"></div>
                                        <div className="form-group__signature form-group__signature_default"></div>
                                        </div>
                                    </div>

                                    <div className="input-item input-item_half input-item_mobile-wide">
                                        <div className="form-group form-group_relative" required="required" hide-required-label="">
                                        <input onInput={(e) => validateLabelPosition(e)} className="search-form__input input input_default" id="user-delivery-office" name="user-delivery-office" value={deliveryOffice} onChange={(e) => {setFormWasEdited(true);setDeliveryOffice(e.currentTarget.value)}} />
                                        <label className="label label_default label_absolute disabled" for="user-delivery-office"> Номер віддіення нової пошти </label>
                                        <div className="form-group__append"></div>
                                        <div className="form-group__signature form-group__signature_default">  </div>
                                        </div>
                                    </div>

                                    <div className="input-item input-item_half input-item_mobile-wide">
                                        <div className="form-group form-group_relative" required="required" hide-required-label="">
                                        <input onInput={(e) => validateLabelPosition(e)} className="search-form__input input input_default" id="user-email" name="user-email" value={emailVal} onChange={(e) => {setFormWasEdited(true);setEmailVal(e.currentTarget.value)}} />
                                        <label className="label label_default label_absolute disabled" for="user-email"> Адреса електронної пошти </label>
                                        <div className="form-group__append"></div>
                                        <div className="form-group__signature form-group__signature_default">  </div>
                                        </div>
                                    </div>

                                    <div className="input-item input-item_half input-item_mobile-wide">
                                        <div className="form-group form-group_relative form-group_active" required="required" hide-required-label="">
                                            <input ref={phoneInput} onInput={(e) => validateLabelPosition(e)}  type="tel"  name="user-phone" required="required" id="user-phone" className="input input_success" value={phoneVal} onChange={(e) => {setFormWasEdited(true);setPhoneVal(e.currentTarget.value)}} />
                                            <label className="label label_default label_absolute disabled" for="user-phone"> Номер телефону </label>
                                            <div className="form-group__append"></div>
                                            <div className="form-group__signature form-group__signature_default"></div>
                                        </div>
                                    </div>

                                    <div className="input-item address-form__footer">
                                        <div className="address-form__submit-wrapper">
                                            <button type="submit" className="address-form__submit button button_secondary"> Подтвердить </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function validateLabelPosition(e) {
    if (e && e.target) {
        if (e.target.value.length >= 1) {
            e.target.classList.add("entered-value");
        } else {
            e.target.classList.remove("entered-value");
        }
    }
}

function submitUserData(userDataFormRef, setUserDetailsShown, setUserEmail, event) {
    event.preventDefault();

    if (userDataFormRef && userDataFormRef.current) {
        let firstNameInput = userDataFormRef.current.querySelector("#user-firstname");
        let lastNameInput = userDataFormRef.current.querySelector("#user-lastname");
        let emailInput = userDataFormRef.current.querySelector("#user-email");
        let cityInput = userDataFormRef.current.querySelector("#user-city");
        let phoneInput = userDataFormRef.current.querySelector("#user-phone");
        let deliveryOfficeInput = userDataFormRef.current.querySelector("#user-delivery-office");

        let firstNameVal = firstNameInput.value;
        let lastNameVal = lastNameInput.value;
        let emailVal = emailInput.value;
        let cityVal = cityInput.value;
        let phoneVal = phoneInput.value;
        let deliveryOfficeVal = deliveryOfficeInput.value;

        if (!firstNameVal.length) {
            firstNameInput.style.borderBottom = "1px solid red";
            return;
        }

        if (!lastNameVal.length) {
            lastNameInput.style.borderBottom = "1px solid red";
            return;
        }

        if (!emailVal.length) {
            emailInput.style.borderBottom = "1px solid red";
            return;
        }

        if (!cityVal.length) {
            cityInput.style.borderBottom = "1px solid red";
            return;
        }

        if (!phoneVal.length || phoneVal.length < 10) {
            phoneInput.style.borderBottom = "1px solid red";
            return;
        }

        if (!deliveryOfficeVal.length) {
            deliveryOfficeInput.style.borderBottom = "1px solid red";
            return;
        }

        setUserDetailsShown(false);
        setUserEmail(emailVal);

        window.localStorage.setItem("userContactData", JSON.stringify({
            firstName: firstNameVal,
            lastName: lastNameVal,
            email: emailVal,
            city: cityVal,
            phone: phoneVal,
            deliveryOffice: deliveryOfficeVal
        }));
    }
}

function formatAllInputs(formRef, savedUserContactData) {
    if (savedUserContactData && Object.keys(savedUserContactData)) {
        var allFormInputs = formRef.current.querySelectorAll("input");

        for (let i = 0; i < allFormInputs.length; i++) {
           allFormInputs[i].classList.add("entered-value");
        }
    }
}

export default EditUserDetailsModal;