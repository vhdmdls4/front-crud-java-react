import React, { Suspense, useEffect, useState } from "react";

interface FetchedCatsProps {
  shouldFetch: boolean;
  setOk: React.Dispatch<boolean>;
}

function FetchedCats({ shouldFetch, setOk }: FetchedCatsProps) {
  const [testingEffect, setTestingEffect] = useState<Array<any>>([]);

  useEffect(() => {
    if (shouldFetch) {
      fetchCats();
    }

    // return () => {
    //   second
    // }
  }, [shouldFetch]);

  async function fetchCats() {
    setTestingEffect([]);
    try {
      const response = await fetch("https://catfact.ninja/breeds");
      const data = await response.json().then((res) => res.data);

      await new Promise((resolve, reject) => {
        setTimeout(resolve, 2000);
      });

      setTestingEffect(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setOk(false);
      alert("finalizou");
    }
  }

  if (testingEffect.length !== 0) {
    return (
      <div style={{ background: "#000", color: "white" }}>
        Testando efeito
        <div>{testingEffect[1]?.title}</div>{" "}
        <div>{testingEffect[0]?.title}</div>
      </div>
    );
  }
}

export default function Home() {
  const [price, setPrice] = useState<number>(0);
  const [ok, setOk] = useState<boolean>(false);

  const discount = 0.1;

  function handleInputOnBlur(event: React.ChangeEvent<HTMLInputElement>) {
    setPrice(Number(event.target.value));
  }

  function applyDiscount(price: number, discount: number) {
    const discountedPrice = price - price * discount;
    setPrice(discountedPrice);
  }

  function shouldFetch() {
    setOk(true);
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
      <button onClick={shouldFetch}>Clique para fazer a busca</button>
      <Suspense
        fallback={
          <div
            style={{ background: "#f6f6f6", color: "black", fontSize: "24px" }}
          >
            Loading...
          </div>
        }
      >
        <FetchedCats shouldFetch={ok} setOk={setOk} />
      </Suspense>
    </div>
  );
}
