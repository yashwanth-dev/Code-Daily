import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import LoginHomeButton from './components/Button/lh-btn';
import HomeLoginContainer from './components/HomeLoginContainer/home-login-container';

const App: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
const handleLoginHomeButtonClicked = (event: any) =>{
setIsLoggedIn(!isLoggedIn);
}

    return (
        <div>
            Hey There!!
            <LoginHomeButton onButtonClicked={handleLoginHomeButtonClicked} isLoggedIn={isLoggedIn}/>
            <HomeLoginContainer isLoggediIn={isLoggedIn}/>
        </div>
    )
}

ReactDOM.render(<App />,document.getElementById('root'));