import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Privacy = () => {
  const navigate = useNavigate();

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

        <h1 className="text-4xl font-bold mb-8">Datenschutzerklärung</h1>

        <div className="prose prose-slate max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-xl font-semibold mb-3">Allgemeine Hinweise</h3>
            <p className="text-muted-foreground mb-4">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten 
              passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie 
              persönlich identifiziert werden können.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Verantwortlicher</h2>
            <p className="text-muted-foreground mb-4">
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            </p>
            <div className="bg-card border border-border rounded-lg p-6 mb-4">
              <p className="font-semibold mb-2">[Ihr Firmenname]</p>
              <p className="text-muted-foreground">[Ihre Straße und Hausnummer]</p>
              <p className="text-muted-foreground">[PLZ und Ort]</p>
              <p className="text-muted-foreground mt-4">
                Telefon: [Ihre Telefonnummer]<br />
                E-Mail: [Ihre E-Mail-Adresse]
              </p>
            </div>
            <p className="text-muted-foreground text-sm">
              Verantwortlich ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über 
              die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Datenerfassung auf dieser Website</h2>
            
            <h3 className="text-xl font-semibold mb-3">Welche Daten werden erfasst?</h3>
            <p className="text-muted-foreground mb-4">
              Wir erheben folgende Arten von Daten:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li>E-Mail-Adressen, die Sie freiwillig in unserem Newsletter-Anmeldeformular angeben</li>
              <li>Technische Daten (z.B. Browsertyp, Betriebssystem, Zugriffszeitpunkt)</li>
              <li>IP-Adresse (anonymisiert)</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Wofür nutzen wir Ihre Daten?</h3>
            <p className="text-muted-foreground mb-4">
              Ihre Daten werden verwendet für:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li>Zusendung von Informationen über den Launch der Vestiary App (Newsletter)</li>
              <li>Gewährleistung der technischen Funktionsfähigkeit der Website</li>
              <li>Verbesserung unseres Angebots</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Rechtsgrundlage der Verarbeitung</h3>
            <p className="text-muted-foreground mb-4">
              Die Verarbeitung Ihrer E-Mail-Adresse erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). 
              Sie können diese Einwilligung jederzeit widerrufen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Newsletter</h2>
            <p className="text-muted-foreground mb-4">
              Wenn Sie den auf der Website angebotenen Newsletter beziehen möchten, benötigen wir von Ihnen eine 
              E-Mail-Adresse. Die Daten werden ausschließlich für den Versand des Newsletters verwendet und nicht 
              an Dritte weitergegeben.
            </p>
            <p className="text-muted-foreground mb-4">
              Sie können Ihre Einwilligung zur Speicherung der Daten und deren Nutzung zum Newsletter-Versand 
              jederzeit widerrufen, z.B. über den "Abmelden"-Link im Newsletter.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Ihre Rechte</h2>
            <p className="text-muted-foreground mb-4">
              Sie haben folgende Rechte:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li><strong>Auskunftsrecht:</strong> Sie können Auskunft über Ihre gespeicherten personenbezogenen Daten verlangen</li>
              <li><strong>Berichtigungsrecht:</strong> Sie können die Berichtigung unrichtiger Daten verlangen</li>
              <li><strong>Löschungsrecht:</strong> Sie können die Löschung Ihrer Daten verlangen</li>
              <li><strong>Widerspruchsrecht:</strong> Sie können der Verarbeitung Ihrer Daten widersprechen</li>
              <li><strong>Recht auf Datenübertragbarkeit:</strong> Sie können Ihre Daten in einem gängigen Format erhalten</li>
              <li><strong>Beschwerderecht:</strong> Sie können sich bei einer Aufsichtsbehörde beschweren</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              Für die Ausübung Ihrer Rechte wenden Sie sich bitte an: [Ihre Kontakt-E-Mail]
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Datensicherheit</h2>
            <p className="text-muted-foreground mb-4">
              Wir verwenden innerhalb des Website-Besuchs das verbreitete SSL-Verfahren (Secure Socket Layer) in 
              Verbindung mit der jeweils höchsten Verschlüsselungsstufe, die von Ihrem Browser unterstützt wird.
            </p>
            <p className="text-muted-foreground mb-4">
              Wir treffen technische und organisatorische Sicherheitsmaßnahmen, um Ihre Daten gegen zufällige oder 
              vorsätzliche Manipulationen, Verlust, Zerstörung oder den Zugriff unberechtigter Personen zu schützen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Speicherdauer</h2>
            <p className="text-muted-foreground mb-4">
              Ihre E-Mail-Adresse wird gespeichert, bis Sie Ihre Einwilligung widerrufen oder der Zweck für die 
              Datenspeicherung entfällt (z.B. nach erfolgtem App-Launch und Versand der Benachrichtigung).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Weitergabe von Daten</h2>
            <p className="text-muted-foreground mb-4">
              Ihre personenbezogenen Daten werden nicht an Dritte weitergegeben, es sei denn:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li>Sie haben ausdrücklich eingewilligt (Art. 6 Abs. 1 lit. a DSGVO)</li>
              <li>Dies ist zur Erfüllung rechtlicher Verpflichtungen erforderlich (Art. 6 Abs. 1 lit. c DSGVO)</li>
              <li>Dies ist zur Wahrung berechtigter Interessen erforderlich (Art. 6 Abs. 1 lit. f DSGVO)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Cookies</h2>
            <p className="text-muted-foreground mb-4">
              Diese Website verwendet keine Cookies für Tracking oder Marketing. Technisch notwendige Cookies zur 
              Gewährleistung der Funktionsfähigkeit können gesetzt werden.
            </p>
          </section>

          <section className="bg-muted/50 rounded-lg p-6 mt-8">
            <p className="text-sm text-muted-foreground">
              <strong>Hinweis:</strong> Diese Datenschutzerklärung ist ein Muster und muss an Ihre spezifischen 
              Gegebenheiten angepasst werden. Bitte ergänzen Sie die fehlenden Angaben (in eckigen Klammern) und 
              lassen Sie die Datenschutzerklärung von einem Rechtsanwalt prüfen.
            </p>
          </section>

          <p className="text-muted-foreground text-sm mt-8">
            Stand: {new Date().toLocaleDateString('de-DE', { year: 'numeric', month: 'long' })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;