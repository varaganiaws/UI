import React,{useState,useEffect} from 'react';
import { CaretLeftFill, CaretRightFill, XLg } from 'react-bootstrap-icons';
import { useParams } from 'react-router';
import { postServiceById } from '../../Helpers/Auth';
import { data } from '../../Helpers/data';
import Navbar from '../Navbar/Navbar';
import Menu from '../menus/menu';

const Servicedetailtable = () => {

    const [selectedService, setSelectedService] = useState('Documents')
    const [PageWidth] = useState(window.innerWidth)
    const [serviceListOpen, setServiceListOpen] = useState(true)
    const [serviceDetailOpen, setServiceDetailOpen] = useState(true)
    const [tableWidth, setTableWidth] = useState(0)
    const [serviceName, setServiceName] = useState('Service')


    const { service } = useParams();

    useEffect(() => {
        const ser = service.replace(/-/g, ' ');
        setServiceName(ser)
    }, [service]);

    useEffect(async () => {
        await postServiceById(service)
            
    }, []);
    

    useEffect(() => {
        if(serviceListOpen && serviceDetailOpen){
            setTableWidth(PageWidth - 600)
        }
        else if((serviceListOpen && !serviceDetailOpen) || (!serviceListOpen && serviceDetailOpen)){
            setTableWidth(PageWidth - 300)
        }
        else setTableWidth(PageWidth)

    }, [serviceListOpen,serviceDetailOpen,selectedService])

    const handleSelectService = (service) => {
        setSelectedService(service)
        setServiceDetailOpen(true)
    }

    const handleCloseServiceDetail = () => {
        setServiceListOpen(false)
        // setSelectedService(null)
        // setServiceDetailOpen(false)
    }


    const leftStyle={
        width: `${serviceListOpen ? '275px' : '0px'}`,
        minHeight: `90vh`,
        display: `${serviceListOpen ? 'block' : 'none'}`,
    }

    const middleStyle={
        // width: `${serviceDetailOpen && 'calc(100vw - 800px)'}`,
        minHeight: `90vh`,
    }

    const rightStyle={
        width: `${ serviceDetailOpen ? '275px' : '0px'}`,
        minHeight: `90vh`,
        display: `${serviceDetailOpen ? 'block' : 'none'}`,
    }

 

    const ServicesList=()=>{
        return(
            <div style={leftStyle} className='border-end'>
                <div className="header d-flex justify-content-between px-2 border-bottom">
                    <h6>All Services</h6>
                    <XLg onClick={handleCloseServiceDetail} className='cursor-pointer' />
                </div>

                <div className='mt-3'>
                   {['Documents','Contracts','Banking','Adjustments']
                   .map((service,index)=>
                    <p key={index} className={`ps-3 font-13 font-500 cursor-pointer
                    ${selectedService === service && 'color-orange'}`}
                    onClick={()=>handleSelectService(service)}>{service}</p>
                   )}
                </div>
            </div>
        )
    }



    const ServiceDetailMain=()=>{
        return(
            <div className='container'  style={{width:tableWidth+ 'px'}}>
                <h4 className='font-300 pt-2'>{serviceName}</h4>
            <p className='font-11 light-grey font-500 pt-3'>Service Detail</p>

            <div className="service-table">
                <table className="table table-sm table-bordered font-12">
                    <thead>
                        <tr>
                            <th scope="col">Service Name</th>
                            <th scope="col">Service Description</th>
                            <th scope="col">Service Price</th>
                            <th scope="col">Service Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Service 1</td>
                            <td>Description 1</td>
                            <td>$20</td>
                            <td>1 Month</td>
                        </tr>
                        <tr>
                            <td>Service 2</td>
                            <td>Description 2</td>
                            <td>$30</td>
                            <td>1 Month</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/* <div className="d-flex justify-content-center">
               <a href="/service-table-two">
               <button className='btn btn-primary btn-sm'>Services option 2 page</button>
                   </a> 
            </div> */}
        </div>
        )
    }


    const ServicesRight=()=>{
        return(
            <div  style={rightStyle} className='border-start px-3'>
                
                {/* <p className='font-14 font-poppins font-500'>{selectedService}</p> */}
                <div className="header d-flex justify-content-between px-2">
                    <h6>{selectedService}</h6>
                    <XLg onClick={()=>setServiceDetailOpen(false)} className='cursor-pointer' />
                </div>
                <hr className='grey-hr' />
                <p className='font-12'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quod quia atque similique necessitatibus dicta cum, nam corrupti,
                non ea a explicabo totam expedita voluptas beatae, eius odio
                voluptatum exercitationem omnis.</p>

                <hr className='grey-hr' />
                <p className='font-11'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quod quia atque similique necessitatibus dicta cum, nam corrupti,
                non ea a explicabo totam expedita voluptas beatae, eius odio
                voluptatum exercitationem omnis.</p>

                <hr className='grey-hr' />
                <p className='font-11'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quod quia atque similique necessitatibus dicta cum, nam corrupti,
                non ea a explicabo totam expedita voluptas beatae, eius odio
                voluptatum exercitationem omnis.</p>


            </div>
        )
    }



    return (
        <div className='total-page'>
        <Navbar />
        <Menu />

        {/* second nav
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
                </div> */}
                {/* end of second nav */}



        <div className="mt-2">
            <div className="d-flex justify-content-between" style={{marginTop:100+'px'}}>
            <ServicesList  />
           {!serviceListOpen &&
           <div className='caret-right-open'>
           <CaretRightFill size='24px' className='light-white cursor-pointer'
            onClick={()=>setServiceListOpen(true)}/>
            </div>
           } 
           {!serviceDetailOpen &&
           <div className='caret-left-open'>
           <CaretLeftFill size='24px' className='light-white cursor-pointer'
            onClick={()=>setServiceDetailOpen(true)}/>
            </div>
           } 
            <ServiceDetailMain/>
            <ServicesRight/>
            </div>
        </div>
        </div>
    );
}

export default Servicedetailtable;
