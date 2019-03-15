import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (Page, title = '') => {
    class MainLayout extends Component {
        static async getInitialProps (ctx) {
            const pageProps = (await Page.getInitialProps) && (await Page.getInitialProps(ctx))
            return {
                ...pageProps
            }
        }

        render () {
            return (<div>
                <Page {...this.props}/>
            </div>)
        }
    }
    return connect()(MainLayout)
}