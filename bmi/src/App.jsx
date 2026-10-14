import {useState} from 'react';
function App(){
const[height,setheight]=useState('');
const [weight,setweight]=useState('');
const[result,setresult]=useState([]);
function calculatebmi(){
    if(height===''||weight===''||Number(height)<=0||Number(weight)<=0){
        alert('enter details');
    }
    const h = Number(height)/100;
    const bmi =Number(weight)/(h*h);
    let category='';
    if(bmi<18.5){
        category='Underweight';
    }
    else if(bmi<25){
        category='Normal weight';
    }
    else if(bmi<30){
        category='Overweight';
    }
    else{
        category='Obesity';
    }
    setresult('bmi:'+bmi.toFixed(2)+category);
};
return(
    <div>
        <h1>bmi calculator</h1>
        <input
        type="number"
        placeholder="enter height"
        value={height}
        onChange={(e)=>setheight(e.target.value)}
        />
        <br></br>
        <input
        type="number"
        placeholder="enter weight"
        value={weight}
        onChange={(e)=>setweight(e.target.value)}
        />
        <br></br>
        <button onClick = {calculatebmi}>calculatebmi</button>
        <h2>{result}</h2>
    </div>
)
}
export default App;