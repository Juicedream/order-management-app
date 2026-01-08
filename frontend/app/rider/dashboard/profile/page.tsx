import Image from "next/image";
import { FaEdit, FaUserEdit } from "react-icons/fa";

const ProfilePage = () => {
  return (
    <div className="h-screen">
      <div className="flex md:flex-col lg:flex-row">
        {/* sidebar */}
        <div className="lg:w-2/12">
          <div className="bg-white px-2 py-2 w-full lg:h-screen rounded-md">
            <ul className="flex md:justify-around font-semibold md:flex-row lg:flex-col lg:items-center lg:gap-y-20 lg:justify-center">
              <li>About</li>
              <li>Settings</li>
              <li>Authentication</li>
              <li>Payment Method</li>
            </ul>
          </div>
        </div>
        {/* main part */}
        <div className="lg:w-10/12 md:mt-4 lg:mt-0 lg:px-8 md:px-4">
          <div className="flex lg:flex-row justify-between md:flex-col-reverse lg:w-full md:gap-4 md:items-center">
            <div className="bg-white h-[550px] w-[400px] lg:w-[580px] rounded-xl shadow-lg shadow-slate-700 mb-2">
              <div className="flex flex-col items-center justify-center my-4 py-2">
               <div>
                 <Image
                  src="/profile-image.svg"
                  width={300}
                  height={300}
                  alt="Profile image"
                />
               </div>
              </div>
                <div className="bg-slate-100 my-4 px-4 text-left">
                  <div className="font-semibold text-slate-700 flex w-full justify-between">
                    <p>Full Name:</p>
                    <span>Jude Nwadiogor</span>
                  </div>
                  <div className="font-semibold text-slate-700 flex w-full justify-between">
                    <p>Email:</p>
                    <span>justtry@gmail.com</span>
                  </div>
                  <div className="font-semibold text-slate-700 flex w-full justify-between">
                    <p>Age:</p>
                    <span>34</span>
                  </div>
                  <div className="font-semibold text-slate-700 flex w-full justify-between">
                    <p>Address:</p>
                    <span>This is supposed t</span>
                  </div>
                  <div className="font-semibold text-slate-700 flex w-full justify-between">
                    <p>Verified:</p>
                    <span>True</span>
                  </div>
                </div>
                <div className="w-full flex justify-center items-center">
                    <button className="text-center w-[300px] bg-slate-900 py-3 rounded-md mx-4 text-white font-semibold text-lg flex justify-center items-center gap-2 shadow-md shadow-black hover:shadow-none hover:cursor-pointer hover:bg-slate-500">
                      Edit Profile
                      <FaUserEdit />
                    </button>
                </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="bg-slate-100 h-[200px] md:w-[550px] lg:w-[700px] rounded-xl">
                
                <div className="flex justify-between items-center gap-2 w-full h-full border px-8  rounded-xl border-slate-200 shadow-md shadow-slate-400 md:text-center">
                  <div className="flex flex-col gap-2">
                    <span className="text-3xl font-bold text-center text-green-700">32</span>
                    <p className="font-semibold uppercase">Total rides completed</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-3xl font-bold text-center text-red-700">02</span>
                    <p className="font-semibold uppercase">Cancelled Rides</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-3xl font-bold text-center text-orange-700">11</span>
                    <p className="font-semibold uppercase">Reported Rides</p>
                  </div>
                </div>
              </div>
              <div className="bg-white h-[230px] md:w-[550px] lg:w-[700px] rounded-xl">

                <div className="flex justify-between items-center gap-2 w-full h-full border px-8  rounded-xl border-slate-200 shadow-md shadow-slate-400 md:text-center">
                  <div className="flex flex-col gap-2">
                    <span className="text-3xl font-bold text-center text-green-700">14</span>
                    <p className="font-semibold uppercase">Total orders completed</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-3xl font-bold text-center text-red-700">00</span>
                    <p className="font-semibold uppercase">Cancelled orders</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-3xl font-bold text-center text-orange-700">02</span>
                    <p className="font-semibold uppercase">Reported orders</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default ProfilePage;
