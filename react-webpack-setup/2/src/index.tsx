import React from "react";
import ReactDOM from "react-dom";
import LoginForm from './components/login';
import './index.css';
import {DatePicker} from 'antd';

const App: React.FC = () => {
    return (
        <div>
<h1 className="title-text">React-Wepack-setup-1</h1>
        
        <LoginForm />
        <DatePicker />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));


/*
git checkout feature/040101-add-style-loader -f
*/