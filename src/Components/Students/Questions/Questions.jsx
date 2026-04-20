import { XIIQuestion, XIQuestion, XQuestion } from "./DataQuestion";
import "./Question.css";

const Questions = () => {
  return (
    <section className="p-3 p-sm-5 common-bg">
       <p className="title">Public Yearly Question Papers</p>
       <QuestionCard title="For 12th Standard" data={XIIQuestion}/>
       <QuestionCard title="For 11th Standard" data={XIQuestion}/>
       <QuestionCard title="For 10th Standard" data={XQuestion}/>
    </section>
  )
}

export default Questions

const QuestionCard = ({title,data}) => {
  return (
    <div className="mb-4 mb-sm-5">
       <p className="subTitle">{title}</p>
       <div className="row gy-4 ">
       {
        data.map(({id,title,ref})=>(
          <div className="col-6 col-md-3" key={id}>
            <div className="border border-3 question-border d-flex flex-column align-items-center p-3">
             <p className="fw-bold">{title}</p>
             <a href={ref} className="question-btn" target="_blank" rel="noopener noreferrer">Download</a>
            </div>
          </div>
        ))
       }
       </div>
    </div>
  )
}
