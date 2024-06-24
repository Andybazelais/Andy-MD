module.exports = async (Skyzo, m, store) => {
try {
const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const budy = (typeof m.text == 'string' ? m.text : '')
//const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : '.'
const prefix = '.'
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '' //kalau mau no prefix ganti jadi ini : const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const cmd = prefix + command
const args = body.trim().split(/ +/).slice(1)
const makeid = crypto.randomBytes(3).toString('hex')
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const text = q = args.join(" ")
const botNumber = await Skyzo.decodeJid(Skyzo.user.id)
const fs = require('fs');
if(!fs.existsSync(dbowner)) fs.writeFileSync(dbowner, '[]') 
if(!fs.existsSync(dbprem)) fs.writeFileSync(dbprem, '[]') 
let zippokun = JSON.parse(fs.readFileSync(dbowner).toString())
let zippokuy = JSON.parse(fs.readFileSync(dbprem).toString())
const isOwner = [owner+"@s.whatsapp.net", ...zippokun, botNumber].includes(m.sender);
const isPremium = [owner+"@s.whatsapp.net", ...zippokun, botNumber, ...zippokuy].includes(m.sender);
const isGroup = m.chat.endsWith('@g.us')
const senderNumber = m.sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const groupMetadata = isGroup ? await Skyzo.groupMetadata(m.key.remoteJid) : {}
let participant_bot = (isGroup ? groupMetadata.participants.find((v) => v.id == m.botNumber) : {}) || {}
let participant_sender = (isGroup ? groupMetadata.participants.find((v) => v.id == m.sender) : {}) || {}
const isBotAdmin = participant_bot?.admin !== null ? true : false
const isAdmin = participant_sender?.admin !== null ? true : false
const { runtime, getRandom, getTime, tanggal, toRupiah, telegraPh, pinterest, ucapan, generateProfilePicture, getBuffer, fetchJson } = require('./all/function.js')
const { toAudio, toPTT, toVideo, ffmpeg } = require("./all/converter.js")
const antilink = JSON.parse(fs.readFileSync('./all/database/antilink.json'))
const antilink2 = JSON.parse(fs.readFileSync('./all/database/antilink2.json'))
const contacts = JSON.parse(fs.readFileSync("./all/database/contacts.json"))
const { teksbug1 } = require("./all/database/virtex.js")
const { teksbug2 } = require("./all/database/delay.js")


if (isCmd) {
console.log(chalk.yellow.bgCyan.bold(namabot), color(`[ PESAN ]`, `blue`), color(`FROM`, `blue`), color(`${senderNumber}`, `blue`), color(`Text :`, `blue`), color(`${cmd}`, `white`))
}

if (isGroup) {
if (antilink.includes(m.chat) && isBotAdmin) {
if (!isAdmin && !isOwner && !m.fromMe) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text)) {
var gclink = (`https://chat.whatsapp.com/` + await Skyzo.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await Skyzo.sendMessage(m.chat, {text: `Gausah sharelink ngentod, mampus gw kick`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {thumbnailUrl: "https://telegra.ph/file/caa9288c34034e5bb8d28.png", title: "𝐀𝐧𝐭𝐢𝐥𝐢𝐧𝐤 𝐚𝐜𝐭𝐬 !", previewType: "PHOTO"}}}, {quoted: m})
await Skyzo.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await Skyzo.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}
}}}

if (isGroup) {
if (antilink2.includes(m.chat) && isBotAdmin) {
if (!isAdmin && !isOwner && !m.fromMe) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text)) {
var gclink = (`https://chat.whatsapp.com/` + await Skyzo.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await Skyzo.sendMessage(m.chat, {text: `🚫🔗`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {thumbnailUrl: "https://telegra.ph/file/caa9288c34034e5bb8d28.png", title: "𝐀𝐧𝐭𝐢𝐥𝐢𝐧𝐤 𝐚𝐜𝐭𝐬 !", previewType: "PHOTO"}}}, {quoted: m})
await Skyzo.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
}
}}}

const qchanel = {
key: {
remoteJid: 'status@broadcast',
fromMe: false,
participant: '0@s.whatsapp.net'
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: `120363224727390375@newsletter`,
newsletterName: `Hore`,
jpegThumbnail: "",
caption: `𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐛𝐲 ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ`,
inviteExpiration: Date.now() + 1814400000
}
}}

const qtext = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "0@s.whatsapp.net"} : {}) },'message': {extendedTextMessage: {text: body}}}

const qdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: `𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐛𝐲 ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ`, jpegThumbnail: ""}}}

const qloc = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐛𝐲 ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ`,jpegThumbnail: ""}}}

const qloc2 = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `𝐏𝐮𝐬𝐡𝐤𝐨𝐧 𝐛𝐲 ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ`,jpegThumbnail: ""}}}

const qkontak = {
key: {
participant: `0@s.whatsapp.net`,
...(botNumber ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
'contactMessage': {
'displayName': `ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=6287821239407\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
sendEphemeral: true
}}
}

let example = (teks) => {
return `\n𝗕𝘂𝗸𝗮𝗻 𝗴𝗶𝘁𝘂 𝗴𝗼𝗯𝗹𝗼𝗸
kek gini ${cmd} ${teks}\n`
}

var resize = async (image, width, height) => {
let oyy = await Jimp.read(image)
let kiyomasa = await oyy.resize(width, height).getBufferAsync(Jimp.MIME_JPEG)
return kiyomasa
}

