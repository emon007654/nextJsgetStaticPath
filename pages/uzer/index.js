import Link from 'next/link'
import MainNav from '../../com/MainNav'

function index(props) {
  return (
    <>
      <MainNav></MainNav>
      {props.Users.slice(0, 5).map((data) => {
        return (
          <div key={data.id}>
            <Link href={`/uzer/${data.id}`}>
              <a>
                <h1>{data.id}</h1>
              </a>
            </Link>

            <h2>{data.name}</h2>
            <h3>{data.email}</h3>
          </div>
        )
      })}
    </>
  )
}

export default index

export async function getStaticProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
  const result = await res.json()

  return {
    props: {
      Users: result,
    },
  }
}
