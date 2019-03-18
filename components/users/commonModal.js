import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import { connect } from 'react-redux';
import AcademicForm from './academicForm';
import ExperienceForm from './experienceForm';

const forms = {academic: AcademicForm, experience: ExperienceForm}

class CommonModal extends Component {
  state = {
    loading: false,
  }

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  }

  handleCancel = () => {
    this.setState({ visible: false });
  }

  render() {
    const { loading } = this.state;
    const RenderedComponent = forms[this.props.type]
    return (
      <div>
        <Modal
          visible={this.props.visible}
          title={<span style={{textTransform: 'capitalize'}}>{this.props.type} Form</span>}
          onOk={this.handleOk}
          onCancel={this.props.toggleModal}
          footer={[
            <Button key="back" onClick={this.props.toggleModal}>Return</Button>,
            // <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
            //   Submit
            // </Button>,
          ]}
        >
         <RenderedComponent {...this.props}/>
        </Modal>
      </div>
    );
  }
}

export default connect()(CommonModal);

