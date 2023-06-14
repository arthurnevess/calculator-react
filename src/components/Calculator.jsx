import React, { useState } from 'react'
import './Calculator.css'
import Container from '@mui/material/Container';
import {Box} from '@mui/system'

export default function Calculator() {
    const[num, setNum] = useState(0);
    const[firstnum, setFirstNum] = useState(0);
    const[operator, setOperator] = useState();

    function inputNum(v) {
        var input=v.target.value;
        if (num===0){
            setNum(input);
        }else
        setNum(num + input);
    }

    function clear() {
        setNum(0);
    }

    function porcent() {
        setNum(num/100)
    }

    function changeSign() {
        if(num>0){
            setNum(-num)
        } else{
            setNum(Math.abs(num))
        }
    }
    function operatorHandler(v) {
        var operatorInput = v.target.value;
        setOperator(operatorInput);
        setFirstNum(num);
        setNum(0);
    }

    function calculate(){
        if(operator === "/"){
            setNum(firstnum / num);
        } else if (operator === "x"){
            setNum(firstnum*num);
        } else if (operator === "+"){
            setNum(parseFloat(firstnum) + parseFloat(num));
        } else if (operator === "-"){
        setNum(firstnum - num);
        }
    }
  return (
    <div>
        <Box m={4} />
        <Container maxWidth="xs">
            <div className='back'>
            <Box m={6} />
                <h1 className='result'>{num}</h1>
                <button onClick={clear}>AC</button>
                <button onClick={changeSign}>+/-</button>
                <button onClick={porcent}>%</button>
                <button className='orange' onClick={operatorHandler} value="/">/</button>
                <button className='gray' onClick={inputNum} value={7}>7</button>
                <button className='gray' onClick={inputNum} value={8}>8</button>
                <button className='gray' onClick={inputNum} value={9}>9</button>
                <button className='orange' onClick={operatorHandler} value="x">x</button>
                <button className='gray' onClick={inputNum} value={4}>4</button>
                <button className='gray' onClick={inputNum} value={5}>5</button>
                <button className='gray' onClick={inputNum} value={6}>6</button>
                <button className='orange' onClick={operatorHandler} value="-">-</button>
                <button className='gray' onClick={inputNum} value={1}>1</button>
                <button className='gray' onClick={inputNum} value={2}>2</button>
                <button className='gray' onClick={inputNum} value={3}>3</button>
                <button className='orange' onClick={operatorHandler} value="+">+</button>
                <button className='gray' onClick={inputNum} value={0}>0</button>
                <button className='gray' onClick={inputNum} value={"."}>,</button>
                <button className='gray' style={{visibility:"hidden"}}>,</button>
                <button className='orange' onClick={calculate}>=</button>
                
            </div>
        </Container>
    </div>
  )
}
