import HeroCarousel from '../components/HeroCarousel'
import Stats from '../components/Stats'
import Partners from '../components/Partners'
import Clients from '../components/Clients'
import Productos from './Productos'
import Contacto from './Contacto'

export default function Inicio() {
  return (
    <>
      <HeroCarousel />
      <Stats />
      <Productos />
      <Partners />
      <Clients />
      <Contacto />
    </>
  )
}