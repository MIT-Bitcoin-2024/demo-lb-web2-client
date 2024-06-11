import { Flex, Typography } from 'antd'
import { NavLink } from 'react-router-dom'
import s from './SidebarNavigation.module.css'

const SidebarNavigation = () => {
    return (
        <Flex vertical gap="middle">
            <NavLink to="/">
                <Flex gap="small" align="center">
                    <div className={s.icon}></div>
                    <Typography>Feed</Typography>
                </Flex>
            </NavLink>
            <NavLink to="/">
                <Flex gap="small" align="center">
                    <div className={s.icon}></div>
                    <Typography>Rewards</Typography>
                </Flex>
            </NavLink>
            <NavLink to="/my-rewards">
                <Flex gap="small" align="center">
                    <div className={s.icon}></div>
                    <Typography>My Rewards</Typography>
                </Flex>
            </NavLink>
            <NavLink to="/">
                <Flex gap="small" align="center">
                    <div className={s.icon}></div>
                    <Typography>Settings</Typography>
                </Flex>
            </NavLink>
        </Flex>
    )
}
export { SidebarNavigation }