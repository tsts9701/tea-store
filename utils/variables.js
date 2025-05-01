export const STRAPI_API_TOKEN = 
    process.env.NEXT_PUBLIC_STRAPI_API_TOKEN || "";

export const PLP_PAGE_SIZE = 15;

export const DELIVERY_COST = 2070;

export const API_URL =
    process.env.NEXT_PUBLIC_API_URL || "https://megasport.ua"; //"https://ecommerce-store-8kem.onrender.com";


export const desktopNavigation = [
    { id: 1, name: "Главная", url: "/" },
    { id: 2, name: "Зелений кратом", subMenu: false, category: "green-kratom", url: "green-kratom"},
    { id: 3, name: "Білий кратом", subMenu: false, category: "white-kratom", url: "white-kratom"},
    { id: 3, name: "Javanica mitragyna", subMenu: false, category: "javanica-mitragyna", url: "javanica-mitragyna"},
    { id: 4, name: "О нас", url: "about" }
];

export const mobileNavigation = [
    { id: 1, name: "Главная", url: "/" },
    { id: 2, name: "Зелений кратом", subMenu: false, category: "green-kratom", url: "green-kratom"},
    { id: 3, name: "Білий кратом", subMenu: false, category: "white-kratom", url: "white-kratom"},
    { id: 3, name: "Javanica mitragyna", subMenu: false, category: "javanica-mitragyna", url: "javanica-mitragyna"},
    { id: 4, name: "Кошик", url: "cart" },
    { id: 5, name: "Список бажань", url: "wishlist" }
];

export const allSiteProducts = [
    {
        name: "Green maeng Da",
        pricePer100g: 700,
        images: ["/green-maeng.webp", "/green-maen-2.webp"],
        description: "Звичайний зелений сорт кратому. Найпопулярніший, універсальний та ТОП серед продажів. Цей сорт чудово підійде тим, кого часто турбують негативні думки та невпевненість у собі. Сприяє комунікабельності та розумовій стимуляції. Якщо в житті, на твою думку, настала чорна смуга і ти не бачиш шляхів вирішення, то саме цей сорт введе тебе у стан ейфорії, чистої радості, ти відчуєш інтенсивне почуття благополуччя і щастя, він допоможе знайти шляхи вирішення будь-яких ситуацій",
        category: "green-kratom"
    },
    {
        name: "White maeng Da",
        pricePer100g: 700,
        images: ["/white-maeng.webp", "/white-maeng-2.webp"],
        description: "Звичайний білий сорт кратому. Універсальний та унікальний вид кратому. Маенг білий — цей сорт кратому часто використовується як допоміжний засіб для концентрації уваги. Він також відповідає за створення відчуття благополуччя. Якщо ти, наприклад, збираєшся в похід чи на довгу пішу прогулянку, цей сорт допоможе тобі наповнитися енергією та не відчувати втоми. Також підійде для роботи, яка вимагає максимальної концентрації та розумових зусиль.",
        category: "white-kratom"
    },
    {
        name: "White malay",
        pricePer100g: 850,
        images: ["/white-malay.webp"],
        description: "Білий сорт кратому, який у порівняні із звичайним білим є більш якісним та із більш довготривалим ефектом. Цей сорт вирощується у південній часиані Азії, на острові Калімантана. Родючі ґрунти регіону відтворюють природне середовище зростання кратома, що сприяє унікальним характеристикам листя та його особливому аромату. Вирощування відбувається під ретельним контролем, а дерева стратегічно розташовані таким чином, щоб забезпечити найвищу якість листя",
        category: "white-kratom"
    },
    {
        name: "Super green maeng Da",
        pricePer100g: 750,
        images: ["/green-maeng-da.webp", "/green-super-2.webp"],
        description: "Зелений сорт кратому, який у порівняні із звичайнним зеленим має більш виразний та стимулюючий ефект. Цей вид кратому чудово підійде тим хто має безліч справ, адже сприяє фізичній та розумовій стимуляції.",
        category: "green-kratom"
    },
    {
        name: "Wild green Bali",
        pricePer100g: 710,
        images: ["/green-bali.webp", "/green-bali-2.webp"],
        description: "Зелений сорт кратому, зібраний з лісу, розташованого в північному регіоні Капуас Хулу на заході Борнео. Ліс відомий своїми багатими ґрунтами та глибокою повагою місцевих жителів до природи. Деревам в середньому близько 10 років, і вони ростуть природним чином у своєму середовищі. Дикий зелений кратом вважається кращим за звичайний green maeng da завдяки своїм винятковим характеристикам, але він складніший у видоботку, що робить його чудовим вибором.",
        category: "green-kratom"
    },
    {
        name: "Wild Gold Borneo",
        pricePer100g: 700,
        images: ["/green-gold-borneo.webp"],
        description: "Wild Gold Borneo - це якісний продукт, зібраний з диких дерев у самому серці тропічних лісів Борнео. Дерева трохи старші за інші в серії, в середньому 9 років, і їм було дозволено рости в природному середовищі. Листя велике, з червоними прожилками та червоним характером. Листя не піддавалося процесу ферментації, тому зберігає свій зелений колір з відтінками червоного.",
        category: "green-kratom"
    },
    {
        name: "Wild White Bali",
        pricePer100g: 750,
        images: ["/white-wild-bali.webp", "/white-wild-bali-2.webp"],
        description: "Спробувавши Wild White Bali, ти відчуєш цікавий ефект. Спочатку ти можеш відчути легке відчуття ейфорії та покращення настрою. Ти станеш бадьорішим і енергійнішим, твої думки стануть яснішими, і ти зможеш краще концентруватися. Ти помітиш, що твоя зосередженість покращиться, і будеш готовий продуктивніше працювати над завданнями. Ти станеш більш відкритим до спілкування і почуватимешся комфортніше в соціальних ситуаціях. Також ти відчуєш зменшення болю у м’язах і суглобах, що буде приємним сюрпризом.",
        category: "white-kratom"
    },
    {
        name: "Mitragyna Javanica",
        pricePer100g: 900,
        images: ["/javanica-mitragyna.webp"],
        description: "Чай Javanica це молодший брат кратому, який підійде тим, хто шукає легке знеболення і помірне розслаблення, без сильнодіючого ефекту (в ньому відсутній митрагинин який є в кратомі). Хоча вона здатна дещо підвищувати енергію, основний її акцент - на природному заспокоєнні, знятті дискомфорту і поліпшенні настрою. Нині Javanica вважається безпечною і легальною в Україні, країнах Європи та США.",
        category: "javanica-mitragyna"
    }
];

