import React, { Component } from 'react';
import {Button, Icon, Collapse} from 'antd';
import CommonModal from '../../components/users/commonModal';
import { connect } from 'react-redux';
import { getExperience, deleteExperience } from './../../actions/userAction';
import _ from 'underscore';
import moment from 'moment';

const Panel = Collapse.Panel;

class WorkExperienceDetail extends Component {
    constructor (props) {
        super(props)
        this.state={
            edit: false,
            visible: false,
            experienceDetail: {}
        }
    }

    toggleModal = () => {
        this.setState({visible: !this.state.visible})
    }

    componentDidMount () {
        this.props.getExperience();
    }

    render () {
        const customPanelStyle = {
            background: '#f7f7f7',
            borderRadius: 4,
            marginBottom: 24,
            border: 0,
            overflow: 'hidden',
          };


          return <div>
                <Collapse
                    bordered={false}
                    // defaultActiveKey={['0']}
                    expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}
                    >
                    {this.props.experienceList.map((experience, i) => { 
                        let detail = _.map(experience, (val, index) => {return {key: index, value: val}})
                    return <Panel header={experience.orgName} key={experience._id} style={customPanelStyle}>
                                <table>
                                    <tbody>
                                        {detail.map((obj,i) => (obj.key !== '_id' && obj.key !== '__v' && obj.key !== 'user') ? <tr key={i} ><td>{obj.key}:</td><td style={{paddingLeft: 30}}>{obj.key === 'createdAt' ? moment(obj.value).format('YYYY MMM'): obj.value}</td></tr>:<tr key={i}><td></td></tr>)}
                                    </tbody>
                                </table>
                                <Button onClick={() => {
                                    this.setState({
                                        experienceDetail: experience,
                                        edit: true,
                                        visible: true
                                    });
                                    this.toggleModal();
                                }}><Icon type="edit" /></Button>
                                <Button type='danger' onClick={() => this.props.deleteExperience(experience._id)}><Icon type="delete" /></Button>
                    </Panel>})}
                </Collapse>
            <Button type="primary" block onClick={() => {
                                    this.setState({
                                        experienceDetail: {},
                                        edit: false,
                                    });
                                    this.toggleModal();
                                }}><Icon type="plus" />Add Experience</Button>
            <CommonModal {...this.state} toggleModal={this.toggleModal} {...this.props} type='experience'/>
          </div> 
    }
 }

 const mapStateToProps = state => {
     return {
         experienceList: state.experiences
     }
 }

 export default connect(mapStateToProps, { getExperience, deleteExperience })(WorkExperienceDetail);