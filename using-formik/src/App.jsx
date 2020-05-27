import React, {Component} from 'react';
import SimpleForm from './forms/SimpleForm';
import SimpleForm2 from './forms/SimpleForm2';
import './App.css';

class App extends React.Component {

    render() {
        return (
            <div>
                <SimpleForm/>
                {/*<SimpleForm2/>*/}
            </div>
        );
    }
}

export default App;