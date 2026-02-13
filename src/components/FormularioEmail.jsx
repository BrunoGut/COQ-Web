import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import "../css/formularioEmail.css";
import BannerComponent from "./BannerComponent";
import contactoImg from "../images/contacto/contacto2.jpg";
import SectionHeading from "./SectionHeading";

function FormularioEmail() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, touchedFields, isSubmitted },
  } = useForm({ mode: "onTouched" });
  const [toast, setToast] = useState(null);

  const fieldState = (name) => {
    const touched = touchedFields[name] || isSubmitted;
    if (!touched) return "";
    return errors[name] ? "formulario__field--error" : "formulario__field--valid";
  };

  const showToast = (type, message) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 4000);
  };

  const onSubmit = async (data) => {
    var fecha = new Date().toLocaleString();

    try {
      await emailjs.send(
        "service_vbg87pl",
        "template_fropgfo",
        {
          title: "Mensaje desde el formulario de contacto",
          name: data.nombre,
          time: fecha,
          message: data.mensaje,
          user_email: data.email,
        },
        "jJCUdOuooyOlwJAEX",
      );

      showToast("success", "Mensaje enviado correctamente");
      reset();
    } catch (error) {
      showToast("error", "Error al enviar el mensaje, por favor intente nuevamente");
      console.error("Error al enviar el mensaje:", error);
    }
  };

  return (
    <section className="formulario">
        {toast && (
          <div className={`formulario__toast formulario__toast--${toast.type}`}>
            <i className={`bi ${toast.type === "success" ? "bi-check-circle-fill" : "bi-exclamation-triangle-fill"}`} aria-hidden="true" />
            <span>{toast.message}</span>
            <button className="formulario__toastClose" onClick={() => setToast(null)} aria-label="Cerrar">
              <i className="bi bi-x-lg" aria-hidden="true" />
            </button>
          </div>
        )}

        <BannerComponent
                className="formulario__banner"
                title="Recibí nuestra información de contacto"
                urlImg={contactoImg}
                ariaLabel="Formulario de contacto"
              />

        <div className="formulario__inner">
            <SectionHeading title="CONTACTO" />
        </div>

        <div className="contacto__grid">
                <div className="contacto__item">
                    <i className="bi bi-envelope contacto__icon" aria-hidden="true" />
                    <h3 className="contacto__label">Mail</h3>
                    <a href="mailto:info@centrodeojosquilmes.com.ar" className="contacto__link">
                        info@centrodeojosquilmes.com.ar
                    </a>
                </div>
                <div className="contacto__item">
                    <i className="bi bi-telephone contacto__icon" aria-hidden="true" />
                    <h3 className="contacto__label">Teléfono</h3>
                    <a href="tel:+541122062650" className="contacto__link">
                        11 2206-2650
                    </a>
                </div>
                <div className="contacto__item">
                    <i className="bi bi-whatsapp contacto__icon" aria-hidden="true" />
                    <h3 className="contacto__label">WhatsApp</h3>
                    <a href="https://wa.me/541138721437" target="_blank" rel="noopener noreferrer" className="contacto__link">
                        +54 11 3872-1437
                    </a>
                </div>
              </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={`formulario__field ${fieldState("nombre")}`}>
          <input
            {...register("nombre", {
              required: "El nombre es obligatorio",
              minLength: { value: 3, message: "Debe tener al menos 3 caracteres" },
            })}
            placeholder="Nombre"
          />
          <span className="formulario__fieldIcon" aria-hidden="true">
            <i className={`bi ${errors.nombre ? "bi-x-lg" : "bi-check-lg"}`} />
          </span>
          {errors.nombre && <span className="formulario__fieldMsg">{errors.nombre.message}</span>}
        </div>

        <div className={`formulario__field ${fieldState("email")}`}>
          <input
            {...register("email", {
              required: "El email es obligatorio",
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Formato de email inválido" },
            })}
            placeholder="Email"
          />
          <span className="formulario__fieldIcon" aria-hidden="true">
            <i className={`bi ${errors.email ? "bi-x-lg" : "bi-check-lg"}`} />
          </span>
          {errors.email && <span className="formulario__fieldMsg">{errors.email.message}</span>}
        </div>

        <div className={`formulario__field ${fieldState("mensaje")}`}>
          <textarea
            {...register("mensaje", {
              required: "El mensaje es obligatorio",
              minLength: { value: 1, message: "El mensaje es obligatorio" },
            })}
            placeholder="Mensaje"
          />
          <span className="formulario__fieldIcon" aria-hidden="true">
            <i className={`bi ${errors.mensaje ? "bi-x-lg" : "bi-check-lg"}`} />
          </span>
          {errors.mensaje && <span className="formulario__fieldMsg">{errors.mensaje.message}</span>}
        </div>

        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default FormularioEmail;
