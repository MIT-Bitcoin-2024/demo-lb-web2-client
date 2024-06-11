import { ConfigProvider } from 'antd'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { appRouter } from './Router'
import { darkTheme } from 'shared/themes/dark'
import { QueryClient, QueryClientProvider } from 'react-query'


const client = new QueryClient()

const App = () => {

    return (
        <QueryClientProvider client={client}>
            <ConfigProvider theme={darkTheme}>
                <RouterProvider router={appRouter} />
            </ConfigProvider>
        </QueryClientProvider>
    )
}
export { App }