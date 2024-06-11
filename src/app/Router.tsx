import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from './MainLayout'
import { Feed } from 'pages/feed'
import { MyRewards } from 'pages/myRewards'
import { Main } from 'pages/main'

const appRouter = createBrowserRouter([
    {
        path: '/*',
        element: <MainLayout />,
        children: [
            {
                path: '',
                element: <Main />
            },
            {
                path: 'feed',
                element: <Feed />
            },
            {
                path: 'my-rewards',
                element: <MyRewards />
            }
        ]
    },
])

export { appRouter }