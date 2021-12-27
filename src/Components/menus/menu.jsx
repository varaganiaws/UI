import React, {useState} from 'react'
import { data } from '../../Helpers/data'
import Searchdropdown from '../Navbar/SearchDropDown';

export default function Menu() {
    const [searchValue, setsearchValue] = useState('');
    const [searchBarClicked, setSearchBarClicked] = useState(false);
    const [servicesClicked, setServicesClicked] = useState(false);

    return (
        
        <div className='secondNav mt-4 d-flex justify-content-between'>
        <div className='d-flex'>
            {data.secondNav.map((item, index) => {
            return (
            item === "More" ? <div className='dropdown'>
                <p key={index} className={`secondNavElement light-grey-2 font-500 pt-3 mb-1
                font-11 ps-4 more dropbtn`}>{item} </p>
                <div class="dropdown-content">
                    {data.moreDropDown.map((item)=>
                    <p className='font-12 font-500 px-3 pt-1
                    cursor-pointer'>{item}</p>
                    )}
                </div>
                </div>
                :
                <p key={index} className={`secondNavElement light-grey-2 font-500 pt-3 mb-1
                font-11 ps-4`}>{item} </p>
                )
                }
                )}
            </div>
            {/* Searchbar */}
            <div className="position-relative mx-5 mt-2 mb-2">
                <input type="search" className='form-control form-control-sm' style={{width: 400+'px'}}
                placeholder='Search for services, features and more' 
                onChange={(e)=>setsearchValue(e.target.value)}/>
                <div className={!servicesClicked && searchValue.length > 0 ? 'search-dropdown-container':
                    'search-dropdown-container-hide'}>
                 <div className="d-flex justify-content-end">
                    <Searchdropdown search={searchValue} />
                 </div>
            </div>
            </div>
            {/* search dropdown */}
            {/* <div className="d-flex justify-content-center"> */}
            {/* <div className={!servicesClicked && searchValue.length > 0 ? 'search-dropdown-container':
             'search-dropdown-container-hide'}>
                 <div className="d-flex justify-content-end">
                    <Searchdropdown search={searchValue} />
                 </div>
            </div> */}
            {/* </div> */}
            {/* search dropdown end */}
        </div>

    )
}
