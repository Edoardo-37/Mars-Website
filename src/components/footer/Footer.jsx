import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import { Link } from "react-router";
import Typography from "@mui/material/Typography";
import FooterLinks from "./FooterLinks"; // link mapper component
import navLinks from "../../data/navLinks"; // link data
import informationLinks from "../../data/informationLinks"; // link data

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "rgba(30, 30, 30, 0.3)",
        backdropFilter: "blur(10px)",
        py: 6,
        px: 3,
      }}
    >
      <Grid
        container
        columnSpacing={4}
        rowSpacing={8}
        sx={{ xs: { px: 0 }, md: { px: 3 } }}
      >
        {/* colonna sinistra: logo e copyright */}
        <Grid size={{ xs: 12, lg: 4 }}>
          <Box display="flex" alignItems="start" flexDirection="column" gap={3}>
            <Box component="div" display="flex" alignItems="center">
              <Link to="/" title="Torna alla Home">
                <img
                  className="w-[50px]"
                  src="/assets/marsLogo.png"
                  alt="Logo di OrbitaMarte"
                  title="Logo di OrbitaMarte"
                />
              </Link>
              <Link to="/" title="Torna alla Home" className="grow-1">
                <Typography
                  variant="h5"
                  component="span"
                  className="px-4 lg:px-8"
                  sx={{
                    fontWeight: 700,
                  }}
                >
                  OrbitaMarte
                </Typography>
              </Link>
            </Box>
            <Typography variant="body2" color="var(--secondaryText)">
              &copy; {new Date().getFullYear()} OrbitaMarte, tutti i diritti
              riservati. <br />
              <Link
                to="http://marte.altervista.org/"
                title="Vai al sito originale"
                className="hover:tracking-widest hover:underline hover:underline-offset-8 transition-all duration-500 ease-in-out mb-[0.25rem] py-1"
              >
                Fonte originale utilizzata per questo sito: marte.altervista.org
              </Link>
            </Typography>
          </Box>
        </Grid>
        {/* colonne di destra: 1 - link navigazionali*/}
        <FooterLinks linkData={navLinks} linkGroupTitle={"Navigazione"} />
        {/* 2 - informazioni */}
        <FooterLinks
          linkData={informationLinks}
          linkGroupTitle={"Informazioni"}
        />
      </Grid>
    </Box>
  );
};

export default Footer;
