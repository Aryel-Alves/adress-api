export interface FindGeolocation {
  toLocate: (address: string) => Promise<Geolocation>
}
