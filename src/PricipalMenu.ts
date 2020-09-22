import { Message, Whatsapp } from "venom-bot";
import Manager from "./Manager";
import {callOptionsMenu} from './index'
import SubMenu from "./SubMenu";

export default class PricipalMenu implements Manager {
    constructor(private readonly chatBotSingletonInstance: Whatsapp) {

    }

    async handleOptions(message: Message) {
        switch (message.body.toLocaleLowerCase()) {
            case "tico": {
                try {
                    const result = await this.chatBotSingletonInstance.sendImage(
                        message.from,
                        './assets/bot.jpg',
                        'image-name',
                        ` Olá, ${message.sender.pushname}. Me chamo Tico e estou aqui para te ajudar! \n\n` +
                        'Digite um CEP para eu buscá-lo: \n' +
                        '   1️⃣ - Consultar CEP'
                    )
                    break;

                } catch (error) {
                    console.log(error);
                }
            }
            
            case "1": {
                
                this.chatBotSingletonInstance.sendText(message.from, 'Consultando cep...');
                break;
            }

            case "4": {
                callOptionsMenu(this.chatBotSingletonInstance, new SubMenu(this.chatBotSingletonInstance))
            }
        
        }
    }
}