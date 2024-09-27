function Header() {
  return (
    <nav>
      <div className="nav-wrapper light-blue darken-1">
        <a href="/" className="brand-logo">
          React Movies
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="https://github.com/AnastasiiaKuropatkina/Shop-Context" target='_blank' rel="noreferrer">Repo</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export { Header };
