# حط الفيديو هنا — inbox

هذا المجلد لاستلام فيديوهات التطبيق عشان الوكيل يراجعها ويستخرج الخطوات.

## أسهل طريقة (موصى بها): رابط تحميل مباشر

1. ارفع الفيديو على أحد هالخدمات:
   - Google Drive (خلّي المشاركة: Anyone with the link)
   - Dropbox
   - WeTransfer
   - iCloud Link
   - YouTube Unlisted / Streamable
2. انسخ الرابط وابعثه في الشات كذا:

```text
استخدم skill: iphone-mobile-video-agent
رابط الفيديو: https://...
راجعه واستخرج الخطوات
```

الوكيل يحمّل الفيديو ويراجعه.

## طريقة 2: GitHub Release / ملف في الريبو

إذا الفيديو صغير نسبياً (يفضّل تحت 50MB):

1. ارفعه كـ Release asset في GitHub، أو
2. ضعه في هذا المسار ثم ادفعه:

```text
inbox/videos/my-feature-demo.mp4
```

بعدين اكتب في الشات:

```text
راجع الفيديو: inbox/videos/my-feature-demo.mp4
واستخرج الخطوات
```

> تجنّب رفع فيديوهات ضخمة على git العادي. استخدم رابط أو Release.

## طريقة 3: Cursor Desktop

من تطبيق Cursor على الجهاز:

1. افتح نفس المشروع
2. اسحب الفيديو للمجلد `inbox/videos/`
3. اكتب للـ Agent: راجع `inbox/videos/اسم-الملف.mp4`

## صيغ مدعومة

`.mp4` · `.mov` · `.webm` · `.m4v`

## تسمية مقترحة

```text
inbox/videos/add_task_demo.mp4
inbox/videos/shortcuts_automation_arrive_home.mov
```
