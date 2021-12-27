import React,{useState,useEffect} from 'react';
import { isAuthenticated, loginApi } from '../Helpers/Auth';
import { useNavigate } from 'react-router-dom';


const Login = () => {


    const [email,setEmail] = useState('test@gmail.com');
    const [password,setPassword] = useState('test123');
    const [error,setError] = useState(false);
    const [loading,setLoading] = useState(false);

    const history = useNavigate();


    const handleSubmit = async () => {
        setLoading(true);
        setError(false);
        
        const res = await loginApi(email,password);
        if(!res){
            setError(true);
            setLoading(false);
        }
        else{
            setLoading(false);
            setError(false);
            history('/');
        }
    }

    useEffect(() => {
        isAuthenticated() && history('/');
    },[]);



    return (
        <div>

            <div className="d-flex justify-content-center">
                <div style={{width:'400px',marginTop:'20vh'}}>
                    <div className="shadow-sm border rounded-0 pt-3 pb-5 px-3">
                        <p className='text-center font-playfair font-700
                        fs-4'>Login to your account</p>

                        {/* <form onSubmit={()=>handleSubmit()}> */}

                            <div className="error">
                                {error && <p className='text-center font-500
                                 bg-danger text-white'>Email or password incorrect</p>}
                            </div>

                            <div>
                                <label className='font-11 light-grey font-500'>Email:</label>
                                <input type="text" className='form-control form-control-sm'
                                value={email} onChange={(e)=>setEmail(e.target.value)} />
                            </div>

                            <div className='mt-3'>
                                <label className='font-11 light-grey font-500'>Password:</label>
                                <input type="password" className='form-control form-control-sm'
                                value={password} onChange={(e)=>setPassword(e.target.value)}  />
                            </div>

                            <div className="font-10 mt-2 light-grey text-center font-poppins">
                                <p>Details for login are pre-filled, please continue by clicking "LOGIN"</p>
                            </div>

                            <div className='mt-3 text-center'>
                                <button className='btn btn-primary btn-sm
                                px-5 font-11 font-500' onClick={handleSubmit}>Login</button>
                            </div>

                        {/* </form> */}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Login;
