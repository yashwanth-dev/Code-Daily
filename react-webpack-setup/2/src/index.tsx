// import React from "react";
// import ReactDOM from "react-dom";
// import LoginForm from './components/login';
import './index.css';
// import {DatePicker} from 'antd';
import 'antd/es/date-picker/style/css';

const getHomeComponent = async () => {
    const {default: LoginForm} = await import('./components/login');
    const {default: DatePicker} = await import('antd/es/date-picker');
    const {default: React} = await import(/*webpackChunkName:"react"*/ 'react');

    const App: React.FC = () => {
        return (
            <div>
    <h1 className="title-text">React-Wepack-setup-1</h1>
            
            <LoginForm />
            <DatePicker />
            </div>
        );
    }

    return App;
}



getHomeComponent().then(async (Cmp: React.FC) => {
    const {default: ReactDOM} = await import(/*webpackChunkName:"react-dom"*/ 'react-dom');
    const {default: React} = await import(/*webpackChunkName:"react"*/ 'react');

    ReactDOM.render(<Cmp />, document.getElementById('root'));
})




