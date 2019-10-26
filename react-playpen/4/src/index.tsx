import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import LoginHomeButton from './components/Button/lh-btn';
import HomeLoginContainer from './components/HomeLoginContainer/home-login-container';
import ConfigureStore from './store';
import {Provider} from 'react-redux';

const store = ConfigureStore();

const App: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const handleLoginHomeButtonClicked = (event: any) =>{
    // setIsLoggedIn(!isLoggedIn);
    
}

    return (
        <Provider store = {store}>
        <div>
            Hey There!!
            <LoginHomeButton onButtonClicked={handleLoginHomeButtonClicked} isLoggedIn={isLoggedIn}/>
            <HomeLoginContainer isLoggediIn={isLoggedIn}/>
        </div>
        </Provider>
    )
}

ReactDOM.render(<App />,document.getElementById('root'));