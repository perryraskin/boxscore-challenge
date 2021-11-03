import { NextPage } from "next"

interface Props {
  statNumbers: Array<number>
}

const QuickStats: NextPage<Props> = ({ statNumbers }) => {
  return (
    <>
      {statNumbers.map((statNumber, index) => (
        <td
          scope="col"
          className={`${
            index === 0 ? "border-l border-gray-300" : ""
          } text-center px-2 py-2 whitespace-nowrap text-sm font-bold text-gray-900`}
        >
          {statNumber}
        </td>
      ))}
    </>
  )
}

export default QuickStats
