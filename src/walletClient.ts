import Wallet from "./wallet";
import readline from 'readline';

let myWalletPub = "";
let myWalletPriv = "";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function menu(){
    setTimeout(() => {
        console.clear();

        if(myWalletPub)
            console.log(`you are logged as ${myWalletPub}`);
        else
            console.log(`you arent logged.`)

            console.log("1 - Create Wallet");
            console.log("2 - Recover Wallet");
            console.log("3 - Balance");
            console.log("4 - Send tx");
            
            rl.question("Choose your option: ", (anwer) => {
                switch(anwer){
                    case "1": createWallet() ;break;
                    case "2": recoverWallet() ;break;
                    case "3": console.log("Escolheu 3");break;
                    case "4": console.log("Escolheu 4");break;
                    default: {
                        console.log("Wrong option!");
                        menu();
                    }
                }
            })

    }, 1000)

}

function preMenu(){
    rl.question("press any key to continue...", () => {
        menu();
    })
}

function createWallet(){
    console.clear();
    const wallet = new Wallet();
    console.log("your new wallet:")
    console.log(wallet);

    myWalletPub = wallet.publicKey;
    myWalletPriv = wallet.privateKey;
    
    preMenu();
}




function recoverWallet(){
    console.clear();

   rl.question('what is your private key or WIF', (wifOrPrivateKey) => {
        const wallet = new Wallet(wifOrPrivateKey);
        console.log('your wallet recover');
        console.log(wallet);

        myWalletPub = wallet.publicKey;
        myWalletPriv = wallet.privateKey;

        preMenu();
   })

}

menu();
