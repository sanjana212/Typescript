import React, { useState } from "react";
interface IState {
    counter: number
}
interface IProp {

}
let Counter: React.FC<IProp> = () => {
    const [count, setCount] = useState<IState>({
        counter: 0
    })
    const handleIncrement=()=>{
        setCount({counter:count.counter+1});
    }
    const handleDecrement=()=>{
        setCount({counter:count.counter-1});
    }
    return (
        <div>
            {/* <h1>{count.counter}</h1>
            <button className="btn btn-success" onClick={handleIncrement}>Increment</button>
            <button className="btn btn-danger" onClick={handleDecrement}>Decrement</button> */}
            <h1>Event Handeling</h1>
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body"></div>
                        <h2 className="display-3 text-center">{count.counter}</h2>
                        <button className="btn btn-success ms-3"  onClick={handleIncrement}>INC</button>
                        <button className="btn btn-danger ms-3"onClick={handleDecrement}>DEC</button>

                    </div>
                </div>
            </div>
        </div>

    )
}
export default Counter;