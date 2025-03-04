import react from "react";
import Cards from "../../Components/Cards/Cards";
import web from "../../../src/images/Acceuil/web.jpg";
import softwaredev from "../../../src/images/Acceuil/software-developer.jpg";
import { useNavigate } from "react-router";

function OffresView() {
  const navigation = useNavigate();

  return (
    <div>
      <h6>
        Chez SoftWebDev, nous sommes déterminés à offrir une expérience de
        développement exceptionnelle, basée sur la transparence, la qualité et
        la satisfaction client. Nous sommes là pour vous accompagner tout au
        long de votre projet, de la conception à la livraison et au-delà.
      </h6>

      <h3>Nos Offres</h3>

      <div
        onClick={() => {
          navigation("/offreWeb");
        }}
      >
        {" "}
        <h6>Création de Site Web</h6>
        <Cards
          img={web}
          alt={"ddd"}
          height={82}
          width={"100%"}
          flex={"column"}
        ></Cards>
      </div>

      <div
        onClick={() => {
          navigation("/offreSoftware");
        }}
      >
        {" "}
        <h6>Création de Logiciels</h6>
        <Cards
          img={softwaredev}
          alt={"ddd"}
          height={82}
          width={"100%"}
          flex={"column"}
        ></Cards>
      </div>
    </div>
  );
}

export default OffresView;
