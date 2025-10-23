import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import InfoCard from "./InfoCard";
import infoCardData from "../../data/infoCardData"; // InfoCard component mapping

function SubjectsSection() {
  return (
    <Box
      component="section"
      aria-labelledby="info-card-title"
      display="flex"
      flexDirection="column"
      gap={5}
      sx={{
        mb: "150px",
      }}
    >
      <Typography
        align="center"
        variant="h3"
        component="h2"
        id="info-card-title"
        sx={{ mb: "2rem" }}
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        Esplora gli argomenti
      </Typography>
      {/* mapping del componente InfoCard */}
      <Grid container rowSpacing={{ xs: 6, lg: 12 }}>
        {infoCardData.map((card) => {
          return (
            <Grid key={card.id} size={{ xs: 12 }}>
              <InfoCard cardData={card} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
export default SubjectsSection;
