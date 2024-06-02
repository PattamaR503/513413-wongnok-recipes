import React from 'react'


function Home(){

    const handleSubmit=(event)=>{
        event.preventDefault();
        
    }

    return (        
        <div className='d-flex justify-content-center bg-primary vh-100'>            
            <div className='bg-white p-3 rounded w-25'>
                <h1 align='center'>WONGNOK</h1>                
                <form action="" onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='Menu'><strong>Menu</strong></label>
                        <input type='Menu' name='Menu' placeholder='Lets find your meal' className='form-control rounded-0' />
                    </div>
                    <button type='submit' className='btn btn-success w-100'><strong>Search</strong></button>
                </form>
            </div>
        </div>
    )
}

export default Home