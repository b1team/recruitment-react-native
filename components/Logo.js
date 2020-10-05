import React from 'react'
import { Image } from 'react-native'

function MainLogo(props) {
  return (
    <Image
      style={{ width: props.width, height: props.height, alignItems: 'center' }}
      source={require('../images/recruitment.png')}
    />
  );
}

export default MainLogo;
