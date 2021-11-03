import { NextPage } from "next"
import QuickStats from "./QuickStats"
import QuickStatHeaders from "./QuickStatHeaders"

interface Props {
  data?: any
}

const BoxScore: NextPage<Props> = ({ data }) => {
  const {
    home_team: homeTeam,
    home_period_scores: homePeriodScores,
    home_batter_totals: homeBatterTotals,
    home_totals: homeTotals,
    home_errors: homeErrors,
    away_team: awayTeam,
    away_period_scores: awayPeriodScores,
    away_batter_totals: awayBatterTotals,
    away_totals: awayTotals,
    away_errors: awayErrors,
    event_information: eventInformation,
  } = data
  return (
    <div>
      <div className="mt-20 bg-blue-900 max-w-2xl ml-auto mr-auto pb-6 rounded-t-lg shadow">
        <h2 className="text-center text-2xl pt-4 font-extrabold text-white tracking-tight">
          {awayTeam.full_name} @ {homeTeam.full_name}
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
                    {homePeriodScores
                      ? homePeriodScores.map((score, index) => (
                          <th
                            scope="col"
                            className="bg-gray-50 text-center px-2 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            {index + 1}
                          </th>
                        ))
                      : null}
                    {data.league === "MLB" ? (
                      <QuickStatHeaders headerNames={["R", "H", "E"]} />
                    ) : data.league === "NBA" ? (
                      <QuickStatHeaders
                        headerNames={[
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
                      {awayTeam.abbreviation || ""}
                    </td>
                    {awayPeriodScores
                      ? awayPeriodScores.map((score, index) => (
                          <td
                            scope="col"
                            className="text-center px-2 py-2 whitespace-nowrap text-sm text-gray-900"
                          >
                            {score}
                          </td>
                        ))
                      : null}
                    {data.league === "MLB" ? (
                      <QuickStats
                        statNumbers={[
                          awayBatterTotals.runs,
                          awayBatterTotals.hits,
                          awayErrors,
                        ]}
                      />
                    ) : data.league === "NBA" ? (
                      <QuickStats
                        statNumbers={[
                          awayTotals.assists,
                          awayTotals.steals,
                          awayTotals.blocks,
                          awayTotals.turnovers,
                          awayTotals.personal_fouls,
                          awayTotals.field_goals_made,
                          awayTotals.field_goals_attempted,
                        ]}
                      />
                    ) : null}
                  </tr>
                  <tr>
                    <td className="bg-gray-100 px-2 py-2 text-center whitespace-nowrap text-sm font-medium text-gray-900">
                      {homeTeam.abbreviation || ""}
                    </td>
                    {homePeriodScores
                      ? homePeriodScores.map((score, index) => (
                          <td
                            scope="col"
                            className="text-center px-2 py-2 whitespace-nowrap text-sm text-gray-900"
                          >
                            {score}
                          </td>
                        ))
                      : null}
                    {data.league === "MLB" ? (
                      <QuickStats
                        statNumbers={[
                          homeBatterTotals.runs,
                          homeBatterTotals.hits,
                          homeErrors,
                        ]}
                      />
                    ) : data.league === "NBA" ? (
                      <QuickStats
                        statNumbers={[
                          homeTotals.assists,
                          homeTotals.steals,
                          homeTotals.blocks,
                          homeTotals.turnovers,
                          homeTotals.personal_fouls,
                          homeTotals.field_goals_made,
                          homeTotals.field_goals_attempted,
                        ]}
                      />
                    ) : null}
                  </tr>
                  {/* {people.map((person, personIdx) => (
                  <tr key={person.email} className={personIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{person.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.title}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.role}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">
                        Edit
                      </a>
                    </td>
                  </tr>
                ))} */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-50 max-w-2xl ml-auto mr-auto pt-6 pb-6 rounded-b-lg shadow">
        <h2 className="mb-4 text-center text-sm font-semibold tracking-wider text-gray-900 uppercase">
          {eventInformation.site.name} ~ {eventInformation.site.city},{" "}
          {eventInformation.site.state}
        </h2>
        <p className="text-center">
          <span
            className="inline-flex items-center px-3 py-0.5 rounded-full text-xs 
          font-semibold bg-blue-900 text-white uppercase tracking-wider"
          >
            {eventInformation.status}
          </span>
        </p>
      </div>
    </div>
  )
}

export default BoxScore
