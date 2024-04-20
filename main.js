import { Telegraf, Markup } from 'telegraf'
import {message} from "telegraf/filters";

const token = '6962938579:AAE_Zi1vuUL5Fr3gKXSIT7xN9hAQVhh_mTY'
const webAppUrl = 'https://angular-app-tg.web.app/'

const bot = new Telegraf(token)
// Список пользователей и их чат id
const allowedChatIds = [
    802052372,
    688437402,
];

bot.command('start', (ctx) => {
    // Проверяем chat id пользователя
    if (allowedChatIds.includes(ctx.from.id)) {
        // Если chat id пользователя в списке разрешенных, отправляем сообщение и клавиатуру
        ctx.reply(
            'Добро пожаловать! Нажмите на кнопку ниже, чтобы запустить приложение',
            Markup.keyboard([
                Markup.button.webApp('Запустить приложение', `${webAppUrl}`),
                Markup.button.webApp('Новое сообщение', `${webAppUrl}/feedback`),
            ])
        );

        // Отправка дополнительного приветственного сообщения
        ctx.reply(
            `Привет!\n\n` +
            `Обучалки:\n` +
            `• <a href="${webAppUrl}education">Быстрое начало</a>\n` +
            `• <a href="${webAppUrl}education">Как редактировать профиль?</a>\n` +
            `• <a href="${webAppUrl}education">Как назначить удобные для встреч дни?</a>\n` +
            `• <a href="${webAppUrl}education">Как изменить дни для встреч?</a>\n` +
            `• <a href="${webAppUrl}education">Как удалить профиль?</a>\n` ,
            { parse_mode: 'HTML' }
        );
    } else {
        // Если chat id пользователя не в списке разрешенных, отправляем сообщение с его chat id
        ctx.reply(`Извините, ваш chat id: ${ctx.from.id}, не имеет доступа к этому боту.`);
    }
});
bot.launch()