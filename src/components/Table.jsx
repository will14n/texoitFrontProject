import { useContext } from "react"
import { MovieContext } from "../routes/context/MovieContext"
import { Input } from "./Input"
import { Select } from "./Select"

export default function Table({ colls, data = [], dataConfirm = [], renderInput = [], tableSize = '', titleAlign = 'text-start', rowsAlign = 'text-start', fetchData = '' }) {
  const {
    winnerFilter, setWinnerFilter,
    movieYearFilter, setMovieYearFilter,
    pageLink, setPageLink,
  } = useContext(MovieContext)

  function handleChange(event) {
    const value = event.target.value
    const name = event.target.name
    if (name == 'movieYearFilter') {
      setMovieYearFilter(value)
      if ((value >= 1979 && value <= 2019) || value === '') {
        setPageLink('page=0')
        fetchData && fetchData('page=0', winnerFilter, value)
      }
    }
    if (name == 'winnerFilter') {
      setWinnerFilter(value)
      setPageLink('page=0')
      fetchData && fetchData('page=0', value, movieYearFilter)
    }
  }

  const renderRows = (title) => {
    return (
      title == 'Year' ?
        <Input
          value={movieYearFilter}
          name={'movieYearFilter'}
          classs={'form-control-sm w-100px '}
          placeHolder={"Filter by year"}
          handleChange={event => handleChange(event)}
        /> :
        title == 'Winner?' ?
          <Select
            handleChange={event => handleChange(event)}
          /> :
          ""
    )
  }

  return (
    <>
      <table className={"table table-bordered mt-3 mb-0 " + tableSize}>
        <thead className={titleAlign + ' align-middle'}>
          <tr>
            {
              colls.map((line, index) =>
                <th key={index} scope="col" className="bg-light">
                  {line}
                  {
                    renderInput.includes(line) &&
                    renderRows(line)
                  }
                </th>
              )
            }
          </tr>
        </thead>
        <tbody className={"table-group-divider " + rowsAlign}>
          {
            data &&
            data.map((line, index) =>
              <tr key={index}>
                {
                  dataConfirm.length ? (
                    Object.keys(data[index]).filter(key => dataConfirm.includes(key)).map((item, idx) =>

                      <td key={idx}>{item == 'winner' ? data[index][item] === true ? "Yes" : "No" : data[index][item]}</td>
                    )
                  ) :
                    (
                      Object.keys(data[index]).map((item, idx) =>
                        <td key={idx}>{data[index][item]}</td>
                      )
                  )
                }
              </tr>
            )
          }
        </tbody>
      </table>
    </>
  )
}
