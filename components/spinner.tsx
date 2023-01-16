import React, { ReactNode, useState } from "react";

const options = ["Keep your bet", "lose your bet", "double your bet"];
const SpinnerSection: React.FC<{
  name?: string;
  center?: boolean;
  active: boolean;
}> = ({ name, active }): JSX.Element => {
  return (
    <div
      className={`bg-accent text-black text-lg rounded-full flex w-1/2 h-1/2 text-center place-items-center justify-center ${
        active ? "bg-white" : "bg-accent"
      }`}
    >
      {name}
    </div>
  );
};

export const Spinner = () => {
  const [money, setMoney] = useState(100);
  const [bet, setBet] = useState(50);
  const [active, setActive] = useState(Math.floor(Math.random() * 8) + 1);

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

  const handleSpin = () => {
    let change = 0;
    setActive(1);
    for (let i = 0; i < 100; i++) {
      setTimeout(() => {
        const next = Math.floor(Math.random() * 8) + 1;
        setActive(next);
      }, i * 1);
    }
    if (active === 1 || active === 4 || active === 7) {
    }
    if (active === 2 || active === 5 || active === 8) {
      change = -bet;
    }
    if (active === 3 || active === 6) {
      change = bet * 2;
    }
    setMoney(money + change);
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
      <div className="bg-secondary aspect-square rounded-full grid grid-cols-3 w-1/2 items-center place-items-center">
        <SpinnerSection name={options[0]} active={active === 1} />
        <SpinnerSection name={options[1]} active={active === 2} />
        <SpinnerSection name={options[2]} active={active === 3} />
        <SpinnerSection name={options[0]} active={active === 4} />
        {money > 0 ? (
          <div
            className="bg-base-200 text-white rounded-full flex w-1/2 h-1/2 text-center place-items-center justify-center"
            onClick={handleSpin}
          >
            SPIN!!!
          </div>
        ) : (
          <div className="bg-red-900  text-white  rounded-full flex w-1/2 h-1/2 text-center place-items-center justify-center">
            You are out of money
          </div>
        )}
        <SpinnerSection name={options[1]} active={active === 5} />
        <SpinnerSection name={options[2]} active={active === 6} />
        <SpinnerSection name={options[0]} active={active === 7} />
        <SpinnerSection name={options[1]} active={active === 8} />
      </div>
    </div>
  );
};
