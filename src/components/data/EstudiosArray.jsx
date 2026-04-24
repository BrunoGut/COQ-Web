const ESTUDIOS_ARRAY = [
    {
        id: 1,
        titulo: "Aberrometría",
        descripcion: (
            <p>
                Permite realizar una valoración exhaustiva del defecto refractivo del paciente, identificando alteraciones complejas denominadas aberraciones de alto orden que los exámenes convencionales no logran especificar. Mediante un mapa de colores detallado, el estudio representa las deformaciones que afectan la imagen en la retina, permitiendo al profesional comprender con precisión cómo ve el individuo en distintas condiciones de luminosidad. Su aplicación es fundamental para tratar ojos con córneas dañadas o deformadas por cirugías previas, así como para identificar las causas objetivas de síntomas como la visión de halos y el deslumbramiento, garantizando una solución personalizada para mejorar la calidad visual.
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
                Mide la amplitud de la visión y detecta la presencia de puntos ciegos mediante el análisis del espacio que el ojo es capaz de percibir mientras mantiene la mirada fija en un punto central. Su uso es vital para el seguimiento del glaucoma y de diversas patologías de la retina, pero también resulta clave para identificar lesiones en la vía óptica relacionadas con afecciones sistémicas como tumores, problemas vasculares, diabetes o hipertensión.
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
                Es un estudio no invasivo y sin contacto que permite analizar en detalle el endotelio corneal, evaluando el número, forma y tamaño de sus células para conocer la reserva fisiológica del ojo. Es un requisito indispensable antes de cirugías de cataratas o implantes de lentes fáquicas, ya que una córnea transparente no siempre garantiza un endotelio sano, y este análisis asegura que el ojo sea apto para el procedimiento.
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
                Este equipo utiliza una cámara rotatoria de 360º para crear una imagen tridimensional completa de la parte anterior del ojo de forma rápida y sin contacto. Se destaca especialmente en la detección y seguimiento del queratocono, el cálculo preciso de lentes intraoculares para cirugía de cataratas y el control pre y postoperatorio de cirugías refractivas, analizando desde la curvatura corneal hasta la densidad del cristalino.
            </p>
        )
    },
    {
        id: 10,
        titulo: "Refractometría Pediátrica",
        descripcion: (
            <p>
                Diseñada específicamente para bebés y niños que no colaboran con los exámenes tradicionales, esta tecnología permite medir ambos ojos simultáneamente a un metro de distancia en solo un segundo. Proporciona una refracción inicial valiosa que sirve como punto de partida para el profesional, ahorrando tiempo crítico en la consulta y facilitando el diagnóstico temprano de miopía, astigmatismo y otros defectos visuales infantiles.
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
            </p>
        )
    }
]

export default ESTUDIOS_ARRAY;
