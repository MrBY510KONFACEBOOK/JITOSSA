import {GoogleGenerativeAI} from '@google/generative-ai'
import displayLoadingScreen from '../lib/loading.js'
const genAI = new GoogleGenerativeAI('AIzaSyBWozNQdyPr6q5D7U1Izfl3BArjnNfwGuA');


let handler = async (m, { conn, text, args, usedPrefix, command }) => {
  try {
    if (!text) throw `مرحبا أنا مساعد جوجل كيف أقوم بمساعدتك. ...`
    m.react('🪩')
    await displayLoadingScreen(conn, m.chat)
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = text

    const result = await model.generateContent(prompt);
    const response = result.response;
    const textt = response.text();
    m.reply(textt)
  } catch (error) {
    console.error(حدث خطأ);
    m.reply('Oops! Something went wrong. , we are trying had to fix it asap');
  }
}
handler.help = ['gemini <text>']
handler.tags = ['ai']
handler.command = ['gemini', 'gm'];

export default handler