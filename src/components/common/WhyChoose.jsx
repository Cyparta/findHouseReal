import { useSelector } from "react-redux";

const WhyChoose = ({ style = "" }) => {
  const lang = useSelector((state) => state.lang.value.lang);
  const whyCooseContent = [
    {
      id: { en: "1", ar: "1" },
      icon: { en: "flaticon-high-five", ar: "flaticon-high-five" },
      title: { en: "Contracting sector", ar: "قطاع المقاولات " },
      descriptions: {
        en: `Dar Farha Company started working in the construction and contracting sector since 2004, and during this period it implemented many projects in both Egypt and Saudi Arabia, and the company has a large business precedent.`,
        ar: "بدأت شركة دار فرحة العمل في قطاع الإنشاءات والمقاولات منذ عام 2004، وخلال هذه الفترة قامت بتنفيذ العديد من المشاريع في كلا من مصر والسعودية، وتمتلك الشركة سابقة أعمال كبيرة.",
      },
    },
    {
      id: { en: "2", ar: "2" },
      icon: { en: "flaticon-high-five", ar: "flaticon-high-five" },
      title: {
        en: "Finishing and decoration sector",
        ar: "قطاع التشطيبات والديكورات",
      },
      descriptions: {
        en: `Dar Farha offers its services in commercial, residential and investment real estate marketing, and has achieved a prestigious position and enjoys great experience and reputation in the field of real estate marketing and investment.`,
        ar: "تقدم شركة دار فرحة خدماتها في التسويق العقاري التجاري والسكني والإستثماري، وحققت مكانة مرموقة وتتمتع بخبرة وسمعة كبيرة في مجال والتسويق والإستثمار العقارى.",
      },
    },
    {
      id: { en: "3", ar: "3" },
      icon: { en: "flaticon-high-five", ar: "flaticon-high-five" },
      title: {
        en: "Real estate investment sector",
        ar: "قطاع الاستثمار العقاري",
      },
      descriptions: {
        en: `Dar Farha provides design and implementation services for all interior decoration works And finishes, through a specialized group of trained and qualified decorators and technicians to provide the best possible service`,
        ar: "لتقديم أفضل خدمة ممكنة تقدم شركة دار فرحة خدمات تصميم وتنفيذ جميع أعمال الديكور الداخلي والتشطيبات وذلك من خلال مجموعة متخصصة من مهندسي الديكور والفنيين المدربين",
      },
    },
  ];

  return (
    <>
      {whyCooseContent.map((item) => (
        <div className="col-md-6 col-lg-4 col-xl-4" key={item.id[lang]}>
          <div className={`why_chose_us ${style}`}>
            <div className="icon">
              <span className={item.icon[lang]}></span>
            </div>
            <div className="details">
              <h4>{item.title[lang]}</h4>
              <p>{item.descriptions[lang]}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default WhyChoose;
