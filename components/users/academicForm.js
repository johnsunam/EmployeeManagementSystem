import React, {Component} from 'react';
import {
    Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete, Collapse
  } from 'antd';
import { FormItem } from './personalForm';
import { connect } from 'react-redux';
import { createAcademic, updateAcademic } from '../../actions/userAction';

const Panel = Collapse.Panel;
const { Option } = Select;

class AcademicForm extends Component {
    constructor(props) {
        super(props)

    }

    onSubmit = e => {
        e.preventDefault();
        let self = this;
        console.log('Received values of form: ', self.props);
  
        this.props.form.validateFieldsAndScroll((err, values) => {
          if (!err) {
              values.user = self.props.userDetail._id
              if (self.props.edit) {
                    self.props.updateAcademic(values, this.props.academicDetail._id)
                        .then(result => {
                            self.props.form.resetFields()
                            self.props.toggleModal()
                        })
                }
              else {     
                    self.props.createAcademic(values)
                        .then(result => {
                            self.props.form.resetFields()
                            self.props.toggleModal()
                        })
                }
            console.log('Received values of form: ', values);
          }
        });
      }
      

    render () {
        console.log(this.props.academicDetail)
        const { getFieldDecorator } = this.props.form;

        return <Form onSubmit={this.onSubmit}>
                <FormItem 
                        getFieldDecorator={getFieldDecorator} 
                        lbl={'Degree'} 
                        property={{
                            initialValue: this.props.edit ? this.props.academicDetail.degree:'',
                            rules: [{required: true, message: "Please input you degree."}]
                        }} 
                        nam={'degree'}
                        />
                        <FormItem 
                        getFieldDecorator={getFieldDecorator} 
                        lbl={'Education Program'} 
                        property={{
                            initialValue: this.props.edit ? this.props.academicDetail.program:'',
                            rules: [{required: true, message: "Please input your program."}]
                        }} 
                        nam={'program'}
                        />
                        <FormItem 
                        getFieldDecorator={getFieldDecorator} 
                        lbl={'Education board'} 
                        property={{
                            initialValue: this.props.edit ? this.props.academicDetail.board:'',
                            rules: [{required: true, message: "Please input you board."}]
                        }} 
                        nam={'board'}
                        /><FormItem 
                        getFieldDecorator={getFieldDecorator} 
                        lbl={'Institute'} 
                        property={{
                            initialValue: this.props.edit ? this.props.academicDetail.institution:'',
                            rules: [{required: true, message: "Please input you Institute."}]
                        }} 
                        nam={'institution'}
                        />
                        <Form.Item label="Graduation Year">
                          {getFieldDecorator('year',{
                            initialValue: this.props.edit ? this.props.academicDetail.year:'2015',
                          })(
                            <Select style={{ width: 150 }}>
                            <Option value="1991">1991</Option>
                            <Option value="2000">2000</Option>
                            <Option value="2005">2005</Option>
                            <Option value="2010">2010</Option>
                            <Option value="2015">2015</Option>
                          </Select>
                          )}
                          
                        </Form.Item>
                        <Form.Item >
                          <Button type="primary" htmlType="submit">{this.props.edit ?'Update':'Register'}</Button>
                        </Form.Item>

        </Form>
    }
}

const WrappedForm =  Form.create({name: 'academic'})(AcademicForm);

export default connect(null,{ createAcademic, updateAcademic })(WrappedForm)



