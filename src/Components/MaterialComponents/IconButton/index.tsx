import Tooltip from "../Tooltip";
import * as Styled from "./styled";

const IconButton = ({ title, ...props }: any) => {
  return (
    <Tooltip title={title}>
      <Styled.IconButton {...props} />
    </Tooltip>
  );
}

export default IconButton