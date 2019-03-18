import React, { Component } from 'react';
import MainHeader from '../common/header';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Link from 'next/link';
import { connect } from 'react-redux'; 
// import {} from '../../actions/organizationAction';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

  class MainLayout extends Component {
      constructor (props) {
          super(props)

      }
      render () {
          return <Layout>
                    <MainHeader />
                    <Content style={{ padding: '0 50px' }}>
                     {this.props.breadcrumb ? <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item><Link href='/'><a>Home</a></Link></Breadcrumb.Item>
                        {this.props.organization ? <Breadcrumb.Item><Link href={`/${this.props.organization._id}/users`}><a>users</a></Link></Breadcrumb.Item>:""}
                    </Breadcrumb>:''}

                    <Layout style={{ padding: '24px 0', background: '#fff' }}>
                    {this.props.sidebar ? <Sider width={200} style={{ background: '#fff' }}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['personal']}
                            style={{ height: '100%' }}
                            onSelect={({ item, key, selectedKeys }) => {
                                this.props.selectComponent(key)
                            }}
                        >
                            {this.props.menus.map((menu, i) =><Menu.Item key={menu.key}>{menu.name}</Menu.Item>)}
                        </Menu>
                        </Sider>:''}
                        
                        <Content style={{ padding: '0 24px', minHeight: 280 }}>
                            {this.props.children}
                        </Content>
                    </Layout>
                    </Content>
                </Layout>
      }
  }
  
  const mapStateToProps = state => {
      return {
          organization: state.organization
      }
  }

  export default connect(mapStateToProps)(MainLayout);