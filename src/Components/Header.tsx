import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/authContext'

export default function Header() {

    const navigate = useNavigate()
    const { user } = useAuth()


    const handleButtnLogout = () => {
        localStorage.removeItem("accessToken")
        localStorage.removeItem("refreshToken")
        navigate("/login")
    }

    return (
        <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
            <div className="text-lg font-bold">
                <Link to="/home" className="hover:underline mr-4">Home</Link>
                <Link to="/post" className="hover:underline">Post</Link>
                {(user?.roles && (user.roles.includes("ADMIN") || user.roles.includes("AUTHOR"))) &&
                (<Link to="/MyPost" className="hover:underline">MyPost</Link>)
                }
            </div>
            <div>
                <button onClick={handleButtnLogout}>
                    Logout
                </button>
            </div>
        </header>
    )
}
