import React from 'react';
interface IPROPS {
    userId:number,
    userName:string,
};
export default class Users extends React.Component<IPROPS>{
constructor(props:IPROPS){
    super(props)
    
}
render(){
    let{userId,userName}=this.props;
    return(
        <>
        <div>Welcome to class component</div>
        <h6>userId:{this.props.userId}</h6>
        <h6>userName:{this.props.userName}</h6>

        </>
    )
}
}
