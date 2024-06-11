import { ThemeConfig } from 'antd'

const lightTheme: ThemeConfig = {
    cssVar: true,
    token: {
        colorLink: '#597EF7',
        colorPrimary: "#597EF7",
        colorBgContainer: '#1F1F1F',
        colorText: 'rgba(255, 255, 255, 0.85)',
        colorSplit: '#434343',
        colorBorder: '#424242',
        colorTextQuaternary: 'rgba(255, 255, 255, 0.25)',
        colorTextTertiary: 'rgba(255, 255, 255, 0.45)',
        colorBgElevated: '#1f1f1f',
    },
    components: {
        Layout: {
            siderBg: '#1F1F1F',
            bodyBg: '#141414',
            headerBg: '#141414',
        },
    }
}

export { lightTheme }
