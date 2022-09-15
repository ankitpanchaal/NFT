import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES, assets } from '../constants'
const HomeHeader = ({ onSearch }) => {
  return (
    <View style={{
      backgroundColor: COLORS.primary,
      padding: SIZES.font,
    }}>
      <View style={{
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
      }}>
        <Image source={assets.logo}
          style={{ height: 25, width: 90 }}
          resizeMode='contain'
        />
        <View style={{ height: 45, width: 45 }}>
          <Image source={assets.person01}
            style={{ width: '100%', height: '100%', }}
            resizeMode='contain'
          />
          <Image source={assets.badge}
            style={{ position: 'absolute', height: 15, width: 15, bottom: 0, right: 0 }}
            resizeMode='contain'
          />
        </View>
      </View>

      <View style={{ marginVertical: SIZES.font }}>
        <Text style={{
          fontFamily: FONTS.regular,
          fontSize: SIZES.small,
          color: COLORS.white
        }}>Hello, Ankit 👋</Text>
        <Text style={{
          fontFamily: FONTS.bold,
          fontSize: SIZES.large,
          color: COLORS.white,
          margin: SIZES.base / 2
        }}>Lets find a masterpiece</Text>
      </View>

      <View style={{ marginTop: SIZES.font }}>
        <View style={{
          borderRadius: SIZES.font,
          width: '100%',
          backgroundColor: COLORS.gray,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: SIZES.font,
          paddingVertical: SIZES.small - 2,

        }}>
          <Image source={assets.search} style={{
            height: 15, width: 15, marginRight: SIZES.base
          }}
            resizeMode='contain'
          />

          <TextInput placeholder='search NFTs' style={{ flex: 1 }} onChangeText={() => { onSearch }} />
        </View>
      </View>
    </View>
  )
}

export default HomeHeader