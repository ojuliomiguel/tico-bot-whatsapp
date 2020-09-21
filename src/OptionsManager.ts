import { Message, Whatsapp } from "venom-bot";
import cep from 'cep-promise';

export default class OptionsManager {
   
    whats: Whatsapp;
    constructor(whats: Whatsapp) {
        this.whats = whats; 
    }

    async handleOptions(message: Message) {
        switch (message.body.toLocaleLowerCase()) {
            case "tico": {
                try {
                    const result = await this.whats.sendImage(
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
                
                this.whats.sendText(message.from, 'Consultando cep...');
                break;
            }
        
        }
    }
}