import Chip from '@mui/material/Chip';

const ChipButton = ({
  onClick,
  size,
  icon,
  label,
  sx,
}) => {
  return (
    <Chip size={size} icon={icon} label={label} onClick={onClick} sx={sx}/>
  );
}

ChipButton.defaultProps = {
  size: 'medium',
};

export default ChipButton;