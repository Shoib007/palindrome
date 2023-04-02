import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Dashboard() {
    const [palindrom, setPalindrome] = useState('');

    const checkPalindrom = (e) => {
        let button = e.target.value;
        const palinderoString = new FormData();
        palinderoString.append("string", palindrom);
        axios.post("http://localhost:8000/verify", palinderoString)
            .then((res) => {
                console.log(res.data);
                if (res.data === "True" && button === 'yes') {
                    toast.success('😃 Right Answer !!', {
                        position: "bottom-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                    axios.get('http://localhost:8000/palindrome')
                        .then((res) => {
                            console.log(res.data.data);
                            setPalindrome(res.data.data[0]);
                        })
                }
                else if (res.data === "False" && button === "yes") {
                    toast.warn('😢 Wrong Answer !!', {
                        position: "bottom-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                    axios.get('http://localhost:8000/palindrome')
                        .then((res) => {
                            console.log(res.data.data);
                            setPalindrome(res.data.data[0]);
                        })
                }

                else if (res.data === "False" && button === "no") {
                    toast.success('😃 Right Answer !!', {
                        position: "bottom-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                    axios.get('http://localhost:8000/palindrome')
                        .then((res) => {
                            console.log(res.data.data);
                            setPalindrome(res.data.data[0]);
                        })
                }
                else {
                    toast.warn('😢 Wrong Answer !!', {
                        position: "bottom-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                    axios.get('http://localhost:8000/palindrome')
                        .then((res) => {
                            console.log(res.data.data);
                            setPalindrome(res.data.data[0]);
                        })
                }
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
        <div className='d-flex justify-content-center align-items-center bg-dark' style={{ width: '100vw', height: '100vh' }}>
            {/* Toast Area Starts */}

            <ToastContainer
                position="bottom-center"
                autoClose={3000}
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
                        <button className='btn btn-primary p-3 mx-2' value='yes' onClick={checkPalindrom}>YES</button>
                        <button className='btn btn-danger p-3' value='no' onClick={checkPalindrom}>NO</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
