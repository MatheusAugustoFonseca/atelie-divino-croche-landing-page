import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import { whatsAppBtn, instragramBtn } from '../script';

function Footer() {
  return (

    <footer>
      <div>

        <p>Informações para contato:</p>
        <div>
          <button aria-label="WhatsApp Button" onClick={ whatsAppBtn }>
            <WhatsAppIcon />
          </button>
          {' '}
          (71) 99721-6185
        </div>

        <div>
          <button aria-label="Instagram Button" onClick={ instragramBtn }>
            <InstagramIcon />
          </button>
          {' '}
          @ateliedivinocroche
        </div>
        <p>Salvador - Bahia - Brasil</p>
      </div>

    </footer>

  );
}

export default Footer;
