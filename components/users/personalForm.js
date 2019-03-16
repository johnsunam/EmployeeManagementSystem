import React, { Component } from 'react';
import {
    Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete,
  } from 'antd';
import { connect } from 'react-redux';
import { getUser } from '../../actions/userAction';

const { Option } = Select;

class PersonalForm extends Component {
    constructor (props) {
        super(props)
        this.state = {

        }
    }

    onSubmit = e => {
      e.preventDefault();
      let self = this;
      console.log('Received values of form: ', self.props);

      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
            self.props.
          console.log('Received values of form: ', self.props);
        }
      });
    }


    render () {
        const { getFieldDecorator } = this.props.form;
        return <Form onSubmit={this.onSubmit}>
                    <FormItem 
                        getFieldDecorator={getFieldDecorator} 
                        lbl={'First Name'} 
                        property={{
                            rules: [{required: true, message: "Please input you first name."}]
                        }} 
                        nam={'firstName'}
                        />
                        <FormItem 
                        getFieldDecorator={getFieldDecorator} 
                        lbl={'Last Name'} 
                        property={{
                            rules: [{required: true, message: "Please input you last name."}]
                        }} 
                        nam={'lastName'}
                        />
                        <FormItem 
                          getFieldDecorator= {getFieldDecorator}
                          lbl={'Contact No'}
                          type="number"
                          property={{
                            rules: [{required: true, message: "Please input you contact no."}]
                          }}
                          nam={'contact'}
                        />
                        <FormItem 
                          getFieldDecorator= {getFieldDecorator}
                          lbl={'Email'}
                          type={'email'}
                          property={{
                            rules: [
                              {type: 'email', message: "Input is not valid E-mail"},
                              {required: true, message: "Please input you contact no."}
                            ]
                          }}
                          nam={'email'}
                        />
                        <FormItem 
                        getFieldDecorator={getFieldDecorator} 
                        lbl={'Address'} 
                        property={{
                            // rules: [{required: true, message: "Please input you last name."}]
                        }} 
                        nam={'address'}
                        />
                        <Form.Item label="User Role">
                          {getFieldDecorator('role',{
                            initialValue: 'admin'
                          })(
                            <Select style={{ width: 150 }}>
                            <Option value="admin">Admin</Option>
                            <Option value="employee">Employee</Option>
                          </Select>
                          )}
                          
                        </Form.Item>
                        <Form.Item >
                          <Button type="primary" htmlType="submit">Register</Button>
                        </Form.Item>

                </Form>
    }
}


 export const FormItem = props => {
    const { getFieldDecorator, property, nam, type } = props
    return <Form.Item label={props.lbl}>
    {getFieldDecorator(nam, property)(
      <Input type={type}/>
    )}
  </Form.Item>
}


const WrappedForm =  Form.create({name: 'personal'})(PersonalForm);

export default connect(null,{ getUser })(WrappedForm)