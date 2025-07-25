type FiltersProps = {
  regionOptions: string[];
  travelTypeOptions: string[];
  region: string;
  setRegion: (value: string) => void;
  travelType: string;
  setTravelType: (value: string) => void;
  budget: {min: number, max: number} | null;
  setBudget: (value: {min: number; max: number}) => void;
};

type BudgetOption = {
  label: string;
  min: number;
  max: number;
};

const budgetOptions: BudgetOption[] = [
  { label: '$ - Budget (Under $100/day)', min: 0, max: 99 },
  { label: '$$ - Moderate ($100-$500/day)', min: 100, max: 500 },
  { label: '$$$ - Premium ($500-$700/day)', min: 500, max: 700 },
  { label: '$$$$ - Luxury (Above $700/day)', min: 700, max: 100000 },
];

function Filters({ regionOptions, travelTypeOptions, region, setRegion, travelType, setTravelType, budget, setBudget }: FiltersProps) {
  return (
    <div className='m-6 p-6 flex item-center justify-between'>
      {/* Search Destination input */}

      {/* Filter Dropdowns */}
      <div className='flex gap-4'>
        <form className='w-60'>
          <select value={region} onChange={(e) => setRegion(e.target.value)}
            className='block w-full px-4 py-2 border border-gray-300 rounded-md shawdow-sm focus:outline-none focus:ring-1 focus:ring-gray-200 focus:border-gray-300'>
            <option value=''>Region</option>
            {regionOptions.map((region: string) => (
              <option value={region}>{region}</option>
            ))}
          </select>
        </form>
        <form className='w-52 ml-4'>
          <select value={budget ? JSON.stringify(budget) : ''} onChange={(e) =>{
            const selected = e.target.value;
            if (selected) {
              setBudget(JSON.parse(selected));
            } else {
              setBudget({min: 0, max: 0});
            }
          }}
            className='block w-full px-4 pr-10 py-2 border border-gray-300 rounded-md shawdow-sm focus:outline-none focus:ring-1 focus:ring-gray-200 focus:border-gray-300'>
            <option value=''>Budget</option>
            {budgetOptions.map((opt, idx) => (
              <option
                key={idx}
                value={JSON.stringify({ min: opt.min, max: opt.max })}
              >
                {opt.label}
              </option>
            ))}
          </select>
        </form>
        <form className='w-52 ml-4'>
          <select  value={travelType} onChange={(e) => setTravelType(e.target.value)}
            className='block w-full px-4 pr-10 py-2 border border-gray-300 rounded-md shawdow-sm focus:outline-none focus:ring-1 focus:ring-gray-200 focus:border-gray-300'>
            <option value=''>Travel Type</option>
            {travelTypeOptions.map((type: string) => (
              <option value={type}>{type}</option>
            ))}
          </select>
        </form>
      </div>
    </div>
  );
}

export default Filters;
