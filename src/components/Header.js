import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="bg-black text-white p-4 flex justify-between items-center">
            <div>
                <Link to="/">
                    <img src="https://img.hotstar.com/image/upload/v1737554969/web-assets/prod/images/rebrand/logo.png" alt="Hotstar Logo" className="w-20 h-20"/>
                </Link>
            </div>
            <div className="flex items-center gap-4">
                <Link to="/about" className="text-white hover:underline">About</Link>
                <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded-md">Login</Link>
                <Link to="/signup" className="bg-blue-500 text-white px-4 py-2 rounded-md">Signup</Link>
            </div>
        </div>
    )
}

export default Header;