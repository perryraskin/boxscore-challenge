# The Boxscore Challenge

The Boxscore is the goto widget on any sports site to get quick information about a game. ESPN, Fox Sports, theScore, and many others have solutions.

![Boxscore Design](https://i.ibb.co/6XxCtn0/Screen-Shot-2021-11-03-at-2-21-09-PM.png)

### Stack

- Next.js
- TailwindCSS

### Design Details

- User can choose a tab for the league of which they'd like to see games for.
- Boxscore dynamically populates game periods (or innings, for MLB).
- The far right of the Boxscore dynamically populates total game stats per team.
- Team names are on top.
- Stadium name, city, state, date & time, and game status are on the bottom.

### App Structure & Flow

- `Index` page loads, calls the `Home` component.
- Data comes from the `/api/games` endpoint, which fetches data from the provided JSON URLs.
- Latest game data is pulled upon loading the app, inside the `Home` component, and continues to be pulled every minute. Useful if this webpage were kept open on a television at a bar or a restaurant.
- `Home` component calls `Tabs` and `BoxScore` components.
- `BoxScore` component calls `QuickStatHeaders` and `QuickStats` components.
- Interfaces are defined in `/models/interfaces`.

## Usage

Install dependencies

```
yarn
```

For development

```
yarn dev
```

For production

```
yarn build
yarn start
```
