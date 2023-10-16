export const Card = ({ title, titleAlign = 'text-start', rowsAlign = 'text-start', children }) => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title"><b>{title}</b></h5>
          {children}
        </div>
      </div>
    </>
  )
}
