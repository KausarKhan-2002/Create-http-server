import useData from "../Hook/useData";
import { useItems } from "../Context/ItemsProvider";

const Data = () => {
  const { data } = useItems();
  useData();

  if (data.length == 0) return <h1>Loading...</h1>;

  const totalPrice = data.reduce((prev, curr) => prev + curr.price, 0);

  return (
    <div className="table-container">
      <table className="dark-table">
        <thead>
          <tr>
            <th>Sr. No</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price ($)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>$ {item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Total Price Section */}
      <div className="total-price">
        <span>Total Price: </span>
        <strong>${totalPrice}</strong>
      </div>
    </div>
  );
};

export default Data;