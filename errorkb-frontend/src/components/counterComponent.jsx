import React, {Component} from 'react';

class Counter extends Component {
    componentDidUpdate(prevProps, prevState, snapshot) {
        //AJAX Update

        // if (prevProps.counter.value !== this.props.counter.value){
        //     //Ajax call to get new Data
        // }
    }

    styles = {
        fontSize: 15,
        fontWeight: 'bold'
    };

    // renderTags() {
    //     if (this.state.tags.length === 0) return <p>There are no Tags!</p>;
    //     return (<ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>);
    // }

    render() {

        return (
            <div>
                <span style={this.styles} className={this.getBtnClasses()}>{this.formatCount()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className={'btn btn-secondary btn-sm'}>Increment</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
                {/*{this.state.tags.length===0 && 'Please create a new Tag!'}*/}
                {/*{this.renderTags()}*/}
            </div>
        );
    }


    getBtnClasses() {
        let btnClasses = 'badge m-2 badge-';
        btnClasses += (this.props.counter.value === 0 ? 'warning' : 'primary');
        return btnClasses;
    }

    formatCount(){
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
}
export default Counter;