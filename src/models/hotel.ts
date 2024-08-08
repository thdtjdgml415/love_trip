export interface Hotel {
  comment: string
  contents: string
  id: string
  images: string
  location: { direction: string; pointGeolocation: { x: number; y: number } }
  directions: string
  mainImageUrl: string
  name: string
  price: number
  starRate: number
}
