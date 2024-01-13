import "./footer.css"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
function footer(){
    return(
        <div className="footer">
            <div className="right">
                <h2>קובי מור</h2>
                <h3>חשמלאי ראשי וקבלן רשום</h3>
                <p>זקוקים לעבודות חשמל? קבלן חשמל?
                 קובי מור חשמלאי ראשי לשרותכם,
                  מומחה בכל עבודות החשמל. תכנון חשמל לבית, תיקון קצרים, התקנת עמדות טעינה לרכב חשמלי, התקנת לוחות חשמל,
                  טיפול בשקעים, התקנת תשתיות לבית חכם, התקנת תאורה לבית ולגינה ועוד..
                  </p>

            </div>
            <div className="left">
                <h4>למענה מהיר:</h4>
                <button className="phone"> <a href="tel:+972542266843" className="phone">
                    <PhoneEnabledIcon className="icon" />  054-226-6843
                </a>
                </button>
                <button className="whatsapp" >
                <a href="https://wa.me/+972542266843" className="whatsapp">
                    <WhatsAppIcon className="icon" /> שלחו לי הודעה בוואטסאפ
                </a>
                </button>
                <button className="email" > 
                <a href="mailto:kobimor884@gmail.com" className="email">
                    <EmailIcon className="icon" /> שלחו לי מייל
                    </a>
                </button>

            </div>
        </div>
    )
}

export default footer;