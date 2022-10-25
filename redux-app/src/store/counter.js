const INCREASE = 'counter/INCREASE'
const DECREASE = 'counter/DECREASE'

// 액션 생성 함수
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

let initialState = {
    number: 0
}

function coutner(state = initialState, action) {
    switch (action.type) {
        case INCREASE:
            return {
                number: state.number + 1
            }
        case DECREASE:
            return {
                number: state.number - 1
            }
        default:
            return state;
    }
}

export default coutner;