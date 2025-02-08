import { Hash } from "viem";
import web3Client from "../web3Client";

export function toHex(data: string): string {
    var result = "";
    for (var i = 0; i < data.length; i++) {
        result += data.charCodeAt(i).toString(16);
    }
    return "0x" + result.padEnd(64, "0");
}

export async function tx(
    txn: Promise<Hash>,
  ): ReturnType<typeof web3Client.getTransactionReceipt> {
    const txnHash = await txn;
  
    let receipt;
  
    return new Promise((resolve, reject) => {
      const id = setInterval(async () => {
        try {
          receipt = await web3Client.getTransactionReceipt({
            hash: txnHash,
          });
          if (receipt.status === "success") {
            clearInterval(id);
            resolve(receipt);
          }
        } catch (error) {
          clearInterval(id);
          reject(error);
        }
      }, 100);
    });
  }
  

  export function generateRandomHex(length: number): string {
    const characters = "0123456789abcdef";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }
  
  export function isFunction(obj: any) {
    return typeof obj === "function";
  }