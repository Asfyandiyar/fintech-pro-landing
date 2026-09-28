export const languages = {
  ru: 'Русский',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'ru';

export const ui = {
  ru: {
    // Meta & SEO
    'meta.title': 'Платформа трансграничных расчетов и B2B платежей | Fintech Solution',
    'meta.description': 'Надежная инфраструктура для международных расчетов бизнеса, конвертации валют и автоматизации выплат по API. Высокая скорость, низкие комиссии и стабильный аптайм.',

    // Navigation
    'nav.features': 'Преимущества',
    'nav.faq': 'FAQ',
    'nav.contact': 'Контакты',
    'nav.cta': 'Подключить бизнес',

    // Hero
    'hero.badge': 'B2B-инфраструктура • Прямые шлюзы Азия и Ближний Восток',
    'hero.title': 'Инфраструктура международных платежей для вашего бизнеса',
    'hero.subtitle': 'Принимайте оплату от зарубежных контрагентов, автоматизируйте массовые выплаты и конвертируйте активы без скрытых комиссий и задержек.',
    'hero.cta.primary': 'Оставить заявку',
    'hero.stat.1.val': '99.95%',
    'hero.stat.1.label': 'Доступность шлюзов',
    'hero.stat.2.val': 'до 0.5%',
    'hero.stat.2.label': 'Минимальная комиссия',
    'hero.stat.3.val': '15 мин',
    'hero.stat.3.label': 'Среднее время обработки',

    // Features
    'features.tag': 'Почему выбирают нас',
    'features.title': 'Надежное решение для внешнеэкономической деятельности',
    'features.subtitle': 'Все необходимые инструменты для работы с иностранными поставщиками и клиентами в едином окне.',
    'features.item1.title': 'Трансграничные расчеты',
    'features.item1.desc': 'Проводите платежи в RUB, CNY, AED и USDT напрямую без банков-корреспондентов со средней скоростью транзакции до 10 минут.',
    'features.item2.title': 'Безопасность и комплаенс',
    'features.item2.desc': 'Полное соответствие международным стандартам безопасности, автоматическая проверка транзакций (AML) и защита балансов.',
    'features.item3.title': 'Готовые SDK и API',
    'features.item3.desc': 'Быстрое подключение к вашей CRM или ERP-системе. Документация написана инженерами для инженеров, поддержка Webhooks.',
    'features.item4.title': 'Персональный саппорт 24/7',
    'features.item4.desc': 'Персональный менеджер и русскоязычная техническая поддержка на связи в Telegram и Slack без ботов и очередей.',

    // FAQ
    'faq.tag': 'Частые вопросы',
    'faq.title': 'Ответы на ключевые вопросы',
    'faq.subtitle': 'Узнайте больше об условиях подключения и регламенте проведения платежей.',
    'faq.q1': 'Нужно ли открывать зарубежное юрлицо для работы?',
    'faq.a1': 'Наша платформа поддерживает различные сценарии интеграции. Мы работаем как с российскими компаниями, так и с международными структурами. Подробности онбординга зависят от ваших задач.',
    'faq.q2': 'Какие платежные направления и валюты доступны?',
    'faq.a2': 'Доступны расчеты в рублях, китайских юанях, дирхамах ОАЭ, а также стейблкоинах USDT и USDC. География включает Азию, Ближний Восток и страны СНГ.',
    'faq.q3': 'Как обеспечивается безопасность средств и AML-чистота?',
    'faq.a3': 'Каждая транзакция проходит автоматизированный ончейн/оффчейн скоринг ведущими AML-системами. Средства хранятся на изолированных счетах класса Tier-3.',
    'faq.q4': 'Сколько времени занимает интеграция по API?',
    'faq.a4': 'Предоставляем готовые SDK (Node.js, Python, Go) и песочницу (Sandbox). Базовая интеграция платежного шлюза занимает у команды от 1 до 2 рабочих дней.',

    // CTA
    'cta.title': 'Готовы оптимизировать международные расчеты?',
    'cta.subtitle': 'Подключите шлюз за 48 часов и проводите платежи без риска блокировок и скрытых комиссий.',
    'cta.button': 'Обсудить проект',

    // Modal
    'modal.title': 'Подключение к платформе',
    'modal.subtitle': 'Оставьте контакты, и комплаенс-менеджер свяжется с вами в течение 15 минут.',
    'modal.name': 'Имя и фамилия',
    'modal.name.placeholder': 'Алексей Смирнов',
    'modal.email': 'Корпоративный Email',
    'modal.email.placeholder': 'alexey@company.ru',
    'modal.message': 'Ориентировочный объем и направления',
    'modal.message.placeholder': 'Например: расчеты с поставщиками из Китая, CNY/USDT, от $50k/мес...',
    'modal.submit': 'Отправить заявку',
    'modal.success': 'Заявка принята! Менеджер свяжется с вами в ближайшее время.',
    'modal.close': 'Закрыть',

    // 404
    '404.title': 'Страница не найдена',
    '404.desc': 'Запрашиваемый адрес был перемещен или удален. Вернитесь на главную страницу сервиса.',
    '404.button': 'На главную',

    // Footer
    'footer.desc': 'Современная инфраструктура трансграничных платежей и B2B-расчетов для технологичного бизнеса.',
    'footer.rights': 'Все права защищены.',
    'footer.privacy': 'Политика конфиденциальности',
    'footer.terms': 'Условия обслуживания',
  },
  en: {
    // Meta & SEO
    'meta.title': 'Cross-Border Settlements & B2B Payments Platform | Fintech Solution',
    'meta.description': 'Reliable infrastructure for corporate global settlements, currency conversion, and automated API payouts with top uptime.',

    // Navigation
    'nav.features': 'Features',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.cta': 'Get Started',

    // Hero
    'hero.badge': 'B2B Infrastructure • Direct Payment Rails across Asia & MEA',
    'hero.title': 'Global Payment Infrastructure for Modern Enterprises',
    'hero.subtitle': 'Accept payments from international partners, automate bulk payouts, and convert liquidity without unexpected spreads.',
    'hero.cta.primary': 'Request Access',
    'hero.stat.1.val': '99.95%',
    'hero.stat.1.label': 'Gateway Uptime',
    'hero.stat.2.val': 'from 0.5%',
    'hero.stat.2.label': 'Base Transaction Fee',
    'hero.stat.3.val': '15 min',
    'hero.stat.3.label': 'Average Settlement Time',

    // Features
    'features.tag': 'Why Partner With Us',
    'features.title': 'Enterprise-Grade Rails for Global Commerce',
    'features.subtitle': 'All the tools required to manage international vendors and clients within a single unified workspace.',
    'features.item1.title': 'Cross-Border Settlements',
    'features.item1.desc': 'Direct liquidity in RUB, CNY, AED, and USDT bypassing slow correspondent banking chains in under 10 minutes.',
    'features.item2.title': 'Security & Automated AML',
    'features.item2.desc': 'Strict international regulatory compliance, real-time transaction scoring, and segregated Tier-3 custody protection.',
    'features.item3.title': 'Production-Ready SDKs & API',
    'features.item3.desc': 'Seamless integration with your existing CRM/ERP stack. Developer-friendly docs and instant Webhook triggers.',
    'features.item4.title': '24/7 Dedicated Support',
    'features.item4.desc': 'Dedicated account representative and technical support accessible directly in Telegram and Slack.',

    // FAQ
    'faq.tag': 'Frequently Asked Questions',
    'faq.title': 'Answers to Key Questions',
    'faq.subtitle': 'Everything you need to know about corporate onboarding and transaction rules.',
    'faq.q1': 'Is an offshore corporate entity required for integration?',
    'faq.a1': 'Our platform supports multiple operational setups. We onboard both domestic entities and international holding structures based on your goals.',
    'faq.q2': 'Which payment corridors and currencies are active?',
    'faq.a2': 'We support settlement corridors in RUB, Chinese Yuan (CNY), UAE Dirham (AED), as well as USDT and USDC stablecoins across Asia, MEA, and CIS.',
    'faq.q3': 'How are fund security and AML compliance guaranteed?',
    'faq.a3': 'Every transaction undergoes real-time AML scoring with leading risk monitoring engines. Balances are safeguarded in segregated institutional accounts.',
    'faq.q4': 'How quickly can our team integrate the API?',
    'faq.a4': 'With pre-built SDKs (Node.js, Python, Go) and our Sandbox test environment, typical production integration takes 1 to 2 business days.',

    // CTA
    'cta.title': 'Ready to Streamline Your Global Settlements?',
    'cta.subtitle': 'Connect payment rails within 48 hours and eliminate correspondent delays today.',
    'cta.button': 'Schedule a Call',

    // Modal
    'modal.title': 'Apply for Platform Access',
    'modal.subtitle': 'Leave your contact details and our compliance team will get in touch within 15 minutes.',
    'modal.name': 'Full Name',
    'modal.name.placeholder': 'Alexander Wright',
    'modal.email': 'Business Email',
    'modal.email.placeholder': 'alexander@company.com',
    'modal.message': 'Estimated Volume & Corridors',
    'modal.message.placeholder': 'E.g., APAC suppliers settlement, CNY/USDT, $50k+/month...',
    'modal.submit': 'Submit Application',
    'modal.success': 'Application received! Our representative will contact you shortly.',
    'modal.close': 'Close',

    // 404
    '404.title': 'Page Not Found',
    '404.desc': 'The requested URL was not found on this server. Return to the home page.',
    '404.button': 'Return to Home',

    // Footer
    'footer.desc': 'Next-generation cross-border settlement and B2B payment infrastructure for scaling businesses.',
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
  },
} as const;

export type TranslationKey = keyof (typeof ui)['ru'];
