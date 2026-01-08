
import { IoCloseCircleOutline } from 'react-icons/io5'

const MessageBanner = () => {
    return (
        <div className="absolute top-0 w-full h-15 bg-blue-300 mt-1 rounded-xl flex justify-between items-center px-8">
            <p className="text-lg text-gray-500">Verify Your Email, Check your mail inbox or spam folder</p>
            <span>
                <IoCloseCircleOutline className="text-2xl text-gray-500 hover:text-gray-600 cursor-pointer" />
            </span>
        </div>
    )
}

export default MessageBanner