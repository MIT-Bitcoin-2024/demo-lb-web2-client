import { Card, Flex, Typography } from 'antd'
import { FC } from 'react'
import { FeedCardOwner } from 'entities/feed/ui/feedCardOwner'
import { FeedCardWinner } from 'entities/feed/ui/feedCardWinner'
import { LinkOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { RewardSchema } from 'shared/gen'
import s from './FeedCard.module.css'
import { useQuery } from 'react-query'
import { feedApi } from '../../../api/feed.api'
import { userApi } from 'entities/user/api/user.api'

const FeedCard: FC<RewardSchema> = (props) => {


    const { data, isLoading } = useQuery({
        queryKey: feedApi.qkGetIssueData('repos' + new URL(props.html_url).pathname),
        queryFn: () => feedApi.getIssueData('repos' + new URL(props.html_url).pathname)
    })

    return (
        <Card
            bordered={false}
            className={`${s.card} ${userApi.getUserId() === props.winner_id ? s.green : ''}`}
        >
            <Typography
                className="opacity50"
                style={{ textAlign: 'center' }}>
                publish: {new Date(props.created_at).toLocaleString()}
            </Typography>
            <Flex justify="space-between" align="center">
                <FeedCardOwner
                    name={data?.user.login}
                    html_url={data?.user.html_url}
                    image_url={data?.user.avatar_url}
                />
                <FeedCardWinner winner_id={props.winner_id} />
            </Flex>
            <Typography.Title level={4}>{isLoading ? 'Loading...' : data?.title}</Typography.Title>
            <Flex justify="space-between" align="center">
                <Flex gap="small" align="center">
                    <Typography className="opacity50">issue link:</Typography>
                    <Link to={props.html_url} target="_blank">
                        <Flex gap="small" align="center">
                            <LinkOutlined />
                            <Typography className={s.link}>{props.html_url}</Typography>
                        </Flex>
                    </Link>
                </Flex>
                <Flex gap="small" align="center">
                    <Typography className="opacity50">prize:</Typography>
                    <Typography.Title style={{ margin: '0' }} level={4}>$ {props.reward_amount}</Typography.Title>
                </Flex>
            </Flex>
        </Card>
    )
}
export { FeedCard }