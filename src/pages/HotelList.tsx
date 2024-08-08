import InfiniteScroll from 'react-infinite-scroll-component'

import useHotels from '@/components/hotelList/hooks/useHotels'
import Hotel from '@/components/hotelList/Hotel'
import Spacing from '@/components/shared/Spacing'
import Top from '@/components/shared/Top'
import React from 'react'

function HotelListPage() {
  const { hotels, isFetching, hasNextPage, loadMore } = useHotels()
  console.log('hotels', hotels)
  return (
    <div>
      <Top title="인기 호텔" subTitle="호텔부터 팬션까지 최저가" />

      {hotels?.map((hotel, idx) => {
        return (
          <React.Fragment key={hotel.id}>
            <InfiniteScroll
              dataLength={hotels?.length ?? 0}
              hasMore={hasNextPage}
              loader={<></>}
              next={loadMore}
              scrollThreshold="100px"
            >
              <ul>
                <Hotel hotel={hotel} />
                {hotels.length - 1 === idx ? null : (
                  <Spacing
                    size={5}
                    backgroundColor={'blue100'}
                    style={{ margin: '20px 0' }}
                  />
                )}
              </ul>
            </InfiniteScroll>
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default HotelListPage
