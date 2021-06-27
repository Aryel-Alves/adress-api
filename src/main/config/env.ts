export default {
  port: process.env.PORT || 5050,
  googleGeolocationApiToken: process.env.GOOGLE_GEOLOCATION_TOKEN || 'PUT_YOUR_TOKEN_THERE',
  googleGeolocationApiURL: process.env.GOOGLE_GEOLOCATION_URL || 'https://maps.googleapis.com/maps/api/geocode/json'
}
