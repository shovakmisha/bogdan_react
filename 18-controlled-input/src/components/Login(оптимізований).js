import { useState } from "react";

function Login() {

    const [data, setData] = useState({username: '', password: ''});

    function handleFormSubmit(e) {
        e.preventDefault();

        const userData = {
            username: data.username,
            password: data.password
        }

        alert(JSON.stringify(userData));
    }

    function handleInputChange(e, name) {
        setData({...data, [name]: e.target.value}); // [name] мусить бути в скобках так як ця змінна динамічна
    }

    return (
        <>
            <h1>Login form</h1>
            <form onSubmit={handleFormSubmit}>
                <label>Username:
                    <input
                        type="text"
                        name="username"
                        value={data.username}
                        onChange={e => handleInputChange(e, 'username')} />
                </label>
                <label>Password:
                    <input
                        type="password"
                        name="password"
                        value={data.password}
                        onChange={e => handleInputChange(e, 'password')} />
                </label>
                <button type="submit">Login</button>
            </form>
        </>
    )
}

export default Login