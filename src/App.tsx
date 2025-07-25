import './App.css';
import './index.css';
import NavBar from './NavBar/NavBar';
import Filters from './Filters/Filters';
import DestinationTiles from './DestinationTiles/DestinationTiles';
import InfoAndReview from './InfoAndReviews/InfoAndReviews';
import Herobanner from './Herobanner/Herobanner';
import { useEffect, useRef, useState } from 'react';

function App() {
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

  const exploreRef = useRef<HTMLDivElement>(null);
  const handleExploreRef = () => {
    exploreRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [filtered, setFiltered] = useState<Destination[]>([]);
  const [regionOptions, setRegionOptions] = useState<string[]>([]);
  const [travelTypeOptions, setTravelTypeOptions] = useState<string[]>([]);

  const [region, setRegion] = useState<string>('');
  const [travelType, setTravelType] = useState<string>('');
  const [budget, setBudget] = useState<{min: number; max: number} | null>(null);

  const [selectedDestination, setSelectedDestination] = useState<Destination>();
  useEffect(() => {
    fetch('./destinations.json').then((res) =>
      res.json().then((data) => {
        setDestinations(data);
       
      })
    );
  }, []);

  useEffect(() => {
    let temp = destinations;
    const uniqueRegions = Array.from(new Set(destinations.map(dest => dest.region)));
    const uniqueTravelTypes = Array.from(new Set(destinations.map(dest => dest.travelType)));
    setRegionOptions(uniqueRegions);
    setTravelTypeOptions(uniqueTravelTypes)
    if (region) {
      console.log(region);
      temp = destinations.filter(dest => dest.region === region);
    }
    if (travelType) {
      console.log(travelType);
      temp = destinations.filter(dest => dest.travelType === travelType);
    }
    if (budget) {
      console.log(budget);
      temp = destinations.filter(dest => dest.budget >= budget.min && dest.budget <= budget.max );
    }
    setFiltered(temp);
}, [region, travelType, budget, selectedDestination, destinations]);

 

  return (
    <>
      <NavBar />
      <Herobanner
        title='Unlock Your Next Adventure!'
        subtitle='Discover incredible destinations and affordable travel deals that fit your budget and dreams.'
        buttonText='Explore Destinations'
        onButtonClick={handleExploreRef}
        fullScreen={false}
      />
      <div ref={exploreRef} className='w-screen'>
        <Filters
          regionOptions={regionOptions}
          travelTypeOptions = {travelTypeOptions}  
          region={region}
          setRegion={setRegion}
          travelType={travelType}
          setTravelType={setTravelType}
          budget={budget}
          setBudget = {setBudget}
        />
        <div className='w-screen'>
          <DestinationTiles
            filtered={filtered}
            destinations={destinations}
            setSelectedDestination={setSelectedDestination}
          />
          <InfoAndReview />
        </div>
      </div>
    </>
  );
}

export default App;
