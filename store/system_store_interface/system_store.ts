import {create} from  'zustand'
import {ISystemFormat} from "./system_interface"
export const SystemStore = create<ISystemFormat>((set)=>({
    systeminput:"",
    updatesystemInput:(newMessage:string)=>set((state)=>({
        ...state,
        systeminput: (state.systeminput = newMessage)
    }))
}))