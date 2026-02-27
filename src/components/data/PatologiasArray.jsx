import catarataImg from "../../images/patologias/ojo-cataratas.jpeg";
import glaucomaImg from "../../images/patologias/ojo-glaucoma.jpeg";
import retinaImg from "../../images/patologias/ojo-retina.jpeg";
import transplanteCorneaImg from "../../images/patologias/ojo-cornea.jpeg";
import oftalmopediatriaImg from "../../images/patologias/ojo-oftalmopediatria.jpeg";
import esteticaImg from "../../images/patologias/ojo-estetica.jpeg";

import catarataImg2 from "../../images/patologias/cataratas/imagen1.jpg";
import lentesIntraocularesImg from "../../images/patologias/cataratas/lentes-intraoculares.jpg";

//


import blefaroespasmoImg from "../../images/patologias/blefaroespasmo.jpeg";
import cirugiaRefractivaImg from "../../images/patologias/refractiva.jpeg";
import estrabismoImg from "../../images/patologias/estrabismo.jpeg";
import maculopatiaImg from "../../images/patologias/maculopatia.jpeg";
import miodesopsiasImg from "../../images/patologias/miodesopsias.jpg";
import miopiaImg from "../../images/patologias/miopia.jpeg";
import oculoplastiaImg from "../../images/patologias/oculoplastia.jpeg";
import ojoSecoImg from "../../images/patologias/ojo-seco.jpeg";
import presbiciaImg from "../../images/patologias/presbicia.jpeg";
import laserImg from "../../images/patologias/laser.jpeg";
import queratoconoImg from "../../images/patologias/queratocono.jpeg";
import marfanImg from "../../images/patologias/marfan.jpeg";

//

import ojoSeco2Img from "../../images/patologias/ojoSeco/ojo-seco2.jfif";
import ojoSeco3Img from "../../images/patologias/ojoSeco/ojo-seco3.jfif";
import ojoSeco4Img from "../../images/patologias/ojoSeco/ojo-seco4.jfif";
import ojoSeco5Img from "../../images/patologias/ojoSeco/ojo-seco5.jfif";


