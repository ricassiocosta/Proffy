import React from 'react'
import { View, Image, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

import styles from './styles'

function TeacherItem() {
  return(
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image source={{uri: 'https://github.com/ricassiocosta.png'}} style={styles.avatar} />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Ricassio Costa</Text>
          <Text style={styles.subject}>História</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        {'\n'}{`\n`}
        A placeat debitis quaerat rem et necessitatibus nobis sunt, sed fuga accusamus ipsum repellat deleniti qui laboriosam totam blanditiis enim quo temporibus.
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {'  '}
          <Text style={styles.priceValue}>R$ 20,00</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            {/*<Image source={heartOutlineIcon} />*/}
            <Image source={unfavoriteIcon} />
          </RectButton>
          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  )
}

export default TeacherItem