# محفظتي CRM — الأساس

## الحالة
- [x] مخطط قاعدة البيانات (`prisma/schema.prisma`)
- [x] `.env.example`
- [ ] مشروع Next.js، الصفحات العشر، الاستيراد، CRUD، التقارير (لم تُنفَّذ بعد)

## الإعداد
1. أنشئ مشروع Supabase وانسخ روابط الاتصال إلى `.env`.
2. `npx create-next-app@latest . --ts --tailwind --app`
3. `npm i prisma @prisma/client xlsx zod lucide-react`
4. `npx prisma migrate dev --name init`

## معلومات مطلوبة قبل بناء الاحتساب
- قواعد احتساب كل عملية في جوال وبالتل (النسبي، حزم الدقائق، المتكرر وغير المتكرر).
- الأهداف حسب الكوارتر، وأسعار صرف العملات في بالتل.
- ملف Excel للحسابات (للتحقق من أسماء الأعمدة).

## النشر على Render (الجداول مطبّقة مسبقاً في Supabase — لا تستخدم `migrate deploy`)
- Build: `npm install && npm run build` — Start: `npm start`
- متغيرات البيئة (تُضاف في Render فقط): `DATABASE_URL` و`DIRECT_URL` (Session pooler من Supabase) و`APP_PASSWORD`.
- `/` يفتح لوحة التحكم مباشرة؛ الحماية عبر middleware.ts (HTTP Basic، أي اسم مستخدم + APP_PASSWORD).

- أضف أيضاً `TZ=Asia/Hebron` لتطابق الأوقات المعروضة توقيتك.
- لم يُشغَّل `tsc` ولا `next build` ولا أي اختبار بعد (بيئة الإنشاء بلا شبكة): شغّل `npm run lint` أولاً.
