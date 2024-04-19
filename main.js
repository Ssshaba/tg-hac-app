import { Telegraf, Markup } from 'telegraf'
import {message} from "telegraf/filters";

const token = '6962938579:AAE_Zi1vuUL5Fr3gKXSIT7xN9hAQVhh_mTY'
const webAppUrl = 'https://angular-app-tg.web.app/'

const bot = new Telegraf(token)

bot.command('start', (ctx) => {
    ctx.reply(
        'Добро пожаловать! Нажмите на кнопку ниже, чтобы запустить приложение',
        Markup.inlineKeyboard([
            Markup.button.webApp('Отправить сообщение', `${webAppUrl}/feedback`),
            Markup.button.webApp('Новое сообщение', `${webAppUrl}/feedback`),
        ])
    )

    // Отправка дополнительного приветственного сообщения
    ctx.reply(
        'Пветри!\n\n' +
        'Обучалки:\n' +
        '• Первая обучалка \n' +
        '• вторая обучалка \n'
    );


})

bot.on(message('web_app_data'), async (ctx) => {
    const data = ctx.webAppData.data.json()
    ctx.reply(`Ваше сообщение: ${data?.feedback}` ?? 'empty message')
})

bot.launch()