import React, { Component } from 'react';
import _ from 'underscore';
import {Row, Col, Icon} from 'antd';
import PersonalForm from '../../components/users/personalForm';
import moment from 'moment';

class PersonalDetail extends Component {
    constructor (props) {
        super(props)
        this.state = {
            edit: false
        }

    }

    editState = () => {
        this.setState({edit: !this.state.edit})
    }

    render () {
        const userDetail = _.map(this.props.userDetail,(val, index) => {return {key: index, value: val}})
        return <div>
            {this.state.edit ? <PersonalForm edit={true} userDetail={this.props.userDetail} editState={this.editState}/>:
            <div>
                <Row type="flex" justify={'end'}>
                    <Col span={4}><span style={{cursor: 'pointer'}} onClick={() => this.setState({edit: true})} > <Icon type="edit" />Edit</span></Col>
                </Row><table>
                <tbody>
                {userDetail && userDetail.map((val, index) => {
                    if(val.key !== '__v' && val.key !== 'org' && val.key !== '_id')
                    return <tr key={index}><td style={{textTransform: "capitalize"}}>{ val.key.replace(/([a-z])([A-Z])/g, '$1 $2') }:</td><td style={{paddingLeft: 30}}>{val.key == 'createdAt' ? moment(val.value).format('YYYY MMM'):val.value}</td></tr>
                }) }
                </tbody>
            </table>
            </div>}
        </div>
    }
 }

 export default PersonalDetail;