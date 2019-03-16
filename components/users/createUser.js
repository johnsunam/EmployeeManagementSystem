import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import PersonalForm from './personalForm';
import AcademicForm from './academicForm';
import ExperienceForm from './experienceForm';
import { connect } from 'react-redux';

const forms = {Personal: PersonalForm, Academic: AcademicForm, Experience: ExperienceForm}

class CreateUser extends Component {

    constructor (props) {
        super(props)
        this.state = {
            form: 'Personal',
            visible: false
        }
    }

    changeSlide = (form) => {
      this.setState({form})
    }

    showModal = () => {
      this.setState({
        visible: true,
      });
    }
  
    handleOk = (e) => {
      console.log(e);
      this.setState({
        visible: false,
      });
    }
  
    handleCancel = (e) => {
      console.log(e);
      this.setState({
        visible: false,
      });
    }
    
  

    render () {
        let RenderComponent = forms[this.state.form]
        return <div>
        <Button type="primary" onClick={this.showModal}>
          Add User
        </Button>
        <Modal
          title={`${this.state.form}  Detail`}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
            <RenderComponent changeSlide={this.changeSlide}/>
        </Modal>
      </div>
    }
}

export default connect()(CreateUser)



