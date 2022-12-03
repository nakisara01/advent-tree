import Tree from "../img/Tree.png";
import ImageList from "./ImageList";

const SojuTree = () => {
  const visibleList = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const images = ImageList.map((item) => {
    return (
      <img
        id={item.decoName}
        className={visibleList.includes(item.idx) ? "deco" : "deco hidden"}
        src={item.imgSrc}
        alt={item.decoName}
        key={item.idx}
      />
    );
  });
  return (
    <>
      <img id="tree" src={Tree} alt="트리이미지" />
      {images}
    </>
  );
};
export default SojuTree;
