import React from "react";
import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Leaf, Flame, Wind, ShoppingBag, Check } from "lucide-react";

export default function JampaIsrael() {
  const products = [
    {
      category: "שמנים אתריים",
      price: "45 ₪",
      items: ["Rose", "Jasmine", "Frangipani", "Parijat", "Lotus", "Blue Lotus", "Lavender"],
    },
    {
      category: "שמן סנדלווד",
      price: "55 ₪",
      items: ["Sandalwood Pure Essential Oil"],
    },
    {
      category: "בשמים טבעיים",
      price: "70 ₪",
      originalPrice: "85 ₪",
      items: ["Whispering Night", "Island Breeze", "Flower Child", "Pooja Petals", "Fields of Spring"],
    },
    {
      category: "קטורות עבודת יד",
      price: "35 ₪",
      originalPrice: "45 ₪",
      items: ["Sandalwood (חבילה של 16)"],
    },
    {
      category: "נר טבעי",
      price: "65 ₪",
      items: ["שעוות דבורים, חמאת שיאה, שמן זית ושמן אתרי"],
    },
    {
      category: "תה אפונת פרפר",
      price: "55 ₪",
      items: ["50 גרם"],
    },
  ];

  return (
    <main className="min-h-screen flex flex-col items-center w-full overflow-x-hidden rtl">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/jampa-hero.png"
            alt="JAMPA Israel Hero"
            fill
            className="object-cover opacity-90"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-background/90" />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="font-serif font-bold mb-4 drop-shadow-lg tracking-wide">
            JAMPA
          </h1>
          <p className="font-light mb-8 drop-shadow-md tracking-widest uppercase">
            Israel
          </p>
          <p className="font-medium max-w-2xl mx-auto drop-shadow-md bg-white/10 backdrop-blur-md py-4 px-8 rounded-full border border-white/20">
            נשימה שמעוררת את הנשמה
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

      {/* Quote Section */}
      <Section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <blockquote className="font-serif italic text-primary max-w-3xl mx-auto leading-relaxed text-2xl md:text-3xl">
            "ברוך אתה ה' אלוהינו מלך העולם בורא מיני בשמים"
          </blockquote>
        </div>
      </Section>

      {/* Our Story */}
      <Section className="py-16 md:py-24 relative overflow-hidden">
         {/* Background Texture - More visible for depth */}
         <div className="absolute inset-0 opacity-30 pointer-events-none">
           <Image src="/images/texture-paper-clay.png" alt="texture" fill className="object-cover" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-foreground leading-relaxed">
              <h2 className="font-serif font-bold text-primary mb-6">הסיפור שלנו</h2>
              <p>
                ג'מפה נולדה מתוך אהבה לטבע, למסורת ולחיבור בין גוף לנפש. אנו יוצרות שמנים אתריים, בשמים וקטורות בעבודת יד, מחומרי גלם טבעיים ואורגניים בלבד.
              </p>
              <p>
                ג'מפה ישראל הוא פרי שיתוף פעולה בין מריאלה (ג'מפה הודו) ובין אור-יה (ג'מפה ישראל).
              </p>
              <div className="notebook-quote">
                <div className="margin-line" />
                <p>"בעודי משוטטת בהודו נתקלתי בריחות הכי נעימים שהרחתי בחיי... המוצרים של ג'מפה תמכו בי בתהליך ההחלמה שלי. הריח הוא החיבור לנשמה."</p>
              </div>
              <p className="font-bold text-primary">
                הבנתי שהמוצרים האלה חייבים להגיע אלינו לישראל, והנה הם כאן עבורכם.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg translate-y-8">
                  <Image src="/images/jampa-hero.png" alt="Incense" fill className="object-cover" />
               </div>
               <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg -translate-y-8">
                  <Image src="/images/hero-earth-roots.png" alt="Oils" fill className="object-cover" />
               </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Products Grid */}
      <Section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-serif font-bold text-center text-primary mb-16">המוצרים שלנו</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-3 bg-white"
              >
                <div className="bg-primary/10 rounded-xl p-6 pt-12 relative">
                  {/* Price badge - positioned on the left for RTL */}
                  <div className="absolute top-0 left-0 bg-secondary rounded-l-none rounded-r-full flex items-center py-3 px-5 font-bold text-lg text-secondary-foreground">
                    {product.originalPrice && (
                      <span className="text-secondary-foreground/60 line-through text-base ml-2">
                        {product.originalPrice}
                      </span>
                    )}
                    <span>{product.price}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-xl text-foreground mb-4">{product.category}</h3>

                  {/* Items list */}
                  <ul className="space-y-3 mb-6">
                    {product.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                        <span className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-white" />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-lg py-3">
                    <ShoppingBag className="ml-2 w-4 h-4" />
                    הוספה לסל
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Values Section */}
      <Section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <Leaf className="w-12 h-12 mx-auto mb-4" />
              <h3 className="font-bold mb-2">100% טבעי</h3>
              <p>חומרי גלם אורגניים ואיכותיים בלבד, ללא כימיקלים.</p>
            </div>
            <div className="p-6 border-r border-l border-white/10">
              <Flame className="w-12 h-12 mx-auto mb-4" />
              <h3 className="font-bold mb-2">עבודת יד</h3>
              <p>מיוצר באהבה בשיטות מסורתיות עתיקות.</p>
            </div>
            <div className="p-6">
              <Wind className="w-12 h-12 mx-auto mb-4" />
              <h3 className="font-bold mb-2">חיבור לנשמה</h3>
              <p>ריחות שמעוררים זכרונות ומרפאים את הנפש.</p>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
