"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { ContactForm } from "@/components/ContactForm";
import { ArrowLeft, Heart, Leaf, Phone, Star } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <main>
        {/* HERO SECTION */}
        <Section className="min-h-[90vh] flex items-center relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-earth-roots.png"
              alt="Meditation and Healing"
              fill
              className="object-cover opacity-90 scale-x-[-1]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-l from-background/90 via-background/40 to-transparent" />
          </div>
          
          <div className="container relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="space-y-6 max-w-2xl"
            >
              <motion.h1 variants={fadeIn} className="font-bold text-primary leading-tight">
                אור-יה לוי
              </motion.h1>
              <motion.h2 variants={fadeIn} className="font-serif text-foreground leading-relaxed text-[2rem]">
                פיזיותרפיסטית שיקומית ומלווה בתהליכי החלמה בגוף ~ נפש ~ רוח ~ נשמה
              </motion.h2>
              <motion.p variants={fadeIn} className="text-muted-foreground border-r-4 border-primary pr-4">
                החלמה מכאבים כרוניים, חרדות ותסמיני פוסט טראומה
              </motion.p>
              <motion.div variants={fadeIn} className="pt-4">
                <Button size="lg" className="px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                  התחילי את המסע שלך
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Paper texture wave at bottom */}
          <div className="absolute bottom-0 left-0 w-full h-[60px] z-20" style={{ clipPath: 'polygon(0% 60%, 5% 40%, 10% 55%, 15% 35%, 20% 50%, 25% 30%, 30% 45%, 35% 25%, 40% 40%, 45% 20%, 50% 35%, 55% 15%, 60% 30%, 65% 10%, 70% 25%, 75% 5%, 80% 20%, 85% 0%, 90% 15%, 95% 5%, 100% 10%, 100% 100%, 0% 100%)' }}>
            <Image
              src="/images/texture-paper-clay.png"
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </Section>

        {/* ABOUT SECTION */}
        <Section id="about" className="overflow-hidden">
          <div className="container grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] w-full">
              <div className="absolute -inset-4 bg-primary/20 rounded-full blur-3xl opacity-50" />
              <Image
                src="/images/hands-healing-warm.png"
                alt="Healing Hands"
                fill
                className="relative rounded-2xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 object-cover"
              />
            </div>

            <div className="space-y-8">
              <h2 className="font-bold text-primary">נעים להכיר, אני אור-יה</h2>
              <div className="space-y-6 leading-relaxed text-black">
                <p>
                  אני אור-יה, פיזיותרפיסטית שיקומית, מורה ליוגה, רקדנית ותלמידה של תורת הסוד והקבלה.
                </p>
                <p>
                  אני יוצרת ומלווה מסעות החלמה המשלבים גוף, נפש, רוח ונשמה לאנשים ונשים הסובלים מכאבים כרוניים, חרדות ותסמיני טראומה.
                </p>
                <p>
                  מתוך סיפור ההחלמה שלי ומתוך שנים של פיזיותרפיה שיקומית, פיתחתי שיטות לתהליכי ריפוי בתחומי הגוף והנפש.
                </p>
              </div>

              <div className="notebook-quote">
                <div className="margin-line" />
                <p>&quot;עבודתי נועדה להזכיר לכל אדם את היכולת הפנימית שלו להשתנות, להתאזן וליצור חיים מחודשים מבפנים.&quot;</p>
              </div>
            </div>
          </div>
        </Section>

        {/* SPIRAL NAVIGATION / CORE VALUES */}
        <Section variant="alt" tornTop tornBottom className="text-center">
          <div className="container">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="font-bold text-primary mb-12">בריאה - HEALTH IS CREATION</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { title: "מסע ההחלמה שלי", icon: <Heart className="w-8 h-8" /> },
                  { title: "מהו מסע החלמה", icon: <Leaf className="w-8 h-8" /> },
                  { title: "פיזיותרפיה שיקומית", icon: <Star className="w-8 h-8" /> },
                ].map((item, i) => (
                  <Card key={i} className="bg-background/50 border-none shadow-md hover:shadow-lg transition-all cursor-pointer group">
                    <CardContent className="p-8 flex flex-col items-center gap-4">
                      <div className="p-4 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        {item.icon}
                      </div>
                      <h3 className="font-serif font-bold">{item.title}</h3>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-12 flex flex-wrap justify-center gap-4 text-muted-foreground">
                <span className="px-4 py-2 bg-muted rounded-full">הספרייה (בקרוב)</span>
                <span className="px-4 py-2 bg-muted rounded-full">קורסים אונליין (בקרוב)</span>
                <span className="px-4 py-2 bg-muted rounded-full">JAMPA - ישראל</span>
              </div>
            </motion.div>
          </div>
        </Section>

        {/* PRIMARY SERVICE */}
        <Section id="services" variant="primary" tornTop tornBottom>
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="font-bold mb-6">ליווי אישי</h2>
              <p className="">
                מתמודד\ת עם כאבים כרוניים במשך חודשים עד שנים?
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="px-8 border-r-4 border-white/50">
                  <p className="leading-relaxed mb-6">
                    אם שמעת את המשפטים &quot;אין לך כלום&quot;, &quot;זה רק בראש שלך&quot;, &quot;אין לזה תרופה&quot;, או &quot;לעולם לא תחלימי - תלמדי לחיות עם זה&quot; - אני רוצה להחזיר לך את התקווה והאמונה.
                  </p>
                  <p className="font-bold text-white">
                    זה לא בראש שלך, הכאב הוא אמיתי, ויש לך אפשרות להחלים ממנו.
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <h3 className="font-bold">אנחנו מטפלים ב:</h3>
                  <div className="flex flex-wrap gap-2">
                    {["פיברומיאלגיה", "כאבים כרוניים", "תסמיני פוסט טראומה", "כאבי גב", "כאבי אגן"].map((tag) => (
                      <span key={tag} className="px-4 py-2 bg-white rounded-lg shadow-sm border border-primary/20 text-primary font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <Button size="lg" className="w-full md:w-auto px-8 py-6 rounded-full bg-white text-primary hover:bg-white/90">
                  לשיחת ייעוץ חינם לחצי פה
                </Button>
                <p className="">
                  בשיחת ייעוץ תוכלי לספר לי בדיוק עם מה את מתמודדת ונמצא את המסגרת המתאימה ביותר עבורך.
                </p>
              </div>

              <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image 
                  src="/images/roots-illustration.png" 
                  alt="Roots Illustration" 
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-8">
                  <p className="text-white font-serif font-bold">
                    &quot;הם לא גזרת גורל לנצח ואפשר להחלים מהם!&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* TESTIMONIALS */}
        <Section id="testimonials" className="bg-[url('/images/texture-paper-clay.png')]">
          <div className="container">
            <h2 className="font-bold text-center mb-16 text-primary">עדויות ומילים חמות</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "רונית",
                  title: "צמיחה מתוך הקושי",
                  text: "הגעתי לאוריה בתקופה שהרגשתי שהחיים קצת סוגרים עליי... עברתי בתוך המקומות הכי עמוקים וכואבים ובעזרת אוריה הבנתי את הדברים בצורה אחרת... ומתוך הקושי צמחו כוחות נפש חזקים."
                },
                {
                  name: "ענת",
                  title: "גשר בין הגוף ללב",
                  text: "אוריה מצליחה לראות... את הקשר שבין התרגול הפיזי לעולם הרוחני והרגשי... היא לימדה אותי לחוות יוגה כנקודת משען, כמקום שמלווה ותומך את כל השינויים שקורים בחיי."
                },
                {
                  name: "אור",
                  title: "מחרדה וכאב אל שקט",
                  text: "התהליך נתן לי כוחות קודם כל להתמודד מול ההתקפי חרדה... הבנתי שעם טיפול נכון יש הקלה בכאבים ואהבה עצמית בלי שיפוטיות למצבי."
                }
              ].map((t, i) => (
                <Card key={i} className="bg-white/80 backdrop-blur-sm border-none shadow-lg hover:-translate-y-2 transition-transform duration-300">
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="mb-6 text-primary">
                      <Star className="w-6 h-6 inline-block fill-current" />
                      <Star className="w-6 h-6 inline-block fill-current" />
                      <Star className="w-6 h-6 inline-block fill-current" />
                      <Star className="w-6 h-6 inline-block fill-current" />
                      <Star className="w-6 h-6 inline-block fill-current" />
                    </div>
                    <h3 className="font-bold mb-4">{t.title}</h3>
                    <p className="text-muted-foreground leading-relaxed flex-grow mb-6">&quot;{t.text}&quot;</p>
                    <div className="font-bold text-primary border-t border-primary/10 pt-4">
                      {t.name}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        {/* CONTACT FORM */}
        <Section id="contact" variant="alt" tornTop>
          <div className="container max-w-4xl">
            <Card className="overflow-hidden shadow-2xl border-none">
              <div className="grid md:grid-cols-2">
                <div className="bg-primary p-12 text-primary-foreground flex flex-col justify-between">
                  <div>
                    <h2 className="font-bold mb-6">בואי נדבר</h2>
                    <p className="opacity-90 mb-8">
                      השאירי פרטים ואחזור אליך לשיחת ייעוץ חינם בהקדם.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5" />
                      <span>{process.env.NEXT_PUBLIC_PHONE}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <ArrowLeft className="w-5 h-5" />
                      <span>{process.env.NEXT_PUBLIC_CONTACT_EMAIL}</span>
                    </div>
                  </div>
                </div>

                <div className="p-12 bg-white">
                  <ContactForm />
                </div>
              </div>
            </Card>
          </div>
        </Section>

        {/* SECONDARY SERVICES */}
        <Section className="bg-muted/30">
          <div className="container">
            <h2 className="font-bold text-center mb-12">דרכים נוספות שבהן אני עובדת</h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-8 flex items-start gap-6">
                  <div className="bg-primary/10 p-4 rounded-full text-primary shrink-0">
                    <Leaf className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">ליווי למוסדות שיקומיים</h3>
                    <p className="text-muted-foreground mb-4">
                      שיטה שרואה את המוסד בצורה הוליסטית ומייצרת שיפור ותהליכי עומק לדיירים.
                    </p>
                    <span className="text-primary font-medium flex items-center gap-2 group">
                      למידע נוסף <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    </span>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-8 flex items-start gap-6">
                  <div className="bg-primary/10 p-4 rounded-full text-primary shrink-0">
                    <Heart className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">JAMPA Israel - כלים מרפאים</h3>
                    <p className="text-muted-foreground mb-4">
                      שמנים אתריים, קטורות וריחות שמעוררים את הנשמה.
                    </p>
                    <span className="text-primary font-medium flex items-center gap-2 group">
                      לחנות <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Section>

        {/* FOOTER / CLOSING QUOTE */}
        <footer className="bg-primary text-primary-foreground py-24 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('/images/roots-illustration.png')] bg-cover bg-center mix-blend-overlay" />
          <div className="container relative z-10 max-w-3xl mx-auto px-6">
            <blockquote className="font-serif font-bold leading-relaxed mb-12">
              &quot;וּבְרֶגַע שֶׁהָאָדָם זוֹכֵר אֶת אוֹרוֹ – הַדֶּרֶךְ נִפְתַּחַת לְפָנָיו כְּאִלּוּ מֵעוֹלָם חִכְּתָה לוֹ.&quot;
            </blockquote>
            <div className="flex justify-center gap-8">
              <a href="#" className="hover:underline">מדיניות פרטיות</a>
              <a href="#" className="hover:underline">הצהרת נגישות</a>
              <span>© 2025 אור-יה לוי</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
