import ReqDocCard from "./ReqDocCard"
const ReqDocuments = () => {
  return (
    <section>
        <p className='fw-bold'>Required Documents For AdmissionProcess :</p>
        <div className="d-flex justify-content-center mt-3">
         <table className="table">
              <thead>
                <tr>
                  <th className="fw-bold text-uppercase doc-data">S.NO</th>
                  <th className="fw-bold text-uppercase doc-data">DOCUMENT</th>
                  <th className="fw-bold text-uppercase doc-data">HOLDER</th>
                  <th className="fw-bold text-uppercase doc-data">ORIGINAL</th>
                  <th className="fw-bold text-uppercase doc-data">XEROX</th>
                </tr>
              </thead>
              <tbody>
                <ReqDocCard/>
              </tbody>
            </table>
       </div>
    </section>
  )
}

export default ReqDocuments
