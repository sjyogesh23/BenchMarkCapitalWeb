import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import ToggleColorMode from "./ToggleColorMode";
import { Link } from "@mui/material";
import NavLogo from "./NavLogo.png";
import NavLogoDark from "./NavLogoDark.png";

const logoStyle = {
  width: "140px",
  height: "auto",
  cursor: "pointer",
};

const NavigationBar = ({ darkMode, toggleDarkMode, sections }) => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="fixed"
      className="mt-4"
      sx={{
        boxShadow: 0,
        backgroundColor: "transparent",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          variant="regular"
          className="flex items-center justify-between border rounded-full"
          style={{
            background: darkMode
              ? "rgba(0, 0, 0, 0.80)"
              : "rgba(255, 255, 255, 0.95)",
            borderRadius: "500px",
          }}
          sx={{
            bgcolor: darkMode
              ? "rgba(255, 255, 255, 0.4)"
              : "rgba(0, 0, 0, 0.4)",
          }}
        >
          <Box className="md:hidden">
            <Button
              variant="text"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              className={`min-w-[30px] p-4 ${darkMode ? "invert-0" : "invert"}`}
            >
              <MenuIcon />
            </Button>
            <Drawer
              anchor="left"
              open={open}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  backgroundColor: `${
                    darkMode
                      ? "rgba(0, 0, 0, 0.97)"
                      : "rgba(225, 225, 225, 0.97)"
                  }`,
                },
              }}
            >
              <Box className="min-w-[60vw] p-2 flex flex-col mt-4">
                <div>
                  {sections.map((section) => (
                    <Link
                      href={section.href_link}
                      sx={{ textDecoration: "none" }}
                      onClick={toggleDrawer(false)}
                    >
                      <MenuItem className="py-3 ">
                        <Typography
                          sx={{ textDecoration: "none" }}
                          className={`text-${
                            darkMode ? "white" : "black"
                          } font-bold`}
                        >
                          {section.title}
                        </Typography>
                      </MenuItem>
                    </Link>
                  ))}
                </div>
              </Box>
            </Drawer>
          </Box>
          <Box className="flex items-center mx-2 px-0">
            <Link href="#Home">
              <img
                src={darkMode ? NavLogoDark : NavLogo}
                style={logoStyle}
                alt="logo of sitemark"
              />
            </Link>
            <Box
              className={`hidden md:flex ${
                darkMode ? "invert" : "invert-0"
              } text`}
            >
              {sections.map((section) => (
                <Link href={section.href_link} sx={{ textDecoration: "none" }}>
                  <MenuItem className="py-3 px-6">
                    <Typography
                      variant="body2"
                      color="text.primary"
                      sx={{ textDecoration: "none", fontWeight: "bold" }}
                    >
                      {section.title}
                    </Typography>
                  </MenuItem>
                </Link>
              ))}
            </Box>
          </Box>
          <Box className="flex gap-2 items-center">
            <ToggleColorMode
              mode={darkMode ? "dark" : "light"}
              toggleColorMode={toggleDarkMode}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

NavigationBar.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      href_link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default NavigationBar;
