let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender]
  const caption = `
*❏––––––『 JADI 𝐁𝐎𝐓 』––––––❏*

OWNER BOT MELAYANI : 
~~~~~~~~~~~~~~~~~~~~~~~~~~
JASA JADIBOT : 25K
---------------------------------------------------------------------
KONTAK OWNER : wa.me/6282389924037



⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕
        © _VynaaMD_

`.trim()
  conn.sendFile(m.chat, 'https://telegra.ph/file/50a3ea0fe37a97627d5ff.jpg', null, caption, m)
}
handler.help = ['jadibot']
handler.tags = ['jadibot']
handler.command = /^(jadibot)$/i;

handler.register = false
export default handler