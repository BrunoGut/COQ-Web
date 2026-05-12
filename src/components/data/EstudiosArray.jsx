const ESTUDIOS_ARRAY = [
    {
        id: 1,
        titulo: "Aberrometría",
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
        titulo: "Autorefractometría",
        descripcion: (
            <p>
                Mide con precisión y en forma automática el vicio de refracción: miopía, hipermetropía, astigmatismo que poseen los ojos.
            </p>
        )
    },
    {
        id: 3,
        titulo: "Campo Visual Computarizado",
        descripcion: (
            <p>
                El campo visual se define como al espacio en el que un objeto puede ser visto mientras la mirada de la persona estudiada permanece fija hacia un punto situado de frente. <br />
                La campimetría o perimetría se utiliza principalmente para realizar el control evolutivo del glaucoma y de otras enfermedades de la retina, como la retinosis pigmentaria. También se emplea para el estudio de las lesiones de la vía óptica,  ya que  valorando las perdidas del campo visual (escotomas), puede localizarse el lugar de la lesión que las provoca. <br />
                La campimetría es una técnica que además puede aportar información muy valiosa no sólo sobre enfermedades que pueden afectar únicamente a los ojos como el glaucoma, sino también sobre otras enfermedades que pueden manifestarse como un defecto del campo visual. Entre ellas destacan enfermedades degenerativas, tumores cerebrales, problemas vasculares, hipertensión arterial, diabetes, etc..). <br />
                Realización de la campimetría dinámica:  el paciente permanece sentado situado frente al campímetro. Se examinarán los dos ojos de forma independiente para lo cual el paciente deberá cerrar uno de sus ojos mientras que el examinador le pedirá que le indique cuándo ve y cuándo deja de ver un haz luminoso que se irá desplazando a lo largo del campo visual del ojo estudiado. Posteriormente se repetirá la misma maniobra con el ojo contralateral.
            </p>
        )
    },
    {
        id: 4,
        titulo: "Retinografía Daytona (Optomap)",
        descripcion: (
            <p>
                Este sistema de última generación permite capturar una imagen de alta resolución de hasta 200º de la retina en menos de medio segundo y sin necesidad de contacto. Su tecnología de campo ultra amplio es fundamental para evaluar la salud de la retina periférica de forma rápida y sencilla, mejorando la detección temprana de patologías que otros sistemas podrían pasar por alto y facilitando una toma de decisiones clínicas más precisa y eficiente.
            </p>
        )
    },
    {
        id: 5,
        titulo: "Interferometría Laser",
        descripcion: (
            <p>
                Mide el potencial visual, sirve para detectar disminuciones de la agudeza visual por patologías oculares, también para definir expectativas de resultados quirúrgicos.
            </p>
        )
    },
    {
        id: 6,
        titulo: "Keratograph",
        descripcion: (
            <p>
                Topógrafo corneal que posee una cámara de alta densidad y un sistema de iluminación que permite estudiar la superficie ocular y la dinámica palpebral. Su principal uso es diagnosticar el ojo seco y vigilar su tratamiento.
            </p>
        )
    },
    {
        id: 7,
        titulo: "Microscopía especular",
        descripcion: (
            <p>
                La microscopía especular nos permite realizar el estudio del endotelio corneal. Puesto que la distribución celular es prácticamente uniforme, mediante la microscopía se puede conocer el número, la forma y el tamaño de la población endotelial. <br />
                La microscopía especular nos da una imagen refleja de la interfase óptica que hay entre el endotelio corneal y el humor acuoso, aunque también puede usarse para obtener imágenes del epitelio y del estroma corneal, así como del cristalino. <br />
                Para realizarla, no se precisa contacto. El centrado del ojo se realiza con luz de fijación y es recomendable que el paciente parpadee varias veces antes de la toma de la imagen para humedecer la superficie ocular y mejorar su brillo. Es obligatorio realizar la microscopía especular como una ayuda diagnóstica no invasiva para conocer el estado y la reserva fisiológica de la capa celular endotelial, debido a que una córnea transparente no es garantía de un endotelio corneal normal. Así pues, la realizamos de forma sistemática a nuestros pacientes antes de la cirugía de la catarata y de la cirugía del implante de lentes fáquicas.
            </p>
        )
    },
    {
        id: 8,
        titulo: "Tomografía de coherencia óptica (OCT)",
        descripcion: (
            <p>
                La OCT es una técnica de diagnóstico avanzada y totalmente indolora que permite obtener cortes histológicos de la retina en vivo, funcionando como una "ecografía de luz" de alta precisión. Es vital para el control y seguimiento de patologías de la mácula, del nervio óptico y del glaucoma, permitiendo analizar la relación de la retina con el vítreo y la coroides sin necesidad de tocar el ojo del paciente.
            </p>
        )
    },
    {
        id: 9,
        titulo: "Pentacam",
        descripcion: (
            <p>
                Este equipo utiliza una cámara rotatoria de 360º para crear una imagen tridimensional completa de la parte anterior del ojo de forma rápida y sin contacto. <br />
                <br />
                <span className="destacado__estudios">Con el Pentacam se realiza: </span> <br /> <br />
                <ul>
                    <li>Topografía de córnea anterior y posterior con mapas de elevación</li>
                    <li>Paquimetría corneal</li>
                    <li>Análisis de cámara 3D</li>
                    <li>Densidad del cristalino o lente intraocular</li>
                    <li>Aberrometría corneal</li>
                    <li>Tomografía</li>
                    <li>Análisis de ectasia corneal</li>
                    <li>Cálculo de Lente intraocular para pacientes que se han realizado cirugías refractivas</li>
                </ul>
                <span className="destacado__estudios">Este estudio se requiere para: </span> <br /> <br />
                <ul>
                    <li>Diagnóstico y seguimiento de los defectos refractivos (miopía, hipermetropía, astigmatismo)</li>
                    <li>Control preoperatorio y post operatorio de Cirugía refractiva, Catarata  o de implante de anillos intraestromales</li>
                    <li>Cálculo de lente intraocular</li>
                    <li>Diagnóstico y seguimiento del queratocono y demás ectasias corneales</li>
                </ul>
            </p>
        )
    },
    {
        id: 10,
        titulo: "Refractometría Pediátrica",
        descripcion: (
            <p>
                La refractometría pediátrica se realiza en  infantes, niños y pacientes que no colaboran se miden ambos ojos simultáneamente a un metro de distancia en un segundo.  El propósito de una medición con el autorrefractor pediátrico es brindar una refracción inicial como examen de entrada en el consultorio médico. <br />
                En combinación con otras evaluaciones iniciales, un profesional en salud visual puede determinar cómo orientar su consulta. Si es necesaria una retinoscopía ciclopléjica, la refracción inicial suministra un punto de partida valioso para mediciones de miopía, astigmatismo y ejes, ahorrando de este modo un precioso tiempo de tratamiento.
            </p>
        )
    },
    {
        id: 11,
        titulo: "Retinografía convencional",
        descripcion: (
            <p>
                Esta prueba consiste en un registro fotográfico detallado que permite al oftalmólogo monitorear la evolución de patologías en la retina, la mácula y el nervio óptico a lo largo del tiempo. Su mayor utilidad reside en el seguimiento de pacientes con glaucoma, diabetes o degeneración macular, funcionando como una memoria gráfica exacta que permite detectar cambios mínimos que podrían pasar desapercibidos en un examen visual de rutina.
            </p>
        )
    },
    {
        id: 12,
        titulo: "Topografía corneal",
        descripcion: (
            <p>
                Es una herramienta computarizada que genera un mapa tridimensional preciso de la superficie de la córnea para analizar su curvatura y regularidad. Su gran ventaja es la capacidad de detectar irregularidades invisibles en exámenes convencionales, siendo fundamental para el diagnóstico de ectasias, la adaptación de lentes de contacto especiales y la planificación de cirugías refractivas.
            </p>
        )
    },
    {
        id: 13,
        titulo: "Tonometría",
        descripcion: (
            <p>
                Permite medir la presión intraocular (PIO) sin que exista ningún contacto con el ojo del paciente. Es un método muy rápido y fiable y se reducen al mínimo las molestias para el paciente.
            </p>
        )
    },
    {
        id: 14,
        titulo: "UBM",
        descripcion: (
            <p>
                La UBM es una ecografía de alta resolución especializada en el segmento anterior del ojo, que utiliza ultrasonido para observar estructuras que no son visibles a través del microscopio tradicional. Es imprescindible para diagnosticar quistes detrás del iris, analizar ángulos en casos de glaucoma, verificar la posición de lentes implantados y evaluar lesiones postraumáticas, incluso cuando los medios oculares han perdido su transparencia.
                <br /> <br />
                <span className="destacado__estudios2">¿En qué casos se requiere?</span> <br /> <br />
                Las imágenes obtenidas serán imprescindibles en el diagnóstico de: <br /> <br />
                <ul>
                    <li>Patologías subiridianas como quistes</li>
                    <li>Determinación de la profundidad de la cámara anterior</li>
                    <li>Análisis de ángulos iridocorneales</li>
                    <li>Seguimiento de cirugía antiglaucomatosa</li>
                    <li>Observación del correcto posicionamiento de lentes fáquicos</li>
                    <li>Determinación de profundidad de lesiones corneales</li>
                    <li>Observación de lesiones postraumáticas de segmento anterior, determinación de grosores corneales y todas aquellas situaciones de segmento anterior que no sean visibles a través del microscopio por falta de transparencia de medios.</li>
                </ul>
            </p>
        )
    }
]

export default ESTUDIOS_ARRAY;
