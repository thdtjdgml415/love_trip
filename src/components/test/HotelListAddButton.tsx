import Button from '../shared/Button'
import { HOTEL_NAMES, IMAGES, HOTEL, EVENTS, ROOMS } from '@/mock/data'
import { COLLECTIONS } from '@constants'

import { doc, collection, writeBatch } from 'firebase/firestore'
import { store } from '@remote/firebase'

const random = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function HotelListAddButton() {
  const batch = writeBatch(store)

  const handleButtonClick = () => {
    const hotels = HOTEL_NAMES.map((hotelName, idx) => {
      return {
        name: hotelName,
        mainImageUrl: IMAGES[Math.floor(Math.random() * IMAGES.length)],
        images: IMAGES,
        price: random(130000, 200000),
        starRate: random(1, 5),
        ...HOTEL,
        ...(EVENTS[idx] != null && { events: EVENTS[idx] }),
      }
    })
    hotels.forEach((hotel) => {
      const hotelDOcRef = doc(collection(store, COLLECTIONS.HOTEL))
      batch.set(hotelDOcRef, hotel)

      ROOMS.forEach((room) => {
        // hotel이라는 store의 문서 안에 호텔 방 이라는 문서가 계층으로 필요하기 때문에 특정 Ref를 넣어줘야한다.
        const subDocRef = doc(collection(hotelDOcRef, COLLECTIONS.ROOM))
        batch.set(subDocRef, room)
      })
    })
    batch.commit()
  }

  return <Button onClick={handleButtonClick}>호텔리스트 추가</Button>
}
export default HotelListAddButton
