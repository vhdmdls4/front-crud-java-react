import { useState } from "react";

export default function Home() {
  const [price, setPrice] = useState<number>(0);

  const discount = 0.1;

  function handleInputOnBlur(event: React.ChangeEvent<HTMLInputElement>) {
    setPrice(Number(event.target.value));
  }

  function applyDiscount(price: number, discount: number) {
    const discountedPrice = price - price * discount;
    setPrice(discountedPrice);
  }

  return (
    <div className="flex flex-col">
      Home principal da aplicação
      <>Teste novamente</>
      <span>Testo</span>
      <span>{price}</span>
      <input type="number" onBlur={handleInputOnBlur} min={0} max={500} />
      <button
        id="applyDiscountButtonHomePage"
        data-testid="applyDiscountButtonHomePage"
        onClick={() => applyDiscount(price, discount)}
      >
        Click to apply discount
      </button>
    </div>
  );
}
