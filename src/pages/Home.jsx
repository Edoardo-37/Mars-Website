import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import ScrollToSectionButton from "../components/ScrollToSectionButton";
import LazyImageObserver from "../components/LazyImageObserver";
import VideoSection from "../components/videoSection/VideoSection";
import SubjectsSection from "../components/subjectsSection/SubjectsSection";

const Home = () => {
  return (
    <>
      <LazyImageObserver />
      <main className="max-w-[85%] mx-auto pt-12 min-lg:max-w-[90%]">
        <Box component="div" className="home">
          {/* hero section */}
          <Box
            component="section"
            aria-labelledby="home-title"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="space-between"
            gap={5}
            sx={{
              maxWidth: "100%",
              margin: "50px 0 300px 0",
            }}
          >
            <Typography
              align="center"
              variant="h2"
              component="h1"
              id="home-title"
              data-aos="zoom-out"
              data-aos-duration="1500"
            >
              Benvenuto su <b>OrbitaMarte</b>
            </Typography>
            <Typography
              variant="body1"
              align="center"
              sx={{ color: "var(--secondaryText)", mb: "4", maxWidth: 600 }}
              data-aos="fade-down"
              data-aos-duration="2000"
              data-aos-delay="1000"
            >
              Dalla Luna a Marte: tecnologie, sfide, e sogni che ci avvicinano
              al Pianeta Rosso. Esplora l'evoluzione delle missioni spaziali e
              scopri come l'umanità si sta preparando a uno dei suoi traguardi
              più ambiziosi.
            </Typography>
            {/* CTA per andare direttamente ai video */}
            <ScrollToSectionButton
              targetId={"first-look-section"}
              label={"Scopri i video"}
            />
          </Box>
          {/* Introduction Cards section */}
          <SubjectsSection />
          {/* Video Section */}
          <VideoSection />
        </Box>
      </main>
    </>
  );
};

export default Home;
