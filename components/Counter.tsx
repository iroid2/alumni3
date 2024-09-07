// // src/components/Counter.tsx  
// "use client";  // Add this line at the top to declare it as a Client Component  

// import { decrement, increment } from "@/app/store/slices/counterSlice";  
// import { RootState } from "@/app/store/store";  
// import React from "react";  
// import { useDispatch, useSelector } from "react-redux";  

// const Counter: React.FC = () => {  
//   const dispatch = useDispatch();  
//   const count = useSelector((state: RootState) => state.counter.value);  
   
//   return (  
//     <div>  
//       <h1>Counter: {count}</h1>  
//       <button onClick={() => dispatch(increment())}>Increment</button>  
//       <button onClick={() => dispatch(decrement())}>Decrement</button>  
//     </div>  
//   );  
// };  

// export default Counter;