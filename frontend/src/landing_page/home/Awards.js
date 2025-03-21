import React from 'react'

function Awards() {
    return ( 
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-6 p-5">
                    <img src="media/assets/largestBroker.svg" alt="investbroker" />
                </div>
                <div className="col-6 p-5">
                    <h1>Largest broker in India</h1>
                    <p className='mb-5'>2+ million Zerodha client contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                    <div className="row">
                        <div className="col-6"><ul>
                        <li>
                            <p>futuer and options</p>
                        </li>
                        <li>
                            <p>commodity derivatives</p>
                        </li>
                        <li>
                            <p>currency derivatives</p>
                        </li>
                    </ul></div>
                        <div className="col-6"><ul>
                        <li>
                            <p>futuer and options</p>
                        </li>
                        <li>
                            <p>commodity derivatives</p>
                        </li>
                        <li>
                            <p>currency derivatives</p>
                        </li>
                    </ul></div>
                    <img src="media/assets/pressLogos.png" alt="presslogo" style={{width:"90%"}}/>
                    </div>
                    
                </div>
            </div>
        </div>
     );
}

export default Awards;