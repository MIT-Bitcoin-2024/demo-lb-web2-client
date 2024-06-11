import { Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'
// import { useCheckAuth } from 'entities/user'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {

    // useCheckAuth()

    return (
        <Layout
            style={{
                height: '100vh'
            }}
        >
            <Content style={{
                overflow: 'auto'
            }}>
                <Outlet />
            </Content>
        </Layout>
    )
}
export { MainLayout }