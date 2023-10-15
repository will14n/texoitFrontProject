import { Table } from "../components/Table"

export const DashboardScreen = () => {
  const yearsWithMultipleWinners = {"years":[{"year":1986,"winnerCount":2},{"year":1990,"winnerCount":2},{"year":2015,"winnerCount":2}]}
  const studiosWithWinCount = {"studios":[{"name":"Columbia Pictures","winCount":7},{"name":"Paramount Pictures","winCount":6},{"name":"Warner Bros.","winCount":5},{"name":"20th Century Fox","winCount":4},{"name":"MGM","winCount":3},{"name":"Universal Studios","winCount":2},{"name":"Universal Pictures","winCount":2},{"name":"Hollywood Pictures","winCount":2},{"name":"Nickelodeon Movies","winCount":1},{"name":"C2 Pictures","winCount":1},{"name":"Summit Entertainment","winCount":1},{"name":"Hasbro","winCount":1},{"name":"Associated Film Distribution","winCount":1},{"name":"Revolution Studios","winCount":1},{"name":"First Look Pictures","winCount":1},{"name":"Focus Features","winCount":1},{"name":"Cannon Films","winCount":1},{"name":"United Artists","winCount":1},{"name":"Touchstone Pictures","winCount":1},{"name":"Samuel Goldwyn Films","winCount":1},{"name":"Quality Flix","winCount":1},{"name":"TriStar Pictures","winCount":1},{"name":"Franchise Pictures","winCount":1},{"name":"Relativity Media","winCount":1},{"name":"Castle Rock Entertainment","winCount":1},{"name":"Screen Gems","winCount":1},{"name":"Triumph Releasing","winCount":1},{"name":"DreamWorks","winCount":1}]}
  const studiosWithWinCountTop3 = studiosWithWinCount.studios.filter((i, e) => e <= 2)
  const maxMinWinIntervalForProducers = {"min":[{"producer":"Joel Silver","interval":1,"previousWin":1990,"followingWin":1991}],"max":[{"producer":"Matthew Vaughn","interval":13,"previousWin":2002,"followingWin":2015}]}
  return (
    <>
      <div className="row mt-3 m-4">
        <div className="col-sm-6 mb-3 mb-sm-0">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">List years with multiple winners</h5>
              <Table
                colls={[ 'Year', 'Win Count' ]}
                data={yearsWithMultipleWinners.years}
              />
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Top 3 studios with winners</h5>
              <Table
                colls={[ 'Name', 'Win Count' ]}
                data={studiosWithWinCountTop3}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3 m-4">
        <div className="col-sm-6 mb-3 mb-sm-0">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Producers with longest and shortest interval between wins</h5>
              <Table
                colls={[ 'Producer', 'Interval', 'Previous Year', 'Following Year' ]}
                data={maxMinWinIntervalForProducers.min}
              />
              <Table
                colls={[ 'Producer', 'Interval', 'Previous Year', 'Following Year' ]}
                data={maxMinWinIntervalForProducers.max}
              />
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">List movie winners by year</h5>
              <input
                type="number"
                min='1980'
                max='2023'
                placeholder="Search by year"
              />
              <Table
                colls={[ 'Id', 'Year', 'Title' ]}
                data={[]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
