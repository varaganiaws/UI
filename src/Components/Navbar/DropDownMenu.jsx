import React from 'react';
import { getServices } from '../../Helpers/Auth';
import { data } from '../../Helpers/data';

const Dropdownmenu = () => {

    const replaceName=(name)=>{
        const ser = name.split(' ').join('-');
        return ser
    }

    const getSpace=(name)=>{
        const ser = name.split('-').join(' ');
        return ser
    }


    const [recent, setRecent] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(async () => {
        const res = await getServices();
        if(res){
            setRecent(res);
            return setLoading(false);
        }
    },[]);

    return (
        <div className='my-3'>
            
            <div className="row">

                <div className="col-md-3 border-end">
                <p className='m-0 font-13 font-600 px-3 light-white'>Recently Visited</p>
                {!loading && recent.length > 0 && recent.map((item, index) => {
                    return (
                    <a href={`/service/${replaceName(item)}`}>
                    <p className='font-11 light-grey
                    font-500 ps-4 mb-0 pt-3' key={index}> {getSpace(item)}</p></a>
                    )
                })}
                </div>

                <div className='col-md-9'>
                <p className='font-13 font-600 light-white'>All Services</p>
                    <div className="row">
                    {data.featureTypes.map((type,index) =>
                    <div key={index} className='col-md-3'>
                    <p className='font-12 font-700 light-white'>{type}</p>
                    {data.allFeatures.filter(item => item.type === type).map((item, index) => {
                    return (
                    <a href={`/service/${replaceName(item.name)}`}>
                    <p className='font-11 light-grey
                    font-600 ps-1 mb-2 cursor-pointer' key={index}> {item.name}</p>
                    </a>
                    )
                    })}
                    </div>
                    )}
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Dropdownmenu;
