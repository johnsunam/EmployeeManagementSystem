import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getOrganization, selectOrganization } from '../actions/organizationAction'
import MainLayout from '../components/layout/mainLayout';
import { Select, Divider, Icon, Button, Row, Col } from 'antd';
import Link from 'next/link';
import _ from 'underscore';

const Option = Select.Option;

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.title = 'Main page'
  }

  componentDidMount () {
    this.props.getOrganization()
      .then(result => console.log('resullltlsss', result))
  }

  handleChange = value => {
    this.props.selectOrganization(_.find(this.props.organizations, org => org._id === value))
  }

  render () {
    console.log('home page',this.props)
    return (<MainLayout sidebar={false}>
            <h2>Select Organization</h2>
            <Row type="flex" justify="end">
              <Col span={4}>
                {this.props.organization ? <Button type="primary">Go Organization Dasboard<Icon type="right" /></Button>:''}
              </Col>
            </Row>
            <Row type="flex" justify="center">
            <Col span={6}>
                <Select
                    defaultValue=""
                    style={{ width: 200 }}
                    dropdownRender={menu => (
                      <div>
                        {menu}
                        <Divider style={{ margin: '4px 0' }} />
                        <div style={{ padding: '8px', cursor: 'pointer' }}>
                          <Icon type="plus" /> Add Organization
                        </div>
                      </div>
                    )}
                    onChange={this.handleChange}
                  >
                    {this.props.organizations.map(org => <Option key={org._id} value={org._id}>{org.name}</Option>)}
                  </Select>
              </Col>
            </Row>
            
    </MainLayout>)
  }
}

const mapStateToProps = (state, props) => {
  return {
    organizations: state.organizations,
    organization: state.organization
  }
}

export default connect(mapStateToProps, {getOrganization, selectOrganization})(HomePage)



