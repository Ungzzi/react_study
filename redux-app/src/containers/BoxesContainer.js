import React, { useCallback } from "react";
import { Box1, Box2, Box3, Box4 } from "../components/Boxses";
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from '../store/counter';

export const Box1Container = React.memo(() => {
    return <Box1 />
})

export const Box2Container = React.memo(() => {
    return <Box2></Box2>
})

export function Box3Container() {
    const number = useSelector(state => state.counter.number);
    return <Box3 number={number}></Box3>
}
export function Box4Container() {
    const dispatch = useDispatch();
    const onIncrease = useCallback(() => { dispatch(increase()) }, [dispatch])
    const onDecrease = useCallback(() => { dispatch(decrease()) }, [dispatch])
    return <Box4 onIncrease={onIncrease} onDecrease={onDecrease}></Box4>
}