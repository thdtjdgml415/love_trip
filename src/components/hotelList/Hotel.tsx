import { Hotel as IHotel } from '@/models/hotel'
import addDelimiter from '@utils/addDelimiter'
import { css } from '@emotion/react'
import Flex from '../shared/Flex'
import ListRow from '../shared/ListRow'
import Spacing from '../shared/Spacing'
import Text from '../shared/Text'

function Hotel({ hotel }: { hotel: IHotel }) {
  return (
    <div>
      <ListRow
        contents={
          <Flex direction="column">
            <ListRow.Texts
              title={hotel.name}
              subTitle={hotel.comment}
            ></ListRow.Texts>
            <Spacing size={4} />
            <Text typography="t7" color="gray600">
              {hotel.starRate} 성급
            </Text>
          </Flex>
        }
        right={
          <Flex direction="column" align="flex-end">
            <img src={hotel.mainImageUrl} css={imageStyles} alt="메인 이미지" />
            <Spacing size={8} />
            <Text bold={true}>{addDelimiter(hotel.price)} 원</Text>
          </Flex>
        }
        style={containerStyles}
      />
    </div>
  )
}

const containerStyles = css`
  align-items: flex-start;
`

const imageStyles = css`
  width: 90px;
  height: 110px;
  border-radius: 8px;
  object-fit: cover;
  margin-left: 16px;
`

export default Hotel
