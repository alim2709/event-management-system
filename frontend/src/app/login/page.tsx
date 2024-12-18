export default function LoginPage() {
    return (
        <div>
            <h1>Login</h1>
            <form>
                <label>Username:</label>
                <input type="text" placeholder="Enter username" />
                <label>Password:</label>
                <input type="password" placeholder="Enter password" />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}
