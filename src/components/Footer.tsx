export const Footer = () => {
  return (
    <footer className="Sidebar-footer p-2 has-background-light has-text-centered">
      <a
        className="is-size-7 text-muted"
        href="https://www.github.com/adeyinkaezra123/unboX"
        target="_blank"
        rel="noreferrer"
        title="source code"
      >
        Check out the code on Github
      </a>
      <p className="is-size-7 is-italic">
        &copy; Copyright {new Date().getFullYear()} -{" "}
      </p>
      <p className="is-size-7 is-italic">
        Made by Ezra Adeyinka with lots of ❤️ and ☕
      </p>
    </footer>
  );
};
