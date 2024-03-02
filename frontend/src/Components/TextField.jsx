import PropTypes from 'prop-types';
import { TextField as Txt} from "@mui/material";

const TextField = ({
  type,
  name,
  label,
  /* placeholder, */
  value,
  onChange,
  helperText,
  disabled,
  required,
  multiline,
  size,
  sx,
}) => {
  return (
    <Txt
      type={type}
      name={name}
      label={label}
      /* placeholder={placeholder} */
      value={value}
      onChange={onChange}
      helperText={helperText}
      disabled={disabled}
      required={required}
      multiline={multiline}
      variant="outlined"
      color='warning'
      size={size}
      sx={sx}
    />
  );
};

TextField.defaultProps = {
  name: "",
  value: "",
  onChange: () => null,
  helperText: "",
  disabled: false,
  required: false,
  multiline: false,
  size: 'medium',
};

TextField.propTypes={
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  /* placeholder: PropTypes.string.isRequired, */
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  helperText: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  multiline: PropTypes.bool,
}

export default TextField;
