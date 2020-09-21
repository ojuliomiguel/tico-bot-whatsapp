import { create, Whatsapp } from 'venom-bot';

export const ChatBotConfig = {
    start: async function() {
        console.log('entrou');
        const client = await create();
        return client;
    }

}