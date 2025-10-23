import { useEffect, useState } from "react";
import { LinearProgress } from "@mui/material";

const ReadingProgressBar = () => {
  const [progress, setProgress] = useState(0);

  function updateScrollProgress() {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    setProgress(scrolled);
  }

  useEffect(() => {
    window.addEventListener("scroll", updateScrollProgress);
    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
    };
  }, []);
  return (
    <LinearProgress
      variant="determinate"
      value={progress}
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "8px",
        zIndex: 999,
        borderRadius: "0 8px 8px 0",
        backgroundColor: "var(--black)",
        "& .MuiLinearProgress-bar": {
          backgroundColor: "var(--tertiaryTint)",
          borderRadius: "0 8px 8px 0",
        },
      }}
      data-aos="fade-up"
      data-aos-duration="2000"
    />
  );
};

export default ReadingProgressBar;
