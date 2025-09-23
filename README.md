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


This is structure for my app now i make that

sales-platform-app/
├── __tests__/                  # Unit and integration tests (e.g., for cart calculations)
├── android/                    # Android-specific configs and builds
├── ios/                        # iOS-specific configs and builds
├── src/                        # Core application source code
│   ├── features/               # Feature-based modules for sales functionalities
│   │   ├── auth/               # Authentication (login, register, forgot password)
│   │   │   ├── screens/        # e.g., LoginScreen.js, RegisterScreen.js
│   │   │   ├── components/     # e.g., AuthForm.js, SocialLoginButton.js
│   │   │   ├── services/       # e.g., authApi.js for API calls
│   │   │   ├── hooks/          # e.g., useAuth.js for auth state
│   │   │   └── types/          # TypeScript types for auth data
│   │   ├── products/           # Product browsing and details
│   │   │   ├── screens/        # e.g., ProductListScreen.js, ProductDetailScreen.js
│   │   │   ├── components/     # e.g., ProductCard.js, SearchBar.js
│   │   │   ├── services/       # e.g., productsApi.js for fetching inventory
│   │   │   ├── hooks/          # e.g., useProducts.js for data fetching
│   │   │   └── utils/          # e.g., formatPrice.js for currency handling
│   │   ├── cart/               # Shopping cart management
│   │   │   ├── screens/        # e.g., CartScreen.js
│   │   │   ├── components/     # e.g., CartItem.js, TotalSummary.js
│   │   │   ├── services/       # e.g., cartApi.js for updates
│   │   │   └── store/          # e.g., cartSlice.js for Redux state
│   │   ├── checkout/           # Payment and order placement
│   │   │   ├── screens/        # e.g., CheckoutScreen.js, PaymentScreen.js
│   │   │   ├── components/     # e.g., PaymentForm.js, AddressSelector.js
│   │   │   ├── services/       # e.g., paymentApi.js integrating Stripe/PayPal
│   │   │   └── hooks/          # e.g., useCheckout.js for validation
│   │   ├── profile/            # User account and settings
│   │   │   ├── screens/        # e.g., ProfileScreen.js, EditProfile.js
│   │   │   ├── components/     # e.g., UserInfo.js, AvatarUploader.js
│   │   │   └── services/       # e.g., profileApi.js for updates
│   │   └── orders/             # Order history and tracking
│   │       ├── screens/        # e.g., OrdersScreen.js, OrderDetail.js
│   │       ├── components/     # e.g., OrderSummary.js, TrackingMap.js
│   │       └── services/       # e.g., ordersApi.js for retrieval
│   ├── shared/                 # Reusable elements across features
│   │   ├── components/         # e.g., Button.js, Modal.js, Loader.js
│   │   ├── hooks/              # e.g., useApi.js for generic fetching
│   │   ├── utils/              # e.g., helpers.js for date formatting, validation.js
│   │   ├── constants/          # e.g., enums.js for statuses (e.g., OrderStatus), strings.js for i18n
│   │   └── types/              # Global types (if using TypeScript)
│   ├── api/                    # Central API client (e.g., api.js with Axios setup)
│   ├── assets/                 # Static files
│   │   ├── images/             # Product images, icons, logos
│   │   ├── fonts/              # Custom fonts for branding
│   │   └── lottie/             # Animations (e.g., loading spinners for cart)
│   ├── navigation/             # Routing logic
│   │   ├── AppNavigator.js     # Main navigator
│   │   ├── AuthStack.js        # Pre-login routes
│   │   └── MainStack.js        # Post-login tabs/stacks
│   ├── store/                  # State management (e.g., Redux or Zustand)
│   │   ├── slices/             # e.g., userSlice.js, cartSlice.js
│   │   └── store.js            # Root store config
│   ├── config/                 # App-wide configs (e.g., theme.js for styles, index.js for exports)
│   └── App.js                  # Root component entry
├── .env                        # Environment variables (e.g., API keys; don't commit)
├── .env.example                # Template for vars
├── .eslintrc.js                # Linting rules
├── .prettierrc.js              # Formatting config
├── babel.config.js             # Babel setup
├── index.js                    # App entry point
├── package.json                # Dependencies and scripts
├── tsconfig.json               # TypeScript config (optional)
└── README.md                   # Project docs and setup instructions



## 🚀 Cum să rulezi aplicația

### Metoda 1: Cu Docker (Recomandat)

1. **Asigură-te că ai Docker instalat:**
   ```bash
   docker --version
   docker-compose --version
   ```

2. **Clonează și navighează în proiect:**
   ```bash
   git clone <repository-url>
   cd MyApp
   ```

3. **Pornește toate serviciile:**
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

6. **Pentru iOS (necesită macOS):**
   ```bash
   docker-compose exec react-native-app npm run ios
   ```

### Metoda 2: Dezvoltare locală

1. **Instalează dependențele:**
   ```bash
   npm install
   # sau
   yarn install
   ```

2. **Pentru iOS, instalează pod dependencies:**
   ```bash
   cd ios && pod install && cd ..
   ```

3. **Pornește Metro bundler:**
   ```bash
   npm start
   ```

4. **În alt terminal, rulează pe platformă:**
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