function capital(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

const qbug = {key: {remoteJid: 'status@broadcast', fromMe: false, participant: '0@s.whatsapp.net'}, message: {listResponseMessage: {title: `Hello my friends`
}}}

switch (command) {
	case 'addown': case 'addowner': {
		if (!isOwner) return m.reply(msg.owner)
		let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
		if(!users.length || !text) return m.reply("𝗕𝘂𝗸𝗮𝗻 𝗴𝗶𝘁𝘂 𝗴𝗼𝗯𝗹𝗼𝗸\ngini .addown nomor") 
		if(users.filter(v => zippokun.includes(v)).length) return Skyzo.sendMessage(m.chat, { text: `${users.map(v => `@${v.split('@')[0]}`).join(', ')} adalah owner.`, mentions: users }, { quoted: m }) 
		zippokun = [...zippokun, ...users]
		fs.writeFileSync(dbowner, JSON.stringify(zippokun))
        m.reply('Successfully added owner by ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ') 
		}
		break;
		
		case 'delown': case 'delowner': {
			if (!isOwner) return m.reply(msg.owner)
			let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
		if(!users.length || !text) return m.reply('Tag seseorang!') 
		if(users.filter(v => !zippokun.includes(v)).length) return Skyzo.sendMessage(m.chat, { text: `${users.map(v => `@${v.split('@')[0]}`).join(', ')} belum masuk ke list owner!`, mentions: users }, { quoted: m }) 
		zippokun = zippokun.filter(v => !users.includes(v)) 
		fs.writeFileSync(dbowner, JSON.stringify(zippokun)) 
            m.reply('Successfully removed owner by ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ') 
			}
break;
        case 'listowner': case 'listown': {
 Skyzo.sendMessage(m.chat, { text: `𝐋𝐈𝐒𝐓 𝐎𝐖𝐍𝐄𝐑\n\n${zippokun.map(v => `- @${v.split('@')[0]}`).join('\n')}\n\nTotal : ${zippokun.length}`, mentions: zippokun }, { quoted: m }) 
            }
        break;
			
case 'addprem': case 'addpremium': {
			if (!isOwner) return m.reply(msg.owner)
		let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
		if(!users.length || !text) return m.reply("𝗕𝘂𝗸𝗮𝗻 𝗴𝗶𝘁𝘂 𝗴𝗼𝗯𝗹𝗼𝗸\ngini .addprem nomor") 
		if(users.filter(v => zippokuy.includes(v)).length) return Skyzo.sendMessage(m.chat, { text: `${users.map(v => `@${v.split('@')[0]}`).join(', ')} sudah masuk ke list premium!`, mentions: users }, { quoted: m }) 
		zippokuy = [...zippokuy, ...users]
		fs.writeFileSync(dbprem, JSON.stringify(zippokuy)) 
            m.reply('Successfully added premium by ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ') 
			}
			break;
			
		case 'delprem': case 'delpremium': {
			if (!isOwner) return m.reply(msg.owner)
			let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
		if(!users.length || !text) return m.reply('Tag seseorang!') 
		if(users.filter(v => !zippokuy.includes(v)).length) return Skyzo.sendMessage(m.chat, { text: `${users.map(v => `@${v.split('@')[0]}`).join(', ')} belum masuk ke list premium!`, mentions: users }, { quoted: m }) 
		zippokuy = zippokuy.filter(v => !users.includes(v)) 
		fs.writeFileSync(dbprem, JSON.stringify(zippokuy)) 
            m.reply('Successfully removed owner by ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ') 
			}
			break;
        
        case 'listprem': case 'listpremium': {
            Skyzo.sendMessage(m.chat, { text: `𝐋𝐈𝐒𝐓 𝐏𝐑𝐄𝐌𝐈𝐔𝐌\n\n${zippokuy.map(v => `- @${v.split('@')[0]}`).join('\n')}\n\nTotal : ${zippokuy.length}`, mentions: zippokuy }, { quoted: m }) 
            }
        break;
case ".verlangganteng": {
let anuan = "𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐛𝐲 𝙑𝙀𝙍𝙇𝘼𝙉𝙂𝙄𝘿"
let teksnya = `
𝐇𝐄𝐋𝐋𝐎 🙋

◦ 𝘉𝘰𝘵 𝘕𝘢𝘮𝘦 : ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ
◦ 𝘖𝘸𝘯 𝘕𝘢𝘮𝘦 : 𝙑𝙀𝙍𝙇𝘼𝙉𝙂𝙄𝘿
◦ 𝘝𝘦𝘳𝘴𝘪𝘰𝘯 : v3.0
`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender] 
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: "© ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ" 
}), 
header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fetch(global.image)}, { upload: Skyzo.waUploadToServer })) 
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": `{ "title": "𝗟𝗶𝘀𝘁 𝗠𝗲𝗻𝘂", "sections": [{ "title": "Choose one of the menu options below", "highlight_label": \"𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐛𝐲 ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ\", "rows": [{ "header": "All Menu", "title": "List All Fitur Bot", "id": ".allmenu" }, 
{ "header": "Main Menu", "title": "Main menu", "id": ".mainmenu" }, 
{ "header": "Produk Menu", "title": "Produk yang dijual owner", "id": ".produkmenu" }, 
{ "header": "Downloader", "title": "Membantu Anda dalam mengunduh", "id": ".downloadmenu" }, 
{ "header": "Converter", "title": "Melakukan konversi", "id": ".convertmenu" }, 
{ "header": "Panel Menu", "title": "Kebutuhan reseller panel", "id": ".panelmenu" },
{ "header": "Pushkontak Menu", "title": "Mulai menjalankan push kontak", "id": ".pushkontakmenu" }, 
{ "header": "Grup Menu", "title": "Fitur khusus grup", "id": ".grupmenu" }, 
{ "header": "Owner Menu", "title": "Fitur khusus 𝙑𝙀𝙍𝙇𝘼𝙉𝙂𝙄𝘿", "id": ".ownermenu" }]}]}`
}, 
{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Contact Owner\",\"url\":\"https://wa.me/${owner}\",\"merchant_url\":\"https://www.google.com\"}`
},
{ 
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Allmenu\",\"id\":\".allmenu\"}" 
}]
}) 
})} 
}}, {userJid: m.sender, quoted: qdoc}) 
await Skyzo.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "allmenu": {
let teksmenu = `
𝐀𝐋𝐋 𝐌𝐄𝐍𝐔
 
*𝗠𝗮𝗶𝗻 𝗠𝗲𝗻𝘂*
* play
* tourl
* yts
* tohd
* chatgpt
* ai
* remini
* sticker
* pinterest
* qc
  
*𝗟𝗶𝘀𝘁 𝗣𝗿𝗼𝗱𝘂𝗰𝘁*
* panel
* other
  
*𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱 𝗠𝗲𝗻𝘂*
* tiktok
* tiktokmp3
* tiktokaudio
* facebook
* ytmp3
* mediafire
  
*𝗖𝘃 𝗠𝗲𝗻𝘂*
* toaudio
* tomp3
* tovn
* toptv
* tts
* toimage
  
*𝗣𝗮𝗻𝗲𝗹 𝗠𝗲𝗻𝘂*
* addadmin
* addpanel
* addowner
* addprem
* adduser
* listserver
* listadmin
* listmember
* listowner
* listpremium
* deladmin
* delpanel
* delowner
* delprem
* delmember
  
*𝗣𝘂𝘀𝗵𝗸𝗼𝗻 𝗠𝗲𝗻𝘂*
* pushkontak
* pushkontak1
* pushkontak2
* savekontak
* savekontak2
* listgc
* idgc
* jpm
* jpm2
* jpmpolling
* jpmtesti
* jpmhidetag
* startjpm
* setteksjpm
* teksjpm

*𝗚𝗿𝗼𝘂𝗽 𝗠𝗲𝗻𝘂*
* addmember
* antilink
* antilinkV2
* hidetag
* tagall
* delete
* open
* close
* setnamagc
* setdeskgc
* setppgc
* kick
* promote
* leavegc
* leavegc2
* demote
  
*𝗢𝘄𝗻𝗲𝗿 𝗠𝗲𝗻𝘂*
* clearsession
* anticall
* autoread
* welcome
* setpppanjang
* setnamabot
* setbiobot
* japanese
* motivasi
* diriku
* tes

© ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ
`
Skyzo.sendMessage(m.chat, {text: teksmenu, mentions: [m.sender]}, {quoted: qchanel})
}
break
case "mainmenu": {
let teksmenu = `
*𝗠𝗮𝗶𝗻 𝗠𝗲𝗻𝘂*
* play
* tourl
* yts
* tohd
* chatgpt
* ai
* remini
* sticker
* pinterest
* qc

© ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ
`
Skyzo.sendMessage(m.chat, {text: teksmenu, mentions: [m.sender]}, {quoted: qchanel})
}
break
case "downloadmenu": {
let teksmenu = `
*𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱 𝗠𝗲𝗻𝘂*
* tiktok
* tiktokmp3
* tiktokaudio
* facebook
* ytmp3
* mediafire

© ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ
`
Skyzo.sendMessage(m.chat, {text: teksmenu, mentions: [m.sender]}, {quoted: qchanel})
}
break
case "produkmenu": {
let teksmenu = `
*𝗟𝗶𝘀𝘁 𝗣𝗿𝗼𝗱𝘂𝗰𝘁*
* panel
* other
`
Skyzo.sendMessage(m.chat, {text: teksmenu, mentions: [m.sender]}, {quoted: qchanel})
}
break
case "pushkontakmenu": {
let teksmenu = `
*𝗣𝘂𝘀𝗵𝗸𝗼𝗻 𝗠𝗲𝗻𝘂*
* pushkontak
* pushkontak1
* pushkontak2
* savekontak
* savekontak2
* listgc
* idgc
* jpm
* jpm2
* jpmpoll
* jpmtesti
* jpmhidetag
* startjpm
* setteksjpm
* teksjpm

© ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ
`
Skyzo.sendMessage(m.chat, {text: teksmenu, mentions: [m.sender]}, {quoted: qchanel})
}
break
case "convertmenu": {
let teksmenu = `
*𝗖𝘃 𝗠𝗲𝗻𝘂*
* toaudio
* tomp3
* tovn
* toptv
* tts
* toimage
* tourl
* s

© ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ
`
Skyzo.sendMessage(m.chat, {text: teksmenu, mentions: [m.sender]}, {quoted: qchanel})
}
break
case "panelmenu": {
let teksmenu = `
*𝗣𝗮𝗻𝗲𝗹 𝗠𝗲𝗻𝘂*
* addadmin
* addpanel
* addowner
* addprem
* adduser
* listserver
* listadmin
* listmember
* listowner
* listpremium
* deladmin
* delpanel
* delowner
* delprem
* delmember

© ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ
`
Skyzo.sendMessage(m.chat, {text: teksmenu, mentions: [m.sender]}, {quoted: qchanel})
}
break
case "grupmenu": {
let teksmenu = `
*𝗚𝗿𝗼𝘂𝗽 𝗠𝗲𝗻𝘂*
* addmember
* antilink
* antilinkV2
* hidetag
* tagall
* delete
* open/close
* setnamagc
* setdeskgc
* setppgc
* kick
* promote
* leavegc
* leavegc2
* demote

© ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ
`
Skyzo.sendMessage(m.chat, {text: teksmenu, mentions: [m.sender]}, {quoted: qchanel})
}
break
case "ownermenu": {
let teksmenu = `
*ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ 𝗠𝗲𝗻𝘂*
* clearsession
* anticall
* autoread
* welcome
* payment
* setpppanjang
* setnamabot
* setbiobot
* japanese
* motivasi
* diriku
* kamu
* hidetag
* kick
* del

© ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ
`
Skyzo.sendMessage(m.chat, {text: teksmenu, mentions: [m.sender]}, {quoted: qchanel})
}
break
case "yts": {
if(!isPremium) return m.reply('Lu ae bukan premium jembot')
if (!text) return m.reply(example("Dj Tiktok"))
await m.reply(msg.wait)
await yts(text).then(async (data) => {
if (data.all.length == 0) return m.reply(mess.error)
let teks = '\n*𝐃𝐨𝐧𝐞 𝐛𝐲 ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ 🥶*\n\n'
for (let i of data.all) {
teks += `𝗧𝗶𝘁𝗹𝗲 : ${i.title}
𝗖𝗵𝗮𝗻𝗻𝗲𝗹 : ${i.author?.name || "unknown"}
𝗗𝘂𝗿𝗮𝘁𝗶𝗼𝗻 : ${i?.timestamp || "unknown"}
𝗨𝗥𝗟 : ${i.url}\n\n`
}
m.reply(teks)
}).catch(err => m.reply(err.toString()))
}
break
case "ytmp3": case "ytdl": {
if (!text) return m.reply(example('linknya'))
if (!text.includes("https")) return m.reply("Invalid link")
if (!text.includes("youtube.com")) return m.reply("Invalid link")
m.reply(msg.wait)
var judul = `./all/tmp/${getRandom(".mp3")}`
const videoURL = text
const options = {
  quality: 'highestaudio',
  filter: 'audioonly'
}
ytdl(videoURL, options)
  .pipe(fs.createWriteStream(judul))
  .on('finish', async function () {
var ai = await yts(text)
var vid = ai.videos[0]
try {
let { title, thumbnail: thumb, timestamp, author, url } = vid
await Skyzo.sendMessage(m.chat, {audio: fs.readFileSync(judul), mimetype: 'audio/mpeg', contextInfo: {mentionedJid: [m.sender], externalAdReply: {thumbnailUrl: thumb, title: title, body: `𝗗𝘂𝗿𝗮𝘁𝗶𝗼𝗻 : ${timestamp} 𝗔𝘂𝘁𝗵𝗼𝗿 : ${author.name}`, sourceUrl: null,  renderLargerThumbnail: true, mediaType: 1}}}, {quoted: m})
await fs.unlinkSync(judul)
} catch (e) {
await Skyzo.sendMessage(m.chat, {audio: fs.readFileSync(judul), mimetype: 'audio/mpeg'}, {quoted: m})
await fs.unlinkSync(judul)
}
}).on('error', (err) => {
return m.reply(err.toString())
})}
break
case "setppbot": case "setpp": {
if (!isOwner) return m.reply(msg.owner)
if (/image/g.test(mime)) {
let media = await Skyzo.downloadAndSaveMediaMessage(qmsg)
await Skyzo.updateProfilePicture(botNumber, {url: media})
await fs.unlinkSync(media)
m.reply("Profile photo changed by ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ")
} else return m.reply(example('dengan mengirim/reply foto'))}
break
case "setppbotpanjang": case "setpppanjang": {
if (!isOwner) return m.reply(msg.owner)
if (/image/g.test(mime)) {
var medis = await Skyzo.downloadAndSaveMediaMessage(qmsg, 'ppbot.jpeg', false)
var { img } = await generateProfilePicture(medis)
await Skyzo.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
await fs.unlinkSync(medis)
m.reply("Profile photo changed by ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ")
} else return m.reply(example('dengan mengirim/reply foto'))
}
break
case "setbio": case "setbiobot": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply(example('teksnya'))
Skyzo.updateProfileStatus(text)
m.reply("Bio has been changed by ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ")
}
break
case "other": {
var teks = `
ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ

LIST PRODUK VERLANGIDCLOUDX 
• VPS ( DIGITAL OCEAN, LINE NODE, VULTR )
• JASA INSTAL PANEL PTERODACTYL
• JASA INSTAL WINGS
• JASA INSTAL THEME 
• JASA FIX NODE MERAH 
• HOSTING BOT WA 
• HOSTING MINECRAFT 
• HOSTING PRIVATE MINECRAFT PREMIUM
• RESELLER|ADMIN|PT|OWN PANEL BOT WA
• JASA RENAME/FIX/TAMBAHFITUR SC
• MURBAN/MURUNBAN WA
• BAN/UNBAN WA
• NOKOS INDO/LUAR
• MURID NOKOS
• MURID TEMPOR WA
• MURID SADAP/PHISING APK/WEB
• SC THEMA PTERODACTYL
• SC BOT WHATSAPP
• SUBDOMAIN 
• RESELLER SUBDOMAIN 
• DOMAIN

----
> DLL Tanyakan Saja

_SOCIAL MEDIA_
YT : https://www.youtube.com/@ErlanggaWater
TELE : t.me/verlangid11
IG : https://www.instagram.com/verlang11

_Grup Kebutuhan Hosting_
https://chat.whatsapp.com/BkzEf70UB2K0MDImEX62hh
My Testimoni
https://whatsapp.com/channel/0029VaSaXJaCsU9MBxDjyt1P

_Only_
_wa.me/6287821239407_
`
m.reply(teks)
}
break
case "motivasi": case "motivation": {
var teks = `*𝗠𝗼𝘁𝗶𝘃𝗮𝘁𝗶𝗼𝗻*
* motivasi1
* motivasi2

© ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ`
m.reply(teks)
}

