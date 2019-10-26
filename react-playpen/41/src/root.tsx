import React, { useState } from 'react';
import AuthButtonCmp from './components/AuthButton/auth-button';
import InvestorsListCC from './components/InvestorsList/investors-list';
import {ConfigureStore} from './store';
import {Provider} from 'react-redux';


const store = ConfigureStore();

const RootCmp: React.FC = () => {
    
    const [IsLoggedIn, setIsLoggedIn] = useState(false);

    const authButtonClickHandler = (event: any) => {
        // setIsLoggedIn(!IsLoggedIn);
        // dispatch an action to store
    }

return (
    <Provider store={store}>
    
        <AuthButtonCmp onAuthButtonClick={authButtonClickHandler} IsLoggedIn={IsLoggedIn} />
        {IsLoggedIn? <InvestorsListCC />:null}
    
    </Provider>
)
}

export default RootCmp;