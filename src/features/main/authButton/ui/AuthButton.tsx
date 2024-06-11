import { Button, Card, Flex } from 'antd'
import logo from './logo.png'

const AuthButton = () => {
    return (
        <Card bordered={false} style={{ width: '300px' }}>
            <Flex vertical gap="small">
                <img src={logo} alt="" />
                <Button
                    onClick={() => { window.location.href = 'https://one.lightningbounties.com/api/auth/github' }}
                >
                    Login With GitHub
                </Button>
            </Flex>
        </Card>
    )
}
export { AuthButton }