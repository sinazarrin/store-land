import { styled } from "@mui/material";
import InputBase from '@mui/material/InputBase';


export const SearchFilter = styled("div")(({theme}) => ({

}))

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
  }));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    border: "1px solid gainsboro",
    borderRadius: 15,
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '30ch',
        '&:focus': {
          width: '40ch',
        },
      },
    },
  }));