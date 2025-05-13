import { NavLink } from 'react-router-dom';

function NavBar() {
  const links = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/about', label: 'About Me' },
    { to: '/certifications', label: 'Certifications' },
    { to: '/summary', label: 'Summary' },
  ];

  return (
    <nav className="bg-gray-800 text-white py-4">
      <ul className="flex justify-center space-x-6">
        {links.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                isActive ? 'font-bold underline' : 'hover:underline'
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default NavBar;