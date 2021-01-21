import React from 'react'
import { Icon } from '@iconify/react'
import volcanoIcon from '@iconify-icons/emojione/volcano'

const Header = () => {
    return (
        <header className="header">
            <h2><Icon icon={volcanoIcon} /> Active Volcano Tracker using NASA Open API <Icon icon={volcanoIcon} /></h2>
            <h5>Source code: github.com/ilhambara</h5>
        </header>
    )
}

export default Header
