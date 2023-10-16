export default function Table({ colls, data = [], isLoading, titleAlign = 'text-start', rowsAlign = 'text-start' }) {
  return (
    <>
      <table className="table table-bordered mt-3">
        <thead className={titleAlign}>
          <tr>
            {
              colls.map((line, index) =>
                <th key={index} scope="col">{line}</th>
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
                  Object.keys(data[index]).map((item, idx) =>
                    <td key={idx}>{data[index][item]}</td>
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
