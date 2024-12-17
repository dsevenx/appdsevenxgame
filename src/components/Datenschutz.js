import React, { Component } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import "./datenschutz.css";

export class Datenschutz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      KommtNochWas: [],
    };
  }
  render() {
    const lBez = this.props.app_name;

    return (
      <div className="mt-5 d-flex justify-content-middle">
        <Container>
          <Row className="mr-3 mb-3">
            <Col>
              <h3>{lBez} Datenschutz</h3>
            </Col>
          </Row>

          <Row className="mr-3 mb-3">
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>
                    <h4>Allgemeine Hinweise</h4>
                  </Card.Title>

                  <Card.Text className="mb-3">
                    <p>
                      <div class="hoehe">
                        Die folgenden Hinweise geben einen einfachen Überblick
                        darüber, was mit Ihren personenbezogenen Daten passiert,
                        wenn Sie unsere App nutzen. Personenbezogene Daten sind
                        alle Daten, mit denen Sie persönlich identifiziert
                        werden können. Ausführliche Informationen zum Thema
                        Datenschutz entnehmen Sie unserer unter diesem Text
                        aufgeführten Datenschutzerklärung.
                      </div>
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="mr-3 mb-3">
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>
                    <h3>Datenerfassung bei {lBez}</h3>
                  </Card.Title>

                  <Card.Text className="mb-3">
                    <p>
                      <div class="hoehe">Wie erfassen wir Ihre Daten?</div>
                      <div class="hoehekl">
                        <br />
                        Ihre Daten werden zum einen dadurch erhoben, dass Sie
                        uns diese mitteilen. Hierbei kann es sich z.B. um Daten
                        handeln, die Sie in ein Kontaktformular / Namesfeld
                        eingeben. Andere Daten werden automatisch bei der
                        App-Nutzung durch unsere IT-Systeme / Gerätehersteller
                        erfasst. Das sind vor allem technische Daten (z.B.
                        Betriebssystem oder Uhrzeit des Seitenaufrufs). Die
                        Erfassung dieser Daten erfolgt automatisch, sobald Sie
                        unsere App nutzen.
                      </div>
                    </p>

                    <p>
                      <div class="hoehe">Wofür nutzen wir Ihre Daten?</div>
                      <div class="hoehekl">
                        <br />
                        Ein Teil der Daten wird erhoben, um eine fehlerfreie
                        Bereitstellung der App zu gewährleisten. Andere Daten
                        können zur Analyse Ihres Nutzerverhaltens verwendet
                        werden.
                      </div>
                    </p>

                    <p>
                      <div class="hoehe">
                        Welche Rechte haben Sie bezüglich Ihrer Daten?
                      </div>
                      <div class="hoehekl">
                        <br />
                        Sie haben jederzeit das Recht unentgeltlich Auskunft
                        über Herkunft, Empfänger und Zweck Ihrer gespeicherten
                        personenbezogenen Daten zu erhalten. Sie haben außerdem
                        ein Recht, die Berichtigung, Sperrung oder Löschung
                        dieser Daten zu verlangen. Hierzu sowie zu weiteren
                        Fragen zum Thema Datenschutz können Sie sich jederzeit
                        unter der im Impressum angegebenen Adresse an uns
                        wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei
                        der zuständigen Aufsichtsbehörde zu.
                      </div>
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="mr-3 mb-3">
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>
                    <h4>Analyse-Tools und Tools von Drittanbietern</h4>
                  </Card.Title>

                  <Card.Text className="mb-3">
                    <p>
                      <div class="hoehe">
                        Sie haben jederzeit das Recht unentgeltlich Auskunft
                        über Herkunft, Empfänger und Zweck Ihrer gespeicherten
                        personenbezogenen Daten zu erhalten. Beim Besuch unserer
                        APP kann Ihr Nutzungensverhalten statistisch ausgewertet
                        werden. Die Analyse Ihres Nutzungserhaltens erfolgt in
                        der Regel anonym; das Nutzungserhaltens kann nicht zu
                        Ihnen zurückverfolgt werden. Sie können dieser Analyse
                        widersprechen oder sie durch die Nichtbenutzung
                        bestimmter Tools verhindern. Detaillierte Informationen
                        dazu finden Sie in der folgenden Datenschutzerklärung.
                        Sie haben außerdem ein Recht, die Berichtigung, Sperrung
                        oder Löschung dieser Daten zu verlangen. Hierzu sowie zu
                        weiteren Fragen zum Thema Datenschutz können Sie sich
                        jederzeit unter der im Impressum angegebenen Adresse an
                        uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht
                        bei der zuständigen Aufsichtsbehörde zu. Sie können
                        dieser Analyse widersprechen. Über die
                        Widerspruchsmöglichkeiten werden wir Sie in dieser
                        Datenschutzerklärung informieren.
                      </div>
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="mr-3 mb-3">
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>
                    <h4>Datenschutz: Hinweise und Pflichtinformationen</h4>
                  </Card.Title>

                  <Card.Text className="mb-3">
                    <p>
                      <div class="hoehe">
                        Die Betreiber von {lBez} nehmen den Schutz Ihrer
                        persönlichen Daten sehr ernst. Wir behandeln Ihre
                        personenbezogenen Daten vertraulich und entsprechend der
                        gesetzlichen Datenschutzvorschriften sowie dieser
                        Datenschutzerklärung. Wenn Sie diese App benutzen,
                        werden ggf. verschiedene personenbezogene Daten erhoben.
                        Personenbezogene Daten sind Daten, mit denen Sie
                        persönlich identifiziert werden können. Die vorliegende
                        Datenschutzerklärung erläutert, welche Daten wir erheben
                        und wofür wir sie nutzen. Sie erläutert auch, wie und zu
                        welchem Zweck das geschieht. Wir weisen darauf hin, dass
                        die Datenübertragung im Internet (z.B. bei der
                        Kommunikation per E-Mail) Sicherheitslücken aufweisen
                        kann. Ein lückenloser Schutz der Daten vor dem Zugriff
                        durch Dritte ist nicht möglich.
                      </div>
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="mr-3 mb-3">
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>
                    <h4>Hinweis zur verantwortlichen Stelle</h4>
                  </Card.Title>

                  <Card.Text className="mb-3">
                    <p>
                      <div class="hoehe">
                        Die verantwortliche Stelle für die Datenverarbeitung
                        bzgl {lBez} ist:
                      </div>
                      <br />
                      <div class="hoehe">
                        {lBez} z.H. Rokosch
                        <br />
                        Hörselbergstrasse 4a
                        <br />
                        81677 München
                      </div>
                      <br />
                      <div class="hoehe">
                        <br />
                        Email
                        <br />
                        steffen.rokosch.app@gmail.com
                      </div>
                      <br />
                      <div class="hoehe">
                        Verantwortliche Stelle ist die natürliche oder
                        juristische Person, die allein oder gemeinsam mit
                        anderen über die Zwecke und Mittel der Verarbeitung von
                        personenbezogenen Daten (z.B. Namen, E-Mail-Adressen o.
                        Ä.) entscheidet.
                      </div>
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="mr-3 mb-3">
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>
                    <h4>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h4>
                  </Card.Title>

                  <Card.Text className="mb-3">
                    <p>
                      <div class="hoehe">
                        Viele Datenverarbeitungsvorgänge sind nur mit Ihrer
                        ausdrücklichen Einwilligung möglich. Sie können eine
                        bereits erteilte Einwilligung jederzeit widerrufen. Dazu
                        reicht eine formlose Mitteilung per E-Mail an uns. Die
                        Rechtmäßigkeit der bis zum Widerruf erfolgten
                        Datenverarbeitung bleibt vom Widerruf unberührt.
                      </div>
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="mr-3 mb-3">
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>
                    <h4>
                      Beschwerderecht bei der zuständigen Aufsichtsbehörde
                    </h4>
                  </Card.Title>

                  <Card.Text className="mb-3">
                    <p>
                      <div class="hoehe">
                        Im Falle datenschutzrechtlicher Verstöße steht dem
                        Betroffenen ein Beschwerderecht bei der zuständigen
                        Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde in
                        datenschutzrechtlichen Fragen ist der
                        Landesdatenschutzbeauftragte des Bundeslandes, in dem
                        unser Unternehmen seinen Sitz hat. Eine Liste der
                        Datenschutzbeauftragten sowie deren Kontaktdaten können
                        folgendem Link entnommen werden:
                      </div>
                      <Card.Link href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html">
                        {" "}
                        https://www.bfdi.bund.de{" "}
                      </Card.Link>
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="mr-3 mb-3">
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>
                    <h4>Recht auf Datenübertragbarkeit</h4>
                  </Card.Title>

                  <Card.Text className="mb-3">
                    <p>
                      <div class="hoehe">
                        Sie haben das Recht, Daten, die wir auf Grundlage Ihrer
                        Einwilligung oder in Erfüllung eines Vertrags
                        automatisiert verarbeiten, an sich oder an einen Dritten
                        in einem gängigen, maschinenlesbaren Format aushändigen
                        zu lassen. Sofern Sie die direkte Übertragung der Daten
                        an einen anderen Verantwortlichen verlangen, erfolgt
                        dies nur, soweit es technisch machbar ist.
                      </div>
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="mr-3 mb-3">
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>
                    <h4>SSL- bzw. TLS-Verschlüsselung</h4>
                  </Card.Title>

                  <Card.Text className="mb-3">
                    <p>
                      <div class="hoehe">
                        Die APP {lBez} nutzt aus Sicherheitsgründen und zum
                        Schutz der Übertragung vertraulicher Inhalte, wie zum
                        Beispiel Bestellungen oder Anfragen, die Sie an uns als
                        APP-Betreiber senden, eine SSL-bzw. TLS-Verschlüsselung.
                        Eine verschlüsselte Verbindung erkennen Sie daran, dass
                        die Adresszeile des Browsers von “http://” auf
                        “https://” wechselt und an dem Schloss-Symbol in Ihrer
                        Browserzeile. Wenn die SSL- bzw. TLS-Verschlüsselung
                        aktiviert ist, können die Daten, die Sie an uns
                        übermitteln, nicht von Dritten mitgelesen werden. In der
                        APP ist diese sichere Übertragung i.d.R. nicht sichtbar.
                      </div>
                      <br />
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="mr-3 mb-3">
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>
                    <h4> Datenerfassung auf unserer APP : Cookies</h4>
                  </Card.Title>

                  <Card.Text className="mb-3">
                    <p>
                      <div class="hoehe">
                        Die Internetseiten/APP verwenden teilweise so genannte
                        Cookies. Cookies richten auf Ihrem Rechner keinen
                        Schaden an und enthalten keine Viren. Cookies dienen
                        dazu, unser Angebot nutzerfreundlicher, effektiver und
                        sicherer zu machen. Cookies sind kleine Textdateien, die
                        auf Ihrem Rechner abgelegt werden und die Ihr Browser
                        speichert.
                      </div>
                      <br />
                      <div class="hoehe">
                        Die meisten der von uns verwendeten Cookies sind so
                        genannte “Session-Cookies”. Sie werden nach Ende Ihres
                        Besuchs automatisch gelöscht. Andere Cookies bleiben auf
                        Ihrem Endgerät gespeichert bis Sie diese löschen. Diese
                        Cookies ermöglichen es uns, Ihren Browser beim nächsten
                        Besuch wiederzuerkennen.
                      </div>
                      <br />
                      <div class="hoehe">
                        Sie können Ihren Browser so einstellen, dass Sie über
                        das Setzen von Cookies informiert werden und Cookies nur
                        im Einzelfall erlauben, die Annahme von Cookies für
                        bestimmte Fälle oder generell ausschließen sowie das
                        automatische Löschen der Cookies beim Schließen des
                        Browser aktivieren. Bei der Deaktivierung von Cookies
                        kann die Funktionalität dieser Website eingeschränkt
                        sein.
                      </div>
                      <br />
                      <div class="hoehe">
                        Cookies, die zur Durchführung des elektronischen
                        Kommunikationsvorgangs oder zur Bereitstellung
                        bestimmter, von Ihnen erwünschter Funktionen (z.B.
                        Warenkorbfunktion) erforderlich sind, werden auf
                        Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert.
                        Der Websitebetreiber hat ein berechtigtes Interesse an
                        der Speicherung von Cookies zur technisch fehlerfreien
                        und optimierten Bereitstellung seiner Dienste. Soweit
                        andere Cookies (z.B. Cookies zur Analyse Ihres
                        Surfverhaltens) gespeichert werden, werden diese in
                        dieser Datenschutzerklärung gesondert behandelt.
                      </div>
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="mr-3 mb-3">
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>
                    <h4>Server-Log-Dateien</h4>
                  </Card.Title>

                  <Card.Text className="mb-3">
                    <p>
                      <div class="hoehe">
                        <p>
                          Der Provider der Seiten erhebt und speichert
                          automatisch Informationen in so genannten
                          Server-Log-Dateien, die Ihr mobiles Gerät automatisch
                          übermittelt. Dies sind:
                        </p>
                        <p>
                          <li>Browsertyp und Browserversion</li>
                          <li>verwendetes Betriebssystem</li>
                          <li>Referrer URL</li>
                          <li>Hostname des zugreifenden Rechners</li>
                          <li>Uhrzeit der Serveranfrage</li>
                          <li>IP-Adresse</li>
                          <li>MAC-Adresse</li>
                        </p>
                      </div>
                      <br />
                      <div class="hoehe">
                        Eine Zusammenführung dieser Daten mit anderen
                        Datenquellen wird nicht vorgenommen.
                      </div>
                      <br />

                      <div class="hoehe">
                        Grundlage für die Datenverarbeitung ist Art. 6 Abs. 1
                        lit. f DSGVO, der die Verarbeitung von Daten zur
                        Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen
                        gestattet.
                      </div>
                      <br />
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="mr-3 mb-3">
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>
                    <h4>Datenübermittlung in die USA</h4>
                  </Card.Title>

                  <Card.Text className="mb-3">
                    <p>
                      <div class="hoehe">Datenübermittlung in die USA</div>
                      <br />
                      <div class="hoehekl">
                        Durch den Einsatz von Tools von Anbietern mit Sitz in
                        den USA werden auch Daten an den Anbieter in die USA
                        übermittelt, auch dann, wenn Vertrag über den Einsatz
                        des Tools mit einem Tochterunternehmen des Anbieters
                        zustande kommt, dessen Sitz innerhalb der Europäischen
                        Union (z. B. Irland) liegt. Rechtsgrundlage für die
                        Datenübermittlung durch den Einsatz des Tools ist
                        jeweils eine auf den Einzelfall bezogenen Einwilligung
                        nach Art. 49 Abs. 1 Buchst. a) DSGVO. In dem
                        Zusammenhang wird darauf hingewiesen, dass für die USA
                        kein Angemessenheitsbeschluss der EU-Kommission
                        existiert. Es besteht insoweit ein Risiko für den
                        Betroffenen, dass staatliche Stellen in den USA auf die
                        übermittelten Daten ohne konkreten Anlass Zugriff
                        nehmen, ohne dass eine Möglichkeit gewährleistet ist,
                        hiergegen effektiven Rechtsschutz zu suchen.
                      </div>
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="mr-3 mb-3">
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>
                    <h4>Datenlöschenung</h4>
                  </Card.Title>

                  <Card.Text className="mb-3">
                    <p>
                      <div class="hoehe">
                        Routinemäßige Löschung und Sperrung von
                        personenbezogenen Daten
                      </div>
                      <br />
                      <div class="hoehekl">
                        Personenbezogene Daten werden nur für den Zeitraum
                        gespeichert, solange dies für den jeweiligen Zweck der
                        Verarbeitung oder aufgrund von gesetzlichen Vorgaben
                        erforderlich ist. Nach Zweckerreichung oder Ablauf der
                        gesetzlich vorgeschriebenen Aufbewahrungsfrist werden
                        die personenbezogenen Daten routinemäßig und
                        entsprechend den gesetzlichen Vorschriften gelöscht.
                        Soweit der jeweils vorgesehene Zweck der Verarbeitung
                        erreicht ist, die Daten aufgrund von gesetzlichen
                        Vorgaben aber noch nicht gelöscht werden dürfen, werden
                        die Daten gesperrt.
                      </div>
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="mr-3 mb-3">
            <Col md={{ offset: 10 }}>
              <p>
                {" "}
                <Card.Link href="./"> zurück zum Einstieg </Card.Link>{" "}
              </p>
            </Col>
          </Row>
          <Row className="mr-3 mb-3">
            <Col>
              <p> </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
