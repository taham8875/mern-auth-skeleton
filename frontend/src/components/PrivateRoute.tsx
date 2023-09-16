import { Navigate, Outlet, useSearchParams, useLocation } from "react-router-dom"
import { useSelector } from "react-redux"

const PrivateRoute = () => {
  const { userInformation } = useSelector((state: any) => state.auth)
  const [searchParams] = useSearchParams()
  const location = useLocation()
  console.log(`searchParams`, searchParams)
  console.log(`location`, location)
  console.log(`window.location.href`, window.location.href)
  return (
    userInformation ? <Outlet /> : <Navigate to={`/login?return_to=${location.pathname}`} replace/>
  )
}

export default PrivateRoute
