// PM2 Ecosystem Configuration pentru Platformă de Vânzări
// Optimizat pentru deployment în cloud și producție

module.exports = {
  apps: [
    {
      name: 'sales-api',
      script: './backend/server.js',
      instances: 'max',
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'development',
        PORT: 3000,
        DATABASE_URL: 'postgresql://sales_admin:SecureSalesPass2024!@localhost:5432/sales_platform',
        REDIS_URL: 'redis://:SecureSalesRedis2024!@localhost:6379',
        JWT_SECRET: 'your-super-secure-jwt-secret-key-here',
        STRIPE_SECRET_KEY: 'sk_test_your_stripe_key',
        PAYPAL_CLIENT_ID: 'your_paypal_client_id',
        EMAIL_SERVICE: 'gmail',
        EMAIL_USER: 'your-email@gmail.com',
        EMAIL_PASS: 'your-app-password'
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000,
        DATABASE_URL: 'postgresql://sales_admin:SecureSalesPass2024!@localhost:5432/sales_platform',
        REDIS_URL: 'redis://:SecureSalesRedis2024!@localhost:6379',
        JWT_SECRET: process.env.JWT_SECRET,
        STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
        PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID,
        EMAIL_SERVICE: process.env.EMAIL_SERVICE,
        EMAIL_USER: process.env.EMAIL_USER,
        EMAIL_PASS: process.env.EMAIL_PASS
      },
      watch: false,
      max_memory_restart: '1G',
      log_file: './logs/sales-api.log',
      out_file: './logs/sales-api-out.log',
      error_file: './logs/sales-api-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm Z'
    },
    {
      name: 'admin-api',
      script: './backend/admin-server.js',
      instances: 1,
      env: {
        NODE_ENV: 'development',
        PORT: 3001,
        DATABASE_URL: 'postgresql://sales_admin:SecureSalesPass2024!@localhost:5432/sales_platform',
        REDIS_URL: 'redis://:SecureSalesRedis2024!@localhost:6379',
        JWT_SECRET: 'your-super-secure-jwt-secret-key-here'
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3001,
        DATABASE_URL: 'postgresql://sales_admin:SecureSalesPass2024!@localhost:5432/sales_platform',
        REDIS_URL: 'redis://:SecureSalesRedis2024!@localhost:6379',
        JWT_SECRET: process.env.JWT_SECRET
      },
      watch: false,
      max_memory_restart: '512M',
      log_file: './logs/admin-api.log',
      out_file: './logs/admin-api-out.log',
      error_file: './logs/admin-api-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm Z'
    },
    {
      name: 'webhooks',
      script: './backend/webhooks-server.js',
      instances: 2,
      env: {
        NODE_ENV: 'development',
        PORT: 3002,
        DATABASE_URL: 'postgresql://sales_admin:SecureSalesPass2024!@localhost:5432/sales_platform',
        REDIS_URL: 'redis://:SecureSalesRedis2024!@localhost:6379',
        STRIPE_WEBHOOK_SECRET: 'whsec_your_stripe_webhook_secret',
        PAYPAL_WEBHOOK_ID: 'your_paypal_webhook_id'
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3002,
        DATABASE_URL: 'postgresql://sales_admin:SecureSalesPass2024!@localhost:5432/sales_platform',
        REDIS_URL: 'redis://:SecureSalesRedis2024!@localhost:6379',
        STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
        PAYPAL_WEBHOOK_ID: process.env.PAYPAL_WEBHOOK_ID
      },
      watch: false,
      max_memory_restart: '256M',
      log_file: './logs/webhooks.log',
      out_file: './logs/webhooks-out.log',
      error_file: './logs/webhooks-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm Z'
    },
    {
      name: 'job-processor',
      script: './backend/jobs/processor.js',
      instances: 1,
      env: {
        NODE_ENV: 'development',
        DATABASE_URL: 'postgresql://sales_admin:SecureSalesPass2024!@localhost:5432/sales_platform',
        REDIS_URL: 'redis://:SecureSalesRedis2024!@localhost:6379'
      },
      env_production: {
        NODE_ENV: 'production',
        DATABASE_URL: 'postgresql://sales_admin:SecureSalesPass2024!@localhost:5432/sales_platform',
        REDIS_URL: 'redis://:SecureSalesRedis2024!@localhost:6379'
      },
      watch: false,
      max_memory_restart: '512M',
      log_file: './logs/jobs.log',
      out_file: './logs/jobs-out.log',
      error_file: './logs/jobs-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm Z'
    },
    {
      name: 'email-service',
      script: './backend/services/email-service.js',
      instances: 1,
      env: {
        NODE_ENV: 'development',
        DATABASE_URL: 'postgresql://sales_admin:SecureSalesPass2024!@localhost:5432/sales_platform',
        REDIS_URL: 'redis://:SecureSalesRedis2024!@localhost:6379',
        EMAIL_SERVICE: 'gmail',
        EMAIL_USER: 'your-email@gmail.com',
        EMAIL_PASS: 'your-app-password'
      },
      env_production: {
        NODE_ENV: 'production',
        DATABASE_URL: 'postgresql://sales_admin:SecureSalesPass2024!@localhost:5432/sales_platform',
        REDIS_URL: 'redis://:SecureSalesRedis2024!@localhost:6379',
        EMAIL_SERVICE: process.env.EMAIL_SERVICE,
        EMAIL_USER: process.env.EMAIL_USER,
        EMAIL_PASS: process.env.EMAIL_PASS
      },
      watch: false,
      max_memory_restart: '256M',
      log_file: './logs/email.log',
      out_file: './logs/email-out.log',
      error_file: './logs/email-error.log',
      log_date_format: 'YYYY-MM-DD HH:mm Z'
    }
  ],

  deploy: {
    production: {
      user: 'developer',
      host: 'your-cloud-server.com',
      ref: 'origin/main',
      repo: 'git@github.com:your-username/sales-platform.git',
      path: '/app',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && npm run build:prod && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
