export type IUpdateResponse<T> ={
    [K in keyof T]:string | number
}

export type IQuery {
    query:string | number | undefined
}