import { ReactComponent as Logo1 } from "../logos/logo1.svg";
export default function Navbar() {
  return (
    <>
      <nav className="d-flex justify-content-between py-2 align-items-center border-bottom border-light border-opacity-25">
        <a
          className="navbar-brand text-light d-flex align-items-end gap-2 fs-5 border border-bottom-0 border-top-0 px-3 py-1 rounded-pill fw-bold"
          href="/"
        >
          <Logo1 /> CYP
        </a>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <a
              className="nav-link active text-light"
              aria-current="page"
              href="/"
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="/">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="/">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled pe-0 text-white-50" href="/">
              Source
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
