import PropTypes from "prop-types"
import React from "react"

const Header = () => (
  <header>
    Header Component
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
