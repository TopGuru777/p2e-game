import { useEffect, useRef, useState } from "react";
import EarnCard from "../component/EarnCard";
import { dispatch, useSelector } from "../store";
import { updateBalance } from "../store/reducers/wallet";
import axios from "../utils/api"
import { CreateEffect } from "../component/MoneyUpdateEffect";
import { toast } from "react-toastify";

const Earn = () => {
  
  const username_state = useSelector((state) => state.wallet.user?.username);
  const balance_state = useSelector((state) => state.wallet.user?.balance);
  const dailyEarnTime = useSelector(
    (state) => state.wallet.user?.dailyEarnTime
  );
  const [username, setUsername] = useState<string>(username_state);
  const [balance, setBalance] = useState<number>(balance_state);

  const DAY = 86400 * 1000;
  const [targetDate, setTargetDate] = useState<number>(dailyEarnTime + DAY);

  useEffect(() => {
    setUsername(username_state);
    setBalance(balance_state);
  }, [username_state, balance_state]);

  
  const handleGetDailyEarning = async () => {
    try {
      await axios.post(`/wallet/getDailyEarn/${username}`).then((res) => {
        if (res.status === 200) {
          dispatch(updateBalance(username, balance + 1000));
          toast.success("You have received +1000 daily Earning successfully!");
          setTargetDate(Date.now() + DAY);
        } else
          toast.info(
            "You earned already today's daily earnings! Please try tomorrow."
          );
      });
    } catch (error) {
      // console.log(error);/
      toast.warning("Unknown error occurred. Please try again later.");
    }
  };

  // const handleJoinTelegramGroup = async () => {
  //   try {
  //     await axios.post(`/earnings/${username}`).then((res) => {
  //       // if (res.data.joinTelegram.status) {
  //       if (res.status === 200) {
  //         // if (!res.data.joinTelegram.earned) {
  //         //   dispatch(updateBalance(username, balance + 1000)).then(() => {
  //         //     axios.post(`/earnings/update/joinTelegram/${username}`, {
  //         //       status: true,
  //         //       earned: true,
  //         //     });
  //         toast.success("You have received +1000 coins successfully!");
  //         //   });
  //         // } else {
  //         //   toast.warning("You have already received bonus!");
  //         // }
  //       } else {
  //         toast.warning(
  //           "You didn't join Telegram Group yet! Please join again"
  //         );
  //       }
  //     });
  //   } catch (error) {
  //     toast.warning("Unknown error occurred. Please try again later.");
  //     // console.log(error);
  //   }
  // };

  
  // const handleSubscribeTelegramChannel = async () => {
  //   try {
  //     await axios.post(`/earnings/${username}`).then((res) => {
  //       if (res.data.subscribeTelegram.status) {
  //         if (!res.data.subscribeTelegram.earned) {
  //           dispatch(updateBalance(username, balance + 1000)).then(() => {
  //             axios.post(`/earnings/update/subscribeTelegram/${username}`, {
  //               status: true,
  //               earned: true,
  //             });
  //             toast.success("You have received +1000 coins successfully!");
  //           });
  //         } else {
  //           toast.warning("You have already received bonus!");
  //         }
  //       } else {
  //         toast.warning(
  //           "You didn't subscribe Telegram Channel yet! Please join again"
  //         );
  //       }
  //     });
  //   } catch (error) {
  //     // console.log(error);
  //     toast.warning("Unknown error occurred. Please try again later.");
  //   }
  // };

  return (
    <div className="py-10 bg-black p-4 pb-24">
      <div className="flex justify-center items-center">
        <img src="image/dollar.png" className="w-32 h-32" />
      </div>
      <p className="text-white text-3xl font-bold p-4">Earn More Money</p>
      <p className="text-white text-xl font-bold p-4 text-left">Daily tasks</p>
      <div className="py-3">
        <EarnCard
          title="Daily reward"
          image="image/cdollar.png"
          profit="1K"
          flag={false}
          timer={true}
          targetDate={targetDate}
          onClick={handleGetDailyEarning}
        />
      </div>
      <div className="flex flex-row justify-between items-center py-2">
        <p className="text-left py-2 text-white text-xl font-semibold">
          Tasks List
        </p>
      </div>
      <div className="mt-3 space-y-2">
        <EarnCard
          title="Join our TG channel"
          image="image/tg.png"
          profit="234.3K"
          flag={true}
        />
        <EarnCard
          title="Follow our X account"
          image="image/twitter.png"
          profit="234.3K"
          flag={true}
        />
      </div>
    </div>
  );
};
export default Earn;
