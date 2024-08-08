import { Link, useLocation } from 'react-router-dom'
import Flex from './Flex'

import { colors } from '@/styles/colorPalette'
import { css } from '@emotion/react'

import { useCallback } from 'react'
import Button from './Button'

function Navbar() {
  const location = useLocation()
  const showSignButton =
    ['/signup', 'signin'].includes(location.pathname) === false

  // @TODO
  const user = null

  const handleLogOut = useCallback(() => {}, [])

  const renderButton = useCallback(() => {
    if (user != null) {
      return (
        <Link to={'/my'}>
          {/* TODO */}
          {/* <MyImage size={40} mode="default" /> */}
          <img src="" alt="todo" />
        </Link>
      )
    }
    if (showSignButton) {
      return (
        <Link to="/signin">
          <Button css={navButtonStyles}>로그인/회원가입</Button>
        </Link>
      )
    }

    return null
  }, [user, showSignButton, handleLogOut])
  return (
    <Flex justify="space-between" align="center" css={navbarContainerStyles}>
      <Link to="/">홈</Link>
      {renderButton()}
    </Flex>
  )
}

const navbarContainerStyles = css`
  height: 40px;
  padding: 10px 24px;
  position: sticky;
  top: 0;
  background-color: ${colors.white};
  z-index: 10;
  border-bottom: 1px solid ${colors.gray};
`

const navButtonStyles = css`
  background-color: ${colors.white};
  color: ${colors.blue};
`

export default Navbar
