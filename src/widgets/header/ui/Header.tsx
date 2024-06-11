import { LogoutOutlined } from '@ant-design/icons'
import { Button, Flex, Tooltip, Typography } from 'antd'
import { Header } from 'antd/es/layout/layout'
import { userApi } from 'entities/user/api/user.api'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { ProfileImage } from 'shared/ui/ProfileImage'

const HeaderW = () => {

    const { data } = useQuery({
        queryKey: ['userDataFetching'],
        queryFn: () => userApi.getUserData(),
        refetchInterval: 5000
    })


    const navigate = useNavigate()

    return (
        <Header style={{ padding: '10px 10px' }}>
            <Flex justify="space-between" align="center">
                <Flex align="center" gap="small">
                    <ProfileImage image_url={data?.data?.avatar_url} />
                    <Typography style={{ fontWeight: 'bold' }}>{data?.data?.login}</Typography>
                    <Typography className="opacity50"> $ {data?.points} </Typography>
                </Flex>
                <Tooltip title="Logout">
                    <Button
                        onClick={() => {
                            userApi.setAuthToken(undefined)
                            userApi.setGitHubToken(undefined)
                            navigate('/')

                        }}
                        icon={<LogoutOutlined />}
                    />
                </Tooltip>
            </Flex>
        </Header>
    )
}
export { HeaderW }