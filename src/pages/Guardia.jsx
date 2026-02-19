import GuardiaComponent from "../components/GuardiaComponent";
import BannerComponent from "../components/BannerComponent";
import SectionHeading from "../components/SectionHeading";
import guardiaImg from "../images/guardia/guardia.jpeg";
import causasImg from "../images/guardia/imagen2.jpg";
import "../css/guardiaComponent.css";

export default function Guardia() {
  return (
    <>
      <BannerComponent
        className="guardia__banner"
        title="Atención de guardia"
        urlImg={guardiaImg}
        ariaLabel="Atención de guardia"
      />

      <div className="guardia__inner">
        <SectionHeading title="GUARDIA" />
      </div>

      <GuardiaComponent />
    </>
  );
}
