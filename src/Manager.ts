import {Message} from 'venom-bot';

export default interface Manager{
    handleOptions(message: Message): void;  

}