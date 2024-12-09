import React, { useState, useEffect } from 'react';
import { Image, View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { PrimaryBackground , Loading} from '../../../component';
import { styles } from './scanLogin.style';
import { ICON_AREASCAN, ICON_ARROW_RIGHT, ICON_SCAN, LABEL_SCAN } from '../../../../../assets';
import { useDispatch, useSelector } from 'react-redux';
import { Camera, useCameraDevice, useCodeScanner } from "react-native-vision-camera";
import { RootState, setUserID, setScanQRStatus ,signIn, showLoading, hideLoading } from '../../../shared-state';
const scanLogin: React.FC = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const { userId, status } = useSelector((state: RootState) => state.scanQR);
  const isLoading = useSelector((state: RootState) => state.loading.isLoading);
  const [qrCode, setQrCode] = useState(null); 
  const device = useCameraDevice("back"); 
  const codeScanner = useCodeScanner({
    codeTypes: ["qr"],
    onCodeScanned: (codes) => {
      setQrCode(codes[0]?.value); 
      dispatch(setUserID(qrCode!));
    },
  });
  
  console.log(status);
  const dispatch = useDispatch();

  console.log(userId);
  const id = qrCode;
  const handleSignIn = async () => {
    dispatch(showLoading('Đang xử lý...'))
    try {
      await dispatch(signIn(id));
    } catch (error) {
    }
    dispatch(hideLoading(''));
  };
  useEffect(() => {
    if (userId!= null && status =='scanned') {
      handleSignIn()
    }
  }, [userId, status]);

  const handleRequestPermission = async () => {
    dispatch(setScanQRStatus('scanned'));
    setQrCode(null);
    setHasPermission(true);
  };

  return (
    <PrimaryBackground headerText="welcom">
      <>
      {isLoading && <Loading message="Đang xử lý..." />}
      </>
      <View>
        <View style={styles.container}>
          <View style={styles.frame}>
            <View style={styles.screenscan}>

              {(!hasPermission || device == null) ? (
                <ImageBackground style={styles.labelscan} source={LABEL_SCAN}>
                  <TouchableOpacity style={styles.buttonPermission} onPress={handleRequestPermission}>
                    <View style={styles.triangleUp} />
                  </TouchableOpacity>
                </ImageBackground>
              ) : (
                <View style={styles.cameraContainer}>
                  <Camera
                    style={styles.camera}
                    device={device}
                    isActive={true}
                    codeScanner={codeScanner}
                  />
                  {/* <View style={styles.overlay}>
                    <Ionicons name="scan-circle-outline" size={150} color="white" />
                  </View> */}
                </View>
              )}

            </View>
          </View>
        </View>
        <View style={styles.shadow}>

        </View>
      </View>
      <View style={styles.viewnote}>
        <Image style={styles.iconscan} source={ICON_SCAN} />
        <Text style={styles.tiltenote}>
          Follow the arrow to scan card
        </Text>
      </View>
      <View >
        <Image style={styles.areascan} source={ICON_AREASCAN} />

      </View>
      <Image style={styles.arrowright} source={ICON_ARROW_RIGHT} />
    </PrimaryBackground>
  );
};

export default React.memo(scanLogin);


