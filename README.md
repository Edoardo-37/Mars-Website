# An informative science website - OrbitaMarte

A responsive website with articles made with React + Vite about the Mars Mission with all its challenges.

---
## Technologies and libraries used:

- **[React](https://reactjs.org/)** - User interface development library.

- **[Vite](https://vitejs.dev/)** - Fast bundler for development and build.

- **[Tailwind](https://tailwindcss.com/)** - CSS Framework.

- **[MaterialUI](https://mui.com/)** - UI Library with production-ready components.

- **[React Router](https://reactrouter.com/home)** - Dependency for routing in a SPA.

- **[AOS - Animate On Scroll](https://michalsnik.github.io/aos/)** - Dependency for animations during page scroll.
---

### Main pages of the site

#### Home
- Above the fold with CTA.
- Dynamic navbar which hides on scroll thanks to the ```<HideOnScroll />```  component, responsive for mobile and also featuring a _return to top button_ displayed by the ```<ScrollToTopBtn />```  component.
- Various cards, displayed by the ```<InfoCard />```  component, which remind to the article they describe.
- Video section, displayed by the ```<VideoSection /> and <VideoEmbed />```  components, with 3 introduction videos about the Mars Mission.

#### The articles features
- Progressive reading bar displayed by the ```<ReadingProgressBar />``` component.
- The same navbar as Home with all its features.
- Each article is displayed by the ```<ArticlePageLayout />``` component. This component takes all the article data like title, introduction, eventual images, paragraphs etc. from the ```src/data/ArticlePagesData.jsx ``` object arrays where every object is an article.

#### Footer
- It has the same links of the navbar for smoother navigation.
- Legal notes (**not actually present**).

---
### How to start the project locally

1. Make sure you have Node.js installed.
2. Open the terminal:

```bash
git clone https://github.com/Edoardo-37/Mars-Website.git
cd Mars-Website (repo name)
npm install
npm run dev
Open the browser on http://localhost:5173
```
3. To test the site on your mobile device, go to the `package.json` file > `scripts` object > `dev` key and type `dev --host`, then restart the server with `npm run dev` and copy the address shown.
4. To stop the server `CTRL + C`.

---
### Build for production
Run the command: `npm run build`.
The `/dist` folder will contain all the optimized files.

---
#### Technical Notes
- Image loading is handled via Lazy Loading with the `<LazyImageObserver />` component to improve performance.
- On `./src/theme/theme.jsx` there's a theme file for MUI to avoid repeating the same style properties for some selectors like h1 font family and size.
- All components are developed with a mobile-first approach.
- Styles are managed by the Tailwind CSS framework along with some pre-packaged components from the MaterialUI library and general styles in the `src > index.css` file.
- At the root there's the `./src/Data` folder containing all the object arrays used for mapping dynamic content in various components like articles, nav/InfoLinks etc.