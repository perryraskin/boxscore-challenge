import { NextPage } from "next"

const tabs = [
  { name: "NBA", current: true },
  { name: "MLB", current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

interface Props {
  chosenLeague: string
  setChosenLeague: (league: string) => void
  getGameData: (league: string) => void
}

const Tabs: NextPage<Props> = ({
  chosenLeague,
  setChosenLeague,
  getGameData,
}) => {
  return (
    <div className="mt-10 max-w-2xl ml-auto mr-auto">
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        <select
          id="tabs"
          name="tabs"
          className="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
          defaultValue={tabs.find((tab) => tab.current).name}
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <nav className="flex space-x-4" aria-label="Tabs">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              className={classNames(
                tab.current
                  ? "bg-indigo-100 text-indigo-700"
                  : "text-gray-500 hover:text-gray-700",
                "px-3 py-2 font-medium text-sm rounded-md"
              )}
              aria-current={tab.current ? "page" : undefined}
              onClick={() => {
                setChosenLeague(tab.name)
                getGameData(tab.name)
                tabs.forEach((t) => (t.current = false))
                tab.current = true
              }}
            >
              {tab.name}
            </button>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default Tabs
