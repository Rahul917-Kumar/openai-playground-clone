    import {create} from  'zustand'
import {IuserAssistantformat, IchatFormat, IaddChat} from "./chatFormatInterface"


const updateChat = (array:IchatFormat[], id:number, updateChatinfo:IchatFormat):IchatFormat[]=>{
    array[id] = updateChatinfo
    return array
}

const deletePaticularChatinChats = (array:IchatFormat[], id:number):IchatFormat[]=>{
     array.splice(id, 1)
    return array
}

// below store help me to provide input as a user or assistant to chatgpt

export const ChatDetailStore = create<IuserAssistantformat>((set)=>({
    chats:[{
        role:"user",
        content:""
    }],
    addChats:(newChats:IchatFormat[])=>set((state)=>({
        ...state,
        chats : (state.chats = newChats)
    })),
    updateChats:(id:number, chat:IchatFormat)=>set((state)=>({
        ...state,
        chats : (state.chats= updateChat(state.chats, id, chat) )
    })),
    deleteChats:(newChat:IchatFormat[])=>set((state)=>({
        ...state,
        chats:[]
    })),
    deletePaticularChat:(id:number)=>set((state)=>({
        ...state,
        chats: (state.chats = deletePaticularChatinChats(state.chats, id))
    }))
}))

// after making api calls all the responses will be handle by below store

export const ChatResponseStore = create<IaddChat>((set)=>({
    chats:[],
    addChats:(newChats:IchatFormat[])=>set((state)=>({
        ...state,
        chats : (state.chats = newChats)
    }))
}))