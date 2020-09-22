import { create, Whatsapp, Message} from 'venom-bot';
import { ChatBotConfig } from './config/ChatBot.Config'
import OptionsManager from './PricipalMenu';
import Manager from "./Manager";
import PricipalMenu from './PricipalMenu';

export const callOptionsMenu = (chatBotSingletonInstance: Whatsapp, typeManager: Manager) => {
  
    chatBotSingletonInstance.onMessage( async (message) => {
        if (message.body && message.isGroupMsg === false) {
            typeManager.handleOptions(message);
        }
    })
}

(async () => {
    const chatBotSingletonInstance  = await create() as Whatsapp;
    const pricipalMenu: Manager = new PricipalMenu(chatBotSingletonInstance);
    callOptionsMenu(chatBotSingletonInstance, pricipalMenu);

})();



