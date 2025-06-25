import React , {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



export default function RegisterPage() {
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('')
    const [error,setError] = useState('')
    const navigate = useNavigate();

const handleRegister = async (e) => {
    e.preventDefault();
    try {
        const response= await axios.post('http://localhost:5000/auth/register', { username, email, password });
       localStorage.setItem(`token`,response.data.token);
       navigate('/'); 
    } catch (error) {
        setError(error.response?.data?.message||'there is error in registration');
    }
};
return(
    <div style={{maxWidth:400,margin:'auto',padding:'2rem'}}>
        <h2>Registration</h2>
        {error&&<p style={{color:'red'}}>{error}</p>}
        <form onSubmit={handleRegister}>
            <input
            type="text"
            placeholder="User name"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            required
            style={{width:'100%',padding:'8px',marginBottom:'1rem'}}
            ></input>
            <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
            style={{width:'100%',padding:'8px',marginBottom:'1rem'}}></input>

            <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
            style={{width:'100%',padding:'8px', marginBottom:'1rem'}}></input>
        <button
        type="submit"
        style={{width:'100%',padding:'10px',backgroundColor:'#333',color:"white",border:'none',}}>register</button>
        </form>
    </div>
)
}