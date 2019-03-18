import React, { Component } from 'react';
import { Icon, Modal, Button, Input } from 'antd';
import { connect } from 'react-redux';
import { createOrganization } from '../../actions/organizationAction';

class CreateOrganization extends Component {
    constructor (props) {
        super(props)
        this.state = {
            visible: false,
            loading: false
        }
    }

    showModal = () => { 
        console.log(this.state.visible)
        this.setState({visible: true})
    }

    handleOk = (e) => {
        this.setState({loading: true})
        if (this.refs.orgName.state.value) {
                console.log( this.refs.orgName.state.value);
                this.props.createOrganization({name: this.refs.orgName.state.value})
                    .then(result => {
                        this.setState({
                            loading: false,
                            visible: false
                        })
                    })
        } else {
            console.log( this.refs.orgName.state.value);

        }
        // this.setState({
        //   visible: false,
        // });
      }
    
      handleCancel = (e) => {
        this.setState({
          visible: false,
        });
      }
    render () {
        return<div style={{ padding: '8px', cursor: 'pointer' }}>
        {/* <span ><Icon type="plus" /> </span> */}
        <Button onClick={this.showModal} type="primary" shape="round" icon="plus" size={'large'}>Add Organization</Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>Return</Button>,
            <Button key="submit" type="primary" loading={this.state.loading} onClick={this.handleOk}>
              Create
            </Button>,
          ]}
        >
         <Input ref='orgName' prefix={<Icon type="global" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Organization Name" />
        </Modal>
      </div>
    }
}

export default connect(null, {createOrganization})(CreateOrganization)