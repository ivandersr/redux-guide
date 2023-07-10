import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from "react-icons/ai";

// Styles
import * as Styles from "./styles";
import { useDispatch } from "react-redux";
import { 
  removeProduct, 
  incrementProduct, 
  decrementProduct 
} from "../../redux/cart/slice";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();
  const handleRemoveClick = () => {
    dispatch(removeProduct({id: product.id}));
  };

  const handleIncreaseClick = () => {
    dispatch(incrementProduct({id: product.id}));
  };

  const handleDecreaseClick = () => {
    dispatch(decrementProduct({id: product.id}));
  };

  return (
    <Styles.CartItemContainer>
      <Styles.CartItemImage imageUrl={product.imageUrl} />

      <Styles.CartItemInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>

        <Styles.CartItemQuantity>
          <AiOutlineMinus
            size={20}
            onClick={handleDecreaseClick}
            aria-label={`Decrease quantity of ${product.name}`}
          />
          <p>{product.quantity}</p>
          <AiOutlinePlus
            size={20}
            onClick={handleIncreaseClick}
            aria-label={`Increase quantity of ${product.name}`}
          />
        </Styles.CartItemQuantity>
      </Styles.CartItemInfo>

      <Styles.RemoveButton
        onClick={handleRemoveClick}
        aria-label={`Remove ${product.name}`}
      >
        <AiOutlineClose size={25} />
      </Styles.RemoveButton>
    </Styles.CartItemContainer>
  );
};

export default CartItem;
