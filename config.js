/*
        -NOTE-
   -SCRIPT KOXAC VIP
   -SCRIPT FROM DEV ALWI
   -JANGAN DIJUAL
   -TIDAK BOLEH DISEBAR
   -ANTI RIAL 5HARI DEK
  
-----╔╗╔═╦═══╦═╗╔═╦═══╦═══╗
----║║║╔╣╔═╗╠╗╚╝╔╣╔═╗║╔═╗║
---║╚╝╝║║─║║╚╗╔╝║║─║║║─╚╝
--║╔╗║║║─║║╔╝╚╗║╚═╝║║─╔╗
-║║║╚╣╚═╝╠╝╔╗╚╣╔═╗║╚═╝║
╚╝╚═╩═══╩═╝╚═╩╝─╚╩═══╝
   
*/

require("./database/module")

//GLOBAL PAYMENT
global.storename = "KOXAC"
global.dana = "6285260483560"
global.qris = "https://a.top4top.io/0.jpeg"


// GLOBAL SETTING
global.owner = "62895351854098"
global.namabot = "KOXAC"
global.nomorbot = "62895351854098"
global.namaCreator = "KOXAC"
global.linkyt = "https://youtube.com/@ALWICRASH"
global.autoJoin = false
global.antilink = false
global.versisc = '999'

// DELAY JPM
global.delayjpm = 5500

// SETTING PANEL
global.apikey = 'PLTC'
global.capikey = 'PLTA'
global.domain = 'https://domain.com'
global.eggsnya = '15'
global.location = '1'



//GLOBAL THUMB

global.codeInvite = ""
global.imageurl = 'https://j.top4top.io/p_3200oajze1.jpg'
global.isLink = 'https://whatsapp.com/channel/0029VamlmzB6mYPFp59ymj1X'
global.packname = "AlwiiCrash"
global.author = "Koxac"
global.jumlah = "5"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
