import threeDots from '../../assets/icons/3dots.svg'
import editIcon from '../../assets/icons/edit.svg'
import deleteIcon from '../../assets/icons/delete.svg'
import timeIcon from '../../assets/icons/time.svg'
import { getDataDifferenceFormNow } from '../../utils'
import { useAvatar } from '../../hooks/useAvatar'
import { useState } from 'react'

export default function PostHeader({ post }) {
    const [toggleActionMenu, setToggleActionMenu] = useState(false)
    const { avatarUrl } = useAvatar(post)
    return (
        <header className="flex items-center justify-between gap-4">
            {/* <!-- author info --> */}
            <div className="flex items-center gap-3">
                <img
                    className="max-w-10 max-h-10 rounded-full lg:max-h-[58px] lg:max-w-[58px]"
                    src={avatarUrl}
                    alt="avatar"
                />
                <div>
                    <h6 className="text-lg lg:text-xl">{post?.author?.name}</h6>
                    <div className="flex items-center gap-1.5">
                        <img src={timeIcon} alt="time" />
                        <span className="text-sm text-gray-400 lg:text-base"
                        >{`${getDataDifferenceFormNow(post?.createAt)}`}</span
                        >
                    </div>
                </div>
            </div>
            {/* <!-- author info ends --> */}

            {/* <!-- action dot --> */}
            <div className="relative">
                <button onClick={() => setToggleActionMenu(!toggleActionMenu)} className="flex-center h-10 w-10 rounded-full bg-black/50 hover:bg-black/80">
                    <img src={threeDots} alt="3dots of Action" />
                </button>

                {/* <!-- Action Menus Popup --> */}
                {
                    toggleActionMenu && (
                        <div className="action-modal-container">
                            <button className="action-menu-item hover:text-lwsGreen">
                                <img src={editIcon} alt="Edit" />
                                Edit
                            </button>
                            <button className="action-menu-item hover:text-red-500">
                                <img src={deleteIcon} alt="Delete" />
                                Delete
                            </button>
                        </div>
                    )
                }

            </div>
            {/* <!-- action dot ends --> */}
        </header>
    )
}
