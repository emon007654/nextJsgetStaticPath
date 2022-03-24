import React from 'react'
import MainNav from '../../com/MainNav'

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const result = await res.json()

  const paths = result.map((data) => {
    return {
      params: { uzer: data.id.toString() },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.uzer
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const data = await res.json()

  return {
    props: {
      data,
    },
  }
}

function User({ data }) {
  const { id, name, email } = data
  return (
    <>
      <MainNav></MainNav>
      <div>
        <h1>{id}</h1>
        <h4>{name}</h4>
        <h4>{email}</h4>
      </div>
    </>
  )
}

export default User
