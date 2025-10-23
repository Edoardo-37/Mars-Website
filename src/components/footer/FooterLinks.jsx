import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from "react-router";

const FooterLinks = ({ linkData, linkGroupTitle }) => {
  return (
    <Grid size={{ xs: 12, md: 6, lg: 4 }}>
      <Box
        display="flex"
        flexDirection="column"
        gap={2}
        sx={{ alignItems: { xs: "start", lg: "end" } }}
      >
        <Typography variant="subtitle1" fontWeight="bold">
          {linkGroupTitle}
        </Typography>
        {linkData.map((item) => (
          <Link
            to={item.link}
            key={item.id}
            className="hover:tracking-widest hover:underline hover:underline-offset-8 transition-all duration-500 ease-in-out mb-[0.25rem] py-1"
          >
            {item.label}
          </Link>
        ))}
      </Box>
    </Grid>
  );
};

export default FooterLinks;
