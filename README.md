# وكيل فيديو الآيفون — Nasser

مستودع يجهّز **Cloud/Cursor Agent** يصنع فيديوهات لتطبيقك على الآيفون، يراجعها بصرياً، ويستخرج منها خطوات واضحة — مع قاعدة معرفة عن **iPhone + Shortcuts + Automation + App Intents**.

## ماذا يسوي الوكيل؟

1. يكتب **Video Brief** قبل التصوير
2. يصوّر أو يستلم فيديو للتطبيق
3. **يشوف الفيديو عدل** (مراجعة بصرية، مو تخمين)
4. يستخرج **خطوات مرقّمة** مع زمن تقريبي
5. يشرح/يصمم تدفقات **Shortcuts** و**Personal Automations** عند الحاجة

## هيكل المشروع

```text
.cursor/skills/iphone-mobile-video-agent/SKILL.md  ← تعليمات الوكيل
docs/iphone/
  01-how-iphone-works.md
  02-shortcuts.md
  03-automation.md
  04-app-intents.md
templates/
  video-brief.md
  steps-from-video.md
  agent-prompt.md
examples/
  sample-task-flow.md
```

## كيف تستخدمه؟

1. افتح محادثة Agent في Cursor على هذا الريبو
2. انسخ برومبت من `templates/agent-prompt.md`
3. حدّد الفيتشير أو أرفق فيديو
4. انتظر: فيديو + مراجعة + خطوات

### مثال سريع

```text
استخدم skill: iphone-mobile-video-agent
أبي فيديو يوضح [الفيتشير]
بعدها راجع الفيديو واستخرج الخطوات
```

## معرفة الآيفون المضمّنة

| ملف | المحتوى |
|-----|---------|
| `01-how-iphone-works.md` | دورة حياة التطبيق، إيماءات، أذونات، مداخل النظام |
| `02-shortcuts.md` | بناء وتشغيل الاختصارات و App Shortcuts |
| `03-automation.md` | Personal Automations وكل أنواع التريغرات |
| `04-app-intents.md` | دليل مطور: AppIntent، Entity، AppShortcutsProvider |

## ملاحظات

- مراجعة الفيديو تعتمد على أداة `videoReview` في بيئة Cursor
- تسجيل الشاشة يعتمد على `RecordScreen` + تفاعل GUI عند توفرها
- لتوليد فيديوهات ترويجية بالـ AI يمكن ربط Higgsfield MCP بعد المصادقة
- ضع كود تطبيقك أو빌د الديمو في نفس البيئة عشان التصوير يكون حقيقي

## للمطورين

إذا تبي تطبيقك يندرج في Siri/Shortcuts، ابدأ من `docs/iphone/04-app-intents.md` ثم صوّر ديمو باستخدام قوالب `templates/`.
