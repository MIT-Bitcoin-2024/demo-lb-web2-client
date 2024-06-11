import { Flex, Typography } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { UserItem } from 'entities/user'
import { SidebarLogin } from 'features/sidebar'
import { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'

type SidebarBodyProps = {
    navigationSlot?: ReactNode
}

const SidebarBody: FC<SidebarBodyProps> = ({ navigationSlot }) => {
    return (
        <Sider width={300}>
            <Flex style={{ height: '100%', padding: '18px' }} vertical justify="space-between">

                <Flex vertical gap="large">
                    <Typography.Title level={3} style={{ margin: 0 }}>LOGO BOGO</Typography.Title>
                    <Link to="https://github.com/AndreyMelnikov-dev">
                        <UserItem />
                    </Link>
                    <SidebarLogin />
                    <Flex gap="small" align="center">
                        <Typography className="opacity50">Balance:</Typography>
                        <Typography.Title level={5} style={{ margin: 0 }}>$ 400</Typography.Title>
                    </Flex>
                    {navigationSlot}
                </Flex>

                <Typography style={{ textAlign: 'center' }} className="opacity50">v1.0.0</Typography>

            </Flex>
        </Sider>
    )
}
export { SidebarBody }