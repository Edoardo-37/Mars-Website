import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import VideoEmbed from "./VideoEmbed";
import homeVideoData from "../../data/homeVideoData"; // videoEmbed component mapping

function VideoSection() {
  return (
    <Box
      component="section"
      id="first-look-section"
      aria-labelledby="video-section-title"
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={5}
      sx={{
        mb: "150px",
      }}
    >
      <Typography
        id="video-section-title"
        variant="h3"
        component="h2"
        align="center"
        gutterBottom
        data-aos="zoom-in-up"
        data-aos-duration="2000"
      >
        Esplora Il pianeta
      </Typography>
      <Typography variant="body1" align="center" data-aos="zoom-in-down"
        data-aos-duration="2500">
        Dai un primo sguardo su Marte tramite una selezione di video riguardanti
        atterraggi, panoramiche e scoperte sensazionali.
      </Typography>
      <div className="grid grid-cols-1 gap-12 w-[80%] lg:grid-cols-3 lg:gap-6">
        {/* mapping del componente videoEmbed */}
        {homeVideoData.map((video) => {
          return <VideoEmbed key={video.id} videoData={video} />;
        })}
      </div>
    </Box>
  );
}

export default VideoSection;
