import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { Mail, Smartphone, Heart, Sparkles, Calendar, Bell, Globe } from "lucide-react";
import heroImage from "@/assets/vestiary-hero.jpg";

export const VestiaryLanding = () => {
  const [email, setEmail] = useState("");
  const [language, setLanguage] = useState<"de" | "en">("de");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  // TODO: Trage hier deine Zapier Webhook URL ein
  // Erstelle einen Zap mit "Catch Hook" Trigger bei Zapier.com
  const ZAPIER_WEBHOOK_URL = "";

  const handleEmailSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      toast({
        title: translations[language].emailRequired,
        description: translations[language].emailRequiredDesc,
        variant: "destructive",
      });
      return;
    }

    if (!ZAPIER_WEBHOOK_URL) {
      toast({
        title: language === "de" ? "Webhook nicht konfiguriert" : "Webhook not configured",
        description: language === "de" 
          ? "Bitte trage die Zapier Webhook URL im Code ein." 
          : "Please add the Zapier Webhook URL in the code.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    console.log("Sending email to Zapier:", email);

    try {
      await fetch(ZAPIER_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({
          email: email,
          language: language,
          timestamp: new Date().toISOString(),
          source: "vestiary-landing",
        }),
      });

      toast({
        title: translations[language].signupSuccess,
        description: translations[language].signupSuccessDesc,
      });
      setEmail("");
    } catch (error) {
      console.error("Error sending to Zapier:", error);
      toast({
        title: language === "de" ? "Fehler" : "Error",
        description: language === "de"
          ? "Es gab ein Problem bei der Anmeldung. Bitte versuche es später erneut."
          : "There was a problem with the signup. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const translations = {
    de: {
      appTitle: "Vestiary",
      comingSoon: "Demnächst",
      heroTitle: "Ihre Garderobe,",
      heroSubtitle: "neu gedacht",
      heroDescription: "Die intelligente Kleiderschrank-App, die Ihnen hilft, atemberaubende Outfits zu kreieren, Ihre Kleidung zu organisieren und Ihren perfekten Stil zu entdecken.",
      emailPlaceholder: "Ihre E-Mail",
      notifyMe: "Benachrichtigen",
      joinText: "Schließen Sie sich 5.000+ Mode-Enthusiasten an, die auf den Launch warten",
      howItWorks: "Wie Vestiary funktioniert",
      howItWorksDesc: "Drei einfache Schritte, um Ihr Kleiderschrank-Erlebnis zu transformieren",
      addClothes: "Kleidung hinzufügen",
      addClothesDesc: "Fotografieren Sie Ihre Kleidungsstücke oder importieren Sie sie aus Ihrer Fotobibliothek. Vestiary kategorisiert automatisch alles.",
      createOutfits: "Outfits erstellen",
      createOutfitsDesc: "Kombinieren Sie Ihre Stücke zu atemberaubenden Outfits. Speichern Sie Ihre Favoriten und erhalten Sie KI-gestützte Styling-Vorschläge.",
      trackDiscover: "Verfolgen & Entdecken",
      trackDiscoverDesc: "Sehen Sie, was Sie am meisten tragen, entdecken Sie vergessene Stücke und erhalten Sie personalisierte Empfehlungen basierend auf Ihrem Stil.",
      faqTitle: "Häufig gestellte Fragen",
      faqDesc: "Alles, was Sie über Vestiary wissen müssen",
      latestUpdates: "Neueste Updates",
      latestUpdatesDesc: "Bleiben Sie über den Entwicklungsfortschritt von Vestiary informiert",
      emailRequired: "Bitte geben Sie Ihre E-Mail-Adresse ein",
      emailRequiredDesc: "Wir benötigen Ihre E-Mail-Adresse, um Sie zu benachrichtigen, wenn Vestiary bereit ist!",
      signupSuccess: "Vielen Dank für Ihre Anmeldung!",
      signupSuccessDesc: "Wir werden Sie benachrichtigen, sobald Vestiary im App Store verfügbar ist.",
      privacyPolicy: "Datenschutz",
      termsOfService: "Nutzungsbedingungen",
      contactUs: "Kontakt",
      footerDesc: "Revolutioniert die Art, wie Sie mit Ihrer Garderobe interagieren"
    },
    en: {
      appTitle: "Vestiary",
      comingSoon: "Coming Soon",
      heroTitle: "Your wardrobe,",
      heroSubtitle: "reimagined",
      heroDescription: "The intelligent wardrobe app that helps you create stunning outfits, organize your clothes, and discover your perfect style.",
      emailPlaceholder: "Enter your email",
      notifyMe: "Notify Me",
      joinText: "Join 5,000+ fashion enthusiasts waiting for launch",
      howItWorks: "How Vestiary Works",
      howItWorksDesc: "Three simple steps to transform your wardrobe experience",
      addClothes: "Add Your Clothes",
      addClothesDesc: "Snap photos of your wardrobe items or import from your photo library. Vestiary automatically categorizes everything.",
      createOutfits: "Create Outfits",
      createOutfitsDesc: "Mix and match your pieces to create stunning outfits. Save your favorites and get AI-powered styling suggestions.",
      trackDiscover: "Track & Discover",
      trackDiscoverDesc: "See what you wear most, discover forgotten pieces, and get personalized recommendations based on your style.",
      faqTitle: "Frequently Asked Questions",
      faqDesc: "Everything you need to know about Vestiary",
      latestUpdates: "Latest Updates",
      latestUpdatesDesc: "Stay informed about Vestiary's development progress",
      emailRequired: "Please enter your email",
      emailRequiredDesc: "We need your email to notify you when Vestiary is ready!",
      signupSuccess: "Thank you for signing up!",
      signupSuccessDesc: "We'll notify you as soon as Vestiary is available on the App Store.",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      contactUs: "Contact Us",
      footerDesc: "Revolutionizing how you interact with your wardrobe"
    }
  };

  const faqs = {
    de: [
      {
        question: "Was ist Vestiary?",
        answer: "Vestiary ist Ihr persönlicher Kleiderschrank-Assistent, der Ihnen hilft, Ihre Kleidungssammlung zu organisieren, zu stylen und optimal zu nutzen. Erstellen Sie Outfits, verfolgen Sie, was Sie tragen, und entdecken Sie neue Kombinationen."
      },
      {
        question: "Wann wird die App verfügbar sein?",
        answer: "Wir setzen den letzten Schliff an Vestiary und erwarten den Launch im App Store Anfang 2025. Melden Sie sich für Updates an, um als Erster informiert zu werden!"
      },
      {
        question: "Wird es kostenlos sein?",
        answer: "Vestiary wird einen kostenlosen Plan mit Grundfunktionen haben, plus Premium-Abonnement-Optionen für erweiterte Styling-Tools und unbegrenzte Outfit-Speicherung."
      },
      {
        question: "Welche Geräte werden unterstützt?",
        answer: "Wir starten zuerst mit iOS, Android-Unterstützung folgt kurz darauf. Die App ist für iPhone und iPad optimiert."
      }
    ],
    en: [
      {
        question: "What is Vestiary?",
        answer: "Vestiary is your personal wardrobe assistant that helps you organize, style, and make the most of your clothing collection. Create outfits, track what you wear, and discover new combinations."
      },
      {
        question: "When will the app be available?",
        answer: "We're putting the finishing touches on Vestiary and expect to launch on the App Store in early 2025. Sign up for updates to be the first to know!"
      },
      {
        question: "Will it be free?",
        answer: "Vestiary will have a free tier with basic features, plus premium subscription options for advanced styling tools and unlimited outfit saves."
      },
      {
        question: "What devices will be supported?",
        answer: "We're launching on iOS first, with Android support coming shortly after. The app is optimized for both iPhone and iPad."
      }
    ]
  };

  const tutorialSteps = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: translations[language].addClothes,
      description: translations[language].addClothesDesc
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: translations[language].createOutfits,
      description: translations[language].createOutfitsDesc
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: translations[language].trackDiscover,
      description: translations[language].trackDiscoverDesc
    }
  ];

  const newsItems = {
    de: [
      {
        date: "Dez 2024",
        title: "Beta-Tests abgeschlossen",
        description: "Wir haben unsere Beta-Test-Phase mit fantastischem Feedback von frühen Nutzern abgeschlossen. Finaler Feinschliff läuft!"
      },
      {
        date: "Nov 2024",
        title: "KI-Styling-Engine verbessert",
        description: "Unsere KI bietet jetzt noch bessere Outfit-Vorschläge basierend auf Wetter, Anlass und Ihren persönlichen Stil-Präferenzen."
      },
      {
        date: "Okt 2024",
        title: "Pre-Launch-Community wächst",
        description: "Über 5.000 Mode-Enthusiasten haben sich auf unsere Warteliste eingetragen. Danke für Ihre Begeisterung und Geduld!"
      }
    ],
    en: [
      {
        date: "Dec 2024",
        title: "Beta Testing Complete",
        description: "We've wrapped up our beta testing phase with amazing feedback from early users. Final polishing in progress!"
      },
      {
        date: "Nov 2024",
        title: "AI Styling Engine Enhanced",
        description: "Our AI now provides even better outfit suggestions based on weather, occasion, and your personal style preferences."
      },
      {
        date: "Oct 2024",
        title: "Pre-Launch Community Growing",
        description: "Over 5,000 fashion enthusiasts have joined our waiting list. Thank you for your excitement and patience!"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            {translations[language].appTitle}
          </h1>
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setLanguage(language === "de" ? "en" : "de")}
              className="text-sm"
            >
              🌍 {language === "de" ? "EN" : "DE"}
            </Button>
            <Badge variant="secondary" className="bg-accent text-accent-foreground">
              {translations[language].comingSoon}
            </Badge>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl font-bold leading-tight">
                {translations[language].heroTitle}
                <br />
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  {translations[language].heroSubtitle}
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-lg">
                {translations[language].heroDescription}
              </p>
            </div>

            <form onSubmit={handleEmailSignup} className="flex gap-3 max-w-md">
              <Input
                type="email"
                placeholder={translations[language].emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 shadow-soft"
              />
              <Button 
                type="submit" 
                className="bg-gradient-primary hover:shadow-glow transition-all"
                disabled={isLoading}
              >
                <Mail className="w-4 h-4 mr-2" />
                {isLoading 
                  ? (language === "de" ? "Wird gesendet..." : "Sending...") 
                  : translations[language].notifyMe
                }
              </Button>
            </form>

            <p className="text-sm text-muted-foreground">
              {translations[language].joinText}
            </p>
          </div>

          <div className="relative">
            <img
              src={heroImage}
              alt="Vestiary app preview showing elegant wardrobe organization"
              className="rounded-2xl shadow-glow w-full"
            />
          </div>
        </div>
      </section>

      {/* Tutorial Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold mb-4">{translations[language].howItWorks}</h3>
          <p className="text-lg text-muted-foreground">
            {translations[language].howItWorksDesc}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tutorialSteps.map((step, index) => (
            <Card key={index} className="text-center shadow-soft hover:shadow-glow transition-all">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  {step.icon}
                </div>
                <CardTitle className="text-xl">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4">{translations[language].faqTitle}</h3>
            <p className="text-lg text-muted-foreground">
              {translations[language].faqDesc}
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs[language].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* News Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4">{translations[language].latestUpdates}</h3>
            <p className="text-lg text-muted-foreground">
              {translations[language].latestUpdatesDesc}
            </p>
          </div>

          <div className="space-y-6">
            {newsItems[language].map((item, index) => (
              <Card key={index} className="shadow-soft hover:shadow-glow transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white flex-shrink-0">
                      <Bell className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-semibold">{item.title}</h4>
                        <Badge variant="outline" className="text-xs">
                          <Calendar className="w-3 h-3 mr-1" />
                          {item.date}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h4 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              {translations[language].appTitle}
            </h4>
            <p className="text-muted-foreground mb-6">
              {translations[language].footerDesc}
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => navigate("/datenschutz")}
              >
                {translations[language].privacyPolicy}
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => navigate("/nutzungsbedingungen")}
              >
                {translations[language].termsOfService}
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => navigate("/impressum")}
              >
                Impressum
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => navigate("/kontakt")}
              >
                {translations[language].contactUs}
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};