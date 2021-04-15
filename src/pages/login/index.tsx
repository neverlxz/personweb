import React from 'react'
import { useHistory } from 'react-router-dom'

import './index.scss'
import {Form,Button,Input} from 'antd'
import { UserOutlined,UnlockOutlined } from '@ant-design/icons';
export default function Login(){
    const FormItem = Form.Item;

    interface formData{
        name: String,
        password: String
    }
    // 登录跳转
    const history = useHistory();
    // 提交方法
    const submit = (values:formData)=>{
        console.log(values)
        history.push('/home')
    }


    return(
        <div className="login-container">
            <div className="login-box">
            <Form size="large" layout='vertical' onFinish={submit}>
                <FormItem 
                    name="name"
                    rules={[
                        {
                            type: 'string',
                            message: '请输入8位数字账号',
                        },
                        {
                            required: true,
                            message: '请输入8位账号',
                        },
                        {
                            len: 8,
                            message: '请输入8位账号',
                        },
                    ]}
                >
                    <Input maxLength={8} prefix={<UserOutlined />} type="text" placeholder="请输入账号" />   
                </FormItem>

                <FormItem  
                    name="password"
                    rules={[
                        {
                        required: true,
                        message: '请输入密码',
                        },
                    ]}
                >
                    <Input.Password visibilityToggle prefix={<UnlockOutlined />} placeholder="请输入密码" />   
                </FormItem>

                <FormItem  style={{ marginTop: 24,width: '100%' }}>
                    <Button block type="primary" htmlType="submit">确定</Button>
                </FormItem>
            </Form>
            </div>
        </div>
    )
}