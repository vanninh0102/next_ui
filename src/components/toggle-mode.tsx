import { useTheme, Box, IconButton } from "@mui/material";
import { useContext } from "react";
import ColorModeContext from "../app/themes/color-mode-context";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

export default function MyApp() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const toggleMode = () => {
    colorMode.toggleColorMode();
    document.querySelector("#__root");
  };
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
        color: "text.primary",
        borderRadius: 1,
        p: 3,
      }}
    >
      {theme.palette.mode} mode
      <IconButton
        sx={{ ml: 1 }}
        onClick={colorMode.toggleColorMode}
        color="inherit"
      >
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </Box>
  );
}
