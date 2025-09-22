# 🛒 GHID DEPLOYMENT PLATFORMĂ DE VÂNZĂRI ÎN CLOUD

Acest ghid te va ajuta să deploiezi platforma ta de vânzări în cloud folosind Docker, cu toate serviciile configurate pentru rulare 24/7.

## 🚀 DEPLOYMENT ÎN CLOUD - OPȚIUNI RECOMANDATE

### 1. **DigitalOcean App Platform** (Recomandat pentru începători)
```bash
# Creează droplet cu Docker pre-instalat
doctl compute droplet create sales-platform \
  --image docker-20-04 \
  --size s-2vcpu-4gb \
  --region fra1 \
  --ssh-keys your-ssh-key-id

# Conectează-te la server
ssh root@your-server-ip

# Clonează repository-ul
git clone https://github.com/your-username/sales-platform.git
cd sales-platform

# Pornește aplicația
docker-compose up --build -d
```

### 2. **AWS ECS/Fargate** (Pentru scalabilitate mare)
```bash
# Creează ECR repository
aws ecr create-repository --repository-name sales-platform

# Build și push imagine
docker build -f Dockerfile.txt -t sales-platform .
docker tag sales-platform:latest your-account.dkr.ecr.region.amazonaws.com/sales-platform:latest
docker push your-account.dkr.ecr.region.amazonaws.com/sales-platform:latest
```

### 3. **Google Cloud Run** (Serverless, pay-per-use)
```bash
# Build și deploy
gcloud builds submit --tag gcr.io/your-project/sales-platform
gcloud run deploy --image gcr.io/your-project/sales-platform --platform managed
```

## 🔧 CONFIGURARE ENVIRONMENT VARIABLES

Creează fișierul `.env.production`:

```bash
# Database
DATABASE_URL=postgresql://sales_admin:SecureSalesPass2024!@localhost:5432/sales_platform
REDIS_URL=redis://:SecureSalesRedis2024!@localhost:6379

# Security
JWT_SECRET=your-super-secure-jwt-secret-key-minimum-32-characters
ENCRYPTION_KEY=your-32-character-encryption-key

# Payment Processors
STRIPE_SECRET_KEY=sk_live_your_live_stripe_key
STRIPE_PUBLISHABLE_KEY=pk_live_your_live_publishable_key
STRIPE_WEBHOOK_SECRET=whsec_your_stripe_webhook_secret
PAYPAL_CLIENT_ID=your_paypal_live_client_id
PAYPAL_CLIENT_SECRET=your_paypal_live_client_secret

# Email Service
EMAIL_SERVICE=gmail
EMAIL_USER=your-business-email@gmail.com
EMAIL_PASS=your-app-specific-password
SENDGRID_API_KEY=SG.your_sendgrid_api_key

# SMS/Notifications
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE_NUMBER=+1234567890

# Cloud Storage
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
AWS_S3_BUCKET=your-sales-platform-bucket
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret

# Firebase (pentru push notifications)
FIREBASE_PROJECT_ID=your-firebase-project
FIREBASE_CLIENT_EMAIL=your-service-account@firebase.iam.gserviceaccount.com
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour Firebase private key\n-----END PRIVATE KEY-----\n"

# App Configuration
NODE_ENV=production
APP_URL=https://your-domain.com
API_URL=https://api.your-domain.com
ADMIN_URL=https://admin.your-domain.com
```

## 📦 COMENZI DEPLOYMENT

### Build și Deploy cu Docker Compose
```bash
# Development
npm run docker:dev

# Production
npm run docker:prod

# Cu SSL/HTTPS
docker-compose -f docker-compose.prod.yml up --build -d
```

### Deploy cu PM2 (Recommended pentru cloud servers)
```bash
# Instalează dependențele
npm install

# Build aplicația pentru producție
npm run build:prod

# Migrează baza de date
npm run db:migrate
npm run db:seed

# Pornește cu PM2
npm run pm2:start

# Monitorizează
npm run pm2:monit
npm run pm2:logs
```

## 🗄️ CONFIGURARE BAZĂ DE DATE

### PostgreSQL Setup
```sql
-- Conectează-te ca postgres user
sudo -u postgres psql

-- Creează baza de date și user-ul
CREATE DATABASE sales_platform;
CREATE USER sales_admin WITH ENCRYPTED PASSWORD 'SecureSalesPass2024!';
GRANT ALL PRIVILEGES ON DATABASE sales_platform TO sales_admin;
ALTER USER sales_admin CREATEDB;

-- Configurează extensii necesare
\c sales_platform
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";
```

