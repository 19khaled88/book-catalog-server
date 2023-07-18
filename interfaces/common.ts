export type IUpdateResponse<T> ={
    [K in keyof T]:string | number
}