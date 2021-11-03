import React from "react"
import { NextPage } from "next"
import withLayout from "../../hocs/withLayout"

import BoxScore from "./BoxScore"
import Tabs from "./Tabs"

interface Props {}

const Home: NextPage<Props> = ({}) => {
  const [chosenLeague, setChosenLeague] = React.useState("nba")
  const [currentGameData, setCurrentGameData] = React.useState(null)

  async function getGameData(league: string = chosenLeague) {
    const response = await fetch(`/api/games?league=${league}`)
    const data = await response.json()
    setCurrentGameData(data)
  }

  React.useEffect(() => {
    getGameData()
    setInterval(() => {
      getGameData()
    }, 60000)
  }, [])
  return (
    <div>
      <h1 className="text-center text-3xl font-semibold mt-10">
        The Boxscore Challenge
      </h1>
      <p className="text-center">by Perry Raskin</p>

      <Tabs
        chosenLeague={chosenLeague}
        setChosenLeague={setChosenLeague}
        getGameData={getGameData}
      />

      {currentGameData ? <BoxScore data={currentGameData} /> : null}
    </div>
  )
}

export default withLayout(Home)
