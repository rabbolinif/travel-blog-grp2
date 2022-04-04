import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="d-flex flex-column justify-content-between">
        <nav
          className="navbar navbar-expand-md navbar-dark bg-dark d-flex justify-content-between"
          aria-label="Fourth navbar example"
        >
          <div className="container container-fluid d-flex flex-row justify-content-between">
            <a className="navbar-brand" href="#">
              Awesome Blog Title!
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarsExample04"
              aria-controls="navbarsExample04"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="" id="navbarsExample04">
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* <ul>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/new-post'>Create posts</NavLink>
                </li>
                <li>
                    <NavLink to='/about'>About</NavLink>
                </li>
            </ul> */}
        <Outlet />
        <footer className="footer mt-auto py-3 bg-light ">
          <div className="container">
            <span className="text-muted">Contact us for an offer.</span>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout;
