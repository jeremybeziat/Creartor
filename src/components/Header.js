import React from 'react'
import Navigation from './Navigation'
import Link from './Link'

function Header() {
  return (
    <div>
      <Navigation />
    <Link href="/publier" target="_blank" title="Publier"/>
    </div>
  )
}

export default Header