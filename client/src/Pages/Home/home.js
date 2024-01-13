import React from 'react';
import './home.css';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import { useState } from 'react';
import Slider from 'react-slick';
import Card from '../../Components/Card/card';
import "slick-carousel/slick/slick.css";  // Update the path accordingly
import "slick-carousel/slick/slick-theme.css"; 
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import Accordion from '../../Components/Accordion/Accordion';

function Home() {
    const [activeContent, setActiveContent] = useState("במידה ואתם מתמודדים עם הפסקת חשמל, כדאי לבדוק האם הפסקת החשמל היא גם אצל השכנים או רק בבתיכם. במידה וההפסקת חשמל היא גם אצל השכנים כנראה שחברת החשמל דואגת לכך שהחשמל ישוב לפעול בהקדם. במידה והפסקת החשמל היא רק בביתכם, אשמח להגיע ולסייע בפתרון הבעיה.");
    const [activeBox, setActiveBox] = useState(1);


    const handleBoxClick = (boxNumber, content) => {
        setActiveContent(content);
        setActiveBox(boxNumber);
    };

    const boxStyle = (boxNumber) => ({
        cursor: "pointer",
        backgroundColor: activeBox === boxNumber ? "#FF4500" : "white", 
        color: activeBox === boxNumber ? "white" : "black", 
    });

    const [activeIndices, setActiveIndices] = useState([]);

    const handleClick = (index) => {
        if (activeIndices.includes(index)) {
            setActiveIndices(activeIndices.filter(i => i !== index)); // Close the item
        } else {
            setActiveIndices([...activeIndices, index]); // Add to open items
        }
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: window.innerWidth <= 1025 ? 1 : 3,
        slidesToScroll: 1,
      };
      console.log(window.innerWidth);
      

    return (
        <div className="home">
            <div className="heading">
                <h1>קובי מור - חשמלאי ראשי
                </h1>
            </div>
            
            <Card />
            <div className="container">
                <div className="top">
                    <h2>שירותי תיקון נפוצים</h2>
                </div>
                <div className="bottom">
                    <div className="left">
                        <div className="text">
                            <p>{activeContent}</p>
                        </div>
                    </div>
                    <div className="right">
                        <ul className="list"> 
                            <li className="item" style={boxStyle(1)} onClick={() => handleBoxClick(1,"במידה ואתם מתמודדים עם הפסקת חשמל, כדאי לבדוק האם הפסקת החשמל היא גם אצל השכנים או רק בבתיכם. במידה וההפסקת חשמל היא גם אצל השכנים כנראה שחברת החשמל דואגת לכך שהחשמל ישוב לפעול בהקדם. במידה והפסקת החשמל היא רק בביתכם, אשמח להגיע ולסייע בפתרון הבעיה.")}>
                            <ElectricBoltIcon className='icon'/>
                            <p>הפסקות חשמל</p>
                            </li>
                            <li className="item" style={boxStyle(2)} 
                            onClick={() => handleBoxClick
                            (2,"תפקידו של מפסק הפחת במערכת החשמל חשוב ביותר והוא למנוע התחשמלות על ידי זיהוי זליגת חשמל מאחד המכשירים. במצב כזה, מפסק הפחת מנתק אוטומטית את אספקת החשמל ללוח וכך מונע תקלות חשמליות. אם משהו השתבש בחשמל בביתכם, המקום הראשון שיש לבדוק הוא את מפסק הפחת שנמצא בלוח החשמל. להמשך טיפול והתייעצות בנושא ניתן לפנות אליי.")}>
                            <ElectricBoltIcon className='icon'/>
                            <p>מפסקי פחת</p>
                            </li>
                            <li className="item" style={boxStyle(3)} onClick={() => handleBoxClick(3,
                            "לוח חשמל תקין הינו פריט חיוני היכול להציל חיי אדם במקרה של התחשמלות, כאשר מעוניינים להתקין לוח חשמל או לערוך תחזוקת לוחות חשמל בכל מבנה, חובה להזמין חשמלאי מוסמך, בעל ניסיון עשיר בכדי שיבצע את התקנת הלוח וחלוקה נכונה באופן המקצועי ביותר. כאשר מכשירי החשמל אינם פועלים בקיבולת מלאה, או כאשר האורות שלך מהבהבים באופן בלתי צפוי, ישנם מספר סימנים נוספים לכך שייתכן שתזדקקו לתיקון לוח החשמל שלכם. לעתים נגלה כי מדובר בתיקון נקודתי בלבד אשר יוכל לפתור את התקלה. במקרים אחרים, ייתכן ומצבו של לוח החשמל כמו גם היותו מיושן, יצריך החלפה כללית מלאה.")}>
                            <ElectricBoltIcon className='icon'/>
                            <p>תיקון לוחות חשמל</p>
                            </li>
                            <li className="item" style={boxStyle(4)} onClick={() => handleBoxClick(4,'מתגים ושקעי חשמל חיוניים לתפקוד הבית, דרכם נוכל להדליק ולכבות את מכשירי החשמל שלנו. כאשר יש לך מתגים ושקעים לא תקינים בביתך, אנו מציעים מתגי חשמל ושירותי תיקון שקעים כדי לספק אספקת חשמל בטוחה ופונקציונלית.')}>
                            <ElectricBoltIcon className='icon'/>
                            <p>מתגים חשמליים</p>
                            </li>
                            <li className="item" style={boxStyle(5)} onClick={() => handleBoxClick(5,'על מנת שנוכל להתאים את הבית שלנו לטכנולוגיה המתקדמת, בזמן בניית מבנה חדש או שדרוג הבית ניתן להכין תשתית שמתאימה לבית חכם. בית חכם הוא בית שפועל על ידי מערכת המאפשרת לשלוט על מספר מוצרי חשמל בו זמנית באמצעות מפסק אחד. את מערכת הבית החכם ניתן להפעיל אפילו כאשר אתם מחוץ לבית והיא תאפשר לכם נוחות מתקדמת. מעוניינים לשמוע פרטים נוספים? חייגו אלי ואשמח לסייע.')}>
                            <ElectricBoltIcon className='icon'/>
                            <p>התקנת תשתיות לבית חכם</p>
                            </li>
                            <li className="item" style={boxStyle(6)} onClick={() => handleBoxClick(6,'רכבים חשמליים מקנים לנו יתרונות רבים וביניהם את היתרון המרכזי- להטעין את הרכב בעמדה ממש מחוץ לבית או לבניין. מה שמאפשר טעינה מלאה של הרכב בכל חזרה הביתה ובין היתר טעינה ביתית היא משמעותית כלכלית יותר מאשר טעינה של מטענים חשמליים בחוץ. על מנת שנוכל ליצור עמדה טעינה לרכב החשמלי שלך, ראשית עלינו להבין את צרכיך ובהתאם לכך נוכל לתכנן תשתית ולפרוס אותה. להתייעצות בנושא ניתן לחייג אלי ואשמח לסייע.')}>
                            <ElectricBoltIcon className='icon'/>
                            <p>עמדות טעינה לרכב חשמלי</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
          
         <Accordion />
            <div className="recommendations">
                <div className="top">
                    <h2>לקוחות ממליצים</h2>
                </div>
                <div class="carousel-container">
                    <Slider {...settings}>
                        <div className="carousel-item">
                                <div className="item">
                                    <ChatOutlinedIcon className='textIcon'/>
                                   <p>הוא החשמלאי הכי טוב, אמין, מקצועי, מיוחד ונפלא שיש! הוא מעולם לא איחר, תמיד עומד בלוחות זמנים, הוא גאון הנדסי ופותר את כל הבעיות יפה מאוד, אני מרוצה מכל מה שעשה, המלצתי עליו כבר להרבה אנשים ואני עובד איתו כבר הרבה שנים. חבל על הזמן!</p> 
                                   <h2>עקיבא קליימן</h2>
                                   <h3>סביון</h3>
                                </div>
                        </div>
                        <div className="carousel-item">
                            <div className="item">
                                     <ChatOutlinedIcon className='textIcon'/>
                                    <p>קובי פשוט מצוין, הוא מקצועי, עושה עבודה לעילא ולעילא. הכל מושלם, גם בזמינות, הלבביות שלו והמחירים שלו הגונים בעיני. אני עובד איתו באופן קבוע כבר מעל ל10 שנים.</p> 
                                    <h2>שי עציוני</h2>
                                    <h3>קריית אונו</h3>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="item">
                                    <ChatOutlinedIcon className='textIcon'/>
                                    <p>קובי הוא שירותי, מדהים, סבלני, מגיע בזמן, ובעיני גובה מחיר טוב. הוא לא מתעצבן וכועס כמו הרבה בעלי מקצוע. יצאת צדיק זה ממש הוא. הוא הסביר לנו את האפשרויות והמחירים ובעיני גבה מחיר טוב. ממליצה עליו בחום.</p> 
                                    <h2>יפית זכות</h2>
                                    <h3>אור יהודה</h3>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="item">
                                  <ChatOutlinedIcon className='textIcon'/>
                                    <p>החשמלאי מספר אחת במדינה! בן אדם ישר, מקצועי, יסודי ואמין. פשוט בעל מקצוע ואוו! כל מי שלוקח אותו יכול להיות בראש שקט. הוא אדיב, סובלני והמחירים שלו הוגנים לגמרי בעיניי. אני מאד מרוצה.</p> 
                                    <h2>אופיר תקוע</h2>
                                    <h3>תל מונד</h3>
                            </div>
                        </div>
                        <div className="carousel-item">
                                <div className="item">
                                  <ChatOutlinedIcon className='textIcon'/>
                                   <p>קובי היה ממש טוב. הוא אדם מקסים, ישר, מסביר הכל, מה שהוא אומר זה מה שהוא עושה והכל היה ממש בסדר גמור..</p> 
                                   <h2>קוקו כהן יעקב</h2>
                                   <h3>לוד</h3>
                                </div>
                        </div>
                        <div className="carousel-item">
                                <div className="item">
                                     <ChatOutlinedIcon className='textIcon'/>
                                   <p>קובי מקצועי, נדיב, עשה את מה שצריך לעשות באופן יסודי ואני סומכת עליו בעיניים עצומות.</p> 
                                   <h2>שלי בר</h2>
                                   <h3>אור יהודה</h3>
                                </div>
                        </div>
                        <div className="carousel-item">
                            <div className="item">
                                    <ChatOutlinedIcon className='textIcon'/>
                                    <p>הוא היה אחלה, הצליח לאבחן את הבעיה, תיקן מה שצריך והיה מקצועי. אני מרוצה מהשירות וממליץ עליו.</p> 
                                    <h2>אורי מורגנשטרן</h2>
                                    <h3>רמת גן</h3>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="item">
                                    <ChatOutlinedIcon className='textIcon'/>
                                    <p>היה מעולה! קובי מקצוען אמיתי. הוא נעים, דייק בזמנים, עמד בהבטחות ועשה עבודה מעולה. אנחנו ממליצים ומאוד מרוצים.</p> 
                                    <h2>מיכל צוקר</h2>
                                    <h3>גבעתיים</h3>
                            </div>
                        </div>
                       
                     </Slider>
                </div>
                <div class="buttons-container">
                    <button class="button-arounder"><a href="https://www.midrag.co.il/SpCard/Sp/102832?areaId=1&serviceId=152&isGeneric=false">להמלצות נוספות באתר "מידרג" לחצו כאן</a>
</button>
                </div>

             </div>
        </div>
    );

}

export default Home;