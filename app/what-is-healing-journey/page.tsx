import React from "react";
import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Activity, Heart, Wind, Sparkles, ArrowLeft } from "lucide-react";

export default function WhatIsHealingJourney() {
  return (
    <main className="min-h-screen flex flex-col items-center w-full overflow-x-hidden rtl">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/healing-journey-hero.png"
            alt="Healing Journey Path"
            fill
            className="object-cover opacity-90"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-background/90" />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 drop-shadow-lg">
            איך נראה מסע החלמה?
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto drop-shadow-md">
            תהליך ספירלי של גילוי, הבנה וריפוי דרך ארבעה רבדים עמוקים.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <Section className="bg-background py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-xl text-foreground/80 leading-relaxed">
            תהליך של החלמה הוא תהליך ספירלי שכל הזמן נע רצוא ושוב. המטרה היא ללמוד כלים חזקים שישרתו אותך במסע החיים, בכל פעם שתפגשי כאב או חרדה.
          </p>
        </div>
      </Section>

      {/* The 4 Stages Accordion/Cards */}
      <Section className="bg-secondary/10 py-16 md:py-24 relative">
         {/* Background Texture */}
         <div className="absolute inset-0 opacity-5 pointer-events-none">
           <Image src="/images/texture-paper-clay.png" alt="texture" fill className="object-cover" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            
            {/* Stage 1: Body */}
            <Card className="bg-background/80 backdrop-blur-sm border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <CardHeader className="text-center pb-2">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Activity className="w-8 h-8 text-primary group-hover:text-white" />
                </div>
                <CardTitle className="text-2xl font-serif font-bold text-primary">שלב ראשון: הגוף</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <h4 className="font-bold mb-2 text-foreground/90">מה קורה לי בגוף?</h4>
                <p className="text-sm text-foreground/70 mb-4">
                  קבלת ידע מדוייק על מנגנון הכאב, הקשר לטראומה, חרדות ועייפות.
                </p>
                <p className="text-sm font-semibold text-primary/90 border-t border-primary/10 pt-4">
                  "כשאנחנו יודעות מה קורה לנו בגוף אנחנו מחזירות לעצמנו שליטה, ביטחון וקרקע."
                </p>
              </CardContent>
            </Card>

            {/* Stage 2: Mind/Soul (Nefesh) */}
            <Card className="bg-background/80 backdrop-blur-sm border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <CardHeader className="text-center pb-2">
                <div className="w-16 h-16 mx-auto bg-secondary/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                  <Heart className="w-8 h-8 text-secondary-foreground group-hover:text-secondary-foreground" />
                </div>
                <CardTitle className="text-2xl font-serif font-bold text-secondary-foreground">שלב שני: הנפש</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <h4 className="font-bold mb-2 text-foreground/90">לשחרר ולאמן</h4>
                <p className="text-sm text-foreground/70 mb-4">
                  בירור מנגנוני הגנה וספקות. שחרור ידע ישן ואימון המוח לקבלת החדש.
                </p>
                <p className="text-sm font-semibold text-secondary-foreground/90 border-t border-secondary-foreground/10 pt-4">
                  "אחרי שקיבלתי ידע, אני מתחילה לתרגל תנועה ולאמן את הנפש שלי."
                </p>
              </CardContent>
            </Card>

            {/* Stage 3: Spirit (Ruach) */}
            <Card className="bg-background/80 backdrop-blur-sm border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <CardHeader className="text-center pb-2">
                <div className="w-16 h-16 mx-auto bg-accent/30 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <Wind className="w-8 h-8 text-accent-foreground group-hover:text-accent-foreground" />
                </div>
                <CardTitle className="text-2xl font-serif font-bold text-accent-foreground">שלב שלישי: הרוח</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <h4 className="font-bold mb-2 text-foreground/90">לצלול לעומק</h4>
                <p className="text-sm text-foreground/70 mb-4">
                  חקירת מחשבות ודפוסים עמוקים. הבנה כיצד הם מעצבים את חיינו וכיצד לשנותם.
                </p>
                <p className="text-sm font-semibold text-accent-foreground/90 border-t border-accent-foreground/10 pt-4">
                  "ברוח נמצאים הדפוסים העמוקים וההזדמנות לשינוי שורשי."
                </p>
              </CardContent>
            </Card>

            {/* Stage 4: Soul (Neshama) */}
            <Card className="bg-background/80 backdrop-blur-sm border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <CardHeader className="text-center pb-2">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Sparkles className="w-8 h-8 text-primary group-hover:text-white" />
                </div>
                <CardTitle className="text-2xl font-serif font-bold text-primary">שלב רביעי: הנשמה</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <h4 className="font-bold mb-2 text-foreground/90">מבט חומל וריבוני</h4>
                <p className="text-sm text-foreground/70 mb-4">
                  קבלה עצמית מלאה. מעבר מתודעת קורבן לתודעה יוצרת וריבונית.
                </p>
                <p className="text-sm font-semibold text-primary/90 border-t border-primary/10 pt-4">
                  "הנשמה מבינה שאני יוצרת את החיים ויכולה לשנות אותם בכל עת."
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-card rounded-3xl p-8 md:p-12 shadow-2xl border border-border text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-secondary to-primary" />
            
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              מרגישה שגם את רוצה לעבור את המסע?
            </h3>
            <p className="text-lg text-foreground/80 mb-8">
              אם את רוצה להפוך את חייך לחיים שהיית רוצה, אני מזמינה אותך לשיחת ייעוץ חינם.
              <br />
              בשיחה תוכלי לספר לי בדיוק עם מה את מתמודדת ונמצא את המסגרת המתאימה ביותר עבורך.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-xl px-10 py-8 h-auto rounded-full shadow-lg hover:shadow-xl transition-all w-full sm:w-auto">
                לשיחת ייעוץ חינם לחצי פה
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              השאירי פרטים ואחזור אליך בהקדם.
            </p>
          </div>
        </div>
      </Section>
    </main>
  );
}
