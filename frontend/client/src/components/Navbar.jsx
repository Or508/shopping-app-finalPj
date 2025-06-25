import React from "react";
import {Link , useNavigate  } from "react-router-dom";

function Navbar({user,onLogout,cartCount}) {
const navigate=useNavigate();    

return(
    <>
    <nav style={{
        display:'flex',justifyContent:'space-between',alignItems:'center',
        backgroundColor:'#333',color:'white'
    }}>
<Link to='/' style={{color:'white',textDecoration:'none', fontSize:'1.2rem'}}>
MyShop
</Link>
<div>
    <Link to='/' style={{color:'white',margin:'0 0.5rem'}}></Link>
    <Link to='/cart' style={{color:'white',margin:'0 0.5rem'}}>Cart({cartCount})</Link>

{!user&&(
    <>
    <Link to='/login' style={{color:'white',margin:'0 0.5rem'}}>Login</Link>
    <Link to='/register' style={{color:'white',margin:'0 0.5rem'}}>Register</Link>
    </>
)}

{user &&(
    <>
    <span style={{margin:'0 0.5rem'}}>{user.username}</span>
    <button
    onClick={()=>{
        onLogout();
        navigate('/login');
    }}
    style={{
        marginLeft:'0 0.5rem',padding:'5px 10px',backgroundColor:'#555',border:'none',color:'white',cursor:'pointer'
    }}>Logout</button>
    </>
)}
</div>
</nav>
</>
);
}

export default Navbar;