import React from'react'
import { Form, Icon, Input, Button } from 'antd'
import './form.styl'

class LoginForm extends React.Component {
  handleSubmit = (evt) => {
    evt.preventDefault()
    const form = this.props.form
    form.validateFields((err, values) => {
      if (!err) {
        console.log(values)
      } else {
        console.log('error')
      }
    })
  }

  render () {
    const form = this.props.form
    const { getFieldDecorator } = form
    return (
      <div id="form">
        <div className="title">用户登录</div>
        <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {
            getFieldDecorator('username', {
              rules: [
                { required: true, message: '用户名必须输入'},
                { min: 6, message: '用户名至少6位'},
                { pattern: /^[a-zA-z0-9]+$/, message: ' 需英文或数字组成'},
              ]
            })(
              <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.5)' }} />}
              placeholder="用户名"
            />
            )
          }
        </Form.Item>
        <Form.Item>
          {
            getFieldDecorator('password',{
              rules: [
                { required: true, min: 6, message: '密码至少6位'}
              ]
            })(
              <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.5)' }} />}
              type="password"
              placeholder="密码"
            />
            )
          }
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType='submit' className='btn'>登录</Button>
        </Form.Item>
      </Form>
      </div>
    )
  }
}

const WrapLogin = Form.create()(LoginForm)
export default WrapLogin