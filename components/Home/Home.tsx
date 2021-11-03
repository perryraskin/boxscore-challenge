import React from "react"
import { NextPage } from "next"
import withLayout from "../../hocs/withLayout"

import BoxScore from "./BoxScore"

interface Props {}

const Home: NextPage<Props> = ({}) => {
  const [nbaData, setNbaData] = React.useState(null)
  const [mlbData, setMlbData] = React.useState(null)

  async function getNbaGame() {
    const nbaGameUrl = `https://chumley.barstoolsports.com/dev/data/games/6c974274-4bfc-4af8-a9c4-8b926637ba74.json`
    const res = await fetch(nbaGameUrl)
    const json = await res.json()
    console.log(json)
    setNbaData(json)
  }

  async function getMlbGame() {
    const mlbGameUrl = `https://chumley.barstoolsports.com/dev/data/games/eed38457-db28-4658-ae4f-4d4d38e9e212.json`
    const res = await fetch(mlbGameUrl)
    const json = await res.json()
    console.log(json)
    setMlbData(json)
  }

  React.useEffect(() => {
    getNbaGame()
    getMlbGame()
  }, [])
  return (
    <div>
      <h1 className="text-center text-3xl font-semibold mt-10">
        The Boxscore Challenge
      </h1>
      <p className="text-center">by Perry Raskin</p>

      {mlbData ? <BoxScore data={mlbData} /> : null}
      {nbaData ? <BoxScore data={nbaData} /> : null}
    </div>
  )
}

export default withLayout(Home)
