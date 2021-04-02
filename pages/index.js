import { ApolloClient, InMemoryCache, gql } from "@apollo/client"
import Link from "next/link"

const client = new ApolloClient({
  uri: "https://mysterious-retreat-94668.herokuapp.com/graphql",
  cache: new InMemoryCache(),
})

const home = ({ topics }) => {
  return (
    <div>
      <h3 className="home_title">Timelines</h3>

      {topics.map((topic, index) => {
        return (
          <Link
            href={
              "/timeline?topic=" +
              topic.category +
              "&items=" +
              encodeURI(topic.items)
            }
          >
            <h4 className="topic">{topic.category}</h4>
          </Link>
        )
      })}
    </div>
  )
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query {
        topics {
          category
          items
        }
      }
    `,
  })

  return {
    props: {
      topics: data.topics,
    },
  }
}

export default home
