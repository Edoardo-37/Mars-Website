# Un sito web scientifico informativo - OrbitaMarte

Un sito web responsive con articoli realizzati con React + Vite sulla missione su Marte e tutte le sue sfide.

---

## Tecnologie e librerie utilizzate:

- **[React](https://reactjs.org/)** - Libreria per lo sviluppo dell'interfaccia utente.

- **[Vite](https://vitejs.dev/)** - Bundler veloce per sviluppo e build.

- **[Tailwind](https://tailwindcss.com/)** - Framework CSS.

- **[MaterialUI](https://mui.com/)** - Libreria UI con componenti pronti per la produzione.

- **[React Router](https://reactrouter.com/home)** - Dipendenza per il routing in una SPA.

- **[AOS - Animate On Scroll](https://michalsnik.github.io/aos/)** - Dipendenza per le animazioni durante lo scorrimento della pagina.

---

**Struttura del progetto**:

- `./public/assets`: cartella con tutte le immagini e video utilizzati.
- `./styles`: cartella con tutti i fogli di stile.
- `./src/theme`: cartella con la configurazione dei temi di Material UI
- `./docs`: cartella con tutte le immagini del sito.
- `./src/data`: cartella con tutti gli array di oggetti utilizzati per mappare i componenti.
- `./src/pages`: cartella con tutte le pagine del sito.

<br />
<div align="left">

![Immagine della struttura del progetto](./docs/struttura-progetto.png)

</div>

---

### Come avviare il progetto in locale

1. Assicurati di aver installato Node.js.
2. Apri il terminale:

```bash
git clone https://github.com/Edoardo-37/Mars-Website.git
cd Mars-Website (nome repository)
npm install
npm run dev
Apri il browser su http://localhost:5173
```

3. Per testare il sito sul tuo dispositivo mobile, vai al file `package.json` > oggetto `scripts` > chiave `dev` e digita `dev --host`, quindi riavvia il server con `npm run dev` e copia l'indirizzo mostrato.
4. Per arrestare il server, premi `CTRL + C`.

---

### Pagine principali del sito

#### Home

- Above the fold con CTA.
- Barra di navigazione dinamica che si nasconde durante lo scorrimento grazie al componente `<HideOnScroll />`, responsive per dispositivi mobili e dotata anche di un pulsante _ritorna all'inizio_ visualizzato dal componente `<ScrollToTopBtn />`.
- Diverse schede, visualizzate dal componente `<InfoCard />`, che rimandano all'articolo descritto.
- Sezione video, visualizzata dai componenti `<VideoSection /> e <VideoEmbed />`, con 3 video introduttivi sulla missione su Marte.

<div align="left">

![Immagine della homepage](./docs/DesktopHome1.png)
![Immagine della sezione con le InfoCard](./docs/DesktopHome2.png)
![Immagine della sezione video](./docs/DesktopHome3.png)

</div>

#### Le caratteristiche degli articoli

- Barra di lettura progressiva visualizzata dal componente `<ReadingProgressBar />`.
- La stessa barra di navigazione della Home con tutte le sue funzionalità.
- Ogni articolo è visualizzato dal componente `<ArticlePageLayout />`. Questo componente prende tutti i dati dell'articolo come titolo, introduzione, eventuali immagini, paragrafi ecc. dagli array di oggetti `src/data/ArticlePagesData.jsx`, dove ogni oggetto è un articolo.

<div align="left">

<code>Componente ArticlePageLayout</code>

![Immagine del componente <ArticlePageLayout />](./docs/articlePageLayout-Code.png)

</div>
<div align="left">

<code>Array di Oggetti ArticlePagesData</code>

![Immagine dell'array ArticlePagesData](./docs/articlePagesData-Code.png)

</div>
<div align="left">

<code>Immagine di un articolo del sito</code>

![Immagine dell'articolo sulle tecnologie](./docs/Article1.png)
![Immagine dell'articolo sulle tecnologie](./docs/Article2.png)

</div>

#### Footer

- Ha gli stessi link della barra di navigazione per una navigazione più fluida.
- Note legali (**non presenti**).

<div align="left">

![Immagine del footer](./docs/footer.png)

</div>

---

### Build per la produzione

Eseguire il comando: `npm run build`.
La cartella `/dist` conterrà tutti i file ottimizzati.

---

#### Note tecniche & Difficoltà risolte

- Il caricamento delle immagini viene gestito tramite Lazy Loading con il componente `<LazyImageObserver />` per migliorare le prestazioni.
- In `./src/theme/theme.jsx` è presente un file tema per MUI per evitare di ripetere le stesse proprietà di stile per alcuni selettori come la famiglia e la dimensione del font h1.
- Tutti i componenti sono sviluppati con un approccio mobile-first.
- Gli stili sono gestiti dal framework Tailwind CSS insieme ad alcuni componenti pre-confezionati dalla libreria MaterialUI e agli stili generali nel file `src > index.css`.
- Per getsire il mapping dei vari componenti ho creato la cartella `./src/Data` che contiene tutti gli array di oggetti utilizzati per mappare i contenuti dinamici in vari componenti come articoli, nav/InfoLink ecc.
