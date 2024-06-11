import { useEffect } from 'react'
import { userApi } from '../api/user.api'
import { useNavigate } from 'react-router-dom'

const useCheckAuth = () => {
    const navigate = useNavigate()
    useEffect(() => {
        const token = userApi.getAuthToken()
        if (!token)
            navigate('/')
    }, [navigate])
}

export { useCheckAuth }