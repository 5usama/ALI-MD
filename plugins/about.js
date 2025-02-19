
const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    alias: "dev",
    react: "👑",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let about = `*╭┈───────────────•*

*👋 HELLO ${pushname}*

*╰┈───────────────•*
*╭┈───────────────•*
*│  ◦* *ᴡᴇʟᴄᴏᴍᴇ ɪᴛs Aʟɪ-Mᴅ-V1*
*│  ◦* *ᴄʀᴇᴀᴛᴇʀ 𝟣 Lᴏʀᴅ Aʟɪ²³⁷*
*│  ◦* *ᴄʀᴇᴀᴛᴇʀ 𝟤 Tʜᴇ Aʙᴅᴜʟʟᴀʜ²³⁷*
*│  ◦* *ʀᴇᴀʟ ɴᴀᴍᴇ➠ Aʟɪ.*
*│  ◦* *ᴀɢᴇ➠ 17*
*│  ◦* *ᴄɪᴛʏ➠ Nᴇᴡ Yᴏʀᴋ*
*│  ◦* *ᴀ sɪᴍᴘʟᴇ ᴡʜᴀᴛsᴀᴘᴘ ᴅᴇᴠᴇʟᴘᴏʀ*
*╰┈───────────────•*
> *◆◆◆◆◆◆◆◆◆◆◆◆*

*[ • ALI-𝖬𝖣－𝖵1 - TEAM • ]*
*╭┈───────────────•*
*│  ◦* *▢➠Lᴏʀᴅ ᴀʟɪ²³⁷*
*│  ◦* *▢➠Tʜᴇ Aʙᴅᴜʟʟᴀʜ²³⁷*
*╰┈───────────────•*
*•────────────•⟢*
> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀʟɪ
*•────────────•⟢*
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:about},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
