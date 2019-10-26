import React, { useState } from 'react';
import LoginCmp from '../login/login';
import Home from '../home/home';
import { LoginState } from '../../store/LoginState/types';
import {connect} from 'react-redux';
import {Login, Logout} from '../../store/LoginState/actions';

export interface HomeLoginContainerProps{
    isLoggediIn: boolean;
}

const HomeLoginContainer: React.FC<HomeLoginContainerProps> = ({...props}) => {
return (
    <div>
        {props.isLoggediIn? <Home />: <LoginCmp />}
    </div>
)
}

// export default HomeLoginContainer;

const mapStatetoProps = (state:LoginState) => {
    isLoggedIn: state.IsLoggedin
}

export default connect(
    mapStatetoProps,
    {  }
  )(HomeLoginContainer);