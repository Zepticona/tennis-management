import { Link } from "react-router-dom";
import { useState } from 'react';

function LoginPage() {
    const [form, setForm] = useState({
        username: '',
        password: ''
      });
    
    const handleChange = (e) => {
        setForm((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }


    return ( 
        <main>
            <div className="login-page-container">
                <form action="" className="login-form">
                    <input onChange={handleChange} value={form.username} name="username" type="text" className="login-form__username" placeholder="username" />
                    <input onChange={handleChange} value={form.password} name="password" type="password" className="login-form__password" placeholder="password" />
                    <span className="login-form__forgot-pass text-btn">Forgot Password</span>
                    <Link to="/admin-menu" className="login-form__login primary-btn btn-blue">Login</Link>
                </form>
            </div>
        </main> 
    );
}

export default LoginPage;