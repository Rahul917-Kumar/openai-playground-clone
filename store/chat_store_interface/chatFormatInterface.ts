export interface IchatFormat{
    role:string;
    content:string;
}

export interface IaddChat{
    chats:IchatFormat[];
    addChats:(newChats:IchatFormat[])=>void;
    
}   

export interface IuserAssistantformat extends IaddChat{
    // this update method will be helpful for both updating roles and messages
    updateChats:(id:number, chat:IchatFormat)=>void;
    deleteChats:(newChats:IchatFormat[])=>void;
    deletePaticularChat:(id:number)=>void;
}