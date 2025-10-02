# 🛒 PLATFORMĂ DE VÂNZĂRI - E-COMMERCE

🚀 O platformă de vânzări completă construită cu React Native + TypeScript, optimizată pentru deployment în cloud cu arhitectură microservicii modernă.

## ✨ Funcționalități

- **TypeScript complet configurat** - Tipizare statică pentru siguranță maximă
- **React Navigation** - Navigație fluidă între ecrane
- **Componente reutilizabile** - Arhitectură modulară și scalabilă
- **Temă dark VS Code** - Design familiar pentru dezvoltatori
- **Docker support** - Dezvoltare în containere pentru consistență
- **PostgreSQL** - Bază de date robustă
- **SQL Lite** - cache intern device 
- **Redis** - Caching și session management
- **Hot Reload** - Dezvoltare rapidă cu actualizări live

## 🏗️ Arhitectura Proiectului
Aceasta este prima arhitectura dupa care am lucrat fiind putin mai simpla
```
MyApp/
├── src/
│   ├── components/          # Componente reutilizabile
│   │   ├── Button.tsx      # Component buton personalizat
│   │   ├── Card.tsx        # Component card
│   │   └── index.ts        # Export barrel
│   ├── screens/            # Ecranele aplicației
│   │   ├── HomeScreen.tsx  # Ecran principal
│   │   ├── ProfileScreen.tsx # Ecran profil
│   │   ├── SettingsScreen.tsx # Ecran setări
│   │   └── index.ts        # Export barrel
│   ├── navigation/         # Configurația de navigație
│   │   └── AppNavigator.tsx
│   ├── types/              # Tipuri TypeScript
│   │   └── index.ts
│   ├── utils/              # Utilitare și configurații
│   │   └── theme.ts        # Configurația temei
│   └── assets/             # Resurse statice
├── android/                # Cod specific Android
├── ios/                    # Cod specific iOS
├── App.tsx                 # Componenta root
├── package.json           # Dependencies și scripturi
├── tsconfig.json          # Configurația TypeScript
├── metro.config.js        # Configurația Metro bundler
├── docker-compose.yml     # Orchestrare servicii
└── Dockerfile.txt         # Imagine Docker pentru React Native
```


Now i have a bigger infracstructure for thiss app 




## 🚀 Cum să rulezi aplicația

### Metoda 1: Cu Docker (Recomandat)

1. **Asigură-te că ai Docker instalat:
   ```bash
   docker --version
   docker-compose --version
   ```

2. **Clonează și navighează în proiect:
   ```bash
   git clone <repository-url>
   cd MyApp
   ```

3. **Pornește toate serviciile:
   ```bash
   docker-compose up -d
   ```

4. **Pornește aplicația React Native:**
   ```bash
   docker-compose exec react-native-app npm start
   ```

5. **Pentru Android:**
   ```bash
   docker-compose exec react-native-app npm run android
   ```

6. **Pentru iOS (necesită macOS):
   ```bash
   docker-compose exec react-native-app npm run ios
   ```

### Metoda 2: Dezvoltare locală

1. **Instalează dependențele:
   ```bash
   npm install
   # sau
   yarn install
   ```

2. **Pentru iOS, instalează pod dependencies:
   ```bash
   cd ios && pod install && cd ..
   ```

3. **Pornește Metro bundler:
   ```bash
   npm start
   ```

4. **În alt terminal, rulează pe platformă:
   ```bash
   # Android
   npm run android
   
   # iOS
   npm run ios
   ```

## 🛠️ Scripturi disponibile

- `npm start` - Pornește Metro bundler
- `npm run android` - Rulează pe Android
- `npm run ios` - Rulează pe iOS
- `npm run web` - Rulează versiunea web (cu Expo)
- `npm test` - Rulează testele
- `npm run lint` - Verifică codul cu ESLint
- `npm run type-check` - Verifică tipurile TypeScript

## 🐳 Servicii Docker

Aplicația include următoarele servicii:

- **react-native-app** - Mediul de dezvoltare React Native
- **postgres** - Bază de date PostgreSQL
- **redis** - Cache și session storage
- **api** - Backend API (opțional)
- **adminer** - Interface pentru baza de date

### Accesare servicii:

- **Aplicația React Native**: http://localhost:8081
- **Backend API**: http://localhost:3000
- **Adminer (DB management)**: http://localhost:8080
- **PostgreSQL**: localhost:5432
- **Redis**: localhost:6379

## 🎨 Tema și Design

Aplicația folosește o temă dark inspirată de VS Code cu următoarele culori:

- **Primary**: `#007ACC` (VS Code blue)
- **Secondary**: `#4EC9B0` (VS Code cyan)  
- **Background**: `#1E1E1E` (VS Code dark)
- **Surface**: `#252526` (VS Code sidebar)
- **Text**: `#CCCCCC` (VS Code text)

## 📱 Funcționalități implementate

### Ecran Principal (Home)
- Contor interactiv cu butoane
- Lista de funcționalități
- Acțiuni asincrone cu loading states
- Navigație către alte ecrane

### Ecran Profil
- Informații utilizator cu avatar
- Statistici personale
- Sistem de realizări/achievements
- Acțiuni profil (editare, logout)

### Ecran Setări
- Toggle-uri pentru preferințe
- Gestionare date (cache, export, reset)
- Informații aplicație
- Acțiuni rapide

## 🔧 Configurare dezvoltare

### TypeScript
Aplicația este complet tipizată cu TypeScript. Configurația se află în `tsconfig.json` și include:
- Path mapping pentru import-uri curate
- Strict type checking
- Support pentru JSX

### Metro Bundler
Configurat pentru TypeScript și path aliases în `metro.config.js`.

### ESLint
Configurare pentru React Native și TypeScript cu reguli stricte.

## 📦 Dependențe principale

- **react-native**: ^0.72.4
- **typescript**: ^4.8.4
- **@react-navigation/native**: ^6.1.7
- **@react-navigation/bottom-tabs**: ^6.5.8
- **react-native-vector-icons**: ^10.0.0
- **styled-components**: ^6.0.7

## 🚨 Troubleshooting

### Probleme comune:

1. **Metro bundler nu pornește:**
   ```bash
   npx react-native start --reset-cache
   ```

2. **Probleme cu Android:**
   ```bash
   cd android && ./gradlew clean && cd ..
   npx react-native run-android
   ```

3. **Probleme cu iOS:**
   ```bash
   cd ios && pod install && cd ..
   npx react-native run-ios
   ```

4. **Probleme cu Docker:**
   ```bash
   docker-compose down -v
   docker-compose up --build
   ```


**Creat cu ❤️ folosind React Native & TypeScript**
