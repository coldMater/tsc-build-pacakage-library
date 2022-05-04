interface IParam {
  name: string
  age: number
  isAdult: boolean
}

interface IHuman {
  name: string
  age: number
  korean: boolean
  under18: boolean
}

export function generateHuman(param: IParam, isKorean: boolean): IHuman {
  return {
    name: param.name,
    age: param.age,
    korean: isKorean,
    under18: !param.isAdult,
  }
}