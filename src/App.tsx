import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {NewComponents} from "./NewComponents";
import {Input} from "./components/Input";
import {Button} from "./components/Button";

export type FilterValueType = 'all' | 'rubles' | 'dollars';
function App() {
    const [money, setMoney] = useState([
        { banknots: 'Dollars', value: 100, number: ' a1234567890' },
        { banknots: 'Dollars', value: 50, number: ' z1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
        { banknots: 'Dollars', value: 100, number: ' e1234567890' },
        { banknots: 'Dollars', value: 50, number: ' c1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
        { banknots: 'Dollars', value: 50, number: ' x1234567890' },
        { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
    ])

    const [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ]
    )

    let currentMoney = money;

    let [filter, setFilter] = useState<FilterValueType>('all')


    if (filter === 'dollars') {currentMoney = money.filter((el)=> el.banknots === 'Dollars')}
    if (filter === 'rubles') {currentMoney = money.filter((el)=> el.banknots ==='RUBLS')}

    const onClickHandler = (value:FilterValueType) => {

        setFilter(value)
    }


    let [title, setTitle] = useState('')

    const addMessageHandler = () =>{
        setMessage([{message: title}, ...message])
        setTitle('')
    }

    return (
    <div className="App">
        <div>
            <NewComponents currentMoney={currentMoney} onClickHandler={onClickHandler}/>
        </div>
        <div>
            <Input title={title} setTitle={setTitle}/>
            <Button nameButton={'+'} addMessageHandler={addMessageHandler}/>
        </div>
        {message.map((el, index) => {
            return (
                <div key={index}>{el.message}</div>
            )
        })}

    </div>
    );
}
export default App;
