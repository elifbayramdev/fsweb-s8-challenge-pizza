export default function HomeFooter() {
  return (
    <footer>
      <div className="info">
        <h1>Teknolojik Yemekler</h1>

        <div>
          <img src="/src/assets/iteration-2-images/footer/icons/icon-1.png" alt="" />
          <p>341 Londonderry Road, Istanbul Türkiye</p>
        </div>

        <div>
          <img src="/src/assets/iteration-2-images/footer/icons/icon-2.png" alt="" />
          <p>aciktim@teknolojikyemekler.com</p>
        </div>

        <div>
          <img src="/src/assets/iteration-2-images/footer/icons/icon-3.png" alt="" />
          <p>+90 216 123 45 67</p>
        </div>
      </div>

      <div className="hot-menu">
        <p>Hot Menu</p>
        <ul>
          <li>Terminal Pizza</li>
          <li>5 Kişilik Hackathlon Pizza</li>
          <li>useEffect Tavuklu Pizza</li>
          <li>Beyaz Console Frosty</li>
          <li>Testler Geçti Mutlu Burger</li>
          <li>Position Absolute Acı Burger</li>
        </ul>
      </div>

      <div className="instagram">
        <p>Instagram</p>

        <div className="insta-photos">
          <div>
            <img src="src/assets/iteration-2-images/footer/insta/li-0.png" alt="" />
            <img src="src/assets/iteration-2-images/footer/insta/li-1.png" alt="" />
            <img src="src/assets/iteration-2-images/footer/insta/li-2.png" alt="" />
          </div>

          <div>
            <img src="src/assets/iteration-2-images/footer/insta/li-3.png" alt="" />
            <img src="src/assets/iteration-2-images/footer/insta/li-4.png" alt="" />
            <img src="src/assets/iteration-2-images/footer/insta/li-5.png" alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
}