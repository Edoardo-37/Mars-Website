import { Box, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import LazyImageObserver from "./LazyImageObserver";
import ReadingProgressBar from "./ReadingProgressBar";

const ArticlePageLayout = ({ articleData }) => {
  return (
    <>
      <LazyImageObserver />{" "}
      {/* lazy loader per un miglior caricamento delle immagini */}
      <ReadingProgressBar /> {/* Progress bar dell'articolo */}
      <Box
        component="section"
        aria-labelledby={articleData.articleId}
        display="flex"
        flexDirection="column"
        gap={5}
        sx={{
          maxWidth: "100%",
          my: "5rem",
        }}
      >
        {/* titolo principale dell'articolo */}
        <Typography
          id={articleData.articleId}
          variant="h3"
          component="h1"
          gutterBottom
          fontWeight="bold"
          data-aos="zoom-out"
          data-aos-duration="1500"
        >
          {articleData.mainTitle}
        </Typography>
        <Divider
          sx={{
            bgcolor: "var(--color-orange-500)",
            height: "5px",
          }}
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="500"
        />

        {/* immagine in testa all'articolo */}
        <Box
          component="div"
          display="flex"
          flexDirection="column"
          gap={2}
          data-aos="zoom-in"
          data-aos-duration="2000"
          data-aos-delay="2000"
        >
          <img
            loading="lazy"
            src={articleData.srcLow}
            title={articleData.imgTitle}
            alt={articleData.alt}
            className="not-loaded block rounded-xl"
            data-lazy={articleData.srcHigh}
          />
          <figcaption>
            <Typography variant="body2" align="center">
              {articleData.figcap}
            </Typography>
          </figcaption>
        </Box>

        {/* introduzione */}
        <Typography
          variant="body1"
          sx={{ pl: 2, mb: 4, borderLeft: "3px solid var(--color-orange-300)" }}
        >
          {articleData.introduction}
        </Typography>
        {/* paragrafi dinamici con array mapping */}
        {articleData.paragraphs.map((paragraph) => {
          return (
            <Box
              key={paragraph.paragraphId}
              component="section"
              aria-labelledby={paragraph.sectionId}
              sx={{ display: "flex", flexDirection: "column", gap: 5 }}
            >
              {paragraph.paragraphTitle ? (
                <>
                  <Typography
                    id={paragraph.sectionId}
                    variant="h4"
                    component="h2"
                    data-aos="fade-down"
                    data-aos-duration="2000"
                  >
                    {paragraph.paragraphTitle}
                  </Typography>
                  {/* Se esiste un'immagine di paragrafo sotto al titolo, mostrala a schermo */}
                  {paragraph.paragraphHeadSrcLow ? (
                    <>
                      <Box
                        component="div"
                        display="flex"
                        justifyItems="center"
                        alignItems="center"
                        flexDirection="column"
                        gap={2}
                        data-aos="zoom-in"
                        data-aos-duration="2000"
                      >
                        <img
                          loading="lazy"
                          src={paragraph.paragraphHeadSrcLow}
                          title={paragraph.paragraphImgTitle}
                          alt={paragraph.alt}
                          className="not-loaded rounded-xl"
                          data-lazy={paragraph.paragraphHeadSrcHigh}
                        />
                        <figcaption>
                          <Typography variant="body2" align="center">
                            {paragraph.paragraphHeadFigcap}
                          </Typography>
                        </figcaption>
                      </Box>
                    </>
                  ) : null}
                  {/* Insieme al titolo, mostra i testi dei paragrafi */}
                  {paragraph.paragraphText}
                  {paragraph.paragraphText2 ? (
                    <>{paragraph.paragraphText2}</>
                  ) : null}
                </>
              ) : (
                // altrimenti se non c'è un titolo al paragrafo stampane solo i testi
                <>
                  {paragraph.paragraphText}
                  {paragraph.paragraphText2}
                </>
              )}
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default ArticlePageLayout;
