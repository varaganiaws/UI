import React,{useState} from 'react';
import { CaretDownFill,CaretUpFill, XCircleFill } from 'react-bootstrap-icons';
import { getUserName, isAuthenticated, signout } from '../../Helpers/Auth';
import Dropdownmenu from './DropDownMenu';
import  './nav.css';
import Searchdropdown from './SearchDropDown';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {

    
    const history = useNavigate();
    // const [searchValue, setsearchValue] = useState('');
    // const [searchBarClicked, setSearchBarClicked] = useState(false);
    const [servicesClicked, setServicesClicked] = useState(false);

    const handleSignout = () => {
        signout();
        history('/login');
    }

    React.useEffect(() => {
        !isAuthenticated() && history('/login');
    }, []);


    return (
        <div className='bg-dark'>

            {/* navbar  */}
            <nav className='customNav d-flex justify-content-between'> 
                {/* navbar logo  */}
                <div className='d-flex'>
                <div className="logo">
                <a href='/' className='font-raleway font-700 logo'>DCCA</a>
                </div>
                    {/* Services option in navbar*/}
                    {/* <div className='services px-5'>
                        <span className={`font-raleway font-400 cursor-pointer
                        ${servicesClicked?'color-orange':'light-white'}`} onClick={()=>setServicesClicked(!servicesClicked)}>
                        Services {!servicesClicked ? <CaretDownFill/> : <CaretUpFill/>}</span>
                    </div> */}
                    {/* search bar */}
                {/* <div><input type="search" className='main-search-bar' 
                placeholder='Search for services, features and more' 
                onChange={(e)=>setsearchValue(e.target.value)}/>
                </div> */}
                </div>

                <div className='d-flex'>
                    {/* <Bell className='text-white' /> */}
                    {/* Services option in navbar*/}
                    {/* <div className='services px-1'>
                        <span className='light-white font-raleway font-400 cursor-pointer'>
                        Support <CaretDownFill/></span>
                    </div> */}

                    <div className='services px-1 dropdown'>
                        <span className='light-white font-raleway font-400 cursor-pointer'>
                        {getUserName() && getUserName()}</span>
                       
                    </div>

                </div>
            </nav>
            {/* Navbar end */}


            {/* Services dropdown */}
            <div className="d-flex justify-content-center">
            <div className={servicesClicked ? 'services-dropdown-container':
             'services-dropdown-container-hide'}>
                <div className='services-dropdown'>
            <div className='services-dropdown-header'>

                <div className="d-flex justify-content-end">
                    <XCircleFill className='light-white cursor-pointer' onClick={()=>setServicesClicked(!servicesClicked)}/>
                </div>
                <Dropdownmenu/>

            </div>
            </div>
            </div>
            </div>
            {/* Services dropdown end */}

        </div>
    );
}

export default Navbar;
