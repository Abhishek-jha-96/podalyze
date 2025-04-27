import React from 'react'
import LogoIcon from '~/assets/logo'

export default function Navbar() {
  return (
    <div className="flex items-center justify-between px-6">
        <div><LogoIcon /></div>
        <div>tabs</div>
        <div>buttons</div>
    </div>
  )
}