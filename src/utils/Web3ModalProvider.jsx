/* eslint-disable react/prop-types */
import { bsc } from "wagmi/chains";
import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";
import { WagmiConfig } from "wagmi";
import { ConectivityProvider } from "./utils";

const projectId = "cba73ada547c01c1a64d7725fb732495";

const chains = [bsc];

const wagmiConfig = defaultWagmiConfig({ chains, projectId });

createWeb3Modal({
  wagmiConfig,
  projectId,
  chains,
  themeMode: "dark",
});

export function Web3ModalProvider({ children }) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <ConectivityProvider>{children}</ConectivityProvider>
    </WagmiConfig>
  );
}
