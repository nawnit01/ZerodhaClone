import React from 'react'


function Stats() {
    return ( 
        <div className='container p-3'>
            <div className="row">
                <div className="col-6 p-5">
                    <h1 className='fs-2 mb-5'>Trust with confiende</h1>
                    <h2 className='fs-5'>customer-first always</h2>
                    <p className='text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quis odit sequi, minima nobis molestiae doloribus praesentium. Saepe.</p>
                    <h2 className='fs-5'>No spam or grimming</h2>
                    <p className='text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quis odit sequi, minima nobis molestiae doloribus praesentium. Saepe.</p>
                    <h2 className='fs-5'>The zerodha Universe</h2>
                    <p className='text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quis odit sequi, minima nobis molestiae doloribus praesentium. Saepe.</p>
                    <h2 className='fs-5'>Do better with money</h2>
                    <p className='text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quis odit sequi, minima nobis molestiae doloribus praesentium. Saepe.</p>
                </div>
                <div className="col-6 p-5">
                    <img src="media/assets/ecosystem.png" alt="ecosystem" style={{width:"90%"}} />
                    <div className='text-center'>
                        <a href="" className='mx-5' style={{textDecoration:"none"}}>Explore our products</a>
                        <a href="" style={{textDecoration:"none"}}>try Kite demo</a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats