import {IINCREMENTAction} from '../actions'
import {CHANGENUM} from '../actionTypes'

// 处理并返回states
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = 0): number=>{
    return state + 1
}