import React from 'react'

function Pricing() {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <h1 className='mb-3 fs-2'>Unbeatable Pricing</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ratione reprehenderit assumenda aliquam, mollitia illum.</p>
                    <a href="" style={{textDecoration:"none"}}>See pricing</a>
                </div>
                <div className="col-2"></div>
                <div className="col-6 mb-5">
                    <div className="row text-center">
                        <div className="col p-2 border">
                            <h1 className='mb-3'>Re0</h1>
                            <p>Lorem ipsum dolor sit amet <br />consectetur adipisicing elit.</p>
                        </div>
                        <div className="col p-2 border">
                            <h1 className='mb-3'>Rs20</h1>
                            <p>Intraday and F&O.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;