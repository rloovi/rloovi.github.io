var web3 = new Web3();
var provider;
var accountAddresses;
var activeAccountAddr;
var network_Name;
var network_chainId;


async function connectToWallet(){
    try{
        if(!window.ethereum) throw new Error("No crypto wallet found. or your html runs locall, you must run it on server.");
        provider = new ethers.providers.Web3Provider(window.ethereum);
        accountAddresses = await provider.send('eth_requestAccounts',[]);
        activeAccountAddr = accountAddresses[0];
        var netWork = await provider.getNetwork();
        network_Name = netWork.name;
        network_chainId = netWork.chainId;
        console.log("connected!");
    }catch(err){
        console.log("Error:",err);
    }
}