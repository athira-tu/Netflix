import React from 'react'
import '../signup.css'

function Signup() {
    return (
        <> <div className='navparent'>
            <nav>
                <div className='navbar'>

                    <img className='logo' src="\public\images\pngimg.com - netflix_PNG31.png" alt="logo" />
                </div>
                <div className='signin'>
                    <select className='selectbox' name="" id="">
                        <option value="english">english</option>
                    </select>
                    <button className='btnsignin'>signin</button>

                </div>
            </nav>
        </div>
            <div className='center'>
                <h1 className='head'>Unlimited movies,TV shows and more.</h1>
                <p>Watch anywhere.cancel any time.</p>
                <p>ready to watch? Enter to create or restart your membership.</p>
                <div className='btncontainer'>
                    <input className='input' type="email" placeholder='Email address' />
                    <button className='btn1'>Getstarted</button>
                </div>
            </div>
        </>
    )
}

export default Signup