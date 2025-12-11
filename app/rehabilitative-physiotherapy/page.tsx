import React from "react";
import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Users, Activity, ClipboardCheck, ArrowLeft, Phone } from "lucide-react";

export default function RehabilitativePhysiotherapy() {
  return (
    <main className="min-h-screen flex flex-col items-center w-full overflow-x-hidden rtl">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/physio-hero.png"
            alt="Rehabilitative Physiotherapy"
            fill
            className="object-cover opacity-90"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-background/90" />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <h1 className="font-serif font-bold mb-4 drop-shadow-lg">
            פיזיותרפיה שיקומית
          </h1>
          <h2 className="font-serif font-light drop-shadow-lg text-white/90">
            למוסדות שיקומיים, מרכזי יום ומע&quot;ש
          </h2>
          <p className="font-medium max-w-2xl mx-auto drop-shadow-md bg-white/10 backdrop-blur-md py-4 px-8 rounded-full inline-block mt-6 border border-white/20">
            תנועה • תפקוד • אורח חיים
          </p>
        </div>

        {/* Paper texture wave transition */}
        <div className="absolute bottom-0 left-0 w-full h-[60px] z-20" style={{ clipPath: 'polygon(0% 60%, 5% 40%, 10% 55%, 15% 35%, 20% 50%, 25% 30%, 30% 45%, 35% 25%, 40% 40%, 45% 20%, 50% 35%, 55% 15%, 60% 30%, 65% 10%, 70% 25%, 75% 5%, 80% 20%, 85% 0%, 90% 15%, 95% 5%, 100% 10%, 100% 100%, 0% 100%)' }}>
          <Image
            src="/images/texture-paper-clay.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Intro Section */}
      <Section className="py-16 md:py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-foreground leading-relaxed">
            <h2 className="font-serif font-bold text-primary">הרבה יותר מסדרת תרגילים</h2>
            <p>
              פיזיותרפיה שיקומית במוסדות שיקום ומרכזי יום היא תהליך מערכתי שמחבר בין הדייר, הצוות והמרחב היומיומי כדי לייצר שינוי תפקודי אמיתי.
            </p>
            <p>
              הגישה שלי מסתכלת על כל המסגרת כיחידה חיה — בודקת, מנחה, מטמיעה, ומייצרת רצף טיפולי שהופך לתרבות תנועה.
            </p>
            <div className="bg-secondary/20 p-6 rounded-xl border-r-4 border-secondary">
              <p className="font-bold text-secondary-foreground">
                התוצאה: דיירים שמתקדמים, צוות שמרגיש בטוח ומקצועי יותר, ושגרה שתומכת בשיקום מתמשך ולא תלויה באדם אחד.
              </p>
            </div>
          </div>
          <div className="notebook-quote">
            <div className="margin-line" />
            <ul className="space-y-3">
              {[
                "ניסיון של שנים בעבודה עם אוכלוסיות מורכבות",
                "בניית שגרות תפקוד יומיומיות מותאמות",
                "הדרכת צוותים מקצועית",
                "תכניות אבחון–הטמעה–שימור",
                "מדידה ויעדים תפקודיים"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="font-medium text-foreground not-italic">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* The Process - 4 Steps */}
      <Section className="py-16 md:py-24 relative">
         {/* Background Texture - More visible for depth */}
         <div className="absolute inset-0 opacity-30 pointer-events-none">
           <Image src="/images/texture-paper-clay.png" alt="texture" fill className="object-cover" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="font-serif font-bold text-center text-primary mb-16">איך נראה תהליך העבודה?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="notebook-quote">
              <div className="margin-line" />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold not-italic">1</div>
                <h3 className="font-bold text-primary not-italic text-xl">אבחון תפקודי</h3>
              </div>
              <ul className="space-y-2 text-foreground">
                <li className="not-italic">• בדיקה מוטורית מלאה</li>
                <li className="not-italic">• הערכת סיכון לנפילות</li>
                <li className="not-italic">• טווחי תנועה, כוח, גמישות</li>
                <li className="not-italic">• הערכה קוגניטיבית-תנועתית</li>
                <li className="font-semibold text-primary mt-2 not-italic">בניית דוח תפקודי אישי</li>
              </ul>
            </div>

            {/* Step 2 */}
            <div className="notebook-quote">
              <div className="margin-line" />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-secondary/30 rounded-full flex items-center justify-center text-secondary-foreground font-bold not-italic">2</div>
                <h3 className="font-bold text-secondary-foreground not-italic text-xl">תכנית תנועה</h3>
              </div>
              <ul className="space-y-2 text-foreground">
                <li className="not-italic">• שילוב התרגול בתפקוד יומיומי</li>
                <li className="not-italic">• הפעלת חדר כושר פיזי וקוגניטיבי</li>
                <li className="not-italic">• שילוב גוף נפש</li>
                <li className="font-semibold text-secondary-foreground mt-2 not-italic">מעקב חודשי על התקדמות</li>
              </ul>
            </div>

            {/* Step 3 */}
            <div className="notebook-quote">
              <div className="margin-line" />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold not-italic">3</div>
                <h3 className="font-bold text-primary not-italic text-xl">הדרכת צוותים</h3>
              </div>
              <ul className="space-y-2 text-foreground">
                <li className="not-italic">• העצמת הידע המקצועי</li>
                <li className="not-italic">• קידום תפקוד במשימות יומיומיות</li>
                <li className="not-italic">• עידוד יצירתיות וחשיבה טיפולית</li>
                <li className="font-semibold text-primary mt-2 not-italic">מפגשים דו-שבועיים/חודשיים</li>
              </ul>
            </div>

            {/* Step 4 */}
            <div className="notebook-quote">
              <div className="margin-line" />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold not-italic">4</div>
                <h3 className="font-bold text-primary not-italic text-xl">בקרה ושיפור</h3>
              </div>
              <ul className="space-y-2 text-foreground">
                <li className="not-italic">• מדידת יעדים</li>
                <li className="not-italic">• התאמת תכניות</li>
                <li className="not-italic">• שימור הישגים</li>
                <li className="font-semibold text-primary mt-2 not-italic">תהליך מתמשך של שיפור</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Why It Works */}
      <Section className="bg-primary text-primary-foreground py-16 md:py-24 relative overflow-hidden">
        {/* Paper texture overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay">
          <Image src="/images/texture-paper-clay.png" alt="" fill className="object-cover" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-serif font-bold mb-12">למה זה עובד?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="font-bold">מערכת שלמה</h3>
              <p>השיטה לא תלויה במטפל אחד, אלא יוצרת מערכת של דוחות, שגרות, סדר ותנועה.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto">
                <Activity className="w-8 h-8" />
              </div>
              <h3 className="font-bold">תרבות של תפקוד</h3>
              <p>אנחנו לא רק עושים "טיפול", אלא מייצרים תרבות ארגונית של תפקוד ועצמאות.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto">
                <ClipboardCheck className="w-8 h-8" />
              </div>
              <h3 className="font-bold">מניעה ושימור</h3>
              <p>לא רק שיקום, אלא גם מניעת הידרדרות, הפחתת נפילות והעלאת איכות חיים.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* About & CTA */}
      <Section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif font-bold text-primary mb-6">מי אני?</h2>
              <div className="space-y-4 text-foreground">
                <p className="font-bold">פיזיותרפיסטית (M.P.T) עם התמחות בשיקום הוליסטי.</p>
                <p>
                  אני רואה את האדם כמכלול ולא כאבחנה. האבחון מאפשר לי להבין ממה האדם סובל ואיך באמצעות כלים מעולמות השיקום, התנועה והגוף-נפש ניתן לעזור לו לשפר ולשמר את תפקודו.
                </p>
              </div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-border flex flex-col justify-center items-center text-center">
              <h3 className="font-serif font-bold text-foreground mb-4">איך מתחילים?</h3>
              <p className="text-foreground mb-8">
                שיחת התאמה קצרה (20 דקות) להיכרות והבנת צרכי המסגרת, בדרך לבניית תכנית שעושה שינוי אמיתי.
              </p>
              <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-white py-6 rounded-full shadow-md">
                <Phone className="ml-2 w-5 h-5" />
                לקביעת שיחת היכרות
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
