interface IParam {
    name: string;
    age: number;
    isAdult: boolean;
}
interface IHuman {
    name: string;
    age: number;
    korean: boolean;
    under18: boolean;
    created_at: string;
}
export declare function generateHuman(param: IParam, isKorean: boolean): IHuman;
export {};
