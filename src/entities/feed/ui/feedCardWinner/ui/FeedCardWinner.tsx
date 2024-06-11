import { Flex, Typography } from 'antd'
import { feedApi } from 'entities/feed/api/feed.api'
import { FC } from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import { ProfileImage } from 'shared/ui/ProfileImage'

type FeedCardWinnerProps = {
    winner_id?: string | null
}

const FeedCardWinner: FC<FeedCardWinnerProps> = ({ winner_id }) => {

    const { data, isLoading } = useQuery({
        queryKey: feedApi.qkGetGitHubAccountDataByAppUserId(winner_id as string),
        queryFn: () => feedApi.getGitHubAccountDataByAppUserId(winner_id as string),
        enabled: winner_id ? true : false
    })


    return (
        <Flex vertical gap="small">
            <Typography className="opacity50">winner:</Typography>
            {
                winner_id
                    ? <Link to={data?.html_url ?? ''} target="_blank">
                        <Flex align="center" gap="small">
                            <ProfileImage image_url={data?.avatar_url} />
                            <Typography>{isLoading ? 'Loading...' : data?.login}</Typography>
                        </Flex>
                    </Link>
                    : <Typography className="opacity50">Undefined</Typography>
            }
        </Flex>
    )
}
export { FeedCardWinner }