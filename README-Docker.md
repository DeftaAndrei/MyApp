# React Native Docker Environment 🐳

Acest environment Docker oferă o configurație completă pentru dezvoltarea aplicațiilor React Native cu suport pentru iOS, Android și TypeScript.

## 🚀 Caracteristici

- ✅ **React Native** cu CLI complet configurat
- ✅ **TypeScript** suport nativ
- ✅ **Android SDK** cu build tools și emulatoare
- ✅ **iOS development tools** (ios-deploy, CocoaPods)
- ✅ **Node.js 18** cu Yarn
- ✅ **Expo CLI** pentru dezvoltare rapidă
- ✅ **Watchman** pentru file watching
- ✅ **Metro bundler** configurat

## 📋 Cerințe

- Docker și Docker Compose instalate
- Pentru Android: Android device conectat via USB sau emulator în host
- Pentru iOS: macOS host (limitare Docker)

## 🛠️ Utilizare Rapidă

### 1. Build și pornire container

```bash
# Build și pornire cu docker-compose
docker-compose up --build

# Sau manual
docker build -f Dockerfile.txt -t react-native-dev .
docker run -it --privileged -p 8081:8081 -p 19000-19002:19000-19002 -v $(pwd):/app react-native-dev
```

### 2. Dezvoltare în container

```bash
# Intră în container
docker-compose exec react-native-dev bash

# Inițializează proiect nou (dacă nu există)
npx react-native init MyApp --template react-native-template-typescript
cd MyApp

# Sau pentru Expo
expo init MyExpoApp --template expo-template-blank-typescript
cd MyExpoApp

# Pornește Metro bundler
npm start

# Rulează pe Android
npm run android

# Rulează pe iOS (doar pe macOS host)
npm run ios
```

## 📱 Configurare Device-uri

### Android
```bash
# Verifică device-urile conectate
adb devices

# Activează USB debugging pe device
# Setări → Opțiuni dezvoltator → USB debugging

# Forward porturile pentru Metro
adb reverse tcp:8081 tcp:8081
```

### iOS
```bash
# Instalează aplicația pe device iOS real
npx react-native run-ios --device "Numele Device-ului"

# Pentru simulator (doar pe macOS)
npx react-native run-ios
```

## 🔧 Comenzi Utile

```bash
# Verifică versiunile instalate
node --version
npm --version
react-native --version
expo --version

# Curăță cache-ul
npm start -- --reset-cache
expo start -c

# Build pentru producție Android
cd android && ./gradlew assembleRelease

# Verifică Android SDK
sdkmanager --list
```

## 📦 Structura Proiectului

```
MyApp/
├── android/          # Cod nativ Android
├── ios/              # Cod nativ iOS
├── src/              # Cod sursă TypeScript/JavaScript
├── __tests__/        # Teste
├── package.json      # Dependențe Node.js
├── tsconfig.json     # Configurare TypeScript
├── metro.config.js   # Configurare Metro bundler
└── babel.config.js   # Configurare Babel
```

## 🐛 Troubleshooting

### Port-uri ocupate
```bash
# Oprește procesele care folosesc portul 8081
lsof -ti:8081 | xargs kill -9
```

### Cache issues
```bash
# Curăță toate cache-urile
rm -rf node_modules
npm install
npm start -- --reset-cache
```

### Android build errors
```bash
# Curăță build-ul Android
cd android
./gradlew clean
cd ..
npm run android
```

### Permission issues
```bash
# Fix permisiuni Android SDK
sudo chown -R $USER:$USER $ANDROID_HOME
chmod +x android/gradlew
```

## 🔒 Securitate

- Container-ul rulează cu user non-root pentru securitate
- Doar porturile necesare sunt expuse
- Dependențele sunt fixate la versiuni specifice

## 📝 Notițe Importante

1. **iOS Development**: Din cauza limitărilor Docker, development-ul iOS complet necesită macOS host
2. **Performance**: Pentru performanță optimă, folosește volume-uri pentru cache
3. **USB Debugging**: Pentru Android, asigură-te că USB debugging este activat
4. **Network**: Container-ul folosește `network_mode: host` pentru acces la device-uri

## 🤝 Contribuții

Pentru îmbunătățiri sau bug-uri, te rog să creezi un issue sau pull request.
