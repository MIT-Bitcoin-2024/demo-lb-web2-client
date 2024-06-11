import { Flex } from 'antd'
import { CreateNewReward } from 'features/myRewards'
import { FeedList } from 'widgets/feed'
import { HeaderW } from 'widgets/header'

const Feed = () => {

    return (
        <>
            <HeaderW />
            <Flex
                vertical
                gap="large"
                style={{
                    padding: '40px',
                    width: '800px',
                    margin: '0 auto'
                }}>
                <CreateNewReward />
                <FeedList />
            </Flex>
        </>
    )
}
export { Feed }