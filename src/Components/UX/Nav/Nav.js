import { useSelector } from "react-redux"
import { NavLink, useLocation } from "react-router-dom";

import "./Nav.css";
const Nav = ()=>{
  const {_id, roles} = useSelector((state)=>state.security);
  const currentLocation = useLocation();
  if (_id) {
    return (
      <nav>
        <ul>
          <li>
            <NavLink
              to='/medicamentos'
              className={currentLocation.pathname === '/medicamentos' ? 'active' : ''}
            >
               <img className="imagen" src="https://i.ibb.co/FKv5VmV/medicine-jar.png" alt="" />
              Medicamentos
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/clientes'
              className={currentLocation.pathname === '/clientes' ? 'active' : ''}
            >
              <img className="imagen" src="https://i.ibb.co/8KZQyTP/rating.png" alt="" />
               Clientes
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/proveedores'
              className={currentLocation.pathname === '/proveedores' ? 'active' : ''}
            >
               <img className="imagen" src="https://i.ibb.co/GvcSfYf/provider.png" alt="" />
            Proveedores
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/ventas'
              className={currentLocation.pathname === '/ventas' ? 'active' : ''}
            >
               <img className="imagen" src="https://i.ibb.co/6WF3VdT/sales-2.png" alt="" />
           Ventas
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to='/'
            className={currentLocation.pathname === '/'?'active':''}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/login'
            className={currentLocation.pathname === '/login' ? 'active' : ''}
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/signin'
            className={currentLocation.pathname === '/signin' ? 'active' : ''}
          >
            Signin
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
