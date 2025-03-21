import React from 'react'

function Education() {
    return ( 
        <div className="container mt-5">
            <div className="row">
            <div className="col-6">
                    <img src="media/assets/education.svg" alt="education"  style={{width:"70%"}}/>
                </div>
                <div className="col-6">
                    <h1 className='mb-3 fs-2'>Free and open market education</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ratione reprehenderit assumenda aliquam, mollitia illum.</p>
                    <a href="" style={{textDecoration:"none"}}>Versity</a>
                    <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ratione reprehenderit assumenda aliquam, mollitia illum.</p>
                    <a href="" style={{textDecoration:"none"}}>TradingQ&A</a>
                </div>
            </div>
        </div>
     );
}

export default Education;