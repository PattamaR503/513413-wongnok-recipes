import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import validation from './LoginValidations';
import axios from 'axios';

function Login(){
    const [values,setValues] = useState({
        email:'',
        password:''
    })
    const navigate = useNavigate();
    const [errors,setErrors]=useState({})
    const handleInput=(event)=>{
        setValues(prev => ({...prev,[event.target.name]:[event.target.value]}))
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        setErrors(validation(values));
        if(errors.email===""&&errors.password===""){
            axios.post('http://localhost:8081/login', values)
            .then(res => {
                if(res.data === "Success"){
                    navigate('/Home');
                }else{
                    alert("User not found");
                }
            })
            .catch(err => {
                console.log(err);
            });
        }
    }

    return (        
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>            
            <div className='bg-white p-3 rounded w-25'>
                <h1 align='center'>WONGNOK</h1>                
                <h2 align='center'>Log In</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Email</strong></label>
                        <input type='email' name='email' placeholder='Please enter your email' onChange={handleInput} className='form-control rounded-0' />
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'><strong>Password</strong></label>
                        <input type='password' name='password' placeholder='Please enter password' onChange={handleInput} className='form-control rounded-0' />
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>
                    <button type='submit' className='btn btn-success w-100'><strong>Log In</strong></button>
                    <p>I agree with the terms and policies</p>
                    <Link to="/Signup" className='btn btn-default border w-100 text-decoration-none'>Create Account</Link>
                </form>
            </div>
        </div>
    )
}

export default Login