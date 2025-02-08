import { Alert, AlertProps, Button } from "@heroui/react";
import { cn } from "../../shared/lib/tailwind";

interface Props extends AlertProps {
    buttonText?: string;
    onClick?: () => void;
}

export default function DescriptionAlert(props: Props) {
    return (
        <Alert
            color={props.color || "primary"}
            title={props.title}
            variant={props.variant || "bordered"}
            classNames={{
                ...props.classNames,
                base: cn(
                    "bg-grey-100 shadow-sm",
                    "border-1 border-grey-300/70",
                    "relative before:content-[''] rounded-sm before:absolute before:z-10",
                ),
                mainWrapper: cn("pt-1"),
                iconWrapper: cn("dark:bg-transparent"),
            }}
            {...props}
        >
            <div className="flex items-center gap-2 mt-3">
                <Button
                    className="bg-grey-100 text-grey-700 font-medium border-[0.5px] shadow-small hover:bg-grey-200"
                    size="sm"
                    variant="bordered"
                    onPress={props.onClick}
                >
                    {props.buttonText || "View documentation"}
                </Button>
            </div>
        </Alert>
    );
}