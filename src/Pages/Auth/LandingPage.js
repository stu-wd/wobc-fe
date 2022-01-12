// import React, {useState} from 'react';
// import { Link } from 'react-router-dom';
// const LandingPage = () => {

//     const [ register, setRegister ] = useState('register')

//     const handleChange = () => {
//         if (register === 'register') {
//             setRegister('login')
//         }
//         if (register === 'login') {
//             setRegister('register')
//         }
//     }


//     return (
//     <div
//                 className='button-box'
//                 style={{
//                     width: '80%',
//                     height: '10%',
//                     margin: 'auto',
//                     // backgroundColor: 'red',
//                     display: 'flex',
//                     boxShadow: '0 0 20px 10px #ff61241f',
//                     borderRadius: '30px',
//                     position: 'relative',
//                     // border: '3px solid green'
//                 }}
//                 >
//                 <div
//                     id='btn'
//                     style={{
//                         ...overlayCSS,
//                         left: register === 'register' ? 0 : '50%',
//                     }}
//                 >
//                 </div>
//                 <button
//                     type='button'
//                     onClick={handleChange}
//                     style={{
//                         // maxHeight: '',
//                         height: '100%',
//                         width: '50%',
//                         // padding: '5% 10%',
//                         cursor: 'pointer',
//                         background: 'transparent',
//                         border: 0,
//                         outline: 'none',
//                         zIndex: '99999',
//                         // border: '3px solid black'
//                     }}
//                 >
//                     <Link
//                         to='/register'
//                     >
//                         Register
//                     </Link>
//                 </button>
//                 <button
//                     type='button'
//                     onClick={handleChange}
//                     style={{
//                         // maxHeight: '',
//                         height: '100%',
//                         width: '50%',
//                         // padding: '5% 10%',
//                         cursor: 'pointer',
//                         background: 'transparent',
//                         border: 0,
//                         outline: 'none',
//                         zIndex: '99999',
//                         // border: '3px solid black'
//                     }}
//                 >
//                     <Link
//                         to='/login'
//                     >
//                         Login
//                     </Link>
//                 </button>
                      
//     </div>
//     );
// };

// export default LandingPage;

import React, { useState } from 'react';
import WOBCLogo from '../../Images/wobclogo.png'
import UserForm from './UserForm';

const LandingPage = () => {

    const [ register, setRegister ] = useState(false)
    const [ login, setLogin ] = useState(false)
    const [ side, setSide ] = useState('left')

    const showRegister = () => {
        setSide('left')
        setRegister(true)
        setLogin(false)
    }

    const showLogin = () => {
        setSide('right')
        setLogin(true)
        setRegister(false)
    }
    
     const overlayCSS = {
         position: 'absolute',
         width: '50%',
         height: '100%',
         background: 'linear-gradient(to right, #ff105f, #ffad06)',
         borderRadius: '30px',
         transition: '0.5s',
         top: 0
     }

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <h1>White Oak Bike Co-op Volunteer Portal</h1>
            <div>
                <img
                    src={WOBCLogo}
                    alt='WOBC Logo'
                    style={{
                        
                    }}
                />
            </div>

            <div
                className='button-group'
                style={{
                    width: '80%',
                    height: '10%',
                    // margin: 'auto',
                    // backgroundColor: 'red',
                    display: 'flex',
                    boxShadow: '0 0 20px 10px #ff61241f',
                    borderRadius: '30px',
                    position: 'relative',
                    // border: '3px solid green'
                }}
            >
                <div
                    id='btn'
                    style={{
                        ...overlayCSS,
                        left: side === 'left' ? 0 : '50%',
                    }}
                    ></div>
                <button
                    style={{
                        maxHeight: '',
                        height: '100%',
                        width: '50%',
                        padding: '5% 10%',
                        cursor: 'pointer',
                        background: 'transparent',
                        border: 0,
                        outline: 'none',
                        zIndex: '99999',
                        // border: '3px solid black'
                    }}
                    onClick={showRegister}
                >
                    Register
                </button>
                <button
                    style={{
                        maxHeight: '',
                        height: '100%',
                        width: '50%',
                        padding: '5% 10%',
                        cursor: 'pointer',
                        background: 'transparent',
                        border: 0,
                        outline: 'none',
                        zIndex: '99999',
                        // border: '3px solid black'
                    }}
                    onClick={showLogin}
                >
                        Login
                </button>

            {/* <div>
            { register ? 
                <UserForm authPage={'register'} />
                :
                <></>
            }
            </div>
            <div>
            { login ? 
                <UserForm authPage={'login'} />
                :
                <></>
            }
            </div> */}
        </div>
        </div>
    );
};

export default LandingPage;