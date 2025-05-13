import { Link } from 'react-router-dom';
import mono_baby from "../assets/mother_and_baby_monochrome.jpg"
function HomePage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div>
          <img src={mono_baby} alt="Service" className="w-full rounded" />
          <p className="mt-2">
            Expert childbirth and lactation consulting to support your journey.
          </p>
        </div>
        <div>
          <img src={mono_baby} alt="Support" className="w-full rounded" />
          <p className="mt-2">Personalized care for you and your baby.</p>
        </div>
      </div>
      <div className="text-center">
        <Link
          to="/services"
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
}
export default HomePage;