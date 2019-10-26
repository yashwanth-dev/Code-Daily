import { Form, Icon, Input, Button } from 'antd';
import React from 'react';

function hasErrors(fieldsError: any) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

export interface LoginFormProps {
form:{
    validateFields:any;
    getFieldDecorator:any;
    getFieldsError:any;
    getFieldError:any;
    isFieldTouched:any;
}
}

const LoginForm: React.FC<LoginFormProps> = ({...props}) => {

    // componentDidMount() {
    //     // To disabled submit button at the beginning.
    //     props.form.validateFields();
    //   }
    
      const handleSubmit = (e:any) => {
        e.preventDefault();
        console.log("submit button clicked!!");
        // props.form.validateFields((err:any, values:any) => {
        //   if (!err) {
        //     console.log('Received values of form: ', values);
        //   }
        // });
      };
    
      
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = props.form;
    
        // Only show error after a field is touched.
        const usernameError = isFieldTouched('username') && getFieldError('username');
        const passwordError = isFieldTouched('password') && getFieldError('password');
        return (
          <Form layout="inline" onSubmit={handleSubmit}>
            <Form.Item validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username"
                />,
              )}
            </Form.Item>
            <Form.Item validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                />,
              )}
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
                Log in
              </Button>
            </Form.Item>
          </Form>
        );
      
    
}



const WrappedHorizontalLoginForm = Form.create({ name: 'qapita_login' })(LoginForm);
export default WrappedHorizontalLoginForm;
// ReactDOM.render(<WrappedHorizontalLoginForm />, mountNode);