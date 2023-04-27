import { useState } from "react";
import Button from "../shared/Button";
import { login } from "./service"


function LoginPage({ onLogin }) {
    const [credentials, setCredentials] = useState({
        username: '',
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

    console.log(credentials.username, credentials.password);

    return (
    <div>
        <h1>Log in to Nodepop</h1>
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            name="username" 
            placeholder="Email"
            onChange={handleChange} 
            autoComplete="false"
            value={credentials.username}
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