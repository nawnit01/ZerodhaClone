import React from 'react'

function Hero() {
    return ( 
        <div className="container mt-5">
            <div className="row text-center border-bottom">
                <h1>Pricing</h1>
                <h4 className='text-muted mt-3 fs-5'>Free equity investment and flat Rs20 Intraday and F&O trades</h4>     
            </div>
            <div className="row mt-3 p-5 text-center">
            <div className="col-4 p-3">
                <img src="media/assets/pricingEquity.svg" alt="" />
                <h1 className='fs-3'>Free equity delivery</h1>
                <p className='text-muted'>All equity delivery investments (NSE, BSE), are absolutely free- Re0 brokerage</p>
                </div>
            <div className="col-4 p-3">
                <img src="media/assets/intradayTrades.svg" alt="" />
                <h1 className='fs-3'>Intraday and F&O trades</h1>
                <p className='text-muted'>All equity delivery investments (NSE, BSE), are absolutely free- Re0 brokerage</p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
            <div className="col-4 p-3">
                <img src="media/assets/pricingEquity.svg" alt="" />
                <h1 className='fs-3'>Free direct MF</h1>
                <p className='text-muted'>All equity delivery investments (NSE, BSE), are absolutely free- Re0 brokerage</p>
                </div>
            </div>
        </div>
     );
}

export default Hero;