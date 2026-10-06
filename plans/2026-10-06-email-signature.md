# HTML-подпись для писем

**Статус:** завершён

Подпись в духе сайта: круглый портрет, имя, специализация, WhatsApp / почта / сайт / город. Картинки грузятся с mitjaworks.com.

## Фазы

- [x] Круглая аватарка из портрета → `public/email-signature/dmitri-gubin.png` (PNG с прозрачностью, круг держится и в Outlook)
- [x] Вёрстка подписи → `email-signature/signature.html` (таблицы + inline-стили, без SVG и веб-шрифтов)
- [x] Закоммитить и задеплоить, чтобы аватарка была доступна по https://mitjaworks.com/email-signature/dmitri-gubin.png
- [x] Установить в Apple Mail. Вставка через буфер ломает вёрстку (теряются размеры фото), поэтому `email-signature/signature-body.html` записан напрямую в `.mailsignature` подписи «Mitja Works» (ящик hi@mitjaworks.com), в `~/Library/Mail/V10/MailData/Signatures/` и в iCloud-копию `~/Library/Mobile Documents/com~apple~mail/Data/V4/Signatures/`. В AllSignatures.plist выставлен SignatureIsRich=true, файл защищён флагом uchg.
- [x] Тестовое письмо от Дмитрия

## Ещё две подписи (добавлено 2026-10-06)

- [x] DE, Lumiera Pforzheim → `email-signature/signature-lumiera-de.html`: Dmitry Gubin, Projektentwickler · Lumiera Pforzheim, gubin@pforzwald.com, lumiera-pforzheim.de, LinkedIn. Без телефона. Georgia в имени, цвета сайта Lumiera (#101d30, #acade6). pforzwald.com — припаркованный домен, поэтому ссылка ведёт на lumiera-pforzheim.de.
- [x] Вписать ссылку на LinkedIn
- [x] Установить в Outlook Web (gubin@pforzwald.com) — вставкой из Chrome, работает. Фото заменено на отдельный портрет `dmitry-gubin-lumiera.png` (отдалён, насыщенность −25%)
- [x] EN, веб-разработка → `email-signature/signature-web.html`: как фото-подпись, но Web development и GitHub (github.com/mcpirita) вместо портфолио
- [x] Установить в Apple Mail: подпись «Mitja Web» добавлена вторым вариантом к hi@mitjaworks.com (новый .mailsignature + AllSignatures.plist + AccountsMap.plist, файл защищён uchg)
- [x] Lumiera проверена в Outlook. «Mitja Web» в Apple Mail Дмитрий отдельно не проверял — если поедет, смотреть первым делом

## Zireael Investments (добавлено 2026-10-06)

- [x] EN, Zireael Investments OÜ → `email-signature/signature-zireael.html`: Owner & Managing Director, телефон, zireael.invest@gmail.com, Tallinn. Янтарный акцент #c8801a, кольцо вокруг портрета вшито в `dmitry-gubin-zireael.png`.
- [x] Установлено в Apple Mail к zireael.invest@gmail.com, первой в списке; старая текстовая подпись оставлена второй
- [ ] Тестовое письмо от Дмитрия
