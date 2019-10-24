import React from 'react';
import Login from '../login/login';
import Home from '../home/home';

export interface HomeLoginContainerProps{
    isLoggediIn: boolean;
}

const HomeLoginContainer: React.FC<HomeLoginContainerProps> = ({...props}) => {
return (
    <div>
        {props.isLoggediIn? <Login />: <Home />}
    </div>
)
}

export default HomeLoginContainer;