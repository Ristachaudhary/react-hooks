import React,{useState} from 'react';
import "./style.css";

const RegistrationForm = () => {
const [formData, setFormData] = useState({
    username:"",
    email: "",
    password: "",
    confirm_password: ""
})
const handleChange = (event)=>{
     const name = event.target.name;
     const value = event.target.value;
     setFormData((prev)=>{
       return{...prev, [name] : value,}
     })
}
  return (
    
        <form className='parent-form'>
            <h1>Register</h1>
            <div>
                <label className='form-label'>Name</label>
                <input type='text' className='form-input' autoComplete='off' id="name" name="username" value={formData.username} onChange={handleChange}/>
            </div>
            <div>
                <label className='form-label'>Email</label>
                <input type='email' className='form-input' autoComplete='off' id="email" name="email" value={formData.email} onChange={handleChange}/>
            </div>
            <div>
                <label className='form-label'>Password</label>
                <input type='password' className='form-input' autoComplete='off' id="password" name="password" value={formData.password}/>
            </div>
            <div>
                <label className='form-label'>Confirm Password</label>
                <input type='password' className='form-input' autoComplete='off' id="confirm-password" name="confirm_password" value={formData.confirm_password}/>
            </div>
            <button>Submit</button>
            <p>{`My name is ${formData.username} and email is ${formData.email}`}</p>
        </form>
    
  )
}

export default RegistrationForm;