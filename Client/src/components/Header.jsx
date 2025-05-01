import Hatchandlatchv3 from '../assets/Hatchandlatchv3.png'; // Placeholder until logo provided
import mother_and_baby_monochrome from '../assets/mother_and_baby_monochrome.jpg'
function Header() {
  return (
    <header
      className="relative bg-cover bg-center h-64 flex items-center justify-center"
      style={{ backgroundImage: `url(${mother_and_baby_monochrome})` }}
    >
      {/* Optional overlay for better logo visibility */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
      
      {/* Logo */}
      <img
        src={Hatchandlatchv3}
        alt="Hatch & Latch Logo"
        className="relative z-10 h-40 w-auto"
      />
    </header>
  );
}
export default Header;