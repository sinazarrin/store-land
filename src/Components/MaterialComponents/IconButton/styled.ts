import { styled } from "@mui/material/styles";
import MuiIconButton from "@mui/material/IconButton";

export const IconButton = styled(MuiIconButton)(({ theme }) => ({
  background: "#FFFFFF",
  border: "1.5px solid #D4DAE7",
  borderRadius: 30,
  padding: 18,
  transition: ".2s",

  "&:hover": {
    color: "#1A5CFF",
    borderColor: "#1A5CFF",
  },
}));
