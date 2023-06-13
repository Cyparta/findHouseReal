import { useSelector } from "react-redux";

const FaqContent = () => {
  const lang = useSelector(state => state.lang.value.lang);
  const faq = useSelector(state => state.lang.value.faq)
  return (
    <>
      <div className="accordion" id="accordionExample">
        <div className="card">
          <div id="headingOne">
            <button
              className="btn btn-link accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              {faq.card1.heading[lang]}
            </button>
          </div>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="card-body">
              <p>
                {faq.card1.text[lang]}
              </p>
            </div>
          </div>
        </div>
        {/* End .card */}

        <div className="card">
          <div id="headingTwo">
            <button
              className="btn btn-link accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              {faq.card2.heading[lang]}
            </button>
          </div>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse show"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="card-body">
              <p>
                {faq.card2.text[lang]}
              </p>
            </div>
          </div>
        </div>
        {/* End .card */}

        <div className="card">
          <div id="headingThree">
            <button
              className="btn btn-link accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              {faq.card3.heading[lang]}
            </button>
          </div>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="card-body">
              <p>
                {faq.card3.text[lang]}
              </p>
            </div>
          </div>
        </div>
        {/* End .card */}

        <div className="card">
          <div id="headingFour">
            <button
              className="btn btn-link accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              {faq.card4.heading[lang]}
            </button>
          </div>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="card-body">
              <p>
                {faq.card4.text[lang]}
              </p>
            </div>
          </div>
        </div>
        {/* End .card */}

        <div className="card">
          <div id="headingFive">
            <button
              className="btn btn-link accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              {faq.card5.heading[lang]}
            </button>
          </div>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#accordionExample"
          >
            <div className="card-body">
              <p>
                {faq.card5.text[lang]}
              </p>
            </div>
          </div>
        </div>
        {/* End .card */}

        <div className="card">
          <div id="headingSix">
            <button
              className="btn btn-link accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
            >
              {faq.card5.heading[lang]}
            </button>
          </div>
          <div
            id="collapseSix"
            className="accordion-collapse collapse"
            aria-labelledby="headingSix"
            data-bs-parent="#accordionExample"
          >
            <div className="card-body">
              <p>
                {faq.card5.text[lang]}
              </p>
            </div>
          </div>
        </div>
        {/* End .card */}

        <div className="card">
          <div id="headingSeven">
            <button
              className="btn btn-link accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSeven"
              aria-expanded="false"
              aria-controls="collapseSeven"
            >
              {faq.card6.heading[lang]}
            </button>
          </div>
          <div
            id="collapseSeven"
            className="accordion-collapse collapse"
            aria-labelledby="headingSeven"
            data-bs-parent="#accordionExample"
          >
            <div className="card-body">
              <p>
                {faq.card6.text[lang]}
              </p>
            </div>
          </div>
        </div>
        {/* End .card */}

        <div className="card">
          <div id="headingEight">
            <button
              className="btn btn-link accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseEight"
              aria-expanded="false"
              aria-controls="collapseEight"
            >
              {faq.card7.heading[lang]}
            </button>
          </div>
          <div
            id="collapseEight"
            className="accordion-collapse collapse"
            aria-labelledby="headingEight"
            data-bs-parent="#accordionExample"
          >
            <div className="card-body">
              <p>
                {faq.card7.text[lang]}
              </p>
            </div>
          </div>
        </div>
        {/* End .card */}

        <div className="card">
          <div id="headingNine">
            <button
              className="btn btn-link accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseNine"
              aria-expanded="false"
              aria-controls="collapseNine"
            >
              {faq.card8.heading[lang]}
            </button>
          </div>
          <div
            id="collapseNine"
            className="accordion-collapse collapse"
            aria-labelledby="headingNine"
            data-bs-parent="#accordionExample"
          >
            <div className="card-body">
              <p>
                {faq.card8.text[lang]}
              </p>
            </div>
          </div>
        </div>
        {/* End .card */}

        <div className="card">
          <div id="headingTen">
            <button
              className="btn btn-link accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTen"
              aria-expanded="false"
              aria-controls="collapseTen"
            >
              {faq.card9.heading[lang]}
            </button>
          </div>
          <div
            id="collapseTen"
            className="accordion-collapse collapse"
            aria-labelledby="headingTen"
            data-bs-parent="#accordionExample"
          >
            <div className="card-body">
              <p>
                {faq.card9.text[lang]}
              </p>
            </div>
          </div>
        </div>
        {/* End .card */}
      </div>
    </>
  );
};

export default FaqContent;
