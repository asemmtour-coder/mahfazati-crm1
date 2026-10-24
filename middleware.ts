import { NextRequest, NextResponse } from 'next/server'
// حماية بسيطة على مستوى الخادم (HTTP Basic) لكل الصفحات وإجراءات الخادم.
// المستخدم: أي اسم. كلمة المرور: APP_PASSWORD من متغيرات البيئة (تُضبط في Render فقط).
export function middleware(req: NextRequest) {
  const pass = process.env.APP_PASSWORD
  if (!pass) {
    if (process.env.NODE_ENV === 'production') return new NextResponse('APP_PASSWORD غير مضبوط: الوصول مغلق.', { status: 503 })
    return NextResponse.next()
  }
  const h = req.headers.get('authorization') ?? ''
  if (h.startsWith('Basic ')) {
    try { const given = atob(h.slice(6)).split(':').slice(1).join(':'); if (given === pass) return NextResponse.next() } catch {}
  }
  return new NextResponse('مطلوب تسجيل الدخول', { status: 401, headers: { 'WWW-Authenticate': 'Basic realm="Mahfazati CRM", charset="UTF-8"' } })
}
export const config = { matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'] }
