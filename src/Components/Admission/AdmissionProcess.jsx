import Entrance from "./Process/Entrance"
import ProcessDetails from "./Process/ProcessDetails"
import ReqDocuments from "./Process/ReqDocuments"

const AdmissionProcess = () => {
  return (
    <section className="p-3 p-sm-5 common-bg">
      <ProcessDetails/>
      <Entrance/>
      <ReqDocuments/>
    </section>
  )
}

export default AdmissionProcess
