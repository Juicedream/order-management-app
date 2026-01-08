import DriverForm from '@/components/auth/DriverForm'


const page = () => {
  return (
        <div className="min-h-screen flex items-center justify-center">
            <DriverForm
                logo={false}
                left_header="Join the fleet."
                left_paragraph="Make your orders make sense"
                right_header="Driver Portal"
                right_paragraph="Create Your Driver Account or Sign in to your account"
            />
    </div>
  )
}

export default page