import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router";

const InfoCard = ({ cardData }) => {
  return (
    <Card
      sx={{
        Width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "var(--black)",
        borderRadius: "12px",
        flexDirection: {
          xs: "column",
          lg: "row",
        },
        gap: { xs: 0, lg: 2, xl: 3 },
      }}
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      {/* card image */}
      <div className="overflow-hidden lg:w-[40%] 2xl:w-[35%]">
        <img
          loading="lazy"
          src={cardData.srcLow}
          title={cardData.imgTitle}
          alt={cardData.alt}
          className="not-loaded lg:aspect-3/2 rounded-t-lg lg:rounded-bl-lg lg:rounded-tl-lg lg:rounded-tr-none"
          data-lazy={cardData.srcHigh}
        />
      </div>
      {/* card text and CTA */}
      <CardContent
        sx={{
          width: { xs: "100%", lg: "60%", xl: "65%" },
          display: "flex",
          flexDirection: "column",
          alignItems: {
            xs: "center",
            lg: "start",
          },
          justifyContent: "space-between",
          gap: 3,
          padding: { xs: "32px", lg: "24px" },
        }}
      >
        {/*Card title*/}
        <Typography
          variant="h5"
          component="h3"
          sx={{ textAlign: { xs: "center", lg: "left" }, letterSpacing: "5px" }}
        >
          {cardData.mainTitle}
        </Typography>
        <Typography
          variant="body2"
          sx={{ textAlign: { xs: "center", lg: "left" } }}
        >
          {/*Card description*/}
          {cardData.desc}
        </Typography>
        <CardActions sx={{ p: "0" }}>
          <Button
            size="small"
            variant="outlined"
            sx={{
              border: "2px solid var(--color-orange-600)",
              color: "#ffffff",
              p: "0",
              borderRadius: "12px",
              transition: "background-color 0.5s ease-in-out",
              "&:hover": {
                backgroundColor: "var(--color-orange-600)",
              },
            }}
          >
            {/* card CTA */}
            <Link
              to={cardData.ctaLink}
              className="hover:tracking-widest hover:underline hover:underline-offset-8 transition-all duration-500 ease-in-out py-2 px-4"
            >
              {cardData.ctaLabel}
            </Link>
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
