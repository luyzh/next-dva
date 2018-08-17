import React, { Component } from 'react'
import { List } from 'antd-mobile'
import pathToRegexp from 'path-to-regexp'

import BasicLayout from '@/components/BasicLayout'
import WithDva from '@/store'

const Item = List.Item

class Page extends Component {
  static async getInitialProps(props) {
    // first time run in server side
    // other times run in client side, client side init with default props
    // console.log('get init props');
    const { err, req, res, pathname, query, asPath, isServer, store } = props
    const re = pathToRegexp('/post/:id')
    const result = re.exec(asPath)
    const id = result[result.length - 1]
    // dispatch effects to fetch data here
    await props.store.dispatch({ type: 'posts/initItem', payload: { id } })
    // dont use store as property name, it will confilct with initial store
    return {
      pathname,
      query,
      isServer,
      dvaStore: store
    }
  }

  render() {
    const { post } = this.props

    return (
      <BasicLayout language={`en`}>
        <List renderHeader={() => `post ${post.id}`}>
          <Item>{post.title}</Item>
          <Item wrap>{post.body} </Item>
        </List>
      </BasicLayout>
    )
  }
}

export default WithDva(state => {
  return { post: state.posts.item }
})(Page)
