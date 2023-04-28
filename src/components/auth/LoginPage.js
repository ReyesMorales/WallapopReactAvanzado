import { useState } from "react";
import Button from "../shared/Button";
import { login } from "./service"


function LoginPage({ onLogin }) {
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    });
    
    const handleSubmit = async event => {
        event.preventDefault();
        await login(credentials);
        
        onLogin();
    };

    const handleChange = event => {
        
        setCredentials({...credentials,[event.target.name]: event.target.value});
    }

    console.log(credentials.email, credentials.password);

    return (
    <div>
        <h1>Log in to Nodepop</h1>
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            name="email" 
            placeholder="Email"
            onChange={handleChange} 
            autoComplete="false"
            value={credentials.email}
            />
            <input 
            type="password" 
            name="password" 
            placeholder="Password"
            onChange={handleChange} 
            autoComplete="false"
            value={credentials.password}
            />
            <Button 
            type="submit" 
            variant="secondary">
                Log in
            </Button>
            <br />
            <label>
            <input type="checkbox" name="password-checkbox" defaultChecked={true} /> Recordar contraseña 
            </label>
        </form>
    </div>
    );
}

export default LoginPage;