import React from "react";
import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-background/90" />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 drop-shadow-lg leading-tight">
            פיזיותרפיה שיקומית
            <br />
            <span className="text-2xl md:text-4xl font-light block mt-4">
              למוסדות שיקומיים, מרכזי יום ומע"ש
            </span>
          </h1>
          <p className="text-xl md:text-2xl font-medium max-w-2xl mx-auto drop-shadow-md bg-black/20 backdrop-blur-sm py-2 px-6 rounded-full inline-block mt-4">
            תנועה • תפקוד • אורח חיים
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <Section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
            <h2 className="text-3xl font-serif font-bold text-primary">הרבה יותר מסדרת תרגילים</h2>
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
          <div className="grid grid-cols-1 gap-4">
            {[
              "ניסיון של שנים בעבודה עם אוכלוסיות מורכבות",
              "בניית שגרות תפקוד יומיומיות מותאמות",
              "הדרכת צוותים מקצועית",
              "תכניות אבחון–הטמעה–שימור",
              "מדידה ויעדים תפקודיים"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4 bg-card p-4 rounded-lg shadow-sm border border-border">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                <span className="font-medium text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* The Process - 4 Steps */}
      <Section className="bg-secondary/10 py-16 md:py-24 relative">
         {/* Background Texture */}
         <div className="absolute inset-0 opacity-5 pointer-events-none">
           <Image src="/images/texture-paper-clay.png" alt="texture" fill className="object-cover" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-serif font-bold text-center text-primary mb-16">איך נראה תהליך העבודה?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-background/80 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary font-bold text-xl">1</div>
                <CardTitle className="text-xl font-bold text-primary">אבחון תפקודי</CardTitle>
              </CardHeader>
              <CardContent className="text-foreground/80 text-sm space-y-2">
                <p>• בדיקה מוטורית מלאה</p>
                <p>• הערכת סיכון לנפילות</p>
                <p>• טווחי תנועה, כוח, גמישות</p>
                <p>• הערכה קוגניטיבית-תנועתית</p>
                <p className="font-semibold text-primary mt-2">בניית דוח תפקודי אישי</p>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-background/80 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-4 text-secondary-foreground font-bold text-xl">2</div>
                <CardTitle className="text-xl font-bold text-secondary-foreground">תכנית תנועה</CardTitle>
              </CardHeader>
              <CardContent className="text-foreground/80 text-sm space-y-2">
                <p>• שילוב התרגול בתפקוד יומיומי</p>
                <p>• הפעלת חדר כושר פיזי וקוגניטיבי</p>
                <p>• שילוב גוף נפש</p>
                <p className="font-semibold text-secondary-foreground mt-2">מעקב חודשי על התקדמות</p>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-background/80 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/30 rounded-full flex items-center justify-center mb-4 text-accent-foreground font-bold text-xl">3</div>
                <CardTitle className="text-xl font-bold text-accent-foreground">הדרכת צוותים</CardTitle>
              </CardHeader>
              <CardContent className="text-foreground/80 text-sm space-y-2">
                <p>• העצמת הידע המקצועי</p>
                <p>• קידום תפקוד במשימות יומיומיות</p>
                <p>• עידוד יצירתיות וחשיבה טיפולית</p>
                <p className="font-semibold text-accent-foreground mt-2">מפגשים דו-שבועיים/חודשיים</p>
              </CardContent>
            </Card>

            {/* Step 4 */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-background/80 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary font-bold text-xl">4</div>
                <CardTitle className="text-xl font-bold text-primary">בקרה ושיפור</CardTitle>
              </CardHeader>
              <CardContent className="text-foreground/80 text-sm space-y-2">
                <p>• מדידת יעדים</p>
                <p>• התאמת תכניות</p>
                <p>• שימור הישגים</p>
                <p className="font-semibold text-primary mt-2">תהליך מתמשך של שיפור</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Why It Works */}
      <Section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12">למה זה עובד?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold">מערכת שלמה</h3>
              <p className="opacity-90">השיטה לא תלויה במטפל אחד, אלא יוצרת מערכת של דוחות, שגרות, סדר ותנועה.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto">
                <Activity className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold">תרבות של תפקוד</h3>
              <p className="opacity-90">אנחנו לא רק עושים "טיפול", אלא מייצרים תרבות ארגונית של תפקוד ועצמאות.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto">
                <ClipboardCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold">מניעה ושימור</h3>
              <p className="opacity-90">לא רק שיקום, אלא גם מניעת הידרדרות, הפחתת נפילות והעלאת איכות חיים.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* About & CTA */}
      <Section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">מי אני?</h2>
              <div className="space-y-4 text-lg text-foreground/80">
                <p className="font-bold">פיזיותרפיסטית (M.P.T) עם התמחות בשיקום הוליסטי.</p>
                <p>
                  אני רואה את האדם כמכלול ולא כאבחנה. האבחון מאפשר לי להבין ממה האדם סובל ואיך באמצעות כלים מעולמות השיקום, התנועה והגוף-נפש ניתן לעזור לו לשפר ולשמר את תפקודו.
                </p>
              </div>
            </div>
            <div className="bg-card p-8 rounded-2xl shadow-lg border border-border flex flex-col justify-center items-center text-center">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">איך מתחילים?</h3>
              <p className="text-foreground/80 mb-8">
                שיחת התאמה קצרה (20 דקות) להיכרות והבנת צרכי המסגרת, בדרך לבניית תכנית שעושה שינוי אמיתי.
              </p>
              <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-white text-lg py-6 rounded-full shadow-md">
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
