import { Message, Whatsapp } from "venom-bot";
import Manager from "./Manager";

export default class SubMenu implements Manager {
    constructor(private readonly chatBotSingletonInstance: Whatsapp) {
        this.chatBotSingletonInstance = chatBotSingletonInstance;
    }

   async handleOptions(message: Message) {
        switch (message.body.toLocaleLowerCase()) {
            case "tico2": {
                try {
                    const result = await this.chatBotSingletonInstance.sendImage(
                        message.from,
                        './assets/bot.jpg',
                        'image-name',
                        ` Olá, ${message.sender.pushname}. Me chamo Tico2 e estou aqui para te ajudar!` +
                        'Digite um CEP para eu buscá-lo:' +
                        '   1️⃣ - Consultar Conta bancária'
                    )
                    break;

                } catch (error) {
                    console.log(error);
                }
            }
        }
    }
}