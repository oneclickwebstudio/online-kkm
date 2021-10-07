import { CapacitorConfig } from '@capacitor/cli';
import {KeyboardResize} from '@capacitor/keyboard';

const config: CapacitorConfig = {
  appId: 'app.ab.onlinekkm',
  appName: 'online-kkm',
  webDir: 'www',
  bundledWebRuntime: false,
  server: {
    hostname: 'onlinekkm.ab.kg',
    iosScheme: 'onlinekkm',
    androidScheme: 'https',
    allowNavigation: [
      'onlinekkm',
      'onlinekkm.ab.kg',
      'ab.kg',
      'cdn.ab.kg'
    ]
  },
  android: {
    allowMixedContent: true,
    webContentsDebuggingEnabled: true
  },
  plugins: {
    SplashScreen: {
      androidScaleType: 'CENTER_CROP'
    },
    Keyboard: {
      resize: KeyboardResize.Body,
      style: 'dark'
    }
  },
};

export default config;
