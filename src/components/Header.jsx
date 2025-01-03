import { useState } from "react";
import {
  Container,
  Hidden,
  useMediaQuery,
  List,
  ListItemText,
  Box,
  Drawer,
  ListItemButton,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { logo, arrowDown } from "./SmallComponents/Images";
import { StyledText } from "./SmallComponents/AppComponents";
import { ExampleButton } from "./SmallComponents/StyledWalletButton";
import { Link } from "react-router-dom";

const navArray = [
  {
    text: "SOLUTIONS",
    link: "#",
    icon: (
      <Box
        component="img"
        sx={{ maxWidth: "100%", ml: 1 }}
        src={arrowDown}
        alt="arrow down"
      />
    ),
  },
  {
    text: "PRESALE",
    link: "#",
    icon: (
      <Box
        component="span"
        sx={{
          fontSize: "11.25px",
          textTransform: "uppercase",
          color: "#000",
          backgroundColor: "#F991A9",
          borderRadius: "42px",
          px: 0.75,
          py: 0.2,
          ml: 1,
        }}
      >
        Live
      </Box>
    ),
  },
  {
    text: "DOCUMENTS",
    link: "#",
    icon: "",
  },
  {
    text: "TEAM",
    link: "#",
    icon: "",
  },
  {
    text: "COMMUNITY",
    link: "#",
    icon: (
      <Box
        component="img"
        sx={{ maxWidth: "100%", ml: 1 }}
        src={arrowDown}
        alt="arrow down"
      />
    ),
  },
  {
    text: "CONTACT",
    link: "#",
    icon: "",
  },
];

export default function Header() {
  const [state, setState] = useState(false);
  const matches1 = useMediaQuery("(max-width:1279px)");

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  const list = () => (
    <Box
      sx={{
        width: 250,
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Box display="flex" justifyContent="center">
        <Box
          component={"img"}
          width="240px"
          maxWidth={"100%"}
          mt={2}
          src={logo}
          alt=""
        />
      </Box>
      <List>
        {navArray?.map(({ link, text, icon }) => (
          <ListItemButton key={text}>
            <ListItemText
              sx={{
                textAlign: "center",
                cursor: "pointer",
                color: "#ffffff",
                ".MuiTypography-root": {
                  fontSize: "20px",
                },
              }}
            >
              <Link
                style={{
                  textDecoration: "none",
                  color: "#fff",
                  fontSize: "15px",
                }}
                to={link}
                key={text}
                mr={3}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box component="span">{text}</Box>
                  {icon}
                </Box>
              </Link>
            </ListItemText>
          </ListItemButton>
        ))}
      </List>
      <Box mt={1} ml={1.5} display="flex" justifyContent="start">
        <ExampleButton width={"170px"} />
      </Box>
    </Box>
  );
  return (
    <>
      <Box
        sx={{
          background:
            "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(162, 1, 39, 0.8) 36%, rgba(152, 0, 0, 0.8) 59%, rgba(0, 0, 0, 0) 100%)",
        }}
        width="100%"
        py={1.5}
      >
        <Container maxWidth="xl">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box
              component="img"
              maxWidth={"100%"}
              width="240px"
              src={logo}
              alt=""
            />
            <Hidden lgDown>
              {navArray?.map(({ link, text, icon }) => (
                <Link
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                    fontSize: "15px",
                  }}
                  to={link}
                  key={text}
                  mr={3}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box component="span">{text}</Box>
                    {icon}
                  </Box>
                </Link>
              ))}
              <ExampleButton width={"123px"} />
            </Hidden>
            <Hidden lgUp>
              <IconButton onClick={toggleDrawer(true)}>
                <MenuIcon
                  style={{
                    fontSize: "38px",
                    cursor: "pointer",
                    color: "#fff",
                  }}
                />
              </IconButton>

              <Drawer
                anchor="left"
                open={state}
                onClose={toggleDrawer(false)}
                aria-hidden={!state}
                disableEnforceFocus
                sx={{
                  display: { xs: "flex", lg: "none" },
                  ".MuiDrawer-paper": {
                    backgroundColor: "#101824",
                  },
                }}
              >
                {list()}
              </Drawer>
            </Hidden>
          </Box>
        </Container>
      </Box>
    </>
  );
}
