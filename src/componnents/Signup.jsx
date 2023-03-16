import React from 'react'
import '../signup.css'

function Signup() {
    return (
        <> <div className='navparent'>
            <nav>
                <div className='navbar'>

                    <img src="../pngimg.com-netflix" alt="logo" />
                </div>
                <div>
                    <select name="" id="">
                        <option value="english">english</option>
                    </select>
                    <button>signin</button>

                </div>
            </nav>
        </div>
            <div className='center'>
                <h1>unlimited movies,TV shows and more.</h1>
                <h3>watch anywhere.cancel any time.</h3>
                <h3>ready to watch? enter to create or restart your membership.</h3>
                <div className='btncontainer'>
                    <input className='input' type="email" placeholder='email' />
                    <button className='btn1'>getstarted</button>
                </div>
            </div>
        </>
    )
}

export default Signup