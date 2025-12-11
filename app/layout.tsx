import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, Facebook, Instagram } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export const metadata: Metadata = {
  title: "Or-yah Levi - Health is Creation",
  description: "פיזיותרפיסטית שיקומית ומלווה בתהליכי החלמה בגוף ~ נפש ~ רוח ~ נשמה",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navItems = [
    { name: "דף הבית", href: "/" },
    { name: "מסע ההחלמה שלי", href: "/my-healing-journey" },
    { name: "מהו מסע החלמה?", href: "/what-is-healing-journey" },
    { name: "פיזיותרפיה שיקומית", href: "/rehabilitative-physiotherapy" },
    { name: "JAMPA ישראל", href: "/jampa-israel" },
  ];

  return (
    <html lang="he" dir="rtl">
      <body className={cn(
        "min-h-screen bg-background antialiased"
      )}>
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-20 items-center justify-between px-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-16 h-16 overflow-hidden rounded-full border border-primary/20">
                 <Image src="/logo.png" alt="Logo" fill className="object-cover" />
              </div>
              <span className="font-serif font-bold text-primary text-2xl hidden sm:inline-block">
                אור-יה לוי
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-medium text-foreground transition-colors hover:text-primary hover:underline underline-offset-4"
                >
                  {item.name}
                </Link>
              ))}
              <Button size="sm" className="bg-primary text-white hover:bg-primary/90 rounded-full px-6">
                צור קשר
              </Button>
            </nav>

            {/* Mobile Navigation */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">תפריט</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="font-medium text-foreground transition-colors hover:text-primary"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Button className="mt-4 bg-primary text-white hover:bg-primary/90 w-full">
                    צור קשר
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </header>
        
        {children}

        <footer className="bg-secondary/20 border-t border-border mt-auto">
          <div className="container py-12 px-4 text-center md:text-start">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <div className="flex flex-col items-center md:items-start gap-3">
                  <div className="relative w-20 h-20 overflow-hidden rounded-full border border-primary/20">
                    <Image src="/logo.png" alt="Logo" fill className="object-cover" />
                  </div>
                  <h4 className="font-serif font-bold text-primary text-xl">אור-יה לוי</h4>
                </div>
                <p className="text-foreground">
                  מלווה בתהליכי החלמה בגוף, נפש, רוח ונשמה.
                  פיזיותרפיסטית שיקומית ומורה ליוגה.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-foreground">ניווט מהיר</h4>
                <ul className="space-y-2 text-foreground text-base">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="hover:text-primary transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-foreground">צור קשר</h4>
                <ul className="space-y-2 text-foreground text-base">
                  <li>טלפון: {process.env.NEXT_PUBLIC_PHONE}</li>
                  <li>אימייל: {process.env.NEXT_PUBLIC_CONTACT_EMAIL}</li>
                  <li>קליניקה: פרדס חנה / תל אביב</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-foreground">עקבו אחרי</h4>
                <div className="flex gap-4 justify-center md:justify-start">
                  <a
                    href="https://www.facebook.com/groups/376689378656252"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.instagram.com/health_is_creation/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-border/50 text-center text-foreground">
              © {new Date().getFullYear()} אור-יה לוי. כל הזכויות שמורות.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
