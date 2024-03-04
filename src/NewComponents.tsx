import React from 'react';
import {FilterValueType} from "./App";

type MoneyType = {
    banknots: string
    value: number
    number: string
}

type CurrentMoneyType = {
    currentMoney:Array<MoneyType>
    onClickHandler: (value:FilterValueType)=>void
}
export const NewComponents = (props:CurrentMoneyType) => {
    debugger
    return (
        <>
            <ul>
                {props.currentMoney.map((item, index) => {
                    return (
                        <li key={index}>
                            <span>{item.banknots}</span>
                            <span>{item.value}</span>
                            <span>{item.number}</span>
                        </li>
                    )
                })}
            </ul>
            <button onClick={() => props.onClickHandler('all')}>all</button>
            <button onClick={() => props.onClickHandler('rubles')}>rubles</button>
            <button onClick={() => props.onClickHandler('dollars')}>dollars</button>
        </>
    );
};

