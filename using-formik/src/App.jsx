import React, {Component} from 'react';
import SimpleForm from './forms/SimpleForm';
import SignupForm from './forms/SignupForm';
import './App.css';

class App extends React.Component {

    render() {
        return (
            <div>
                {/*<SimpleForm/>*/}
                <SignupForm/>
            </div>
        );
    }
}

export default App;