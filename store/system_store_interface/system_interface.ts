// export interface IMessageFormat{
//     role:"system";
//     systeminput:string;
// }

export interface ISystemFormat{
    systeminput:string;
    updatesystemInput:(newMessage:string)=>void;
}