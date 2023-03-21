import { styled } from "@mui/material/styles";
import MuiTooltip, {
  TooltipProps,
  tooltipClasses,
} from "@mui/material/Tooltip";

export const Tooltip = styled(({ className, ...props }: TooltipProps) => (
  <MuiTooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: "#2C3E50",
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#2C3E50",
    borderRadius: 12,
    padding: "6px 14px",
    fontSize: 14,
  },
}));
