import "./TopBar.css";
import logo from "../../images/logo/logo.png";

function TopBar() {
  return (
    <div className="Container">
      <div className="ContainerLogo">
        <img className="Logo" src={logo} alt="Logo du site" />
      </div>
      <div className="ContainerNav">
        <div>
          <h6>acceuil</h6>
        </div>
        <div>
          <h6>nos offres</h6>
        </div>
        <div>
          <h6>contactez nous</h6>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
