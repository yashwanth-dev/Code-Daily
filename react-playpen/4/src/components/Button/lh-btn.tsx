import React from 'react';
import {Button} from 'antd';

export interface LoginHomeButtonProps {
    isLoggedIn: boolean;
    onButtonClicked: any
}

const LoginHomeButton: React.FC<LoginHomeButtonProps> = ({...props}) => {
return (
    <div>
        <Button type="primary" onClick={props.onButtonClicked}>{props.isLoggedIn? 'Logout': 'Login'}</Button>
    </div>

)
}

export default LoginHomeButton;