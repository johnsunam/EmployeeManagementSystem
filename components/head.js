import React from 'react'
import NextHead from 'next/head'
import { string } from 'prop-types'

const defaultDescription = ''
const defaultOGURL = ''
const defaultOGImage = ''

const Head = props => (
  <NextHead>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/antd/3.15.0/antd.min.css' />
  </NextHead>
)

export default Head
