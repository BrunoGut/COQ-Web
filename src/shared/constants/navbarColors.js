/**
 * Color de fondo de la navbar en versión mobile según la ruta.
 * Cada valor corresponde al color del primer elemento visible
 * debajo de la navbar en esa página.
 */
export const NAVBAR_MOBILE_COLORS = {
  '/':                    '#ffffff',   // HeroVideo – fondo mobile
  '/nosotros':            '#ffffff',   // QuienesSomos – banner
  '/guardia':             '#ffffff',   // GuardiaComponent – banner
  '/estudios':            '#ffffff', // BannerComponent
  '/cirugias':            '#ffffff', // BannerComponent
  '/estetica':            '#ffffff', // BannerComponent – overlay sobre imagen
  '/coberturas':          '#ffffff',   // CoberturasComponent – banner
  '/staff-medico':        '#ffffff',   // DirectoresMedicos – banner
  '/residencia':          '#ffffff',   // ProgramaResidencia – banner
  '/prensa':              '#ffffff',   // PrensaComponent – banner
  '/que-tratamos':        '#ffffff',   // Tratamientos – banner
  '/paciente/que-tratamos': '#ffffff', // Tratamientos – banner
  '/servicios':           '#ffffff',   // Servicios – banner oscuro azul
  '/turnos-online':       '#ffffff',   // ConsultasVirtuales – fondo blanco
  '/oftalmopediatria':    '#ffffff',   // OftalmoComponent – fondo gris claro
  '/contacto':            '#ffffff',   // Contacto – fondo blanco
}

/** Color por defecto si la ruta no está en el mapa */
export const NAVBAR_MOBILE_COLOR_DEFAULT = '#ffffff'