export const recommendationProducts = [
    {
        name: "Green maeng Da",
        pricePer100g: 700,
        images: ["/green-maeng.webp", "/green-maen-2.webp"],
        description: "Звичайний зелений сорт кратому. Найпопулярніший, універсальний та ТОП серед продажів. Цей сорт чудово підійде тим, кого часто турбують негативні думки та невпевненість у собі. Сприяє комунікабельності та розумовій стимуляції. Якщо в житті, на твою думку, настала чорна смуга і ти не бачиш шляхів вирішення, то саме цей сорт введе тебе у стан ейфорії, чистої радості, ти відчуєш інтенсивне почуття благополуччя і щастя, він допоможе знайти шляхи вирішення будь-яких ситуацій",
        category: "green-kratom"
    },
    {
        name: "White maeng Da",
        pricePer100g: 700,
        images: ["/white-maeng.webp", "/white-maeng-2.webp"],
        description: "Звичайний білий сорт кратому. Універсальний та унікальний вид кратому. Маенг білий — цей сорт кратому часто використовується як допоміжний засіб для концентрації уваги. Він також відповідає за створення відчуття благополуччя. Якщо ти, наприклад, збираєшся в похід чи на довгу пішу прогулянку, цей сорт допоможе тобі наповнитися енергією та не відчувати втоми. Також підійде для роботи, яка вимагає максимальної концентрації та розумових зусиль.",
        category: "white-kratom"
    },
    {
        name: "White malay",
        pricePer100g: 850,
        images: ["/white-malay.webp"],
        description: "Білий сорт кратому, який у порівняні із звичайним білим є більш якісним та із більш довготривалим ефектом. Цей сорт вирощується у південній часиані Азії, на острові Калімантана. Родючі ґрунти регіону відтворюють природне середовище зростання кратома, що сприяє унікальним характеристикам листя та його особливому аромату. Вирощування відбувається під ретельним контролем, а дерева стратегічно розташовані таким чином, щоб забезпечити найвищу якість листя",
        category: "white-kratom"
    },
    {
        name: "Super green maeng Da",
        pricePer100g: 750,
        images: ["/green-maeng-da.webp", "/green-super-2.webp"],
        description: "Зелений сорт кратому, який у порівняні із звичайнним зеленим має більш виразний та стимулюючий ефект. Цей вид кратому чудово підійде тим хто має безліч справ, адже сприяє фізичній та розумовій стимуляції.",
        category: "green-kratom"
    }
]

export const mensSummerProductsCount = allSiteProducts.filter(product => (product.category === "mens-summer-shoes" && product.sex === "m")).length;
export const mensWinterProductsCount = allSiteProducts.filter(product => (product.category === "mens-winter-shoes" && product.sex === "m")).length;
export const womensSummerProductsCount = allSiteProducts.filter(product => (product.category === "women-summer-shoes" && product.sex === "w")).length;
export const womensWinterProductsCount = allSiteProducts.filter(product => (product.category === "women-winter-shoes" && product.sex === "w")).length;