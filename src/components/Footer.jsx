import "../css/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="waves" aria-hidden="true">
        <svg className="wave wave1" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            d="M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,80C672,85,768,75,864,64C960,53,1056,43,1152,42.7C1248,43,1344,53,1392,58.7L1440,64V120H0Z"
            fill="#003c77"
          />
        </svg>

        <svg className="wave wave2" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            d="M0,80L60,74C120,68,240,56,360,58C480,60,600,76,720,82C840,88,960,84,1080,74C1200,64,1320,48,1380,40L1440,32V120H0Z"
            fill="#003c77"
          />
        </svg>
      </div>

      <ul className="social-icons">
        <li><a href="#facebook"><i className="bi bi-facebook"></i></a></li>
        <li><a href="#instagram"><i className="bi bi-instagram"></i></a></li>
        <li><a href="#linkedin"><i className="bi bi-linkedin"></i></a></li>
      </ul>

      <ul className="menu">
        <li>
          <a href="">Inicio</a>
          <a href="">Nosotros</a>
          <a href="">Paciente</a>
          <a href="">Residencia</a>
          <a href="">Prensa</a>
          <a href="">Consultas Virtuales</a>
          <a href="">Turnos Online</a>
        </li>
      </ul>
    </footer>
  );
}
