import {CHANGENUM,CHANGENUM_TYPE} from '../actionTypes'

export interface IINCREMENTAction {
    type: CHANGENUM_TYPE;
  }

  // 增加 state 次数的方法
export const increment = (): IINCREMENTAction => ({
    type: CHANGENUM,
  })

  