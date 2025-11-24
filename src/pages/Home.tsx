import { useAuth } from "../context/authContext"

export default function Home() {
  const { user } = useAuth()
  return (
    <main style={{ paddingTop: 72 /* adjust to your header height (px) */ }}>
      <div>
        <h1>{user?.email}</h1>
      </div>
    </main>
  )
}
