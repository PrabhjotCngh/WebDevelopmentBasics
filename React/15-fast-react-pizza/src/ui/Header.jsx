import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <Header>
      <Link to="/">Fast React Pizza Co.</Link>
      <SearchOrder />
      <p>Prabhjot Singh</p>
    </Header>
  );
}

export default Header;
