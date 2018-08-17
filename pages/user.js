import React, { Component } from 'react'
import { Picker, List } from 'antd-mobile'
import BasicLayout from '@/components/BasicLayout'
import WithDva from '@/store'

class Page extends Component {
  static async getInitialProps(props) {
    // first time run in server side
    // other times run in client side ( client side init with default props
    // console.log('get init props');
    const { pathname, query, isServer, store } = props
    // dispatch effects to fetch data here
    await props.store.dispatch({ type: 'users/init' })
    // dont use store as property name, it will confilct with initial store
    return {
      pathname,
      query,
      isServer,
      dvaStore: store
    }
  }

  render() {
    const { users } = this.props
    const data = users.item

    return (
      <BasicLayout language={`en`}>
        <List style={{ backgroundColor: 'white' }}>
          <List.Item extra={data.name}>name</List.Item>
          <Picker data={[{ label: 'man', value: 0 }, { label: 'woman', value: 1 }]} cols={1}>
            <List.Item arrow="horizontal">sex</List.Item>
          </Picker>
          <List.Item extra={data.website}>website</List.Item>
          <List.Item extra={data.phone}>phone</List.Item>
        </List>
      </BasicLayout>
    )
  }
}

export default WithDva(state => {
  return { users: state.users }
})(Page)
