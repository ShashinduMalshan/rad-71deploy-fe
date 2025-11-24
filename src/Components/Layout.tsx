import Header from './Header'
import { Outlet } from 'react-router-dom'

function Layout () {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout