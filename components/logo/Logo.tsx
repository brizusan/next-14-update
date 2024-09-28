import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Logo = () => {
  return (
    <div className="-mx-6 px-6 py-4">
    {/* TODO: Next/Link hacia dashboard */}
    <Link href="dashboard" title="home">
      {/* Next/Image */}
      <Image
        src="https://tailus.io/sources/blocks/stats-cards/preview/images/logo.svg"
        className="w-32"
        width={100}
        height={100}
        alt="tailus logo"
      />
    </Link>
  </div>

  )
}
