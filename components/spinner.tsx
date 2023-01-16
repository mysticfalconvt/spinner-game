import { useState } from "react";

export const Spinner = () => {
  const [money, setMoney] = useState(100);
  const [bet, setBet] = useState(50);

  const handleIncreaseBet = () => {
    if (money - bet >= 10) {
      setBet(bet + 10);
    }
  };
  const handleDecreaseBet = () => {
    if (bet - 10 >= 10) {
      setBet(bet - 10);
    }
  };

  return (
    <div className="flex flex-col h-full items-center bg-base-100 ">
      <div className="my-5 text-3xl">You have ${money}</div>
      <div className="flex flex-row items-center justify-center gap-4">
        <button
          className="btn btn-warning p-x-5 whitespace-nowrap text-xl"
          onClick={handleDecreaseBet}
        >
          decrease bet
        </button>
        <div className="my-5 p-5 badge badge-primary text-xl">
          Bet Amount ${bet}
        </div>
        <button
          className="btn btn-success p-x-5 whitespace-nowrap text-xl"
          onClick={handleIncreaseBet}
        >
          increase bet
        </button>
      </div>
      <div className="bg-accent aspect-square rounded-xl">asd</div>
    </div>
  );
};
