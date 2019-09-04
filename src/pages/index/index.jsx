import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'

import AuthComponent from '../../components/authcomp/index.jsx'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页',
    enablePullDownRefresh: true
  }

  refAuthComp = (node) => this.authComp = node

  showModal = () => this.authComp.show()

  authClose = () => {
    console.log('auth close')
  }

  render () {

    return (
      <View className='index'>
        <View
          style='background: #ccc;'
          onClick={this.showModal}
          >
          show modal
        </View>
        <AuthComponent
          ref={this.refAuthComp}
          onClose={this.authClose}
        />
      </View>
    )
  }
}
