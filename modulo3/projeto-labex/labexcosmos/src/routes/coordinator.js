import { useEffect } from "react"

export const goToHome = (navigate) => {
    navigate("/")
}

export const goToLogin = (navigate) => {
    navigate("../login")
}

export const goToListaDeViagens = (navigate) => {
    navigate("../trips/list")
}

export const goToAdminHomePage = (navigate) => {
    navigate("../admin/trips/list")
}

export const goToTripsApplication = (navigate) => {
    navigate("../trips/application")
}

export const goBackPage = (navigate) => {
    navigate(-1)
} 

export const goToCreateTrip = (navigate) => {
    navigate("../admin/trips/create")
}

export const goToTripDetails = (navigate, id) => {
    navigate(`../admin/trips/${id}`)
}

export const ProtectedPage = (navigate) => {
    useEffect(() => {
        const token = window.localStorage.getItem('token')

        if(token === null) {
            goToLogin(navigate)
        }
    }, [navigate])
}