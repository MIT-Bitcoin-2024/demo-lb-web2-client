import { Flex, Spin } from 'antd'
import { FeedCard } from 'entities/feed'
import { useQuery } from 'react-query'
import { appApi } from 'shared/api/app.api'

const FeedList = () => {

    const { data, isLoading } = useQuery({
        queryKey: ['feedQuery'],
        queryFn: () => appApi.rewards.listRewardsApiRewardsGet({}),
        refetchInterval: 5000
    })

    return (
        <Flex vertical gap="middle">
            {
                isLoading
                    ? <Spin />
                    : data && [...data].reverse().map(item => <FeedCard key={item.id} {...item} />)
            }

        </Flex>
    )
}
export { FeedList }