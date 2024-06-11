import { LoginOutlined } from '@ant-design/icons'
import { Button, Typography } from 'antd'
import s from './SidebarLogin.module.css'

const SidebarLogin = () => {

    const handler = async () => {
        window.location.href = 'https://one.lightningbounties.com/api/auth/github'
    }

    return (
        <Button onClick={handler} icon={<LoginOutlined />} className={s.login}>
            <Typography>Login</Typography>
        </Button>
    )
}
export { SidebarLogin }