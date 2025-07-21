const Login = () => {
    return (
        <main className="flex-grow flex items-center justify-center bg-gray-100 text-black min-h-screen">
            <form className="bg-white p-8 rounded shadow w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <div className="mb-4">
                    <label className="block mb-2" htmlFor="email">Email</label>
                    <input className="w-full px-3 py-2 border rounded" type="email" id="email" name="email" required />
                </div>
                <div className="mb-6">
                    <label className="block mb-2" htmlFor="password">Password</label>
                    <input className="w-full px-3 py-2 border rounded" type="password" id="password" name="password" required />
                </div>
                <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600" type="submit">Login</button>
            </form>
        </main>
    );
};

export default Login; 