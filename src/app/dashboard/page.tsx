import WelcomeSection from '@/components/dashboard/WelcomeSection'
import Navbar from '@/components/Navbar'

const Dashboard = () => {
    return (
        <>
            <Navbar />

            <div className="max-w-7xl mx-auto px-6 py-8 pt-24">
                <WelcomeSection />
            </div>
        </>
    )
}

export default Dashboard
