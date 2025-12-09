import React from "react";
import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, ArrowLeft, Sparkles, Anchor, Brain, Sun } from "lucide-react";

export default function MyHealingJourney() {
  return (
    <main className="min-h-screen flex flex-col items-center w-full overflow-x-hidden rtl">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/my-journey-hero.png"
            alt="My Healing Journey Hero"
            fill
            className="object-cover opacity-90"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-background/90" />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 drop-shadow-lg">
            מסע ההחלמה שלי
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto drop-shadow-md">
            מכאב וחרדה לחיבור עמוק וריפוי של הגוף, הנפש, הרוח והנשמה.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
          <svg
            className="relative block w-full h-[50px] text-background"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="fill-current"
            ></path>
          </svg>
        </div>
      </section>

      {/* Who Am I Section */}
      <Section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-primary mb-6">מי אני?</h2>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              שלום, אני <span className="font-bold text-primary">אור-יה לוי</span>. מטפלת ומלווה בתהליכי החלמה בגוף ~ נפש ~ רוח ~ נשמה.
              <br />
              אני רקדנית, פיזיותרפיסטית, חוקרת, מורה ותלמידה של דרך היוגה, חוקרת תודעה ותלמידה של התורה היהודית וחכמת הנסתר.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl rotate-1 hover:rotate-0 transition-transform duration-500">
              <Image
                src="/images/hands-healing-warm.png"
                alt="Healing Hands"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6 text-lg text-foreground/80">
              <p>
                כל אלו יחד הם הכלים בהם השתמשתי במסע ההחלמה שלי, והיום אני מעבירה את הכלים האלו הלאה ללוות אותך במסע ההחלמה שלך.
              </p>
              <p>
                הכלים שיש לי לתת לך מגיעים מעולמות הגוף והתנועה, הנפש והרגש, הרוח והשכל, והנשמה הרוחנית.
              </p>
              <div className="p-6 bg-secondary/20 rounded-xl border-r-4 border-primary mt-8">
                <p className="font-serif text-xl font-bold text-primary mb-2">
                  "אני יודעת מה את עוברת - כי עברתי את המסע בעצמי."
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* The Journey Timeline */}
      <Section className="bg-card py-16 md:py-24 relative overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
           <Image src="/images/texture-paper-clay.png" alt="texture" fill className="object-cover" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-serif font-bold text-center text-primary mb-16">תחנות במסע שלי</h2>
          
          <div className="space-y-24 relative before:absolute before:inset-0 before:ml-5 md:before:mx-auto md:before:w-0.5 before:-translate-x-px md:before:translate-x-0 before:h-full before:bg-gradient-to-b before:from-transparent before:via-primary/30 before:to-transparent">
            
            {/* Childhood */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary text-primary-foreground shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Heart className="w-5 h-5" />
              </div>
              <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-background/80 backdrop-blur-sm border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-serif font-bold text-primary mb-3">הילדות והפחדים</h3>
                  <p className="text-foreground/80">
                    הייתי בת 6 כשההורים שלי התגרשו ואמא שלי חלתה. שם גיליתי את שני הפחדים הכי גדולים שניהלו את חיי - חרדת מוות וחרדת נטישה.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Dance & Study */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-secondary text-secondary-foreground shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Sparkles className="w-5 h-5" />
              </div>
              <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-background/80 backdrop-blur-sm border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-serif font-bold text-primary mb-3">מחול ופסיכולוגיה</h3>
                  <p className="text-foreground/80">
                    בחרתי ללמוד ביולוגיה ופסיכולוגיה כדי לחבר בין הגוף והנפש, והתחלתי לרקוד. הבנתי: "אני נכנסת לשיעור עצובה ויוצאת שמחה." הגוף משפיע על הנפש.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Injury & Realization */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-accent text-accent-foreground shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Anchor className="w-5 h-5" />
              </div>
              <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-background/80 backdrop-blur-sm border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-serif font-bold text-primary mb-3">הפציעה והתובנות</h3>
                  <p className="text-foreground/80">
                    ב-2013 שברתי חוליה בגב. השיקום לימד אותי שהמערכת הרפואית נותנת מענה חלקי, ושהיוגה היא זו שהחזירה אותי לתפקוד. בחרתי בפיזיותרפיה כדי לחבר את המדע עם ההוליסטיקה.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* The Crisis */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-destructive text-destructive-foreground shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Brain className="w-5 h-5" />
              </div>
              <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-background/80 backdrop-blur-sm border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-serif font-bold text-primary mb-3">המשבר הגדול</h3>
                  <p className="text-foreground/80">
                    ב-2017 התפרצה חרדה קשה מלווה בכאבים פיזיים בכל הגוף. הייתי בודדה, חרדתית ותלותית. הבדיקות היו תקינות, אבל הכאב היה אמיתי.
                  </p>
                </CardContent>
              </Card>
            </div>

             {/* The Turning Point */}
             <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary text-primary-foreground shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Sun className="w-5 h-5" />
              </div>
              <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-background/80 backdrop-blur-sm border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-serif font-bold text-primary mb-3">נקודת המפנה</h3>
                  <p className="text-foreground/80">
                    הבנתי שאף אחד לא יתקן אותי. החלטתי לייצר שינוי. יצאתי למסע של 7 שנים בחקר הנפש, המוח, הנשימה והתודעה. הכאבים פחתו, החרדות נרגעו.
                  </p>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </Section>

      {/* Soul Journey & Conclusion */}
      <Section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8 text-lg text-foreground/80 leading-relaxed">
            <h2 className="text-3xl font-serif font-bold text-primary">מסע הנשמה</h2>
            <p>
              המלחמה ב-2023 טרפה את הקלפים. הבנתי שאני לא בכיוון. נכנסתי לרובד עמוק יותר - תורת הסוד, הקבלה, פנימיות התורה. הבנתי שאני לא רק גוף ונפש, אלא גם נשמה.
            </p>
            <p>
              היום אני מבינה שהכאב היה הדרך שלי להתחבר לעצמי. הוא לא "תקלה", הוא חלק ממני שמספר סיפור.
            </p>
            <blockquote className="border-r-4 border-primary pr-6 py-2 italic text-xl text-primary/90 bg-secondary/10 rounded-l-lg">
              "בריאות היא בריאה - אני היוצרת והאחראית הבלעדית לחיי."
            </blockquote>
            <p>
              כשאנחנו לומדים לחבר את כל שכבות התודעה, אנחנו לומדים לרפא את עצמנו משורש הנשמה. עבורי המסע לא נגמר - הוא פשוט מאוחד ומאפשר לי לנוע ולרקוד בתוך התודעה השלמה שהיא אני.
            </p>
          </div>

          {/* Call to Action */}
          <div className="mt-16 bg-primary/5 rounded-3xl p-8 md:p-12 text-center border border-primary/10 shadow-inner">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-4">
              הסיפור שלי נגע בך?
            </h3>
            <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
              אשמח לשמוע איפה זה פגש אותך ולקבל כל שיתוף שעולה לך. אני כאן כדי להקשיב.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 h-auto rounded-full shadow-lg hover:shadow-xl transition-all">
                שתפי אותי בסיפור שלך
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-6 h-auto rounded-full">
                <ArrowLeft className="mr-2 h-5 w-5" />
                חזרה לדף הבית
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
