import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDishes } from "./redux/api/restaurantApi";

const DisheItem = ({
  dishPhoto,
  dishName,
  dishDescription,
  dishPrice,
  dishRating,
  dishType,
}) => (
  <div className="col-12 col-md-3 m-2 border d-flex flex-column justify-content-center align-items-center">
    <img src={dishPhoto} alt={dishName} width={150} />
    <span className="d-flex align-items-center">
      <h3 className="me-2">{dishName}</h3>

      <small>({dishType})</small>
    </span>

    <p>Description: {dishDescription}</p>

    <p>Price: {dishPrice} DT</p>
    <p>Rating: {dishRating}/5</p>
  </div>
);

function App() {
  const dispatch = useDispatch();

  const { dishes, loadingDishes } = useSelector(
    ({ restaurantReducer }) => restaurantReducer
  );

  useEffect(() => {
    dispatch(fetchDishes());
  }, [dispatch]);

  return (
    <div className="row mt-5">
      <div className="col-12 d-flex flex-column justify-content-center align-items-center">
        <h1>Resturant APP</h1>

        <h3 className="mt-5">Your components should be rendered bellow</h3>

        <h4 className="mt-5">
          Please read the <b className="text-info">TO-DO.md</b> to discover your
          mission 🚀
        </h4>
      </div>

      {loadingDishes && (
        <div className="row justify-content-center mt-5">
          <div className="spinner-border text-info" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {!!dishes.length && (
        <div className="row my-5 justify-content-center">
          {dishes.map(({ id, ...props }) => (
            <DisheItem key={id} id={id} {...props} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
