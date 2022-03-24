import React from 'react'
import Link from 'next/link'

function MainNav() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/uzer">
              <a>Users List</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default MainNav
