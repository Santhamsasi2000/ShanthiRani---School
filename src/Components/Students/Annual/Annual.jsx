import { LazyLoadImage } from "react-lazy-load-image-component";
import "./Annual.css";
import { DataAnnual } from "./DataAnnual";

const para1 = ""
const Annual = () => {
  return (
    <section className="p-3 p-sm-5 common-bg">
      <p className="title mb-2">ANNUAL DAY OF 2025</p>
      <p className="subTitle">Celebrating 27 Years of Excellence</p>
      <img src="/images/Annual/13.webp"
        className="w-100 rounded-2 mb-4 mb-sm-5"
        alt="Best School In Kallal and Kalayarkovil is Shanthi rani"
      />
      <p className="text-justify">Shanthi Rani School proudly hosted its Annual Fest on Wednesday, 11th December 2024, at 4:30 PM, marking 27 years of excellence in education and holistic development.</p>
      <p className="subTitle mb-2">Grand Celebration</p>
      <p className="mb-4 text-justify">The Annual Fest was an evening filled with cultural performances, student achievements, and inspiring speeches. This event provided students a platform to showcase their talents in dance, music, drama, and other creative pursuits.</p>
      
      <p className="subTitle">Honoured Guests</p>
      <div className="row mb-5">
        <div className="col-md-6">
          <LazyLoadImage
            src="/images/Annual/10.webp"
            alt="Shanthi Rani school is best school"
            className="w-100 rounded-2 mb-3 mb-md-0"
            effect="blur"
            threshold={200}
            onError={(e) =>
              (e.target.src = "https://placehold.co/600x400/000000/FFFFFF.png")
            }
          />
        </div>
        <div className="col-md-6">
          <p className="text-justify">
            We were privileged to have{" "}
            <span className="fw-semibold">
              Ms. M. Mary Pouline, CEO & Founder of Sapience Publications
            </span>
            , as our Chief Guest. Her presence and words of wisdom inspired
            students to strive for excellence.
          </p>
          <div className="d-xl-block d-md-none d-block">
          <p>
            We also had the honor of welcoming esteemed{" "}
            <span className="fw-semibold">Guests of Honour</span>, including:
          </p>
          <ol>
            <li>
              Rev. Sr. Rose Kidengean DC (Assistant Provincial, Southern
              Province)
            </li>
            <li>Rev. Fr. J. Kamalraj CM (Parish Priest, Kallal)</li>
            <li>Rev. Fr. Christopher CM (Assistant Parish Priest, Kallal)</li>
            <li>Mr. Vasivam (Inspector of Police, Kallal)</li>
            <li>Mrs. Sornam Asokan (Chairman, Kallal)</li>
            <li>Mrs. Radhika Ramanathan (President, Kallal)</li>
            <li>Rev. Sr. Rexi Mary DC (Councillor for Education)</li>
            <li>Mr. Selva Rayar (PTA President)</li>
          </ol>
          </div>
          <div className="d-none d-lg-block d-xl-none">
          <p>
            We also had the honor of welcoming esteemed{" "}
            <span className="fw-semibold">Guests of Honour</span>, including: 
            Rev. Sr. Rose Kidengean DC (Assistant Provincial, Southern
              Province),Rev. Fr. Christopher CM (Assistant Parish Priest, Kallal),Mr. Vasivam (Inspector of Police, Kallal),
              Mrs. Sornam Asokan (Chairman, Kallal),Mrs. Radhika Ramanathan (President, Kallal),Rev. Sr. Rexi Mary DC (Councillor for Education),Mr. Selva Rayar (PTA President), and Mrs. Lakshmi Ramanathan (Principal, Kallal).
          </p>
          </div>
        </div>
      </div>

      <p className="subTitle">Moments of Annual Day Function</p>
      <div className="row gy-3">
        {DataAnnual.map(({ id, image }) => (
          <div key={id} className="col-sm-6 col-md-4 col-lg-3">
            <LazyLoadImage
              src={image}
              alt={`Shanthi Rani school is best school- ${id}`}
              className="w-100"
              effect="blur"
              threshold={200}
              onError={(e) =>
                (e.target.src =
                  "https://placehold.co/600x400/000000/FFFFFF.png")
              }
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Annual;
