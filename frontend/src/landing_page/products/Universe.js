import React from 'react'

function Universe() {
    return ( 
        <div className="container">
            <div className="row text-center">
                <h1>The Zerodha Universe</h1>
                <p>Extend your trading and investement experience even further our partner platforms</p>
                <div className="col-4 p-3 mt-5">
                    <img src="media/assets/smallcaseLogo.png" alt="" />
                    <p className='text-small text-muted'>Thematic investment platform</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media/assets/streakLogo.png" style={{width:"30%"}} alt="" />
                    <p className='text-small text-muted'>Algo & strategy platform</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media/assets/sensibullLogo.svg" alt="" />
                    <p className='text-small text-muted'>Options trading platforms</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media/assets/zerodhaFundhouse.png" alt="" />
                    <p className='text-small text-muted'>Assets management</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media/assets/goldenpiLogo.png" alt="" />
                    <p className='text-small text-muted'>Bonds trading platform</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media/assets/dittoLogo.png" style={{width:"30%"}} alt="" />
                    <p className='text-small text-muted'>Insurance learning platform</p>
                </div>
                <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%", margin:"0 auto"}}>Signup Now</button>
            </div>
        </div>
     );
}

export default Universe;