break
case "motivasi1" : {
var teks = `Ingatlah wak.
Sehitam-hitamnya batang, pasti yg keluar putih`
m.reply(teks)
}
break
case "motivasi2" : {
var teks = `Jaga kesehatan ya wak, minum susu muani setiap hari`
m.reply(teks)
}
break
case "tts": {
if (!text) return m.reply(example("jangan lupa minum susu muani"))
if (text.length >= 300) return m.reply("Jumlah huruf harus di bawah 300!")
m.reply(msg.wait)
let id = 'id_001'
try {
const { data } = await axios.post("https://tiktok-tts.weilnet.workers.dev/api/generation", {
    "text": text,
    "voice": id
})
Skyzo.sendMessage(m.chat, { audio: Buffer.from(data.data, "base64"), mimetype: "audio/mp4" }, {quoted: m})
} catch (e) {
return m.reply(e.toString())
}
}
break
case "ytplay": case "play": {
if(!isPremium) return m.reply('Lu ae bukan premium jembot')
if (!text) return m.reply(example('Dj tiktok'))
m.reply(msg.wait)
const { pipeline } = require('stream')
const { promisify } = require('util')
const streamPipeline = promisify(pipeline)
try {
let search = await yts(text)
let vid = search.videos[0]
let { title, thumbnail: thumb, timestamp, author, url } = vid
const audioStream = ytdl(url, {
filter: 'audioonly',
quality: 'highestaudio'})
let acak = await getRandom(".mp3")
const writableStream = fs.createWriteStream(`./all/tmp/${acak}`)
await streamPipeline(audioStream, writableStream)
await Skyzo.sendMessage(m.chat, {audio: fs.readFileSync(`./all/tmp/${acak}`), mimetype: 'audio/mpeg', contextInfo: {externalAdReply: {thumbnailUrl: thumb, title: title, body: "Duration : "+timestamp+" | "+"Author : "+author.name, sourceUrl: url, renderLargerThumbnail: true, mediaType: 1}}}, {quoted: m})
fs.unlinkSync(`./all/tmp/${acak}`)
} catch (e) {
return m.reply(e.toString())
}
}
break
case "qc": {
if (!text) return m.reply(example('teksnya'))
let warna = ["#000000", "#ff2414", "#22b4f2", "#eb13f2"]
let ppuser
try {
ppuser = await Skyzo.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://telegra.ph/file/caa9288c34034e5bb8d28.png'
}
let reswarna = await warna[Math.floor(Math.random()*warna.length)]
m.reply(msg.wait)
const obj = {
      "type": "quote",
      "format": "png",
      "backgroundColor": reswarna,
      "width": 512,
      "height": 768,
      "scale": 2,
      "messages": [{
         "entities": [],
         "avatar": true,
         "from": {
            "id": 1,
            "name": m.pushName,
            "photo": {
               "url": ppuser
            }
         },
         "text": text,
         "replyMessage": {}
      }]
   }
   try {
   const json = await axios.post('https://quote.btch.bz/generate', obj, {
      headers: {
         'Content-Type': 'application/json'
      }
   })
   const buffer = Buffer.from(json.data.result.image, 'base64')
Skyzo.sendStimg(m.chat, buffer, m, { packname: global.packname })
   } catch (error) {
   m.reply(error.toString())
   }
}
break
case "panel": case "listpanel": case "listpnl": {
var teks = `𝗕𝗮𝗰𝗮 𝗱𝗲𝘀𝗸𝗿𝗶𝗽𝘀𝗶 𝗴𝗿𝘂𝗽 𝗶𝗻𝗶
https://chat.whatsapp.com/BkzEf70UB2K0MDImEX62hh
`
m.reply(teks)
}
break
case "listsuntik": case "suntik": {
var teks = `1k 5subs
2k 10subs
3k 15subs
4k 20subs
5k 25subs
6k 30subs
7k 35subs
8k 40subs
9k 45subs
10k 50subs
11k 55subs
`
m.reply(teks)
}
break
case "remini": case "tohd": case "hd": case "genshin": {
if (/image/g.test(mime)) {
m.reply(msg.wait)
let tingkat
if (/remini/gi.test(command)) tingkat = 4
if (/tohd|hd/gi.test(command)) tingkat = 2
await Skyzo.downloadAndSaveMediaMessage(qmsg).then(async (res) => {
let urlnya = await telegraPh(res)
let image = await fetchJson(`https://aemt.me/remini?url=${urlnya}&resolusi=${tingkat}`)
if (!image.status) return m.reply("Error!")
await Skyzo.sendMessage(m.chat, {image: {url: image.url}, caption: "𝐃𝐨𝐧𝐞 𝐛𝐲 ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ 🥶"}, {quoted: m})
await fs.unlinkSync(res)
}).catch(err => m.reply(err.toString()))
} else return m.reply(example('dengan mengirim/reply foto'))
}
break
case "kamu": case "lu": case "gw": case "diriku": case "aku": {
var teks = `𝗪𝘂𝗷𝘂𝗱 𝗮𝘀𝗲𝗹𝗶 𝗹𝘂 :
https://telegra.ph/file/ad9b34336d8f1531fbb7d.jpg`
m.reply(teks)
}
break
case "assalamu'alaikum": case "Assalamu'alaikum": case "assalamualaikum": case "Assalamualaikum": {
var teks = `Waalaikumsalam`
m.reply(teks)
}
break
case "halo": case "Halo": {
var teks = `Hai`
m.reply(teks)
}
break
case "linkgc": {
var teks = `https://chat.whatsapp.com/BkzEf70UB2K0MDImEX62hh`
m.reply(teks)
}
break
case "chatgpt": case "gpt": {
if (!text) return m.reply(example("cara ngentod sama Elaina"))
m.reply(msg.wait)
await fetchJson(`https://aemt.me/gpt4?text=${text}`).then((e) => {
if (!e.status) return m.reply(JSON.stringify(e, null, 2))
var teks = `*© GPT - Chat Version 0.4*\n\n${e.result}`
m.reply(teks)
})
}
break
case "ai": case "openai": {
if (!text) return m.reply(example("cara mendapatkan hati Suci"))
m.reply(msg.wait)
await fetchJson(`https://aemt.me/openai?text=${text}`).then((e) => {
if (!e.status) return m.reply(JSON.stringify(e, null, 2))
var teks = `*© AI X ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ*\n\n${e.result}`
m.reply(teks)
})
}
break
case "toptv": {
if (/video/.test(qmsg.mimetype)) {
if ((qmsg).seconds > 30) return m.reply("Max duration: 30s")
let ptv = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({ ptvMessage: qmsg }), { userJid: m.chat, quoted: m })
Skyzo.relayMessage(m.chat, ptv.message, { messageId: ptv.key.id })
} else { 
return m.reply(example("dengam mengirim/reply vidio"))
}
}
break
case "toimage": case "toimg": {
if (!/webp/.test(mime) && !/audio/.test(mime)) return m.reply(example('sambil reply sticker'))
m.reply(msg.wait)
let media = await Skyzo.downloadAndSaveMediaMessage(qmsg)
let ran = `${makeid}.png`
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return err
let buffer = fs.readFileSync(ran)
Skyzo.sendMessage(m.chat, {image: buffer}, {
quoted: m})
fs.unlinkSync(ran)
})
}
break
case "tovn": case "toptt": {
if (!/video|audio/.test(mime) && !/audio/.test(mime)) return m.reply(example('dengan mengirim/reply audio/vidio'))
m.reply(msg.wait)
await Skyzo.downloadMediaMessage(qmsg).then(async (res) => {
let anu = await toPTT(res, 'mp4')
Skyzo.sendMessage(m.chat, {audio: anu, mimetype: 'audio/mpeg', ptt: true}, {quoted : m}) 
})
}
break
case "tes":
case "test":
case "testbot":
case "on":
case "online": {
var teks = `${global.kbh}${global.knh}${global.lay}${global.koz}${global.kbh}${global.nio}${global.ytt} ${global.jmi}${global.pxs} ${global.men}${global.nio}${global.wkm} ${global.nio}${global.men}${global.zhl}${global.jmi}${global.men}${global.epe}.`
m.reply(teks)
}
break
case "bot": {
var teks = `?`
m.reply(teks)}
break
case "toaudio": case "tomp3": {
if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(example('dengan mengirim/reply vidio'))
if ((qmsg).seconds > 30) return m.reply("Durasi vidio maksimal 30 detik")
m.reply(msg.wait)
await Skyzo.downloadMediaMessage(qmsg).then(async (res) => {
let anu = await toAudio(res, 'mp4')
Skyzo.sendMessage(m.chat, {audio: anu, mimetype: 'audio/mpeg'}, {quoted : m}) 
})
}
break
case "sticker": case "stiker": case "sgif": case "s": {
if (!/image|video/.test(mime)) return m.reply(example("dengan mengirim/reply foto/vidio"))
if (/video/.test(mime)) {
if ((qmsg).seconds > 15) return m.reply("Durasi vidio maksimal 15 detik!")
}
m.reply(msg.wait)
var media = await Skyzo.downloadAndSaveMediaMessage(qmsg)
await Skyzo.sendStimg(m.chat, media, m, {packname: "𝐂𝐫𝐞𝐚𝐭𝐞𝐝 𝐛𝐲 𝐁𝐡𝐲𝐳 𝐁𝐨𝐭 👑"})
await fs.unlinkSync(media)
}
break
case "tourl": case "telegraph": {
if(!isPremium) return m.reply('Lu ae bukan premium jembot')
if (!/image/.test(mime)) return m.reply(example("dengan mengirim/reply foto"))
await m.reply(msg.wait)
var fotonya = await Skyzo.downloadAndSaveMediaMessage(qmsg)
var urlimage = await telegraPh(fotonya)
await m.reply(`𝐃𝐨𝐧𝐞 𝐛𝐲 ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ
${urlimage}`)
await fs.unlinkSync(fotonya)
}
break
case "public": case "publik": {
if (!isOwner) return m.reply(msg.owner)
Skyzo.public = true
m.reply("Successfully changed bot mode to public")
}
break
case "self": case "private": case "priv": case "prib": {
if (!isOwner) return m.reply(msg.owner)
Skyzo.public = false
m.reply("Successfully changed bot mode to private")
}
break
case "get": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply("linknya mana ajg")
try {
var check = await fetchJson(text)
m.reply(JSON.stringify(check, null, 2))
} catch (e) {
return m.reply(e.toString())
}}
break
case "setteksjpm": {
if (!isOwner) return m.reply(msg.owner)
if (text || m.quoted) {
const newteks = m.quoted ? m.quoted.text : text
await fs.writeFileSync("./all/database/teksjpm.js", newteks.toString())
m.reply("Text JPM successfully changed by ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ")
} else {
return m.reply(example("dengan reply/kirim teks\n\nUntuk melihat teks jpm saat ini ketik *.teksjpm*"))
}}
break
case "teksjpm": {
if (!isOwner) return m.reply(msg.owner)
m.reply(fs.readFileSync("./all/database/teksjpm.js").toString())
}
break
case "tiktokaudio": case "tiktokmp3": {
if (!text) return m.reply(example("linknya"))
if (!text.includes("tiktok.com")) return m.reply("Link tautan tidak valid!")
m.reply(msg.wait)
await fetchJson(`https://aemt.me/download/tiktokdl?url=${text}`).then((res) => {
Skyzo.sendMessage(m.chat, {audio: {url: res.result.music}, mimetype: "audio/mpeg"}, {quoted: m})
}).catch(e => m.reply(e.toString()))
}
break
case "mediafire": {
if(!isPremium) return m.reply('Lu ae bukan premium jembot')
if (!text) return m.reply(example("linknya"))
if (!text.includes('mediafire.com')) return m.reply("Invalid link")
m.reply(msg.wait)
await api.mediafireDl(text).then((res) => {
if (res.filesize.includes("GB")) return m.reply("Ukuran file terlalu besar")
if (res.filesize.split("MB")[0] >= 100) return m.reply("Ukuran file terlalu besar")
if (res.url == "") return m.reply(mess.error)
Skyzo.sendMessage(m.chat, {document: {url: res.url}, fileName: res.filename, mimetype: "application/"+res.ext.toLowerCase(), caption: "Download successful"}, {quoted: m})
}).catch((e) => m.reply(e.toString()))
}
break
case "japanese": case "japanesse": case "loli": {
var teks = `Astaghfirullah`
m.reply(teks)
}
break
case "pinterest": case "pin": {
if(!isPremium) return m.reply('Lu ae bukan premium jembot')
if (!text) return m.reply(example("Elaina sexy pose"))
m.reply(msg.wait)
await pinterest(text).then((res) => {
if (res.length < 1) return m.reply("Photo not found")
let jumlah = 5
if (res.length < jumlah) jumlah = res.length
for (let e = 0; e < jumlah; e++) {
Skyzo.sendMessage(m.chat, {image: {url: res[e]}}, {quoted: m})
}
}).catch(e => m.reply(e.toString()))
}
break
case "tiktok": case "tt": {
if (!text) return m.reply(example('linknya mana kocak'))
if (!/tiktok.com/.test(text)) return m.reply("Invalid link")
m.reply(msg.wait)
await fetchJson(`https://aemt.me/download/tiktokslide?url=${text}`).then((res) => {
var num = 0
if (res.result.data.duration == 0) {
for (let i of res.result.data.images) {
Skyzo.sendMedia(m.chat, `${i}`, m, {caption: `Successfully downloaded video by ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ`})
}
} else {
var cap = `*Successfully downloaded video by ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ`
Skyzo.sendMessage(m.chat, {video: {url: res.result.data.play}, mimetype: "video/mp4", caption: cap}, {quoted: m})
}
}).catch((err) => {
return m.reply(err.toString())
})
}
break
case "facebook": case "fb": case "fbdl": {
if (!text) return m.reply(example("linkvidionya mana pepek"))
if (!/facebook.com/.test(text)) return m.reply("Invalid link")
m.reply(msg.wait)
await fetchJson(`https://aemt.me/download/fbdown?url=${text}`).then((res) => {
if (!res.status) return m.reply(JSON.stringify(res, null, 2))
Skyzo.sendMessage(m.chat, {video: {url: `${res.result.url.isHdAvailable == true ? res.result.url.urls[0].hd : res.result.url.urls[0].sd}`}, mimetype: 'video/mp4', caption: `Successfully downloaded video by ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ`}, {quoted: m})
}).catch(e => m.reply(e.toString()))
}
break
case "owner": {
Skyzo.sendContact(m.chat, [owner], "Do not call", m)
}
break
case "antilink": {
if (!isGroup) return m.reply(msg.group)
if (!isOwner && !isAdmin) return m.reply(msg.owner)
if (!args[0]) return m.reply(example("on/off\n\nKetik *.statusgc* untuk melihat status setting grup ini"))
if (/on/.test(args[0].toLowerCase())) {
if (antilink.includes(m.chat)) return m.reply("Antilink is now active in this group by ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ")
if (antilink2.includes(m.chat)) {
let posi = antilink2.indexOf(m.chat)
antilink2.splice(posi, 1)
await fs.writeFileSync("./all/database/antilink2.json", JSON.stringify(antilink2))
}
antilink.push(m.chat)
await fs.writeFileSync("./all/database/antilink.json", JSON.stringify(antilink))
m.reply("Antilink successfully activated in this group")
} else if (/off/.test(args[0].toLowerCase())) {
if (!antilink.includes(m.chat)) return m.reply("Antilink in this group is not yet active")
let posi = antilink.indexOf(m.chat)
antilink.splice(posi, 1)
await fs.writeFileSync("./all/database/antilink.json", JSON.stringify(antilink))
m.reply("Successfully turned off Antilink in this group by ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ")
} else {
return m.reply(example("on/off"))
}}
break
case "antilinkV2": case "antilinkv2": {
if (!isGroup) return m.reply(msg.group)
if (!isOwner && !isAdmin) return m.reply(msg.owner)
if (!args[0]) return m.reply(example("on/off\n\nKetik *.statusgc* untuk melihat status setting grup ini"))
if (/on/.test(args[0].toLowerCase())) {
if (antilink2.includes(m.chat)) return m.reply("Antilink-v2 is now active in this group by ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ")
if (antilink.includes(m.chat)) {
let posi = antilink.indexOf(m.chat)
antilink.splice(posi, 1)
await fs.writeFileSync("./all/database/antilink.json", JSON.stringify(antilink))
}
antilink2.push(m.chat)
await fs.writeFileSync("./all/database/antilink2.json", JSON.stringify(antilink2))
m.reply("Antilink-v2 successfully activated in this group by ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ")
} else if (/off/.test(args[0].toLowerCase())) {
if (!antilink2.includes(m.chat)) return m.reply("Antilink-v2 in this group is not yet active")
let posi = antilink2.indexOf(m.chat)
antilink2.splice(posi, 1)
await fs.writeFileSync("./all/database/antilink2.json", JSON.stringify(antilink2))
m.reply("Successfully turned off Antilink-v2 in this group by ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ")
} else {
return m.reply(example("on/off"))
}}
break
case "welcome": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply(example("on/off\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot"))
if (text.toLowerCase() == "on") {
if (welcome) return m.reply("Welcome is now active")
welcome = true
m.reply("Successfully turned on welcome by ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ")
} else if (text.toLowerCase() == "off") {
if (!welcome) return m.reply("Welcome is now inactive")
welcome = false
m.reply("Successfully turned off welcome by ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ")
} else {
return m.reply(example("on/off\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot"))
}}
break
case "autoread": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply(example("on/off\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot"))
if (text.toLowerCase() == "on") {
if (autoread) return m.reply("Autoread is now active")
autoread = true
m.reply("Successfully turned on autoread by ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ")
} else if (text.toLowerCase() == "off") {
if (!autoread) return m.reply("Autoread is now inactive")
autoread = false
m.reply("Successfully turned off autoread by ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ")
} else {
return m.reply(example("on/off\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot"))
}}
break
case "anticall": case "seleb": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply(example("on/off\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot"))
if (text.toLowerCase() == "on") {
if (anticall) return m.reply("Anticall is now active")
anticall = true
m.reply("Successfully turned on anticall by ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ")
} else if (text.toLowerCase() == "off") {
if (!anticall) return m.reply("Anticall is now inactive")
anticall = false
m.reply("Successfully turned off anticall by ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ")
} else {
return m.reply(example("on/off\n\nKetik *.statusbot* Untuk Melihat Status Settingan Bot"))
}}
break
case "setting": case "settingbot": case "option": case "statusbot": {
if (!isOwner) return m.reply(msg.owner)
var teks = `
𝘼𝙐𝙏𝙊𝙍𝙀𝘼𝘿 : ${global.autoread ? "*✅*" : "*❌*"}
𝘼𝙉𝙏𝙄𝘾𝘼𝙇𝙇 : ${global.anticall ? "*✅*" : "*❌*"}
𝙒𝙀𝙇𝘾𝙊𝙈𝙀 : ${global.welcome ? "*✅*" : "*❌*"}
`
m.reply(teks)
}
break
case "statusgc": {
if (!isGroup) return m.reply(msg.group)
if (!isOwner && !isAdmin) return m.reply(msg.admin)
var anti1 = "✅"
var anti2 = "✅"
if (!antilink2.includes(m.chat)) anti2 = "❌"
if (!antilink.includes(m.chat)) anti1 = "❌"
var teks = `
𝘼𝙉𝙏𝙄𝙇𝙄𝙉𝙆 𝙑1 : ${anti1}
𝘼𝙉𝙏𝙄𝙇𝙄𝙉𝙆 𝙑2 : ${anti2}
`
m.reply(teks)
}
break
case "setppgc": {
if (!isGroup) return m.reply(msg.group)
if (!isBotAdmin) return m.reply(msg.adminbot)
if (!isAdmin && !isOwner) return m.reply(msg.admin)
if (/image/g.test(mime)) {
let media = await Skyzo.downloadAndSaveMediaMessage(qmsg)
await Skyzo.updateProfilePicture(m.chat, {url: media})
await fs.unlinkSync(media)
m.reply("Group profile photo changed successfully by ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ")
} else return m.reply(example('dengan mengirim/reply foto'))}
break
case "setnamegc": case "setnamagc": {
if (!isGroup) return m.reply(msg.group)
if (!isBotAdmin) return m.reply(msg.adminbot)
if (!isAdmin && !isOwner) return m.reply(msg.admin)
if (!text) return m.reply(example('teksnya'))
const gcname = metadata.subject
await Skyzo.groupUpdateSubject(m.chat, text)
m.reply(`Group name successfully changed by ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ`)
}
break
case "setdesc": case "setdesk": {
if (!isGroup) return m.reply(msg.group)
if (!isBotAdmin) return m.reply(msg.adminbot)
if (!isAdmin && !isOwner) return m.reply(msg.admin)
if (!text) return m.reply(example('teksnya'))
await Skyzo.groupUpdateDescription(m.chat, text)
m.reply(`Group description changed successfully by ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ`)
}
break
case "open": case "ngoceh": case "bacot": {
if (!isGroup) return m.reply(msg.group)
if (!isBotAdmin) return m.reply(msg.adminbot)
if (!isAdmin && !isOwner) return m.reply(msg.admin)
await Skyzo.groupSettingUpdate(m.chat, 'not_announcement')
m.reply("Successfully changed group settings to allow members to send messages by ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ")
}
break
case "close": case "bisu": case "tunarungu": {
if (!isGroup) return m.reply(msg.group)
if (!isBotAdmin) return m.reply(msg.adminbot)
if (!isAdmin && !isOwner) return m.reply(msg.admin)
await Skyzo.groupSettingUpdate(m.chat, 'announcement')
m.reply("Successfully changed group settings to allow only admins to send messages by ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ")
}
break
case "d": case "del": case "delete": {
if (isGroup) {
if (!isOwner && !isAdmin) return m.reply(msg.admin)
if (!m.quoted) return m.reply("Please reply with the message you want to delete.")
if (m.quoted.sender == botNumber) {
Skyzo.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender}})
} else {
if (!isBotAdmin) return m.reply(msg.adminbot)
Skyzo.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender}})
}} else {
if (!isOwner) return m.reply(msg.owner)
if (!m.quoted) return m.reply("Please reply with the message you want to delete.")
Skyzo.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender}})
}}
break
case "demote": case "demote": case "budak": {
if (!isGroup) return m.reply(msg.group)
if (!isAdmin && !isOwner) return m.reply(msg.admin)
if (!isBotAdmin) return m.reply(msg.adminbot)
if (m.quoted || text) {
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Skyzo.groupParticipantsUpdate(m.chat, [target], 'demote').then((res) => m.reply(`${target.split("@")[0]} now become a regular member`)).catch((err) => m.reply(err.toString()))
} else return m.reply(example('62882xxxxxxxx'))}
break
case "promote": case "promot": case "bos": {
if (!isGroup) return m.reply(msg.group)
if (!isAdmin && !isOwner) return m.reply(msg.admin)
if (!isBotAdmin) return m.reply(msg.adminbot)
if (m.quoted || text) {
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Skyzo.groupParticipantsUpdate(m.chat, [target], 'promote').then((res) => m.reply(`${target.split("@")[0]} now become an admin`)).catch((err) => m.reply(err.toString()))
} else return m.reply(example('62882xxxxxxxx'))}
break
case "add": case "addmember": case "culik": {
if (!isGroup) return m.reply(msg.group)
if (!args[0]) return m.reply(example("62882xxxxxxxx"))
var teks = text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
var cek = await Skyzo.onWhatsApp(`${teks.split("@")[0]}`)
if (cek.length < 1) return m.reply("Number not registered in WhatsApp")
if (!isBotAdmin || !groupMetadata.memberAddMode) return m.reply("𝗚𝗔𝗚𝗔𝗟\nAdmin tidak mengizinkan peserta menambahkan member")
var a = await Skyzo.groupParticipantsUpdate(m.chat, [teks], 'add')
if (a[0].status == 200) return m.reply(`𝐒𝐮𝐜𝐜𝐞𝐬 𝐭𝐨 𝐚𝐝𝐝`)
if (a[0].status == 408) return m.reply(`𝐅𝐚𝐢𝐥𝐞𝐝 𝐭𝐨 𝐚𝐝𝐝`)
if (a[0].status == 409) return m.reply(`𝐀𝐥𝐫𝐞𝐚𝐝𝐲 𝐣𝐨𝐢𝐧𝐞𝐝`)
if (a[0].status == 403) return m.reply(`𝐅𝐚𝐢𝐥𝐞𝐝 𝐭𝐨 𝐚𝐝𝐝`)
}
break
case "k": case "kik": case "kick": case "babi": {
if (!isGroup) return m.reply(msg.group)
if (!isBotAdmin) return m.reply(msg.adminbot)
if (!isAdmin && !isOwner) return m.reply(msg.admin)
if (text || m.quoted) {
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Skyzo.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => Skyzo.sendMessage(m.chat, {text: `Beban ilang 1`, mentions: [`${users}`]}, {quoted: m})).catch((err) => m.reply(err.toString()))
} else return m.reply(example('nomornya/@tag'))}
break
case "hidetag": case "h": {
if (!isGroup) return m.reply(msg.group)
if (!isAdmin && !isOwner) return m.reply(msg.admin)
if (!m.quoted && !text) return m.reply(example("teksnya/replyteks"))
var teks = m.quoted ? m.quoted.text : text
var member = await groupMetadata.participants.map(e => e.id)
Skyzo.sendMessage(m.chat, {text: teks, mentions: [...member]})
}
break
case "tagall": case "tag": {
if (!isGroup) return m.reply(msg.group)
if (!isOwner) return m.reply(msg.owner)
if (!isAdmin && !isOwner) return m.reply(msg.admin)
if (!text) return m.reply(example("jangan lupa berak"))
var member = await groupMetadata.participants.map(e => e.id)
var teks = ` ${text}\n\n`
member.forEach(e => e !== m.sender ? teks += `@${e.split("@")[0]}\n` : '')
Skyzo.sendMessage(m.chat, {text: teks, mentions: [...member]})
}
break
case "owner": case "creator": {
Skyzo.sendContact(m.chat, [`${owner[0].split("@")[0]}`], "Developer Bot", m)
}
break
case "savekontak": {
if (!isOwner) return m.reply(msg.owner)
if (!isGroup) return m.reply(msg.group)
const halls = await groupMetadata.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`Contact file successfully sent to private chat by ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ`)
await Skyzo.sendMessage(m.sender, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: "Contact file successfully created by ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./all/database/contacts.vcf", "")
}}
break
case "savekontak2": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply(example("idgrupnya\n\nketik *.listgc* untuk melihat semua list id grup"))
var idnya = text
var groupMetadataa
try {
groupMetadataa = await Skyzo.groupMetadata(`${idnya}`)
} catch (e) {
return m.reply("Invalid ID Group")
}
const participants = await groupMetadataa.participants
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`Contact file successfully sent to private chat`)
await Skyzo.sendMessage(m.sender, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: "Contact file successfully created by ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./all/database/contacts.vcf", "")
}}
break
case "pushkontak": case "pushkon": {
if (!isOwner) return m.reply(msg.owner)
if (!isGroup) return m.reply(msg.group)
if (!text) return m.reply(example("pesannya"))
var teks = text
const halls = await groupMetadata.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
m.reply(`Being processed by ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ`)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
await fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
await Skyzo.sendMessage(mem, {text: teks}, {quoted: qloc2})
await sleep(global.delaypushkontak)
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`Successfully sent a message to ${halls.length} group members, contact file successfully sent to private chat by ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ`)
await Skyzo.sendMessage(m.sender, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: "Contact file successfully created by ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./all/database/contacts.vcf", "")
}}
break
case "pushkontak1": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply(example("idgrup|pesan\n\nketik *.listgc* untuk melihat semua list id grup"))
if (!text.split("|")) return m.reply(example("idgrup|pesannya\n\nketik *.listgc* untuk melihat semua list id grup"))
var [idnya, teks] = text.split("|")
var groupMetadataa
try {
groupMetadataa = await Skyzo.groupMetadata(`${idnya}`)
} catch (e) {
return m.reply("*Invalid ID Group")
}
const participants = await groupMetadataa.participants
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
m.reply(`Processing sending message to ${halls.length} group members by ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ`)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
await fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
await Skyzo.sendMessage(mem, {text: teks}, {quoted: qloc2})
await sleep(global.delaypushkontak)
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`Successfully sent a message to ${halls.length} group members, contact file successfully sent to private chat by ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ`)
await Skyzo.sendMessage(m.sender, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: "Contact file successfully created by ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./all/database/contacts.vcf", "")
}}
break
case "pushkontak2": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply("*Contoh Command :*\n.pushkontak2 idgc|jeda|pesan\n\n*Note :* Jeda 1 detik = 1000\nketik *.listgc* untuk melihat semua list id grup")
if (!text.split("|")) return m.reply("*Contoh Command :*\n.pushkontak2 idgc|jeda|pesan\n\n*Note :* Jeda 1 detik = 1000\nketik *.listgc* untuk melihat semua list id grup")
var idnya = text.split("|")[0]
var delay = Number(text.split("|")[1])
var teks = text.split("|")[2]
if (!idnya.endsWith("@g.us")) return m.reply("Invalid group ID format")
if (isNaN(delay)) return m.reply("Invalid delay format")
if (!teks) return m.reply("*Contoh Command :*\n.pushkontak2 idgc|jeda|pesan\n\n*Note :* Jeda 1 detik = 1000\nketik *.listgc* untuk melihat semua list id grup")
var groupMetadataa
try {
groupMetadataa = await Skyzo.groupMetadata(`${idnya}`)
} catch (e) {
return m.reply("Invalid group ID")
}
const participants = await groupMetadataa.participants
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
m.reply(`Processing sending message to ${halls.length} group members by ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ`)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
await fs.writeFileSync('./all/database/contacts.json', JSON.stringify(contacts))
await Skyzo.sendMessage(mem, {text: teks}, {quoted: qloc2})
await sleep(Number(delay))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`Successfully sent a message to ${halls.length} group members, contact file successfully sent to private chat by ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ`)
await Skyzo.sendMessage(m.sender, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: "Contact file successfully created by ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./all/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./all/database/contacts.vcf", "")
}}
break
case "idgc": {
if (!isOwner) return m.reply(msg.owner)
if (!isGroup) return m.reply(msg.group)
m.reply(`${m.chat}`)
}
break
case "listgc": case "cekid": case "listgrup": {
let gcall = Object.values(await Skyzo.groupFetchAllParticipating().catch(_=> null))
let listgc = `*𝐋𝐈𝐒𝐓 𝐀𝐋𝐋 𝐂𝐇𝐀𝐓 𝐆𝐑𝐎𝐔𝐏*\n\n`
await gcall.forEach((u, i) => {
listgc += `Title : ${u.subject}\nID : ${u.id}\nMember : ${u.participants.length}\nStatus : ${u.announce == true ? "Tertutup" : "Terbuka"}\nCreator : ${u.owner ? u.owner.split('@')[0] : 'Sudah keluar'}\n\n`
})
m.reply(listgc)
}
break
case "joingc": case "join": {
if (!isOwner) return m.reply(msg.owner)
if (!text && !m.quoted) return m.reply(example('linknya grupnya mana pler'))
let teks = m.quoted ? m.quoted.text : text
if (!teks.includes('whatsapp.com')) return m.reply(" Invalid link")
let result = teks.split('https://chat.whatsapp.com/')[1]
await Skyzo.groupAcceptInvite(result).then(respon => m.reply("Successfully joined the group by ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ")).catch(error => m.reply(error.toString()))
}
break
case "leave": case "leavegc": case "left": case "out": case "cabut": case "nolep": case "keluar": {
if (!isOwner) return m.reply(msg.owner)
if (!isGroup) return m.reply(msg.group)
await m.reply("Successfully left the group by ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ\nMessage : Adios..")
await sleep(3000)
await Skyzo.groupLeave(m.chat)
}
break
case "leavegc2": case "leave2": {
if (!isOwner) return m.reply(msg.owner)
let gcall = await Object.values(await Skyzo.groupFetchAllParticipating().catch(_=> null))
let num = []
let listgc = `*Bukan gitu goblok*\ngini *${cmd}* nomor grupnya\n\n*List Semua Grup Chat :*\n\n`
await gcall.forEach((u, i) => {
num.push(i)
listgc += ` *Nomor Grup => ${i+1}*\n*• Nama :* ${u.subject}\n*• ID :* ${u.id}\n*• Total Member :* ${u.participants.length} Member\n*• Status Grup :* ${u.announce == true ? "Tertutup" : "Terbuka"}\n*• Pembuat :* ${u.owner ? u.owner.split('@')[0] : 'Sudah keluar'}\n\n`
})
if (!args[0]) {
m.reply(listgc)
} else if (args[0]) {
if (!num.includes(Number(args[0]) - 1)) return m.reply("Group not found")
let leav = Number(args[0]) - 1
await m.reply(`Successfully left the group by ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ\nMessage : Adios..`)
await Skyzo.groupLeave(`${gcall[leav].id}`)
}}
break
case "scbot": case "sc": case "scriptbot": {
if (isOwner) {
m.reply("gw coba dulu bntr..")
let a = getTime().split("T")[0]
let b = getTime().split("T")[1].split("+")[0]
var name = `${a}◦${b}`
const ls = (await execSync("ls"))
.toString()
.split("\n")
.filter(
(pe) =>
pe != "node_modules" &&
pe != "session" &&
pe != "package-lock.json" &&
pe != "yarn.lock" &&
pe != ""
)
const anu = await execSync(`zip -r ${name}.zip ${ls.join(" ")}`)
await Skyzo.sendMessage(m.sender, {document: await fs.readFileSync(`./${name}.zip`), fileName: `${name}.zip`, 
mimetype: "application/zip"}, {quoted: m})
await execSync(`rm -rf ${name}.zip`)
if (m.chat !== m.sender) return m.reply("The bot script file has been successfully sent to the private chat by ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ.")
} else {
var teks = `*Free ya langsung ke yt verlang aja
https://youtu.be/xOZtld95c2Q?si=bVZA5iHid7Rhf51A
ANAK JB/KANG JPM WAJIB DOWNLOAD
${global.cgp16}${global.cgp32}${global.cgp64}`;
m.reply(teks)
}
}
break
case "startjpm": {
if (!isOwner) return m.reply(msg.owner)
var teksnya = await fs.readFileSync("./all/database/teksjpm.js").toString()
if (teksnya.length < 1) return m.reply("Text JPM not found")
var teks = `${teksnya}`
let total = 0
let getGroups = await Skyzo.groupFetchAllParticipating()
let usergc = await Object.keys(getGroups)
m.reply(`Processing sending to ${usergc.length} groups by ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ`)
for (let jid of usergc) {
try {
await Skyzo.sendMessage(jid, {text: teks}, {quoted: qloc})
total += 1
} catch {}
await sleep(4000)
}
m.reply(`Successfully sent message to ${total} groups by ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ`)
}
break
case "jpmhidetag": {
if (!isOwner) return m.reply(msg.owner)
if (!text && !m.quoted) return m.reply(example("teksnya atau reply teks"))
var teks = m.quoted ? m.quoted.text : text
let total = 0
let getGroups = await Skyzo.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let usergc = groups.map((v) => v.id)
m.reply(`Processing sending text message to ${usergc.length} groups by ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ`)
for (let jid of usergc) {
try {
await Skyzo.sendMessage(jid, {text: teks, mentions: getGroups[jid].participants.map(e => e.id)}, {quoted: qchanel})
total += 1
} catch (e) {
console.log(e)
}
await sleep(global.delayjpm)
}
m.reply(`Successfully sent message to ${total} groups by ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ`)
}
break
case "tespol": {
if (!isOwner) return m.reply(msg.owner)
if (!isGroup) return m.reply(msg.group)
if (!text) return m.reply(example("teks1|teks2|teks3"))
if (!text.split("|")) return m.reply(example("teks1|teks2|teks3"))
let anu = await text.split("|")
if (anu.length < 3) return m.reply(example("teks1|teks2|teks3"))
Skyzo.sendPoll(m.chat, anu[0], anu.filter(e => e !== anu[0]))
}
break
case "jpmpol": case "jpmpoll": case "jpmpolling": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply(example("teks1|teks2|teks3"))
if (!text.split("|")) return m.reply(example("teks1|teks2|teks3"))
let anu = text.split("|")
if (anu.length < 3) return m.reply(example("teks1|teks2|teks3"))
let total = 0
let getGroups = await Skyzo.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let usergc = groups.map((v) => v.id)
m.reply(`Processing sending polling message to ${usergc.length} groups by ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ`)
for (let jid of usergc) {
try {
Skyzo.sendPoll(jid, anu[0], anu.filter(e => e !== anu[0]))
total += 1
} catch (e) {
console.log(e)
}
await sleep(4000)
}
m.reply(`Successfully sent message to ${total} groups by ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ`)
}
break
case "jpm": {
if (!isOwner) return m.reply(msg.owner)
if (!text && !m.quoted) return m.reply(example("teksnya atau replyteks"))
var teks = m.quoted ? m.quoted.text : text
let total = 0
let getGroups = await Skyzo.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let usergc = groups.map((v) => v.id)
m.reply(`Processing sending text message to ${usergc.length} groups by ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ`)
for (let jid of usergc) {
try {
await Skyzo.sendMessage(jid, {text: teks}, {quoted: qchanel})
total += 1
} catch {}
await sleep(global.delayjpm)
}
m.reply(`Successfully sent message to ${total} groups by ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ`)
}
break
case "jpm2": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply(example("teksnya dengan balas/kirim foto"))
if (!/image/.test(mime)) return m.reply(example("teksnya dengan balas/kirim foto"))
let image = await Skyzo.downloadAndSaveMediaMessage(qmsg)
let total = 0
let getGroups = await Skyzo.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let usergc = groups.map((v) => v.id)
m.reply(`Processing sending text & photo message to ${usergc.length} groups by ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ`)
for (let jid of usergc) {
try {
Skyzo.sendMessage(jid, {image: await fs.readFileSync(image), caption: text, contextInfo: {forwardingScore: 1,
isForwarded: true}}, {quoted: qchanel})
total += 1
} catch {}
await sleep(global.delayjpm)
}
await fs.unlinkSync(image)
m.reply(`Successfully sent message to ${total} groups by ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ`)
}
break
case "jpmtesti": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply(example("teksnya dengan balas/kirim foto"))
if (!/image/.test(mime)) return m.reply(example("teksnya dengan balas/kirim foto"))
let image = await Skyzo.downloadAndSaveMediaMessage(qmsg)
if (global.idsaluran == "-") return m.reply('Mohon isi ID Saluran di file setting.js pada panelmu.')
let total = 0
let getGroups = await Skyzo.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let usergc = groups.map((v) => v.id)
m.reply(`Successfully sent message to ${total} groups by ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ`)
for (let jid of usergc) {
try {
Skyzo.sendMessage(jid, {image: await fs.readFileSync(image), caption: text, contextInfo: {forwardingScore: 1,
isForwarded: true, forwardedNewsletterMessageInfo: {newsletterJid: global.idsaluran, serverMessageId: 100, 
newsletterName: `Testimoni by ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ`
}}}, {quoted: qchanel})
total += 1
} catch {}
await sleep(global.delayjpm)
}
await fs.unlinkSync(image)
m.reply(`Successfully sent message to ${total} groups by ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ`)
}
break
case "cadmin": case "addadmin": case "adp": case "toadmin": {
if (!text) return m.reply(example("username"))
if (!isOwner) return m.reply(msg.owner)
let username = text.toLowerCase()
let email = username + "@vcloudx.com"
let name = username + "vcloudx"
let randomChars = "VCLOUDX";
let ulycode = `VCLOUDX-`;
for (let i = 0; i < 5; i++) {
    ulycode += randomChars.charAt(Math.floor(Math.random() * randomChars.length));}
let password = ulycode
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": "admin",
"last_name": "vcloudx",
"root_admin": true,
"language": "en",
"password": password,
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var orang
if (isGroup) {
orang = m.sender
await m.reply("𝐀𝐝𝐩 𝐝𝐨𝐧𝐞 𝐜𝐫𝐞𝐚𝐭𝐞 𝐛𝐲 ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ ✅")
} else {
orang = m.chat
}
var teks = `
𝐃𝐄𝐓𝐀𝐈𝐋 𝐀𝐃𝐌𝐈𝐍 𝐏𝐀𝐍𝐄𝐋 𝐀𝐍𝐃𝐀

👤 *:* ${user.username}
🔐 *:* ${password.toString()}
🌐 *:* ${domain2}

𝗝𝗢𝗜𝗡 𝗚𝗥𝗨𝗣 𝗢𝗪𝗡𝗘𝗥
https://chat.whatsapp.com/BkzEf70UB2K0MDImEX62hh_
_(ɢᴋ ᴊᴏɪɴ ᴀᴋᴜɴᴍᴜ ᴅᴇʟᴇᴛᴇ)_

𝗦𝗔𝗩𝗘 𝗡𝗠𝗥 𝗢𝗪𝗡𝗘𝗥
_wa.me/6287821239407_
_(save agar kamu ganteng)_

_*© ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ*_
`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender] 
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Login\",\"url\":\"${global.domain}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qchanel}) 
await Skyzo.relayMessage(orang, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "deladmin": case "deladm": {
if (!args[0]) return m.reply(example("id\n\nuntuk melihat id admin ketik *.listadmin*"))
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
let getid = null
let idadmin = null
await users.forEach(async (e) => {
if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
getid = e.attributes.username
idadmin = e.attributes.id
let delusr = await fetch(domain + `/api/application/users/${idadmin}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}
})
if (idadmin == null) return m.reply("ID not found")
m.reply(`Successfully deleted admin panel by ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ`)
}
break
case "deluser": case "delusr": case "dusr": {
if (!args[0]) return m.reply(example("id\n\nuntuk melihat id admin ketik *.listadmin*"))
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
let getid = null
let idadmin = null
await users.forEach(async (e) => {
if (e.attributes.id == args[0] && e.attributes.root_admin == false) {
getid = e.attributes.username
idadmin = e.attributes.id
let delusr = await fetch(domain + `/api/application/users/${idadmin}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}
})
if (idadmin == null) return m.reply("ID not found")
m.reply(`Successfully deleted user by ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ`)
}
break
case "listadmin": {
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return m.reply("gada jir")
var teks = "𝐋𝐈𝐒𝐓 𝐀𝐃𝐏\n\n"
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
teks += `𝗡𝗮𝗺𝗲 : ${i.attributes.first_name}
𝗜𝗗 : ${i.attributes.id}\n\n`
})
m.reply(teks)
}
break
case "listmember": case "listmemb": case "listuser": case "listusr": {
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return m.reply("gada jir")
var teks = "𝐋𝐈𝐒𝐓 𝐌𝐄𝐌𝐁𝐄𝐑\n\n"
await users.forEach((i) => {
if (i.attributes.root_admin !== false) return
teks += `𝗡𝗮𝗺𝗲 : ${i.attributes.username}
𝗜𝗗 : ${i.attributes.id}\n\n`
})
m.reply(teks)
}
break
case "cpanel": case "addpanel": case "resellervcloudx": {
//if (!isOwner) return m.reply(msg.owner)
    if(!isPremium) return m.reply('Lu ae bukan premium jembot') 
if (global.apikey.length < 1) return m.reply("Apikey not found")
if (!args[0]) return m.reply(example("nama"))
global.panel = [text.toLowerCase()]
let teksnya = `${global.kbh}${global.knh}${global.lay}${global.koz}${global.kbh}${global.nio}${global.ytt} sedang mencoba membuat akun panel, silahkan pilih RAM yang diinginkan.`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender] 
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Ram 1GB\",\"title\":\"Ram 1GB\",\"id\":\".cp1gb\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Ram 2GB\",\"title\":\"Ram 2GB\",\"id\":\".cp2gb\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Ram 3GB\",\"title\":\"Ram 3GB\",\"id\":\".cp3gb\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Ram 4GB\",\"title\":\"Ram 4GB\",\"id\":\".cp4gb\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Ram 5GB\",\"title\":\"Ram 5GB\",\"id\":\".cp5gb\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Ram 6GB\",\"title\":\"Ram 6GB\",\"id\":\".cp6gb\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Ram 7GB\",\"title\":\"Ram 7GB\",\"id\":\".cp7gb\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Ram 8GB\",\"title\":\"Ram 8GB\",\"id\":\".cp8gb\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Ram 9GB\",\"title\":\"Ram 9GB\",\"id\":\".cp9gb\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Ram 10GB\",\"title\":\"Ram 10GB\",\"id\":\".cp10gb\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Ram Unlimited\",\"title\":\"Ram Unlimited\",\"id\":\".cpunli\"}"
}]
})
})} 
}}, {userJid: m.sender, quoted: qchanel}) 
await Skyzo.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "cusr": case "adduser": case "cuser": case "touser": case "user": case "addusr": {
if (!text) return m.reply(example("username"))
if (!isOwner) return m.reply(msg.owner)
let username = text.toLowerCase()
let email = username + "@vcloudx.com"
let name = username + "vcloudx"
let randomChars = "VCLOUDX";
let ulycode = `VCLOUDX-`;
for (let i = 0; i < 5; i++) {
    ulycode += randomChars.charAt(Math.floor(Math.random() * randomChars.length));}
let password = ulycode
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": text.toLowerCase(),
"first_name": "member",
"last_name": "vcloudx",
"root_admin": false,
"language": "en",
"password": password.toString(),
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var orang
if (isGroup) {
orang = m.sender
await m.reply("𝐔𝐬𝐞𝐫 𝐝𝐨𝐧𝐞 𝐜𝐫𝐞𝐚𝐭𝐞 𝐛𝐲 ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ ✅")
} else {
orang = m.chat
}
var teks = `
𝐃𝐄𝐓𝐀𝐈𝐋 𝐀𝐊𝐔𝐍 𝐀𝐍𝐃𝐀

👤 *:* ${user.username}
🔐 *:* ${password.toString()}
🌐 *:* ${domain2}

𝗝𝗢𝗜𝗡 𝗚𝗥𝗨𝗣 𝗢𝗪𝗡𝗘𝗥
_https://chat.whatsapp.com/BkzEf70UB2K0MDImEX62hh_
_(ɢᴋ ᴊᴏɪɴ ᴀᴋᴜɴᴍᴜ ᴅᴇʟᴇᴛᴇ)_

𝗦𝗔𝗩𝗘 𝗡𝗠𝗥 𝗢𝗪𝗡𝗘𝗥
_wa.me/6287821239407_
_(save agar tidak hytam😹👿)_

_*© ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ*_
`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender] 
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Login\",\"url\":\"${global.domain}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qchanel}) 
await Skyzo.relayMessage(orang, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "meny": {
var teks = `yahahaha typo ya dek`
m.reply(teks)
}
break
case "menu": {
var teks = `Salah, bukan gitu.
Tapi gini .verlangganteng
`
m.reply(teks)
}
break
case "cp1gb": case "cp2gb": case "cp3gb": case "cp4gb": case "cp5gb": case "cp6gb": case "cp7gb": case "cp8gb": case "cp9gb": case "cp10gb": case "cpunli": {
if(!isPremium) return m.reply('Lu ae bukan premium jembot')
if (global.panel == null) return m.reply('Username not found')
var ram
var disknya
var cpu
if (command == "cp1gb") {
ram = "1024"
disknya = "1024"
cpu = "50"
} else if (command == "cp2gb") {
ram = "2048"
disknya = "2048"
cpu = "80"
} else if (command == "cp3gb") {
ram = "3072"
disknya = "3072"
cpu = "100"
} else if (command == "cp4gb") {
ram = "4096"
disknya = "4096"
cpu = "100"
} else if (command == "cp5gb") {
ram = "5120"
disknya = "5120"
cpu = "150"
} else if (command == "cp6gb") {
ram = "6144"
disknya = "6144"
cpu = "200"
} else if (command == "cp7gb") {
ram = "7168"
disknya = "7168"
cpu = "250"
} else if (command == "cp8gb") {
ram = "8192"
disknya = "8192"
cpu = "300"
} else if (command == "cp9gb") {
ram = "9216"
disknya = "9216"
cpu = "400"
} else if (command == "cp10gb") {
ram = "10240"
disknya = "10240"
cpu = "400"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
//if (!isOwner) return m.reply(msg.owner)
if(!isPremium) return m.reply('Lu ae bukan premium jembot')
let username = global.panel[0].toLowerCase()
let email = username + "@vcloudx.com"
let name = username + "vcloudx"
let randomChars = "VCLOUDX";
let ulycode = `VCLOUDX-`;
for (let i = 0; i < 5; i++) {
    ulycode += randomChars.charAt(Math.floor(Math.random() * randomChars.length));}
let password = ulycode
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": "member",
"last_name": "vcloudx",
"language": "en",
"password": password.toString(),
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "Script by 𝙑𝙀𝙍𝙇𝘼𝙉𝙂𝙄𝘿",
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 2,
"backups": 3,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (isGroup) {
orang = m.sender
await m.reply("𝐃𝐨𝐧𝐞 𝐜𝐫𝐞𝐚𝐭𝐞 𝐛𝐲 ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ")
} else {
orang = m.chat
}
var teks = `
𝐃𝐄𝐓𝐀𝐈𝐋  𝐏𝐀𝐍𝐄𝐋  𝐀𝐍𝐃𝐀

👤 *:* ${user.username}
🔐 *:* ${password.toString()}
🌐 *:* ${domain2}
📝 *:* ${ram == "0" ? "∞" : ram.charAt(0) + "GB"}/${cpu == "0" ? "∞" : cpu+"%"}
🆔 *:* ${server.id}

𝗝𝗢𝗜𝗡 𝗚𝗥𝗨𝗣 𝗢𝗪𝗡𝗘𝗥
_https://chat.whatsapp.com/BkzEf70UB2K0MDImEX62hh_
_(ɢᴋ ᴊᴏɪɴ ᴘᴀɴᴇʟᴍᴜ ᴅᴇʟᴇᴛᴇ)_

𝗦𝗔𝗩𝗘 𝗡𝗠𝗥 𝗢𝗪𝗡𝗘𝗥
_wa.me/6287821239407_
_(save agar tidak hytam)_

_*© ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ*_
`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender] 
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teks
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Login\",\"url\":\"${global.domain}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})} 
}}, {userJid: m.sender, quoted: qchanel}) 
await Skyzo.relayMessage(orang, msgii.message, { 
messageId: msgii.key.id 
})
global.panel = null
}
break
case "listp": case "listserver": {
if (global.apikey.length < 1) return m.reply("Apikey not found")
if (!isOwner) return m.reply(msg.owner)
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply("No bot server available")
let messageText = "𝐋𝐈𝐒𝐓 𝐏𝐀𝐍𝐄𝐋 & 𝐇𝐎𝐒𝐓\n\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `𝗡𝗮𝗺𝗲 : ${s.name}\n`
messageText += `𝗦𝗽𝗲𝗸 : ${s.limits.memory == 0 ? "∞" : s.limits.memory.length > 3 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}/${s.limits.cpu == 0 ? "∞" : s.limits.cpu.toString() + "%"}\n`
messageText += `𝗜𝗗 : ${s.id}\n\n`
}

