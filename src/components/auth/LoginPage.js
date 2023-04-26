import Button from "../shared/Button";
import { login } from "./service"


function LoginPage() {
    const handleSubmit = async event => {
        event.preventDefault();

        const response = await login({
            username: event.target.username.value,
            password: event.target.password.value
        });

        console.log(response);

    };


    return (
    <div>
        <h1>Log in to Nodepop</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" />
            <input type="password" name="password" />
            <Button type="submit" variant="secondary">Log in</Button>
        </form>
    </div>
    );
}

export default LoginPage;