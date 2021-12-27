import React from "react";
import { data } from "../Helpers/data";
import Navbar from "./Navbar/Navbar";
import { CaretDownFill,FilePdf, BoxArrowUpRight } from 'react-bootstrap-icons';
import { getServices } from "../Helpers/Auth";
import Menu from "./menus/menu";


const Home = () => {

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
        <div className='total-page'>
        <Navbar />
        <Menu />
        <div className="container" style={{marginTop:100+'px'}}>
            <h2 className='font-300 px-5'>Style App Console</h2>

            {/* fetures section */}
            <div className="features-section py-3 px-5">
                <div className="row">
                    {/* Main features section */}
                    <div className="col-md-8">
                        <div className='main-features'>
                            <div className='main-features-heading'>
                                <p className='font-poppin'>
                                    Style App Services
                                </p>
                            </div>
                            <div className='main-features-content bg-white py-1 px-3'>
                                 {/* Recent services section */}
                                <div className="recent-services border-bottom pt-2 pb-3">
                                    <p className='m-0 font-13 font-600 pb-2'>
                                        <CaretDownFill/> Recent services</p>
                                    <div className='services-list'>
                                    <div className="row">
                                    { !loading && recent.length > 0 && recent.map((item, index) => {
                                    return (
                                       <div className="col-md-3" key={index}>
                                            <span className='font-12 text-primary
                                        font-400'><a href={`/service/${replaceName(item)}`}> <FilePdf size='17px' 
                                        className='text-dark' /> {getSpace(item)}</a></span>  
                                       </div>
                                    )
                                    })}</div>
                                    </div>
                                </div>
                                {/* Recent services section end */}
                                <div className="recent-services pt-2 pb-3">
                                    <p className='m-0 font-13 font-600 pb-2'>
                                        <CaretDownFill/> All Services</p>
                                    <div className='services-list'>
                                    <div className="d-flex justify-content-around py-3">
                                        {data.featureTypes.map((type,index) =>
                                        <div key={index}>
                                            <p className='font-12 font-700'><FilePdf size='17px'/> {type}</p>

                                            {data.allFeatures.filter(item => item.type === type).map((item, index) => {
                                                
                                                return (
                                                    <a href={`/service/${replaceName(item.name)}`}><p className='font-10
                                                    font-600 ps-4 mb-2 text-dark' key={index}> {item.name}</p></a>
                                                )
                                            })}
                                        </div>
                                        )}
                                    </div>
                                    </div>
                                </div>
                                

                            </div>
                        </div>
                    </div>
                    {/* Helpers section */}
                    <div className="col-md-4">
                        <div className="helpers-section">
                        <div className='main-features-heading'>
                                <p className='font-poppin'>
                                    Explore App
                                </p>
                            </div>
                            <div className='helpers-list bg-white py-3'>
                            {data.helpersData.map((item, index) => {
                            return (
                            <div key={index} className='helpers-item px-3'>
                            <p className='font-poppin font-600 mb-0 font-12'>{item.name}</p>
                            <p className='font-poppin font-400 mb-0 font-12'>{item.description}</p>
                            <p className='text-primary font-10 mb-0 cursor-pointer'>
                                <a href={`/service/${replaceName(item.sName)}`}> Learn more <BoxArrowUpRight/>
                                </a></p>
                            { index !== data.helpersData.length - 1 && <hr/> }
                            </div>
                            )
                            })}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* fetures section end */}



        </div>
        </div>
    );
  }

export default Home;