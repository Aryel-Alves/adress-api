export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb://localhost:27017/clean-ts-api',
  port: process.env.PORT || 5050,
  jwtSecret: process.env.JWT_SECRET || 'tj670==5H',
  googleApiToken: process.env.GOOGLE_GEOLOCATION_TOKEN || 'PUT_YOUR_TOKEN_HERE'
}
