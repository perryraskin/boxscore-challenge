import { NextPage } from "next"
import QuickStats from "./QuickStats"
import QuickStatHeaders from "./QuickStatHeaders"

import { Game } from "../../models/interfaces"

interface Props {
  data?: Game
}

const BoxScore: NextPage<Props> = ({ data }) => {
  const {
    home_team,
    home_period_scores,
    home_batter_totals,
    home_totals,
    home_errors,
    away_team,
    away_period_scores,
    away_batter_totals,
    away_totals,
    away_errors,
    event_information,
    league,
  } = data
  return (
    <div>
      <div className="mt-10 bg-blue-900 max-w-2xl ml-auto mr-auto pb-6 rounded-t-lg shadow">
        <h2 className="text-center text-2xl pt-4 font-extrabold text-white tracking-tight">
          {away_team.full_name} @ {home_team.full_name}
        </h2>
      </div>
      <div className="flex flex-col max-w-2xl ml-auto mr-auto">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th
                      scope="col"
                      className="px-2 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                    ></th>
                    {home_period_scores
                      ? home_period_scores.map((score, index) => (
                          <th
                            scope="col"
                            className="bg-gray-50 text-center px-2 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            {index + 1}
                          </th>
                        ))
                      : null}
                    {league === "MLB" ? (
                      <QuickStatHeaders headerNames={["R", "H", "E"]} />
                    ) : league === "NBA" ? (
                      <QuickStatHeaders
                        headerNames={[
                          "PTS",
                          "AST",
                          "STL",
                          "BLK",
                          "TO",
                          "PF",
                          "FGM",
                          "FGA",
                        ]}
                      />
                    ) : null}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="bg-gray-100 px-2 py-2 text-center whitespace-nowrap text-sm font-medium text-gray-900">
                      {away_team.abbreviation || ""}
                    </td>
                    {away_period_scores
                      ? away_period_scores.map((score, index) => (
                          <td
                            scope="col"
                            className="text-center px-2 py-2 whitespace-nowrap text-sm text-gray-900"
                          >
                            {score}
                          </td>
                        ))
                      : null}
                    {league === "MLB" ? (
                      <QuickStats
                        statNumbers={[
                          away_batter_totals.runs,
                          away_batter_totals.hits,
                          away_errors,
                        ]}
                      />
                    ) : league === "NBA" ? (
                      <QuickStats
                        statNumbers={[
                          away_totals.points,
                          away_totals.assists,
                          away_totals.steals,
                          away_totals.blocks,
                          away_totals.turnovers,
                          away_totals.personal_fouls,
                          away_totals.field_goals_made,
                          away_totals.field_goals_attempted,
                        ]}
                      />
                    ) : null}
                  </tr>
                  <tr>
                    <td className="bg-gray-100 px-2 py-2 text-center whitespace-nowrap text-sm font-medium text-gray-900">
                      {home_team.abbreviation || ""}
                    </td>
                    {home_period_scores
                      ? home_period_scores.map((score, index) => (
                          <td
                            scope="col"
                            className="text-center px-2 py-2 whitespace-nowrap text-sm text-gray-900"
                          >
                            {score}
                          </td>
                        ))
                      : null}
                    {league === "MLB" ? (
                      <QuickStats
                        statNumbers={[
                          home_batter_totals.runs,
                          home_batter_totals.hits,
                          home_errors,
                        ]}
                      />
                    ) : league === "NBA" ? (
                      <QuickStats
                        statNumbers={[
                          home_totals.points,
                          home_totals.assists,
                          home_totals.steals,
                          home_totals.blocks,
                          home_totals.turnovers,
                          home_totals.personal_fouls,
                          home_totals.field_goals_made,
                          home_totals.field_goals_attempted,
                        ]}
                      />
                    ) : null}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-50 max-w-2xl ml-auto mr-auto pt-6 pb-6 rounded-b-lg shadow">
        <h2 className="mb-4 text-center text-sm font-semibold tracking-wider text-gray-900 uppercase">
          {event_information.site.name} ~ {event_information.site.city},{" "}
          {event_information.site.state}
        </h2>
        {/* Assuming the status value provides pre-game, in-game, and post-game state */}
        <p className="text-center">
          <span
            className="inline-flex items-center px-3 py-0.5 rounded-full text-xs 
          font-semibold bg-blue-900 text-white uppercase tracking-wider"
          >
            {event_information.status}
          </span>
        </p>
      </div>
    </div>
  )
}

export default BoxScore
