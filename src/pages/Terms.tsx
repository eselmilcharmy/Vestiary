import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Terms = () => {
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

        <h1 className="text-4xl font-bold mb-8">Nutzungsbedingungen</h1>

        <div className="prose prose-slate max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Geltungsbereich</h2>
            <p className="text-muted-foreground mb-4">
              Diese Nutzungsbedingungen regeln die Nutzung der Website vestiary.app und der damit verbundenen 
              Dienstleistungen. Mit der Nutzung dieser Website erklären Sie sich mit diesen Bedingungen einverstanden.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Leistungsbeschreibung</h2>
            <p className="text-muted-foreground mb-4">
              Vestiary ist eine Landing Page für eine kommende Mobile App zur Verwaltung und Organisation von 
              Kleiderschränken. Derzeit bieten wir folgende Funktionen an:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li>Informationen über die kommende Vestiary App</li>
              <li>Newsletter-Anmeldung für Launch-Updates</li>
              <li>Kontaktmöglichkeiten für Anfragen</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              Wir behalten uns das Recht vor, den Umfang der angebotenen Leistungen jederzeit zu ändern oder zu erweitern.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Registrierung und Newsletter</h2>
            <p className="text-muted-foreground mb-4">
              Durch die Angabe Ihrer E-Mail-Adresse in unserem Newsletter-Formular erklären Sie sich damit einverstanden, 
              dass wir Ihnen Informationen über den Launch der Vestiary App zusenden dürfen.
            </p>
            <p className="text-muted-foreground mb-4">
              Sie können sich jederzeit vom Newsletter abmelden. Eine Abmeldemöglichkeit finden Sie in jeder E-Mail 
              oder durch Kontaktaufnahme mit uns.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Nutzungsrechte und Urheberrecht</h2>
            <p className="text-muted-foreground mb-4">
              Alle Inhalte dieser Website (Texte, Bilder, Grafiken, Design, Code) sind urheberrechtlich geschützt 
              und Eigentum von [Ihr Firmenname] bzw. der jeweiligen Rechteinhaber.
            </p>
            <p className="text-muted-foreground mb-4">
              Die Vervielfältigung, Bearbeitung, Verbreitung oder jede Art der Verwertung außerhalb der Grenzen des 
              Urheberrechts bedarf der schriftlichen Zustimmung.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Verfügbarkeit</h2>
            <p className="text-muted-foreground mb-4">
              Wir bemühen uns um eine möglichst unterbrechungsfreie Verfügbarkeit der Website. Es besteht jedoch 
              kein Anspruch auf ständige Verfügbarkeit. Wartungsarbeiten, technische Störungen oder höhere Gewalt 
              können zu temporären Ausfällen führen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Haftungsausschluss</h2>
            <p className="text-muted-foreground mb-4">
              Die Nutzung dieser Website erfolgt auf eigene Gefahr. Wir übernehmen keine Gewähr für:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
              <li>Die Richtigkeit, Vollständigkeit oder Aktualität der bereitgestellten Informationen</li>
              <li>Die ständige Verfügbarkeit der Website</li>
              <li>Die Freiheit von Viren oder anderen schädlichen Komponenten</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              Soweit gesetzlich zulässig, haften wir nicht für Schäden, die durch die Nutzung oder Nichtnutzung 
              der bereitgestellten Informationen entstehen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Links zu externen Websites</h2>
            <p className="text-muted-foreground mb-4">
              Unsere Website kann Links zu externen Websites Dritter enthalten. Auf den Inhalt dieser verlinkten 
              Seiten haben wir keinen Einfluss. Für die Inhalte und die Richtigkeit der Informationen ist der 
              jeweilige Anbieter der verlinkten Website verantwortlich.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Datenschutz</h2>
            <p className="text-muted-foreground mb-4">
              Die Verarbeitung personenbezogener Daten erfolgt gemäß unserer Datenschutzerklärung, die Sie 
              separat einsehen können.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Änderungen der Nutzungsbedingungen</h2>
            <p className="text-muted-foreground mb-4">
              Wir behalten uns das Recht vor, diese Nutzungsbedingungen jederzeit zu ändern. Änderungen werden 
              auf dieser Seite veröffentlicht. Die weitere Nutzung der Website nach Veröffentlichung von Änderungen 
              gilt als Zustimmung zu den geänderten Bedingungen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Schlussbestimmungen</h2>
            <p className="text-muted-foreground mb-4">
              Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.
            </p>
            <p className="text-muted-foreground mb-4">
              Sollten einzelne Bestimmungen dieser Nutzungsbedingungen unwirksam sein oder werden, bleibt die 
              Wirksamkeit der übrigen Bestimmungen davon unberührt.
            </p>
          </section>

          <section className="bg-muted/50 rounded-lg p-6 mt-8">
            <p className="text-sm text-muted-foreground">
              <strong>Hinweis:</strong> Diese Nutzungsbedingungen sind ein Muster und müssen an Ihre spezifischen 
              Gegebenheiten angepasst werden. Bitte ergänzen Sie die fehlenden Angaben (in eckigen Klammern) und 
              lassen Sie die Nutzungsbedingungen von einem Rechtsanwalt prüfen.
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

export default Terms;