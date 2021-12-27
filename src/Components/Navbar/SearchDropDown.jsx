import React from 'react';
import { data } from '../../Helpers/data';

const Searchdropdown = ({search}) => {

    const replaceName=(name)=>{
        const ser = name.split(' ').join('-');
        return ser
    }


    return (
        <div className='container'>
        <p className='font-11 light-grey font-500'>Search results for "{search}"</p>
        

        <div className="searchResultsContent">
            {data.allFeatures.filter(item => item.name.toLowerCase().includes(search.toLowerCase())).map((item) => {
                return (
                    <div className="searchResultItem" key={item.id}>
                    
                        <div className="searchResultItem__content">
                            <a href={`/service/${replaceName(item.name)}`}>
                            <p className="font-14 text-white mb-1">{item.name}</p>
                            <p className="light-grey font-12">Lorem ipsum dolor sit amet consectetur</p>
                            </a>
                            
                        <hr className='grey-hr'/>
                        </div>
                        
                   </div>
                )
            })}
            {data.allFeatures.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
                        .length === 0 && <p className='font-14 text-center light-grey font-500'>No results found for "{search}"</p>}
        </div>

        </div>
    );
}

export default Searchdropdown;
