export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <p>© {year} Jasik — All rights reserved.</p>
      <p>
        <a href="https://github.com/jxkz3" target="_blank" rel="noreferrer">
          GitHub
        </a>
        •
        <a href="https://linkedin.com/in/jxkz" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </p>
    </footer>
  );
}
