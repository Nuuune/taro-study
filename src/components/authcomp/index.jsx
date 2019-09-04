import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Swiper, SwiperItem } from '@tarojs/components'
import './index.less'

import TextCard from '../textcard/index.jsx'

export default class AuthComponent extends Component {

  constructor (props) {
    super(props)
    this.state = {
      show: false
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  pageClassGet(isShow) {
    return isShow ? 'auth-page show' : 'auth-page hidden'
  }

  show = () => {
    this.setState({show: true})
  }

  close = () => {
    this.setState({show: false})
    this.props.onClose && this.props.onClose()
  }


  render () {
    const { show } = this.state

    return (
      <View 
        className={this.pageClassGet(show)}
        onClick={this.close}>
        <TextCard bgcolor='red'>red</TextCard>
        <TextCard bgcolor='blue'>blue</TextCard>
        <TextCard bgcolor='green'>green</TextCard>
        <View className='auth-page-logo'>
          <Image
            className='auth-page-logo__logo'
            src="http://lvpai-static.oss-cn-hangzhou.aliyuncs.com/icon/mine_logo.png"
          />
        </View>
      
        <Swiper
          className='sp'
          autoplay
          circular
          previous-margin='22rpx'
          next-margin='22rpx'>
          <SwiperItem>
            <View className='sp-item'>
              <Image
                className='sp-item-img'
                src="http://lvpai-static.oss-cn-hangzhou.aliyuncs.com/icon/swiper_banner@2x.png"
              />
            </View>
          </SwiperItem>
          <SwiperItem>
            <View className='sp-item'>
              <Image
                className='sp-item-img'
                src="http://lvpai-static.oss-cn-hangzhou.aliyuncs.com/icon/swiper_banner@2x.png"
              />
            </View>
          </SwiperItem>
          <SwiperItem>
            <View className='sp-item'>
              <Image
                className='sp-item-img'
                src="http://lvpai-static.oss-cn-hangzhou.aliyuncs.com/icon/swiper_banner@2x.png"
              />
            </View>
          </SwiperItem>
       
        </Swiper>
      </View>
    )
  }
}
