import Button from './Button';
import Logo from './Logo';
import Nav from './Nav';
function Navbar() {
    return (
        <div className='navbar bg-violet-600 '>
        <div className='container flex items-center mx-auto'>
            <div className='w-3/12'>
                 <div>
                    <Logo/>
                 </div>

                 <div className='w-6/12'>
                     <ul className='nav nav-items flex justify-center space-x-10 py-16'>
                        <li>
                            <a className='nav-item text-center text-white text-opacity-60 text-lg font-semibold'>Profile</a>
                        </li>
                        <li>
                            <a className='nav-item text-center text-white text-opacity-60 text-lg font-semibold'>Skills</a>
                        </li>
                        <li>
                            <a className='nav-item text-center text-white text-opacity-60 text-lg font-semibold'>Project</a>
                        </li>
                        <li>
                            <a className='nav-item text-center text-white text-opacity-60 text-lg font-semibold'>contact</a>
                        </li>
                     </ul>
                </div>

            </div>
        </div>
        </div>
    );
}

export default Navbar;
