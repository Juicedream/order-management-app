

const VerificationEmailPopup = () => {
  return (
    <div className="absolute z-50 text-black w-full h-180 top-0 left-0 flex flex-col justify-center items-center gap-4">
        <div className="bg-gray-200 h-180 w-full flex absolute top-0 left-0 ease-in-out transition-all">
            <div className="bg-gray-50 w-4/5 h-4/5 m-auto rounded-lg shadow-lg flex flex-col justify-center items-center gap-6 p-4">
                <h2 className="text-2xl font-semibold">Verify Your Email ✉️</h2>
                <p className="text-center text-gray-500">A verification email has been sent to your email address. Please check your inbox and click on the verification link to activate your account.</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">Resend Verification Email</button>
            </div>
        </div>
    </div>
  )
}

export default VerificationEmailPopup