const PATOLOGIAS = [
  {
    id: 1,
    label: "Cataratas",
    href: "#cataratas",
    titulo: "Cataratas",
    imageSrc: catarataImg,
    descripcion: (
      <p>
        Imaginémonos que el ojo es como una cámara fotográfica .En ella existen
        unas lentes encargadas de enfocar las imágenes del exterior sobre la
        película sensible que formará la imagen fotográfica. En el ojo humano
        estas lentes las forman, en primer término, la córnea, que es el
        lentículo más potente que posee el ojo y el más externo. Ya en el
        interior del ojo, y situado detrás del diafragma que forma IRIS, se
        encuentra la segunda lente llamada CRISTALINO. Esta lente se encarga
        hasta los 50 años aproximadamente, de variar el enfoque para poder ver
        nítidos objetos situados a distintas distancias.
      </p>
    ),
    image2Src: catarataImg2,
    seccion1: [
      {
        titulo: "¿Cual es la causa de las cataratas?",
        texto: (
          <p>
            La causa más frecuente de formación de cataratas está relacionada
            con el envejecimiento natural del ojo. Sin embargo, hay algunos
            factores que pueden precipitar ó inducir la formación de Cataratas:
            <br />
            Herencia: Existe una predisposición familiar a la aparición de
            cataratas.
            <br />
            Lesiones en los ojos, tales como traumatismos ó infecciones graves.
            <br />
            Enfermedades Generales, tales como la Diabetes.
          </p>
        ),
      },
    ],
    seccion2: [
      {
        titulo: "¿Qué síntomas tienen?",
        texto: (
          <p>
            Aunque los síntomas de las cataratas pueden variar de un paciente a
            otro, sobre todo por la localización o rapidez de su formación,
            algunos síntomas frecuentes son.,
            <br />
            La visión se vuelve borrosa, similar a la presencia de una ligera
            niebla o como mirar a través de un cristal empañado, y en cualquier
            caso, sin dolor.
            <br />
            Deslumbramiento o aumento de sensibilidad a la luz.
            <br />
            Cambios frecuentes en la graduación de las gafas.
            <br />
            Necesidad de luz más intensa para poder leer.
            <br />
            Empeoramiento de la visión nocturna.
            <br />
            Con frecuencia existe un desvanecimiento de los colores con
            tendencia a amarillear.
            <br />
          </p>
        ),
      },
    ],
    seccion3: [
      {
        titulo: "Diagnostico y deteccion",
        texto: (
          <p>
            Normalmente las cataratas no se pueden apreciar por la simple
            observación de los ojos sin la ayuda de instrumentos. Si se detectan
            la presencia de alguno de los síntomas descriptos, se debe acudir a
            su oftalmólogo para realizar un examen de sus ojos.
          </p>
        ),
      },
    ],
    seccion4: [
      {
        titulo: "Tratamiento",
        texto: (
          <p>
            La cirugía es la única manera de eliminar las cataratas. No existen,
            en la actualidad, medicamentos, suplementos alimenticios,
            ejercicios, ni dispositivos ópticos que puedan curar ó retrasar la
            evolución de las cataratas
            <br />
            El momento adecuado para realizar el tratamiento está en función de
            los síntomas que estas ocasionen y del grado de dureza que estén
            adquiriendo.
            <br />
            No es verdad que las cataratas deban “madurar” antes de ser
            operadas, ni que se tenga que esperar hasta la ceguera para poder
            ser operado. Gracias a las técnicas actuales, con las que se ha
            logrado minimizar los riesgos quirúrgicos, y al desarrollo en la
            implantación de “Cristalinos Artificiales”, el momento optimo de
            extraer las cataratas será siempre que el paciente sienta disminuída
            su agudeza visual y le pueda dificulta el ejercicio de su actividad
            normal.
            <br />
            "Otro factor que puede determinar la necesidad de extraer sus
            cataratas puede ser debido a la forma de desarrollo de estas, y a
            juicio de su oftalmólogo, que pudieran incrementar los riesgos
            quirúrgicos ó que pudieran producir efectos nocivos para su ojo
            (exceso de madurez, hipertensión ocular por enfermedad del
            cristalino, etc.)
            <br />
          </p>
        ),
      },
    ],
    seccion5: [
      {
        titulo: "Tecnica quirurgica",
        texto: (
          <p>
            En esencia, la cirugía de la catarata consiste en eliminar el
            material cristalineano alterado, y sustituirlo por un material
            sintético que cumpla la misión del cristalino natural.
            <br />
            En la actualidad, para conseguir esta finalidad se realiza la
            técnica quirúrgica que se conoce con el nombre de FACOEMULSIFICACIÓN
            del cristalino con implantación de lentes intraoculares.
            <br />
            Consiste en introducir una sonda especial que mediante ultrasonidos
            «rompe» la catarata al mismo tiempo que la va aspirando. Una vez
            eliminada la catarata se inyecta un cristalino artificial.
            <br />
          </p>
        ),
      },
    ],
    seccion6: [
      {
        titulo: "Tecnica anestesica",
        texto: (
          <p>
            Este tipo de cirugía se realiza bajo anestesia tópica, esto es, por
            instilación de unas gotas de anestésico. Con ellas se «duerme» el
            ojo de forma que no se siente nada. Este tipo de anestésia permite
            salir del quirófano con el ojo destapado y en condiciones de
            realizar vida normal.
          </p>
        ),
      },
    ],
    seccion7: [
      {
        titulo: "Complicaciones",
        texto: (
          <p>
            La cirugía de la catarata ha experimentado, con los nuevos avances
            en la técnica, una considerable disminución en las complicaciones
            tan graves que se producían, tales como lesiones retinianas, aumento
            en la incidencia de Desprendimientos de Retina, Glaucomas, Lesiones
            en la córnea, deformaciones en la forma y posición de la pupila, y
            sobre todo la dependencia a cristales correctores de alta graduación
            (unas 12 Dioptrías para la visión lejana). Sin embargo, y a pesar de
            todas las precauciones que se tomen, existe la posibilidad de que
            aparezcan complicaciones.
          </p>
        ),
      },
    ],
    seccion8: [
      {
        titulo: "Complicaciones post-operatorias:",
        texto: (
          <p>
            Edema corneal (inflamación): Provoca turbidez en la visión. Es
            normal durante las primeras 24-48 horas, sin embargo esta
            inflamación puede ser intensa, hasta muy intensa por varios motivos:
            <br />
            1. Complicaciones durante la operación
            <br />
            2. Mal estado de la córnea antes de la intervención (descompensación
            corneal)
            <br />
            3. Hipertensión ocular como respuesta inflamatoria más extensa.
            <br />
            Endoftalmitis: Representa la complicación más grave. Consiste en la
            aparición de una infección dentro del ojo de carácter grave. Gracias
            al mejor conocimiento de los mecanismos de contaminación y sobre
            todo, del estricto control de asepsia (desinfección) y premedicación
            antibiótica se ha logrado disminuir el porcentaje de aparición a
            cifras realmente bajas. El éxito de su recuperación se basa en la
            eliminación rápida y enérgica de la infección intraocular.
            <br />
            Ardor, sensación de cuerpo extraño, pinchazos esporádicos, etc.:
            Como consecuencia de los procesos de cicatrización de la pequeña
            herida que se ha realizado.
            <br />
            En contra de lo que creen muchos pacientes, el «Rechazo a la lente
            intraocular», en una complicación prácticamente inexistente. Tanto
            por el tipo de materiales empleados en su fabricación, en el
            tratamiento que se les da a estos materiales para que sean
            biológicamente más estables, y al asiento anatómico dentro del ojo,
            es prácticamente imposible una reacción de rechazo a lo largo de la
            vida. Es por este motivo que las lentes intraoculares se pueden
            implantar con toda seguridad incluso en los niños con Cataratas
            Congénitas a partir de los pocos meses de edad
            <br />
          </p>
        ),
      },
    ],
    seccion9: [
      {
        titulo: "Cuidados post-operatorios:",
        texto: (
          <p>
            Gracias a la técnica actual de «aspiración» del Cristalino y a la
            implantación de una Lente Intraocular y, sobretodo, a la realización
            de incisiones mínimas que no precisan de puntos de sutura para
            mantenerse cerradas, el ojo operado está en condiciones de soportar
            cualquier tipo de actividad desde el momento de abandonar el
            quirófano. No obstante, se aconseja , durante las primeras 24 horas,
            evitar realizar esfuerzos físicos y movimientos bruscos de cabeza.
            <br />
            Sí se puede:
            <br />
            · Leer cuanto se desee
            <br />
            · Mirar la televisión
            <br />
            · Viajar en los medios habituales de locomoción (automóvil, metro,
            autobús etc.)
            <br />
            · Caminar (no correr)
            <br />
            · Agacharse (no para levantar pesos)
            <br />
            · Dormir de costado (si bien se debería evitar la primera noche
            hacerlo del lado del ojo recién operado)
            <br />
          </p>
        ),
      },
    ],
    seccion10: [
      {
        titulo: "Lentes Intraoculares",
        texto: (
          <p>
            Los lentes multifocales son una alternativa para recuperar la
            posibilidad de ver de cerca, lejos y media distancia sin utilizar
            anteojos. Son similares a los lentes intraoculares clásicos
            plegables, pero tienen modificaciones en el diseño de su óptica,
            para poder lograr el efecto antes mencionado.
            <br />
            Los lentes multifocales no son perfectos como el mecanismo natural
            de la acomodación o enfoque automático, y según el diseño podrán
            tener mejor visión de lejos que de cerca o mejor visión intermedia a
            expensas de la calidad de visión cercana. En algunos casos se podrán
            combinar dos diseños diferentes para ampliar el foco. Por eso el
            medico debe elegir el lente de acuerdo a las actividades del
            paciente, explicándole las ventajas y desventajas de cada diseño.
            <br />
            ¿Cuando se pueden implantar?
            <br />
            Estos lentes se pueden implantar cuando se opera al paciente de
            cataratas y este desea no utilizar ningún anteojo para sus
            actividades futuras. Generalmente es preferible implantarlos en
            ambos ojos, con un intervalo de una o dos semanas entre las
            operaciones. Los pacientes deberán comprender el alcance funcional
            de estas prótesis, sus efectos beneficiosos y algunos efectos
            secundarios ya que su diseño puede interferir en la adaptación del
            paciente a los lentes.
            <br />
            Estos lentes pueden generar la percepción de reflejos y halos
            nocturnos, pudiendo en algunos casos interferir con las actividades
            nocturnas habituales.
            <br />
          </p>
        ),
        imagen: { src: lentesIntraocularesImg, alt: "Lentes Intraoculares" },
      },
    ],
    seccion11: [
      {
        titulo: "Lentes Toricos",
        texto: (
          <p>
            Los pacientes que deben operarse de cataratas, pueden presentar
            astigmatismo previo. El astigmatismo es una afección muy común de la
            cornea, que presenta una deformación parecida a la forma de un
            huevo, que lo obliga a usar anteojos para neutralizarla.
            <br />
            Actualmente los lentes intraoculares corrigen no solo la miopía sino
            que también corrigen el astigmatismo, son lentes más personalizados
            y nos permiten modificar los defectos preexistentes de los ojos de
            los pacientes con cataratas y así eliminar el uso futuro de
            anteojos.
            <br />
          </p>
        ),
      },
    ],
  },
  {
    id: 2,
    label: "Glaucoma",
    href: "#glaucoma",
    titulo: "Glaucoma",
    imageSrc: glaucomaImg,
    descripcion: (
      <p>
        El glaucoma es una enfermedad del nervio óptico ocasionada por el
        aumento de la presión ocular. Dentro del ojo fluye constantemente un
        líquido llamado humor acuoso, este desagota a través de lo que se
        denomina “ángulo de drenaje”. Si este es obstruído por cualquier causa,
        el humor acuoso no drena y la presión de este liquido dentro del ojo
        aumenta, dañando el nervio óptico progresivamente.
        <br />
        Es una de las afecciones de la vista que más daño pueden causar, y esto
        se debe fundamentalmente a la ausencia de síntomas visibles.
      </p>
    ),
    seccion1: [
      {
        titulo: "¿Cuáles son sus causas?",
        texto: (
          <p>
            En el origen del glaucoma pueden distinguirse cuatro distintos
            tipos:
            <br />
            El glaucoma crónico de ángulo abierto, en donde el ángulo de drenaje
            comienza a funcionar mal a medida que las personas envejecen.
            <br />
            El glaucoma agudo de ángulo cerrado, en donde el ángulo queda
            obstruído repentinamente por el iris.
            <br />
            El glaucoma crónico de ángulo cerrado, en el cual el ángulo se
            cierra de manera lenta e indolora. Este tipo de glaucoma suele darse
            con más frecuencia en personas de origen africano o asiático.
            <br />
            El glaucoma secundario, donde la causa de la obstrucción se debe a
            la colocación en gotas de ciertas drogas, tumores, inflamación,
            vasos sanguíneos anormales y otras menos frecuentes. <br />
            El glaucoma congénito, este tipo es infrecuente en comparación con
            los anteriores, y su causa, como su nombre lo indica, es congénita,
            naciendo el niño con la afección. <br />
            En cualquiera de los casos, los síntomas de esta afección aparecen
            solo después de producido un daño severo e irreversible, lo que
            aumenta enormemente el valor de su prevención.
          </p>
        ),
      },
    ],
    seccion2: [
      {
        titulo: "¿Cómo saber si se tiene glaucoma?",
        texto: (
          <p>
            La revisación por parte de un oftalmólogo es la única manera certera
            de saber si se sufre de glaucoma, ya que esta afección puede actuar
            sin síntomas. Durante un examen indoloro, el especialista medirá su
            presión ocular y observará su fondo de ojos a fin de detectar signos
            de la afección.
          </p>
        ),
      },
    ],
    seccion3: [
      {
        titulo: "Tratamientos",
        texto: (
          <p>
            Quienes padecen cualquier tipo de glaucoma deben examinarse
            regularmente durante toda su vida y su tratamiento variará de
            acuerdo a la evolución de la afección. En general, el control del
            glaucoma se realiza con la aplicación de gotas varias veces al día.{" "}
            <br />
            La Trabeculoplastia Laser Selectiva SLT es un tratamiento para
            glaucoma con láser selectivo, usa pulsos muy cortos de baja energía
            de láser sobre las células ricas en melanina de la malla trabecular.
            Estos pulsos estimulan los mecanismos de curación naturales del ojo,
            los cuales reconstruyen la malla trabecular, incrementando su
            porosidad, facilitando la salida del humor acuoso y reduciendo así
            la presión intraocular. <br />
            El tratamiento Trabeculoplastia Laser Selectiva SLT para glaucoma es
            un procedimiento ambulatorio, que se hace a través de un microscopio
            especialmente diseñado y con un láser especial llamado láser
            selectivo o fotoregenerador. <br />
            El tratamiento SLT para glaucoma no produce ningún daño sobre la
            malla trabecular, ni se asocia a ninguna complicación en el resto
            del organismo a diferencia de las demás alternativas de tratamiento.
          </p>
        ),
      },
    ],
    seccion4: [
      {
        titulo: "¿Qué es el Tratamiento Láser con Cyclo G6?",
        texto: (
          <p>
            La Ciclofotocoagulación Transescleral MicroPulse (Cyclo G6) se
            utiliza para reducir la presión intraocular , es un procedimiento
            rápido y seguro que se realiza en quirófano. <br />
            Normalmente la PIO disminuye pocas semanas después del
            procedimiento, con el tiempo puede reducir la necesidad de usar
            gotas para el glaucoma. <br />
            Cualquiera sea el tratamiento a utilizar, el daño causado por el
            glaucoma es irreversible. Por eso, cuando antes realice su consulta,
            menos oportunidades tendrá esta enfermedad de afectar su vista
          </p>
        ),
      },
    ],
  },
  {
    id: 3,
    label: "Retina",
    href: "#retina",
    titulo: "Retina",
    imageSrc: retinaImg,
    descripcion: (
      <p>
        La retina es el tejido sensible a la luz que recubre la parte posterior
        del ojo. Los rayos de luz se enfocan en la retina a través de la córnea,
        la pupila y el cristalino. La retina convierte los rayos de luz en
        impulsos eléctricos que viajan a través del nervio óptico hacia el
        cerebro, donde se interpretan como las imágenes que vemos. Tener una
        retina saludable e intacta es clave para tener una visión clara.
      </p>
    ),
    seccion1: [
      {
        titulo: "Desprendimiento de retina",
        texto: (
          <p>
            El centro de nuestro ojo está lleno de una gel transparente llamada
            vítreo, la cual está unida a la retina. Ocasionalmente, pequeños
            grupos de gel o células en el interior del vítreo proyectan sombras
            sobre la retina, y usted puede ver pequeños puntos, manchas, hilos o
            nubes que se mueven en su campo de visión, llamados manchas
            flotantes. A menudo se pueden ver cuando se mira hacia un fondo
            plano, como una pared o el cielo azul.
            <br />A medida que envejecemos, el vítreo puede encogerse y tirar de
            la retina. Cuando esto sucede, usted puede notar algo parecido a
            unas luces intermitentes, vetas de luz o tener la sensación de «ver
            estrellas». A esto se le llama «centelleos».
          </p>
        ),
      },
    ],
    seccion2: [
      {
        titulo: "Desgarramiento y desprendimiento de la retina",
        texto: (
          <p>
            Por lo general, el vítreo se separa de la retina sin causar
            problemas. Pero a veces el vítreo tira con demasiada fuerza y rompe
            la retina en uno o más lugares. El líquido puede pasar a través de
            un desgarro de la retina, levantándola de la parte posterior del
            ojo, en forma similar a la peladura de una pared empapelada. Un
            desprendimiento de la retina ocurre cuando ésta se separa de la
            parte posterior de ojo. <br />
            La retina no funciona cuando se desprende y la visión se vuelve
            borrosa. Un desprendimiento de la retina es un problema muy serio
            que casi siempre causa ceguera si no es tratado con una cirugía.
          </p>
        ),
      },
    ],
  },
  {
    id: 4,
    label: "Transplante de córnea",
    href: "#transplante-de-cornea",
    titulo: "Transplante de córnea",
    imageSrc: transplanteCorneaImg,
    descripcion: (
      <p>
        El trasplante de córnea o queratoplastía es una cirugía por la cual se
        sustituye una córnea alterada por otra normal.
      </p>
    ),
    seccion1: [
      {
        titulo: "¿Qué es la córnea?",
        texto: (
          <p>
            La córnea es la estructura anterior del ojo cuya característica
            principal es la transparencia. Es por este motivo y por su altísima
            capacidad óptica, que requiere mantenerse en buen estado para
            permitir una visión normal.
            <br />
            Cuando la córnea pierde su transparencia disminuye la visión en
            forma importante y es ahí cuando se evalúa la posibilidad de
            realizar un trasplante para reemplazarla.
          </p>
        ),
      },
    ],
    seccion2: [
      {
        titulo: "¿Cuáles son las causas mas frecuente de trasplante?",
        texto: (
          <p>
            Entre las causas mas frecuentes de trasplante figuran las siguientes
            patologías corneales: <br />
            1. Traumatismos. <br />
            2. Infecciones: Especialmente por virus herpes y bacterias. <br />
            3. Distrofias: La más frecuente es el queratocono. <br />
            4. Edema por degeneración o complicación de cirugía de catarata.
          </p>
        ),
      },
    ],
    seccion3: [
      {
        titulo: "¿Por qué hacer un trasplante de córnea?",
        texto: (
          <p>
            La finalidad de realizar un trasplante de córnea es recuperar la
            transparencia de la córnea para permitir el paso de la luz y la
            imagen al interior del ojo. La córnea para trasplantar procede de un
            donante previo paso por el Banco de Ojos (INCUCAI / CUCAIBA) y
            previa anotación en lista de espera. Se cumplen los requisitos
            legales así como las pruebas analíticas necesarias para la donación
            según la legislación vigente. Situación especial es la de los
            auto-transplantes, donde la córnea es del propio paciente que se
            rota para conseguir evitar alguna opacidad, o bien se utiliza la
            córnea del otro ojo.
          </p>
        ),
      },
    ],
    seccion4: [
      {
        titulo: "¿En qué consiste la cirugía de trasplante de córnea?",
        texto: (
          <p>
            La cirugía de trasplante de cornea se realiza generalmente con
            anestesia local y de forma ambulatoria (sin internación). En la
            técnica se retira la córnea dañada y se cambia por otra sana de un
            donante. La intervención dura unos 40-50 minutos y en el
            postoperatorio solamente se emplea medicamentos locales. <br />
            Como todo acto quirúrgico mayor pueden suceder situaciones
            imprevisibles que requieren tratamiento particular en cada caso.{" "}
            <br />
            El resultado postoperatorio depende sobre todo de la patología a
            tratar. En el queratocono los resultados son muy buenos, mientras
            que en los ojos con muchas lesiones (traumatismos o complicaciones
            de cirugías previas) las expectativas no son de lo mejor. Por otro
            lado, asociado al trasplante se pueden hacer otras intervenciones
            (catarata, vitrectomía, reparación de iris, etc.). Por todo ello los
            resultados varían ampliamente. <br />
            La córnea trasplantada puede ser rechazada pero existen medicamentos
            que permiten el control del rechazo en la inmensa mayoría de los
            casos. Aquí también la patología previa determina la incidencia de
            rechazo, siendo mayor en los casos de herpes. <br />
            Finalmente, luego de superar todos los problemas inherentes a la
            misma cirugía, su oftalmólogo buscará darle la mejor visión posible.{" "}
            <br />
            Las posibles complicaciones del trasplante corneal pueden conducir a
            un fracaso en la recuperación visual, pudiendo, en algunas
            ocasiones, repetir el trasplante corneal. <br />
            El trasplante de córnea tiene una duración en el tiempo, siendo
            probable tener que realizar otro en un futuro.
          </p>
        ),
      },
    ],
    seccion5: [
      {
        titulo: "¿Qué es un trasplante lamelar?",
        texto: (
          <p>
            Existen dos tipos de trasplantes, el trasplante penetrante en donde
            se reemplaza el 100 % de la córnea y el trasplante lamelar es aquel
            en que sustituimos el 95% del espesor corneal, dejando las últimas
            capas internas: la membrana de descemet y el endotelio. No todos los
            pacientes son factibles de realizarle un trasplante lamelar, pero si
            un penetrante. La ventaja del transplante lamelar es que al no
            reemplazar la totalidad de la córnea, ya que dejamos las capas
            internas, tiene menos posibilidad de rechazo y su duración es
            semejante a la córnea natural del paciente.
          </p>
        ),
      },
    ],
    seccion6: [
      {
        titulo: "¿Cuál es la evolución post operatoria habitual?",
        texto: (
          <p>
            En la gran mayoría de los pacientes el ojo operado no es doloroso,
            aunque sí pueden presentar molestias. La recuperación visual es
            progresiva, el seguimiento postoperatorio es de varios meses, no
            siendo infrecuentes las complicaciones a largo plazo. Puede precisar
            corrección óptica, anteojos o lentes de contacto para conseguir la
            mejor visión posible. Precisa tratamiento con colirios y
            ocasionalmente tratamiento general, incluso medicación
            inmunosupresora.
          </p>
        ),
      },
    ],
    seccion7: [
      {
        titulo: "¿Existen alternativas al trasplante de córnea?",
        texto: (
          <p>
            Salvo en casos muy concretos, por ejemplo queratocono en donde
            existe la posibilidad de tratarlo con segmentos intracorneales
            siempre y cuando no sea un caso avanzado, no existe otro tratamiento
            para recuperar la transparencia de la córnea que el trasplante. En
            algunas ocasiones es necesario para la conservación del globo ocular
            cuando existe peligro de perforación
          </p>
        ),
      },
    ],
  },
  {
    id: 5,
    label: "Oftalmopediatría",
    href: "#oftalmopediatria",
    titulo: "Oftalmopediatría",
    imageSrc: oftalmopediatriaImg,
    descripcion: (
      <p>
        Los primeros años de la vida son fundamentales para el desarrollo de la
        visión. <br />
        Es por esto que el cuidado oftalmológico de los niños es tan importante.{" "}
        <br />
        El ojo en el niño es inmaduro y está en constante crecimiento hasta los
        7 u 8 años. <br />
        La visión en la primera infancia es menor y alcanza una agudeza visual
        de 10/10 hacia los 5 años de edad. <br />
        Cualquier anomalía ocular no diagnosticada precozmente, puede detener el
        desarrollo de la visión y dejar defectos que persistirán durante toda la
        vida. <br />
        El Centro de Ojos Quilmes cuenta con profesionales altamente
        especializados en Oftalmología Pediátrica y con una sofisticada
        tecnología capaz de detectar y tratar cualquier enfermedad ocular
        infantil.
      </p>
    ),
    seccion1: [
      {
        titulo: "¿Cuándo Hacer los controles?",
        texto: (
          <p>
            Se deben realizar controles y fondo de ojos: <br />
            1. Al nacer. <br />
            2. A los 6 meses. <br />
            3. Al año de vida. <br />
            4. A los 3 años. <br />
            5. A los 5 años, al ingreso escolar. <br />
            6. Posteriormente cada dos años.
          </p>
        ),
      },
    ],
    seccion2: [
      {
        titulo: "¿Qué problemas visuales pueden tener los niños?",
        texto: (
          <p>
            <strong>
              Retinopatía del Prematuro (ROP)
            </strong> <br /> <br />
            Es una enfermedad que ocurre en los bebés prematuros y de bajo peso, donde se produce un desarrollo anormal de los vasos que irrigan la retina, que es la membrana que tapiza el interior del globo ocular. <br />
            Es una retinopatía vasoproliferativa donde hay una detención del crecimiento vascular, y luego una anormal  maduración de los mismos. <br />
            Es necesario examinar a los RN mayores de 33 semanas de edad gestacional entre los 7 y 14 días del nacimiento. <br />
            Realizar un examen oftalmológico antes del alta.
          </p>
        ),
      },
    ],
    seccion3: [
      {
        titulo: "¿Cómo se realiza la pesquisa de ROP?",
        texto: (
          <p>
            Todos los niños de riesgo requieren: <br />
            1. Un cuidadoso examen de retina en el momento adecuado. <br />
            2. Realizado por un oftalmólogo con experiencia. <br />
            3. Asegurar la continuidad de los exámenes hasta que se haya completado la vascularización retiniana.
          </p>
        ),
      },
    ],
    seccion4: [
      {
        titulo: "Astigmatismo",
        texto: (
          <p>
            Provoca que las imágenes se vean distorsionadas.
          </p>
        ),
      },
    ],
    seccion5: [
      {
        titulo: "Miopía",
        texto: (
          <p>
            La visión de cerca, es clara y es borrosa de lejos. Es lo que comúnmente las personas definen como “cortos de vista”.
          </p>
        ),
      },
    ],
    seccion6: [
      {
        titulo: "Hipermetropía",
        texto: (
          <p>
            Se trata de una condición óptica natural en los niños que va desapareciendo a medida que crece el ojito. Sin embargo, cuando permanece fuera de los rangos normales puede causar dolor de cabeza o vista cansada y en algunos casos acompaña al estrabismo.
          </p>
        ),
      },
    ],
    seccion7: [
      {
        titulo: "Estrabismo",
        texto: (
          <p>
            Consiste en la desviación de uno o ambos ojos, es una causa común de la ambliopía
          </p>
        ),
      },
    ],
    seccion8: [
      {
        titulo: "Catarata Congénita",
        texto: (
          <p>
            Es la opacidad congénita  o traumática del lente del ojo (cristalino), que en condiciones normales es claro y transparente. Puede compararse con una ventana que “se empaña” con el frío o el vapor.
          </p>
        ),
      },
    ],
    seccion9: [
      {
        titulo: "Glaucoma Congénito   ",
        texto: (
          <p>
            En el glaucoma congénito existe un defecto de nacimiento en el desarrollo del ángulo que forman la córnea y el iris cuando se unen y a través del cual se drena el humor acuoso. Como consecuencia, se produce un aumento de la presión intraocular y el consiguiente daño del nervio óptico.
          </p>
        ),
      },
    ],
  },
  {
    id: 6,
    label: "Estetica",
    href: "#estetica",
    titulo: "Estetica",
    imageSrc: esteticaImg,
    descripcion: (
      <p>
        La estética ocular es una subespecialidad de la oftalmología dedicada a mejorar la apariencia de la mirada y rejuvenecer el área periocular (párpados, cejas y órbita). Combina procedimientos quirúrgicos (como la blefaroplastia) y no quirúrgicos para corregir el exceso de piel, bolsas, arrugas y alteraciones funcionales, preservando siempre la salud visual. 
      </p>
    ),
    seccion1: [
      {
        titulo: "PROCEDIMIENTOS MINIMAMENTE INVASIVOS",
        texto: (
          <p>
            Es un conjunto de técnicas médicas especializadas, sin incisiones ni suturas, para rejuvenecer y corregir estéticamente algunos aspectos de la región facial. Cabe señalar que estos procedimientos son una alternativa para aquellos pacientes que no desean acceder a una cirugía. También es necesario afirmar, que estas técnicas no se contraponen a la cirugía estética, sino que pueden complementarse, otorgando una opción más, con el objeto de lograr resultados óptimos en el paciente.
          </p>
        ),
      },
    ],
    seccion2: [
      {
        titulo: "CARBOXITERAPIA",
        texto: (
          <p>
            La carboxiterapia consiste en la administración subcutánea de CO2. Es un método no quirúrgico, rápido, cómodo e indoloro. Produciendo una vasodilatación activa, arteriolizacion de la sangre (efecto Bohr)  y aumento de la oxigenación celular. <br />
            Efectos Terapéuticos: aumenta la oxigenación tisular, efecto lipolítico debido a un aumento en el proceso oxidativo, aumenta la velocidad del flujo en la arteriola del precapilar, estimula la neoangiogenesis y la formación de colágeno III.
          </p>
        ),
      },
    ],
    seccion3: [
      {
        titulo: "PRP PLASMA RICO EN PLAQUETAS",
        texto: (
          <p>
            Las plaquetas sanguíneas y sus factores de crecimiento son fundamentales en la modulación de los procesos de reparación y regeneración de tejidos. Los gránulos de las plaquetas con sus factores de crecimiento (polipeptidos bioactivos) contienen todos los elementos necesarios para una bioestimulacion efectiva. Los factores estimulantes de crecimiento plaquetario (FECP) son los encargados de ordenar la regeneración y reparación de los tejidos. Estos Bioestimulantes son obtenidos de PRP autologo  (del propio paciente). <br />
            BIOestimulación: incluye al conjunto de procedimientos tendientes a activar biológicamente las funciones anabólicas del fibroblasto: <br />
            - Producción de colágeno.
            - Producción de elastina.
            - Producción de acido Hialurónico a partir de sus precursores (prolina, lisina y glucosamina).
          </p>
        ),
      },
    ],
    seccion4: [
      {
        titulo: "PEELINGS",
        texto: (
          <p>
            Los peelings utilizan diversos sistemas de «agresión controlada» cuyo objetivo final es la regeneración de un tejido, favoreciendo de este modo la recuperación de su aspecto estético y funcional. Pueden ser químicos o físicos y  actúan a niveles superficiales o profundos de la piel. <br />
            Peeling físico o microdermoabrasión actúa a través de las puntas diamantadas. Su acción provoca un desgaste de las capas más externas de la piel, removiendo aquellas que por su estado desmejorado se desean quitar. <br />
            Peeling químico se aplica  un preparado químico capaz de provocar una destrucción limitada y controlada de la epidermis y de las primeras capas de la dermis. Esta acción va seguida de una correcta reconstrucción dérmica y epidérmica para dar lugar a un tejido dérmico más engrosado y rico en fibroblastos, cuyas fibras serán más numerosas y estarán mejor orientadas, dando apariencia de rejuvenecimiento.
          </p>
        ),
      },
    ],
    seccion5: [
      {
        titulo: "HILOS TENSORES",
        texto: (
          <p>
            Técnica que permite la recolocación de tejidos ptosados ya sea por el paso del tiempo, o por afecciones o traumas. <br />
            Técnica que permite la recolocación de tejidos ptosados ya sea por el paso del tiempo, o por afecciones o traumas.
          </p>
        ),
      },
    ],
    seccion6: [
      {
        titulo: "CARACTERÍSTICAS GENERALES",
        texto: (
          <p>
            - No absorbibles.
            - No biodegradables.
            - Biocompatibles con el organismo.
            - Alta resistencia.
            - No provoca rechazo, ni reacción alérgica.
            - Permanente durabilidad.
            - Admite la combinación de otros hilos y/o procedimientos.
          </p>
        ),
      },
    ],
    seccion7: [
      {
        titulo: "MESOTERAPIA",
        texto: (
          <p>
            Es una vía de administración de medicamentos de reconocida eficacia, por vía intradérmica, en pequeñas dosis, en la región a tratar. Es un acto médico, que complementa los tratamientos clínicos habituales en cada caso. Es una terapia alopática y-o homeopática, donde se administra el medicamento en pequeñas dosis. Es un tratamiento esencialmente local que permite la aproximación del agente terapéutico a la zona patológica.
          </p>
        ),
      },
    ],
    seccion8: [
      {
        titulo: "RADIOFRECUENCIA",
        texto: (
          <p>
            Es un Generador Inductivo de Calor (GIC) que actúa por transferencia de una corriente de microondas, la que genera calor local mediante una acción de transferencia capacitiva, logrando así una hiperemia localizada, con el consiguiente aumento del aporte sanguíneo con nutrientes, oxígeno, y metabolitos endógenos activos que actúan sobre la piel envejecida, deshidratada y dañada. <br />
            A diferencia de los generadores tradicionales de calor terapéutico que actúan a nivel superficial y por períodos breves de tiempo, el GIC actúa provocando un calor endógeno en la profundidad del tejido, donde permanece mucho más tiempo, y de intensidad mayor, por lo que se obtienen mejores resultados y en menor tiempo. La aplicación del GIC encuentra su indicación en el campo de la estética para tratamiento de trastornos por envejecimiento cutáneo, ya que por su mecanismo de acción facilita la regeneración, nutrición y revitalización de la piel hidratándola, e incrementa el riego sanguíneo y la oxigenación disminuyendo la acción de los radicales libres. Por lo antedicho, la aplicación del GIC está indicada en arrugas, estrías, celulitis y alopecias. También es muy útil como coadyuvante en limpieza de cutis ya que favorece el ablandamiento de la capa lipídica.
          </p>
        ),
      },
    ],
  },
  {
    id: 7,
    label: "blefaroespasmo",
    href: "#blefaroespasmo",
    titulo: "Blefaroespasmo",
    imageSrc: blefaroespasmoImg,
    descripcion: (
      <p>
        El blefaroespasmo es un tipo de distonía focal que consiste en el cierre involuntario de los párpados, este cierre es intenso, crónico, y bilateral (afecta ambos ojos). Las contracciones involuntarias de los músculos se deben al mal funcionamiento de las neuronas del sistema nervioso central e implican al quinto y séptimo nervios craneales.
      </p>
    ),
    seccion1: [
      {
        titulo: "¿Quién lo sufre?",
        texto: (
          <p>
            Por lo general se inicia entre los 40 y 60 años de edad, aunque algunos pacientes se diagnostican a los veinte, y otros a los setenta años. Ocurre con más frecuencia en las mujeres: por cada tres mujeres con la enfermedad, hay un hombre afectado. La incidencia es, aproximadamente, de un caso por cada veinticinco mil habitantes.
          </p>
        ),
      },
    ],
    seccion2: [
      {
        titulo: "¿Cómo comienza?",
        texto: (
          <p>
            Los síntomas iniciales tienden a empeorar en semanas o meses. <br />
            Cuando el blefaroespasmo es grave, el paciente no puede prácticamente abrir los ojos de forma voluntaria, llegando a presentar una ceguera funcional. Tranquilizándose y esperando algunos minutos, a veces será capaz de abrir los ojos espontáneamente, pero estos periodos de visión pueden ser muy infrecuentes. La conducción de vehículos e, incluso, caminar solo, puede ser peligroso por la posibilidad de nuevos espasmos.
          </p>
        ),
      },
    ],
    seccion3: [
      {
        titulo: "¿Es transitorio?",
        texto: (
          <p>
            Desgraciadamente, no. Aunque un pequeño porcentaje de casos mejoran espontáneamente, la mayoría de los pacientes van a padecerlo durante toda su vida.
          </p>
        ),
      },
    ],
    seccion4: [
      {
        titulo: "¿Puede complicarse?",
        texto: (
          <p>
            A veces los espasmos que se inician en los músculos palpebrales pueden extenderse a otros músculos craneales, causando contracciones involuntarias de la mandíbula o la lengua. En este caso recibe el nombre de “distonía oromandibular” (síndrome de Meige). Los espasmos también pueden afectar los músculos del cuello y de la gar espasmódica.
          </p>
        ),
      },
    ],
    seccion5: [
      {
        titulo: "¿Cómo se hace el diagnóstico?",
        texto: (
          <p>
            Actualmente no existe ninguna prueba específica para realizar el diagnóstico. Aunque muchos médicos no están familiarizados con estas condiciones, un médico con experiencia y conocimiento sobre la patología puede diagnosticarlo de forma precisa. <br />
            En el blefaroespasmo y el síndrome de Meige se afectan ambos lados de la cara. Si solo se afecta un lado, se llama espasmo hemifacial. El espasmo hemifacial es debido a una causa diferente y a veces puede aliviarse con una intervención neuroquirúrgica.
          </p>
        ),
      },
    ],
    seccion6: [
      {
        titulo: "¿Cúal es el tratamiento?",
        texto: (
          <p>
            Ya que el problema es de tipo neurológico, el médico intentará usar una variedad de medicamentos, entre ellos los anticolinérgicos. <br />
            Aunque algunos pacientes obtienen mejorías modestas con esta terapia, otros muchos abandonan el tratamiento debido a los efectos secundarios adversos. Actualmente el tratamiento más común y efectivo consiste en inyectar pequeñas cantidades de toxina botulínica (Botox®/onabotulinumtoxinA, Xeomin®/incobotulinumtoxinA, Dysport®/abobotulinumtoxinA, Myobloc®/rimabotulinumtoxinB), en solución altamente purificada y diluida, en los músculos que cierran los párpados. La toxina disminuye la transmisión de los impulsos eléctricos de las terminaciones nerviosas a los músculos, aliviando así los espasmos. Estas inyecciones son administradas por lo general por un neurólogo, un oftalmólogo o un neuro-oftalmólogo. Aunque este procedimiento dura solo unos minutos y puede hacerse en el consultorio, es caro y debe repetirse a los pocos meses. La apraxia de la apertura del párpado asociada al blefaroespasmo es la causa más frecuente de fracaso o de escaso beneficio con toxina botulínica. Los pacientes que la presentan tienen dificultades para abrir los párpados incluso después de que los espasmos palpebrales hayan sido reducidos con toxina botulínica. <br />
            En aquellos pacientes que no mejoran con fármacos por via oral o inyecciones, se puede considerar la cirugía. Con la miectomía parcial o completa se extirpa parte de los músculos que causan el cierre de los párpados. El resultado es que las terminaciones nerviosas hiperactivas no tienen músculo para estimular. La mayoría de los pacientes que eligen esta cirugía obtienen buenos resultados. Algunas veces, junto con, o en lugar de, la miectomía, es posible implantar un elástico frontal que ayuda a levantar el párpado superior.
          </p>
        ),
      },
    ],
    seccion7: [
      {
        titulo: "¿Cómo vivir con blefaroespasmo?",
        texto: (
          <p>
            La mayoría de los pacientes tendrán que ajustar sus vidas y aceptar algunas limitaciones. Sea con inyecciones o por medio de la cirugía, muchos estarán capacitados para continuar con su trabajo. Ya que para algunas personas el manejo de vehículos se convierte en un problema, deberán contar con otros para su desplazamiento.
          </p>
        ),
      },
    ],
    seccion8: [
      {
        titulo: "¿Qué se está haciendo para mejorareste problema?",
        texto: (
          <p>
            Tal vez el papel más importante de la Fundación para la Investigación del Blefaroespasmo Benigno Esencial (BEBRF) es el de recaudar fondos a través de contribuciones públicas y privadas con el fin de llevar adelante la investigación necesaria para encontrar la causa y el tratamiento curativo del blefaroespasmo y el síndrome de Meige. Además, la Fundación proporciona apoyo a los pacientes mediante material informativo y contacto personal directo. A través de una red de Directores de Distrito, Coordinadores Estatales, Representantes de Areas Locales y Grupos de Apoyo, los pacientes son dirigidos a centros médicos especializados en el tratamiento de estas enfermedades. Así mismo, la Fundación dispone de una sede central para la distribución de información escrita o de discos relacionados con el blefaroespasmo, el síndrome de Meige y el espasmo hemifacial, que sean solicitados por los médicos y los pacientes. En Internet hay una página (www.blepharospasm.org) que proporciona la información más reciente, con conexiones a otros sitios de la red y a un foro de discusión que sirve como grupo de apoyo internacional. Cuatro veces al año se envía un boletín de noticias a miles de pacientes y profesionales médicos. La BEBRF celebra simposios anuales que tienen lugar en diferentes áreas geográficas y están bajo el patrocinio de la Fundación y de una facultad médica de reconocido prestigio.
          </p>
        ),
      },
    ],
  },
  {
    id: 8,
    label: "Cirugía Refractiva",
    href: "#cirugia-refractiva",
    titulo: "Cirugía Refractiva",
    imageSrc: cirugiaRefractivaImg,
    descripcion: (
      <p>
         La cirugía refractiva es una innovadora técnica quirúrgica que modifica la curvatura de la córnea a través de un excímer láser, acercándola a la normalidad y permitiendo que las imágenes lleguen correctamente a la retina.
      </p>
    ),
    seccion1: [
      {
        titulo: "¿Quiénes pueden operarse?",
        texto: (
          <p>
            Aquellas personas que sufran las siguientes afecciones: <br />
            - Miopía: Formación de las imágenes por delante de la retina. Produce una disminución en la visualización de los objetos lejanos. <br />
            - Hipermetropía: Formación de las imágenes por detrás de la retina. Produce una disminución en la visualización de los objetos tanto lejanos como cercanos. <br />
            - Astigmatismo: Asimetría de la curvatura corneal, asemejándose la córnea formalmente a una pelota de rugby. Produce una deformación en la visualización de las imágenes. <br />
            Esta técnica ofrece a quienes sufren dichas afecciones o aquellas personas que no toleran el uso de lentes de contacto, una independencia total respecto al uso permanente de los mismos.
          </p>
        ),
      },
    ],
    seccion2: [
      {
        titulo: "Tratamiento:",
        texto: (
          <p>
            La cirugía refractiva es asombrosamente rápida. Luego de aplicarse anestesia en gotas, se remueve una capa superficial de córnea, para después proceder a tallar la misma con el excímer láser según la corrección deseada, lo que modificará la curvatura corneal. El próximo paso consiste en colocar en su sitio la capa levantada. No se realizan ningún tipo de suturas, concluyendo la operación en tan solo cinco minutos.
          </p>
        ),
      },
    ],
    seccion3: [
      {
        titulo: "Post-operatorio:",
        texto: (
          <p>
            Luego del tratamiento, el paciente puede retornar a su hogar de forma inmediata, y en sólo 2 o 3 días se integrará a su trabajo. <br />
            La realización de sus tareas habituales no se verá dificultada, limitándose los cuidados a la no exposición a los rayos ultravioletas o a la intemperie, y a una lógica precaución.
          </p>
        ),
      },
    ],
  },
  {
    id: 9,
    label: "Estrabismo",
    href: "#estrabismo",
    titulo: "Estrabismo",
    imageSrc: estrabismoImg,
    descripcion: (
      <p>
         El estrabismo se define como la pérdida del Paralelismo Ocular.
      </p>
    ),
    seccion1: [
      {
        titulo: "Causas:",
        texto: (
          <p>
            - Estrabismo precoz congénito se presenta antes de los seis meses de vida. <br />
            - Estrabismo Esencial o verdadera enfermedad estrabica, se presenta después del año de vida. <br />
            - Estrabismo Acomodativo asociado con un defecto óptico (hipermetropía). Se presenta entre los dos y cinco años de vida. <br />
            - Estrabismos secundarios asociados a otras patologías oculares que afectan al desarrollo visual temprano (Catarata congénita) y/o parálisis a nivel muscular.
          </p>
        ),
      },
    ],
    seccion2: [
      {
        titulo: "Diagnóstico:",
        texto: (
          <p>
            Consultar precozmente a la menor sospecha de una desviación ocular o indicación del pediatra. <br />
            Se evaluara la refracción (Problemas ópticos) el fondo de ojo (Retina) y la motilidad ocular, midiendo en esta etapa el monto de la desviación.
          </p>
        ),
      },
    ],
    seccion3: [
      {
        titulo: "Tratamiento:",
        texto: (
          <p>
            Se consideran dos etapas, una medica que consiste en indicar oclusión y/o lentes y la otra es quirúrgica.
          </p>
        ),
      },
    ],
  },
  {
    id: 10,
    label: "Maculopatía",
    href: "#maculopatia",
    titulo: "Maculopatía",
    imageSrc: maculopatiaImg,
    descripcion: (
      <p>
          La maculopatía es una enfermedad que afecta a la mácula, la parte central de la retina responsable de la visión central y detallada. Esta condición puede causar pérdida de la visión central, dificultando actividades como leer, conducir o reconocer rostros.
      </p>
    ),
    seccion1: [
      {
        titulo: "¿Qué es la Mácula?:",
        texto: (
          <p>
            La mácula es la pequeña parte de la retina que nos permite la visión detallada de las cosas. <br />
            A veces con el correr de los años, los distintos elementos que la conforman envejecen y tienden a deteriorarse en forma anormal. Este proceso es progresivo, lento e indoloro y es la principal causa de PERDIDA IRREVERSIBLE DE LA VISION CENTRAL en personas mayores de 65 años de edad. Se lo conoce como DEGENERACIÓN MACULAR relacionada con la edad (DMS).
          </p>
        ),
      },
    ],
    seccion2: [
      {
        titulo: "¿Cuál es la causa de la degeneración macular?:",
        texto: (
          <p>
            La causa exacta de la degeneración macular no ha sido aun del todo determinada, como sus síntomas se pueden revelar en forma notoria a partir de los 60 años, tomar medidas preventivas por anticipado se torna primordial. <br />
            Cuando los componentes de la mácula se deterioran, la función visual comienza a modificarse, la visión central se torna borrosa y manchas oscuras pueden aparecer en el centro del campo visual. <br />
            La degeneración macular relacionada con la edad es una condición altamente frustrante. Las actividades más simples como leer y escribir manejar el auto o ver una película, se ven seriamente obstaculizadas por la pérdida de la visión central.
          </p>
        ),
      },
    ],
    seccion3: [
      {
        titulo: "Factores de riesgo:",
        texto: (
          <p>
            Varios son los factores de riesgo que ayudan a la aparición de la Degeneración Macular, a saber: <br />
            - Rayos Solares: Cuando la radiación solar incide sobre los tejidos oculares se generan radicales libres que alteran la estructura de las proteínas y destruyen las membranas. <br />
            En principio, el ojo está bastante bien protegido por sus medios ópticos, los cuales absorben la mayor parte de la radiación UV (rango C: aproximadamente por debajo de los 290 nm). Con una exposición excesiva a dicha radiación UV de onda corta, se observa daño a la córnea y a la conjuntiva. <br />
            Una radiación UV de longitud de onda más larga (rango B: 290 – 320 nm) es intensamente absorbida por el cristalino y podría producir cataratas. <br />
            Longitudes de onda UV muy largas (rango A: 320 – 400 nm) pueden atravesar todos los medios ópticos y dañar la retina. <br />
            La luz visible de onda corta (400 – 480 nm) o LUZ AZUL es particularmente nociva. Se ha demostrado que puede observarse daño en al retina aun años después de una sola exposición a este tipo de luz. <br />
            Existen varios indicios que el daño fotoquímico o “daño por LUZ AZUL” aceleraría la degeneración macular relacionada con la edad. <br />
            - Edad Avanzada: Es el principal factor de riesgo. En USA. se estima que el 14% de las personas de entre 55 y 64 años de edad presenta alguna forma de degeneración macular y por encima de los 65 años este porcentaje se eleva aun más. <br />
            - Mala Alimentación: La nutrición es clave en esta enfermedad. Una dieta pobre en ANTIOXIDANTES implica un alto riesgo de ser afectado. Asimismo, comidas con altos niveles de grasas y colesterol pueden dañar los vasos sanguíneos del ojo, además de producir RADICALES LIBRES que dañan la mácula; es la llamada ISQUEMA OXIDATIVA. <br />
            - Cigarrillo: Los fumadores en exceso tienen un riesgo mayor de desarrollar Degeneración Macular. El tabaco reduce las propiedades antioxidantes causando daño a proteínas y lípidos por disminuir considerablemente la circulación coroidea y la nutrición de la retina. <br />
            - Bebidas Alcohólicas: La bebidas alcohólicas en exceso representan otro factor de riesgo. El alcohol disminuye la absorción de vitamina A, carotenoides y demás nutrientes. Además de generar radicales libres durante su metabolismo. <br />
            - Herencia Genética: Algunos estudios sostienen que el riesgo a tener Degeneración Macular es hereditaria. Esto significa que si usted tiene uno o mas familiares inmediatos con Degeneración Macular podría encontrarse bajo un mayor riesgo de desarrollar esta condición. <br />
            - Alteraciones Hormonales: En la menopausia, la ausencia de hormonas femeninas causarían un aumento de las grasas en plasma, lo que ocasionaría mayor riesgo de desarrollar degeneración macular relacionada con la edad. <br />
            - Enfermedades Cardíacas: Enfermedades vasculares, alta presión arterial y lípidos sanguíneos elevados conllevan una deficiente irrigación sanguínea en los ojos.
          </p>
        ),
      },
    ],
    seccion4: [
      {
        titulo: "¿Qué tipo de pruebas realizará su oftalmólogo para detectar la degeneración macular relacionada con la edad?:",
        texto: (
          <p>
            Las pruebas que se detallan a continuación serán realizadas en la primera evaluación oftalmológica y en cada examen anual para asegurarse que cualquier perdida de la visión por degeneración macular relacionada con la edad se encuentra en sus estadios mas tempranos posibles, en los cuales el tratamiento es mas efectivo. Si usted tiene riesgo de desarrollarla o ya se le ha diagnosticado, quizás requiera que se le efectúen exámenes de control mas frecuentes. Las pruebas específicas siempre deberán ser llevadas a cabo por separado para cada ojo.
          </p>
        ),
      },
    ],
    seccion5: [
      {
        titulo: "¿Le gustaría poder ver bien toda su vida?:",
        texto: (
          <p>
            Se puede tratar de evitar la degeneración macular, también depende de su fuerza de voluntad. He aqui algunos consejos: <br />
            - Una correcta prevención: Muchos estudios sobre la Degeneración Macular se están focalizando sobre el rol de un grupo de antioxidantes LOS CAROTENOIDES. Es que dos de estos, la LUTEÍNA y la ZEAXANTINA, son componentes naturales de la macula, y además un potente filtro de la luz solar. <br />
            ¿Qué comer entonces? Mucha fruta y verdura. Sobre todo vegetales de hojas color verde oscuro, como la espinaca. Principal fuente natural de LUTEÍNA y ZEAXANTINA. <br />
            - Un sano estilo de vida: Es sano divertirse pero es igual de sano cuidar la salud. <br />
            - Algunos consejos: evitar el cigarrillo y el exceso de alcohol, evitar el sol en los ojos, usar anteojos de sol (con máxima protección contra todos los rangos de radiación UV y el rango visible de onda corta – 400 a 480 nm – o LUZ AZUL), gorro con visera y hacer ejercicio (evitar el sedentarismo
          </p>
        ),
      },
    ],
  },
  {
    id: 11,
    label: "Miodesopsias o Moscas Volantes",
    href: "#miodesopsias",
    titulo: "Miodesopsias",
    imageSrc: miodesopsiasImg,
    descripcion: (
      <p>
          Las Miodesopsias se conocen como Moscas Volantes y es la aparición de puntos o telarañas en el campo de visión que se mueven libremente.
      </p>
    ),
    seccion1: [
      {
        titulo: "¿Por qué veo Moscas Volantes?:",
        texto: (
          <p>
            Por colapso del vitreo. <br />
            El vitreo es como una gelatina que rellena el ojo. <br />
            Se llama desprendimiento posterior del vitreo, así opacidades vítreas quedan flotando, y es habitual entre los 55 y 75 años.
          </p>
        ),
      },
    ],
    seccion2: [
      {
        titulo: "¿Cómo se tratan las moscas volantes?:",
        texto: (
          <p>
            Las opacidades centrales se pueden tratar con un procedimiento laser llamado: “Vitreolisis» <br />
            En caso de ver “moscas volantes” y para descartar que haya otra patología es conveniente solicitar una visita con el médico oftalmólogo
          </p>
        ),
      },
    ],
  },
  {
    id: 12,
    label: "MIOPIA",
    href: "#miopia",
    titulo: "Miopía",
    imageSrc: miopiaImg,
    descripcion: (
      <p>
          La miopía es un defecto refractivo del ojo que provoca dificultad para ver objetos lejanos con claridad.
      </p>
    ),
    seccion1: [
      {
        titulo: "¿Qué es una lente de contacto implantable (ICL)?:",
        texto: (
          <p>
            La lente de Collamer ICL es similar a una lente de contacto. La diferencia consiste en que la ICL se implanta dentro del ojo en vez de ponerse en la superficie de la córnea. Esta es blanda y pequeña y se convierte en una lente adicional del sistema ocular. La ICL está diseñada de tal manera que puede corregir la miopía y la hipermetropía. Además, la ICL Tórica, una variante de la primera, puede corregir el astigmatismo cuando se presenta asociada a la miopía. La lente funciona cambiando el punto de enfoque de la luz sobre la retina.
          </p>
        ),
      },
    ],
    seccion2: [
      {
        titulo: "¿De qué manera se coloca en el ojo?:",
        texto: (
          <p>
            Debido a que la ICL es blanda y pequeña, puede ser plegada e inyectada sin dolor en el ojo, en tan sólo unos segundos y a través de una incisión muy pequeña en la córnea. Una vez inyectada, la lente ICL se despliega y se acomoda en su posición, por delante del cristalino y por detrás del iris. La Lente ICL se comporta de forma parecida a una lente de contacto. Se diferencian por el lugar donde se encuentran en el ojo, la ICL está dentro del ojo en lugar de en la superficie. La lente es invisible. La única forma de saber que la lente está en el ojo, es por la mejora de la visión. La lente ni se ve ni se siente, una vez implantada en el ojo. La lente está pensada para permanecer indefinidamente en el ojo. De todas formas, si fuera necesario, se puede retirar, ya que no daña las estructuras del ojo. <br />
            Si necesita una corrección muy alta, la lente ICL puede corregir ese error. El tratamiento está indicado en pacientes con córneas finas, ojo seco o pupilas grandes. <br />
            Las lentes ICL Tóricas corrigen la visión lejana y el astigmatismo en un solo procedimiento. Cada lente se fabrica de forma personalizada para cubrir las necesidades de cada paciente. Las lentes ICL Tóricas proporcionan una muy buena calidad de visión, es un procedimiento preciso y predecible, que aporta una gran satisfacción del paciente.
          </p>
        ),
      },
    ],
    seccion3: [
      {
        titulo: "¿En qué consiste la cirugía?:",
        texto: (
          <p>
            Previo al tratamiento, es necesario hacer un examen clínico de los ojos y de la agudeza visual. Para evitar sensaciones molestas, antes del procedimiento, el ojo se trata con gotas de anestesia tópica. También el médico podría recomendar un sedante. <br />
            Primero se hace una pequeñísima incisión en el área del ojo donde se unen la parte blanca con la parte transparente y curva del ojo (unión esclero-corneal). <br />
            Dentro del ojo se inyecta una sustancia gelatinosa y a continuación se inyecta la lente ICL, que debe descansar inicialmente por delante del iris. <br />
            Por último, la ICL se implanta cuidadosamente detrás del iris y se retira la sustancia gelatinosa del interior del ojo. <br />
            En esto consiste todo el procedimiento. El pequeño corte que se hizo no necesita sutura. Este se sella por sí mismo de modo natural y sanará en breve. El implante de ICL es un procedimiento ambulatorio que dura de 15 a 30 minutos. Después del tratamiento, unas horas mas tarde, la persona puede marcharse de la clínica en compañía de un familiar o amigo.
          </p>
        ),
      },
    ],
    seccion4: [
      {
        titulo: "¿Puedo ser candidato/a para una ICL?:",
        texto: (
          <p>
            Los mejores candidatos son aquellos entre los 25 y 50 años de edad con miopía o hipermetropía con o sin astigmatismo. El mejor candidato es la persona que no haya sido sometida a cirugía oftalmológica y que no tenga historial de enfermedades oculares tales como glaucoma, iritis o retinopatía diabética.
          </p>
        ),
      },
    ],
    seccion5: [
      {
        titulo: "¿Cuáles son las ventajas de la ICL?:",
        texto: (
          <p>
            La ICL puede corregir una amplia gama de problemas relacionados con la miopía, hipermetropia y el astigmatismo sin que exista la necesidad de remover o destruir tejido de la córnea. La lente es pequeña, plegable, e inyectada sin dolor a través de una pequeñísima incisión sin sutura la cual cicatriza fácilmente en el ojo. La ICL está hecha de Collamer ®, un material único y totalmente biocompatible, por lo tanto es aceptada por el cuerpo humano como si fuera tejido propio. Esto significa que no sufre rechazo. Otras características del Collamer son su alto nivel de transparencia, su flexibilidad y su elasticidad, que permiten doblarlo e inyectarlo dentro del ojo. Una vez colocado recobra su forma natural.
          </p>
        ),
      },
    ],
    seccion6: [
      {
        titulo: "¿Qué sucedería si hay cambios en mi visión?:",
        texto: (
          <p>
            Si en los exámenes oculares anuales se observaran cambios en la visión, la lente ICL se puede retirar o cambiar. Se pueden usar gafas o lentes de contacto, si fuera necesario. La lente no corrige la presbicia y tampoco evita la necesidad de, con la edad, llevar gafas para visión cercana. La lente ICL es muy predecible en los resultados post operatorios, con una excelente calidad de visión y se podría retirar, si fuera necesario
          </p>
        ),
      },
    ],
    seccion7: [
      {
        titulo: "¿Qué experiencia hay con la lente ICL?:",
        texto: (
          <p>
            La lente ICL está disponible desde 1997 y desde entonces, más de 55.000 lentes han sido implantadas.
          </p>
        ),
      },
    ],
    seccion8: [
      {
        titulo: "¿En cuánto tiempo puedo volver a practicar deportes y otras actividades?:",
        texto: (
          <p>
            Como la recuperación es muy rápida, puede abandonar la clínica en un par de horas. Puede disfrutar de su nueva visión inmediatamente y volver a sus actividades. De todas formas, el médico le dará unas indicaciones.
          </p>
        ),
      },
    ],
    seccion9: [
      {
        titulo: "¿Podría la ICL secarse o ensuciarse como sucede con las lentes de contacto?:",
        texto: (
          <p>
            No, la ICL ha sido diseñada para permanecer indefinidamente dentro del ojo sin recibir ningún mantenimiento. Se recomienda una visita anual al oftalmólogo para cerciorarse de que todo está correcto. <br />
            La ICL se fabrica en Suiza con tecnología de alta precisión y es un tratamiento aprobado para ser ejecutado solamente por cirujanos oftalmólogos entrenados.
          </p>
        ),
      },
    ],
  },
  {
    id: 13,
    label: "Oculoplastía",
    href: "#oculoplastia",
    titulo: "Oculoplastía",
    imageSrc: oculoplastiaImg,
    descripcion: (
      <p>
          Es la rama de la oftalmología encargada del manejo de las afecciones de los Párpados, Orbita y Vías Lagrimales. Abarca los planos de acción terapéutico, reparativo y cosméetico. Son los subespecialistas más capacitados en la región que rodea al ojo. La oculoplástica ofrece salud y belleza en un solo paquete. <br />
          Se trata generalmente de cirugías de mínima invasión y ambulatoria en 80 por ciento de los casos. Encargada de atender un buen número de enfermedades y padecimientos que no sólo dañan la órbita ocular, sino también producen alteraciones del rostro que afectan la autoestima y calidad de vida de las personas. <br />
          Entre las afecciones que maneja esta área podemos citar: <br />
          - Blefaroplastías (Cirugías de parpados) cosméticas o reparativas<br />
          - Ptosis Palpebral (parpados caídos)<br />
          - Entropion (inversión de la posición del párpado)<br />
          - Ectropion (eversión de la posición del párpado)<br />
          - Blefaroespasmos (contracciones involuntarias)<br />
          - Tumores e infecciones Orbitarios, Palpebrales o de las Vías Lagrimales<br />  
          - Orbitopatía relacionada con la Tiroides<br />
          - Disfunción de las vías lagrimales (lagrimeo)<br />
          - Deformidades orbitarias o palpebrales genéticas o congénitas<br />
          - Traumatismos o accidentes orbito-oculo-palpebrales<br />
          - Evisceración<br />
          - Enucleación<br />
          - Excenteración<br />
          Además de las técnicas quirúrgicas tradicionalmente usadas en la oftalmología, esta subespecialidad se apoya de tecnología de punta. Por ejemplo, precisa el empleo de un láser de dióxido de carbono –similar a un lápiz óptico– que hace incisiones en el tejido cutáneo, con la ventaja de no precipitar el sangrado. Ello es importante en individuos con enfermedades vasculares, pues permite hacer cortes muy finos en sitios poblados de vasos sanguíneos, y por lo tanto la cirugía se torna más limpia y la recuperación posoperatoria más rápida. <br />
          La utilización de endoscopía en el área que abarca esta subespecialidad permite realizar actos quirúrgicos con mínimas incisiones y con recuperaciones más rápidas. <br />
          Así también la utilización de sustancias como Toxina Botulínica o Acido Hialurónico, para arrugas de expresión o surcos faciales, ambas por vía inyectable por debajo del piel, amplían la posibilidad de procedimientos totalmente ambulatorios, con mínima invasión y resultados dentro de un plazo corto de tiempo.
      </p>
    ),
  },
  {
    id: 14,
    label: "OJO SECO",
    href: "#ojo-seco",
    titulo: "Ojo Seco",
    imageSrc: ojoSecoImg,
    descripcion: (
      <p>
          Es una enfermedad que no permite a los ojos producir suficientes lágrimas, o existe una deficiencia en la calidad y/o cantidad de lágrimas producidas por el ojo. <br />
          Estos signos y síntomas se hacen más evidentes cuando hay viento, ventiladores o aire acondicionado porque la lágrima se evapora más rápido. <br />
          Por el envejecimiento celular normal del ser humano, nuestros cuerpos experimentan una reducción normal de la producción de lágrimas. Sin embargo, ciertas enfermedades y condiciones médicas pueden ocasionar el ojo seco. <br />
          Algunos medicamentos que pueden disminuir la capacidad del cuerpo para producir lágrimas lubricantes, como por ejemplo los antihistamínicos, las píldoras anticonceptivas, los diuréticos y los beta bloqueadores.(medicamentos utilizados en pacientes hipertensos) <br />
          El oftalmólogo es quien puede determinar mediante estudios si usted padece de ojo seco, además haciendo algunas sencillas preguntas como: <br />
          La medicina oftalmológica dispone de diversos test o estudios que permiten efectuar un diagnostico certero evaluando la estabilidad y la composición de la capa corneal.
      </p>
    ),
    seccion1: [
      {
        titulo: "¿Qué papel juegan las lágrimas?",
        texto: (
          <p>
            Normalmente, el cuerpo produce dos tipos de lágrimas: <br />
            Una producción insuficiente de lagrimas puede conducir al desarrollo de ojo seco, causando dolor, enrojecimiento ocular y hasta cicatrización de la córnea. Una lubricación adecuada del ojo es posible mediante un equilibrio lagrimal que consta de la producción de lágrimas de buena calidad y un parpadeo normal. <br />
            Cuando ese equilibrio se rompe, o bien se altera por factores externos, la producción de lágrimas disminuye y existe propensión al desarrollo del ojo seco. En síntesis, el ojo seco es una reducción en la habilidad del ojo para producir suficientes lágrimas.
          </p>
        ),
      },
    ],
    seccion2: [
      {
        titulo: "Tratamiento quirúrgico en la Disfunción de Glándulas de Meibomio",
        texto: (
          <p>
            La disfunción de las glándulas de Meibomio es la principal causa de síndrome de ojo seco a nivel mundial, generando un sindrome de  ojo seco evaporativo. La irritación ocular que genera esta patología se caracteriza por la sensación de arenilla “cuerpo extraño” asociado a lagrimeo ocasional que aparece en ambientes secos o con los  cambios de temperatura. <br />
            En muchos casos, la exploración del paciente revela alteraciones en las glándulas de meibomio, aparecen disminuidas de tamaño y en menor número cuando las identificamos por transiluminación y al estudiar el borde libre, vemos que los orificios de salida están obstruidos y no dejan que su contenido lipídico sea secretado hacia la lágrima, para que en el parpadeo se forme una capa de lípidos que evite la rotura precoz de la película lagrimal. <br />
            La rotura precoz de la película lágrimal ocasiona que la superficie ocular, córnea y conjuntiva, entren en contacto con el aire, se desecan y se daña su estructura celular, ocasionando molestias, “ojo rojo”. <br />
            Hace tiempo que en nuestra Institución, el  Centro de Ojos Quilmes, al tratamiento médico de la disfunción glandular lo complementamos con el quirúrgico. Consiste en  una técnica NO HOMOLOGABLE con las que actualmente se realizan para ojo seco ya que actúa directamente sobre las glándulas de Meibomio. El objetivo es la desobstrucción de las glándulas de Meibomio las cuales se encuentran inflamadas y con contenido graso en su interior, en aquellos pacientes que presentan disfunción de las glándulas de Meibomio.
          </p>
        ),
        imagen: ojoSeco2Img
      },
    ],
    seccion3: [
      {
        titulo: "Tratamiento del ojo seco acuoso",
        texto: (
          <p>
            El ojo seco acuoso se caracteriza por una disminución en la producción de la fracción acuosa lagrimal, generalmente por disfunción de la glándula lagrimal. Puede ser idiopático, relacionado con la edad o secundario a enfermedades como el Síndrome de Sjögren. <br />
            El abordaje debe ser individualizado y progresivo, según la severidad y el mecanismo predominante. <br />
            1- Lágrimas artificiales <br />
            2- Gel o ungüento nocturno <br />
            3- Control de la inflamación <br />
            4- Conservación lagrimal <br />
            5- Tapones lagrimales (plug) <br />
            6- Oclusión térmica permanente en casos seleccionados <br />
            <span className="destacado_negro_2_subrayado">Terapias avanzadas:</span> <br />
            Suero autologo y plasma rico en plaquetas (PRP) <br />
            - Contiene factores de crecimiento <br />
            - Contiene factores de crecimiento <br />
            - Indicado en casos severos o con queratitis persistente
          </p>
        ),
        imagen: ojoSeco3Img
      },
    ],
    seccion4: [
      {
        titulo: "Ojo seco evaporativo y  Demodex",
        texto: (
          <p>
            El ojo seco evaporativo se asocia con mayor frecuencia a disfunción de las glándulas de Meibomio . Sin embargo, dentro del enfoque diagnóstico integral, es fundamental considerar la posible participación de infestación por Demodex como factor contribuyente o perpetuador del cuadro inflamatorio palpebral. <br />
            Los ácaros del género Demodex —principalmente Demodex folliculorum y Demodex brevis— pueden inducir: <br />
            - Inflamación crónica del borde palpebral <br />
            - Obstrucción de los orificios meibomianos <br />
            - Alteración cualitativa de la secreción lipídica <br />
            - Inestabilidad de la película lagrimal <br />
            - Incremento de la evaporación <br />
            En este contexto, la presencia de blefaritis por Demodex puede actuar como un factor etiopatogénico secundario en el ojo seco evaporativo, agravando la disfunción lipídica. <br />
            Durante el examen en lámpara de hendidura se debe evaluar: <br />
            - Presencia de collarettes o escamas cilíndricas en la base de las pestañas (hallazgo altamente sugestivo) <br />
            - Hiperemia del borde palpebral <br />
            - Telangiectasias <br />
            - Secreción meibomiana espesa o turbia <br />
            - Obstrucción de orificios glandulares <br />
            Ante la sospecha clínica, puede realizarse epilación selectiva para confirmación microscópica, aunque en la práctica el diagnóstico suele ser clínico.
          </p>
        ),
        imagen: ojoSeco4Img
      },
    ],
    seccion5: [
      {
        titulo: "Tratamiento: Expresión de glándulas de Meibomio con exfoliación palpebral",
        texto: (
          <p>
            En muchos casos de ojo seco evaporativo, las glándulas de Meibomio están: <br />
            - Tapadas <br />
            - Inflamadas <br />
            - Produciendo una grasa espesa o de mala calidad <br />
            Esto hace que la lágrima se evapore más rápido. <br />
            Glándulas ubicadas en los párpados que producen la capa grasa de la lágrima, la que evita que se evapore. <br />
            Cuando se tapan, la grasa no sale correctamente y aparece: <br />
            - Ardor <br />
            - Sensación de arenilla <br />
            - Visión borrosa intermitente <br />
            - Ojos rojos <br />
            ¿En qué consiste el tratamiento? <br />
            1- Exfoliación del borde palpebral <br />
            Se realiza una limpieza profunda del borde del párpado para: <br />
            - Eliminar bacterias <br />
            - Remover biofilm <br />
            - Quitar células muertas <br />
            - Destapar los orificios glandulares <br />
            Se realiza con dispositivos específicos (microexfoliación) <br />
  
            2-Expresión de glándulas de Meibomio <br />
  
            Luego se ejerce una presión controlada sobre los párpados para: <br />
            - Vaciar el contenido espeso <br />
            - Desobstruir las glándulas <br />
            - Mejorar la calidad de la secreción lipídica <br />
            - Es un procedimiento breve. <br />
            - Puede generar una leve molestia, pero es bien tolerado. <br />
            ¿Qué beneficios tiene? <br />
            - Mejora la calidad de la lágrima <br />
            - Disminuye la evaporación <br />
            - Reduce inflamación <br />
            - Alivia síntomas de ojo seco <br />
            - Mejora la estabilidad visual <br />
            - En muchos pacientes se nota mejoría en pocos días. <br />
          </p>
        ),
        imagen: ojoSeco5Img
      },
    ],
  },
  {
    id: 15,
    label: "Presbicia",
    href: "#presbicia",
    titulo: "Presbicia",
    imageSrc: presbiciaImg,
    descripcion: (
      <p>
          Para enfocar de cerca, el ojo pone en marcha un mecanismo de «acomodación», mediante el cual y por la acción del músculo ciliar, se varía el espesor  y la posición del cristalino  que es una lente en el interior del ojo, aumentando la potencia del mismo. Esto hace que la imagen de un punto cercano se forme en la retina pudiendo verla con nitidez. Con el paso del tiempo, el músculo ciliar, como el resto de los músculos  del cuerpo humano, van perdiendo su fuerza por la disminución de mediadores químicos, con la consiguiente pérdida de su elasticidad y haciéndose menos potentes. Al mismo tiempo el cristalino se va haciendo menos flexible, con todo lo cual pierde lentamente la capacidad para acomodar y por lo tanto para ver de cerca. De esta forma podemos definir a la presbicia como la condición óptica en la cual, debido a los cambios producidos por la edad, disminuye  el poder de acomodación. La presbicia es, por lo tanto, una condición fisiológica y no patológica <br />
          La presbicia comienza a manifestarse aproximadamente entre los 40 y los 45 años.
      </p>
    ),
    seccion1: [
      {
        titulo: "Síntomas iniciales:",
        texto: (
          <p>
            – Necesidad de separarnos de lo que estamos leyendo, o de la tarea que estamos realizando. <br />
            – Se necesita cada vez más luz para leer.<br />
            – Afecta por igual a miopes e hipermétropes.<br />
            – Afecta a aquellos que nunca han usado anteojos.
          </p>
        ),
      },
    ],
    seccion2: [
      {
        titulo: "Tratamiento médico de la Presbicia:",
        texto: (
          <p>
            Este tratamiento es el mas novedoso y revolucionario que se basa en aplicar sustancias químicas que suplanten o complementen a los mediadores enzimáticos que se fueron disminuyendo por la edad (método Benozzi) Este novedoso tratamiento mejora la capacidad de acomodación y mejora la visión. Ambas cosas en forma permanente hasta que aparecen otros trastornos fisiológicos relativos a la edad (rigidez del cristalino que luego se puede opacificar y se transforma en cataratas). <br />
            El tratamiento  consiste en aplicar  un colirio que contiene 2 drogas una de ella es un neurotransmisor y la otra un antinflamatorio no esteroide que separadamente han sido utilizadas en la oftalmología desde hace más de 50 años para otras enfermedades oftalmológicas. <br /> 
            El neuro transmisor complementa la disminución fisiológica de esta sustancia en el sistema nervioso central a partir de los 40 años, y el antiflamatorio no estereoide amortigua los efectos secundarios del neurotransmisor. <br />
            El 80% de los pacientes présbitas pueden reemplazar sus anteojos con este tratamiento, siendo necesario seleccionarlos cuidadosamente. <br />
            El tratamiento consiste en la administración de una a tres gotas diarias de acuerdo a las características de cada paciente. <br />
            UNA VEZ INICIADO EL TRATAMIENTO EL PACIENTE PUEDE ABANDONAR LOS ANTEOJOS DEFINITIVAMENTE. <br />  
            Si suspendiera el tratamiento, la presbicia sería la misma que cuando lo inició, o sea, que durante el uso de las gotas su problema de enfoque no aumentaría como le hubiera sucedido al haber usado gafas.
          </p>
        ),
      },
    ],
    seccion3: [
      {
        titulo: "¿Qué es la presbicia?:",
        texto: (
          <p>
            La presbicia es la condición óptica en la cuál, debido a la falta de mediadores químicos en los musculos destinados a la acomodación, disminuye el poder de acomodación, y  la visión cercana. Aparece generalmente entre los 40 y los 45 años de edad. Siendo usualmente reversible con el tratamiento medico con colirios (método Benozzi)
          </p>
        ),
      },
    ],
    seccion4: [
      {
        titulo: "¿Puedo ser candidato/a para una ICL?:",
        texto: (
          <p>
            Los mejores candidatos son aquellos entre los 25 y 50 años de edad con miopía o hipermetropía con o sin astigmatismo. El mejor candidato es la persona que no haya sido sometida a cirugía oftalmológica y que no tenga historial de enfermedades oculares tales como glaucoma, iritis o retinopatía diabética.
          </p>
        ),
      },
    ],
    seccion5: [
      {
        titulo: "¿Cuáles son sus síntomas?:",
        texto: (
          <p>
            Sus síntomas iniciales son muy claros: los objetos cercanos comienzan a aparecer desenfocados y hace falta separarse de lo que estamos leyendo, o de la tarea que estamos realizando.
          </p>
        ),
      },
    ],
    seccion6: [
      {
        titulo: "¿Cómo puede corregirse?:",
        texto: (
          <p>
            - Tratamiento Médico: está indicado cuando el cristalino aun es flexible y transparente y es un ojo emétrope (que no presenta miopía ni hipermetropía) <br />
            - Es seguro, rápido, eficaz y reversible. <br />
            - Tratamiento Óptico: están los anteojos monofocales, los bifocales, los multifocales y las lentes de contacto. <br />
            - Tratamiento quirúrgico: pueden ser con EXIMER  Láser  o con lentes intraoculares.
          </p>
        ),
      },
    ],
    seccion7: [
      {
        titulo: "¿A partir de que edad conviene empezar a tratarse?:",
        texto: (
          <p>
            Cuando comienzan los primeros síntomas es el momento ideal.
          </p>
        ),
      },
    ],
    seccion8: [
      {
        titulo: "¿Quiénes pueden tratarse?:",
        texto: (
          <p>
            Toda persona que presente presbicia. <br />
            Si el paciente no necesita utilizar lentes para la visión lejana, solo con el tratamiento de gotas será suficiente <br />   
            Si el paciente tiene un defecto para la visión lejana tipo Hipermetropía y/o astigmatismo: será necesario una cirugía de este defecto en particular, con Láser y luego el tratamiento con gotas <br />  
            Si el paciente tiene una opacidad en el cristalino (cataratas) será necesario implantar lentes multifocales o acomodativas
          </p>
        ),
      },
    ],
    seccion9: [
      {
        titulo: "¿Siempre tendré que usar las gotas?:",
        texto: (
          <p>
            Si mientras que su cristalino sea flexible y la capacidad del músculo ciliar así lo permita.
          </p>
        ),
      },
    ],
  },
  {
    id: 16,
    label: "Procedimientos con Laser",
    href: "#procedimientos-con-laser",
    titulo: "Procedimientos con Laser",
    imageSrc: laserImg,
    descripcion: (
      <p>
          El láser es un dispositivo que emite un haz de luz coherente, monocromática y colimada. En la oftalmología se utiliza para realizar procedimientos tanto diagnósticos como terapéuticos. <br />
          En el Centro de Ojos Quilmes, contamos con la tecnología más avanzada para realizar procedimientos con láser. Nuestros especialistas están altamente capacitados para llevar a cabo una amplia gama de tratamientos con láser, desde corrección de errores refractivos hasta tratamientos para enfermedades oculares específicas.
      </p>
    ),
    seccion1: [
      {
        titulo: "Capsulotomía Láser:",
        texto: (
          <p>
            El cristalino o lente natural del ojo está formado por un núcleo y la cápsula que lo envuelve. Durante una operación de catarata abrimos una ventana en la parte anterior de la cápsula para fragmentar y aspirar el núcleo, dejando la cápsula en forma de saco para implantar la lente intraocular artificial que reemplaza el cristalino. Pasado el tiempo, meses o incluso años después de la operación de catarata, es posible que algunas células residuales se depositen en la parte posterior del saco capsular llegando a opacificar la cápsula posterior, provocando disminución de la agudeza visual. <br />
            El tratamiento de capsulotomía con láser YAG se realiza de forma ambulatoria en la consulta y con anestesia tópica (gotas). <br />
            El paciente debe tener la pupila dilatada. El oftalmólogo utiliza una lente de contacto para evitar el parpadeo y enfocar correctamente. Mediante un láser YAG adaptado a una lámpara de hendidura o microscopio, realizamos una pequeña abertura en la cápsula posterior opacificada para limpiar la membrana opacificada y dejar libre el eje visual. La parte que queda de cápsula posterior es suficiente para mantener la lente intraocular en su posición. <br />
            Se trata de un método muy seguro y, normalmente, con resultados inmediatos.
          </p>
        ),
      },
    ],
    seccion2: [
      {
        titulo: "Iridotomía Periférica Láser:",
        texto: (
          <p>
            La iridotomía es un procedimiento que se lleva a cabo con láser (la mayoría de veces con láser YAG, aunque también puede realizarse con láser de argón) para facilitar el drenaje del humor acuoso. Es un tratamiento profiláctico que se realiza en ojos con ángulo estrecho (ángulo ocluible) con fin preventivo: evitar un episodio de glaucoma agudo, es decir, una subida brusca de presión intraocular por bloqueo pupilar. La iridotomía es una técnica sencilla, eficaz y rápida que requiere alrededor de 10 minutos para llevarse a cabo en la consulta del oftalmólogo. <br />
            Consiste en hacer un pequeño orificio en la periferia del iris (la parte coloreada del ojo) para comunicar la zona posterior de esta estructura con la zona anterior (cámara posterior con cámara anterior), y, así, equilibrar los niveles de presión intraocular entre ellas. <br />
            La recuperación tras la iridotomía es inmediata y a las 24 horas ya se puede realizar vida normal, aunque inicialmente es posible notar algunas molestias. <br />
            El paciente puede presentar una inflamación leve y un aumento brusco de la presión intraocular las primeras horas después del procedimiento. <br />
            En algunos casos, puede ser necesario repetir la aplicación de la iridotomía.
          </p>
        ),
      },
    ],
    seccion3: [
      {
        titulo: "Trabeculoplastia con Laser Selectivo (SLT Selective Laser Trabeculoplasty):",
        texto: (
          <p>
            Es una alternativa eficaz y segura para el tratamiento del glaucoma. Se utiliza para aquellos os pacientes con intolerancia a los fármacos para el glaucoma, que presentan la superficie ocular dañada o bien que no desean “depender” de un tratamiento tópico diario, pueden beneficiarse de la Trabeculoplastia Láser Selectiva.
          </p>
        ),
      },
    ],
    seccion4: [
      {
        titulo: "Fotocoagulación con Láser:",
        texto: (
          <p>
            Consiste en aplicar láser sobre zonas de la retina dañadas para tratar o prevenir problemas retinianos. Se realiza en multitud de patologías de la retina, tanto en roturas para que la retina no se desprenda como en enfermedades vasculares de la retina, retinopatía diabética, obstrucciones de vena, aneurismas, etc.
          </p>
        ),
      },
    ],
    seccion5: [
      {
        titulo: "Vitreolisis:",
        texto: (
          <p>
            La vitreolisis, también conocida como el «tratamiento láser para las miodesopsias», es un procedimiento no invasivo capaz de eliminar los defectos visuales causados por las opacidades en el humor vítreo, el cuerpo gelatinoso que rellena y da forma al globo ocular. <br />
            El objetivo de la vitreolisis es conseguir una mejora funcional. Es decir, permitir al paciente la realización de sus actividades cotidianas del día a día evitando la interferencia de las moscas volantes. <br />
            La vitreolisis o fotodisrrupción con láser consiste en la aplicación de pulsos láser que microfragmentan las opacidades de colágeno u otras sustancias generadas en el humor vítreo. <br />
            El resultado es que las miodesopsias tratadas desaparecen del eje óptico o quedan reducidas a un tamaño tal que no interfiere la correcta visión. <br />
            La vitreolisis con láser es un procedimiento completamente ambulatorio por lo que el paciente no requiere ser ingresado. <br />
            Antes del tratamiento, se aplican gotas anestésicas sobre el ojo para evitar molestias. <br />
            Durante el tratamiento, el paciente puede observar puntos oscuros y sombras. Esto es señal de que las opacidades están siendo tratadas y aparecen microburbujas que pronto se disolverán y serán reabsorbidas en el vítreo. <br />
            Una vez finalizado el procedimiento, el oftalmólogo puede aplicar unas gotas antiinflamatorias. <br />
            Cada tratamiento dura entre 20 y 45 minutos y algunos pacientes pueden necesitar una segunda o tercera sesión para obtener resultados satisfactorios. <br />
            Es necesario realizar una revisión oftalmológica para determinar si un paciente es apto o no para aplicar el tratamiento con vitreolisis.
          </p>
        ),
      },
    ]
  },
  {
    id: 17,
    label: "Queratocono",
    href: "#queratocono",
    titulo: "Queratocono",
    imageSrc: queratoconoImg,
    descripcion: (
      <p>
          El queratocono o córnea cónica es un desorden del ojo humano que raramente causa ceguera pero que puede interferir significativamente con la visión. Es una condición en la cual la forma normal redondeada de la córnea se distorsiona y desarrolla una prominencia en forma de cono. La palabra queratocono esta formada por dos palabras Griegas: kerato, que significa córnea, y konos, que significa cono. <br />
          Ya que la córnea es el principal lente del ojo, la visión disminuye significativamente al deformarse de esta manera. La progresión del queratocono es generalmente lenta y puede detenerse en cualquiera de las fases: desde leve hasta severo. Si el queratocono progresa, la córnea se abomba y adelgaza tornándose irregular y algunas veces formando cicatrices. Habitualmente se presenta bilateral y sus estadios son asimétricos.
      </p>
    ),
    seccion1: [
      {
        titulo: "¿Cuál es la causa del queratocono?:",
        texto: (
          <p>
            Las causas de esta afección todavía se desconocen a pesar de nuestra familiaridad con esta enfermedad. Se han realizado múltiples estudios y se han formulado gran cantidad de teorías. <br />
            Unas teorías plantean que el queratocono depende de un defecto en el desarrollo y es de origen genético (alrededor de 7% de los pacientes tienen familiares con queratocono). Esto sugiere que es la consecuencia de una anormalidad en el crecimiento, esencialmente un defecto congénito. Otra es que el queratocono es una condición degenerativa. Una tercera postula que el queratocono es secundario a otras enfermedades. Otras veces puede estar provocado por debilitamientos en el tejido corneal (como cirugías o traumatismos previos). <br />
            La incidencia real de queratocono no es conocida. No es una de las afecciones más comunes del ojo pero tampoco es de ninguna manera una enfermedad rara. Se estima que ocurre en uno de cada dos mil personas. Generalmente la enfermedad se presenta en gente joven hacia la pubertad. Se encuentra en todas partes del mundo sin seguir ningún patrón geográfico, cultural o social conocido.
          </p>
        ),
      },
    ],
    seccion2: [
      {
        titulo: "¿Cuáles son los síntomas que produce el queratocono?:",
        texto: (
          <p>
            El primer síntoma de queratocono es visión borrosa que en un principio puede corregirse con anteojos. Ya que es una enfermedad progresiva, se necesitarán cambios frecuentes en la fórmula de los anteojos. El adelgazamiento de la córnea progresa lentamente por 5 a 10 años y después tiende a detenerse. Ocasionalmente es rápidamente progresivo y en estadios avanzados el paciente puede experimentar visión borrosa súbita en un ojo. Esto es llamado «Hydrops agudo» y se debe a la súbita entrada de líquido hacia la córnea adelgazada. Este hydrops mejora con el tiempo, tomando semanas o meses para desaparecer En casos avanzados se forman cicatrices superficiales en el ápice de la córnea resultando en mayor disminución de la visión.
          </p>
        ),
      },
    ],
    seccion3: [
      {
        titulo: "¿Cómo debe controlarse el queratocono?:",
        texto: (
          <p>
            Ya que el queratocono es una enfermedad crónica que avanza lentamente, es importante que usted desarrolle una buena relación con su oftalmólogo. Va a verlo con bastante frecuencia por un largo periodo de tiempo: debe tener confianza en él y sentirse cómodo al formular preguntas. Generalmente los oftalmólogos son personas ocupadas, pero nunca pueden estar tan ocupados como para no discutir su caso con usted. Busque un oftalmólogo con quien se sienta bien y permanezca con él. <br />
            Su oftalmólogo requiere de su colaboración. El no puede controlar lo que sucede entre una consulta y la otra, pero usted si. Piense que él es un compañero en el cuidado de sus ojos, pero recuerde que usted es responsable por su bienestar. El puede indicarle que tratamiento debe seguir pero usted es el único que puede cumplirlo. Si usted mismo no cuida sus ojos es poco probable que alguien mas pueda hacerlo Si su oftalmólogo le da una cita para determinado momento, cúmplala. Hay una razón importante para que el le de esa cita, y si usted no la sabe, puede preguntar. <br />
            Comente su problema con los médicos que está visitando y la medicación que está tomando. Si está siendo visto por un internista, cardiólogo, dermatólogo, odontólogo, o cualquier otro profesional de la salud asegúrese que estén informados de su queratocono. <br />
            Esté alerta a cualquier cambio en la condición de su ojo o en su visión. Si experimenta visión borrosa, irritación, lagrimeo o secreción debe ponerse en contacto con su oftalmólogo. Esto puede ser la señal de que existe un problema con la tolerancia de sus ojos a los lentes de contacto o que hay necesidad de readaptarlos. Usted por supuesto, debe tener un cuidado normal de sus ojos y evitar el uso de cualquier sustancia no prescrita por el oftalmólogo. Las mujeres deben tener cuidado con los cosméticos. Cualquier persona que sufra de queratocono debe utilizar gafas para nadar y anteojos de seguridad cuando esté trabajando en el jardín o practique algún deporte.
          </p>
        ),
      },
    ],
    seccion4: [
      {
        titulo: "¿Cuál es el tratamiento para el queratocono?:",
        texto: (
          <p>
            En las fases tempranas del queratocono anteojos comunes pueden corregir la miopía y astigmatismo que se producen. Al avanzar la enfermedad los lentes de contacto rígidos gas permeables son la única forma de corregir la visión adecuadamente. Deben ser adaptados con gran cuidado y la mayoría de pacientes con queratocono requieren chequeos frecuentes y cambios periódicos en sus lentes de contacto para obtener una buena visión y confort. En algunas instancias el uso de un lente sobre otro provee una solución alternativa. Los avances tecnológicos en los lentes blandos y gas permeables son constantes ofreciendo más y mejores posibilidades para los pacientes con queratocono. <br />
            Estas opciones no constituyen en si un tratamiento, solo mejoran la visión pero la enfermedad seguirá su curso, los únicos tratamientos para detener la progresión de esta condición son los anillos intraestromales y los transplantes de córnea.
          </p>
        ),
      },
    ],
    seccion5: [
      {
        titulo: "¿Qué son los anillos intraestromales?:",
        texto: (
          <p>
            Es un tratamiento ortésico compuesto de dos segmentos semicirculares de espesor y diámetro variable, de material acrílico (Perspex CQ), el cual ha sido utilizado por más de 20 años en la fabricación de lentes intraoculares. Es perfectamente tolerado por el organismo sin ningún riesgo de rechazo. Es el más moderno y seguro tratamiento para tratar el queratocono.
          </p>
        ),
      },
    ],
    seccion6: [
      {
        titulo: "¿Cuántos tipos de Anillos hay?:",
        texto: (
          <p>
            Hay dos sistemas comerciales similares ,aunque sean diferentes sus dimensiones, si bien ambos se colocan en el queratocono varían las indicaciones de uno y del otro como también, el criterio o la selección según el médico tratante .-los sistemas son cónicos tipo intacs y el otro sistema son planos, tipo Ferrara
          </p>
        ),
      },
    ],
    seccion7: [
      {
        titulo: " ¿Cómo es el procedimiento quirúrgico?:",
        texto: (
          <p>
            La cirugía de segmentos intracorneales se realizan en quirófanos especialmente diseñados para cirugía oftalmológica. La anestesia es sólo local, es decir solo con gotas. Luego de limpiar el área quirúrgica, se coloca una compresa estéril que cubre los ojos, nariz, la boca y toda la cabeza. Se realiza de esta forma para mantener el campo quirúrgico estéril alejado de cualquier contaminación. El procedimiento no es doloroso y dura alrededor de 15 minutos. La utilización de colirios de antibióticos, antiinflamatorios y lubricantes hacen más confortable y seguro al postoperatorio. Habitualmente luego de tres días se puede volver a realizar las tareas habituales.
          </p>
        ),
      },
    ],
    seccion8: [
      {
        titulo: "¿Cuáles son los riesgos de la cirugía?:",
        texto: (
          <p>
            Los riesgos son mínimos, como cualquier cirugía, la infección es una de las complicaciones. En este caso, hay que retirar los implantes. <br />
            No hay riesgo de rechazo. Las complicaciones son mínimas, y lo más importante es que la cirugía es reversible, esto significa que el anillo puede ser retirado y la córnea vuelve a su curvatura anterior.
          </p>
        ),
      },
    ],
    seccion9: [
      {
        titulo: "Luego de la cirugía, ¿Cuándo se recupera la visión?:",
        texto: (
          <p>
            La recuperación visual, es rápida. Al día siguiente, la visión mejora y se va estabilizando lentamente hasta el tercer mes. En este período es normal que ocurran fluctuaciones de visión. Particularmente por la mañana, la visión es mejor, y en el transcurso del día se puede opacificar levemente. No es una cirugía estética, posiblemente sea necesario el uso de anteojos o lentes de contacto para complementar la corrección visual. Sin embargo, la calidad de la visión es buena aunque tenga que usar corrección residual.
          </p>
        ),
      },
    ],
    seccion10: [
      {
        titulo: "Preparación para la cirugía:",
        texto: (
          <p>
            El día de la cirugía: no hay restricciones en la dieta. Excepto que se haya planificado una anestesia general, en cuyo caso, el ayuno no deberá ser inferior a 6 horas. Es recomendable que el paciente tome una ducha que incluya el aseo del cabello. El paciente deberá llegar a la clínica con 30 minutos de antelación a la hora prevista de la cirugía. <br />
            Antes de ingresar al quirófano se le cambiará la ropa para mayor confort. Le serán instiladas algunas gotas anestésicas a intervalos regulares hasta que llegue el momento de ingresar al quirófano.
          </p>
        ),
      },
    ],
    seccion11: [
      {
        titulo: "Instrucciones para el post-operatorio:",
        texto: (
          <p>
            Algunos síntomas inmediatos luego de la cirugía pueden ser: dolor, lagrimeo, fotofobia (aversión a la luz) y ojo rojo, pueden ser síntomas normales en el postoperatorio. Sin embargo, la aparición tardía de estos síntomas, puede llegar a ser anormal y debe informarlo a su médico inmediatamente. Ante cualquier caso de duda, llame o concurra a la clínica.
          </p>
        ),
      },
    ],
    seccion12: [
      {
        titulo: "Medicación postoperatoria:",
        texto: (
          <p>
            Antibiótico, antinflamatorios, lubricantes y analgésicos locales (colirios). <br />
            Deberá dejar un intervalo mínimo de 15 minutos entre la aplicación de estos colirio. <br />
            El paciente deberá evitar los baños de inmersión (piletas de natación, playa, Jacuzzi), sauna, actividades físicas, frotarse los ojos y usar maquillaje. <br />
            La asepsia debe ser realizada con solución fisiológica salina y gasas esterilizadas, muy cuidadosamente, para evitar cualquier traumatismo. <br />
            Es importante que el paciente lave sus manos cuidadosamente con jabón líquido tipo Pervinox y se seque con toallas descartables antes de limpiarse la cara y colocarse las gotas. <br />
            El paciente debe dormir sobre el lado opuesto al ojo operado. El gotero no debe tocar el ojo o la piel.
          </p>
        ),
      },
    ],
    seccion13: [
      {
        titulo: "Controles programados:",
        texto: (
          <p>
            Los controles deben comenzar el día posterior a la cirugía y continuar durante el 1, 3, 6, y 12 mes.
          </p>
        ),
      },
    ],
    seccion14: [
      {
        titulo: "¿Cuáles son las ventajas y desventajas en comparación al injerto de córnea?:",
        texto: (
          <p>
            Las ventajas de los segmentos intracorneales sobre el injerto son: <br />
            - Rápida recuperación visual. <br />
            - Ausencia de rechazos. <br />
            - Fácil y rápida tolerancia al uso de lentes de contacto, si fuera necesario. <br />
            - Reversibilidad. <br />
            - La evolución del queratocono es detenida o disminuida.
          </p>
        ),
      },
    ],
    seccion15: [
      {
        titulo: "¿Puede un transplante corneal ofrecer mejor resultado que el anillo intraestromal?:",
        texto: (
          <p>
            El transplante corneal requiere un largo período de recuperación visual alrededor de 3 a 12 meses y existe la probabilidad de rechazo. No garantiza la recidiva del queratocono y en la mayoría de los casos requiere usar anteojos o lentes de contacto para la corrección del defecto óptico residual.
          </p>
        ),
      },
    ],
    seccion16: [
      {
        titulo: "¿Puede el anillo reemplazar al transplante corneal?:",
        texto: (
          <p>
            No. El principal propósito de los segmentos intracorneales es la rehabilitación visual. Sin embargo, el implante puede demorar la evolución del queratocono, posponiendo por tiempo indeterminado la necesidad de un transplante corneal.
          </p>
        ),
      },
    ],
    seccion17: [
      {
        titulo: "¿Cómo se realiza un transplante de córnea?:",
        texto: (
          <p>
            En los últimos años la cirugía de ojos ha mostrado un alto nivel de eficiencia, efectividad y relativo confort. La cirugía de transplante de córnea es el más exitoso de todos los procedimientos de transplante y las técnicas se mejoran constantemente. <br />
            Este procedimiento busca remover la parte central de la córnea del paciente y reemplazarla con la córnea de un donante. Los bancos de ojos se encargan de obtener córneas sanas y distribuirlas a los cirujanos. Son cirugías bastante comunes y con muy buenos resultados. La probabilidad de rechazo es menor que la de cualquier otro órgano transplantado ya que la córnea no tiene vasos sanguíneos. El rechazo de otros órganos generalmente se da por incompatibilidad entre el donante y el receptor que es mediada por células sanguíneas. <br />
            La anestesia local o general se usa en este procedimiento y en general no es necesaria la hospitalización después de la cirugía. Ya que la visión inicialmente será borrosa, necesitará que alguien maneje hasta su casa. Una vez allí debe asumir un estilo de vida reposado por varios días. Algunas personas experimentan algo de dolor e incomodidad después de la cirugía. La incapacidad laboral varía de acuerdo al trabajo de cada persona. Generalmente en un trabajo sedentario se puede reincorporar en una o dos semanas. <br />
            El cirujano usa un instrumento llamado trepano para remover su córnea distorsionada y para cortar una porción similar en la córnea donante. Luego se coloca la córnea donante en el agujero de su córnea y se sutura en este lugar. Todo el procedimiento se realiza bajo visión microscópica. La sutura que se usa es mucho más fina que un cabello humano. <br />   
            Los vendajes usualmente se remueven en una o dos semanas después de la cirugía pero usted no va a ver claro inmediatamente. Pasaran varios meses antes de que su visión se estabilice y que se le puedan prescribir gafas o lentes de contacto. Existen grandes diferencias entre casos diferentes y por lo tanto los lapsos de tiempo mencionados anteriormente deben considerarse muy generales. <br />
            Aunque hay un 95% de probabilidad de éxito en transplantes de córnea para queratocono, este procedimiento, como cualquier otra operación, involucra riesgos potencialmente serios. En casos donde el primer transplante no es satisfactorio, un segundo transplante puede ser la solución. La recurrencia de queratocono en la córnea transplantada ha ocurrido pero es extremadamente raro. Aunque la pérdida permanente de visión es rara, puede ocurrir. El transplante de córnea se considera solamente en aquellos casos avanzados en los cuales no se aconseja la colocación de anillos intracorneales.
          </p>
        ),
      },
    ],
    seccion18: [
      {
        titulo: "¿Qué es el Crosslinking del Colágeno Corneal?:",
        texto: (
          <p>
            Es el proceso por el cual se generan nuevas uniones, o puentes, entre las cadenas del colágeno corneal existente, que esta alterado en el queratocono. <br />
            Este proceso consiste en saturar el tejido de una sustancia que sensibiliza al colágeno, la riboflavina, luego se estimula la creación de estos nuevos puentes o uniones entre las largas cadenas de colágeno con la irradiación de una luz especial dentro del rango del ultravioleta de una determinada longitud de onda (UVA 375 nm), y que entrega una energía conocida a una determinada distancia ( 3mW/cm2),por un tiempo preestablecido ( 30 min ). <br />
            El procedimiento se realiza con el paciente acostado, levemente sedado y con anestesia local. Luego de anestesiar con gotas anestésicas la córnea se debrida una pequeña porción del epitelio corneal, con el fin de que la riboflavina penetre en el estroma corneal. Se irriga con una solución de riboflavina varias veces el tejido corneal, hasta comprobar que la saturación sea la necesaria para luego irradiar el tejido corneal con la fuente de energía necesaria para lograr la creación de estas uniones. Cada 5 minutos se irriga con la sustancia de riboflavina, sin detener la irradiación, llegando a un total de 30 minutos de exposición a la luz.
          </p>
        ),
      },
    ],
    seccion19: [
      {
        titulo: "Luego de la cirugía, ¿ cuando se recupera la visión?:",
        texto: (
          <p>
           Una vez curada la ulcera que se ocasiono con el tratamiento (aprox. 24 a 48 hs) la visión volverá a ser la previa al tratamiento. Este tratamiento no trae alteraciones e o mejoramientos de la visión, aunque algunas veces ocurren, si trae modificaciones en la estructura corneal que se manifiestan con un aumento de la estabilidad corneal. También, se podrá continuar el uso de las lentes de contacto adaptadas previamente al tratamiento.
          </p>
        ),
      },
    ],
    seccion20: [
      {
        titulo: "Instrucciones para el Postoperatorio:",
        texto: (
          <p>
            Solo serán necesarios antibióticos por unos 3 a 4 días hasta que cierre correctamente el epitelio corneal, analgésicos o anti-inflamatorios si fuese necesarios, y abundante colocación de lubricantes.
          </p>
        ),
      },
    ],
    seccion21: [
      {
        titulo: "Pueden combinarse anillos y crosslinking:",
        texto: (
          <p>
            Es lógico combinar los dos procedimientos, aunque hacerlos conjuntamente es muy incomodo para el paciente. Usualmente se realiza 30 o 40 días antes o después del procedimiento de anillos y en forma conjunta en ambos ojos. Como es un procedimiento minimamente invasivo, se puede realizar también como primer tratamiento, en ojos que tengan leves cambios y que nunca hayan sido operados o en ojos sometidos a cirugías de anillos aunque sean muchos años después
          </p>
        ),
      },
    ]
  },
  {
    id: 18,
    label: "Sindrome de Marfan",
    href: "#sindrome-de-marfan",
    titulo: "Sindrome de Marfan",
    imageSrc: marfanImg,
    descripcion: (
      <p>
        Se trata de un trastorno hereditario del tejido conectivo, que es el encargado de mantener unidos los tejidos del cuerpo. Se pueden producir un número variable de alteraciones que pueden afectar al corazón, los vasos sanguíneos, los pulmones, a los huesos y a los ligamentos. <br />
        En general, son personas muy altas, con los miembros desproporcionadamente largos con respecto al torso.
      </p>
    ),
    seccion1: [
      {
        titulo: "¿Cuáles son sus causas?:",
        texto: (
          <p>
            El Síndrome de Marfan es de origen genético y se debe a un anormal comportamiento del gen FBN1, que determina la producción de una proteína denominada fibrilina. Este gen reside en el cromosoma 15; hay gran variedad de cambios (mutaciones) en este gen que puede causar el síndrome, lo que explicaría la gran variabilidad de afectación de las personas. <br />
            El síndrome de Marfan se hereda como rasgo autosómico dominante y, por tanto, cada niño con un padre con el gen tienen el 50% de probabilidades de heredarlo. Sin embargo, hasta el 30% de los casos no tienen historia familiar y se les denominan casos «esporádicos». <br />
            La fibrilina es un componente fundamental del tejido conectivo contribuyendo a su fuerza y elasticidad. La fibrilina es especialmente abundante en la arteria aorta, en los elementos de sostén del ojo y en los huesos. La personas con Síndrome de Marfan tienen poca cantidad de fibrilina o ésta es de escasa calidad.
          </p>
        ),
      },
    ],
    seccion2: [
      {
        titulo: "¿Qué incidencia tiene en los ojos?:",
        texto: (
          <p>
            Más de la mitad de las personas con síndrome de Marfan experimentan dislocación de uno o ambos cristalinos del ojo. El cristalino es la lente de nuestro sistema óptico y se encuentra sostenido por hebras de tejido conectivo. Cuando estas fibras se quiebran o debilitan, el cristalino desplaza su eje respecto del sistema óptico centrado que permite la entrada de la luz a nuestro ojo, provocando que el paciente vea las imágenes distorsionadas a causa de una refracción excéntrica que impide una adecuada corrección de la imagen. La miopía más o menos severa suele ser la consecuencia inmediata, pero no la más grave. La afección se trata con el uso de anteojos o lentes de contacto, pero cuando se indica cirugía, es preciso el conocimiento específico del cirujano en materia de Marfan, dado que el reemplazo del cristalino por la lente intraocular no siempre es la mejor alternativa en muchos casos. <br />
            Muchas personas con el síndrome de Marfan padecen de miopía, y algunas pueden desarrollar glaucoma (alta presión en el ojo) y cataratas (el cristalino del ojo se vuelve opaco, o sea que pierde su claridad y afecta la visión).
          </p>
        ),
      },
    ],
  },
];

export default PATOLOGIAS;
