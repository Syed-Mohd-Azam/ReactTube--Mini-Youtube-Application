import Hamberger from "../assets/Hamberger-menu-icon.png";
import YoutubeIcon from "../assets/youtube.png";
import UserIcon from "../assets/user-icon.jpg";
import Search from "../assets/search.png";
const Header = () => {
  return (
    <>
      <section className="grid grid-flow-col shadow-sm px-3 py-6 ">
        <article className="flex gap-3 col-span-1  justify-start items-center px-2">
          <img
            className="w-8 h-8 hover:cursor-pointer pt-2"
            src={Hamberger}
            alt="Hamberger-Menu-Icon"
          />
          <img className="w-24 " src={YoutubeIcon} alt="Youtube-Icon" />
        </article>
        <article className="col-span-10 flex justify-center items-center">
          <section className="flex justify-content items-center gap-0 border-2 rounded-e-full rounded-l-full p-2">
            <input
              type="text"
              className="border-none w-96 rounded-2xl outline-none pl-3 tracking-wide text-lg"
              placeholder="Search"
            />
            <article className="pr-3">
              <img className="w-8 h-8" src={Search} alt="search" />
            </article>
          </section>
        </article>
        <article className="col-span-1 flex justify-center">
          <img className="w-12 h-12" src={UserIcon} alt="User-Icon" />
        </article>
      </section>
    </>
  );
};
export default Header;