### Migrații Database
```bash
# Creează migrațiile
npx sequelize-cli migration:generate --name create-users-table
npx sequelize-cli migration:generate --name create-products-table
npx sequelize-cli migration:generate --name create-orders-table
npx sequelize-cli migration:generate --name create-payments-table

# Rulează migrațiile
npm run db:migrate

# Populează cu date de test
npm run db:seed
```

## 🔒 CONFIGURARE SSL/HTTPS

### Cu Let's Encrypt (Gratuit)
```bash
# Instalează Certbot
sudo apt install certbot python3-certbot-nginx

# Obține certificatul SSL
sudo certbot --nginx -d your-domain.com -d api.your-domain.com -d admin.your-domain.com

# Auto-renewal
sudo crontab -e
# Adaugă: 0 12 * * * /usr/bin/certbot renew --quiet
```

### Configurare Nginx cu SSL
```nginx
server {
    listen 443 ssl http2;
    server_name your-domain.com;
    
    ssl_certificate /etc/letsencrypt/live/your-domain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/your-domain.com/privkey.pem;
    
    # Configurația rămâne la fel ca în nginx.conf
}
```

## 📱 BUILD PENTRU MOBILE

### Android APK/AAB
```bash
# Debug build
npm run build:android

# Release build (pentru Google Play Store)
cd android
./gradlew bundleRelease

# APK file va fi în: android/app/build/outputs/bundle/release/
```

### iOS Build
```bash
# Doar pe macOS
npm run build:ios

# Pentru App Store
# Deschide ios/YourApp.xcworkspace în Xcode
# Product > Archive > Upload to App Store
```

## 🔍 MONITORING ȘI LOGGING

### PM2 Monitoring
```bash
# Monitorizează în timp real
pm2 monit

# Logs
pm2 logs sales-api
pm2 logs admin-api

# Restart aplicații
pm2 restart all
```

### Database Monitoring
```bash
# PostgreSQL stats
sudo -u postgres psql -c "SELECT * FROM pg_stat_activity;"

# Redis monitoring
redis-cli monitor
```

## 🚨 BACKUP ȘI RECOVERY

### Database Backup
```bash
# Backup automat
pg_dump -h localhost -U sales_admin sales_platform > backup_$(date +%Y%m%d_%H%M%S).sql

# Restore
psql -h localhost -U sales_admin sales_platform < backup_20241220_120000.sql
```

### Files Backup
```bash
# Backup uploads și assets
tar -czf uploads_backup_$(date +%Y%m%d).tar.gz /app/uploads
```

## 🔧 TROUBLESHOOTING

### Container nu pornește
```bash
# Verifică logs
docker logs sales-platform-container

# Verifică serviciile
docker-compose ps

# Restart servicii
docker-compose restart
```

### Database connection issues
```bash
# Verifică PostgreSQL
sudo systemctl status postgresql
sudo -u postgres psql -l

# Verifică Redis
redis-cli ping
```

### Performance Issues
```bash
# Monitorizează resurse
htop
df -h
free -m

# Optimizează PostgreSQL
sudo nano /etc/postgresql/15/main/postgresql.conf
# shared_buffers = 256MB
# effective_cache_size = 1GB
```

## 📊 SCALARE ȘI OPTIMIZARE

### Load Balancing cu Nginx
```nginx
upstream sales_api {
    server localhost:3000;
    server localhost:3001;
    server localhost:3002;
}
```

### Database Optimization
```sql
-- Indexuri pentru performanță
CREATE INDEX idx_products_category ON products(category_id);
CREATE INDEX idx_orders_user ON orders(user_id);
CREATE INDEX idx_orders_status ON orders(status);
```

## 🎯 CHECKLIST DEPLOYMENT

- [ ] ✅ Environment variables configurate
- [ ] ✅ SSL certificate instalat
- [ ] ✅ Database migrată și populată
- [ ] ✅ Payment processors configurați
- [ ] ✅ Email service configurat
- [ ] ✅ Push notifications setup
- [ ] ✅ Backup strategy implementată
- [ ] ✅ Monitoring configurat
- [ ] ✅ Domain și DNS configurate
- [ ] ✅ Mobile apps built și deployed




