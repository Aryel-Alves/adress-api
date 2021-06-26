export interface Geolocator {
  locate: (value: string) => Promise<string>
}
