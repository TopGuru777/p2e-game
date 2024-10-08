import CheckCom from "../component/check";
const Airdrop = () => {
  return (
    <div className="py-10 bg-black p-4 h-[100vh] pb-24">
      <div className="ml-2">
        <div className="flex justify-center items-center">
          <img src="image/wolftoken.jpeg" className="w-34 h-32 rounded-full" />
        </div>
        <p className="text-white text-3xl font-bold p-2">
          Get ready, Airdrop is
          <br /> coming soon!
        </p>
        <div className="mt-6">
          <div className="flex">
            <CheckCom flag={true} />
            <p className="text-white text-xl ml-2">Exchange negotiations</p>
          </div>
          <img src="image/thredot.png" className="w-2 h-4 ml-3" />
          <div className="flex">
            <CheckCom flag={true} />
            <p className="text-white text-xl ml-2">Market Maker negotiations</p>
          </div>
          <img src="image/thredot.png" className="w-2 h-4 ml-3" />
          <div className="flex">
            <CheckCom flag={true} />
            <p className="text-white text-xl ml-2 text-left">
              Key partnerships are coming
            </p>
          </div>
          <img src="image/thredot.png" className="w-2 h-4 ml-3" />
          <div className="flex">
            <CheckCom flag={false} />
            <p className="text-white text-xl ml-2">Airdorp task list</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Airdrop;
