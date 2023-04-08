import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Dashboard() {
    const [palindrom, setPalindrome] = useState('');
    const [disableButton, setdisableButton] = useState(false);

    const checkPalindrom = (e) => {
        let button = e.target.value;
        const palinderoString = new FormData();
        palinderoString.append("string", palindrom);
        setdisableButton(true);
        axios.post("http://localhost:8000/verify", palinderoString)
            .then((res) => {
                console.log(res.data);
                if (res.data === "True" && button === 'yes') {
                    console.log("Right Answer");
                    toast.success('😃 Right Answer !!', {
                        position: "bottom-center",
                        autoClose: 500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                    axios.get('http://localhost:8000/palindrome')
                        .then((res) => {
                            setPalindrome(res.data.data[0]);
                        })
                }
                else if (res.data === "False" && button === "yes") {
                    console.log("Opps got wrong.");
                    toast.warn('😢 Wrong Answer !!', {
                        position: "bottom-center",
                        autoClose: 500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                    axios.get('http://localhost:8000/palindrome')
                        .then((res) => {
                            setPalindrome(res.data.data[0]);
                        })
                }

                else if (res.data === "False" && button === "no") {
                    console.log("Right");
                    toast.success('😃 Right Answer !!', {
                        position: "bottom-center",
                        autoClose: 500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                    axios.get('http://localhost:8000/palindrome')
                        .then((res) => {
                            setPalindrome(res.data.data[0]);
                        })
                }
                else {
                    console.log("Opps! Got wrong");
                    toast.warn('😢 Wrong Answer !!', {
                        position: "bottom-center",
                        autoClose: 500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                    axios.get('http://localhost:8000/palindrome')
                        .then((res) => {
                            setPalindrome(res.data.data[0]);
                        })
                }
                setdisableButton(false);
            })

    }

    useEffect(() => {
        axios.get('http://localhost:8000/palindrome')
            .then((res) => {
                console.log(res.data.data);
                setPalindrome(res.data.data[0]);
            })
    }, [])

    return (
        <>
        <div className='d-flex position-absolute' style={{width:'100%',zIndex:'1'}}>
                <div className='d-flex flex-column justify-content-center align-items-center rounded my-2 mx-2' style={{padding:'1rem', backgroundColor:'rgba(255, 255, 102,0.50)', background:'linear-gradient(117deg,rgba(121,107,9,1) 51%, rgba(0,1,255,1) 100%)'}}>
                    <p style={{color:'white', margin:'0', padding:'0'}}>Player : <span style={{fontFamily:'arial',fontSize:"1.5rem"}}>Mohd Shoib</span></p>
                    <p style={{margin:'0', padding:'0'}}>Player ID : <span style={{color:'red'}}>110938</span></p>
                    <p style={{margin:'0', padding:'0'}}>Score : <span style={{color:'white'}}>342</span></p>
                </div>
        </div>
            <div className='d-flex flex-column justify-content-center align-items-center' style={{ width: '100vw', height: '100vh' }}>
                {/* Toast Area Starts */}

                <ToastContainer
                    position="bottom-center"
                    autoClose={500}
                    limit={1}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss={false}
                    draggable
                    pauseOnHover={false}
                    theme="dark"
                />

                {/* Toast Area Ends */}

                <div style={{ width: '50%', height: '50%', textAlign: 'center' }}>
                    <div className='row' style={{ width: '100%', height: '20%' }}>
                        <h1 className='text-light'>Palindrome Game</h1>
                    </div>
                    <div className='row d-flex align-items-center' style={{ width: '100%', height: '80%' }}>
                        <div>
                            <input type='text' value={palindrom} className='form-control fs-3' style={{ fontStyle: 'arial', fontWeight: 'bold', textTransform: 'uppercase', textAlign: 'center' }} readOnly /><br />
                            <p className='text-warning fw-bolder fs-3' style={{ fontFamily: "monospace" }}>Is this Palendrom?</p>
                            <button className='btn btn-primary p-3 mx-2' disabled={disableButton} value='yes' onClick={checkPalindrom}>YES</button>
                            <button className='btn btn-danger p-3' disabled={disableButton} value='no' onClick={checkPalindrom}>NO</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
