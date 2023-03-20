import { styled } from "@mui/material/styles";
import MaterialButton from "@mui/material/Button"

export const Button = styled(MaterialButton)({
    borderRadius: "20px",

    "& .MuiButton-startIcon": {
        marginLeft: 6,
        marginRight: 0,
      },
      "& .MuiButton-endIcon": {
        marginRight: 6,
        marginLeft: 0,
      },
})