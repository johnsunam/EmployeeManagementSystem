import React, {Component} from 'react';
import {
    Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete, Collapse
  } from 'antd';
import { FormItem } from './personalForm';
import { connect } from 'react-redux';
import { createExperience, updateExperience } from '../../actions/userAction';
import moment from 'moment';

const Panel = Collapse.Panel;
const { Option } = Select;

class ExperienceForm extends Component {
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
                self.props.updateExperience(values, this.props.experienceDetail._id)
                    .then(result => {
                        self.props.form.resetFields()
                        self.props.toggleModal()
                    })
            } else {
                self.props.createExperience(values)
                .then(result => {
                    self.props.form.resetFields()
                    self.props.toggleModal()
                })
            }
            
          }
        });
      }
      

    render () {
        const { getFieldDecorator } = this.props.form;

        return <Form onSubmit={this.onSubmit}>
                <FormItem 
                        getFieldDecorator={getFieldDecorator} 
                        lbl={'Organization Name'} 
                        property={{
                            initialValue: this.props.edit ? this.props.experienceDetail.orgName:'',
                            rules: [{required: true, message: "Please input you Organization Name."}]
                        }} 
                        nam={'orgName'}
                        />
                        <FormItem 
                        getFieldDecorator={getFieldDecorator} 
                        lbl={'Organization Nature'} 
                        property={{
                            initialValue: this.props.edit ? this.props.experienceDetail.orgNature:'',
                            rules: [{required: true, message: "Please input your Organization Nature."}]
                        }} 
                        nam={'orgNature'}
                        placeholder='@example IT Company'
                        />
                        <FormItem 
                        getFieldDecorator={getFieldDecorator} 
                        lbl={'Job Location'} 
                        property={{
                            initialValue: this.props.edit ? this.props.experienceDetail.location:'',
                            // rules: [{required: true, message: "Please input you board."}]
                        }} 
                        nam={'location'}
                        />
                        <FormItem 
                        getFieldDecorator={getFieldDecorator} 
                        lbl={'Job Title'} 
                        property={{
                            initialValue: this.props.edit ? this.props.experienceDetail.title:'',
                            rules: [{required: true, message: "Please input you Job Title."}]
                        }} 
                        nam={'title'}
                        />
                        <Form.Item label="Job Level">
                          {getFieldDecorator('level',{
                            initialValue: this.props.edit ? this.props.experienceDetail.level:'entry',
                          })(
                            <Select style={{ width: 150 }}>
                            <Option value="entry">entry level</Option>
                            <Option value="junior">junior level</Option>
                            <Option value="mid">mid level</Option>
                            <Option value="top">top level</Option>
                          </Select>
                          )}
                          
                        </Form.Item>
                        <FormItem 
                        getFieldDecorator={getFieldDecorator} 
                        lbl={'Job Started'} 
                        property={{
                            initialValue: this.props.edit ? moment(this.props.experienceDetail.start).format('YYYY-MM-DD'):'',
                            rules: [{required: true, message: "Please input you Institute."}]
                        }} 
                        nam={'start'}
                        type={'date'}
                        />
                        <FormItem 
                        getFieldDecorator={getFieldDecorator} 
                        lbl={'Job Duration'} 
                        property={{
                            initialValue: this.props.edit ? this.props.experienceDetail.duration:'',
                            // rules: [{required: true, message: "Please input you Institute."}]
                        }} 
                        nam={'duration'}
                        type='number'
                        />
                        <Form.Item >
                          <Button type="primary" htmlType="submit">{this.props.edit ?'Update':'Register'}</Button>
                        </Form.Item>

        </Form>
    }
}

const WrappedForm =  Form.create({name: 'academic'})(ExperienceForm);

export default connect(null,{ createExperience, updateExperience })(WrappedForm)



