import React from 'react'

function Hero() {
    return ( 
        <div className="container">
            <div className="row p-5 mt-5 mb-5">
                <h1 className='fs-2 text-center'>We pioneer the discount broking model in India. <br /> Now, we are breaking ground with our technology.</h1>
            </div>
            <div className="row p-5 mb-5 border-top text-muted" style={{lineHeight:"1.8", fontSize:"1.2em"}}>
                <div className="col-6 p-5">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptas necessitatibus quidem quos vel debitis nihil quae possimus, quas tempore tempora dicta reprehenderit labore iste, doloribus ipsum, culpa saepe vitae odio ex in eius.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro voluptatibus corrupti vel. </p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure ex dolorum voluptas voluptate fugit Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nisi cumque vel ut non dolor, laudantium, repellat amet doloribus ex, quo corrupti? </p>
                </div>
                <div className="col-6 p-5 text-center">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptas necessitatibus quidem quos vel debitis nihil quae possimus, quas tempore tempora dicta reprehenderit labore iste, doloribus ipsum</p>
                    <p> <a href="" style={{textDecoration:"none"}}>Rainmatter</a>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores. Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure ex dolorum voluptas voluptate fugit Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nisi cumque vel ut non do? </p>
                </div>
               
            </div>
        </div>
     );
}

export default Hero;