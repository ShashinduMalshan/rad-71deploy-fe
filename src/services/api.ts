// axiosConfig.ts
// apiService.ts
// api.ts
import axios, { AxiosError } from "axios"
import { refreshTokens } from "./auth"

const api = axios.create({baseURL:"https://692444fbbc66496c3cd9f65a--venerable-croquembouche-11613c.netlify.app/"
  // "https://rad-71deploy-be.vercel.app/api/v1"
  // baseURL: "http://localhost:5000/api/v1"
})

const PUBLIC_ENDPOINTS = ["/auth/login", "/auth/register"]

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken")
  const isPublic = PUBLIC_ENDPOINTS.some((url) => config.url?.includes(url))

  if (token && !isPublic) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

api.interceptors.response.use(
  (response) => {
    return response
  },
  async (err: AxiosError) => {

    const originalRequest: any = err.config

    const isPublic = PUBLIC_ENDPOINTS.some((url) =>
      originalRequest.url?.includes(url)
    )

    if (err.response?.status === 401 && !isPublic && !originalRequest._retry) {
      originalRequest._retry = true
      try {
        const refreshToken = localStorage.getItem("refreshToken")

        if (!refreshToken) {
          throw new Error("No refresh token available")
        }
        const res = await refreshTokens(refreshToken)
        
        localStorage.setItem("accessToken", res.data.accessToken)

        originalRequest.headers.Authorization = `Bearer ${res.data.accessToken}`
        console.log("Token refreshed successfully" + res.data.accessToken);
        return axios(originalRequest)
      } catch (err) {
        localStorage.removeItem("accessToken")
        localStorage.removeItem("refreshToken")
        window.location.href = "/login"
        console.error("Refresh token expired or invalid. Redirecting to login." + err)
        return Promise.reject(err)
      }
    }
  }
)


export default api
