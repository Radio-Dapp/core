import { Button, Input } from "@heroui/react";
import Sidebar from "../Sidebar";
import TopNav from "../TopNav";

export default function Faucet() {
  return (
    <div className="relative flex w-full overflow-y-hidden min-h-screen bg-grey-50">
      <Sidebar />

      <div className="w-full">
        <TopNav />

        <section
          className="pt-[7rem] sm:ml-[6.5rem] flex flex-col gap-2 p-6 px-7 relative h-full text-grey-900"
          style={{
            position: "relative",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          {/* Background Layer */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0, 0, 190, 0.3), rgba(0, 255, 190, 0.3)), url('/images/green-bg.gif')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: 0.2,
            }}
          />

          {/* Backdrop Blur Layer */}
          <div
            className="absolute inset-0 backdrop-blur-xl"
            style={{
              backgroundColor: "rgba(0, 255, 0, 0.005)",
            }}
          />
          <div className="relative z-10 flex flex-col items-center py-16">
            <h1 className="text-4xl tracking-wider font-medium text-grey-950">The Official Radio Faucet</h1>
            <p className="pt-4 text-grey-600">
              You can request

              <span className="text-primary px-1 ">
                100 FM
              </span>
              tokens for the Coston testnet per address in

              <span className="text-primary pl-1">
                24 hours
              </span>.
            </p>
            <Input className="mt-10 max-w-sm" variant="bordered" label="Address" />
            <Button className="mt-5 rounded-sm font-semibold" variant="shadow" color="primary">
              Claim
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
