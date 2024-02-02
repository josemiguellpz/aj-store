import PropTypes from 'prop-types';
import { Button as Btn } from "@mui/material";

const Button = ({
  disabled,
  endIcon,
  onClick,
  size,
  startIcon,
  sx,
  title,
  variant
}) => {
  return(
    <Btn
      color='inherit'
      disabled={disabled}
      endIcon={endIcon}
      onClick={onClick}
      startIcon={startIcon}
      size={size}
      variant={variant}
      sx={{...sx, 
        backgroundColor: '#efb810', 
        fontWeight: 'bold',
        color: 'black',
        '&:focus': { outline: 'none', },
        '&:hover': {
          backgroundColor: '#efb810', 
        },
      }}
    >
      {title}
    </Btn>
  );
}

Button.defaultProps = {
  disabled: false,
  endIcon: null,
  onClick: () => null,
  size: "medium",
  startIcon: null,
  sx: null,
  variant: "contained",
};

Button.PropTypes = {
  disabled: PropTypes.bool,
  endIcon: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  size: PropTypes.string,
  startIcon: PropTypes.string,
  sx: PropTypes.object,
  title: PropTypes.string.isRequired,
  variant: PropTypes.string,
}

export default Button;