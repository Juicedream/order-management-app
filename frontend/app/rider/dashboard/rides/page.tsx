
import Link from "next/link";
import { FaEye, FaSearch } from "react-icons/fa";

const allRides = ["Last 7 days", "Last 14 days", "Last 28 days", "Last Month"];

const allRidesHistory = [
  {
    id: 1,
    dName: "Abiodun",
    dVehicle: "Toyota Rav4",
    pickup: "Lekki Phase 1",
    destination: "Awoyaya",
    tripStatus: "Completed",
  },
  {
    id: 2,
    dName: "John Doe",
    dVehicle: "LagRide Car",
    pickup: "Dangote Refineries",
    destination: "NNPC HO",
    tripStatus: "Pending",
  },
  {
    id: 3,
    dName: "Rachel",
    dVehicle: "Lexus 2024",
    pickup: "Ikeja",
    destination: "Redemption Camp",
    tripStatus: "Completed",
  },
  {
    id: 4,
    dName: "Michael",
    dVehicle: "Suzuki Alto",
    pickup: "Majek",
    destination: "Digital Labs",
    tripStatus: "Cancelled",
  },
];

const page = () => {
  return (
    <div className="bg-white w-full h-screen flex flex-col rounded-md">
      {/*  */}
      <div className="bg-slate-900 px-2 w-full border-b border-slate-400 lg:h-[60px] flex lg:flex-row  md:flex-col md:h-[200px] md:py-2 justify-between items-center rounded-md shadow-lg shadow-slate-100 text-slate-100">
        <h1 className="text-xl font-bold">Your Ride History</h1>

        <select
          name=""
          id=""
          className="outline-none border border-slate-700 shadow-sm shadow-slate-200 rounded-md text-md font-semibold py-2 px-8 text-center bg-slate-900"
        >
          <option value="">Select History</option>
          <option value="all rides">All Rides</option>
          {allRides.map((ride, index) => (
            <option key={index} value={ride.toLowerCase()}>
              {ride}
            </option>
          ))}
        </select>
        <div className="flex relative items-center">
          <input
            type="search"
            name=""
            id=""
            placeholder="Search here"
            className="border-b border-slate-200 outline-none text-slate-300"
          />
          <FaSearch className="absolute -right-6 text-slate-400 hover:text-slate-200 cursor-pointer" />
        </div>
        <div className="md:flex gap-2">
          <div className="text-md font-medium flex gap-2 border border-slate-500 px-2 py-2 rounded-md shadow-sm shadow-slate-300 text-shadow-slate-700 hover:scale-102 hover:cursor-pointer mx-2">
            <label htmlFor="completed">🟢Completed</label>
            <input type="checkbox" name="completed" id="completed" />
          </div>
          <div className="text-md font-medium flex gap-2 border border-slate-500 px-2 py-2 rounded-md shadow-sm shadow-slate-300 text-shadow-slate-700 hover:scale-102 hover:cursor-pointer mx-2">
            <label htmlFor="pending">🔵Pending</label>
            <input type="checkbox" name="pending" id="pending" />
          </div>
          <div className="text-md font-medium flex gap-2 border border-slate-700 px-2 py-2 rounded-md shadow-sm shadow-slate-300 text-shadow-slate-700 hover:scale-102 hover:cursor-pointer mx-2">
            <label htmlFor="cancelled">❌Cancelled</label>
            <input type="checkbox" name="cancelled" id="cancelled" />
          </div>
        </div>
      </div>

      {/* table */}
      <div className="flex flex-col w-full mt-4 px-8">
        <h2 className="font-semibold text-lg">All Rides</h2>
        <table className="text-left">
          <caption className="mb-4 uppercase text-slate-300 text-2xl">
            History
          </caption>
          <thead className="border-b border-slate-500">
            <tr>
              <th>S/N</th>
              <th>Driver&apos;s Name</th>
              <th>Driver&apos;s Vehicle</th>
              <th>Pickup</th>
              <th>Destination</th>
              <th>Trip Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {allRidesHistory.map((history) => (
              <tr
                key={history.id}
                className="border-b mb-4 border-slate-500 mx-2"
              >
                <td>{history.id}</td>
                <td>{history.dName}</td>
                <td>{history.dVehicle}</td>
                <td>{history.pickup}</td>
                <td>{history.destination}</td>
                <td
                  className={`
                  ${
                    history.tripStatus.toLowerCase() === "completed" &&
                    "text-green-600"
                  }
                  ${
                    history.tripStatus.toLowerCase() === "pending" &&
                    "text-blue-600"
                  }
                  ${
                    history.tripStatus.toLowerCase() === "cancelled" &&
                    "text-red-600"
                  }`}
                >
                  {history.tripStatus}
                </td>
                <td className="md:flex md:justify-center lg:text-left">
                <Link href={`/rider/dashboard/rides/${history.id}`}>
                      <FaEye className="text-xl hover:text-slate-400 hover:cursor-pointer" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
