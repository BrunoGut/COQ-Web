import { useState } from "react";
import { useForm } from "react-hook-form";
import "../css/formularioEmail.css";

function FormularioEmail({ flechaImg }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, touchedFields, isSubmitted },
  } = useForm({ mode: "onTouched" });

  const [toast, setToast] = useState(null);
  const [isSending, setIsSending] = useState(false);

  const fieldState = (name) => {
    const touched = touchedFields[name] || isSubmitted;
    if (!touched) return "";
    return errors[name]
      ? "formulario__field--error"
      : "formulario__field--valid";
  };

  const showToast = (type, message) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 4000);
  };

  const onSubmit = async (data) => {
    setIsSending(true);

    try {
      const apiUrl = import.meta.env.VITE_CONTACT_API_URL;

      const response = await fetch(`${apiUrl}/api/contact/mail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          nombre: data.nombre,
          email: data.email,
          mensaje: data.mensaje,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Error al enviar el mensaje, por favor intente nuevamente",
        );
      }

      showToast("success", "Mensaje enviado correctamente");
      reset();
    } catch (error) {
      showToast(
        "error",
        "Error al enviar el mensaje, por favor intente nuevamente",
      );
      console.error("Error al enviar el mensaje:", error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="formulario">
      {toast && (
        <div className={`formulario__toast formulario__toast--${toast.type}`}>
          <i
            className={`bi ${
              toast.type === "success"
                ? "bi-check-circle-fill"
                : "bi-exclamation-triangle-fill"
            }`}
            aria-hidden="true"
          />
          <span>{toast.message}</span>
          <button
            className="formulario__toastClose"
            onClick={() => setToast(null)}
            aria-label="Cerrar"
          >
            <i className="bi bi-x-lg" aria-hidden="true" />
          </button>
        </div>
      )}

      <div className="contacto__grid">
        <div className="contacto__item">
          <i className="bi bi-telephone contacto__icon" aria-hidden="true" />
          <h3 className="contacto__label">Central de turnos</h3>
          <a href="tel:+541122062650" className="contacto__link">
            2206 2650
          </a>
        </div>

        <div className="contacto__item">
          <i className="bi bi-whatsapp contacto__icon" aria-hidden="true" />
          <h3 className="contacto__label">WhatsApp</h3>
          <a
            href="https://wa.me/541138721437"
            target="_blank"
            rel="noopener noreferrer"
            className="contacto__link"
          >
            +54 11 3872-1437
          </a>
        </div>

        <div className="contacto__item">
          <i className="bi bi-envelope contacto__icon" aria-hidden="true" />
          <h3 className="contacto__label">Correo electrónico</h3>
          <a
            href="mailto:info@centrodeojosquilmes.com.ar"
            className="contacto__link"
          >
            info@centrodeojosquilmes.com.ar
          </a>
        </div>
      </div>

      <div className="info__grid__contacto">
        <div className="info__div">
          <h2 className="info__text__contacto__h2">
            Si tenés alguna duda completá el formulario
          </h2>
          <p>
            Nuestro equipo te responderá a la brevedad para brindarte la
            atención que necesitás.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={`formulario__field ${fieldState("nombre")}`}>
          <input
            {...register("nombre", {
              required: "El nombre es obligatorio",
              minLength: {
                value: 3,
                message: "Debe tener al menos 3 caracteres",
              },
            })}
            placeholder="Nombre y apellido"
          />
          <span className="formulario__fieldIcon" aria-hidden="true">
            <i className={`bi ${errors.nombre ? "bi-x-lg" : "bi-check-lg"}`} />
          </span>
          {errors.nombre && (
            <span className="formulario__fieldMsg">
              {errors.nombre.message}
            </span>
          )}
        </div>

        <div className={`formulario__field ${fieldState("email")}`}>
          <input
            {...register("email", {
              required: "El email es obligatorio",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Formato de email inválido",
              },
            })}
            placeholder="Correo electrónico"
          />
          <span className="formulario__fieldIcon" aria-hidden="true">
            <i className={`bi ${errors.email ? "bi-x-lg" : "bi-check-lg"}`} />
          </span>
          {errors.email && (
            <span className="formulario__fieldMsg">{errors.email.message}</span>
          )}
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
          {errors.mensaje && (
            <span className="formulario__fieldMsg">
              {errors.mensaje.message}
            </span>
          )}
        </div>

        <button type="submit" disabled={isSending}>
          <span>{isSending ? "Enviando..." : "Enviar"}</span>
          {flechaImg ? (
            <img
              className="formulario__submitIcon"
              src={flechaImg}
              alt=""
              aria-hidden="true"
            />
          ) : (
            <i className="bi bi-arrow-up-right" aria-hidden="true" />
          )}
        </button>
      </form>
    </section>
  );
}

export default FormularioEmail;