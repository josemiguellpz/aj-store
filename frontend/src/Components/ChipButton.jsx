import Chip from '@mui/material/Chip';

const ChipButton = ({
  onClick,
  size,
  icon,
  label,
}) => {
  return (
    <Chip size={size} icon={icon} label={label} onClick={onClick} sx={{}}/>
  );
}

ChipButton.defaultProps = {
  size: 'medium',
};

export default ChipButton;