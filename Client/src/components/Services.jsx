import { Link } from 'react-router-dom';

function Services() {
  const services = [
    {
      id: 'childbirth-foundation',
      title: 'Childbirth Class Foundation',
      description:
        'A virtual or self-paced class covering the essentials of pregnancy, labor, and postpartum care to prepare you for childbirth.',
    },
    {
      id: 'comprehensive-childbirth',
      title: 'In-Person Comprehensive Childbirth Class',
      description:
        'A 10-week in-person course covering pregnancy, birth, postpartum, newborn care, and breastfeeding for a complete preparation experience.',
    },
    {
      id: 'breastfeeding',
      title: 'Breastfeeding Class',
      description:
        'Learn proper latch techniques, milk supply management, pumping, and more from a certified lactation consultant.',
    },
    {
      id: 'newborn',
      title: 'Newborn Class',
      description:
        'Master newborn care, including bathing, diapering, soothing, sleep patterns, and safety for confident parenting.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service) => (
          <div key={service.id} className="border rounded-lg p-4 shadow-md">
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <Link
              to={`/booking/${service.id}`}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Book
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;