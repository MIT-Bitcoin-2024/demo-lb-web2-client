import { Flex } from 'antd'
import { CreateNewReward } from 'features/myRewards'
import { MyRewardsList } from 'widgets/myRewards'

const MyRewards = () => {
    return (
        <Flex vertical gap="large" style={{ padding: '40px', width: '800px' }}>
            <CreateNewReward />
            <MyRewardsList />
        </Flex>
    )
}
export { MyRewards }