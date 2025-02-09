import { usePrivy, useWallets } from "@privy-io/react-auth";

function useSignWithPrivy() {
    const wallets = useWallets();
    const { signMessage } = usePrivy();
    const activeWallet = wallets.wallets.find(wallet => wallet.linked);

    async function signWithPrivy(message: string): Promise<string> {
        if (!activeWallet) {
            throw new Error("No active wallet found");
        }

        if(activeWallet?.connectorType === "embedded") {
            // sign using embedded connector
            const { signature } = await signMessage({ message });
            return signature;
        } else {
            // sign using injected connector
            const provider = await activeWallet.getEthereumProvider();
            const signature = await provider.request({ method: "personal_sign", params: [message, activeWallet.address] })
            return signature;
        }
    }

    return { activeWallet, signWithPrivy, ready: wallets.ready };
}

export default useSignWithPrivy