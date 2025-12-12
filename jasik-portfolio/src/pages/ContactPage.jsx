export default function ContactPage() {
  return (
    <div className="contact-ct">
      <h1>Contact Me</h1>

      <div className="contact-item">
        <strong>Email:</strong>
        <a href="mailto:jasikmj02@gmail.com">jasikmj02@gmail.com</a>
      </div>

      <div className="contact-item">
        <strong>Portfolio:</strong>
        <a href="https://jasik-portfolio.netlify.app/" target="_blank">
          Portfolio
        </a>
      </div>

      <div className="contact-item">
        <strong>GitHub:</strong>
        <a href="https://github.com/jxkz3" target="_blank">
          GitHub
        </a>
      </div>

      <div className="contact-item">
        <strong>LinkedIn:</strong>
        <a href="https://www.linkedin.com/in/jxkz/" target="_blank">
          LinkedIn
        </a>
      </div>
      <div className="contact-item">
        <strong>Location:</strong>
        <span>Kerala, India</span>
      </div>
    </div>
  );
}
