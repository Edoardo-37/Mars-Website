import { Typography } from "@mui/material";
import { Link } from "react-router";

const ArticlePagesData = [
  // 0. Articolo sulle tecnologie spaziali - file: src > pages > TecnologieMarte.jsx
  {
    id: 0,
    articleId: "tecnologie-marte-article-title",
    mainTitle: "Verso Marte: le tecnologie principali",
    srcLow: "/assets/infoCards/lowRes/infoCardTech-low.webp",
    srcHigh: "/assets/infoCards/infoCardTech.webp",
    imgTitle:
      "Satellite da ricognizione (MRO) della NASA Science che orbita su marte. Crediti: NASA Science",
    alt: "Satellite da ricognizione (MRO) della NASA Science che orbita su marte. Crediti: NASA Science",
    figcap:
      "Illustrazione del Mars Reconnaissance Orbiter - MRO. Crediti: NASA Science",
    introduction: (
      <>
        Le missioni umane verso Marte richiedono soluzioni tecnologiche
        all'avanguardia che, ad oggi, sono ancora in studio o in fase di
        testing. Le infrastrutture cis-lunari, i sistemi di propulsione
        avanzata, materiali intelligenti e la collaborazione tra agenzie
        spaziali e aziende private sono elementi chiave per rendere possibile
        quel sogno. In questo articolo esploriamo{" "}
        <b>le tecnologie più promettenti</b> che stanno tracciando il cammino
        verso il Pianeta Rosso.
      </>
    ),
    // paragrafi dell'articolo in un array di oggetti con id, titolo, eventuali immagini e testi
    paragraphs: [
      {
        paragraphId: 0,
        sectionId: "orbita-lunare",
        paragraphTitle: "Un anno in orbita lunare come addestramento",
        paragraphText: (
          <Typography variant="body1">
            Uno dei primi obiettivi è addestrare gli equipaggi in un ambiente
            lontano dalla Terra, ma con la possibilità di un ritorno rapido. Il{" "}
            <b>Gateway</b>, stazione in orbita lunare prevista nei piani
            NASA/ESA, è pensata come avamposto per missioni di lunga durata
            prima che si parta verso Marte. Il progetto prevede moduli
            abitativi, sistemi di supporto vitale e ancoraggio per veicoli
            spaziali. <b>Il lancio dei primi moduli</b> - come HALO (Habitation
            And Logistics Outpost) e il Power and Propulsion Element - è stimato
            per il <b>2027</b>, utilizzando un vettore come il Falcon Heavy.
          </Typography>
        ),
        paragraphText2: (
          <Typography variant="body1">
            Tuttavia, diversi programmi di Artemis (II, III) hanno subito
            ritardi rispetto alle tempistiche annunciate, rimandando alcune
            scadenze.{" "}
            <u>Questi ritardi impattano sia la tabella di marcia per Marte</u>,
            sia l'allestimento completo del Gateway e dei sistemi di supporto
            attorno alla Luna.
          </Typography>
        ),
      },
      {
        paragraphId: 1,
        sectionId: "propulsione-avanzata",
        paragraphTitle:
          "La propulsione avanzata: nucleare, laser, propulsione a ioni",
        paragraphText: (
          <>
            <ul className="list-disc space-y-6 pl-6">
              <li>
                <Typography variant="body1" marginLeft={1}>
                  <b>Propulsione nucleare termica (NTP / DRACO)</b>
                  <br />
                  NASA e DARPA collaborano su un motore nucleare termico che
                  potrebbe essere testato nello spazio già dal 2027 nell'ambito
                  del programma DRACO. L'obiettivo è ottenere prestazioni
                  superiori rispetto ai razzi chimici, riducendo i tempi di
                  trasferimento verso destinazioni profonde come Marte.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" marginLeft={1}>
                  <b>
                    Laser / energia diretta su vele fotoniche o laser-termiche
                  </b>
                  <br />
                  Alcuni progetti moderni stanno esaminando la possibilità di
                  usare grandi <b>array laser</b> dalla Terra o da un'orbita per
                  riscaldare propellente oppure per spingere vele leggere. Uno
                  studio recente propone{" "}
                  <u>
                    tempi di trasferimento ridotti fino a 20 giorni per carichi
                    utili
                  </u>
                  , sebbene con sfide tecniche ancora elevate.
                </Typography>
                <Typography variant="body1" marginLeft={1} marginTop={2}>
                  Un'altra versione, la <b>propulsione laser-termica</b>,
                  sfrutta un fascio laser che riscalda l'idrogeno in una camera
                  di scoppio per produrre una spinta ad alto impulso specifico.
                  I modelli propongono <i>viaggi in 45 giorni</i>.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" marginLeft={1}>
                  <b>Propulsione a plasma / motori elettrici avanzati</b>
                  <br />
                  Si stanno esplorando <b>motori a plasma ad alta potenza</b>,
                  in grado di offrire migliore efficienza e consumi di massa
                  propellente ridotti. Un articolo del 2025 riporta che Rosatom
                  (Russia) sta testando un{" "}
                  <i>
                    {" "}
                    motore magnetico-plasma per potenziali viaggi in 30-60
                    giorni verso Marte
                  </i>
                  .
                </Typography>
              </li>
              <li>
                <Typography variant="body1" marginLeft={1}>
                  <b>Modelli ibridi</b>
                  <br />
                  Una recente proposta combina propellenti terrestri (ad esempio
                  paraffina + ossidante) con materiali locali su Marte
                  (magnesio, CO2) per alimentare <b>razzi ibridi</b>.
                  Quest'ottimizzazione consente di aumentare la capacita del
                  carico riducendo la massa di propellente da trasportare da
                  Terra.
                </Typography>
              </li>
            </ul>
          </>
        ),
      },
      {
        paragraphId: 2,
        sectionId: "tecnologie-mobilità",
        paragraphTitle:
          "Tecnologie per la mobilità: materiali, ruote e componenti",
        paragraphHeadSrcLow: "/assets/articlesImages/rover-low.webp",
        paragraphHeadSrcHigh: "/assets/articlesImages/rover.webp",
        paragraphImgTitle:
          "Rover Perseverance della NASA su Marte. Crediti: NASA/JPL-Caltech",
        alt: "Rover Perseverance della NASA su Marte. Crediti: NASA/JPL-Caltech",
        paragraphHeadFigcap:
          "Rover Perseverance della NASA su Marte. Crediti: NASA/JPL-Caltech",
        paragraphText: (
          <ul className="list-disc space-y-6 pl-6">
            <li>
              <Typography variant="body1" marginLeft={1}>
                <b>Ruote super-elastiche - Shape Memory-Alloy (SMA)</b>
                <br />I tradizionali sistemi per rover hanno mostrato diversi
                limiti: usura, forature e deformazioni sui terreni marziani. Per
                contrastare ciò, NASA ha testato una tecnologia di{" "}
                <b>pneumatici senza aria in lega di memory foam</b> che può
                deformarsi e ritornare alla forma originaria, adattandosi al
                terreno senza danneggiarsi.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" marginLeft={1}>
                <b>Ricerca accademica su ruote elastiche per i rover</b>
                <br />
                Uno studio del 2024 ha sperimentato ruote elastiche combinate
                con parti rigide per rover di piccole dimensioni; il tutto per
                minimizzare le deformazioni plastiche. Queste ruote sfruttano{" "}
                <i>acciaio ad alta elasticità e alluminio</i> ottenendo un
                compromesso tra flessibilità e integrità strutturale.
              </Typography>
              <Typography variant="body1" marginLeft={1} marginTop={2}>
                Un'ulteriore verifica in laboratorio ha dimostrato che{" "}
                <u>
                  le ruote "flessibili" hanno prestazioni superiori in modalità
                  di movimento "push-pull"
                </u>
                , (
                <i>
                  basata su una spinta generata alternando una parte del veicolo
                  a terra ferma a una parte che viene riposizionata, spingendo o
                  tirando il veicolo
                </i>
                ), rispetto a quelle rigide, riducendo il bisogno di sprofondare
                nel suolo.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" marginLeft={1}>
                <b>Ruote per ambienti estremi: progetto Venturi FLEX</b>
                <br />
                Per la Luna e Marte, una ruota iper-deformabile è in sviluppo da
                Venturi Lab per il rover FLEX, progettata per resistere a
                temperature estreme e terreni irregolari. Il design prevede{" "}
                <i>
                  192 cavi intrecciati, un telaio flessibile e un comportamento
                  resistente alle sollecitazioni
                </i>
                .
              </Typography>
            </li>
          </ul>
        ),
      },
      {
        paragraphId: 3,
        sectionId: "prospettive-2030",
        paragraphTitle: "2030 e oltre: le sfide ancora aperte",
        paragraphHeadSrcLow: "/assets/infoCards/lowRes/infoCardRisks-low.webp",
        paragraphHeadSrcHigh: "/assets/infoCards/infoCardRisks.webp",
        paragraphImgTitle:
          "Grafico NASA sui prossimi passi del viaggio su Marte. Crediti: NASA Science",
        alt: "Grafico NASA sui prossimi passi del viaggio su Marte. Crediti: NASA Science",
        paragraphHeadFigcap:
          "Grafico NASA sui prossimi passi del viaggio su Marte. Crediti: NASA Science",
        paragraphText: (
          <ul className="list-disc space-y-6 pl-6">
            <li>
              <Typography variant="body1" marginLeft={1}>
                <b>Test in ambiente reale</b>
                <br />
                Molti sistemi, come motori nucleari e laser, sono in uno stato
                prototipale o di test sulla Terra. Il passo decisivo sarà
                testarli in orbita o su superfici simulate.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" marginLeft={1}>
                <b>Scalabilità e affidabilità</b>
                <br />
                Le <b>tecnologie</b> che oggi funzionano su modelli ridotti
                dovranno essere <b>scalate</b> per veicoli di dimensioni umane.
                Resistenza, durata e manutenzione saranno parametri chiave da
                valutare.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" marginLeft={1}>
                <b>Riduzione tempi di viaggio</b>
                <br />
                Anche con motori avanzati,{" "}
                <b>ridurre i tempi di transito a poche decine di giorni</b>{" "}
                resta una sfida estrema, ma necessaria per contenere i rischi
                per gli astronauti (tra radiazioni, perdita della vista, risorse
                limitate). Abbiamo già parlato dei rischi del viaggio su Marte,{" "}
                {/* CTA ad articolo correlato */}
                <Link
                  to="/pericoli-del-viaggio"
                  className="hover:tracking-widest hover:underline hover:underline-offset-8 transition-all duration-500 ease-in-out text-orange-200"
                >
                  in questo articolo dedicato
                </Link>
                .
              </Typography>
            </li>
            <li>
              <Typography variant="body1" marginLeft={1}>
                <b>Utilizzo di materiali locali</b>
                <br />
                L'uso di risorse già presenti sul Pianeta Rosso come propellenti
                o materiali da costruzione, sarà essenziale per ridurre i costi
                di trasporto dalla Terra e permettere missioni sostenibili a
                lungo termine.
              </Typography>
            </li>
          </ul>
        ),
      },
      {
        paragraphId: 4,
        sectionId: "Conclusioni",
        paragraphTitle: "Conclusioni",
        paragraphText: (
          <Typography variant="body1">
            Il panorama delle tecnologie per raggiungere Marte è più ricco e
            variegato di qualche anno fa. <u>Il ricorso ad approcci ibridi</u>,
            (motori nucleari insieme a propulsioni laser), e{" "}
            <u>materiali intelligenti</u> è sempre più frequente. Molte
            soluzioni però sono <b>ancora in fase sperimentale</b>: solo con la
            loro applicazione in missioni reali si otterranno risultati
            concreti.
          </Typography>
        ),
      },
    ],
  },

  // 1. Articolo sui pericoli del viaggio verso marte - file: src > pages > RischiViaggioMarte.jsx
  {
    id: 1,
    articleId: "rischi-viaggio-marte-article-title",
    mainTitle: "Marte: un viaggio a ostacoli",
    srcLow: "/assets/articlesImages/space-threats-low.webp",
    srcHigh: "/assets/articlesImages/space-threats.webp",
    imgTitle: "Una grande distanza tra Marte e la Terra",
    alt: "Una grande distanza tra Marte e la Terra",
    figcap:
      "Illustrazione di 5 tra i principali pericoli per l'uomo nello spazio. Crediti: NASA",
    introduction: (
      <>
        Viaggiare verso Marte significa <b>esporsi a condizioni estreme</b>:
        radiazioni, microgravità prolungata, polveri tossiche, perdita della
        vista, isolamento e altri fattori che mettono in serio pericolo la
        salute umana. Capire come superare queste difficoltà è fondamentale
        ancor prima di ipotizzare una partenza. Di seguito i principali rischi
        scoperti finora tramite ricerche.
      </>
    ),
    // paragrafi dell'articolo in un array di oggetti con id, titolo, eventuali immagini e testi
    paragraphs: [
      {
        paragraphId: 0,
        sectionId: null,
        paragraphTitle: null,
        paragraphText: (
          <>
            <ul className="list-disc space-y-6 pl-6">
              <li>
                <Typography variant="body1" marginLeft={1}>
                  <b>Radiazioni spaziali</b>
                  <br />
                  L'esposizione a <b>raggi cosmici galattici</b> e{" "}
                  <b>particelle solari</b> è una delle minacce più concrete.
                  Queste radiazioni possono danneggiare il DNA, causare
                  infiammazione, aumentare il rischio di cancro e compromettere
                  funzioni vitali.
                </Typography>
                <Typography variant="body1" marginLeft={1} marginTop={2}>
                  Studi recenti suggeriscono che uno{" "}
                  <b>scudo di radiazione magnetica</b> (magnetic radiation
                  shield) potrebbe{" "}
                  <u>ridurre l'esposizione a radiazioni per astronauti</u> in
                  missioni di oltre un anno fuori dall'orbita terrestre. Questo
                  scudo potrebbe <b>bloccare o deviare campi magnetici</b>: nel
                  primo caso, si utilizzano materiali ad alta permeabilità
                  magnetica per deviare le linee di campo magnetico lontano da
                  un'area, nel secondo caso, si crea un campo magnetico
                  artificiale per deflettere particelle cariche e radiazioni
                  solari.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" marginLeft={1}>
                  <b>Sistema immunitario</b>
                  <br />
                  La <b>microgravità</b> altera l'espressione genica nelle
                  cellule del sangue (leucociti), riduce la capacità del sistema
                  immunitario di rispondere a infezioni e riattiva virus
                  dormienti.
                </Typography>
                <Typography variant="body1" marginLeft={1} marginTop={2}>
                  Uno studio del 2025 ha mostrato che le cellule staminali
                  ematopoietiche (quelle che producono nuovi elementi del
                  sangue) in missioni spaziali{" "}
                  <u>perdono parte della loro capacità rigenerativa</u>, subendo
                  danni al DNA e stress mitocondriale.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" marginLeft={1}>
                  <b>Effetti sulla vista</b>
                  <br />
                  Con missioni che durano mesi, molti astronauti sperimentano{" "}
                  <b>
                    cambiamenti visivi dovuti allo spostamento dei fluidi
                    corporei verso la testa
                  </b>
                  , aumento della pressione nel comparto oculare, e alterazioni
                  che possono persistere anche dopo il ritorno sulla Terra.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" marginLeft={1}>
                  <b>Perdite di massa ossea e muscolare</b>
                  <br />
                  In condizioni di microgravità si registra{" "}
                  <b>perdita ossea significativa</b> (circa 1/1.5% al mese in
                  ossa portanti). Anche i muscoli deperiscono rapidamente se non
                  vengono continuamente stimolati con esercizio fisico.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" marginLeft={1}>
                  <b>Effetti cognitivi e psicologici</b>
                  <br />
                  Isolamento, confinamento, ritmi circadiani disturbati, (
                  <i>
                    cicli biologici di circa 24H che regolano molte funzioni del
                    corpo, come il sonno-veglia, la temperatura corporea e la
                    produzione di ormoni, e sono sincronizzati principalmente
                    dalla luce solare
                  </i>
                  ), e ritardi nelle comunicazioni possono provocare{" "}
                  <b>stress, ansia, disturbi dell'umore</b>.
                </Typography>
                <Typography variant="body1" marginLeft={1} marginTop={2}>
                  Alcune ricerche evidenziano come alcune funzioni cognitive,
                  come memoria, attenzione e capacità di decisione, possano
                  essere influenzate negativamente in contesti di stress
                  prolungato e ambienti con rapporti luce/buio irregolari.
                </Typography>
              </li>
            </ul>
          </>
        ),
      },
      {
        paragraphId: 1,
        sectionId: "nuove-contromisure",
        paragraphTitle: "Nuove contromisure e ricerche recenti",
        paragraphHeadSrcLow: "/assets/articlesImages/megnetic-shield-low.webp",
        paragraphHeadSrcHigh: "/assets/articlesImages/megnetic-shield.webp",
        paragraphImgTitle:
          "Grafico sul funzionamento degli scudi magnetici. Crediti: MECA Magnetic",
        alt: "Grafico sul funzionamento degli scudi magnetici. Crediti: MECA Magnetic",
        paragraphHeadFigcap:
          "Grafico sul funzionamento degli scudi magnetici. Crediti: MECA Magnetic",
        paragraphText: (
          <>
            <Typography variant="body1" marginLeft={1}>
              Sono in sviluppo <b>nuovi modelli di scudi magnetici</b> per
              proteggere gli astronauti dagli effetti delle radiazioni: come già
              accennato, il loro impiego sarà essenziale per sopravvivere in
              viaggi di lunghe durate. Sono inoltre in corso diversi{" "}
              <b>studi sull'influenza della gravità artificiale</b>, finalizzati
              a mitigare la perdita ossea, muscolare e i problemi al sistema
              immunitario. Infine, in questi ultimi anni, si stanno conducendo{" "}
              <b> piccole missioni orbitanti o simulazioni lunari</b> per
              testare procedure, tecnologie e protocolli psicologici degli
              astronauti; un aspetto importante da curare prima di compiere il
              grande salto verso Marte.
            </Typography>
          </>
        ),
      },
      {
        paragraphId: 2,
        sectionId: "Conclusioni",
        paragraphTitle: "Conclusioni",
        paragraphText: (
          <Typography variant="body1">
            Il viaggio verso Marte comporta <b>seri rischi</b>: salute fisica e
            mentale sono costantemente sotto pressione. Mentre molte sfide
            restano ancora irrisolte,{" "}
            <u>
              gli studi più recenti mostrano evidenze solide e iniziative
              concrete per mitigare questi rischi
            </u>
            . La preparazione tecnica, medica e psicologica, sarà essenziale per
            la sicurezza degli astronauti e il successo delle future missioni.
          </Typography>
        ),
      },
    ],
  },

  // 2. articolo su viaggio verso marte - file: src >  pages > ViaggioVersoMarte.jsx
  {
    id: 2,
    articleId: "viaggio-su-marte-article-title",
    mainTitle:
      "Verso il Pianeta Rosso: il viaggio tra le stelle, sfide e sogni",
    srcLow: "/assets/articlesImages/mars-earth-distance-low.webp",
    srcHigh: "/assets/articlesImages/mars-earth-distance.webp",
    imgTitle: "Immagine di Terra e Marte e ciò che li separa",
    alt: "Immagine di Terra e Marte e ciò che li separa",
    figcap: "Immagine di Terra e Marte e ciò che li separa",
    introduction: (
      <>
        Quanto dura il viaggio e come ci si prepara? Il sogno di camminare su
        Marte per la prima volta è più vicino che mai, ma il tragitto per
        raggiungerlo sarà tutt'altro che semplice.{" "}
        <b>
          <u>
            Andare su Marte è una delle sfide più ambiziose che l'essere umano
            si accinge ad affrontare
          </u>
        </b>
        . Dopo decenni di esplorazioni robotiche e missioni orbitali, sfide
        tecniche e preparazioni psicofisiche, la NASA, insieme ad altre agenzie
        spaziali e privati, ha avviato i preparativi per una prima missione con
        equipaggio verso Marte nella storia.
      </>
    ),
    // paragrafi dell'articolo in un array di oggetti con id, titolo, eventuali immagini e testi
    paragraphs: [
      {
        paragraphId: 0,
        sectionId: "durata-viaggio",
        paragraphTitle: "Un viaggio di 18 mesi",
        paragraphText: (
          <>
            <Typography variant="body1">
              Una missione su Marte non sarà un semplice trasferimento nello
              spazio. Si tratterà di un'operazione complessa, della durata
              complessiva di circa <b>18 mesi</b>:{" "}
              <i>
                sei mesi di andata, un soggiorno di altri sei mesi sul pianeta e
                ulteriori sei per il rientro
              </i>
              . Ogni fase comporterà sfide logistiche, mediche e psicologiche.
            </Typography>
            <Typography variant="body1">
              Il <b>periodo di lancio</b> dovrà essere scelto con estrema
              attenzione, sfruttando le finestre di lancio ottimali, che si
              verificano ogni 26 mesi,{" "}
              <i>
                quando la Terra e Marte si trovano nella posizione più
                favorevole
              </i>
              . Con i sistemi attuali, il tempo medio di percorrenza varia tra i
              7 e i 10 mesi, ma nuove tecnologie mirano a ridurre drasticamente
              questa durata. {/* CTA ad articolo correlato */}
              <Link
                to="/tecnologie-di-marte"
                className="hover:tracking-widest hover:underline hover:underline-offset-8 transition-all duration-500 ease-in-out text-orange-200"
              >
                Scopri le tecnologie in sviluppo per Marte.
              </Link>
            </Typography>
          </>
        ),
      },
      {
        paragraphId: 1,
        sectionId: "fasi-del-viaggio",
        paragraphTitle: "Fasi principali della traversata",
        paragraphText: (
          <>
            <Typography variant="body1">
              Un viaggio marziano si articolerà in tre grandi fasi:
            </Typography>
            <ol className="list-decimal space-y-6 pl-6">
              <li>
                <Typography variant="body1" marginLeft={1}>
                  <b>Fuga dall'orbita terrestre</b>
                  <br />
                  Il veicolo lascia la gravità della Terra tramite una spinta
                  iniziale, posizionandosi sulla traiettoria verso Marte.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" marginLeft={1}>
                  <b>Crociera interplanetaria</b>
                  <br />
                  La navetta attraversa lo spazio profondo, eseguendo eventuali
                  correzioni di rotta e gestendo le risorse vitali come
                  ossigeno, cibo e acqua.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" marginLeft={1}>
                  <b>Inserimento in orbita marziana e discesa</b>
                  <br />
                  L'approccio finale richiede il rallentamento del veicolo,
                  ulteriori manovre di correzione e l'entrata nella traiettoria
                  per l'atterraggio nell'orbita marziana.
                </Typography>
              </li>
            </ol>
          </>
        ),
      },
      {
        paragraphId: 2,
        sectionId: "side-tecniche",
        paragraphTitle: "Le sfide tecniche del viaggio",
        paragraphText: (
          <>
            <Typography variant="body1">
              Affrontare il viaggio verso Marte significa fronteggiare contro un
              insieme di problematiche complesse. Per saperne di più,{" "}
              {/* CTA ad articolo correlato */}
              <Link
                to="/pericoli-del-viaggio"
                className="hover:tracking-widest hover:underline hover:underline-offset-8 transition-all duration-500 ease-in-out text-orange-200"
              >
                scopri i rischi del viaggio.
              </Link>
            </Typography>
            <ul className="list-disc space-y-6 pl-6">
              <li>
                <Typography variant="body1" marginLeft={1}>
                  <b>Propulsione e tempo di trasferimento</b>
                  <br />I motori chimici richiedono mesi, ma sono allo studio
                  soluzioni come la propulsione laser-fotonica, che potrebbe
                  ridurre il viaggio a 20-30 giorni, almeno in teoria.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" marginLeft={1}>
                  <b>Supporto vitale autonomo</b>
                  <br />
                  Sistemi chiusi dovranno garantire il riciclo di acqua,
                  ossigeno e rifiuti per mesi, senza la possibilità di avere
                  rifornimenti.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" marginLeft={1}>
                  <b>Effetti sulla salute</b>
                  <br />
                  La microgravità prolungata, l'esposizione alle radiazioni
                  cosmiche e lo stress psicologico in ambienti con rapporti
                  luce/buio irregolari, sono rischi concreti.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" marginLeft={1}>
                  <b>Affidabilità dei sistemi</b>
                  <br />
                  Ogni componente dovrà essere collaudato e resistente, poiché
                  un guasto qualsiasi potrebbe compromettere la missione.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" marginLeft={1}>
                  <b>Comunicazioni con la Terra:</b>
                  <br />I ritardi fino a 20-40 minuti renderanno impossibile il
                  controllo in tempo reale. Gli astronauti dovranno agire in
                  completa autonomia.
                </Typography>
              </li>
            </ul>
          </>
        ),
      },
      {
        paragraphId: 3,
        sectionId: "bandiera-marte",
        paragraphTitle: "La bandiera marziana",
        paragraphHeadSrcLow: "/assets/articlesImages/flag-of-Mars-low.webp",
        paragraphHeadSrcHigh: "/assets/articlesImages/flag-of-Mars.webp",
        paragraphImgTitle:
          "Immagine della bandiera tricolore di Marte approvato dalla Mars Society e Planetary Society",
        alt: "Immagine della bandiera tricolore di Marte approvato dalla Mars Society e Planetary Society",
        paragraphHeadFigcap:
          "Immagine della bandiera tricolore di Marte approvato dalla Mars Society e Planetary Society",
        paragraphText: (
          <>
            <Typography variant="body1">
              Anche il simbolismo ha il suo spazio in questa grande avventura.
              La bandiera marziana,{" "}
              <i>
                ispirata al ciclo di romanzi fantascientifici intitolati
                'Trilogia di Marte' <b>(Red Mars, Green Mars, Blue Mars)</b> di
                Kim Stanley Robinson
              </i>
              , è composta da tre bande verticali: rossa (Marte attuale), verde
              e blu, a rappresentare la speranza in una futura colonizzazione.
            </Typography>
            <Typography variant="body1">
              <u>Questa bandiera è già stata portata in orbita nel 1999</u> a
              bordo dello Space Shuttle Discovery e viene utilizzata
              simbolicamente in progetti come la Flashline Mars Arctic Research
              Station in Canada. Non è ufficiale, ma rappresenta una visione
              condivisa tra scienza e fantascienza.
            </Typography>
          </>
        ),
      },
      {
        paragraphId: 4,
        sectionId: "Conclusioni",
        paragraphTitle: "Conclusioni",
        paragraphText: (
          <>
            <Typography variant="body1">
              Il viaggio verso Marte non è più solo un sogno fantascientifico: è
              una realtà in costruzione, un'impresa al limite delle capacità
              umane e tecnologiche. I primi passi sono stati compiuti, le sfide
              sono immense, ma la determinazione è ancora più grande. Se il XXI
              secolo ha già visto l'espansione dell'uomo nello spazio, il
              prossimo traguardo sarà lasciare la prima impronta umana su Marte,
              realizzando quella che sarà la più grande avventura della nostra
              epoca.
            </Typography>
          </>
        ),
      },
    ],
  },
  // 3. articolo sui pericoli del pianeta Marte - file: src > pages > PericoliDiMarte.jsx
  {
    id: 3,
    articleId: "pericoli-di-marte-article-title",
    mainTitle:
      "I rischi della superficie marziana: radiazioni, freddo e tempeste",
    srcLow: "/assets/infoCards/lowRes/infoCardMarsRisks-low.webp",
    srcHigh: "/assets/infoCards/infoCardMarsRisks.webp",
    imgTitle: "Due astronauti sul suolo marziano",
    alt: "Immagine di Terra e Marte e ciò che li separa",
    figcap: "Due astronauti sul suolo marziano",
    introduction: (
      <>
        Molti sognano di camminare un giorno su Marte, ma la realtà è ben
        diversa: atmosfera rarefatta, temperature estreme e radiazioni.
        Esploriamo in questo articolo i principali rischi che attenderebbero i
        futuri coloni marziani, se non ci preparassimo adeguatamente.
      </>
    ),
    // paragrafi dell'articolo in un array di oggetti con id, titolo, eventuali immagini e testi
    paragraphs: [
      {
        paragraphId: 0,
        sectionId: "atterraggio-pianeta",
        paragraphTitle: "Atterraggio traumatico",
        paragraphText: (
          <>
            <Typography variant="body1">
              L'atmosfera marziana è molto rarefatta, circa 100 volte meno densa
              di quella terrestre, e non offre abbastanza resistenza per
              rallentare navicelle pesanti. Per missioni con carichi pesanti, è
              indispensabile usare{" "}
              <b>paracaduti avanzati, razzi frenanti o sistemi ibridi</b>. La
              NASA sta testando il{" "}
              <b>
                <u>Low-Density Supersonic Decelerator</u>
              </b>
              : un veicolo progettato per{" "}
              <i>
                testare tecnologie di atterraggio di carichi pesanti su Marte
              </i>
              , che utilizza un deceleratore gonfiabile circolare in aria
              compressa che per rallenta il veicolo prima che venga dispiegato
              un paracadute supersonico. Lo scopo è far atterrare carichi
              pesanti quanto una navicella con equipaggio a bordo.
            </Typography>
          </>
        ),
      },
      {
        paragraphId: 1,
        sectionId: "temperature-estreme",
        paragraphTitle: "Gelo e temperature estreme",
        paragraphHeadSrcLow:
          "/assets/articlesImages/Frozen-Water-on-Mars-low.webp",
        paragraphHeadSrcHigh:
          "/assets/articlesImages/Frozen-Water-on-Mars.webp",
        paragraphImgTitle:
          "Immagine ritraente una regione di Marte molto fredda",
        alt: "Immagine ritraente una regione di Marte molto fredda",
        paragraphHeadFigcap:
          "Immagine ritraente una regione di Marte molto fredda",
        paragraphText: (
          <>
            <Typography variant="body1">
              Le condizioni termiche di Marte sono dure: le{" "}
              <i>temperature medie</i> si aggirano attorno a <b>-60C</b>, ma
              possono scendere <b>sotto i -150C</b> nelle regioni polari{" "}
              <i>durante l'inverno</i>, o salire a pochi gradi sopra lo zero
              all'equatore nelle ore diurne. Queste escursioni termiche così
              estreme sono dovute alla sottile atmosfera marziana, composta per
              oltre il 95% da anidride carbonica (CO2), che non è in grado di
              trattenere efficacemente il calore solare.
            </Typography>
            <Typography variant="body1">
              In assenza di un concreto effetto serra, il calore accumulato
              durante il giorno viene rapidamente disperso nello spazio durante
              la notte. Inoltre, la bassa pressione atmosferica, si parla di
              meno dell'1% di quella terrestre, impedisce la presenza stabile di
              acqua allo stato liquido, rendendo l'ambiente ancora più ostile.
            </Typography>
            <Typography variant="body1">
              <u>Un ipotetico habitat artificiale su Marte</u> dovrà offrire:{" "}
              <b>isolamento estremo</b>, per proteggere gli occupanti dal freddo
              e dalle violente escursioni termiche quotidiane;{" "}
              <b>sistemi di riscaldamento affidabili</b> alimentati da pannelli
              solari o piccoli reattori nucleari, e strutture che mantengano
              pressione interna e composizione atmosferica compatibili con la
              vita umana. La progettazione di tali habitat è una delle
              principali sfide tecnologiche per la futura missione su Marte.
            </Typography>
          </>
        ),
      },
      {
        paragraphId: 2,
        sectionId: "cibo-agricoltura",
        paragraphTitle: "Cibo e agricoltura in ambienti chiusi",
        paragraphText: (
          <>
            <Typography variant="body1">
              La sopravvivenza a lungo termine su Marte dipenderà molto dalla{" "}
              <b>
                <u>capacità di produrre cibo localmente</u>
              </b>{" "}
              riducendo la dipendenza dai rifornimenti terrestri. Alcune stime
              indicano la necessità di allestire <b>serre</b> di centinaia di
              metri quadrati, che funzionino in ambienti controllati e protetti
              dalle condizioni esterne del pianeta. Nelle serre, la produzione
              alimentare dovrà avvenire in un sistema chiuso, che gestisca
              efficientemente acqua, nutrienti e luce artificiale, attraverso
              l'uso di LED a spettro regolabile per stimolare la fotosintesi.
            </Typography>
            <Typography variant="body1">
              La <b>coltivazione idroponica o aeroponica</b>, tecniche che non
              richiedono suolo e utilizzano soluzioni nutritive, rappresenta una
              delle opzioni più promettenti per massimizzare la resa in ambienti
              limitati. Tuttavia, la gestione delle risorse sarà cruciale: ogni
              goccia d'acqua dovrà essere recuperata, filtrata e riutilizzata.
            </Typography>
            <Typography variant="body1">
              Il <b>riciclo dei liquidi biologici</b>, come l'urina, è già
              realtà a bordo della Stazione Spaziale Internazionale (ISS) e sarà
              essenziale anche per le future missioni su Marte. Tuttavia, questi
              sistemi dovranno essere più robusti e affidabili per lunghi
              periodi senza manutenzione esterna, a causa della distanza dalla
              Terra e dell'impossibilità di ricevere assistenza rapida.
            </Typography>
          </>
        ),
      },
      {
        paragraphId: 3,
        sectionId: "ossigeno-su-marte",
        paragraphTitle: "Ossigeno in eccesso e rischi chimici",
        paragraphHeadSrcLow: "/assets/articlesImages/Mars-MOXIE-low.webp",
        paragraphHeadSrcHigh: "/assets/articlesImages/Mars-MOXIE.webp",
        paragraphImgTitle:
          "Schema dei componenti di MOXIE, strumento del rover Perseverance della NASA. Crediti: NASA",
        alt: "Schema dei componenti di MOXIE, strumento del rover Perseverance della NASA. Crediti: NASA",
        paragraphHeadFigcap:
          "Schema dei componenti di MOXIE, strumento del rover Perseverance della NASA. Crediti: NASA",
        paragraphText: (
          <>
            <Typography variant="body1">
              Un'eccessiva produzione di ossigeno in ambienti sigillati può
              essere pericolosa: se non bilanciata, può ridurre la percentuale
              di altri gas respirabili o aumentare il rischio di esplosioni.
              Vista l'estrema rarefazione dell'atmosfera sul pianeta, la NASA
              sta sperimentando Il dispositivo <b>MOXIE</b>, o Mars Oxygen ISRU
              Experiment, uno strumento del rover Perseverance per testare la
              produzione di ossigeno su Marte.
            </Typography>
            <Typography variant="body1">
              MOXIE estrae ossigeno dall'anidride carbonica marziana e, nei
              primi test, ha già funzionato con discreto successo: ha prodotto
              122 grammi di ossigeno in 16 esperimenti al 98% di purezza. Il
              dispositivo, ad oggi, non è ancora tarato per supportare esseri
              umani su larga scala.
            </Typography>
          </>
        ),
      },
      {
        paragraphId: 4,
        sectionId: "polveri-e-radiazioni",
        paragraphTitle:
          "Corrosione e polveri tossiche, radiazioni e raggi cosmici",
        paragraphText: (
          <>
            <Typography variant="body1">
              La <b>polvere marziana</b> che si alza dal suolo grazie ai venti è
              ricca di <i>ossidi, polveri fini e carica elettricamente</i>: può
              infiltrarsi nelle tute, negli habitat e nei sistemi meccanici,
              provocando abrasioni, usura e problemi respiratori. Le superfici
              delle attrezzature e le loro tecnologie dovranno essere progettate
              per resistere a queste condizioni.
            </Typography>
            <Typography variant="body1">
              Senza l'effetto protettivo di un campo magnetico planetario,{" "}
              <b>radiazioni solari e cosmiche</b> colpiscono direttamente la
              superficie. Queste possono danneggiare il DNA, aumentare il
              rischio di cancro e causare degenerazioni a lungo termine se
              l'esposizione non è mitigata con scudi o materiali schermanti.
            </Typography>
          </>
        ),
      },
      {
        paragraphId: 5,
        sectionId: "Conclusioni",
        paragraphTitle: "Conclusioni",
        paragraphText: (
          <>
            <Typography variant="body1">
              Marte non è come la Terra: ogni aspetto della missione,
              dall'atterraggio e produzione di ossigeno, alla protezione contro
              radiazioni e polveri, richiede tecnologie avanzate e test
              rigorosi. Con continui progressi nella composizione dei materiali,
              nei sistemi ISRU (uso In-Situ delle risorse) e nella protezione
              ambientale, è possibile ridurre i rischi e rendere una base
              marziana un giorno sostenibile e vivibile.
            </Typography>
          </>
        ),
      },
    ],
  },
  // 4. articolo sulla sopravvivenza del pianeta Marte - file: src > pages > SopravvivenzaSuMarte.jsx
  {
    id: 4,
    articleId: "sopravvivere-su-marte-article-title",
    mainTitle: "Sopravvivere su Marte: un'impresa possibile?",
    srcLow: "/assets/infoCards/lowRes/infoCardMarsSurviving-low.webp",
    srcHigh: "/assets/infoCards/infoCardMarsSurviving.webp",
    imgTitle: "Un'ipotetica colonia terrestre su Marte",
    alt: "Immagine di Un'ipotetica colonia terrestre su Marte",
    figcap: "Un'ipotetica colonia terrestre su Marte",
    introduction: (
      <>
        Molti scienziati ritengono che un giorno, forse molto lontano, la Terra
        potrebbe diventare inabitabile a causa di crisi climatiche, impatti
        cosmici o guerre globali. In quel caso Marte, per quanto ostile,
        potrebbe rappresentare <b>l'ultima possibilità di sopravvivenza per
        l'umanità</b>. Non è un'idea campata in aria: la NASA, SpaceX e numerosi
        enti di ricerca stanno già studiando come trasformare Marte in una
        seconda casa per l'uomo.
      </>
    ),
    // paragrafi dell'articolo in un array di oggetti con id, titolo, eventuali immagini e testi
    paragraphs: [
      {
        paragraphId: 0,
        sectionId: "marte-ostile",
        paragraphTitle: "Marte: ostile, ma non troppo",
        paragraphText: (
          <>
            <Typography variant="body1">
              Tra tutti i pianeti del Sistema Solare, Marte è il più simile alla
              Terra. Nonostante ad{" "}
              <i>
                oggi un essere umano sopravviverebbe non più di un minuto senza
                protezioni
              </i>{" "}
              sulla sua superficie, molte condizioni di base sono
              incredibilmente compatibili con la vita.
            </Typography>
            <ul className="list-disc space-y-6 pl-6">
              <li>
                <Typography variant="body1" marginLeft={1}>
                  <b>Durata del giorno</b>
                  <br />
                  Un giorno marziano, detto Sol, dura 24 ore e 39 minuti - quasi
                  identico a quello terrestre.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" marginLeft={1}>
                  <b>Inclinazione dell'asse</b>
                  <br />
                  Simile a quella della Terra, che garantisce stagioni regolari
                  anche se più lunghe (l'anno marziano dura circa 1,88 anni
                  terrestri).
                </Typography>
              </li>
              <li>
                <Typography variant="body1" marginLeft={1}>
                  <b>Durata del viaggio</b>
                  <br />
                  Con le tecnologie attuali, bastano 6 mesi per raggiungerlo,
                  una tempistica accettabile per missioni di lunga durata.{" "}
                  {/* CTA ad articolo correlato */}
                  <Link
                    to="/il-viaggio"
                    className="hover:tracking-widest hover:underline hover:underline-offset-8 transition-all duration-500 ease-in-out text-orange-200"
                  >
                    Approfondisci il viaggio su Marte qui.
                  </Link>
                </Typography>
              </li>
            </ul>
            <Typography variant="body1">
              Sembra tutto abbastanza fattibile, ma non è così: temperature
              estreme, atmosfera irrespirabile/rarefatta e assenza di protezione
              dalle radiazioni. Oggi Marte è un mondo secco, freddo e
              inospitale, {/* CTA ad articolo correlato */}
              <Link
                to="/pericoli-di-marte"
                className="hover:tracking-widest hover:underline hover:underline-offset-8 transition-all duration-500 ease-in-out text-orange-200"
              >
                ne abbiamo già discusso in un articolo
              </Link>
              , ma secondo la NASA è possibile terraformare per renderlo più
              simile alla Terra.
            </Typography>
          </>
        ),
      },
      {
        paragraphId: 1,
        sectionId: "terraformare-marte",
        paragraphTitle: "Terraformare Marte: missione possibile?",
        paragraphHeadSrcLow: "/assets/articlesImages/MarsColonies2-low.webp",
        paragraphHeadSrcHigh: "/assets/articlesImages/MarsColonies2.webp",
        paragraphImgTitle:
          "Immagine ritraente una possibile colonia su Marte vista dall'alto",
        alt: "Immagine ritraente una possibile colonia su Marte vista dall'alto",
        paragraphHeadFigcap:
          "Immagine ritraente una possibile colonia su Marte vista dall'alto",
        paragraphText: (
          <>
            <Typography variant="body1">
              Terraformare Marte non sarà facile, ma SI può fare. Il concetto si
              basa su un processo graduale di riscaldamento e trasformazione
              dell'atmosfera, per creare condizioni favorevoli alla vita.
            </Typography>
            <ol className="list-decimal space-y-6 pl-6">
              <li>
                <Typography variant="body1" marginLeft={1}>
                  <b>Riscaldare il pianeta</b>
                  <br />
                  Le temperature medie su Marte sono paragonabili a quelle
                  dell'Antartide: circa -60C, con punte fino a -150℃. Gli
                  scienziati ipotizzano di <b>aumentare la temperatura</b>{" "}
                  marziana sfruttando ciò che conosciamo fin troppo bene:{" "}
                  <u>i gas serra</u>.
                </Typography>
                <Typography variant="body1" marginLeft={1} marginTop={2}>
                  Iniettando CO2, metano o altri gas nell'atmosfera, si potrebbe
                  innescare un effetto serra controllato. Bastano 3-4 gradi in
                  più per iniziare a sciogliere le calotte polari e liberare
                  anidride carbonica intrappolata nel suolo. Questo
                  innescherebbe un ciclo di riscaldamento amplificato.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" marginLeft={1}>
                  <b>Sciogliere il ghiaccio</b>
                  <br />
                  Una volta aumentata la temperatura, l'acqua ghiacciata di
                  Marte comincerebbe a sciogliersi. Il pianeta ne possiede
                  molta, sottoforma di ghiaccio sotterraneo e polare. Lo
                  scioglimento porterebbe alla formazione di fiumi, laghi e
                  oceani temporanei solo se l'atmosfera riuscisse a trattenere
                  il vapore e impedirne l'evaporazione.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" marginLeft={1}>
                  <b>Costruire un'atmosfera vivibile</b>
                  <br />
                  Con la <i>temperatura e pressione in aumento</i>, si potrebbe
                  iniziare a <b>introdurre forme di vita semplici</b>, come
                  alghe, licheni e batteri estremofili, in grado di sopravvivere
                  in condizioni limite. Questi organismi, tramite la
                  fotosintesi, convertirebbero anidride carbonica in ossigeno,
                  avviando il lento processo di{" "}
                  <b>ossigenazione dell'atmosfera</b>.
                </Typography>
                <Typography variant="body1" marginLeft={1} marginTop={2}>
                  <u>Attenzione però ai tempi</u>: l'atmosfera di Marte sarebbe
                  inizialmente composta quasi solo da CO2 e raggiungere livelli
                  di ossigeno respirabili per un essere umano potrebbe
                  richiedere secoli, o migliaia di anni.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" marginLeft={1}>
                  <b>Preparare il suolo</b>
                  <br />
                  Il terreno marziano non è fertile: prima di poter coltivare su
                  larga scala, bisognerà arricchirlo con sostanze nutritive e
                  proteggerlo dalle tossine della regolite (strato superficiale
                  di frammenti rocciosi, polvere e detriti che ricopre la
                  superficie di alcuni corpi celesti - come Marte). Sono in
                  studio serre pressurizzate, coltivazioni in idro/aeroponica e
                  persino microrganismi in grado di "bonificare" il suolo.
                </Typography>
              </li>
            </ol>
          </>
        ),
      },
      {
        paragraphId: 2,
        sectionId: "tempo-per-terraformare",
        paragraphTitle: "Quanto tempo servirà?",
        paragraphText: (
          <>
            <Typography variant="body1">
              Secondo alcune simulazioni effettuate dalle principali agenzie
              spaziali:
            </Typography>
            <ul className="list-disc space-y-6 pl-6">
              <li>
                <Typography variant="body1" marginLeft={1}>
                  <b>Riscaldare Marte</b> potrebbe richiedere solo qualche
                  decina di anni, con tecnologie avanzate, come l'emissione
                  controllata di gas serra per trattenere il calore, e
                  cooperazione internazionale.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" marginLeft={1}>
                  <b>Costruire un'atmosfera respirabile</b> potrebbe impiegare
                  secoli o millenni, ma i progressi nel campo della
                  biotecnologia e dell'ingegneria ambientale potrebbero
                  accelerare il processo come la creazione di organismi
                  geneticamente modificati in grado di produrre ossigeno.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" marginLeft={1}>
                  <b>Proteggere la superficie dalle radiazioni cosmiche</b> è
                  una sfida cruciale per la missione: la mancanza di un campo
                  magnetico protettivo nel pianeta rende necessario lo sviluppo
                  di cupole schermate, materiali innovativi o l'utilizzo di
                  ambienti sotterranei.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" marginLeft={1}>
                  <b>Stabilire un ecosistema autosufficiente</b> richiederà anni
                  di sperimentazione: la creazione di cicli chiusi per acqua,
                  ossigeno e nutrienti, simili a quelli terrestri, sarà decisiva
                  per una colonizzazione permanente.
                </Typography>
              </li>
            </ul>
          </>
        ),
      },
      {
        paragraphId: 3,
        sectionId: "Conclusioni",
        paragraphTitle: "Conclusioni",
        paragraphText: (
          <>
            <Typography variant="body1">
              Terraformare Marte non è impossibile, ma rimane una sfida che
              richiederà tempo, risorse e una visione a lungo termine. Le
              condizioni di partenza sono più favorevoli di quanto si possa
              pensare, ma gli ostacoli tecnologici, ambientali e biologici
              restano enormi. Nonostante ciò, i primi passi per un'effettiva
              colonizzazione, come il{" "}
              <b>
                <i>riscaldamento del pianeta</i>
              </b>{" "}
              e{" "}
              <b>
                <i>l'introduzione di forme di vita semplici</i>
              </b>
              , sono già, teoricamente, alla nostra portata. Se l'umanità saprà
              unire scienza e cooperazione, Marte potrebbe un giorno diventare
              una nuova casa.
            </Typography>
          </>
        ),
      },
    ],
  },
];

export default ArticlePagesData;
