"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6946],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,m=u["".concat(l,".").concat(d)]||u[d]||p[d]||o;return n?r.createElement(m,i(i({ref:t},h),{},{components:n})):r.createElement(m,i({ref:t},h))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},75925:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={id:"learn-cryptography",title:"Cryptography on Polkadot",sidebar_label:"Cryptography",description:"An overview of the cryptographic functions used in Polkadot.",keywords:["cryptography","hashing","keypair","signing","keys"],slug:"../learn-cryptography"},l=void 0,c={unversionedId:"learn/learn-cryptography",id:"learn/learn-cryptography",title:"Cryptography on Polkadot",description:"An overview of the cryptographic functions used in Polkadot.",source:"@site/../docs/learn/learn-cryptography.md",sourceDirName:"learn",slug:"/learn-cryptography",permalink:"/docs/learn-cryptography",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-cryptography.md",tags:[],version:"current",lastUpdatedBy:"getsnoopy",lastUpdatedAt:1675376848,formattedLastUpdatedAt:"Feb 2, 2023",frontMatter:{id:"learn-cryptography",title:"Cryptography on Polkadot",sidebar_label:"Cryptography",description:"An overview of the cryptographic functions used in Polkadot.",keywords:["cryptography","hashing","keypair","signing","keys"],slug:"../learn-cryptography"},sidebar:"docs",previous:{title:"Advanced Staking Concepts",permalink:"/docs/learn-staking-advanced"},next:{title:"NPoS Election Algorithms",permalink:"/docs/learn-phragmen"}},h={},u=[{value:"Hashing Algorithm",id:"hashing-algorithm",level:2},{value:"Keypairs and Signing",id:"keypairs-and-signing",level:2},{value:"Keys",id:"keys",level:2},{value:"Account Keys",id:"account-keys",level:3},{value:"&quot;Controller&quot; and &quot;Stash&quot; Keys",id:"controller-and-stash-keys",level:3},{value:"Session Keys",id:"session-keys",level:3},{value:"FAQ about Keys",id:"faq-about-keys",level:2},{value:"Why was <code>ed25519</code> selected over <code>secp256k1</code>?",id:"why-was-ed25519-selected-over-secp256k1",level:3},{value:"What is <code>sr25519</code> and where did it come from?",id:"what-is-sr25519-and-where-did-it-come-from",level:3},{value:"Are BLS signatures used in Polkadot?",id:"are-bls-signatures-used-in-polkadot",level:3},{value:"Resources",id:"resources",level:2},{value:"Appendix A: On the security of curves",id:"appendix-a-on-the-security-of-curves",level:2}],p={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This is a high-level overview of the cryptography used in Polkadot. It assumes that you have some\nknowledge about cryptographic primitives that are generally used in blockchains such as hashes,\nelliptic curve cryptography (ECC), and public-private keypairs."),(0,o.kt)("p",null,"For detailed descriptions on the cryptography used in Polkadot please see the more advanced\n",(0,o.kt)("a",{parentName:"p",href:"https://research.web3.foundation"},"research wiki"),"."),(0,o.kt)("h2",{id:"hashing-algorithm"},"Hashing Algorithm"),(0,o.kt)("p",null,"The hashing algorithm used in Polkadot is\n",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/BLAKE_(hash_function)#BLAKE2"},"Blake2b"),". Blake2 is considered to be\na very fast cryptographic hash function that is also used in the cryptocurrency\n",(0,o.kt)("a",{parentName:"p",href:"https://z.cash"},"Zcash"),"."),(0,o.kt)("h2",{id:"keypairs-and-signing"},"Keypairs and Signing"),(0,o.kt)("p",null,'Polkadot uses Schnorrkel/Ristretto x25519 ("sr25519") as its key derivation and signing algorithm.'),(0,o.kt)("p",null,"Sr25519 is based on the same underlying ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Curve25519"},"Curve25519")," as\nits EdDSA counterpart, ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/EdDSA#Ed25519"},"Ed25519"),". However, it uses\nSchnorr signatures instead of the EdDSA scheme. Schnorr signatures bring some noticeable benefits\nover the ECDSA/EdDSA schemes. For one, it is more efficient and still retains the same feature set\nand security assumptions. Additionally, it allows for native multisignature through\n",(0,o.kt)("a",{parentName:"p",href:"https://bitcoincore.org/en/2017/03/23/schnorr-signature-aggregation/"},"signature aggregation"),"."),(0,o.kt)("p",null,"The names Schnorrkel and Ristretto come from the two Rust libraries that implement this scheme, the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/w3f/schnorrkel"},"Schnorrkel")," library for Schnorr signatures and the\n",(0,o.kt)("a",{parentName:"p",href:"https://ristretto.group/ristretto.html"},"Ristretto")," library that makes it possible to use cofactor-8\ncurves like Curve25519."),(0,o.kt)("h2",{id:"keys"},"Keys"),(0,o.kt)("p",null,"Public and private keys are an important aspect of most crypto-systems and an essential component\nthat enables blockchains like Polkadot to\nexist."),(0,o.kt)("h3",{id:"account-keys"},"Account Keys"),(0,o.kt)("p",null,"Account keys are keys that are meant to control funds. They can be either:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The vanilla ",(0,o.kt)("inlineCode",{parentName:"li"},"ed25519")," implementation using Schnorr signatures."),(0,o.kt)("li",{parentName:"ul"},"The Schnorrkel/Ristretto ",(0,o.kt)("inlineCode",{parentName:"li"},"sr25519")," variant using Schnorr signatures."),(0,o.kt)("li",{parentName:"ul"},"ECDSA signatures on secp256k1")),(0,o.kt)("p",null,"There are no differences in security between ",(0,o.kt)("inlineCode",{parentName:"p"},"ed25519")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"sr25519")," for simple signatures. We\nexpect ",(0,o.kt)("inlineCode",{parentName:"p"},"ed25519")," to be much better supported by commercial HSMs for the foreseeable future. At the\nsame time, ",(0,o.kt)("inlineCode",{parentName:"p"},"sr25519")," makes implementing more complex protocols safer. In particular, ",(0,o.kt)("inlineCode",{parentName:"p"},"sr25519")," comes\nwith safer version of many protocols like HDKD common in the Bitcoin and Ethereum ecosystem."),(0,o.kt)("h3",{id:"controller-and-stash-keys"},'"Controller" and "Stash" Keys'),(0,o.kt)("p",null,'When we talk about "controller" and "stash" keys, we usually talk about them in the context of\nrunning a validator or nominating, but they are useful concepts for all users to know. Both keys are\ntypes of account keys. They are distinguished by their intended use, not by an underlying\ncryptographic difference. All the info mentioned in the parent section applies to these keys. When\ncreating new controller or stash keys, all cryptography supported by account keys are an available\noption.'),(0,o.kt)("p",null,"The controller key is a semi-online key that will be in the direct control of a user, and used to\nsubmit manual extrinsics. For validators or nominators, this means that the controller key will be\nused to start or stop validating or nominating. Controller keys should hold some\nDOT to pay for fees, but they should not be used\nto hold huge amounts or life savings. Since they will be exposed to the internet with relative\nfrequency, they should be treated carefully and occasionally replaced with new ones."),(0,o.kt)("p",null,"The stash key is a key that will, in most cases, be a cold wallet, existing on a piece of paper in a\nsafe or protected by layers of hardware security. It should rarely, if ever, be exposed to the\ninternet or used to submit extrinsics. The stash key is intended to hold a large amount of funds. It\nshould be thought of as a saving's account at a bank, which ideally is only ever touched in urgent\nconditions. Or, perhaps a more apt metaphor is to think of it as buried treasure, hidden on some\nrandom island and only known by the pirate who originally hid it."),(0,o.kt)("p",null,"Since the stash key is kept offline, it must be set to have its funds bonded to a particular\ncontroller. For non-spending actions, the controller has the funds of the stash behind it. For\nexample, in nominating, staking, or voting, the controller can indicate its preference with the\nweight of the stash. It will never be able to actually move or claim the funds in the stash key.\nHowever, if someone does obtain your controller key, they could use it for slashable behavior, so\nyou should still protect it and change it regularly."),(0,o.kt)("h3",{id:"session-keys"},"Session Keys"),(0,o.kt)("p",null,"Session keys are hot keys that must be kept online by a validator to perform network operations.\nSession keys are typically generated in the client, although they don't have to be. They are ",(0,o.kt)("em",{parentName:"p"},"not"),"\nmeant to control funds and should only be used for their intended purpose. They can be changed\nregularly; your controller only need create a certificate by signing a session public key and\nbroadcast this certificate via an extrinsic."),(0,o.kt)("p",null,"Polkadot uses six session keys:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Authority Discovery: sr25519"),(0,o.kt)("li",{parentName:"ul"},"GRANDPA: ed25519"),(0,o.kt)("li",{parentName:"ul"},"BABE: sr25519"),(0,o.kt)("li",{parentName:"ul"},"I'm Online: sr25519"),(0,o.kt)("li",{parentName:"ul"},"Parachain Assignment: sr25519"),(0,o.kt)("li",{parentName:"ul"},"Parachain Validator: ed25519")),(0,o.kt)("p",null,"BABE requires keys suitable for use in a ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-randomness/#vrfs"},"Verifiable Random Function")," as\nwell as for digital signatures. Sr25519 keys have both capabilities and so are used for BABE."),(0,o.kt)("p",null,"In the future, we plan to use a BLS key for GRANDPA because it allows for more efficient signature\naggregation."),(0,o.kt)("h2",{id:"faq-about-keys"},"FAQ about Keys"),(0,o.kt)("h3",{id:"why-was-ed25519-selected-over-secp256k1"},"Why was ",(0,o.kt)("inlineCode",{parentName:"h3"},"ed25519")," selected over ",(0,o.kt)("inlineCode",{parentName:"h3"},"secp256k1"),"?"),(0,o.kt)("p",null,"The original key derivation cryptography that was implemented for\nPolkadot and Substrate chains was ",(0,o.kt)("inlineCode",{parentName:"p"},"ed25519"),",\nwhich is a Schnorr signature algorithm implemented over the Edward's Curve 25519 (so named due to\nthe parameters of the curve equation)."),(0,o.kt)("p",null,"Most cryptocurrencies, including Bitcoin and Ethereum, currently use ECDSA signatures on the\nsecp256k1 curve. This curve is considered much more secure than NIST curves, which\n",(0,o.kt)("a",{parentName:"p",href:"#appendix-a-on-the-security-of-curves"},"have possible backdoors from the NSA"),". The Curve25519 is\nconsidered possibly ",(0,o.kt)("em",{parentName:"p"},"even more")," secure than this one and allows for easier implementation of Schnorr\nsignatures. A recent patent expiration on it has made it the preferred choice for use in\nPolkadot."),(0,o.kt)("p",null,"The choice of using Schnorr signatures over using ECDSA is not so cut and dried. Jeff Burdges (a Web3\nresearcher) provides additional details on the decision in this\n",(0,o.kt)("a",{parentName:"p",href:"https://research.web3.foundation/en/latest/polkadot/keys/1-accounts.html"},"research post")," on the\ntopic:"),(0,o.kt)("admonition",{title:"Choosing Schnorr signatures over ECDSA signatures",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"There is one sacrifice we make by choosing Schnorr signatures over ECDSA signatures for account\nkeys: Both require 64 bytes, but only ECDSA signatures communicate their public key. There are\nobsolete Schnorr variants that support recovering the public key from a signature, but they break\nimportant functionality like hierarchical deterministic key derivation. In consequence, Schnorr\nsignatures often take an extra 32 bytes for the public key.")),(0,o.kt)("p",null,"But ultimately the benefits of using Schnorr signatures outweigh the tradeoffs, and future\noptimizations may resolve the inefficiencies pointed out in the quote above."),(0,o.kt)("h3",{id:"what-is-sr25519-and-where-did-it-come-from"},"What is ",(0,o.kt)("inlineCode",{parentName:"h3"},"sr25519")," and where did it come from?"),(0,o.kt)("p",null,"Some context: The Schnorr signatures over the Twisted Edward's Curve25519 are considered secure,\nhowever Ed25519 has not been completely devoid of its bugs. Most notably,\n",(0,o.kt)("a",{parentName:"p",href:"https://www.getmonero.org/2017/05/17/disclosure-of-a-major-bug-in-cryptonote-based-currencies.html"},"Monero and all other CryptoNote currencies"),"\nwere vulnerable to a double spend exploit that could have potentially led to undetected, infinite\ninflation."),(0,o.kt)("p",null,"These exploits were due to one peculiarity in Ed25519, which is known as its cofactor of 8. The\ncofactor of a curve is an esoteric detail that could have dire consequences for the security of\nimplementation of more complex protocols."),(0,o.kt)("p",null,"Conveniently, ",(0,o.kt)("a",{parentName:"p",href:"https://www.shiftleft.org/papers/decaf/index.xhtml"},"Mike Hamburg's Decaf paper"),"\nprovides a possible path forward to solving this potential bug. Decaf is basically a way to take\nTwisted Edward's Curves cofactor and mathematically change it with little cost to performance and\ngains to security."),(0,o.kt)("p",null,"The Decaf paper approach by the ",(0,o.kt)("a",{parentName:"p",href:"https://ristretto.group/"},"Ristretto Group")," was extended and\nimplemented in Rust to include cofactor-8 curves like the Curve25519 and makes Schnorr signatures\nover the Edward's curve more secure."),(0,o.kt)("p",null,"Web3 Foundation has implemented a Schnorr signature library using the more secure Ristretto\ncompression over the Curve25519 in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/w3f/schnorrkel"},"Schnorrkel")," repository.\nSchnorrkel implements related protocols on top of this curve compression such as HDKD, MuSig, and a\nverifiable random function (VRF). It also includes various minor improvements such as the hashing\nscheme STROBE that can theoretically process huge amounts of data with only one call across the Wasm\nboundary."),(0,o.kt)("p",null,"The implementation of Schnorr signatures that is used in Polkadot and implements the Schnorrkel\nprotocols over the Ristretto compression of the Curve25519 is known as ",(0,o.kt)("strong",{parentName:"p"},"sr25519"),"."),(0,o.kt)("h3",{id:"are-bls-signatures-used-in-polkadot"},"Are BLS signatures used in Polkadot?"),(0,o.kt)("p",null,"Not yet, but they will be. BLS signatures allow more efficient signature aggregation. Because\nGRANDPA validators are usually signing the same thing (e.g. a block), it makes sense to aggregate\nthem, which can allow for other protocol optimizations."),(0,o.kt)("admonition",{title:"From the BLS library's README",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Boneh-Lynn-Shacham (BLS) signatures have slow signing, very slow verification, require slow and much\nless secure pairing friendly curves, and tend towards dangerous malleability. Yet, BLS permits a\ndiverse array of signature aggregation options far beyond any other known signature scheme, which\nmakes BLS a preferred scheme for voting in consensus algorithms and for threshold signatures.")),(0,o.kt)("p",null,"Even though Schnorr signatures allow for signature aggregation, BLS signatures are much more\nefficient in some fashions. For this reason it will be one of the session keys that will be used by\nvalidators on the Polkadot network and critical to the GRANDPA finality gadget."),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://web.archive.org/web/20210513183118/https://forum.w3f.community/t/key-recovery-attack-on-bip32-ed25519/44"},"Key discovery attack on BIP32-Ed25519")," -\nArchive of forum post detailing a potential attack on BIP32-Ed25519. A motivation for transition\nto the sr25519 variant."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://research.web3.foundation/en/latest/polkadot/keys/index.html"},"Account signatures and keys in Polkadot")," -\nResearch post by Web3 researcher Jeff Burdges."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://bitcoin.stackexchange.com/questions/57965/are-schnorr-signatures-quantum-computer-resistant/57977#57977"},"Are Schnorr signatures quantum computer resistant?"))),(0,o.kt)("h2",{id:"appendix-a-on-the-security-of-curves"},"Appendix A: On the security of curves"),(0,o.kt)("admonition",{title:"From the",type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"https://git.libssh.org/projects/libssh.git/tree/doc/curve25519-sha256@libssh.org.txt#n10"},"Introduction of Curve25519"),"\ninto ",(0,o.kt)("inlineCode",{parentName:"p"},"libssl")),(0,o.kt)("p",{parentName:"admonition"},"The reason is the following: During summer of 2013, revelations from ex- consultant at ","[the]"," NSA\nEdward Snowden gave proof that ","[the]"," NSA willingly inserts backdoors into software, hardware\ncomponents and published standards. While it is still believed that the mathematics behind ECC\n(Elliptic-curve cryptography) are still sound and solid, some people (including Bruce Schneier\n","[SCHNEIER]","), showed their lack of confidence in NIST-published curves such as nistp256, nistp384,\nnistp521, for which constant parameters (including the generator point) are defined without\nexplanation. It is also believed that ","[the]"," NSA had a word to say in their definition. These curves\nare not the most secure or fastest possible for their key sizes ","[DJB]",", and researchers think it is\npossible that NSA have ways of cracking NIST curves. It is also interesting to note that SSH belongs\nto the list of protocols the NSA claims to be able to eavesdrop. Having a secure replacement would\nmake passive attacks much harder if such a backdoor exists."),(0,o.kt)("p",{parentName:"admonition"},"However an alternative exists in the form of Curve25519. This algorithm has been proposed in 2006 by\nDJB ","[Curve25519]",". Its main strengths are its speed, its constant-time run time (and resistance\nagainst side-channel attacks), and its lack of nebulous hard-coded constants.")))}d.isMDXComponent=!0}}]);