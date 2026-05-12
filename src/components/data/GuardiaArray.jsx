const GUARDIA = [
  {
    id: 1,
    title: "¿CUÁLES SON LAS PRINCIPALES URGENCIAS OFTALMOLÓGICAS?",
    descripcion: (
      <ol>
        <li>Traumatismo.</li>
        <li>Lesión con químicos.</li>
        <li>Conjuntivitis.</li>
        <li>Cuerpo extraño en el ojo.</li>
        <li>Glaucoma Agudo.</li>
        <li>Iritis.</li>
        <li>Celulitis orbital.</li>
      </ol>
    ),
    sections: [],
  },
  {
    id: 2,
    title: "¿QUE MEDIDAS DEBO TOMAR ANTE UNA URGENCIA OFTALMOLÓGICA?",
    descripcion: (
      <p>
        Actúe pronto y siga los pasos que aparecen a continuación si usted o
        alguien más tiene una lesión relacionada con el ojo.
      </p>
    ),
    sections: [
      {
        titulo: "CUERPO EXTRAÑO EN EL OJO O EL PÁRPADO",
        texto: (
          <p>
            El ojo a menudo se limpia a sí mismo de pequeños objetos, como
            pestañas o arena, a través del pestañeo o el lagrimeo. De no ser
            así, tome estas medidas: <br />
            <ol>
              <li>Dígale a la persona que no se frote el ojo y lávese las manos antes de examinarla.</li>
              <li>Examine el ojo afectado en un área con buena iluminación. Para encontrar el cuerpo extraño, haga que la persona mire hacia arriba y</li>
              <li>hacia abajo, y luego de un lado a otro.</li>
              <li>Si no puede encontrar el objeto, agarre el párpado inferior y hale hacia abajo con suavidad para mirar debajo de dicho párpado. Para mirar debajo del párpado superior,se puede colocar un aplicador de algodón en la parte exterior de dicho párpado y estirar suavemente el párpado por encima del aplicador.</li>
              <li>Si el objeto está en el párpado, trate de lavarlo suavemente con agua. Si esto no funciona, ensaye tocando el objeto con un segundo aplicador dealgodón para retirarlo.</li>
              <li>Si el objeto está incrustado en el ojo, trate de enjuagar el ojo con agua. En este caso, puede servir el uso de un gotero ubicado por encima de la esquina exterior del ojo. <strong>NO</strong> toque el ojo propiamente dicho con el aplicador de algodón.</li>
            </ol>
            Es posible que se continúe experimentando una sensación de rasguño y otras molestias menores después de retirar las pestañas y otros objetos pequeños, pero esto desaparece en un día o dos. Si la persona continúa sintiendo molestia o visión borrosa, busque asistencia médica.
          </p>
        ),
      },
      {
        titulo: "CUERPO EXTRAÑO CLAVADO O INCRUSTADO EN EL OJO",
        texto: (
          <ol>
            <li>Deje el objeto en el mismo sitio, sin tratar de retirarlo ni tocarlo, ni aplicar presión alguna.</li>
            <li>Calme y déle seguridad a la persona.</li>
            <li>Lávese las manos.</li>
            <li>Vende ambos ojos. Si el objeto es grande, coloque una taza o un
            cono de papel sobreel ojo lesionado y péguelo con cinta. Cubra el
            ojo ileso con gasa o un trozo de telalimpio. Si el objeto es pequeño,
            cubra ambos ojos con un trozo de tela limpio o unagasa estéril.</li>
            </ol>
        ),
      },
    ],
  },
];

export default GUARDIA;