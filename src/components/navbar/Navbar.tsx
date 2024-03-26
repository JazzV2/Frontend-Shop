import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {

  const links = [
    {href: "/", label: "Home"},
    {href: "/store", label: "Store"},
    {href: "/basket", label: "Basket"},
    {href: "/account", label: "Account"},
    {href: "/info", label: "Info"}
  ];

  return (
    <nav>
        <ul>
          {
            links.map((item) => (
              <li key={item.label}>
                <Link to={item.href} title={item.label}>{item.label}</Link>
              </li>
            ))
          }
        </ul>
      </nav>
  )
}

export default Navbar