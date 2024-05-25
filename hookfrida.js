// let authAddress = DebugSymbol.findFunctionsMatching("authenticate")[0];


// fonksiyonun adresini bul
let authAddress = DebugSymbol.fromName("authenticate").address;
console.log("authenticate() adresi -> " + authAddress)

// fonksiyon yapisini (signature) tanimlayarak NativeFunction tanimla
let authFunction = new NativeFunction(authAddress, 'void', []);

// fonksiyonu tetikle
authFunction();
console.log("authenticate() adresi tetiklendi..");




// let chkAddress = DebugSymbol.fromName("checkCredentials").address;
// console.log("checkCredentials() address -> " + chkAddress)

// let chkPtr = new NativeFunction(chkAddress, "pointer", ["pointer"]);
// console.log("checkCredentials pointer -> " + chkPtr)

// Interceptor.attach(chkAddress,
//     {
//         onEnter: function(args){
//             console.log("checkCredentials invoked...")
//             console.log("arg0 -> " + args[0].readString())
//         },
//         onLeave(retval){
//             console.log(retval)
//         }
//     }
// )