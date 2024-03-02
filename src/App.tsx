import React, {useState} from 'react';
import './App.css';
import {NewComponents} from "./NewComponents";

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

    let currentMoney = money;

    const [filter, setFilter] = useState<FilterValueType>('all')

    if (filter === 'dollars') {currentMoney = money.filter((el)=> el.banknots === 'Dollars')}
    if (filter === 'rubles') {currentMoney = money.filter((el)=> el.banknots ==='RUBLS')}

    const onClackHandler = (value:FilterValueType) => {
        debugger
        setFilter(value)
    }


    return (
    <div className="App">
      <NewComponents currentMoney={currentMoney} onClackHandler={onClackHandler}/>
    </div>
    );
}
export default App;
