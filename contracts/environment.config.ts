import type * as chains from "viem/chains";
import type { Chain, Hash } from "viem";

export type EnvironmentConfig = {
  networks: {
    default: string;
    viem: (keyof typeof chains)[];
    custom: Record<string, Chain>;
  };
  accounts: Hash[];
};

const environmentConfig: EnvironmentConfig = {
  networks: {
    default: "hardhat",
    viem: ["hardhat"],
    custom: {},
  },
  accounts: [
    "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80",
    "0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d",
    "0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a",
    "0x7c852118294e51e653712a81e05800f419141751be58f605c371e15141b007a6",
  ],
};

export default environmentConfig;
