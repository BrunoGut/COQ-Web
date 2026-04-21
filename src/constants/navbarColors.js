/**
 * Color de fondo de la navbar en versión mobile según la ruta.
 * Cada valor corresponde al color del primer elemento visible
 * debajo de la navbar en esa página.
 */
export const NAVBAR_MOBILE_COLORS = {
  '/':                    '#f0f0f0',   // HeroVideo – fondo mobile
  '/nosotros':            '#929cb2',   // QuienesSomos – banner
  '/guardia':             '#929cb2',   // GuardiaComponent – banner
  '/estudios':            'rgba(0,0,0,0.55)', // BannerComponent – overlay sobre imagen
  '/cirugias':            'rgba(0,0,0,0.55)', // BannerComponent – overlay sobre imagen
  '/estetica':            'rgba(0,0,0,0.55)', // BannerComponent – overlay sobre imagen
  '/coberturas':          '#929cb2',   // CoberturasComponent – banner
  '/staff-medico':        '#929cb2',   // DirectoresMedicos – banner
  '/residencia':          '#929cb2',   // ProgramaResidencia – banner
  '/prensa':              '#929cb2',   // PrensaComponent – banner
  '/que-tratamos':        '#929cb2',   // Tratamientos – banner
  '/paciente/que-tratamos': '#929cb2', // Tratamientos – banner
  '/servicios':           '#2d4270',   // Servicios – banner oscuro azul
  '/turnos-online':       '#ffffff',   // ConsultasVirtuales – fondo blanco
  '/oftalmopediatria':    '#f0f0f0',   // OftalmoComponent – fondo gris claro
  '/contacto':            '#ffffff',   // Contacto – fondo blanco
}

/** Color por defecto si la ruta no está en el mapa */
export const NAVBAR_MOBILE_COLOR_DEFAULT = '#ffffff'
