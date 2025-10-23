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
        transition: "all 1.25s ease-in-out !important",
        "&:hover": {
          backgroundColor: "var(--color-orange-400)",
          boxShadow: "0 0 30px var(--color-orange-800)",
        },
      }}
      data-aos="fade-up"
    >
      {label}
    </Button>
  );
}

export default ScrollToSectionButton;
