import { useContext, useEffect, useState } from "react"
import { MovieContext } from "./context/MovieContext"
import Table from "../components/Table"
import { Card } from "../components/Card"
import { Input } from "../components/Input"
import { useForm } from "../hooks/useForm"
import { fetchData } from "../helpers/fetchData"

export const DashboardScreen = () => {
  const {
    yearsWithMultipleWinners, setYearsWithMultipleWinners,
    studiosWithWinCountTop3, setStudiosWithWinCountTop3,
    maxMinWinIntervalForProducers, setMaxMinWinIntervalForProducers,
    listMovieWinnersByYear, setListMovieWinnersByYear,
    form, setForm,
  } = useContext(MovieContext)
  const { onInputChange } = useForm(form)
  const fetchDashboard = async () => {
    const response = await fetchData('projection=years-with-multiple-winners')
    setForm({ dashboard: { data: response.years } })
    setYearsWithMultipleWinners(response.years)
    const response2 = await fetchData('projection=studios-with-win-count')
    setStudiosWithWinCountTop3(response2.studios.filter((i, e) => e <= 2))
    setMaxMinWinIntervalForProducers(await fetchData('projection=max-min-win-interval-for-producers'))
  }

  const fetchWinnersByYear = async (year) => {
    const response4 = await fetchData(`winner=true&year=${year}`)
    const {studios, producers, winner, ...yearWinners} = response4[0]
    setListMovieWinnersByYear([yearWinners])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onInputChange(e.target[0])
    fetchWinnersByYear(form.yearFilter)
  }
  useEffect(() => {
    fetchDashboard()
  }, [])
  return (
    <>
      <div className="row">
        <div className="col-sm-12 col-md-6 p-sm-2 p-lg-4 p-md-3 card1">
          <Card
            title='List years with multiple winners'
          >
            <Table
              colls={['Year', 'Win Count']}
              data={yearsWithMultipleWinners}
            />
          </Card>
        </div>
        <div className="col-sm-12 col-md-6 p-sm-2 p-lg-4 p-md-3 ">
          <Card
            title='Top 3 studios with winners'
          >
            <Table
              colls={['Name', 'Win Count']}
              data={studiosWithWinCountTop3}
            />
          </Card>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-lg-12 col-xl-6 p-sm-2 p-lg-4 p-md-3">
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

        <div className="col-sm-12 col-lg-12 col-xl-6 p-sm-2 p-lg-4 p-md-3 pb-3">
          <Card title='List movie winners by year'>
            <form action="" onSubmit={(e) => handleSubmit(e)} className="mb-4">
              <div className='input-group'>
                <Input
                  type={"text"}
                  name={'yearFilter'}
                  value={form?.yearFilter}
                  handleChange={e => onInputChange(e.target)}
                  placeHolder={"Search by year"}
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