messageText += `Total servers is : ${res.meta.pagination.count} server`;
  
  await Skyzo.sendMessage(m.chat, { text: messageText }, { quoted: m })
}
break
case "delpanel": case "delserver": case "delsrvr": {
if (!isOwner) return m.reply(msg.owner)
if (global.apikey.length < 1) return m.reply("Apikey not found")
if (!args[0]) return m.reply(example("idservernya\n\nuntuk melihat id server ketik *.listserver*"))
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let result = await f.json()
let servers = result.data
let sections = []
for (let server of servers) {
let s = server.attributes
if (args[0] == s.id.toString()) {
sections.push(s.name.toLowerCase())
let f = await fetch(domain + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (sections.includes(u.username)) {
let delusr = await fetch(domain + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections.length == 0) return m.reply("User not found")
m.reply(`Successfully deleted panel account by ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ`)
}
break
case "p": case "sendpayment": case "payment": case "pay": case "listpayment": {
if (!isOwner) return m.reply(msg.owner)
let teksnya = `𝗣𝗔𝗬𝗠𝗘𝗡𝗧 ᴠᴄʟᴏᴜᴅx ᴏꜰꜰɪᴄɪᴀʟ📦👇`
let msgii = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender] 
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: teksnya
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Dana Payment\",\"title\":\"Dana\",\"id\":\".danapay\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Ovo Payment\",\"title\":\"Ovo\",\"id\":\".ovopay\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Gopay Payment\",\"title\":\"Gopay\",\"id\":\".gopaypay\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"Shopeepay Payment\",\"title\":\"ShopeePay\",\"id\":\".shopeepay\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"QRIS All Payment\",\"title\":\"QRIS\",\"id\":\".qrispay\"}"
}, {
"name": "quick_reply", "buttonParamsJson": "{\"display_text\":\"BRI Payment\",\"title\":\"BRI\",\"id\":\".bripay\"}"
}]
})
})} 
}}, {userJid: m.sender, quoted: qdoc}) 
await Skyzo.relayMessage(msgii.key.remoteJid, msgii.message, { 
messageId: msgii.key.id 
})
}
break
case "danapay": {
if (global.dana == false) return m.reply('Not Available.')
let teks = `*NOPE :* ${global.dana}
*A/N :* verlang

${global.syarat1}
${global.syarat2}`
Skyzo.sendText(m.chat, teks, qkontak)
}
break
case "ovopay": {
if (global.ovo == false) return m.reply('Not Available.')
let teks = `
*NOPE :* ${global.ovo}
*A/N :* verlang

${global.syarat1}
${global.syarat2}`

Skyzo.sendText(m.chat, teks, qkontak)
}
break
case "gopaypay": {
if (global.gopay == false) return m.reply('Not Available.')
let teks = `
*NOPE :* ${global.gopay}
*A/N :* verlang

${global.syarat1}
${global.syarat2}`
Skyzo.sendText(m.chat, teks, qkontak)
}
break
case "shopeepay": {
if (global.shopeepay == false) return m.reply('Not Available.')
let teks = `
*NOPE :* ${global.shopeepay}
*A/N :* verlang

${global.syarat1}
${global.syarat2}`
Skyzo.sendText(m.chat, teks, qkontak)
}
break
case "qrispay": {
if (global.qris == false) return m.reply('Not Available.')
let teks = `
*KODE* : ${global.qris}
*A/N* : MRWIBUSS

${global.syarat1}
${global.syarat2}`
Skyzo.sendMessage(m.chat, {image: {url: global.qris}, caption: teks}, {quoted: qkontak})
}
break
case "bripay": {
if (global.bri == false) return m.reply('Not Available.')
let teks = `
*NOREK :* ${global.bri}
*A/N :* -

${global.syarat1}
${global.syarat2}`
Skyzo.sendText(m.chat, teks, qkontak)
}
default:
if (budy.startsWith('$')) {
if (!isOwner) return
exec(budy.slice(2), (err, stdout) => {
if(err) return Skyzo.sendMessage(m.chat, {text: err.toString()}, {quoted: m})
if (stdout) return Skyzo.sendMessage(m.chat, {text: util.format(stdout)}, {quoted: m})
})}

if (budy.startsWith(">")) {
if (!isOwner) return
try {
let evaled = await eval(text)
if (typeof evaled !== 'string') evaled = util.inspect(evaled)
Skyzo.sendMessage(m.chat, {text: util.format(evaled)}, {quoted: m})
} catch (e) {
Skyzo.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

if (budy.startsWith("=>")) {
if (!isOwner) return
try {
const evaling = await eval(`;(async () => { ${text} })();`);
return Skyzo.sendMessage(m.chat, {text: util.format(evaling)}, {quoted: m})
} catch (e) {
return Skyzo.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

}} catch (e) {
console.log(e)
Skyzo.sendMessage(`${owner}@s.whatsapp.net`, {text:`${util.format(e)}`})
}}

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})