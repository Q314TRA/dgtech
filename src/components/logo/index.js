import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'gatsby'

import LightLogo from '../../assets/images/logo/digitechs_white.png'
import DarkLogo from '../../assets/images/logo/digitechs_orange.png'

import {LogoWrapper} from './logo.style';

const Logo = props => {
    return (
        <LogoWrapper {...props}>
            <Link to="/">
                <img src={LightLogo} className="img-fluid light-logo" alt="logo"/>
                <img src={DarkLogo} className="img-fluid dark-logo" alt="logo"/>
            </Link>
        </LogoWrapper>
    )
}
 
Logo.propTypes = {
    justifycontent: PropTypes.string
} 

Logo.defaultProps = {
    justifycontent: 'flex-start'
}

export default Logo
