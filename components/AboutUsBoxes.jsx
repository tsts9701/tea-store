import React from "react";

function AboutUsBoxes() {
    return (
        <div className="about-us-boxes">
            <div className="about-us-boxes-wrapper">
                <div className="about-us-box">
                    <div className="d-flex justify-center">
                        <img src="/support-icon.svg" alt="support member icon" />
                    </div>
                    <div>
                        <span>Наша підтримка відповідає на всі запити якомога швидше.</span>
                    </div>
                </div>
                <div className="about-us-box">
                    <div className="d-flex justify-center">
                        <img src="/delivery-icon.svg" alt="fast delivery icon"/>
                    </div>
                    <div>
                        <span>Відправляємо в той самий день, коли було оформлено замовлення.</span>
                    </div>
                </div>
            </div>
            <div className="about-us-boxes-wrapper">
                <div className="about-us-box">
                    <div className="d-flex justify-center">
                        <img src="/lab-icon.svg" alt="Laboratory icon" />
                    </div>
                    <div>
                        <span>Уся наша продукція якісна, свіжа та найголовніше перевірена часом.</span>
                    </div>
                </div>
                <div className="about-us-box">
                    <div className="d-flex justify-center">
                        <img src="/safe-payments.svg" alt="safe payments icon" />
                    </div>
                    <div>
                        <span>Усі платіжні транзакції проводяться анонімно та безпечно.</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUsBoxes;