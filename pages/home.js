import React, { Component } from 'react'
import { WhiteSpace, Card } from 'antd-mobile'
import Link from 'next/link'
import BasicLayout from '@/components/BasicLayout'
import WithDva from '@/store'

class Page extends Component {
  static async getInitialProps(props) {
    // first time run in server side
    // other times run in client side ( client side init with default props
    // console.log('get init props');
    const { pathname, query, isServer, store } = props
    // dispatch effects to fetch data here
    await props.store.dispatch({ type: 'posts/init' })
    // dont use store as property name, it will confilct with initial store
    return {
      pathname,
      query,
      isServer,
      dvaStore: store
    }
  }

  render() {
    const { posts } = this.props
    const dataList = posts.list

    return (
      <BasicLayout language={`en`}>
        {dataList.map(item => {
          return (
            <div key={item.id}>
              <WhiteSpace size="lg" />
              <Card>
                <Card.Header title={<Link href={`/post/${item.id}`}><a href="">{item.title}</a></Link>} />
                {/* <Card.Header
                  title={
                    <Link route="post" params={{ slug: item.id }}>
                      <a href="">{item.title}</a>
                    </Link>
                  }
                /> */}
                <Card.Body>
                  <div>{item.body}</div>
                </Card.Body>
              </Card>
            </div>
          )
        })}
      </BasicLayout>
    )
  }
}

export default WithDva(state => {
  return { posts: state.posts }
})(Page)
