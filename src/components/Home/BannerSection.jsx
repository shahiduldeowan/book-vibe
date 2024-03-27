import { useNavigate } from "react-router-dom";
import HateMoneyImage from "../../assets/hate-money.png";
import FilledButton from "../Button/FilledButton";

const BannerSection = () => {
  const navigate = useNavigate();
  const handleViewList = () => {
    navigate("/listed-books");
  };
  return (
    <section className="w-full bg-[#1313130D] rounded-xl lg:rounded-3xl mb-6 lg:mb-24">
      <div className="w-11/12 lg:w-10/12 mx-auto py-6 lg:py-20 flex flex-col-reverse md:flex-row gap-6 lg:gap-20">
        <div className="h-auto lg:h-[394px] w-full flex flex-col justify-center">
          <h1 className=" text-3xl lg:text-4xl xl:text-5xl  xl:leading-[84px] font-bold mb-6 lg:mb-12">
            Books to freshen up your bookshelf
          </h1>
          <div>
            <FilledButton label="View The List" onClick={handleViewList} />
          </div>
        </div>
        <div className="h-[394px] w-full">
          <div
            className="h-full w-full bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${HateMoneyImage})` }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
