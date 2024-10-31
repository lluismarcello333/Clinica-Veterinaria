import Logo from "../../assets/img_animal/logoVet.webp";
import "./Header.css";

function Header() {
  return (
    <div className="header-container">
      <div className="logo-title">
        <img className="header-logo" src={Logo} alt="Logo" /> {/* Logo */}
        <h1 className="clinic-title">
          <span className="clinic-main">Clínica Veterinária</span> <br />
          <span className="clinic-name">Dra. Amara Areias</span>
        </h1>
      </div>
      <hr className="header-divider" /> {/* Linha separadora */}
    </div>
  );
}

export default Header;
