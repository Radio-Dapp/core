import { Button } from "@heroui/react";
import { BackgroundBeams } from "../../shared/components/ui/bg-beams";
import { GlowingEffect } from "../../shared/components/ui/glowing";

export default function Hero() {
    return (
        <div className="h-[40rem] w-full rounded-md relative flex flex-col items-center justify-center antialiased px-10">
            <div className="p-4 mx-auto">
                <div>
                    <div className="flex">
                        <h1 className="relative z-10 text-5xl sm:text-6xl lg:text-7xl font-sans inline font-bold animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent text-center w-full">
                            Create a fund in five minutes..
                        </h1>
                    </div>

                    <p className="mt-4 text-lg text-center text-grey-500">
                        Meet radio, the fastest way to create, buy and sell managed funds.
                    </p>
                </div>
                <div className="flex rounded-xl mt-6 flex-col sm:max-w-lg sm:flex-row gap-4 items-center justify-center relative z-10 mx-auto">
                    <Button className="inline w-full glass max-w-sm bg-primary-foreground hover:bg-grey-100" variant="bordered" color="default" size="lg">
                        Docs
                    </Button>

                    <GlowingEffect
                        glow={true}
                        disabled={false}
                        proximity={64}
                        inactiveZone={0.01}
                    />

                    <Button className="inline w-full glass max-w-sm bg-primary-foreground hover:bg-grey-100" variant="bordered" color="default" size="lg">
                        Sign up
                    </Button>
                </div>
            </div>
            <BackgroundBeams />
        </div>
    );
}
