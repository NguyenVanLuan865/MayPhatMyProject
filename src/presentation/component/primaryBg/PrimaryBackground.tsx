import React from 'react';
import { StyleSheet, StatusBar, ImageBackground, SafeAreaView , Text, Image} from 'react-native';
import { BACKGROUND_2, BACKGROUND_1, BACKGROUND , ICON_LOGO} from '../../../../assets';
import { scale, scaleHeight, scaleWidth } from '../../resource';

export interface PrimaryBackgroundProps {
  children: React.ReactNode;
  headerText?: string;  
}

const _PrimaryBackgroundComponent: React.FC<PrimaryBackgroundProps> = ({ children ,headerText }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar hidden={true} />
      <ImageBackground style={{ flex: 1 }} source={BACKGROUND_2}>
        <ImageBackground
          source={BACKGROUND_1}
          resizeMode="center"
          style={{
            width: '100%',
            height: scaleHeight(680),
            marginTop: scaleHeight(1286),
          }}
        >
        </ImageBackground>
        <ImageBackground
          source={BACKGROUND}
          resizeMode="center"
          style={styles.backgroundmain}
        >
          <Image
            style={styles.logo}
            source={ICON_LOGO}
          />
          <Text style={styles.header}>
            {headerText}
          </Text>
          {children}
        </ImageBackground>
      </ImageBackground>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: scale(80),
    fontFamily: 'SVN-Nexa-Rust-Slab-Black-Shadow',
    color: '#C71A1A',
    textAlign: 'center',
    marginTop: scaleHeight(70),

  },
  logo: {
    width: scaleWidth(252),
    height: scaleHeight(202),
    marginTop: scaleHeight(80),
  },
  backgroundmain: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
    alignItems: 'center',
  }
});

export const PrimaryBackground = React.memo(_PrimaryBackgroundComponent);