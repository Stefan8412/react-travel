import * as React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@chakra-ui/react'
import { Link, useMatch } from 'react-router-dom'

export const NavLink = ({ to, ...rest }) => {
  const match = useMatch(to)
  return <Button as={Link} to={to} isActive={!!match} variant="ghost" {...rest} size="sm" />
}

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
}
