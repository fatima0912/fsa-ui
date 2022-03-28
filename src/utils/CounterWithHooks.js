import { useEffect, useState } from "react";

const CounterWithHooks = () =>{
    
    const [count, setCount] = useState(10);
    // const inc =() =>{
    //     setCount(count+1);
    // }

    //componentDidMount
    useEffect(() => {
        //api data
        const interval = setTimeout( () => {
                        setCount(count + 1);
                        console.log(count, 'count');
                    }, 1000);
                        
                         return () => {
                          clearInterval(interval);
                        }
                    }, [count]);
    // const dec =()=>{
    //     setCount(count -1);
    // }
    return <div>
    <h1>Counter With React Hooks</h1>
    {/* <button  className="btn btn-danger btn-sm"> -- </button> */}
    {count}
    {/* <button  className="btn btn-danger btn-sm"> ++ </button> */}
    </div>
}

export default CounterWithHooks;