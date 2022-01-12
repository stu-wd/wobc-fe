import React, { useState } from 'react';
import WOBCLogo from '../../Images/wobclogo.png'
import UserForm from './UserForm';

const LandingPage = () => {

    const [ side, setSide ] = useState()

    const showRegister = () => {
        setSide('left')
    }

    const showLogin = () => {
        setSide('right')
    }
    
     const overlayCSS = {
         position: 'absolute',
         height: '100%',
         borderRadius: '30px',
         transition: '0.5s',
         top: 0
     }

    return (
        <div
            // className='container'
            style={{
                display: 'flex',
                width: '100%',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <h1>WOBC Volunteer Portal</h1>
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
                    // height: '10%',
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
                        width: side === undefined ? '20%' : '50%',
                        left: side === undefined ? '40%' : side === 'left' ? 0 : '50%',
                        background: side === undefined ? '#999' : side === 'left' ? 'linear-gradient(90deg, rgba(194,221,173,1) 0%, rgba(144,190,109,1) 83%)' : 'linear-gradient(270deg, rgba(194,221,173,1) 0%, rgba(144,190,109,1) 83%)'
                    }}
                    >
                </div>
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
                    }}
                    onClick={showLogin}
                >
                        Login
                </button>
            </div>

            <div
                style={{
                    display: 'flex',
                    marginTop: '5%'
                }}
            >
            { side === 'left' ? 
                <UserForm authPage={'register'} />
                :
                <></>
            }
            { side === 'right' ? 
                <UserForm authPage={'login'} />
                :
                <></>
            }
            </div>
        </div>
    );
};

export default LandingPage;