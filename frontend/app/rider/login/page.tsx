import RiderForm from "@/components/auth/RiderForm"
import MessageBanner from "@/components/shared/MessageBanner"

const page = () => {
    const show = false
    return (
        <div className="min-h-screen flex items-center justify-center relative">
            {show && <MessageBanner />}
            <RiderForm
                logo={true}
                left_header="Simplify your orders."
                left_paragraph="Manage your orders with ease and efficiency."
                right_header="Rider Portal"
                right_paragraph="Create Your Rider Account or Sign in to your account"
            />
        </div>
    )
}

export default page