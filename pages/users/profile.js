import React, { Component } from 'react';
import MainLayout from '../../components/layout/mainLayout';
import PersonalDetail from './personalDetail';
import AcademicDetail from './academicDetail';
import WorkExperience from './workExperience';
import { connect } from 'react-redux';
import {getUserById} from '../../actions/userAction'

const menu = [
    {name: 'Personal Detail', key:'personal'},
    {name: 'Academic Detail', key:'academic'},
    {name: 'Work Experience', key:'work'}
]

const Components = {personal: PersonalDetail, academic: AcademicDetail, work: WorkExperience}

class Profile extends Component {

    static async getInitialProps (ctx) {
        const {query} = ctx;
        console.log('get initial props', query)
        return query
    }
    constructor (props) {
        super(props)
        this.state={
            selectedComponent: 'personal'
        }
    }


    selectComponent = (key) => {
        this.setState({selectedComponent: key})
    }

    componentDidMount () {
        console.log('profile props', this.prop)
        this.props.getUserById(this.props.user)
    }

    render () {
        console.log('profile props', this.props)
        let RenderedComponent = Components[this.state.selectedComponent]
        return <div>
            <MainLayout sidebar={true} menus={menu} selectComponent={this.selectComponent} >
                <RenderedComponent userDetail={this.props.userDetail}/>
            </MainLayout>
        </div>
    }
}

const mapStateToProps = state => {
    return {
        userDetail: state.user
    }
}

export default connect(mapStateToProps,{getUserById})(Profile)