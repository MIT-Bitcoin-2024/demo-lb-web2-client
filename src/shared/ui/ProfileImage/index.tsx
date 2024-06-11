import { FC } from 'react'
import s from './s.module.css'

type ProfileImageProps = {
    image_url?: string
}

const ProfileImage: FC<ProfileImageProps> = ({ image_url }) => {
    return (
        <div className={s.image} style={{ backgroundImage: `url(${image_url})` }} />
    )
}
export { ProfileImage }