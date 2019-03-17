import React, { Component } from 'react';
import _ from 'underscore';
import {Row, Col, Icon} from 'antd';
import PersonalForm from '../../components/users/personalForm';

class PersonalDetail extends Component {
    constructor (props) {
        super(props)
        this.state = {
            edit: false
        }
    }
    render () {
        const userDetail = _.map(this.props.userDetail,(val, index) => {return {key: index, value: val}})
        console.log('profile user detail', userDetail)
        return <div>
            {this.state.edit ? <PersonalForm edit={true} userDetail={this.props.userDetail}/>:
            <div>
                <Row type="flex" justify={'end'}>
                    <Col span={4}><span style={{cursor: 'pointer'}} onClick={() => this.setState({edit: true})} > <Icon type="edit" />Edit</span></Col>
                </Row><table>
                <tbody>
                {userDetail && userDetail.map((val, index) => {
                    console.log(val, index)
                    if(val.key !== '__v')
                    return <tr key={index}><td style={{textTransform: "capitalize"}}>{ val.key.replace(/([a-z])([A-Z])/g, '$1 $2') }:</td><td>{val.value}</td></tr>
                }) }
                </tbody>
            </table>
            </div>}
        </div>
    }
 }

 export default PersonalDetail;