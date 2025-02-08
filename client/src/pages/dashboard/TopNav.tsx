import { usePrivy } from "@privy-io/react-auth";
import BreadcrumbComponent from "../../shared/components/BreadCrumbs";
import FormatAddress from "../../shared/components/FormatAddress";
import Icon from "../../shared/components/Icon";
import { useNavigate, useLocation } from "react-router";
import { useEffect, useState } from "react";
import Link from "../../shared/components/Link";
import { Tooltip } from "@heroui/react";


type Props = {}

type itemTypes = {
    label: string;
    href: string;
}

function TopNav({ }: Props) {
    const { ready, authenticated, user, logout } = usePrivy();
    const [breadCrumbItems, setBreadCrumbItems] = useState<itemTypes[]>();
    const navigate = useNavigate();
    const location = useLocation();

    async function handleLogout() {
        try {
            await logout();
            navigate("/");
        } catch (error) {
            console.error(error);
        }
    }

    function breadCrumbHeader() {
        const currentPath = breadCrumbItems?.[breadCrumbItems.length - 1].label;
        let label = "";

        switch (currentPath) {
            case "home":
                label = "Dashboard";
                break;
            case "explore":
                label = "Explore Funds";
                break;
            case "create":
                label = "Create New Fund";
                break;
            case "account":
                label = "Your Funds";
                break;
            case "support":
                label = "Support";
                break;
            case "settings":
                label = "Settings";
                break;
            case "profile":
                label = "Your Profile";
                break;
        }

        return label;
    }

    useEffect(() => {
        const pathnames = location.pathname.split("/").filter((x) => x);

        if (pathnames.length > 1) {
            pathnames.map((pathname, index) => {
                if (index === 0) {
                    setBreadCrumbItems([
                        {
                            label: pathname,
                            href: `/${pathname}`,
                        },
                    ]);
                } else {
                    setBreadCrumbItems((prev) => [
                        ...(prev || []),
                        {
                            label: pathname,
                            href: `/${pathnames.slice(0, index + 1).join("/")}`,
                        },
                    ]);
                }
            });
        } else {
            setBreadCrumbItems([
                {
                    label: pathnames[0],
                    href: `/${pathnames[0]}`,
                },
            ]);
        }
    }, [location]);

    if (!ready || (ready && authenticated)) {
        return (
            <nav className="sm:pl-[8.4rem] bg-grey-0 glass flex z-20 items-center justify-between w-full p-6 border-b border-l px-7">
                <div className="min-h-14">
                    <h1 className="text-3xl capitalize font-codecPro">
                        {breadCrumbHeader() || "Dashboard"}
                    </h1>
                    <BreadcrumbComponent items={breadCrumbItems || []} />
                </div>

                <div className="text-sm flex items-center gap-2">
                    <Link to="/dashboard/faucet" className="flex border rounded-lg hover:bg-grey-100 items-center text-hover px-3 py-2">
                        <Icon name="Wallet" className="w-5" />
                    </Link>
                    <button onClick={handleLogout} className="flex text-hover  items-center gap-2 border p-2 rounded-lg hover:bg-grey-100">
                        <FormatAddress address={user?.wallet?.address || ""} />
                        <Icon name="LogOut" className="w-5" />
                    </button>
                </div>
            </nav>
        )
    } else {
        navigate("/");
        return;
    }
}

export default TopNav