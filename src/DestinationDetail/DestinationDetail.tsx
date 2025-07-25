import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/16/solid';
import Herobanner from '../Herobanner/Herobanner';
import DestinationDetailContent from '../DestinationDetailContent/DestinationDetailContent';

function DestinationDetail() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const destination = state?.destination;
  const handleBacktoHome = () => {
    navigate('/home');
  };
  if (!destination) {
    return <div>Destination not found</div>
  }
  return (
    <>
     <Herobanner
        title={destination.name}
        subtitle='Discover incredible destinations and affordable travel deals that fit your budget and dreams.'
        fullScreen={false}
      />
      <div className='w-screen m-6 p-6 text-left'>
        <button
          onClick={() => {
            handleBacktoHome();
          }}
          className='flex items-center focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 px-4 py-2 !border-[#7d53ee] shadow-3 rounded bg-white'
        >
          <ArrowLeftIcon className='w-6 mt-1 h-5 mr-2'/>
          Back to Destinations
        </button>
      </div>
      {/* <div className='w-full max-w-4xl h-screen mx-auto bg-blue-500 mt-6'>
          
      </div> */}
      <div className='w-screen'>
        <DestinationDetailContent destination = {destination}/>
      </div>
      
    </>
  );
}

export default DestinationDetail;
