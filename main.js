import axios from 'axios';
import { Telegraf, Markup } from 'telegraf'
import {message} from "telegraf/filters";

const token = '6962938579:AAE_Zi1vuUL5Fr3gKXSIT7xN9hAQVhh_mTY'
const webAppUrl = 'https://angular-app-tg.web.app/'
const getUsers = 'https://persikivk.ru/api/users';


const bot = new Telegraf(token)


bot.command('start', async (ctx) => {
    // фото юзера
    // try {
    //     // Получаем информацию о фотографиях профиля пользователя
    //     const userProfilePhotos = await ctx.telegram.getUserProfilePhotos(ctx.from.id);
    //
    //     // Проверяем, есть ли у пользователя фотографии
    //     if (userProfilePhotos.total_count > 0) {
    //         // Получаем информацию о файле фотографии с самым большим размером
    //         const photoFileId = userProfilePhotos.photos[0][0].file_id;
    //
    //         // Получаем URL фотографии
    //         const photoURL = await ctx.telegram.getFileLink(photoFileId);
    //
    //         // Отправляем URL фотографии пользователю в чат
    //         await ctx.reply(`Ссылка на вашу фотографию профиля: ${photoURL}`);
    //     } else {
    //         await ctx.reply('У вас нет фотографий в профиле.');
    //     }
    // } catch (error) {
    //     console.error('Ошибка при получении фотографии профиля:', error);
    //     await ctx.reply('Произошла ошибка при получении фотографии профиля.');
    // }


    // Получаем список пользователей
    const response = await axios.get(getUsers);
    const users = response.data;
    console.log('Telegram request:', ctx.update);

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

            `Привет!!\n\n` +
            `Обучалки:\n` +
            `• [Быстрое начало](${webAppUrl}education)\n` +
            `• [Как редактировать профиль?](${webAppUrl}edueditprof)\n` + 
            `• [Как познакомиться с коллегой?](${webAppUrl}edumeetcollegue)\n` +
            `• [Что такое "Статистика" и как её посмотреть?](${webAppUrl}education)\n` +
            `• [Что такое "Бонусы" и как ими пользоваться?](${webAppUrl}edubonus)\n` +
            `• [Как администратору добавить профиль сотрудника ?](${webAppUrl}education)\n` +
            `• [Как администратору удалить профиль сотрудника ?](${webAppUrl}education)\n`,
            { parse_mode: 'Markdown' }
        );
    } else {

        ctx.reply(`Извините, ваш chat id: ${ctx.from.id}, не имеет доступа к этому боту.`);
    }

});

bot.on(message('web_app_data'), async ctx => {
    const data = ctx.webAppData.data.json()
    ctx.reply('Chat ID добавленного сотрудника: ${data?.feedback}' ?? 'empty message')
})

bot.launch()