const ESTUDIOS_ARRAY = [
    {
        id: 1,
        titulo: "Aberrometría",
        slug: "aberrometria",
        descripcion: (
            <p>
                Esta técnica diagnóstica realiza una completísima valoración del defecto refractivo de un paciente, incluyendo esas alteraciones llamadas aberraciones de alto orden, que anteriormente se conocían como astigmatismo irregular y no se especificaban. <br />
                Nos permite representar en un mapa de colores, las deformaciones que alteran la imagen retiniana y, considerando la interrelación entre la apertura pupilar y esas aberraciones, hacernos una idea precisa de la capacidad de un individuo de desenvolverse en distintas condiciones de luminosidad. <br />
                Tiene su mejor aplicación en el tratamiento de ojos con córneas deformes o dañados por cirugía previa. <br />
                También nos ayuda a identificar las causas objetivas de quejas como visión de halos, deslumbramiento, etc. <br />
                Es clave en la cirugía refractiva y en la personalización de tratamientos oculares.
            </p>
        )
    },
    {
        id: 2,
        titulo: "Autorefractometría",
        slug: "autorefractometria",
        descripcion: (
            <p>
                La autorefractometría es un examen oftalmológico computarizado, rápido e indoloro, que mide de forma objetiva el error refractivo del ojo. Permite calcular con gran precisión las dioptrías necesarias para corregir defectos visuales como la miopía, la hipermetropía y el astigmatismo.
            </p>
        )
    },
    {
        id: 3,
        titulo: "Campo Visual Computarizado",
        slug: "campo-visual-computarizado",
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
        titulo: "Retinografía de Campo Amplio (Daytona)",
        slug: "retinografia-de-campo-amplio",
        descripcion: (
            <p>
                Este sistema de última generación permite capturar una imagen de alta resolución de hasta 200º de la retina en menos de medio segundo y sin necesidad de contacto. Su tecnología de campo ultra amplio es fundamental para evaluar la salud de la retina periférica de forma rápida y sencilla, mejorando la detección temprana de patologías que otros sistemas podrían pasar por alto y facilitando una toma de decisiones clínicas más precisa y eficiente.
            </p>
        )
    },
    {
        id: 5,
        titulo: "Keratograph",
        slug: "keratograph",
        descripcion: (
            <p>
                Topógrafo corneal que posee una cámara de alta densidad y un sistema de iluminación que permite estudiar la superficie ocular y la dinámica palpebral. Su principal uso es diagnosticar el ojo seco y vigilar su tratamiento.
            </p>
        )
    },
    {
        id: 6,
        titulo: "Microscopía especular",
        slug: "microscopia-especular",
        descripcion: (
            <p>
                La microscopía especular nos permite realizar el estudio del endotelio corneal. Puesto que la distribución celular es prácticamente uniforme, mediante la microscopía se puede conocer el número, la forma y el tamaño de la población endotelial. <br />
                La microscopía especular nos da una imagen refleja de la interfase óptica que hay entre el endotelio corneal y el humor acuoso, aunque también puede usarse para obtener imágenes del epitelio y del estroma corneal, así como del cristalino. <br />
                Para realizarla, no se precisa contacto. El centrado del ojo se realiza con luz de fijación y es recomendable que el paciente parpadee varias veces antes de la toma de la imagen para humedecer la superficie ocular y mejorar su brillo. Es obligatorio realizar la microscopía especular como una ayuda diagnóstica no invasiva para conocer el estado y la reserva fisiológica de la capa celular endotelial, debido a que una córnea transparente no es garantía de un endotelio corneal normal. Así pues, la realizamos de forma sistemática a nuestros pacientes antes de la cirugía de la catarata y de la cirugía del implante de lentes fáquicas.
            </p>
        )
    },
    {
        id: 7,
        titulo: "Tomografía de coherencia óptica (OCT)",
        slug: "oct",
        descripcion: (
            <p>
                La Tomografía de Coherencia Óptica (OCT) es una prueba de diagnóstico por imagen rápida, indolora y no invasiva. Utiliza luz infrarroja para obtener cortes transversales de alta resolución de la retina y el nervio óptico en vivo, permitiendo un diagnóstico temprano de patologías oculares. <br />
                La OCT es fundamental en el estudio, diagnóstico y seguimiento de las siguientes afecciones:
                <ul>
                    <li><span className="destacado__estudios">Glaucoma:</span> Mide con gran precisión el grosor de las fibras del nervio óptico y detecta daños antes de que se presenten síntomas o cambios en el campo visual.</li>
                    <li><span className="destacado__estudios">Retina y Mácula:</span> Permite visualizar en detalle la mácula para identificar DMAE (Degeneración Macular Asociada a la Edad), edemas maculares o agujeros maculares.</li>
                    <li><span className="destacado__estudios">Retinopatía diabética:</span> Esencial para detectar el engrosamiento retiniano y controlar la evolución del edema macular.</li>
                    <li><span className="destacado__estudios">Seguimiento quirúrgico:</span> Vital para monitorear la evolución tras operaciones de retina, cataratas o evaluar la respuesta a tratamientos (como inyecciones intravítreas).</li>
                </ul>
            </p>
        )
    },
    {
        id: 8,
        titulo: "Pentacam",
        slug: "pentacam",
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
        id: 9,
        titulo: "Refractometría Pediátrica",
        slug: "refractometria-pediatrica",
        descripcion: (
            <p>
                La refractometría pediátrica se realiza en  infantes, niños y pacientes que no colaboran se miden ambos ojos simultáneamente a un metro de distancia en un segundo.  El propósito de una medición con el autorrefractor pediátrico es brindar una refracción inicial como examen de entrada en el consultorio médico. <br />
                En combinación con otras evaluaciones iniciales, un profesional en salud visual puede determinar cómo orientar su consulta. Si es necesaria una retinoscopía ciclopléjica, la refracción inicial suministra un punto de partida valioso para mediciones de miopía, astigmatismo y ejes, ahorrando de este modo un precioso tiempo de tratamiento.
            </p>
        )
    },
    {
        id: 10,
        titulo: "Retinografía",
        slug: "retinografia",
        descripcion: (
            <p>
                La retinografía es una prueba oftalmológica rápida, indolora y no invasiva que consiste en tomar fotografías de alta resolución del fondo del ojo (la retina, la mácula y el nervio óptico). Es fundamental para diagnosticar y monitorear  el avance de enfermedades como el glaucoma, la degeneración macular, el desprendimiento de retina y los daños causados por la diabetes (retinopatía diabética) o hipertensión.
            </p>
        )
    },
    {
        id: 11,
        titulo: "Topografía corneal",
        slug: "topografia-corneal",
        descripcion: (
            <p>
                La topografía corneal detecta deformidades, curvaturas irregulares y el grosor de la córnea mediante un mapa tridimensional. Esencial en oftalmología, permite diagnosticar a tiempo enfermedades como el queratocono, astigmatismos complejos y planificar con exactitud cirugías refractivas como el LASIK. <br /><br />
                ¿Qué detecta y evalúa exactamente?<br />
                <ul>
                    <li><span className="destacado__estudios">Queratocono y otras ectasias:</span> Identifica el adelgazamiento y la deformación progresiva de la córnea.</li>
                    <li><span className="destacado__estudios">Astigmatismo irregular:</span> Detecta curvaturas asimétricas que no pueden corregirse fácilmente con gafas convencionales.</li>
                    <li><span className="destacado__estudios">Candidatura a cirugía refractiva:</span> Evalúa si el paciente es apto para operarse de miopía, hipermetropía o astigmatismo.</li>
                    <li><span className="destacado__estudios">Planificación de cataratas:</span> Obtiene los parámetros necesarios para calcular la lente intraocular que se implantará.</li>
                    <li><span className="destacado__estudios">Adaptación de lentes de contacto:</span> Permite diseñar lentes de contacto a medida, especialmente en casos de córneas irregulares</li>
                </ul>
            </p>
        )
    },
    {
        id: 12,
        titulo: "Tonometría",
        slug: "tonometria",
        descripcion: (
            <p>
                Permite medir la presión intraocular (PIO) sin que exista ningún contacto con el ojo del paciente. Es un método muy rápido y fiable y se reducen al mínimo las molestias para el paciente.
            </p>
        )
    },
    {
        id: 13,
        titulo: "UBM",
        slug: "ubm",
        descripcion: (
            <p>
                El UBM (Biomicroscopía Ultrasónica o Ultrabiomicroscopía) es un examen ecográfico oftalmológico de alta resolución. Permite obtener imágenes detalladas y precisas de las estructuras internas de la parte anterior del ojo (córnea, iris, cristalino, cuerpo ciliar y el ángulo iridocorneal). <br />
                Es un procedimiento ambulatorio e indoloro que dura aproximadamente 15 minutos.
                <br /> <br />
                <span className="destacado__estudios2">¿Para qué se utiliza?</span> <br /> <br />
                <ul>
                    <li><span className="destacado__estudios">Diagnóstico de Glaucoma:</span> Permite evaluar el ángulo iridocorneal para detectar ángulos estrechos o bloqueos.</li>
                    <li><span className="destacado__estudios">Estudio de tumores y quistes:</span> Ayuda a visualizar masas, quistes o tumores ocultos por detrás del iris (área retroiridiana).</li>
                    <li><span className="destacado__estudios">Seguimiento postoperatorio:</span> Es clave para verificar la posición de lentes intraoculares, lentes fáquicos y cirugías de cataratas o glaucoma.</li>
                    <li><span className="destacado__estudios">Evaluación de traumatismos:</span> Sirve para examinar lesiones cuando hay opacidades corneales o hemorragias que impiden la visión directa.</li>
                </ul>
            </p>
        )
    },
    {
        id: 14,
        titulo: "Prueba de agua",
        slug: "prueba-de-agua",
        descripcion: (
            <p>
                La prueba de agua (o prueba de sobrecarga hídrica) en oftalmología es un examen de estrés para evaluar el sistema de drenaje del humor acuoso. Consiste en medir la presión intraocular (PIO) tras ingerir rápidamente una gran cantidad de agua (600 a 800 ml), ayudando a detectar fluctuaciones y el riesgo de glaucoma.
            </p>
        )
    },
    {
        id: 15,
        titulo: "Paquimetría",
        slug: "paquimetria",
        descripcion: (
            <p>
                La paquimetría es una prueba oftalmológica rápida e indolora que mide el espesor de la córnea. Es clave para el diagnóstico temprano del glaucoma y el queratocono, y es un requisito obligatorio antes de someterse a cirugías refractivas (como LASIK o PRK) para evaluar la viabilidad de la intervención.
            </p>
        )
    },
    {
        id: 16,
        titulo: "Interferometría láser",
        slug: "interferometria-laser",
        descripcion: (
            <p>
                La interferometría láser es una técnica diagnóstica no invasiva que utiliza ondas de luz para medir estructuras internas del ojo con precisión microscópica. Se usa principalmente en biometría ocular (cálculo de lentes intraoculares), en la evaluación de la agudeza visual potencial previo a cirugías y en el análisis del ojo seco.
            </p>
        )
    },
]

export default ESTUDIOS_ARRAY;
