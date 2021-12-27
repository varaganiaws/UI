import React from 'react';
import { data } from '../../Helpers/data';
import Navbar from '../Navbar/Navbar';


const Servicedetailtwo = () => {
    return (
        <div>
            <Navbar/>
            <div className='secondNav mt-4 d-flex'>
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

        </div>
    );
}

export default Servicedetailtwo;
