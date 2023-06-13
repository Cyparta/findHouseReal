import { useSelector } from "react-redux";

const AllStatistics = () => {
  const lang = useSelector(state => state.lang.value.lang)
  const allStatistics = [
    {
      id: 1,
      blockStyle: "",
      icon: "flaticon-home",
      timer: "37",
      name: {en: "All Properties", ar: "جميع الخصائص"},
    },
    {
      id: 2,
      blockStyle: "style2",
      icon: "flaticon-view",
      timer: "24",
      name:  {en: "Total Views", ar: "عدد المشاهدات"}
    },
    {
      id: 3,
      blockStyle: "style3",
      icon: "flaticon-chat",
      timer: "12",
      name: {en: "Total Visitor Reviews", ar: "إجمالي آراء الزوار"},
    },
    {
      id: 4,
      blockStyle: "style4",
      icon: "flaticon-heart",
      timer: "18",
      name: {en: "Total Favorites", ar: "إجمالي المفضلة"},
    },
  ];

  return (
    <>
      {allStatistics.map((item) => (
        <div className="col-sm-6 col-md-6 col-lg-6 col-xl-3" key={item.id}>
          <div className={`ff_one ${item.blockStyle}`}>
            <div className="detais">
              <div className="timer">{item.timer}</div>
              <p>{item.name[lang]}</p>
            </div>
            <div className="icon">
              <span className={item.icon}></span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default AllStatistics;
