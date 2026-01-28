import "../css/modal.css";

export default function Modal({ isOpen, closeModal }) {
  if (!isOpen) return null;

  return (
    <section className="modal" onClick={closeModal}>
      <div className="container__modal" onClick={e => e.stopPropagation()}>
            <button className="modal__close" onClick={closeModal} aria-label="Cerrar">
                <i className="bi bi-x" onClick={closeModal}></i>
            </button>
            <h2 className="modal__title">Titulo modal</h2>
            <div className="modal__paragraph">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto rem temporibus quae eos dolorem tempore dolor voluptate dolores ratione. Esse laudantium possimus quasi magnam veritatis rerum error ipsum, pariatur ex!
                </p>
            </div>
        </div>
    </section>
  );
}
