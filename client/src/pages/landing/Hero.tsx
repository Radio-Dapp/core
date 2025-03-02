import { Button } from "@heroui/react";
import { useLogin } from "@privy-io/react-auth";
import { useNavigate } from "react-router";

export default function Hero() {
    const navigate = useNavigate();

    const { login } = useLogin({
        onComplete: ({ wasAlreadyAuthenticated }) => {
            if (!wasAlreadyAuthenticated) {
                navigate('/dashboard/home');
            }
        },
        onError: (error) => {
            console.log(error);
        },
    });

    return (
        <div className="relative flex flex-col items-center justify-center w-full h-screen sm:px-10 lg:px-20 px-2 antialiased rounded-md">

            <div className="absolute h-full w-full dark:bg-[radial-gradient(#e5e7eb1c_1px,transparent_1px)] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
            
            <div className="p-4 mx-auto">
                <div>
                    <div className="flex">
                        <h1 className="relative z-10 text-5xl sm:text-6xl lg:text-7xl font-sans inline font-bold animate-gradient bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent p-3 text-center w-full">
                            Instant Decentralised Managed Funds
                        </h1>
                    </div>

                    <p className="mt-2 text-lg text-center text-grey-500">
                        Meet radio, the fastest way to create, buy and sell tokenized managed funds.
                    </p>
                </div>
                <div className="relative z-10 flex flex-col items-center justify-center gap-4 mx-auto mt-6 rounded-xl sm:max-w-lg sm:flex-row">
                    <Button className="inline w-full max-w-sm border-1 border-border glass bg-primary-foreground hover:bg-grey-200" variant="bordered" color="default" size="lg">
                        Docs
                    </Button>

                    <Button className="inline w-full max-w-sm border-1 border-border glass bg-primary-foreground hover:bg-grey-200" variant="bordered" color="default" size="lg" onPress={() => login()}>
                        Get Started
                    </Button>
                </div>
            </div>
            {/* <BackgroundBeams /> */}
        </div>
    );
}
