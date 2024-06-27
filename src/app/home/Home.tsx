import { Suspense, useState } from "react";

export default function Home() {
  const [price, setPrice] = useState<number>(0);
  const [testingEffect, setTestingEffect] = useState<Array<any>>([]);

  async function logMovies() {
    const response = await fetch("http://example.com/movies.json");
    const movies = await response.json();
    setTestingEffect(movies);
    console.log(movies);
  }

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
      <button onClick={logMovies}>Clique para fazer a busca</button>
      <Suspense fallback={<div>Loading...</div>}>
        {testingEffect?.length > 0 && (
          <div>
            Testando efeito
            <div>{testingEffect[1]?.title}</div>{" "}
            <div>{testingEffect[0]?.title}</div>
          </div>
        )}
      </Suspense>
    </div>
  );
}
