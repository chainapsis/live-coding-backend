import { Hash } from "@keplr-wallet/crypto"

const toSHA256 = (str : string) : string => {
    const hash = Hash.keccak256(new TextEncoder().encode(str));
    return Buffer.from(hash).toString("hex"); ;
}

