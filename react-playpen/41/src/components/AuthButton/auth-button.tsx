import {Button} from 'antd';
import React from 'react';

export interface AuthButtonProps{
    IsLoggedIn: boolean;
    onAuthButtonClick: any;
}

const AuthButtonCmp: React.FC<AuthButtonProps> = ({...props}) => {
return (
    <Button type="primary" onClick={props.onAuthButtonClick}>{props.IsLoggedIn? 'Logout': 'Login'}</Button>
)
}

export default AuthButtonCmp;
