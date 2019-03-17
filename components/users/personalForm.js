import React, { Component } from 'react';
import {
    Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete,
  } from 'antd';
import { connect } from 'react-redux';
import { createUser } from '../../actions/userAction';

const { Option } = Select;

class PersonalForm extends Component {
    constructor (props) {
        super(props)
        this.state = {
            // edit: props.edit ? true: false
        }
    }

    onSubmit = e => {
      e.preventDefault();
      let self = this;
      console.log('Received values of form: ', self.props);

      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
            // self.props.createUser(values)
          console.log('Received values of form: ', values);
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
                            initialValue: this.props.edit ? this.props.userDetail.firstName:'',
                            rules: [{required: true, message: "PlonClick=ease input you first name."}]
                        }} 
                        nam={'firstName'}
                        />
                        <FormItem 
                        getFieldDecorator={getFieldDecorator} 
                        lbl={'Last Name'} 
                        property={{
                            initialValue: this.props.edit ? this.props.userDetail.lastName:'',
                            rules: [{required: true, message: "Please input you last name."}]
                        }} 
                        nam={'lastName'}
                        />
                        <FormItem 
                          getFieldDecorator= {getFieldDecorator}
                          lbl={'Contact No'}
                          type="number"
                          property={{
                            initialValue: this.props.edit ? this.props.userDetail.contact:'',
                            rules: [{required: true, message: "Please input you contact no."}]
                          }}
                          nam={'contact'}
                        />
                        <FormItem 
                          getFieldDecorator= {getFieldDecorator}
                          lbl={'Email'}
                          type={'email'}
                          property={{
                            initialValue: this.props.edit ? this.props.userDetail.email:'',
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
                          initialValue: this.props.edit ? this.props.userDetail.address:'',
                            // rules: [{required: true, message: "Please input you last name."}]
                        }} 
                        nam={'address'}
                        />
                        <Form.Item label="User Role">
                          {getFieldDecorator('role',{
                            initialValue: this.props.edit ? this.props.userDetail.role:'admin',
                          })(
                            <Select style={{ width: 150 }}>
                            <Option value="admin">Admin</Option>
                            <Option value="employee">Employee</Option>
                          </Select>
                          )}
                          
                        </Form.Item>
                        <Form.Item >
                          <Button type="primary" htmlType="submit">{this.props.edit ?'Update':'Register'}</Button>
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

export default connect()(WrappedForm)