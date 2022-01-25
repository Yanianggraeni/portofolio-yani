import Button from './Button';
import Logo from './Logo';
import Nav from './Nav';
function Navbar() {
    return (
        <div className='navbar bg-violet-600 items-center'>
        <div className='container flex items-center mx-auto py-12'>
            <div className='w-3/12'>
                 <div className='Logo text-center text-white upperecase text-2xl font-semibold'>
                     Yani Anggraeni
                 </div>
                 </div>

                 <div className='w-6/12'>
                     <ul className='nav flex justify-center'>
                         <li className='nav-item text-center text-white text-opacity-60 text-lg font-semibold'>Profile</li>
                     </ul>
                 </div>

                 <div className='w-3/12'>
                     <div className='button text-center'>
                         <a className='text-yellow-300 text-lg border rounded-full border-yellow-300 outline-yellow-300 font-semiboldpy-2 px-6'>Kontak</a>
                     </div>
                 </div>
             </div>
         </div>
    );
}

export default Navbar;
