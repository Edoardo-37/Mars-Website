import useScrollTrigger from "@mui/material/useScrollTrigger"; // elevation trigger imports
import Slide from "@mui/material/Slide";

function HideOnScroll({ children }) {
  const isLargeScreen = window.matchMedia("(min-width: 1200px)").matches;
  const trigger = useScrollTrigger({
    target: undefined,
  });
  if (isLargeScreen) {
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children ?? <div />}
      </Slide>
    );
  }
  return <>{children}</>;
}

export default HideOnScroll;
