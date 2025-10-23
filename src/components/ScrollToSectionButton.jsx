import { Button } from "@mui/material";

function ScrollToSectionButton({ targetId, label, variant = "contained" }) {
  return (
    <Button
      href={`#${targetId}`}
      variant={variant}
      size="medium"
      sx={{
        py: "12px",
        px: "28px",
        borderRadius: "12px",
        fontWeight: "bold",
        backgroundColor: "var(--color-orange-600)",
        color: "var(--primaryText)",
        transition: "all 0.5s ease-in-out",
        "&:hover": {
          backgroundColor: "var(--color-orange-400)",
          boxShadow: "0 0 30px var(--color-orange-800)",
        },
      }}
      data-aos="fade-up"
      data-aos-duration="2500"
      data-aos-delay="1500"
    >
      {label}
    </Button>
  );
}

export default ScrollToSectionButton;
