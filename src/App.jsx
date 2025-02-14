
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment } from './redux/features/counter/counterSlice';
import { useAppDispatch, useAppSelector } from './redux/hook';

function App() {

  const dispatch = useAppDispatch();
  const {count} = useAppSelector((state)=> state.counter);

  const handleIncrement= () =>{
    dispatch(increment())
  }

  const handleDecrement= () =>{
    dispatch(decrement())
  }

  return (
    <>
     <button onClick={handleIncrement}>Increment</button>
     <p>{count}</p>
     <button onClick={handleDecrement}>Decrement</button>
    </>
  )
}

export default App
