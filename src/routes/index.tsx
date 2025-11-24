import { lazy, Suspense, type ReactNode } from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { useAuth } from "../context/authContext"
import Layout from "../Components/Layout"
import MyPost from "../pages/MyPost"

const Home = lazy(() => import("../pages/Home"))
const Login = lazy(() => import("../pages/Login"))
const Register = lazy(() => import("../pages/Register"))
const Welcome = lazy(() => import("../pages/Welcome"))
const Post = lazy(() => import("../pages/Post"))

type RequiredAuthType = { children: ReactNode, roles?: string[] }

const RequiredAuth = ({ children, roles }: RequiredAuthType) => {
  const { user, loading } = useAuth()

  if (loading) {
    return <div>User Loading...</div>
  }
  if (!user) {
    return <Navigate to="/login" replace />
  }
  // If roles are provided, ensure the user has at least one required role
  if (roles && !roles.some((role) => user.roles?.includes(role))) {
    console.log("User roles:",roles.some((role) => user.roles?.includes(role)));
    return <div>You do not have permission to view this page.</div>
  }
  return <>{children}</>
}



export default function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/*          
          <Route path="/home" element={
            <RequiredAuth>
              <Home />
            </RequiredAuth>} /> */}

          <Route element={
            <RequiredAuth>
              <Layout />
            </RequiredAuth>} >
            <Route path="/home" element={<Home />} />
            <Route path="/post" element={<Post />} />
            <Route path="/MyPost" element={
              <RequiredAuth roles={["ADMIN","AUTHOR"]}>
                <MyPost />
              </RequiredAuth>
            } />
          </Route>

          

        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
