function NavBar() {
  return (
    <>
     <nav className='m-4 flex items-center justify-between'>
        <div className='flex items-center space-x-6'>
            <span className='text-3xl m-4'>Budget Travel Explorer</span>
            <a href='#' className='!text-black m-4 text-xl'>Home</a>
            <a href='#' className='!text-black m-4 text-xl'>Destinations</a>
        </div>
        <div className='flex items-center space-x-6'>
            <input type='text' placeholder='Search destinations...' className='w-80 rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400'></input>
            <span className='mx-4 text-4xl'>O</span>
        </div>
     </nav>
    </>
  );
}

export default NavBar;
