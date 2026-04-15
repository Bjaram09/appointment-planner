import { Outlet, NavLink, useLocation } from "react-router-dom";

export const ROUTES = {
  CONTACTS: "/contacts",
  APPOINTMENTS: "/appointments",
};

function Root() {
  const location = useLocation();

  return (
    <div className="app-shell">
      <nav className="app-nav">
        <NavLink
          to={ROUTES.CONTACTS}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Contacts
        </NavLink>
        <NavLink
          to={ROUTES.APPOINTMENTS}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Appointments
        </NavLink>
      </nav>
      <main className="app-main">
        <div key={location.pathname} className="page-panel">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default Root;
