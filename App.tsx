import RootNavigation from './src/presentation/navigation/RootNavigator';
import { Provider } from 'react-redux';
import { store } from './src/presentation/shared-state';
import FullScreenLoadingIndicator from "./src/presentation/component/indicator/FullScreenLoadingIndicator";
const App = () => {
  return (
    <Provider store={store}>
          <RootNavigation />
          <FullScreenLoadingIndicator/>
    </Provider>

  );
};
export default App;

//SCREEN UP THÔNG TIN USER


// import React, { useState } from 'react';
// import { View, Text, Button, Image , Alert, TextInput, StyleSheet} from 'react-native';
// import { launchImageLibrary, ImageLibraryOptions } from 'react-native-image-picker';
// import RNFS from 'react-native-fs';
// import auth from '@react-native-firebase/auth';
// import firestore from '@react-native-firebase/firestore';


// const App = () => {
//   const [selectedImage, setSelectedImage] = useState<string | null>(null);
//   const [base64Image, setBase64Image] = useState<string | null>(null);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');
//   const [birthday, setBirthday] = useState('');
//   const [genres, setGenres] = useState('');
//   const [role, setRole] = useState('');
//   const [numberCupOfNoodles, setNumberCupOfNoodles] = useState('');
//   const pickImage = () => {
//     const options: ImageLibraryOptions = {
//       mediaType: 'photo', // Sử dụng 'photo', 'video', hoặc 'mixed'
//       maxWidth: 800,
//       maxHeight: 600,
//       quality: 0.8,
//     };

//     launchImageLibrary(options, (response) => {
//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (response.errorCode) {
//         console.log('Image Picker Error: ', response.errorMessage);
//       } else if (response.assets && response.assets.length > 0) {
//         const imageUri = response.assets[0].uri; // Lấy đường dẫn hình ảnh
//         setSelectedImage(imageUri!);
//         convertToBase64(imageUri!); // Chuyển đổi ảnh sang base64
//       } else {
//         console.log('No assets found');
//       }
//     });
//   };


//   const handleSignUp = async () => {
//     try {
//       // Đăng ký người dùng mới với email và password
//       const userCredential = await auth().createUserWithEmailAndPassword(email, password);

//       // Lấy userID của người dùng mới
//       const userId = userCredential.user.uid;

//       // Thêm thông tin người dùng vào Firestore
//       await firestore().collection('users').doc(userId).set({
//         name: name,
//         birthday: birthday,
//         genres: genres,
//         role: role,
//         numberCupOfNoodles: 3,
//         avatar: base64Image,
//       });

//       Alert.alert('Success', 'Account created and user info saved!');

//     } catch (error) {
//       Alert.alert('Error', error.message);
//     }
//   };
//   const convertToBase64 = (uri: string) => {
//     // Sử dụng react-native-fs để đọc file và chuyển thành base64
//     RNFS.readFile(uri, 'base64')
//       .then((res) => {
//         console.log('Base64 Image:', res); // In base64 image trong console
//         setBase64Image(res); // Cập nhật state base64Image
//       })
//       .catch((err) => {
//         console.log('Error converting to base64:', err);
//       });
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//        <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         secureTextEntry
//         value={password}
//         onChangeText={setPassword}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Name"
//         value={name}
//         onChangeText={setName}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Birthday (DD/MM/YYYY)"
//         value={birthday}
//         onChangeText={setBirthday}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Genres (e.g. Action, Drama)"
//         value={genres}
//         onChangeText={setGenres}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Role (e.g. Manager)"
//         value={role}
//         onChangeText={setRole}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Number of Cups of Noodles"
//         value={numberCupOfNoodles}
//         onChangeText={setNumberCupOfNoodles}
//         keyboardType="numeric"
//       />
//       <Button title="Chọn ảnh" onPress={pickImage} />

//       {selectedImage && (
//         <Image
//           source={{ uri: selectedImage }}
//           style={{ width: 300, height: 300, marginTop: 20 }}
//         />
//       )}

//       {base64Image && (
//         <Text style={{ marginTop: 20, paddingHorizontal: 10 }} numberOfLines={2}>
//           {base64Image.substring(0, 100)}... {/* Hiển thị 100 ký tự đầu của base64 */}
//         </Text>
//       )}
      
//        <Button title="Sign Up" onPress={handleSignUp} />
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//     backgroundColor: '#f7f7f7',
//   },
//   input: {
//     height: 50,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     marginBottom: 15,
//     paddingLeft: 10,
//     borderRadius: 5,
//     width: 500  },
// });
// export default App;

