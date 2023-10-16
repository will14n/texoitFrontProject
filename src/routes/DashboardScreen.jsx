import { useContext, useEffect, useState } from "react"
import { MovieContext } from "./context/MovieContext"
import Table from "../components/Table"
import { Card } from "../components/Card"
import { useForm } from "../hooks/useForm"
import { fetchData } from "../helpers/fetchData"

export function DashboardScreen() {
  const {
    yearsWithMultipleWinners, setYearsWithMultipleWinners,
    studiosWithWinCountTop3, setStudiosWithWinCountTop3,
    maxMinWinIntervalForProducers, setMaxMinWinIntervalForProducers,
    listMovieWinnersByYear, setListMovieWinnersByYear,
    yearFilter, setYearFilter,
  } = useContext(MovieContext)
  const fetchDashboard = async () => {
    const response = await fetchData('projection=years-with-multiple-winners')
    setYearsWithMultipleWinners(response.years)
    const response2 = await fetchData('projection=studios-with-win-count')
    setStudiosWithWinCountTop3(response2.studios.filter((i, e) => e <= 2))
    setMaxMinWinIntervalForProducers(await fetchData('projection=max-min-win-interval-for-producers'))
    // console.log(response3)
    
  }

  const fetchWinnersByYear = async (year) => {
    const response4 = await fetchData(`winner=true&year=${year}`)
    const {studios, producers, winner, ...yearWinners} = response4[0]
    setListMovieWinnersByYear([yearWinners])
  }

  const initialForm = {
    yearFilter: ''
  }
  const { formState, yearFilterInput, onInputChange } = useForm(initialForm)
  const handleSubmit = (e) => {
    e.preventDefault()
    setYearFilter(formState)
    fetchWinnersByYear(formState.yearFilter)
  }
  useEffect(() => {
    fetchDashboard()
  }, [])
  return (
    <>
      <div className="row mt-3 m-4">
        <div className="col-sm-6 col-md-6 mb-3 mb-sm-0">
          <Card
            title='List years with multiple winners'
            colls={['Year', 'Win Count']}
            data={yearsWithMultipleWinners}
            loading={yearsWithMultipleWinners && false}

          >
            <Table
              colls={['Year', 'Win Count']}
              data={yearsWithMultipleWinners}
            />
          </Card>
        </div>

        <div className="col-sm-6 col-md-6 mb-3 mb-sm-0">
          {/* {console.log(studiosWithWinCountTop3)} */}
          <Card
            title='Top 3 studios with winners'
            colls={['Name', 'Win Count']}
            data={studiosWithWinCountTop3}

          >
            <Table
              colls={['Name', 'Win Count']}
              data={studiosWithWinCountTop3}
            />
          </Card>
        </div>
      </div>
      <div className="row mt-3 m-4">
        <div className="col-sm-12 mb-md-4 mb-sm-4">
          <Card title='Producers with longest and shortest interval between wins'>
            <h3>Maximum</h3>
            <Table
              colls={['Producer', 'Interval', 'Previous Year', 'Following Year']}
              data={maxMinWinIntervalForProducers?.max}
            />
            <h3>Minimum</h3>
            <Table
              colls={['Producer', 'Interval', 'Previous Year', 'Following Year']}
              data={maxMinWinIntervalForProducers?.min}
            />
          </Card>
        </div>

        <div className="col-sm-12 mb-md-4 mb-3">
          <Card title='List movie winners by year'>
            <form action="" onSubmit={handleSubmit} className="mb-4">
              <div className='input-group'>
                <input
                  className='form-control'
                  type="number"
                  min='1980'
                  max='2023'
                  name='yearFilter'
                  value={yearFilterInput}
                  onChange={onInputChange}
                  onKeyUp={(text) => text.target.value > 0 ? text.target.value > 2023 ? text.target.value = '2023' : text.target.value : text.target.value = ''}
                  placeholder="Search by year"
                />
                &nbsp;&nbsp;&nbsp;
                <div className='input-group-append'>
                  <button className="form-control btn btn-primary">
                    <b>
                      <svg id="i-search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="18" height="17" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5">
                        <circle cx="14" cy="14" r="12" />
                        <path d="M23 23 L30 30" />
                      </svg>
                    </b>
                  </button>
                </div>
              </div>
            </form>
            <Table
              colls={['Id', 'Year', 'Title']}
              data={listMovieWinnersByYear}
            />
          </Card>
        </div>

      </div>

    </>
  )
}
