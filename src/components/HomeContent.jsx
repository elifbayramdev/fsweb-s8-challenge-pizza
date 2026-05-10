import { useNavigate } from "react-router-dom";

export default function HomeContent() {
    const navigate = useNavigate();

    return (
        <>
        <section className="foods">
      <div className="food">
        <img src="src/assets/iteration-2-images/icons/1.svg" alt="Kore"/>
        <p>YENİ Kore!</p>
      </div>
      <div className="food">
        <img src="src/assets/iteration-2-images/icons/2.svg" alt="Pizza"/>
        <p>Pizza</p>
      </div>
      <div className="food">
        <img src="src/assets/iteration-2-images/icons/3.svg" alt="Burger"/>
        <p>Burger</p>
      </div>
      <div className="food">
        <img src="src/assets/iteration-2-images/icons/4.svg" alt="Kizartmalar"/>
        <p>Kızartmalar</p>
      </div>
      <div className="food">
        <img src="src/assets/iteration-2-images/icons/5.svg" alt="Fastfood"/>
        <p>Fast food</p>
      </div>
      <div className="food">
        <img src="src/assets/iteration-2-images/icons/6.svg" alt="Gazli"/>
        <p>Gazlı İçecek</p>
      </div>
    </section>

    <section className="promo-section">
      <div className="promo-grid">

        <div className="promo-card promo-large">
          <h2>Özel<br/>Lezzetus</h2>
          <p>Position:Absolute Acı Burger</p>
          <button onClick={() => navigate("/order")}>SİPARİŞ VER</button>
          <img src="src/assets/iteration-2-images/cta/kart-1.png" alt=""/>
        </div>

        <div className="promo-card promo-small dark">
          <h3>Hackathlon<br/>Burger Menü</h3>
          <button onClick={() => navigate("/order")}>SİPARİŞ VER</button>
          <img src="src/assets/iteration-2-images/cta/kart-2.png" alt=""/>
        </div>

        <div className="promo-card promo-small light">
          <h3><span>Çooook</span> hızlı<br/>npm gibi kurye</h3>
          <button onClick={() => navigate("/order")}>SİPARİŞ VER</button>
          <img src="src/assets/iteration-2-images/cta/kart-3.png" alt=""/>
        </div>

      </div>
    </section>

    <section className="titles">
      <p className="title1">
        en çok paketlenen menüler
      </p>
      <p className="title2">
        Acıktıran Kodlara Doyuran Lezzetler
      </p>
    </section>

    <section className="foods-slider">
      <div className="slider-item">
        <div className="pill">
          <img src="src/assets/iteration-2-images/icons/1.svg" alt=""/>
          <p>Ramen</p>
        </div>
      </div>

      <div className="slider-item active">
        <div className="pill">
          <img src="src/assets/iteration-2-images/icons/2.svg" alt=""/>
          <p>Pizza</p>
        </div>
      </div>

      <div className="slider-item">
        <div className="pill">
          <img src="src/assets/iteration-2-images/icons/3.svg" alt=""/>
          <p>Burger</p>
        </div>
      </div>

      <div className="slider-item">
        <div className="pill">
          <img src="src/assets/iteration-2-images/icons/4.svg" alt=""/>
          <p>French fries</p>
        </div>
      </div>

      <div className="slider-item">
        <div className="pill">
          <img src="src/assets/iteration-2-images/icons/5.svg" alt=""/>
          <p>Fast food</p>
        </div>
      </div>

      <div className="slider-item">
        <div className="pill">
          <img src="src/assets/iteration-2-images/icons/6.svg" alt=""/>
          <p>Soft drinks</p>
        </div>
      </div>
    </section>

    <section className="all-food">
      <div className="food-card">
        <img src="src/assets/iteration-2-images/pictures/food-1.png" alt="Terminal Pizza"/>
        <p className="food-name">Terminal Pizza</p>
        <div className="food-info">
          <p className="point">
            4.9
          </p>
          <p className="comment">
            (200)
          </p>
          <p className="price">
            60₺
          </p>
        </div>
      </div>
      <div className="food-card">
        <img src="src/assets/iteration-2-images/pictures/food-2.png" alt="Position Absolute Acı Pizza"/>
        <p className="food-name">Position Absolute Acı Pizza</p>
        <div className="food-info">
          <p className="point">
            4.9
          </p>
          <p className="comment">
            (200)
          </p>
          <p className="price">
            60₺
          </p>
        </div>
      </div>
      <div className="food-card">
        <img src="src/assets/iteration-2-images/pictures/food-3.png" alt="useEffect Tavuklu Burger"/>
        <p className="food-name">useEffect Tavuklu Burger</p>
        <div className="food-info">
          <p className="point">
            4.9
          </p>
          <p className="comment">
            (200)
          </p>
          <p className="price">
            60₺
          </p>
        </div>
      </div>
    </section>
        </>
    );
}