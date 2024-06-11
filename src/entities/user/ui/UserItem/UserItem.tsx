import { Flex, Typography } from 'antd'
import { ProfileImage } from 'shared/ui/ProfileImage'

const UserItem = () => {
    return (
        <Flex align="center" gap="small">
            <ProfileImage />
            <Typography>AndreyMelnikov-Dev</Typography>
        </Flex>
    )
}
export { UserItem }