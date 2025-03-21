import React from 'react'

function Team() {
    return ( 
        <div className="container">
            <div className="row p-5 mt-5 border-top">
                <h1 className='fs-2 text-center mt-5'>People</h1>
            </div>
            <div className="row p-3 text-muted" style={{lineHeight:"1.8", fontSize:"1.2em"}}>
                <div className="col-6 p-3 text-center">
                   <img src="media/assets/nithinKamath.jpg" style={{borderRadius:"100%", width:"50%"}} alt="NithinKamath" />
                   <h4 className='mt-5'>Nithin Kamath</h4>
                   <h5>Founder, CEO</h5>
                </div>
                <div className="col-6 p-3 text-center">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptas necessitatibus quidem quos vel debitis nihil quae possimus, quas tempore tempora dicta reprehenderit labore iste, doloribus ipsum</p>
                    <p> consectetur adipisicing elit. Asperiores. Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    <p>Connect on <a href="" style={{textDecoration:"none"}}>HomePage</a> <a href="" style={{textDecoration:"none"}}>TradingQnA</a> <a href="" style={{textDecoration:"none"}}>Twitter</a></p>
                </div>
            </div>
        </div>
     );
}

export default Team;