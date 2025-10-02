import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Mail, Send } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string()
    .trim()
    .min(1, { message: "Name ist erforderlich" })
    .max(100, { message: "Name darf maximal 100 Zeichen lang sein" }),
  email: z.string()
    .trim()
    .email({ message: "Ungültige E-Mail-Adresse" })
    .max(255, { message: "E-Mail darf maximal 255 Zeichen lang sein" }),
  subject: z.string()
    .trim()
    .min(1, { message: "Betreff ist erforderlich" })
    .max(200, { message: "Betreff darf maximal 200 Zeichen lang sein" }),
  message: z.string()
    .trim()
    .min(10, { message: "Nachricht muss mindestens 10 Zeichen lang sein" })
    .max(2000, { message: "Nachricht darf maximal 2000 Zeichen lang sein" }),
});

const Contact = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Validate form data
      contactSchema.parse(formData);
      
      setIsLoading(true);
      console.log("Contact form submission:", {
        ...formData,
        timestamp: new Date().toISOString(),
      });

      // TODO: Hier später die Kontaktdaten verarbeiten
      // z.B. per Email versenden oder in Datenbank speichern
      
      toast({
        title: "Nachricht gesendet!",
        description: "Vielen Dank für Ihre Nachricht. Wir melden uns in Kürze bei Ihnen.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const firstError = error.errors[0];
        toast({
          title: "Validierungsfehler",
          description: firstError.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Fehler",
          description: "Beim Senden der Nachricht ist ein Fehler aufgetreten.",
          variant: "destructive",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Zurück
        </Button>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h1 className="text-4xl font-bold mb-4">Kontakt</h1>
            <p className="text-muted-foreground mb-8">
              Haben Sie Fragen oder Anregungen? Wir freuen uns auf Ihre Nachricht!
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ihr Name"
                  required
                  maxLength={100}
                  className="shadow-soft"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  E-Mail *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ihre.email@beispiel.de"
                  required
                  maxLength={255}
                  className="shadow-soft"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Betreff *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Worum geht es?"
                  required
                  maxLength={200}
                  className="shadow-soft"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Nachricht *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Ihre Nachricht an uns..."
                  required
                  minLength={10}
                  maxLength={2000}
                  rows={6}
                  className="shadow-soft resize-none"
                />
                <p className="text-xs text-muted-foreground mt-2">
                  {formData.message.length} / 2000 Zeichen
                </p>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-primary hover:shadow-glow transition-all"
              >
                {isLoading ? (
                  "Wird gesendet..."
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Nachricht senden
                  </>
                )}
              </Button>

              <p className="text-xs text-muted-foreground">
                * Pflichtfelder. Ihre Daten werden gemäß unserer{" "}
                <button
                  type="button"
                  onClick={() => navigate("/datenschutz")}
                  className="underline hover:text-primary"
                >
                  Datenschutzerklärung
                </button>{" "}
                verarbeitet.
              </p>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-card border border-border rounded-lg p-6 shadow-soft">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">E-Mail</h3>
                  <p className="text-muted-foreground mb-2">
                    Schreiben Sie uns direkt:
                  </p>
                  <a
                    href="mailto:kontakt@vestiary.app"
                    className="text-primary hover:underline"
                  >
                    kontakt@vestiary.app
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 shadow-soft">
              <h3 className="font-semibold text-lg mb-4">Firmendaten</h3>
              <div className="space-y-2 text-muted-foreground">
                <p className="font-medium text-foreground">[Ihr Firmenname]</p>
                <p>[Straße und Hausnummer]</p>
                <p>[PLZ und Ort]</p>
                <p className="mt-4">
                  <strong>Vertreten durch:</strong><br />
                  [Name des Geschäftsführers/Inhabers]
                </p>
              </div>
            </div>

            <div className="bg-muted/50 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-3">Öffnungszeiten Support</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Montag - Freitag: 9:00 - 18:00 Uhr</p>
                <p>Samstag - Sonntag: Geschlossen</p>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Wir bemühen uns, Ihre Anfrage innerhalb von 24-48 Stunden zu beantworten.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;