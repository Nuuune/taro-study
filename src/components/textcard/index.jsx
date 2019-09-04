import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'

export default class TextCard extends Component {
  render () {
    const { bgcolor } = this.props

    return (
      <View
        style={bgcolor ? `background:${bgcolor};` : ''}>
        <Text>{this.props.children}</Text>
      </View>
    )
  }
}
