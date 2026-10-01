# أتمتة الآيفون (Personal Automations)

الأتمتة = اختصار يشتغل **تلقائياً** عند حدث، بدون ما المستخدم يفتح Shortcuts كل مرة.

## 1) الفرق السريع

| | Shortcut عادي | Personal Automation |
|--|---------------|---------------------|
| التشغيل | يدوي | عند تريغر |
| الإعداد | اختصار | Automation tab |
| المزامنة | عبر iCloud عادة | خاص بالجهاز (backup بدون sync كامل) |
| التأكيد | لا يحتاج | قد يطلب تأكيد حسب الإعدادات |

## 2) إنشاء أتمتة شخصية

1. Shortcuts → **Automation**
2. `+` → **Create Personal Automation**
3. اختر **Trigger**
4. اضبط خيارات التريغر → Next
5. أضف Actions (أو استخدم اختصار موجود)
6. اختبر إن أمكن → Next
7. راجع الملخص → Done
8. عطّل **Ask Before Running** إذا تبي تشغيل فوري (حسب نوع التريغر ودعم iOS)

## 3) أنواع التريغرات

### Event triggers

| التريغر | متى يشتغل |
|---------|-----------|
| **Time of Day** | وقت محدد / شروق / غروب + تكرار |
| **Alarm** | رنين / غفو / إيقاف منبه معين أو أي منبه |
| **Sleep / Wind Down** | مراحل النوم من Clock / Sleep Focus |
| **Apple Watch Workout** | بداية/نهاية تمرين |
| **Sound Recognition** | التعرف على صوت معيّن (يحتاج تفعيل في Settings) |

### Travel triggers

| التريغر | متى يشتغل |
|---------|-----------|
| **Arrive** | الوصول لموقع (+ نطاق وقت اختياري) |
| **Leave** | مغادرة موقع |
| **Before I Commute** | قبل موعد التنقل المعتاد للبيت/العمل |
| **CarPlay** | الاتصال أو قطع CarPlay |

### Setting triggers

| التريغر | متى يشتغل |
|---------|-----------|
| **Focus** | تشغيل أو إيقاف وضع تركيز |
| **NFC** | لمس تاج NFC (ليس كل الأجهزة تدعم) |
| **App** | فتح أو إغلاق تطبيق محدد |
| إعدادات أخرى شائعة | Airplane Mode، Wi-Fi، Bluetooth، Low Power، Battery Level… |

### Communication (حسب إصدار iOS)

قد تشمل أحداث رسائل/بريد — تحقق من دليل Shortcuts لنسخة iOS المستهدفة قبل ما توثّقها في فيديو.

## 4) أمثلة سيناريوهات لتطبيقك

| هدف المنتج | تريغر مقترح | فعل مقترح |
|------------|-------------|-----------|
| تذكير عند الوصول للعمل | Arrive → Work | إشعار + فتح شاشة المهام |
| وضع تركيز للعمل | Focus → Work On | ضبط إعدادات داخل التطبيق عبر App Intent |
| تسجيل سريع بعد المنبه | Alarm Stopped | فتح شاشة Quick Add |
| عند فتح تطبيق منافس/مكمل | App Opened | اختصار يقترح إجراء في تطبيقك (بحذر UX) |
| لمس تاج على المكتب | NFC | بدء تایمر / فتح مشروع |

## 5) قواعد UX مهمة

- لا تفاجئ المستخدم بأتمتة مزعجة؛ اجعلها اختيارية وواضحة
- إذا الأتمتة تغيّر بيانات، أظهر تأكيداً أو سجل نشاط
- اشرح في فيديو الإعداد: التريغر → الأفعال → Ask Before Running
- فرّق في الوثائق بين **ما يفعله النظام** و**ما يفعله تطبيقك**

## 6) ماذا يوثّق الوكيل في الخطوات

عند استخراج خطوات من فيديو أتمتة:

1. فتح Shortcuts → Automation
2. نوع التريغر والقيم المضبوطة (وقت، موقع، اسم التطبيق…)
3. قائمة الأفعال بالترتيب
4. هل Ask Before Running مفعّل؟
5. تجربة التريغر (إن ظهرت في الفيديو) والنتيجة

## 7) حدود تقنية يجب أن يعرفها الوكيل

- بعض التريغرات دائماً تطلب تأكيداً أو لها قيود خلفية
- الموقع يحتاج أذونات Location دقيقة
- NFC يقرأ المعرّف لا محتوى عشوائي معقّد في هذا السياق
- الأتمتة مو بديل كامل لـ push notifications من السيرفر
- للمطور: أفضل تكامل = **App Intents** قوية يستهلكها المستخدم داخل الأتمتة

## 8) مصادر Apple

- [Intro to personal automation](https://support.apple.com/guide/shortcuts/intro-to-personal-automation-apd690170742/ios)
- [Create a new personal automation](https://support.apple.com/guide/shortcuts/create-a-new-personal-automation-apdfbdbd7123/ios)
- [Event triggers](https://support.apple.com/guide/shortcuts/event-triggers-apd932ff833f/ios)
- [Travel triggers](https://support.apple.com/guide/shortcuts/travel-triggers-apd8ebfc4e8e/ios)
- [Setting triggers](https://support.apple.com/guide/shortcuts/setting-triggers-apde31e9638b/ios)
