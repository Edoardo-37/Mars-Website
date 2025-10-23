import React, { useEffect } from "react";
// scrollTop button imports
import ScrollToTopBtn from "./ScrollToTopBtn";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Fab from "@mui/material/Fab";
// HideOnScroll Navbar import
import HideOnScroll from "./HideOnScroll";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router"; // react router
import navLinks from "../../data/navLinks"; // navlinks


const Navbar = ({ window, navColor }, props) => {
  useEffect(() => {
    const navHeight = document.querySelector("nav").offsetHeight;   // navheight value for body padding-top
    document.documentElement.style.setProperty("--navHeight", `${navHeight}px`);
  }, []);

  // mobile drawer
  const drawerWidth = {
    // mobile responsive drawer width
    xs: 240,
    md: 360,
  };
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", backgroundColor: "var(--black)" }}
      className="h-full"
    >
      <Link to="/" title="Torna alla Home">
        <Typography variant="h5" component="h5" sx={{ fontWeight: 700, py: 4}}>
          OrbitaMarte
        </Typography>
      </Link>
      <Divider />
      <List>
        {/* mobile navlinks */}
        <Box display="flex" alignItems="center" flexDirection="column" gap={2}>
          {navLinks.map((item) => (
            <Link
              to={item.link}
              key={item.id}
              className="my-3 py-3 px- text-[var(--secondaryText)] hover:tracking-[0.05rem] hover:underline hover:underline-offset-8 transition-all duration-500 ease-in-out"
            >
              {item.label}
            </Link>
          ))}
        </Box>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <header>
      <Box sx={{ display: "flex"}}>
        <CssBaseline />
        <Box id="back-to-top-anchor" />
        <HideOnScroll {...props}>
          <AppBar
            color="transparent"
            component="nav"
            className="p-4 lg:py-2"
            sx={{
              backgroundColor: `${navColor}`,
              transition: "background-color 0.6s ease-in-out",
              backdropFilter: "blur(10px)",
            }}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { lg: "none" } }}
              >
                <MenuIcon fontSize="large" /> {/* Hamburger icon*/}
              </IconButton>
              <Link to="/" title="Torna alla Home">
                <img
                  className="w-[50px]"
                  src='/assets/marsLogo.png'
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
              <Box
                alignItems="center"
                gap={4}
                sx={{
                  display: {
                    xs: "none",
                    lg: "flex",
                  },
                }}
              >
                {/* desktop navlinks */}
                {navLinks.map((item) => (
                  <Link
                    to={item.link}
                    key={item.id}
                    className="my-1.5 hover:tracking-[0.05rem] hover:font-bold transition-all duration-500 ease-in-out"
                  >
                    {item.label}
                  </Link>
                ))}
              </Box>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", lg: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: {
                  xs: drawerWidth.xs,
                  md: drawerWidth.md,
                },
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>
      {/* Scroll to top button */}
      <ScrollToTopBtn>
        <Fab
          aria-label="scroll back to top"
          sx={{
            width: { xs: 48, md: 56, lg: 64 },
            height: { xs: 48, md: 56, lg: 64 },
            backgroundColor: "var(--color-orange-600)",
            color: "white",
            transition: "background-color 0.5s ease",
            "&:hover": {
              backgroundColor: "var(--color-orange-400)",
            },
          }}
        >
          <KeyboardArrowUpIcon
            sx={{
              fontSize: { xs: "1.5rem", md: "2rem" }, // diemsnione icona freccia responsive
            }}
          />
        </Fab>
      </ScrollToTopBtn>
    </header>
  );
};

export default Navbar;
