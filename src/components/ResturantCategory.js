import ItemList from "./ItemList";

const ResturandCategory = ({ index, data, showItems, handleExpandIndex }) => {
  const handleTitleClick = () => {
    handleExpandIndex(index);
  };

  const cardData = data?.card?.card;
  const { title, itemCards } = cardData;
  return (
    <div className="w-7/12 m-auto  bg-gray-100">
      <div
        className="flex justify-between p-2 m-2 cursor-pointer"
        onClick={handleTitleClick}
      >
        <p className="font-bold">
          {title} ({itemCards.length})
        </p>
        <span>⬇️</span>
      </div>
      <div>
        {itemCards.map((item, index) => {
          return showItems && <ItemList key={index} item={item} />;
        })}
      </div>
    </div>
  );
};

export default ResturandCategory;
