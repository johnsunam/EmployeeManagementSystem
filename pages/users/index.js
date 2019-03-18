import React, { Component } from 'react';
import Table from '../../components/common/table';
import { Select } from 'antd';
import MainLayout from '../../components/layout/mainLayout';
import { connect } from 'react-redux';
import CreateUser from '../../components/users/createUser';
import { getUser, deleteUser } from '../../actions/userAction';
const Option = Select.Option;

class Users extends Component {

    static async getInitialProps (ctx) {
        const {query, req} = ctx;
        console.log('get initial props',query)
        return query
    }

    constructor (props) {
        super(props) 
        this.state = {
            userType: 'all',
            filter:{org: props.org}
        }
    }

    handleChange = (userType) => {
        let { filter } = this.state; 
        console.log('filters', filter)
        if (userType !== 'all') {
            filter.role = userType;
        } else {
            delete filter.role;
        }

        this.props.getUser(filter)
        this.setState({userType, filter})

    }

    componentDidMount () {
        this.props.getUser(this.state.filter)
    }

    render () {
        
        return <div>
                    <MainLayout sidebar={false} breadcrumb={true}>
                    <label>Find user by role:  </label>
                        <Select defaultValue="all" style={{ width: 120 }} onChange={this.handleChange}>
                            <Option value="all">All</Option>
                            <Option value="admin">Admin</Option>
                            <Option value="employee">Employee</Option>
                        </Select>
                        <CreateUser />
                        <Table tableData={this.props.users} delete={this.props.deleteUser}/>                        
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


export default connect(mapStateToProps, {getUser, deleteUser})(Users);