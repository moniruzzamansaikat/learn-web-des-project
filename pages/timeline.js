import Link from "next/link"
import { useRouter } from "next/router"
import styles from "../styles/timeline.module.css"

export default function timeline() {
  const router = useRouter()

  const items = router.query?.items?.split(",")

  return (
    <div className={styles.timeline}>
      <h3 className="home_title sm">
        <Link href="/">Timeline</Link> ➙ {router.query.topic}{" "}
      </h3>
      <small>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Necessitatibus, ipsum?
      </small>

      <ul>
        {items?.map((item, index) => {
          return <li key={index}>{item}</li>
        })}
      </ul>
    </div>
  )
}
