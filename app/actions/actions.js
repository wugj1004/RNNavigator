/**
 * Created by wugj on 2018/5/3.
 */
import { INCREASE, DECREASE, RESET } from './actionsTypes';

const increase = () => ({ type: INCREASE });
const decrease = () => ({ type: DECREASE });
const reset = () => ({ type: RESET });

export {
    increase,
    decrease,
    reset
}