import { NextApiRequest, NextApiResponse } from "next"

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const {
    method,
    query: { league },
    body,
  } = req

  const leagueUnkown = league as unknown
  const leagueString = leagueUnkown as string
  try {
    switch (method) {
      case "GET":
        if (leagueString) {
          let game = {}
          let gameUrl = ""
          let apiRes
          let json = {}
          switch (leagueString.toUpperCase()) {
            case "NBA":
              gameUrl = `https://chumley.barstoolsports.com/dev/data/games/6c974274-4bfc-4af8-a9c4-8b926637ba74.json`
              apiRes = await fetch(gameUrl)
              json = await apiRes.json()
              game = json
              break
            case "MLB":
              gameUrl = `https://chumley.barstoolsports.com/dev/data/games/eed38457-db28-4658-ae4f-4d4d38e9e212.json`
              apiRes = await fetch(gameUrl)
              json = await apiRes.json()
              game = json
              break

            default:
              res.status(400).json({ error: "Unknown league name" })
              break
          }
          res.status(200).json(game)
        } else {
          res.status(400).json({ error: "No league specified" })
        }
        break
      case "POST":
        break
      default:
        res.setHeader("Allow", ["GET"])
        res.status(405).end(`Method ${method} Not Allowed`)
    }
  } catch (err) {
    res.status(500)
    res.json({ authorized: false, error: err.message })
  }
}
