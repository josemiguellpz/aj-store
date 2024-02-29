import { styled } from '@mui/system';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const WhatsAppContainer = styled('div')({
  position: 'fixed',
  display: 'flex',
  bottom: 16,
  right: 16,
  backgroundColor: '#25d366',
  justifyContent:'center',
  alignItems:'center',
  color: '#fff',
  borderRadius: '50%',
  width: "2rem", 
  height: "2rem",
  padding: 8,
  zIndex: 1000,
  cursor: 'pointer',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.1)',
  },
});

const WhatsAppButton = () => {

  const handleWhatsAppClick = () => window.open('https://api.whatsapp.com/send?phone=2321254233', '_blank');

  return (
    <WhatsAppContainer onClick={handleWhatsAppClick}>
      <WhatsAppIcon fontSize='large'/>
    </WhatsAppContainer>
  );
};

export default WhatsAppButton;
