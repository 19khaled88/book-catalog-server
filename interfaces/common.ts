export type IUpdateResponse<T> ={
    [K in keyof T]:string | number
}
// export type IQuery<T> ={
//     [K in keyof T]:string | number
// }

export interface IQuery {
    query?:string | number | undefined
}