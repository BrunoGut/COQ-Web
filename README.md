# Centro de Ojos Quilmes - Sitio Web

Sitio web institucional para el Centro de Ojos Quilmes, clínica oftalmológica especializada en microcirugía y láser.

## Tecnologías
- React 18 + Vite
- React Router para navegación
- React Bootstrap y Bootstrap Icons
- Leaflet para mapas interactivos
- EmailJS para formulario de contacto

## Estructura del Proyecto
```text
COQ-Web/
├── public/                 # Archivos públicos (favicon, redirects, etc.)
├── src/
│   ├── components/         # Componentes reutilizables de UI
│   │   └── data/           # Datos estáticos para componentes/secciones
│   ├── pages/              # Páginas enrutadas del sitio
│   ├── css/                # Estilos por sección/componente
│   ├── images/             # Imágenes del sitio
│   ├── videos/             # Videos del sitio
│   ├── App.jsx             # Configuración principal de rutas/layout
│   └── main.jsx            # Punto de entrada de React
├── index.html              # HTML base
├── package.json            # Dependencias y scripts
└── vite.config.js          # Configuración de Vite
```

## Instalación y Desarrollo

- Instalar dependencias
npm install

- Ejecutar en modo desarrollo
npm run dev

- Construir para producción
npm run build

## Secciones principales

- Inicio: Video hero, servicios y patologías destacadas
- Nosotros: Historia del centro y ubicaciones
- Qué Tratamos: Catálogo completo de patologías y tratamientos
- Servicios: Guardia, estudios, cirugías, turnos, oftalmopediatría, estética
- Staff Médico: Directores y médicos de planta
- Residencia: Programa e ingreso a residencia médica
- Coberturas: Obras sociales y prepagas aceptadas
- Contacto: Formulario y datos de contacto

