
import './App.css'
import { decrement, increment } from './redux/features/counter/counterSlice';
import { useAppDispatch, useAppSelector } from './redux/hook';

function App() {

  const dispatch = useAppDispatch();
  const {count} = useAppSelector((state)=> state.counter);

  const handleIncrement= (amount) =>{
    dispatch(increment(amount))
  }

  const handleDecrement= (amount) =>{
    dispatch(decrement(amount))
  }

  return (
    <>
     <button onClick={() =>handleIncrement(5)}>Increment 5</button>
     <button onClick={() =>handleIncrement(1)}>Increment</button>
     <p>{count}</p>
     <button onClick={()=>handleDecrement(5)}>Decrement 5</button>
     <button onClick={()=>handleDecrement(1)}>Decrement</button>
    </>
  )
}

export default App
