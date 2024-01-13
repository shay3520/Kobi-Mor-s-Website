import React from 'react';
import './card.css';
import Photo from "./p6home.jpg"
import P1 from "./p2home.jpg"
import P2 from "./p3home.jpg"
import P4 from "./p4home.jpg"
import TungstenRoundedIcon from '@mui/icons-material/TungstenRounded';


function Card() {
  return (
    <div className="container-card">
      <div className="right">
      <h1>קובי מור- החשמלאי הראשי שלכם</h1>
      <div className="item">
          <TungstenRoundedIcon className="icon"/>
          <h2>החשמלאי שאתם צריכים- מקצועי ואמין.</h2>
      </div>
      <div className="item">
          <TungstenRoundedIcon className="icon"/>
          <h2>בעל ניסיון של 32 שנים בתחום!</h2>
      </div>
      <div className="item">
          <TungstenRoundedIcon className="icon"/>
          <h2>היכרות מעמיקה בתחום עבודות החשמל, אחזקה ובית חכם.</h2>
      </div>
      <div className="item">
          <TungstenRoundedIcon className="icon"/>
          <h2>חשמלאי באור יהודה ובכל אזור המרכז והשרון.</h2>
      </div>
      </div>
      <div className="left">
            <div class="gallery">
                <img src={Photo} alt="a dream catcher"/>
                <img src={P1} alt="a piano"/>
                <img src={P2} alt="a dream catcher"/>
                <img src={P4} alt="a live concert"/>
            </div>
    </div>
   

</div>
  );
}

export default Card;
