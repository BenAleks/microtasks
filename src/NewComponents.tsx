import React from 'react';
import {FilterValueType} from "./App";

type MoneyType = {
    banknots: string
    value: number
    number: string
}

type CurrentMoneyType = {
    currentMoney:Array<MoneyType>
    onClackHandler: (value:FilterValueType)=>void
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
            <button onClick={() => props.onClackHandler('all')}>all</button>
            <button onClick={() => props.onClackHandler('rubles')}>rubles</button>
            <button onClick={() => props.onClackHandler('dollars')}>dollars</button>
        </>
    );
};

