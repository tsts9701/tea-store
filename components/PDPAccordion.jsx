import Parser from 'html-react-parser';

function PDPAccordion() {
    let faqItems =  [
        {
            "title": "Який сорт кратому вибрати ?",
            "content": `<ul>
                <li>
                    Якщо ви бажаєте отримати енергію, натхнення та впевненість, то сміливо обирайте 
                    зелений сорт кратому, а якщо бажаєте отримати розслабленість, чудовий і спокійний настрій,
                    але водночас сфокусованість, то обирайте білий сорт.
                </li>
                <li>
                    Якщо шукаєте замінник кратому, обирайте джаваніку. Це молодший брат кратому,
                    він має слабкіший ефект, схожий до зеленого сорту кратому. Ви отримаєте всі ті ж відчуття,
                    але менш виражені.
                </li>
            </ul>`
        },
        {
            "title": "Доставка та оплата",
            "content": `<ul>
                <li>
                    Товар доставляємо новою поштою упродовж 1-3 днів, доставка є безкоштовною.
                </li>
                <li>
                    Товар упаковуємо у зіп пакети (до 900г)/упаковки (від 1кг) з наліпкою "Матча",
                    в описі також вказуємо "Матча".
                </li> 
                <li>
                    Оплату приймаємо тільки криптовалютою, анонімно.
                </li>
            </ul>`
        },
        {
            "title": "Про товар",
            "content": `<ul>
                <li>
                    Ми працюємо з перевіреними постачальниками з-за кордону, які забезпечують високу якість продукту,
                    спеціалізуючись на вирощуванні та обробці продукту в екологічно чистих регіонах Південно-Східної Азії.
                </li>
                <li>
                    Уся продукція, представлена на сайті, реалізується виключно як товар рослинного 
                    походження, який умовно позначений як "матча".
                </li>
                <li>
                    Ми не пропонуємо жодних лікарських засобів, психоактивних речовин 
                    чи будь-яких заборонених до обігу речовин.
                </li>
            </ul?`
        }
    ]

    return (
        <div className="pdp-faq-accordion-container">
            {faqItems.map((item, i) => {
                return (
                    <div className="MuiBox-root mui-style-1iy0dt" id={"collapseItem-" + i} key={i}>
                        <div className="MuiBox-root mui-style-xlyii9">
                            <div className={"title-box MuiBox-root mui-style-1x7woqi "} onClick={() => openCollapse(i)}>
                                <p className="MuiTypography-root MuiTypography-h6 mui-style-1s65c8v">{item.title}</p>
                                <div className="MuiBox-root mui-style-10kyoxo">
                                    <svg data-v-490d9690="" width="16px" height="16px" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L4.78462 4.90382C4.81224 4.93418 4.8456 4.95838 4.88265 4.97492C4.91969 4.99147 4.95963 5 5 5C5.04037 5 5.08031 4.99147 5.11735 4.97492C5.1544 4.95838 5.18776 4.93418 5.21538 4.90382L9 1" stroke="#1D1D20" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                </div>
                            </div>
                            <div className={"MuiCollapse-root MuiCollapse-vertical MuiCollapse-entered mui-style-c4sutr " + (i === 0 ? "pdp-faq-list" : "pdp-faq-content")}>
                                <p>
                                    {Parser(item.content)}
                                </p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

function openCollapse (index) {
    let elem = document.getElementById("collapseItem-" + index);

    if (elem) {
        if (elem.querySelector(".mui-style-1x7woqi").classList.contains("opened")) {
            elem.querySelector(".mui-style-c4sutr").classList.remove("opened");
            elem.querySelector(".mui-style-1x7woqi").classList.remove("opened");
        } else {
            elem.querySelector(".mui-style-c4sutr").classList.add("opened");
            elem.querySelector(".mui-style-1x7woqi").classList.add("opened");
        }
    }
}

export default PDPAccordion;