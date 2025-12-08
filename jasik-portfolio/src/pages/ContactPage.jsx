export default function ContactPage() {
  return (
    <div className="contact-ct">
      <h1>Contact Me</h1>

      <p>
        <strong>Name:</strong> JASIK MJ
      </p>
      <p>
        <strong>Location:</strong> Thrissur, Kerala, India
      </p>
      <p>
        <strong>Phone:</strong> +91 79941 67150
      </p>
      <p>
        <strong>Email:</strong>{" "}
        <a
          href="mailto:jasikmj02@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          jasikmj02@gmail.com
        </a>
      </p>
      <p>
        <strong>Portfolio:</strong>{" "}
        <a
          href="https://jasik-portfolio.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://jasik-portfolio.netlify.app/
        </a>
      </p>
      <p>
        <strong>GitHub:</strong>{" "}
        <a
          href="https://github.com/jxkz3"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/jxkz3
        </a>
      </p>
      <p>
        <strong>LinkedIn:</strong>{" "}
        <a
          href="https://www.linkedin.com/in/jxkz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.linkedin.com/in/jxkz/
        </a>
      </p>

      <a
        className="libutton"
        href="https://www.linkedin.com/in/jxkz/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Check my LinkedIn
      </a>
    </div>
  );
}
