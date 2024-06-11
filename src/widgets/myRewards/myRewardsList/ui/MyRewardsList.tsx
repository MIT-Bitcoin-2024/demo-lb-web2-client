import { Flex } from 'antd'
import { useQuery } from 'react-query'

const MyRewardsList = () => {

    const { data, isLoading } = useQuery({
        queryKey: [],
        queryFn: () => []
    })

    return (
        <Flex gap="small" vertical>
            {/* <FeedCard /> */}
        </Flex>
    )
}
export { MyRewardsList }