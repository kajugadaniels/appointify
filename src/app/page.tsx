import { Button } from "@/components/ui/button"
import { SignedIn, SignedOut, SignOutButton, SignUpButton } from "@clerk/nextjs"

const Home = () => {
    return (
        <div>
            <SignedOut>
                <SignUpButton mode="modal">
                    <Button>Sign Up</Button>
                </SignUpButton>
            </SignedOut>

            <SignedIn>
                <SignOutButton>
                    <Button>Sign Out</Button>
                </SignOutButton>
            </SignedIn>
        </div>
    )
}

export default Home
