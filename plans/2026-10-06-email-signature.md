# HTML-подпись для писем

**Статус:** активный

Подпись в духе сайта: круглый портрет, имя, специализация, WhatsApp / почта / сайт / город. Картинки грузятся с mitjaworks.com.

## Фазы

- [x] Круглая аватарка из портрета → `public/email-signature/dmitri-gubin.png` (PNG с прозрачностью, круг держится и в Outlook)
- [x] Вёрстка подписи → `email-signature/signature.html` (таблицы + inline-стили, без SVG и веб-шрифтов)
- [x] Закоммитить и задеплоить, чтобы аватарка была доступна по https://mitjaworks.com/email-signature/dmitri-gubin.png
- [x] Установить в Apple Mail. Вставка через буфер ломает вёрстку (теряются размеры фото), поэтому `email-signature/signature-body.html` записан напрямую в `.mailsignature` подписи «Mitja Works» (ящик hi@mitjaworks.com), в `~/Library/Mail/V10/MailData/Signatures/` и в iCloud-копию `~/Library/Mobile Documents/com~apple~mail/Data/V4/Signatures/`. В AllSignatures.plist выставлен SignatureIsRich=true, файл защищён флагом uchg.
- [ ] Тестовое письмо от Дмитрия: проверить на компьютере и телефоне

## Ещё две подписи (добавлено 2026-10-06)

- [x] DE, Lumiera Pforzheim → `email-signature/signature-lumiera-de.html`: Dmitry Gubin, Projektentwickler · Lumiera Pforzheim, gubin@pforzwald.com, lumiera-pforzheim.de, LinkedIn. Без телефона. Georgia в имени, цвета сайта Lumiera (#101d30, #acade6). pforzwald.com — припаркованный домен, поэтому ссылка ведёт на lumiera-pforzheim.de.
- [x] Вписать ссылку на LinkedIn
- [ ] Установить в Outlook Web (gubin@pforzwald.com, Microsoft 365 через GoDaddy) — вставкой из Chrome, инструкция дана
- [x] EN, веб-разработка → `email-signature/signature-web.html`: как фото-подпись, но Web development и GitHub (github.com/mcpirita) вместо портфолио
- [x] Установить в Apple Mail: подпись «Mitja Web» добавлена вторым вариантом к hi@mitjaworks.com (новый .mailsignature + AllSignatures.plist + AccountsMap.plist, файл защищён uchg)
- [ ] Тестовые письма от Дмитрия по обеим новым подписям
