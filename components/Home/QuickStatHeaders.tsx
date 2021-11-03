import { NextPage } from "next"

interface Props {
  headerNames: Array<string>
}

const QuickStats: NextPage<Props> = ({ headerNames }) => {
  return (
    <>
      {headerNames.map((headerName, index) => (
        <th
          scope="col"
          className={`${
            index === 0 ? "border-l border-gray-300" : ""
          } text-center px-2 py-2 whitespace-nowrap text-xs font-semibold text-gray-900`}
        >
          {headerName}
        </th>
      ))}
    </>
  )
}

export default QuickStats
