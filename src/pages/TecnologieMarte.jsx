import { Box } from "@mui/material";
import ArticlePageLayout from "../components/ArticlePageLayout";
import ArticlePagesData from "../data/ArticlePagesData";
const TecnologieMarte = () => {
  return (
    <main className="max-w-[85%] mx-auto min-md:max-w-[70%] min-lg:px-[var(--article-padding)]">
      <Box component="div" className="tecnologieMarte flex flex-col gap-8">
        {/* article layout che stampa un articolo avente un'unica struttura stilistica, ma con contenuti dinamici */}
        <ArticlePageLayout articleData={ArticlePagesData[0]} />
      </Box>
    </main>
  );
};

export default TecnologieMarte;
