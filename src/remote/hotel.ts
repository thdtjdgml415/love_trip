import {
  QuerySnapshot,
  collection,
  limit,
  query,
  startAfter,
  getDocs,
} from 'firebase/firestore'
import { COLLECTIONS } from '@constants'
import { store } from './firebase'
import { Hotel } from '@/models/hotel'

export async function getHotels(pageParams?: QuerySnapshot<Hotel>) {
  const hotelQuery =
    pageParams == null
      ? query(collection(store, COLLECTIONS.HOTEL), limit(10))
      : query(
          collection(store, COLLECTIONS.HOTEL),
          startAfter(pageParams),
          limit(10),
        )

  const hotelsSnapshot = await getDocs(hotelQuery)

  // 가져온 데이터로 문서 만들기
  const items = hotelsSnapshot.docs.map(
    (doc) =>
      ({
        id: doc.id,
        ...doc.data(),
      }) as Hotel,
  )

  // 가져온 데이터의 마지막 데이터를 담기
  const lastVisible = hotelsSnapshot.docs[hotelsSnapshot.docs.length - 1]
  return {
    items,
    lastVisible,
  }
}
