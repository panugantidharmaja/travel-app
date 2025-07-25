import { Link } from 'react-router-dom';

type Destination = {
  id: number;
  name: string;
  country: string;
  region: string;
  budget: number;
  travelType: string;
  bestTime: string;
  activities: string[];
  weather: string;
  travelTips: string[];
  recommendedActivities: string[];
  imageUrl: string;
  coordinates: { lat: number; lng: number };
};

type DestionationTileProps = {
  filtered: Destination[];
  destinations: Destination[];
  setSelectedDestination: (destination: Destination) => void;
};

// const destinations = [
//   { id: 'bali', name: 'Bali', price: '$799', country: 'Indonesia' },
//   { id: 'paris', name: 'Paris', price: '$1000', country: 'Europe' },
//   { id: 'tokyo', name: 'Tokyo', price: '$300', country: 'Japan' },
//   { id: 'Seoul', name: 'Seoul Korea', price: '$400', country: 'South Korea' },
//   { id: 'Delhi', name: 'Delhi', price: '$400', country: 'India' },
// ];

function DestinationTiles({ filtered, destinations, setSelectedDestination }: DestionationTileProps) {
  // const navigate = useNavigate();
  // const handleClick = (id: string) => {
  //   navigate(`/destination/${id}`);
  //   s
  // };
  return (
    <>
      <div className='m-6 p-6'>
        <div className='mb-8'>
          <h2 className='font-bold text-3xl text-left my-6'>
            Featured Destinations
          </h2>
          {filtered.length > 0 ? (
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-5'>
              {filtered.map((dest) => (
                <div 
                  key={dest.id}
                  className='border-gray-200 border-1 rounded shawdow-sm overflow-hidden'
                >
                  <img className='w-full h-40 object-cover' loading='lazy' alt='image' src={dest.imageUrl}></img>
                  <div className='text-left p-3'>
                    <p className='text-xl text-bold '>{dest.name}</p>
                    <p className='text-gray-800'>{dest.country}</p>
                    <p className='font-bold text-[#7d53ee]'>${dest.budget}/day</p>
                    
                    <Link
                    to={`/destinationdetail/:${dest.name}`}
                    onClick={() => setSelectedDestination(dest)}
                    state={{destination: dest}}>
                    <button
                      className='font-bold border:none border:rounded !bg-[#7d53ee] mt-2 p-0 m-0 text-white hover:!bg-[#9371f1]'>
                      View Details
                    </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className='text-center text-gray-500 text-lg py-8'>
              No destinations match your filters. Try adjusting them.
            </div>
          )}
        </div>
        <div>
          <h2 className='font-bold text-3xl text-left my-6'>
            All Destinations
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-5'>
            {destinations.map((dest) => (
              <div className='bg-gray-200 rounded shawdow-sm overflow-hidden'>
                <img className='w-full h-40' alt='image' loading='lazy' src={dest.imageUrl}></img>
                <div className='text-left p-4 bg-gray-200'>
                  <p className='text-xl text-bold '>{dest.name}</p>
                  <p className='text-gray-800'>{dest.country}</p>
                  <p className='font-bold text-blue-600'>${dest.budget}/day</p>
                  <button
                    className='font-bold border: none border: rounded !bg-blue-600 mt-2 p-0 m-0 text-white hover:!bg-blue-500'
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default DestinationTiles;
