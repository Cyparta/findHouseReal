import { useSelector } from "react-redux";

const DescriptionsText = () => {
  const lang = useSelector(state => state.lang.value.lang)
  const main = useSelector(state => state.lang.value.agentDetail)
  return (
    <>
      <h3 className="title mb-3">{main.desHeading[lang]}</h3>
      <p className="mb25">
        {main.desText[lang]}
      </p>
      <p className="mb25">
        {main.desText2[lang]}

      </p>
      <h3 className="title mb-3">{main.desHeading2[lang]}</h3>
      <p className="mb25">
      {main.desText3[lang]}

      </p>
      <p className="mb25">
      {main.desText4[lang]}
        
      </p>
      <h3 className="title mb-3">{main.desHeading3[lang]}</h3>
      <p className="mb25">
      {main.desText5[lang]}
      </p>
      <p className="mt10 mb0">
      {main.desText6[lang]}
      </p>
    </>
  );
};

export default DescriptionsText;
