import tokenAbi from "./tokenAbi.json";
import stakingAbi from "./stakingAbi.json";
import { tokenAddress, stakingAddress } from "./environment";
import { readContract, writeContract } from "wagmi/actions";
import { waitForTransaction } from "@wagmi/core";

// const chainId = 97;

export const tokenReadFunction = async (functionName, args) => {
  const data = await readContract({
    address: tokenAddress,
    abi: tokenAbi,
    functionName,
    args,
  });
  return data;
};

export const stakingReadFunction = async (functionName, args) => {
  const data = await readContract({
    address: stakingAddress,
    abi: stakingAbi,
    functionName,
    args,
  });
  return data;
};

/// write functions
export const tokenWriteFunction = async (functionName, args) => {
  const { hash } = await writeContract({
    address: tokenAddress,
    abi: tokenAbi,
    functionName,
    args,
  });
  const receipt = await waitForTransaction({ hash });
  return receipt;
};

export const stakingWriteFunction = async (functionName, args, value) => {
  const { hash } = await writeContract({
    address: stakingAddress,
    abi: stakingAbi,
    functionName,
    args,
    value,
  });
  const receipt = await waitForTransaction({ hash });
  return receipt;
};
