import { create, Whatsapp, Message } from 'venom-bot';
import { ChatBotConfig } from './config/ChatBot.Config'
import OptionsManager from './OptionsManager';

(async () => {
    const ChatBot = await create() as Whatsapp;

    main(ChatBot);
})();

function main(whats: Whatsapp) {
    const manager = new OptionsManager(whats);
    whats.onMessage(async (message) => {
        if (message.body && message.isGroupMsg === false) {
           manager.handleOptions(message);
        }
    })
}


