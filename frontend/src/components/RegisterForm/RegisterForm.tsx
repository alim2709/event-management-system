export default function RegisterForm() {
    return (
        <form>
            <h2>Register</h2>
            <label>Username:</label>
            <input type="text" placeholder="Enter username" />
            <label>Password:</label>
            <input type="password" placeholder="Enter password" />
            <button type="submit">Sign Up</button>
        </form>
    );
}
