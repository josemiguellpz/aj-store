import PropTypes from 'prop-types';
import { Button as Btn } from "@mui/material";

const Button = ({
  type,
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
      type={type}
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

Button.propTypes = {
  disabled: PropTypes.bool,
  endIcon: PropTypes.object,
  onClick: PropTypes.func.isRequired,
  size: PropTypes.string,
  startIcon: PropTypes.object,
  sx: PropTypes.object,
  title: PropTypes.string.isRequired,
  variant: PropTypes.string,
}

export default Button;