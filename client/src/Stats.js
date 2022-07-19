import Web3 from "web3";
import cryptoRootsJson from "./contracts/CryptoRoots.json";

export async function totalSupply(){
    const web3 = new Web3(window.ethereum);
    const network = cryptoRootsJson.networks[4];
    const cryptoRootsContract = new web3.eth.Contract(cryptoRootsJson.abi, network.address);
    const totalSupply = await cryptoRootsContract.methods.totalSupply().call();
    return totalSupply;
}