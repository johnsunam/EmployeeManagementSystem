import React, { Component } from 'react';
import {Button, Icon, Collapse} from 'antd';
import CommonModal from '../../components/users/commonModal';
import { connect } from 'react-redux';
import { getAcademic, deleteAcademic } from './../../actions/userAction';
import _ from 'underscore';
import moment from 'moment';

const Panel = Collapse.Panel;
class AcademicDetail extends Component {
    constructor (props) {
        super(props)
        this.state={
            edit: false,
            visible: false,
            academicDetail: {}
        }
    }

    toggleModal = () => {
        this.setState({visible: !this.state.visible})
    }

    componentDidMount () {
        this.props.getAcademic();
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
                    {this.props.academicList.map((academic, i) => { 
                        let detail = _.map(academic, (val, index) => {return {key: index, value: val}})

                    return <Panel header={academic.degree} key={academic._id} style={customPanelStyle}>
                                <table>
                                    <tbody>
                                        {detail.map((obj, i) => (obj.key !== '_id' && obj.key !== '__v') ? <tr key={i}><td>{obj.key}:</td><td style={{paddingLeft: 30}}>{obj.key === 'createdAt' ? moment(obj.value).format('YYYY MMM'): obj.value}</td></tr>:<tr key={i}><td></td></tr>)}
                                    </tbody>
                                </table>
                                <Button onClick={() => {
                                    this.setState({
                                        academicDetail: academic,
                                        edit: true,
                                        visible: true
                                    });
                                    this.toggleModal();
                                }}><Icon type="edit" /></Button>
                                <Button type='danger' onClick={() => this.props.deleteAcademic(academic._id)}><Icon type="delete" /></Button>
                    </Panel>})}
                </Collapse>
            <Button type="primary" block onClick={() => {
                                    this.setState({
                                        academicDetail: {},
                                        edit: false,
                                    });
                                    this.toggleModal();
                                }}><Icon type="plus" />Add Education</Button>
            <CommonModal {...this.state} toggleModal={this.toggleModal} {...this.props} type='academic'/>
          </div> 
    }
 }

 const mapStateToProps = state => {
     return {
         academicList: state.academics
     }
 }

 export default connect(mapStateToProps, { getAcademic, deleteAcademic })(AcademicDetail);