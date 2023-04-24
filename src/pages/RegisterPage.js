import axios from 'axios';
import React, { useMemo, useState } from 'react'
import { BaseURL } from '../BaseUrl';

export default function RegisterPage() {
    const [userDetail, setUserDetails] = useState({
        username : '', email : '', password :''
    }
    );

    const handelUserStates = (e) => {
        setUserDetails({
            ...userDetail, [e.target.name] : e.target.value
        });
        console.log(userDetail)
    }

    const Submit = async () => {
        const userData = new FormData();
        userData.append('username',userDetail.username);
        userData.append('password',userDetail.password);
        userData.append('email',userDetail.email);

        await axios({
            method: 'post',
            url: `${BaseURL}/register`,
            data : userData
        })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => console.log(err));
    }

    const [confirmPassword, setConfirmPassword] = useState(null);
    
    const password = useMemo(() => userDetail.password === confirmPassword,[confirmPassword, userDetail.password] );       // Checking for both passwords are matching or not

    return (
        <div className="row text-white d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
                <div style={{ borderRadius: "25px" }}>
                    <div className="bg-dark">
                        <div className="row justify-content-center">
                            <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-2 mt-4">Sign up</p>

                                <form className="mx-1 mx-md-2">

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                        <div className="form-outline flex-fill mb-0">
                                            <input type="text" name="username" onChange={handelUserStates} placeholder='Username' className="form-control" />
                                        </div>
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                        <div className="form-outline flex-fill mb-0">
                                            <input type="email" name='email' onChange={handelUserStates} placeholder='Email' className="form-control" />
                                        </div>
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                        <div className="form-outline flex-fill mb-0">
                                            <input type="password" name='password' onChange={handelUserStates} id="form3Example4c" placeholder='Password' className="form-control" />
                                        </div>
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                        <div className="form-outline flex-fill mb-0">
                                            <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} placeholder='Confirm Password' className="form-control" />
                                        </div>
                                    </div>
                                    <p className=' text-danger'>{password ? null : 'Password does not match !!'}</p>

                                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                        <button type="button" className="btn btn-primary btn-lg" disabled={!password} onClick={Submit} >Register</button>
                                    </div>

                                </form>

                            </div>
                            <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                <img src="./Media/register image.png"
                                    className="img-fluid" alt="login" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
