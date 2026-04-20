import { ReqDocData } from "../../../Data/ReqDocData"

const ReqDocCard = () => {
  return (
    <>
      {
         ReqDocData.map(({id,nameOfDoc,whose,original,xerox})=>(
            <>
            <tr>
              <td className='text-uppercase doc-data'>{id}</td>
              <td className='text-uppercase doc-data'>{nameOfDoc}</td>
              <td className='text-uppercase doc-data'>{whose}</td>
              <td className="doc-data">{original}</td>
              <td className="doc-data">{xerox}</td>
            </tr>
            </>
          ))
     }
    </>
  )
}

export default ReqDocCard
