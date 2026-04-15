import img1 from "../../images/prensa/img1.jpg"
import video1 from "../../images/prensa/campañaCegueraSaltaVideo.mp4"
import img2 from "../../images/prensa/img2.jpg"
import img3 from "../../images/prensa/img3.avif"
import img4 from "../../images/prensa/img4.avif"
import img5 from "../../images/prensa/img5.jpg"
import img6 from "../../images/prensa/img6.avif"
import img7 from "../../images/prensa/img7.avif"
import img8 from "../../images/prensa/img8.avif"
import img9 from "../../images/prensa/img9.jpg"
import img10 from "../../images/prensa/img10.avif"
import img11 from "../../images/prensa/img11.avif"
import img12 from "../../images/prensa/img12.jpg"

const PRENSA = [
    {
        id: 1,
        titulo: "Campaña Ceguera Salta 2018",
        imageSrc: img1,
        kind: "video",
        video: video1,
        descripcion: "El Centro de Ojos Quilmes llevó a cabo la Campaña Ceguera Salta 2018, una iniciativa solidaria que brindó atención oftalmológica gratuita a más de 500 personas en la provincia de Salta. La campaña incluyó exámenes de la vista, entrega de anteojos y cirugías gratuitas para aquellos que lo necesitaban, con el objetivo de prevenir la ceguera y mejorar la calidad de vida de los habitantes de la región."
    },
    {
        id: 2,
        titulo: "Claves para evitar las conjuntivitis en verano",
        imageSrc: img2,
        kind: "article",
        href: "https://tn.com.ar/salud/noticias/2020/01/29/claves-para-evitar-las-conjuntivitis-en-verano/",
        descripcion: "La Dra. Florencia Valvecchia, médica oftalmóloga del Centro de Ojos Quilmes, explica cómo prevenir la conjuntivitis, una afección frecuente en verano."
    },
    {
        id: 3,
        titulo: "Enfermedad de ojo vago. Haran controles gratis a chicos de 4 a 14 años",
        imageSrc: img3,
        kind: "article",
        href: "https://tn.com.ar/salud/familia/2019/10/04/enfermedad-del-ojo-vago-haran-controles-gratis-a-chicos-de-4-a-14-anos/",
        descripcion: "El Centro de Ojos Quilmes realizará controles gratuitos para detectar la enfermedad del ojo vago, una afección que afecta a niños y puede causar pérdida de visión si no se trata a tiempo."
    },
    {
        id: 4,
        titulo: "Lo que no sabías de la blefaritis o caspa en las pestañas",
        imageSrc: img4,
        kind: "article",
        href: "https://tn.com.ar/salud/noticias/2019/12/10/lo-que-no-sabias-de-la-blefaritis-o-caspa-en-las-pestanas/",
        descripcion: "La Dra. Florencia Valvecchia, médica oftalmóloga del Centro de Ojos Quilmes, explica qué es la blefaritis, una afección que causa inflamación en los párpados y puede afectar la salud ocular si no se trata adecuadamente."
    },
    {
        id: 5,
        titulo: "La Argentina transmitirá en vivo 12 cirugías oculares extremas para capacitar cirujanos de todo el mundo",
        imageSrc: img5,
        kind: "article",
        href: "https://tn.com.ar/salud/noticias/2019/08/21/la-argentina-transmitira-en-vivo-12-cirugias-oculares-extremas-para-capacitar-a-cirujanos-de-todo-el-mundo/?fbclid=IwAR1N10RQIZ1Z9eG8694CFywfuCpH_V34uNkMnVSGNkuBhY8XSzlbVDp3prE",
        descripcion: "El Dr. Gerardo Valvecchia, director médico del Centro de Ojos Quilmes, liderará la transmisión en vivo de 12 cirugías oculares extremas para capacitar a cirujanos de todo el mundo. Esta iniciativa busca compartir conocimientos y técnicas avanzadas en el campo de la oftalmología."
    },
    {
        id: 6,
        titulo: "Glaucoma: cómo es la cirugía láser que evita pérdida de visión",
        imageSrc: img6,
        kind: "article",
        href: "https://tn.com.ar/salud/noticias/2019/06/29/glaucoma-como-es-la-cirugia-laser-que-evita-la-perdida-de-vision/",
        descripcion: "La Dra. Celina Logioco, directora médica del Centro de Ojos Quilmes, explica cómo es la cirugía láser para tratar el glaucoma, una enfermedad que puede causar pérdida de visión si no se trata a tiempo. Esta técnica innovadora ofrece una opción efectiva y segura para los pacientes con glaucoma."
    },
    {
        id: 7,
        titulo: "Hilos flotantes y luces de colores. Esas imagenes que vemos, pero no podemos tocar",
        imageSrc: img7,
        kind: "article",
        href: "https://tn.com.ar/salud/noticias/2019/07/28/hilos-flotantes-y-luces-de-colores-esas-imagenes-que-vemos-pero-no-podemos-tocar/",
        descripcion: "El Dr. Gastón Gomez Caride, director médico del Centro de Ojos Quilmes, explica qué son los hilos flotantes y las luces de colores que algunas personas ven en su campo visual. Estas imágenes pueden ser causadas por diversas condiciones oculares y es importante consultar a un especialista para determinar su origen y tratamiento adecuado."
    },
    {
        id: 8,
        titulo: "Polémica por la cirugía refractiva LASIK que corrige la vista",
        imageSrc: img8,
        kind: "article",
        href: "https://tn.com.ar/salud/noticias/2019/11/26/polemica-por-la-cirugia-refractiva-lasik-que-corrige-la-vista/",
        descripcion: "El Dr. Roberto Albertazzi, director médico del Centro de Ojos Quilmes, analiza los beneficios y posibles efectos de la cirugía LASIK, destacando la importancia de una evaluación personalizada."
    },
    {
        id: 9,
        titulo: "Los ojos tambien necesitan protección solar",
        imageSrc: img9,
        kind: "article",
        href: "https://tn.com.ar/salud/noticias/2020/01/07/los-ojos-tambien-necesitan-proteccion-solar/",
        descripcion: "El Dr. Roberto Albertazzi, director médico del Centro de Ojos Quilmes, explica la importancia de proteger los ojos de los rayos UV, especialmente durante el verano, para prevenir daños oculares a largo plazo."
    },
    {
        id: 10,
        titulo: "Conoce la enfermedad de ojos en forma de cono",
        imageSrc: img10,
        kind: "article",
        href: "https://tn.com.ar/salud/noticias/2019/10/23/conoce-la-enfermedad-de-ojos-en-forma-de-cono/",
        descripcion: "El Dr. Roberto Albertazzi, director médico del Centro de Ojos Quilmes, explica qué es el queratocono, una enfermedad que afecta la forma de la córnea y puede causar visión borrosa."
    },
    {
        id: 11,
        titulo: "La salvaron con la maniobra de Heimlich en un restaurante de Berazategui",
        imageSrc: img11,
        kind: "article",
        href: "https://tn.com.ar/salud/noticias/2019/08/02/la-salvaron-con-la-maniobra-de-heimlich-en-un-restaurante-de-berazategui/#0",
        descripcion: "Enfermeras del Centro de Ojos Quilmes salvaron a una mujer que se estaba ahogando con un trozo de carne en un restaurante de Berazategui, utilizando la maniobra de Heimlich. Este acto heroico destaca la importancia de conocer técnicas de primeros auxilios para salvar vidas en situaciones de emergencia."
    },
    {
        id: 12,
        titulo: "Trauma ocular: las lesiones en los ojos pueden perjudicar la visión e incluso causar ceguera",
        imageSrc: img12,
        kind: "article",
        href: "https://tn.com.ar/salud/noticias/2019/11/13/trauma-ocular-las-lesiones-en-los-ojos-pueden-perjudicar-la-vision-e-incluso-causar-ceguera/",
        descripcion: "El Dr. Gaston Gomez Caride, director médico del Centro de Ojos Quilmes, explica qué es el trauma ocular, las causas comunes de lesiones en los ojos y cómo prevenirlas para proteger la visión y evitar complicaciones graves."
    },
]

export default PRENSA;