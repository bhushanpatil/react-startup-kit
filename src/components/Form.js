import React, { Component } from "react";
import { addArticle } from "../store/actions";
import { connect } from 'react-redux';
class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { title: null }
        this.onChangeHandle = this.onChangeHandle.bind(this);
        this.onSubmitHandle = this.onSubmitHandle.bind(this);
    }

    onChangeHandle(e){
        this.setState({
            title: e.target.value
        })
    }

    onSubmitHandle(e){
        e.preventDefault();
        console.log(this.props);
        this.props.addArticle({title: this.state.title})
        this.setState({
            title: ""
        });
        
    }
    render() { 
        return ( <div>
            <form onSubmit={this.onSubmitHandle}>
                <input type="text" name="title" value={this.state.title}
                    onChange={this.onChangeHandle}
                />
                <button type="submit">Add</button>
            </form>
        </div> );
    }
}

const mapDispatchToProps = (dispatch) => { 
        return {
            addArticle : item => dispatch(addArticle(item))    
        }
}
export default connect(null,mapDispatchToProps)(Form);