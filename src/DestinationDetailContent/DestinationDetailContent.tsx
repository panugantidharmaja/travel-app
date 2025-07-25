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
  recommendedActivities: [{
    name: string,
    description: string,
    imageUrl: string
  }];
  imageUrl: string;
  coordinates: { lat: number; lng: number };
  weatherdescription: string;
};

type DestionationDetailContextProps = {
    destination: Destination;
}

function DestinationDetailContent({destination}: DestionationDetailContextProps) {
    if (destination) {
    return (
        <>
            <div className='flex items-stretch m-6 p-6 gap-4'>
                {/* Left Main Content */}
                <div className='flex-3'>
                    <div className='grid grid-cols-3 gap-3 mb-6'>
                        <div className='!border-gray-300 border-2 p-4 rounded text-left'>
                            <img alt='$' src='/images/dollar-sign.png'></img>
                            <p>Budget</p>
                            <p>{destination.budget} per week</p>
                        </div>
                        <div className='!border-gray-300 border-2 p-4 rounded text-left'>
                            <img alt='$' src='/images/cloud-sun.png'></img>
                            <p>Best Time</p>
                            <p>{destination.bestTime} (${destination.weather})</p>
                        </div>
                        <div className='!border-gray-300 border-2 p-4 rounded text-left'>
                            <img alt='$' src='/images/map-pin.png'></img>
                            <p>Highlights</p>
                            {destination.activities.map(activity => (
                                <p>{activity}</p>
                            ))}
                        </div>

                    </div>
                    <div className='mt-6 !border-gray-300 border-2 text-left p-2'>
                        <img alt='$' src='/images/lightbulb.png'></img>
                        <p className='text-lg font-bold'>Travel Tips</p>
                       
                            <ul className='list-disc list-inside marker:text-pink-500 !text-black-800 p-4'>
                                 {destination.travelTips.map(tip => (
                            <li>{tip}</li>
                        ))}
                        </ul>
                    </div>
                    <div className='text-left p-2 mt-6 !border-gray-300 border-2'>
                        <img alt='$' src='/images/tree-palm.png'></img>
                        <p className='font-bold text-lg'>Recommended Activities</p>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-5'>
                            {destination?.recommendedActivities?.map(activity => (
                                <div className='text-left p-2'>
                                <img alt='Monkey' src={activity.imageUrl} className='h-30 w-full !bg-gray-300'></img>
                                <p className='font-bold'>{activity.name}</p>
                                <p>{activity.description}</p>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>


                {/* Right Sidebar Content */}
                <div className='flex-1 rounded border-2 border-gray-300'
                >
                    <div className='p-6 text-left'>
                        <img alt='$' src='/images/cloud-sun.png'></img>
                        <p className='font-bold text-lg'>Weather & Climate</p>
                        <p className='text-sm text-gray-600'>Bali experiences a tropical climate with two distinct seasons. The dry season (April to October) offers sunny days, while the wet season (November to March) brings more rainfall.</p>
                    </div>
                    <div className='flex flex-col gap-4 p-6'>
                        <p className='font-bold text-lg'>Traveler Reviews</p>
                        <div className='flex flex-col justify-center items-center m-2'>
                            <img alt='$' src='/images/circle-user.png'></img>
                            <p className='text-gray-600 text-sm italic'>""Bali captivated me with its spiritual aura and lush landscapes. The people are incredibly warm!""</p>
                            <p className='font-bold text-center'>Sarah M.</p>
                        </div>
                         <div className='flex flex-col justify-center items-center m-2'>
                            <img alt='$' src='/images/circle-user.png'></img>
                            <p className='text-gray-600 text-sm italic'>""Bali captivated me with its spiritual aura and lush landscapes. The people are incredibly warm!""</p>
                            <p className='font-bold text-center'>Sarah M.</p>
                        </div>
                         <div className='flex flex-col justify-center items-center m-2'>
                            <img alt='$' src='/images/circle-user.png'></img>
                            <p className='text-gray-600 text-sm italic'>""Bali captivated me with its spiritual aura and lush landscapes. The people are incredibly warm!""</p>
                            <p className='font-bold text-center'>Sarah M.</p>
                        </div>
                         <div className='   flex flex-col justify-center items-center'>
                            <img alt='$' src='/images/circle-user.png'></img>
                            <p className='text-gray-600 text-sm italic'>""Bali captivated me with its spiritual aura and lush landscapes. The people are incredibly warm!""</p>
                            <p className='font-bold text-center'>Sarah M.</p>
                        </div>

                    </div>
                    <div></div>
                </div>

            </div>
        </>
    )
}
}

export default DestinationDetailContent