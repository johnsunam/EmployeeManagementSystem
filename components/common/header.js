import React from 'react';
import { Layout, Menu } from 'antd';
import Head from '../head';
import { connect } from 'react-redux';

const {
    Header 
  } = Layout;

const MainHeader = props => {
    return <Header className="header">
    <Head />
    <div className="logo" style={{color: 'white', fontSize: 35}}>
    {props.organization ? props.organization.name:''}
    </div>
    {/* <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
    >
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
    </Menu> */}
</Header>
}

const mapStateToProps = state => {
    return {
        organization: state.organization
    }
}
export default connect(mapStateToProps)(MainHeader)