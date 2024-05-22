import React, { useState } from "react";
interface IState{
    name:String,
    title:String,
}
interface IProps{
    name:String,
    age:number,
}
let FunctionalCompo:React.FC<IProps>=({name,age})=>{
    const[state,setState]=useState<IState>({
        name:"techinfo",
        title:"mern Stack"
    })
    return(
        <>
        <div>
           
           <div>
                    <h1 className="bg-dark p-1 text-white text-center">Class Component</h1>
                    <div className="border px-4 bg-light mb-4">
                        <h3>
                            name: <b>{name}</b><br />
                            Age: <b>{age}</b><br />
                        </h3>
                    </div>
                    <div className="card bg-light p-3">
                        <h1>class comp state</h1>
                        <h4>Names:{state.name}</h4>
                        <h4>Title:{state.title}</h4>
                    </div>
                </div>

        </div>
        </>
    )
}
export default FunctionalCompo;