import logo from '../assets/logo.png'; // Placeholder until logo provided

function Header() {
  return (
    <header className="py-4 text-center">
      <img src={logo} alt="Business Logo" className="h-16 mx-auto" />
    </header>
  );
}
export default Header;