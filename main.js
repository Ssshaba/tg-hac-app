import axios from 'axios';
import { Telegraf, Markup } from 'telegraf'
import {message} from "telegraf/filters";

const token = '6962938579:AAE_Zi1vuUL5Fr3gKXSIT7xN9hAQVhh_mTY'
const webAppUrl = 'https://angular-app-tg.web.app/'
const getUsers = 'https://persikivk.ru/api/users';


const bot = new Telegraf(token)


bot.command('start', async (ctx) => {

    // Получаем список пользователей
    const response = await axios.get(getUsers);
    const users = response.data;
    //  есть ли пользователь в списке
    const user = users.find(user => user.tgId === ctx.from.id.toString());
    if (user) {
        ctx.reply(
            'Добро пожаловать! Нажмите на кнопку ниже, чтобы запустить приложение',
            Markup.keyboard([
                Markup.button.webApp('Запустить приложение', `${webAppUrl}`),
                Markup.button.webApp('Новое сообщение', `${webAppUrl}/feedback`),
            ])
        );

        ctx.reply(
            `Привет!\n\n` +
            `Обучалки:\n` +
            `• <a href="${webAppUrl}education">Быстрое начало</a>\n` +
            `• <a href="${webAppUrl}edueditprof">Как редактировать профиль?</a>\n` +
            `• <a href="${webAppUrl}education">Как назначить удобные для встреч дни?</a>\n` +
            `• <a href="${webAppUrl}education">Как изменить дни для встреч?</a>\n` +
            `• <a href="${webAppUrl}education">Как удалить профиль?</a>\n`,
            { parse_mode: 'HTML' }
        );
    } else {
       
        ctx.reply(`Извините, ваш chat id: ${ctx.from.id}, не имеет доступа к этому боту.`);
    }

});
bot.launch()