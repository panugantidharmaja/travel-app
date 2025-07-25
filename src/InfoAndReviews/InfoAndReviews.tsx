function InfoAndReview() {
    return (
        <>
        <div className='flex flex-col'>
            <div className='p-8'>
                <h2 className='text-center mb-6 text-3xl font-bold'>How Budget Travel Explorer Works</h2>
                <div className='flex justify-center'>
                    <div className='w-90 m-3 p-3'>
                        <img className='w-full h-50 object-cover mb-2'></img>
                        <div>
                            <p className='font-bold'>Discover Destinations</p>
                            <p>Browse a wide range of affordable travel destinations tailored to your budget and preferences.</p>
                        </div>  
                    </div>
                     <div className='w-90 m-3 p-3'>
                        <img className='w-full h-50 mb-2'></img>
                        <div>
                            <p className='font-bold'>Discover Destinations</p>
                            <p>Browse a wide range of affordable travel destinations tailored to your budget and preferences.</p>
                        </div>  
                    </div>
                     <div className='w-90 m-3 p-3'>
                        <img className='w-full h-50 mb-2'></img>
                        <div>
                            <p className='font-bold'>Discover Destinations</p>
                            <p>Browse a wide range of affordable travel destinations tailored to your budget and preferences.</p>
                        </div>  
                    </div>
                </div>
            </div>
            <div className='mt-8 mb-8 p-8 m-4'>
                <p className='text-3xl font-bold mb-4 text-left p-3'>What Our Travelers Say</p>
                <div className='flex justify-between'>
                    <div className='w-70 m-3 p-3'>
                        <p className='h-auto italic text-gray-600 text-left mb-4'>"Budge Travel Explorer made planning my trip to Thailand so easy and affordable! Highly recommend for budget travelers."</p>
                        <p className='font-bold text-left'>Emily</p>
                        <p className='text-left'>New York, USA</p>
                    </div>
                    <div className='w-70 m-3 p-3'>
                        <p className='h-auto italic text-gray-600 text-left mb-4'>"Budge Travel Explorer made planning my trip to Thailand so easy and affordable! Highly recommend for budget travelers."</p>
                        <p className='font-bold text-left'>Emily</p>
                        <p className='text-left'>New York, USA</p>
                    </div>
                    <div className='w-70 m-3 p-3'>
                        <p className='h-auto italic text-gray-600 text-left mb-4'>"Budge Travel Explorer made planning my trip to Thailand so easy and affordable! Highly recommend for budget travelers."</p>
                        <p className='font-bold text-left'>Emily</p>
                        <p className='text-left'>New York, USA</p>
                    </div>
                    <div className='w-70 m-3 p-3'>
                        <p className='h-auto italic text-gray-600 text-left mb-4'>"Budge Travel Explorer made planning my trip to Thailand so easy and affordable! Highly recommend for budget travelers."</p>
                        <p className='font-bold text-left'>Emily</p>
                        <p className='text-left'>New York, USA</p>
                    </div>
                </div>
            </div>
            <div className='mt-8 pb-8 p-8 m-6'>
                <p className='font-bold text-left text-3xl p-3'>Don't Miss Out on Deals!</p>
                <div className='flex justify-between p-3'>
                    <p className='w-90 text-gray-400 text-left'>Subscribe to our newsletter and get exclusive access to the latest affordable travel packages and tips.</p>
                    <div>
                        <input type='text' placeholder='Enter your Email...' className='border border-gray-300 rounded px-3 py-2  focus:outline-none focus:ring-2 focus:ring-blue-500'></input>
                        <button className='ml-2 !bg-blue-600 text-white hover:!bg-blue-500'>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default InfoAndReview