export interface Game {
  league: string
  home_period_scores: Array<number>
  away_period_scores: Array<number>
  home_errors: number
  away_errors: number
  home_team: Team
  away_team: Team
  home_totals: Totals
  away_totals: Totals
  home_batter_totals: BatterTotals
  away_batter_totals: BatterTotals
  event_information: EventInformation
}

export interface Team {
  team_id: number
  abbreviation: string
  active: boolean
  first_name: string
  last_name: string
  conference: string
  division: string
  site_name: string
  city: string
  state: string
  full_name: string
}

export interface Totals {
  minutes: number
  points: number
  assists: number
  turnovers: number
  steals: number
  blocks: number
  field_goals_made: number
  field_goals_attempted: number
  three_point_field_goals_made: number
  three_point_field_goals_attempted: number
  free_throws_made: number
  free_throws_attempted: number
  offensive_rebounds: number
  defensive_rebounds: number
  personal_fouls: number
  field_goals_percentage: number
  three_point_percentage: number
  free_throw_percentage: number
}

export interface BatterTotals {
  runs: number
  hits: number
  doubles: number
  triples: number
  home_runs: number
  rbis: number
  stolen_bases: number
  caught_stealing: number
}

export interface EventInformation {
  temperature: number
  attendance: number
  duration: string
  status: string
  season_type: string
  start_date_time: string
  site: Site
}

export interface Site {
  capacity: number
  surface: string
  name: string
  state: string
  city: string
}
