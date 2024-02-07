import Button from "../../ui/Button";
import { useCheckout } from "./useCheckout";
import PropTypes from "prop-types";

CheckoutButton.propTypes = {
  bookingId: PropTypes.number,
};

function CheckoutButton({ bookingId }) {
  const { isLoading, mutate: checkout } = useCheckout();

  return (
    <Button
      variation="primary"
      size="small"
      onClick={() => checkout(bookingId)}
      disabled={isLoading}
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
