import "./contact.css" 
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import EmailIcon from '@mui/icons-material/Email';
import First from "./first.jpg"
import emailjs from 'emailjs-com';



function contact(){
    
    function sendMail(e) {  
        e.preventDefault(); 
        const serviceId = "service_6ywa0jy";
        const templateId = "template_xro9rcb";

        const form = e.target; 
    
        emailjs.sendForm(serviceId, templateId, form)
            .then(res => {
                console.log("SUCCESS!", res);
                alert("ההודעה נשלחה בהצלחה!");
                form.reset(); 
            }, err => {
                console.log("FAILED...", err);
            });
    }

    return(
        <div className="contact">
            <div className="top">
                <h1>יצירת קשר</h1>
            </div>
            <div className="bottom">
                <div className="right">
                    <h2>פרטי התקשרות</h2>
                    <div className="location">
                        <div className="white-circle"><LocationOnIcon className="icon"/></div>
                        <p>  כתובת: <br/> דקל 6 אור יהודה</p>
                    </div>
                    <div className="location">
                        <div className="white-circle"><PhoneEnabledIcon className="icon"/></div>
                        <a href="tel:+972542266843" className="phone"> טלפון:<br/> 054-2266-843</a>
                    </div>
                    <div className="location">
                        <div className="white-circle"><WhatsAppIcon className="icon"/></div>
                        <a href="https://wa.me/+972542266843" className="whatsapp">  וואטסאפ:<br/> 054-2266-843</a>
                    </div>
                    <div className="location">
                        <div className="white-circle"><EmailIcon className="icon"/></div>
                        <a href="mailto:kobimor884@gmail.com" className="email">מייל:<br/>kobimor884@gmail.com</a>
                    </div>
                </div>
                <div className="middle">
                    <h2>טופס יצירת קשר</h2>
                    <form onSubmit={sendMail}> 
                    <input type="text" placeholder="שם מלא" className="input-field" id="name" name="name" />
                    <input type="text" placeholder="טלפון" className="input-field" id="phone" name="phone"/>
                    <input type="text" placeholder="מייל" className="input-field" id="email" name="email"/>
                    <textarea placeholder="תוכן ההודעה" className="input-field content" id="content" name="content"></textarea>
                        <button type="submit" className="submit-btn">שלח</button>
                    </form>    
                </div>
                <div className="left">
                <img src={First} alt=""></img> 
                </div> 
            </div>
        </div>
    )
}

export default contact;