import React from "react";
import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Droplets, Flame, Wind, ShoppingBag } from "lucide-react";

export default function JampaIsrael() {
  const products = [
    {
      category: "שמנים אתריים",
      price: "45 ₪",
      items: ["Rose", "Jasmine", "Frangipani", "Parijat", "Lotus", "Blue Lotus", "Lavender"],
      icon: <Droplets className="w-6 h-6" />,
      color: "bg-rose-100 text-rose-800",
    },
    {
      category: "שמן סנדלווד",
      price: "55 ₪",
      items: ["Sandalwood Pure Essential Oil"],
      icon: <Droplets className="w-6 h-6" />,
      color: "bg-amber-100 text-amber-800",
    },
    {
      category: "בשמים טבעיים",
      price: "70 ₪",
      originalPrice: "85 ₪",
      items: ["Whispering Night", "Island Breeze", "Flower Child", "Pooja Petals", "Fields of Spring"],
      icon: <Wind className="w-6 h-6" />,
      color: "bg-purple-100 text-purple-800",
    },
    {
      category: "קטורות עבודת יד",
      price: "35 ₪",
      originalPrice: "45 ₪",
      items: ["Sandalwood (חבילה של 16)"],
      icon: <Flame className="w-6 h-6" />,
      color: "bg-orange-100 text-orange-800",
    },
    {
      category: "נר טבעי",
      price: "65 ₪",
      items: ["שעוות דבורים, חמאת שיאה, שמן זית ושמן אתרי"],
      icon: <Flame className="w-6 h-6" />,
      color: "bg-yellow-100 text-yellow-800",
    },
    {
      category: "תה אפונת פרפר",
      price: "55 ₪",
      items: ["50 גרם"],
      icon: <Leaf className="w-6 h-6" />,
      color: "bg-blue-100 text-blue-800",
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-background/90" />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-4 drop-shadow-lg tracking-wide">
            JAMPA
          </h1>
          <p className="text-2xl md:text-3xl font-light mb-8 drop-shadow-md tracking-widest uppercase">
            Israel
          </p>
          <p className="text-xl md:text-2xl font-medium max-w-2xl mx-auto drop-shadow-md bg-white/10 backdrop-blur-md py-4 px-8 rounded-full border border-white/20">
            נשימה שמעוררת את הנשמה
          </p>
        </div>
      </section>

      {/* Quote Section */}
      <Section className="bg-background py-16 text-center">
        <div className="container mx-auto px-4">
          <blockquote className="text-2xl md:text-3xl font-serif italic text-primary max-w-3xl mx-auto leading-relaxed">
            "ברוך אתה ה' אלוהינו מלך העולם בורא מיני בשמים"
          </blockquote>
        </div>
      </Section>

      {/* Our Story */}
      <Section className="bg-secondary/10 py-16 md:py-24 relative overflow-hidden">
         {/* Background Texture */}
         <div className="absolute inset-0 opacity-5 pointer-events-none">
           <Image src="/images/texture-paper-clay.png" alt="texture" fill className="object-cover" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
              <h2 className="text-4xl font-serif font-bold text-primary mb-6">הסיפור שלנו</h2>
              <p>
                ג'מפה נולדה מתוך אהבה לטבע, למסורת ולחיבור בין גוף לנפש. אנו יוצרות שמנים אתריים, בשמים וקטורות בעבודת יד, מחומרי גלם טבעיים ואורגניים בלבד.
              </p>
              <p>
                ג'מפה ישראל הוא פרי שיתוף פעולה בין מריאלה (ג'מפה הודו) ובין אור-יה (ג'מפה ישראל).
              </p>
              <div className="bg-background/60 p-6 rounded-xl border-r-4 border-primary italic">
                "בעודי משוטטת בהודו נתקלתי בריחות הכי נעימים שהרחתי בחיי... המוצרים של ג'מפה תמכו בי בתהליך ההחלמה שלי. הריח הוא החיבור לנשמה."
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
      <Section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-center text-primary mb-16">המוצרים שלנו</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-none bg-card shadow-md overflow-hidden">
                <div className={`h-2 w-full ${product.color.split(" ")[0].replace("bg-", "bg-")}`} />
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className={`p-3 rounded-full ${product.color}`}>
                      {product.icon}
                    </div>
                    <div className="text-right">
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through ml-2">
                          {product.originalPrice}
                        </span>
                      )}
                      <span className="text-xl font-bold text-primary">
                        {product.price}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-foreground">{product.category}</h3>
                  
                  <div className="space-y-2">
                    {product.items.map((item, idx) => (
                      <div key={idx} className="flex items-center text-sm text-foreground/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/40 ml-2" />
                        {item}
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full mt-6 bg-transparent border border-primary text-primary hover:bg-primary hover:text-white transition-colors">
                    הוספה לסל <ShoppingBag className="mr-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Values Section */}
      <Section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <Leaf className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <h3 className="text-xl font-bold mb-2">100% טבעי</h3>
              <p className="opacity-80">חומרי גלם אורגניים ואיכותיים בלבד, ללא כימיקלים.</p>
            </div>
            <div className="p-6 border-r border-l border-white/10">
              <Flame className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <h3 className="text-xl font-bold mb-2">עבודת יד</h3>
              <p className="opacity-80">מיוצר באהבה בשיטות מסורתיות עתיקות.</p>
            </div>
            <div className="p-6">
              <Wind className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <h3 className="text-xl font-bold mb-2">חיבור לנשמה</h3>
              <p className="opacity-80">ריחות שמעוררים זכרונות ומרפאים את הנפש.</p>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
