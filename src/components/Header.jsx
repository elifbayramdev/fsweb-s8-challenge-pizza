import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

    return (
        <section className="main-section">
      <div className="overlay"></div>

      <div className="main-content">
        <img className="logo" src="src/assets/iteration-1-images/logo.svg" />
        <h6 className="opportunity">fırsatı kaçırma</h6>
        <h1>KOD ACIKTIRIR<br />PIZZA, DOYURUR</h1>
        <button onClick={() => navigate("/order")}>
          ACIKTIM
        </button>
      </div>
    </section>
    );
}