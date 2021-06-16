import React from "react";
import ReactDOM from "react-dom";
import "./sass/style.scss";
import Card from "./Card";
import Input from "./Input";
import Filter from './Filter'
import DeleteAllDone from "./DeleteAllDone";

class App extends React.Component{

    constructor(props){
        super(props);
        this.state = { todos: [], filter: 'all'};
    }

    addCard = todo => {
        const newState = [...this.state.todos, todo];
        this.setState({todos: newState});
    }

    markAsDone = id => {
        this.setState({ todos: this.state.todos.map(item => {
            if(item.id===id){
                return { 
                    title: item.title,
                    description: item.description,
                    done: !item.done,
                    id: item.id,
                }
        } else{
            return item;
        }})
        })
    }

    deleteCard = id => {
        this.setState({todos: this.state.todos.filter(item => {
            return item.id !== id;
        })})
    }

    deleteDone = () => {
        this.setState({todos: this.state.todos.filter(item => {
            return !item.done;
        })})
    }

    addFilter = string => {
        this.setState({filter: string});
    }

    showFiltered = () => {
        if (this.state.filter==="all") {
            return this.state.todos;
        } else if(this.state.filter==="done"){
            return this.state.todos.filter(item => item.done);
        } else if(this.state.filter==="to do"){
            return this.state.todos.filter(item => !item.done);
        }
    }

    showDeleteDone = () => {
        if(this.state.todos.some(item => item.done)){
            return <DeleteAllDone deleteDone={this.deleteDone}/>            

        }
    }
    
    render(){
        return(
        <div className="container">
            <div className="controls">
                <p>Items left to do: {this.state.todos.filter(item => !item.done).length}</p> 
                <Input handleSubmit={this.addCard}/>
                <p>Filter:</p>
                <Filter addFilter={this.addFilter} />
                {this.showDeleteDone()}
            </div>
            <div className="cards">
            {this.showFiltered().map(item => (<Card title={item.title} content={item.description} key={item.id} id={item.id} handleDelete={this.deleteCard} markAsDone={this.markAsDone}/>))}
            </div>
        </div>
        )
    }
};

ReactDOM.render(<App />, document.getElementById("root"));
