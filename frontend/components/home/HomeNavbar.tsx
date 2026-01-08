import Link from "next/link"

const HomeNavbar = () => {
    return (
        <nav className="flex space-x-10 py-4 items-center shadow-4xl bg-white sticky top-0 z-50">
            <div className="flex-1 mt-2">
                <h1 className="text-2xl ml-4">Logo</h1>
            </div>
            <div className="flex relative border rounded-r border-gray-500 rounded-l mr-4">
                <input type="search" name="" id=""
                    placeholder="🔍Search..."
                    className="bg-white text-black rounded  outline-none px-2 py-3 font-bold" />
                <button className="bg-gray-400 px-2 py-3 absolute hover:cursor-pointer rounded-r right-0 hover:bg-gray-500">🔎</button>
            </div>
            <div className="flex mr-4 mt-2 items-center gap-4">
                <ul className="flex gap-4 text-xl hover:cursor-pointer">
                    <li className="hover:underline">Home</li>
                    <li className="hover:underline ">About</li>
                   
                        <li className="hover:underline ">
                             <Link href="/rider/login">Login</Link>
                        </li>
                    
                </ul>
                <div className="flex gap-2 text-xl">
                    <button className="bg-blue-500 rounded hover:bg-blue-300 hover:cursor-pointer hover:transition-all px-4 py-2">Sign Up</button>
                    <button className="border border-blue-500 px-4 rounded relative hover:cursor-pointer hover:border-blue-200">🛒
                        <span className="bg-red-500 px-2 text-lg absolute rounded-full -top-2 -right-2">1</span>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default HomeNavbar