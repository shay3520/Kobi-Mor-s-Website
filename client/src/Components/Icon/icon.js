import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import "./icon.css"

function Icon() {
  


  return (
    <div className="icon-draggable" >
      <a href="tel:+972542266843">
        <PhoneEnabledIcon className='icon-phone'/>
      </a>
    </div>
  );
}

export default Icon;
