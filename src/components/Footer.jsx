function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light py-3 mt-auto">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <span>© {currentYear} Powered By Gabriele Belluco</span>

        <span className="text-secondary">Don't let them tell you about it</span>
      </div>
    </footer>
  );
}

export default Footer;
