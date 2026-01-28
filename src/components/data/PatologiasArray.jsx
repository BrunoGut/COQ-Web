import catarataImg from "../../images/ojo-cataratas.jpeg";
import glaucomaImg from "../../images/ojo-glaucoma.jpeg";
import retinaImg from "../../images/ojo-retina.jpeg";
import transplanteCorneaImg from "../../images/ojo-cornea.jpeg";
import oftalmopediatriaImg from "../../images/ojo-oftalmopediatria.jpeg";
import esteticaImg from "../../images/ojo-estetica.jpeg";

import catarataImg2 from "../../images/cataratas/imagen1.jpg";
import lentesIntraocularesImg from "../../images/cataratas/lentes-intraoculares.jpg";

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
            Enfermedades Generales, tales como la Diabetes."
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
];

export default PATOLOGIAS;
