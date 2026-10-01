# App Intents و App Shortcuts (للمطوّرين)

هذا الملف للمطور اللي يبي تطبيقته تظهر في Siri و Shortcuts و Spotlight والـ Action Button.

## 1) ليش App Intents؟

App Intents تخلّي أفعال وبيانات تطبيقك مفهومة للنظام:

- Siri و Apple Intelligence
- تطبيق Shortcuts والأتمتة
- Spotlight
- Widgets / Controls / Live Activities
- Action Button و Apple Pencil Pro (حسب المنصة)

بدل ما المستخدم يفتح التطبيق ويدوّر، ينفّذ الفعل مباشرة من النظام.

## 2) المكوّنات الأربعة

### App Intent = الفعل (Verb)

```swift
import AppIntents

struct AddTaskIntent: AppIntent {
    static var title: LocalizedStringResource = "Add Task"

    @Parameter(title: "Title")
    var title: String

    static var parameterSummary: some ParameterSummary {
        Summary("Add \(\.$title) to tasks")
    }

    func perform() async throws -> some IntentResult & ProvidesDialog {
        // منطق إضافة المهمة
        return .result(dialog: "تمت إضافة \(title)")
    }
}
```

متطلبات أساسية:

- `title`
- `perform()`
- `@Parameter` للمدخلات
- `parameterSummary` لتجربة Shortcuts أفضل (ومطلوب لتشغيل بعض الأفعال من Spotlight على Mac)

### App Entity = الاسم الديناميكي (Noun)

استخدمها للبيانات المتغيرة: مهمة، مشروع، ملاحظة، منتج…

لازم:

- `id` ثابت يمكن البحث عنه لاحقاً
- `displayRepresentation`
- `EntityQuery` يجاوب على الأقل: ما الكيان لهذا الـ ID؟

اختياري قوي:

- `suggestedEntities()` لاقتراحات Shortcuts
- `EntityStringQuery` للبحث بالاسم
- `IndexedEntity` لفهرسة Spotlight
- `Transferable` لمشاركة صور/ملفات بين التطبيقات

### App Enum = قيم ثابتة

أقسام التنقل، أنواع الفلتر، أوضاع العرض… أي مجموعة معروفة وقت الـ compile.

### App Shortcut = جملة جاهزة للمستخدم

```swift
struct MyAppShortcuts: AppShortcutsProvider {
    static var appShortcuts: [AppShortcut] {
        AppShortcut(
            intent: AddTaskIntent(),
            phrases: [
                "Add a task in \(.applicationName)",
                "أضف مهمة في \(.applicationName)"
            ],
            shortTitle: "Add Task",
            systemImageName: "plus.circle"
        )
    }
}
```

قواعد:

- عبارة Siri **لازم** تتضمن `applicationName`
- حد أقصى تقريباً **10** App Shortcuts لكل تطبيق
- ارفع فقط الأفعال المحورية
- العبارات ذات parameter تولّد اختصارات متعددة عبر القيم المقترحة

## 3) أنماط Intent مفيدة

| البروتوكول / النمط | الاستخدام |
|--------------------|----------|
| `AppIntent` | فعل عام |
| `OpenIntent` | فتح محتوى محدد + foreground |
| `TargetContentProvidingIntent` | تنقل SwiftUI عبر `onAppIntentExecution` |
| `AudioPlaybackIntent` وغيرها من schemas | أفعال نظامية مألوفة لـ Siri |
| `supportedModes = .foreground` | إذا لازم تفتح واجهة التطبيق |

## 4) الاعتماديات `@Dependency`

Queries و Intents غالباً تحتاج قاعدة بيانات أو repository:

1. سجّل الاعتماد مبكراً في دورة حياة التطبيق عبر `AppDependencyManager`
2. احقه بـ `@Dependency` داخل الـ Intent/Query

بدون تسجيل مبكر، الـ perform قد يفشل بصمت أو يرمي خطأ وقت التشغيل.

## 5) ماذا يظهر للمستخدم بعد الدعم؟

بعد تثبيت التطبيق:

1. Shortcuts يعرض أفعال تطبيقك في مكتبه
2. App Shortcuts تظهر في قسم التطبيق وجاهزة لـ Siri
3. المستخدم يركّبها في اختصارات متعددة الخطوات أو أتمتة
4. Spotlight / Action Button يقدران يستدعيان الاختصارات المهيأة

## 6) ربط هذا بفيديوهات المنتج

سيناريوهات فيديو ممتازة بعد دعم App Intents:

1. **Siri:** «أضف مهمة في [اسم التطبيق]»
2. **Shortcuts:** بناء اختصار من فعلين (Intent تطبيقك + Focus)
3. **Automation:** Arrive → تشغيل Intent
4. **Action Button:** تعيين App Shortcut
5. **Spotlight:** تشغيل الفعل من البحث (خصوصاً Mac)

في الخطوات المستخرجة، اذكر هل الفعل **App Shortcut جاهز** أو **اختصار بناه المستخدم**.

## 7) قائمة تحقق للمطور قبل تصوير الديمو

- [ ] Intent له عنوان ووصف واضحين بالعربية/الإنجليزية حسب السوق
- [ ] Parameter Summary يقرأ كجملة
- [ ] القيم الافتراضية/الاقتراحات تظهر في الـ picker
- [ ] Dialog أو View Snippet للنتيجة إذا التطبيق ما ينفتح
- [ ] App Shortcut phrases مختبرة صوتياً
- [ ] الأذونات تظهر بشكل متوقع أول تشغيل
- [ ] فشل الحالات (شبكة، فارغ، بدون حساب) له رسالة مفهومة

## 8) مصادر WWDC / Docs

- [App Intents documentation](https://developer.apple.com/documentation/appintents)
- [App Shortcuts](https://developer.apple.com/documentation/appintents/app-shortcuts)
- [WWDC25: Get to know App Intents](https://developer.apple.com/videos/play/wwdc2025/244/)
- [WWDC22: Implement App Shortcuts with App Intents](https://developer.apple.com/videos/play/wwdc2022/10170/)
