import HeroVideo from '../components/HeroVideo'
import Servicios from '../../servicios/components/Servicios'
import BienvenidaComponent from '../components/BienvenidaComponent'
import BannerComponent from '../../../shared/components/BannerComponent'
import bannerSecundarioImg from '../../../assets/images/foto-home-banner-secundario.png'
import CarruselPrepagas from '../components/CarruselPrepagas'
import ReseñasComponent from '../components/ReseñasComponent'

export default function Inicio() {
  return (
    <>
      <HeroVideo />
      {/*<Servicios />*/}
      <BienvenidaComponent />
      {/*<BannerComponent 
        className='turnos__banner'
        title={<>Trayectoria al servicio<br />de tus ojos</>}
        urlImg={bannerSecundarioImg}
        ariaLabel="Banner secundario"
      />*/}
      <Servicios />
      <CarruselPrepagas />
      <ReseñasComponent />
    </>
  )
}
