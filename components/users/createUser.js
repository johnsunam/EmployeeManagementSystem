import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import PersonalForm from './personalForm';
import { connect } from 'react-redux';


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

    toggleModal = () => {
      this.setState({
        visible: !this.state.visible,
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
        return <div>
        <Button type="primary" onClick={this.toggleModal}>
          Add User
        </Button>
        <Modal
          title={`${this.state.form}  Detail`}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
            <PersonalForm {...this.props} toggleModal={this.toggleModal}/>
        </Modal>
      </div>
    }
}

export default connect()(CreateUser)



