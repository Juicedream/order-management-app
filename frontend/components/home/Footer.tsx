

const Footer = () => {
  return (
    <div className="w-full bg-white h-40 flex flex-col relative">
        <hr className="border-gray-300 mb-4" />
        <div className="grid grid-cols-3 items-center justify-center lg:grid-cols-4 px-8">
            <p className="text-2xl text-gray-600 mt-4">LOGO</p>
            <p className="text-xl text-gray-600 mt-4">Home</p>
            <p className="text-xl text-gray-600 mt-4">About</p>
            <p className="text-sm text-gray-600 mt-4">A simple solution</p>
        </div>
        <div className="text-center">
            <p className="text-gray-500 mt-4 bottom-0 right-0 left-0 absolute">© 2024 Order Management App. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer