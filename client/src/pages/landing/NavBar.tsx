import { useTheme } from "next-themes"
// import ThemeSwitcher from "../../shared/components/ThemeSwitch"
import Link from "../../shared/components/Link";
import { Button, Tooltip } from "@heroui/react";
import { usePrivy } from "@privy-io/react-auth";
import Icon from "../../shared/components/Icon";
import { useNavigate } from "react-router";
import { useLogin } from '@privy-io/react-auth';

const navItems = [
    { name: "Features", to: "#features" },
    { name: "Pricing", to: "#pricing" },
    { name: "Blog", to: "#blog" },
    { name: "Contact", to: "#contact" },
]

type Props = {}
function NavBar({ }: Props) {
    const { theme } = useTheme();
    const { ready, authenticated } = usePrivy();
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
        <>
            {/* // Mobile Nav */}
            <div className={"fixed glass top-0 flex items-center justify-between w-full px-10 border-b md:hidden bg-primary-foreground border-border z-50"}>
                <img src={
                    theme === "light" ? "/icons/logo_light.png" : "/icons/logo_dark.png"
                } alt="logo" width={100} height={100} className="" />

                {/* Dashboard / Login */}
                <div className="flex gap-3 items-center">
                    {!ready || (ready && authenticated) ? (
                        <Tooltip content="Dashboard">
                            <span className="">
                                <Link to="/dashboard/home" className="p-2 btn-icon hover:text-primary-500 bg-grey-200">
                                    <Icon className="" name="LayoutDashboard" />
                                </Link>
                            </span>
                        </Tooltip>
                    ) : (
                        <button className="p-2 btn-icon bg-grey-200"
                            onClick={login}>
                            <Icon name="LogIn" />
                        </button>
                    )
                    }

                    <button className="p-2 btn-icon bg-grey-200">
                        <Icon name="Menu" />
                    </button>
                </div>
            </div>

            {/* // Desktop Nav */}
            <div className="fixed glass items-center justify-between hidden w-[80vw] px-10 border md:flex rounded-full top-10 bg-primary-foreground border-border left-1/2 transform -translate-x-1/2 z-10">
                <img src={
                    theme === "light" ? "/icons/logo_light.png" : "/icons/logo_dark.png"
                } alt="logo" width={100} height={100} className="rounded-xl" />

                <ul className="flex items-center justify-between max-w-[30rem]">
                    {navItems.map((item, index) => (
                        <li key={index} className="mx-2">
                            <Button variant="light" size="md">
                                <Link to={item.to}>{item.name}</Link>
                            </Button>
                        </li>
                    ))}
                </ul>

                {/* Dashboard / Login */}
                <div className="flex gap-3 items-center">
                    {!ready || (ready && authenticated) ? (
                        <Tooltip content="Dashboard">
                            <span>
                                <Link to="/dashboard/home" className="p-2 btn-icon hover:text-primary-500 bg-grey-200">
                                    <Icon className="" name="LayoutDashboard" />
                                </Link>
                            </span>
                        </Tooltip>
                    ) : (
                        <button className="p-2 btn-icon bg-grey-200"
                            onClick={login}>
                            <Icon name="LogIn" />
                        </button>
                    )
                    }
                </div>

            </div>
        </>
    )
}

export default NavBar