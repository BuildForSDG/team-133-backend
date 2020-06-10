import React, {Component} from 'react';
import TransportForm from "../AppForms/TransportForm";

class AddItem extends Component {
    render() {
        return (
            <div id="content" className="content">
                 <header className="masthead"><h1> Add item page </h1>
                <TransportForm
                /></header>
            </div>
        );
    }
}

export default AddItem;
