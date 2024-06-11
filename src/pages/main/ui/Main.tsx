import { Flex } from 'antd'
import { userApi } from 'entities/user/api/user.api'
import { AuthButton } from 'features/main'
import { useEffect } from 'react'
import { jwtDecode } from "jwt-decode"
import { useNavigate } from 'react-router-dom'

const Main = () => {


    const navigate = useNavigate()

    useEffect(() => {
        const auth = userApi.getAuthToken()
        const gitToken = userApi.getGitHubToken()

        if (auth && gitToken) {
            navigate('/feed')
        }

        const searchParams = new URL(window.location.href).search
        const code = searchParams.split('=')?.[1]
        if (!code)
            return

        // AUTH HERE
        (async () => {
            try {
                const token = await userApi.authWithGithubToken(code)
                if (token) {
                    userApi.setAuthToken(token)
                    // @ts-ignore
                    userApi.setGitHubToken(jwtDecode(token).github_token)
                    navigate('/feed')
                }
            } catch (e) {
            }

        })()
    }, [navigate])

    return (
        <Flex
            justify="center"
            align="center"
            style={{
                height: '100%'
            }}
        >
            <AuthButton />
        </Flex>
    )
}
export { Main }