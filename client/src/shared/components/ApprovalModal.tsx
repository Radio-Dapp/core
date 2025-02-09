import {
    Button,
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from "@heroui/react";
import { generateRandomHash } from "../lib/utils";
import useSignWithPrivy from "../hooks/useSignWithPrivy";

type Props = {
    isOpen: boolean,
    onOpenChange: () => void,
    onOpen: () => void,
}

export default function ApprovalModal({
    isOpen,
    onOpenChange,
}: Props) {
    const { signWithPrivy } = useSignWithPrivy();

    return (
        <Modal
            isDismissable={false}
            backdrop="blur"
            isKeyboardDismissDisabled={true}
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            className="bg-grey-100 border text-sm"
        >
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">Approve Transfer</ModalHeader>
                        <ModalBody>
                            <p>
                                Please approve Radio to manage USDC.e on your behalf in the next window.
                            </p>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" className="rounded-sm" variant="light" onPress={onClose}>
                                Close
                            </Button>
                            <Button variant="solid" className="rounded-sm bg-primary-700" onPress={
                                async () => {
                                    const approvalHash = generateRandomHash(32);
                                    const signature = await signWithPrivy(approvalHash);

                                    if (signature) {
                                        console.log("Signature: ", signature);
                                        onClose();
                                    } else {
                                        console.log("Failed to sign");
                                        onClose();
                                    }
                                }
                            }>
                                Sign Transaction
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    )
}