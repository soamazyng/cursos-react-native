import Reactotron from 'reactotron-react-native';

// variável global do ReactNative que retorna True quando você está emulando a aplicação
if (__DEV__) {
  const tron = Reactotron.configure()
    .configure({
      name: 'React Native Demo',
    })
    .useReactNative({
      asyncStorage: false, // there are more options to the async storage.
      editor: false, // there are more options to editor
      overlay: false, // just turning off overlay
    })
    .connect();

  console.tron = tron;

  tron.clear();
}
