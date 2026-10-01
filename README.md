# Cashleak — iPhone Shortcuts Parser

برومبت جاهز لـ **اختصارات الآيفون** يحوّل إشعارات البنوك لأي تطبيق مالي إلى جملة واحدة نظيفة.

## الناتج المتوقع

| النوع | الناتج |
|--------|--------|
| مصروف | `Spent 12.50 GBP at Starbucks` |
| دخل | `Received 2500.00 KWD from Payroll` |
| تحويل داخلي | `Transfer 100.00 GBP to Revolut` |
| غير مالي / OTP | `IGNORE` |

## إعداد Shortcut على الآيفون

1. افتح **الاختصارات (Shortcuts)** → **أتمتة (Automation)** → **+**
2. اختر **Notification** (أو *When I Receive a Notification*)
3. حدد تطبيقات البنوك (مثل NatWest, Revolut, Monzo, Wise, KNet…)
4. أضف إجراء **Ask ChatGPT** أو **Use Model** / أي AI Action متاح
5. الصق البرومبت من الملف:
   - [`shortcuts/cashleak-parser-prompt.txt`](shortcuts/cashleak-parser-prompt.txt)
6. استبدل:
   - `<<Title>>` → متغير **Notification Title**
   - `<<Body>>` → متغير **Notification Body**
7. (اختياري) أضف إجراء بعد الناتج:
   - **Copy to Clipboard** أو
   - **Send to Cashleak** / Webhook / Notes

## البرومبت (نسخ مباشر)

```
You are Cashleak parser. Reply with ONLY one plain-text sentence. No JSON. No quotes. No markdown. No explanation.

Rules:
1) EXPENSE (purchase/payment): Spent [amount] [currency] at [Clean Merchant Name]
2) INCOME (deposit/refund/salary): Received [amount] [currency] from [Sender Name]
3) INTERNAL_TRANSFER (own accounts: NatWest, Revolut, Monzo, Wise, etc.): Transfer [amount] [currency] to [Destination Account]
4) IGNORE (OTP, security, non-financial): IGNORE

Normalize:
- Amount as a clean number with currency symbol or code.
- Clean names: remove card endings, asterisks, reference numbers, and words like at/from/paid to.

Notification Title: <<Title>>
Notification Body: <<Body>>
```

## ملاحظات مهمة لـ Shortcuts

- لازم الناتج يكون **سطر واحد فقط** — البرومبت يمنع JSON والتفسير.
- لا تكتب كلمة `Prompt:` قبل النص داخل ChatGPT Action.
- تأكد إن Title و Body جايات من متغيرات الإشعار، مو نص ثابت.
- إذا التطبيق ما يعطي Title، خلّه فاضي وخله يعتمد على Body فقط.
