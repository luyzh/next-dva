import React, { Component } from 'react'
import Router from 'next/router'
import { TabBar, Icon } from 'antd-mobile'
import { withRouter } from 'next/router'

class MenuBar extends Component {
  render() {
    const { router, children } = this.props
    const { pathname } = router

    return (
      <TabBar tabBarPosition="bottom">
        {tabBarData.map(({ title, icon, selectedIcon, link }) => (
          <TabBar.Item
            key={link}
            title={title}
            icon={<Icon type={icon} />}
            selectedIcon={<Icon type={selectedIcon} />}
            selected={pathname === link}
            onPress={() => Router.push(link)}
          >
            {children}
          </TabBar.Item>
        ))}
      </TabBar>
    )
  }
}

const tabBarData = [
  {
    title: 'Home',
    icon: 'check-circle-o',
    selectedIcon: 'check-circle',
    link: '/home'
  },
  {
    title: 'Album',
    icon: 'check-circle-o',
    selectedIcon: 'check-circle',
    link: '/album'
  },
  {
    title: 'User',
    icon: 'check-circle-o',
    selectedIcon: 'check-circle',
    link: '/user'
  }
]

export default withRouter(MenuBar)
