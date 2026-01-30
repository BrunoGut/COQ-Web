const imageUrl = (fileName) => new URL(`../../images/estudios/${fileName}`, import.meta.url).href;

const ESTUDIOS_ARRAY = [
    {
        id: 1,
        title: " Aberrometría",
        imagen: imageUrl("aberrometria.jpg"),
        descripcion: (
            <p>
                Esta técnica diagnóstica realiza una completísima valoración del defecto refractivo de un paciente, incluyendo esas alteraciones llamadas aberraciones de alto orden, que anteriormente se conocían como astigmatismo irregular y no se especificaban. <br />
                Nos permite representar en un mapa de colores, las deformaciones que alteran la imagen retiniana y, considerando la interrelación entre la apertura pupilar y esas aberraciones, hacernos una idea precisa de la capacidad de un individuo de desenvolverse en distintas condiciones de luminosidad. <br />
                Tiene su mejor aplicación en el tratamiento de ojos con córneas deformes o dañados por cirugía previa. <br />
                También nos ayuda a identificar las causas objetivas de quejas como visión de halos, deslumbramiento, etc.
            </p>
        )
    },
    {
        id: 2,
        title: "Autorefractometría",
        imagen: imageUrl("autorefrac.jpg"),
        descripcion: (
            <p>
                Mide con precisión y en forma automática el vicio de refracción (Miopía, Hipermetropía, Astigmatismo) que poseen sus ojos.
            </p>
        )
    },
    {
        id: 3,
        title: "Campo Visual Computarizado",
        imagen: imageUrl("cvc.jpg"),
        descripcion: (
            <p>
                El campo visual se define como al espacio en el que un objeto puede ser visto mientras la mirada de la persona estudiada permanece fija hacia un punto situado de frente. <br />
                La campimetría o perimetría se utiliza principalmente para realizar el control evolutivo del glaucoma y de otras enfermedades de la retina, como la retinosis pigmentaria. También se emplea para el estudio de las lesiones de la vía óptica,  ya que  valorando las perdidas del campo visual (escotomas), puede localizarse el lugar de la lesión que las provoca. <br />La campimetría es una técnica que además puede aportar información muy valiosa no sólo sobre enfermedades que pueden afectar únicamente a los ojos como el glaucoma, sino también sobre otras enfermedades que pueden manifestarse como un defecto del campo visual. Entre ellas destacan enfermedades degenerativas, tumores cerebrales, problemas vasculares, hipertensión arterial, diabetes, etc..). <br />Realización de la campimetría dinámica:  el paciente permanece sentado situado frente al campímetro. Se examinarán los dos ojos de forma independiente para lo cual el paciente deberá cerrar uno de sus ojos mientras que el examinador le pedirá que le indique cuándo ve y cuándo deja de ver un haz luminoso que se irá desplazando a lo largo del campo visual del ojo estudiado. Posteriormente se repetirá la misma maniobra con el ojo contralateral.
            </p>
        )
    },
    {
        id: 4,
        title: "Potencial Evocado / Electrorretinograma",
        imagen: imageUrl("erg.jpg"),
        descripcion: (
            <p>
                Permite evaluar la función visual desde la retina hasta la corteza cerebral, midiendo las respuestas eléctricas generadas por los estímulos visuales. Es útil en el diagnóstico y seguimiento de diversas enfermedades oculares y neurológicas que afectan la visión.
            </p>
        )
    },
    {
        id: 5,
        title: "Interferometría Laser",
        imagen: imageUrl("iol.jpg"),
        descripcion: (
            <p>
                La interferometría mide el potencial visual, sirve para detectar disminuciones de la agudeza visual por patologías oculares, también para definir expectativas de resultados quirúrgicos.
            </p>
        )
    },
    {
        id: 6,
        title: "Keratograph",
        imagen: imageUrl("keratograph.jpg"),
        descripcion: (
            <p>
                El Keratograph es un topógrafo corneal que posee una cámara de alta densidad y un sistema de iluminación que permite estudiar la superficie ocular y la dinámica palpebral. El principal uso del Keratograph es diagnosticar el ojo seco y vigilar su tratamiento.
            </p>
        )
    },
    {
        id: 7,
        title: "Microscopía especular",
        imagen: imageUrl("microesp.jpg"),
        descripcion: (
            <p>
                La microscopía especular nos permite realizar el estudio del endotelio corneal. Puesto que la distribución celular es prácticamente uniforme, mediante la microscopía se puede conocer el número, la forma y el tamaño de la población endotelial. <br />La microscopía especular nos da una imagen refleja de la interfase óptica que hay entre el endotelio corneal y el humor acuoso, aunque también puede usarse para obtener imágenes del epitelio y del estroma corneal, así como del cristalino. <br />
                Para realizarla, no se precisa contacto. El centrado del ojo se realiza con luz de fijación y es recomendable que el paciente parpadee varias veces antes de la toma de la imagen para humedecer la superficie ocular y mejorar su brillo. Es obligatorio realizar la microscopía especular como una ayuda diagnóstica no invasiva para conocer el estado y la reserva fisiológica de la capa celular endotelial, debido a que una córnea transparente no es garantía de un endotelio corneal normal. Así pues, la realizamos de forma sistemática a nuestros pacientes antes de la cirugía de la catarata y de la cirugía del implante de lentes fáquicas.
            </p>
        )
    },
    {
        id: 8,
        title: "Tomografía de coherencia óptica (OCT)",
        imagen: imageUrl("oct.jpg"),
        descripcion: (
            <p>
                La Tomografía de coherencia óptica o comúnmente conocida OCT, es una técnica de diagnóstico, control y seguimiento, que nos permite el estudio de cortes histológicos de la retina en vivo. <br />
                Es una prueba que no es molesta para el paciente, que no requiere contacto con el ojo, es rápida y carece de efectos secundarios. <br />La Tomografía de Coherencia Óptica (OCT) ha supuesto un gran avance en el estudio del polo posterior y también es importante y de gran utilidad en el diagnostico y abordaje quirúrgico. <br />
                Analiza la retina posterior, la macula, la papila y las relaciones que tienen con el vitreo y la coroides; De esta manera nos permite el seguimiento de las patologías vitreoretinianas, de la mácula, del glaucoma y de las enfermedades del nervio óptico.
            </p>
        )
    },
    {
        id: 9,
        title: "Analizador de Respuesta Ocular (ORA)",
        imagen: imageUrl("ora.jpg"),
        descripcion: (
            <p>
                El Analizador de Respuesta Ocular (ORA) significa para la clínica diaria un gran avance en el tratamiento y seguimiento del glaucoma, al tomar medidas de presión intraocular relacionando parámetros hasta ahora no considerados. También nos permite evaluar con mayor precisión la patología corneal (como el queratocono) y especialmente es útil en pacientes candidatos a cirugía refractiva para evitar complicaciones postoperatorias como la ectasia corneal. <br />
                Disponer del ORA nos permite medir determinados parámetros como la histéresis corneal (CH), la presión intraocular compensada (OIPC) y el factor de resistencia corneal (CRF), que nos ayudan a conocer las propiedades biomecánicas de la córnea de forma medible y repetible.
            </p>
        )
    },
    {
        id: 10,
        title: "Pentacam",
        imagen: imageUrl("pentacam.jpg"),
        descripcion: (
            <p>
                Está basado en una cámara de Scheimpflug rotatoria 360º alrededor del ojo, sin contacto, creando una imagen en 3D de la cámara anterior. <br />
                Con el Pentacam se realiza: Topografía de córnea anterior y posterior con mapas de elevación, Paquimetría corneal, análisis de cámara 3D, densidad del cristalino o lente intraocular, aberrometría corneal, tomografía, análisis de  ectasia corneal y cálculo de Lente intraocular para pacientes que se han realizado cirugías refractivas. <br />
                Este estudio se requiere para:<br />
                - Diagnóstico y seguimiento de los defectos refractivos (miopía, hipermetropía, astigmatismo).<br />
                - Control preoperatorio y post operatorio de Cirugía refractiva, Catarata  o de implante de anillos intraestromales. <br />
                - Cálculo de lente intraocular. <br />
                Diagnóstico y seguimiento del queratocono y demás ectasias corneales.
            </p>
        )
    },
    {
        id: 11,
        title: "Refractometría Pediátrica",
        imagen: imageUrl("refracpedi.jpg"),
        descripcion: (
            <p>
                La refractometría pediátrica se realiza en  infantes, niños y pacientes que no colaboran se miden ambos ojos simultáneamente a un metro de distancia en un segundo.  El propósito de una medición con el autorrefractor pediátrico es brindar una refracción inicial como examen de entrada en el consultorio médico. <br />
                En combinación con otras evaluaciones iniciales, un profesional en salud visual puede determinar cómo orientar su consulta. Si es necesaria una retinoscopía ciclopléjica, la refracción inicial suministra un punto de partida valioso para mediciones de miopía, astigmatismo y ejes, ahorrando de este modo un precioso tiempo de tratamiento.
            </p>
        )
    },
    {
        id: 12,
        title: "Retinografia",
        imagen: imageUrl("retinografia.jpg"),
        descripcion: (
            <p>
                Las fotografías oculares son una de las formas ideales para hacer seguimiento de patologías de la retina y a pacientes con glaucoma o sospecha de esta enfermedad.  Su principal utilidad esta en registrar gráficamente los cambios que se puedan presentar en la retina, mácula, en el nervio óptico y en cualquier otra estructura del sistema visual.  En muchas ocasiones estos cambios son muy pequeños y aún si fueran grandes es muy difícil que el oftalmólogo recuerde cual es el estado exacto de cada uno de sus pacientes.  No es un examen diagnostico que arroje resultados, su utilidad esta en el seguimiento. <br />
                Las fotografías oculares son fundamentales para seguimientos en los siguientes casos: <br />
                - Pacientes en quienes se sospecha glaucoma. <br />
                - Pacientes con diagnostico de glaucoma. <br />
                - Pacientes con antedecedentes familiares de glaucoma o con cualquier hallazgo en el nervio óptico. <br />
                - Pacientes con degeneración macular relacionada con la edad. <br />
                - Pacientes con diabetes o retinopatía diabética en cualquier estadio. <br />
                - Pacientes que consumen cloroquina. <br />
                - Pacientes con retinopatía hipertensiva. <br />
                Las fotografías oculares también son una de las formas ideales para hacer seguimiento de patologías del segmento anterior, permiten registrar y comparar a través del tiempo lesiones a nivel de los párpados, conjuntiva, cornea, iris o cristalino. <br />
                Las fotografías oculares deben utilizarse en pacientes con lunares o lesiones en cualquiera de las estructuras de la cámara anterior.
            </p>
        )
    },
    {
        id: 13,
        title: "Topografía corneal",
        imagen: imageUrl("tomey.jpg"),
        descripcion: (
            <p>
                La topografía corneal es una herramienta computarizada que crea un mapa tridimensional de la superficie curva de la córnea. <br />
                La córnea  es la parte transparente más externa del ojo que tiene forma de bóveda y cuyo tamaño es similar al diámetro del iris (zona coloreada del ojo). La gran ventaja de la topografía corneal sobre otros métodos es su facilidad para detectar irregularidades corneales invisibles por medio de la mayoría de los exámenes convencionales.
            </p>
        )
    },
    {
        id: 14,
        title: "Tonometría",
        imagen: imageUrl("tonometro.jpg"),
        descripcion: (
            <p>
                Permite medir la presión intraocular (PIO) sin que exista ningún contacto con el ojo del paciente. <br />
                Además, es un método muy rápido y fiable y se reducen al mínimo las molestias para el paciente.
            </p>
        )
    },
    {
        id: 15,
        title: "UBM",
        imagen: imageUrl("ubm.jpg"),
        descripcion: (
            <p>
                La UBM (ultrabiomicroscopía) es una ecografía de alta resolución de la parte anterior del ojo, permite hacer una evaluación de las estructuras del segmento anterior del ojo a través de imágenes de alta resolución obtenidas por ultrasonido. <br /> <strong>¿EN QUE CASOS SE REQUIERE?</strong> <br />
                Las imágenes obtenidas serán imprescindibles en el diagnóstico de: <br />
                - Patologías subiridianas como quistes <br />
                - Determinación de la profundidad de la cámara anterior <br />
                - Análisis de ángulos iridocorneales. <br />
                - Seguimiento de cirugía antiglaucomatosa. <br />
                - Observación del correcto posicionamiento de lentes fáquicos. <br />
                - Determinación de profundidad de lesiones corneales. <br />
                - Observación de lesiones postraumáticas de segmento anterior, determinación de grosores corneales y todas aquellas situaciones de segmento anterior que no sean visibles a través del microscopio por falta de transparencia de medios.
            </p>
        )
    }
]

export default ESTUDIOS_ARRAY;