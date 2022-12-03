import NavBar from "./NavBar";
import SojuTree from "./SojuTree";
import CountDown from "../component/CountDown/CountDown";

// 서버에서 주는 것: 획득한 장식의 번호들
// 그럼 나는 번호를 id로 사용해, 해당 애들의 visibility를 "visible" 로 수정해줌

const MainPage = () => {
  return (
    <>
      <NavBar />
      
      <CountDown />
      <SojuTree />
    </>
  );
};
export default MainPage;
