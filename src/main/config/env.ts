export default {
  port: process.env.PORT || 5050,
  googleGeolocationApiToken: process.env.GOOGLE_GEOLOCATION_TOKEN || 'AIzaSyDZiLYanGf5ISBDV6WU8gE7MC384fx1Os4',
  googleGeolocationApiURL: process.env.GOOGLE_GEOLOCATION_URL || 'https://maps.googleapis.com/maps/api/geocode/json'
}
