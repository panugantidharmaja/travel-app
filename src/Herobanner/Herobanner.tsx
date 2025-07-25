type HerobannerProps = {
  title: string;
  subtitle: string;
  buttonText?: string;
  onButtonClick?: () => void;
  fullScreen?: boolean;
};

const Herobanner: React.FC<HerobannerProps> = ({
  title,
  subtitle,
  buttonText,
  onButtonClick,
  fullScreen = true,
}) => {
  return (
    <div
      className={` relative w-screen ${
        fullScreen ? 'h-screen' : 'py-12'
      } bg-blue-200 `}
    >
      <div
        className="absolute inset-0 bg-cover bg-center blur-[0.0px] scale-105"
        style={{
          backgroundImage: `url('/images/vacation-3.jpg')`,
        }}
      ></div>
      
      <div className='relative z-10 max-w-7xl mx-auto px-6 text-center py-24'>
        <h1 className='text-4xl text-white font-bold mb-4'>{title}</h1>
        <p className='text-2xl font-bold mb-6 text-white'>{subtitle}</p>
        {buttonText && onButtonClick && (
          <button
            onClick={onButtonClick}
            className='!bg-[#7d53ee] text-white font-bold px-6 py-3 rounded shadow hover:!bg-[#9371f1]'
          >
            {buttonText}
          </button>
        )}
      </div>
      
    </div>
    
  );
};

export default Herobanner;
