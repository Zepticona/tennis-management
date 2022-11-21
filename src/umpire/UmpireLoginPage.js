import { Link } from "react-router-dom";
import { useState } from 'react';

function UmpireLoginPage() {
    const [form, setForm] = useState({
        email: '',
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
            <div className="umpire-login-page-container umpire-page-container umpire-page--dark">
                <form action="" className="umpire-login-form">
                    <div>
                        <label htmlFor="email">Email</label>
                        <input onChange={handleChange} value={form.email} name="email" type="text" className="umpire-login-form__email" placeholder="email" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input onChange={handleChange} value={form.password} name="password" type="password" className="umpire-login-form__password" placeholder="password" />
                    </div>
                    <span className="umpire-login-form__forgot-pass text-btn">Forgot Password</span>
                    <Link to="/umpire-menu" className="umpire-login-form__login primary-btn btn-blue">Login</Link>
                </form>
            </div>
        </main> 
    );
}

export default UmpireLoginPage;