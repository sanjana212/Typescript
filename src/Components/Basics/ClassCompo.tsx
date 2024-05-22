import { Component } from "react";
interface IProps {
    name: string,
    age: number
}
interface IState {
    names: String,
    title: String,
}
class ClassCompo extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            names: "you-tuber",
            title: "sasfdg"

        }
    }
    render() {
        const { name, age } = this.props;
        const { names, title } = this.state
        return (
            <div>
                <h1>This is a class component</h1>
            <h3>name:{name}</h3>
            <h3>age:{age}</h3>

            <div>
               <h1>Class Component Text</h1> 
              <h3> {name}</h3> 
              <h3>{title}</h3>
             
            </div>

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
                        <h4>Names:{names}</h4>
                        <h4>Title:{title}</h4>
                    </div>
                </div>
            </div>
        )
    }
}
export default ClassCompo;