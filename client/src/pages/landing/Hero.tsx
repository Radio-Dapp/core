import { Button } from "@heroui/react";
import { BackgroundBeams } from "../../shared/components/ui/bg-beams";

export default function Hero() {
    return (
        <div className="h-[40rem] w-full rounded-md relative flex flex-col items-center justify-center antialiased px-10">
            <div className="mx-auto p-4">
                <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
                    Create a fund in five minutes..
                </h1>
                <p></p>
                <div className="text-grey-500 mx-auto my-2 text-md text-center relative z-10">
                    <p className="">
                    Meet radio, the fastest way to create, buy and sell managed funds.
                    </p>
                    
                <Button className="mt-6 w-full max-w-sm" variant="flat" color="default" size="lg">
                    Sign up to get started
                </Button>
                </div>
            </div>
            <BackgroundBeams />
        </div>
    );
}
