import React, { Component } from 'react';
import Table from '../../components/common/table';
import { Select } from 'antd';
import MainLayout from '../../components/layout/mainLayout';
import { connect } from 'react-redux';
import CreateUser from '../../components/users/createUser';
import { getUser } from '../../actions/userAction';
const Option = Select.Option;

class Users extends Component {
    constructor (props) {
        super(props) 
        this.state = {
            userType: 'all',
            filter:{org: props.organization._id}
        }
    }

    handleChange = (userType) => {
        console.log(`selected ${userType}`);
        this.setState({userType})
    }

    componentDidMount () {
        this.props.getUser(this.state.filter)
    }

    // table events 


    // table event ends

    render () {
        
        return <div>
                    <MainLayout sidebar={false}>
                    <label>Find user by role:  </label>
                        <Select defaultValue="all" style={{ width: 120 }} onChange={this.handleChange}>
                            <Option value="all">All</Option>
                            <Option value="admin">Admin</Option>
                            <Option value="employee">Employee</Option>
                        </Select>
                        <CreateUser />
                        <Table tableData={this.props.users}/>                        
                    </MainLayout>
                </div>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users,
        organization: state.organization
    }
}


export default connect(mapStateToProps, {getUser})(Users);