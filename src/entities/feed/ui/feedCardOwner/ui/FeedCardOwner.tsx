import { Flex, Typography } from 'antd'
import { ProfileImage } from 'shared/ui/ProfileImage'
import { FC } from 'react'
import { SimpleUserCard } from 'shared/model/user.types'
import { Link } from 'react-router-dom'

const FeedCardOwner: FC<Partial<SimpleUserCard>> = ({ name, html_url, image_url }) => {
    return (
        <Flex vertical gap="small">
            <Typography className="opacity50">owner:</Typography>
            <Link to={html_url ?? ''} target="_blank">
                <Flex gap="small" align="center">
                    <ProfileImage image_url={image_url} />
                    <Typography>{name}</Typography>
                </Flex>
            </Link>
        </Flex>
    )
}
export { FeedCardOwner }