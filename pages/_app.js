import React, { Component } from 'react';
import withRedux from  'next-redux-wrapper';
import { initStore } from '../store';
import { Provider } from 'react-redux';
import App, { Container } from 'next/app';
import { getOrganizationById } from '../actions/organizationAction';

class MyApp extends App {
    static async getInitialProps ({Component, ctx}) {
        const {req, store} = ctx;
        if(req) {
            const { query } = req;
            if(query.org){
                let org = await store.dispatch(getOrganizationById(query.org))
                console.log('always ctx', query, org)

            }
        }

        return {
            pageProps: {
                ...(Component.getInitialProps ? await Component.getInitialProps(ctx):{})
            }
        };
    }

    render () {
        const { Component, pageProps, store } = this.props;
        return (<Container>
                    <Provider store={store}>
                            <Component {...pageProps}/>
                    </Provider>
                </Container>)
    }
}

export default withRedux(initStore)(MyApp)