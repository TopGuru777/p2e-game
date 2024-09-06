import InviteCard from "../component/InviteCard";
import FriendCard from "../component/FriendCard";
const Friends = () => {
  return (
    <div className=" bg-black px-4 pb-24 pt-4">
      <p className="text-white text-xl">Invite Friends!</p>
      <p className="text-white text-3xl pt-4 pb-6 font-bold">
        Refer friends and earn extra points!
      </p>
      <div className="space-y-2 py-3">
        <InviteCard title="Invite a friend" profit="1,000" />
      </div>
      <div className="flex flex-row justify-between items-center">
        <p className="text-left py-2 text-white text-xl font-semibold">
          List of your friends(15)
        </p>
        <img
          src="/image/redo.png"
          alt=""
          className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 mt-1"
        />
      </div>
      <div className="mt-3 space-y-2">
        <FriendCard
          name="Lari0 | FutureValueApp"
          role="Platium"
          profit="495.3K"
          value="+321K"
        />
        <FriendCard
          name="Dan Ber"
          role="Platium"
          profit="445.3K"
          value="+25K"
        />
        <FriendCard
          name="Lari0 | FutureValueApp"
          role="Platium"
          profit="495.3K"
          value="+321K"
        />
        <FriendCard
          name="Dan Ber"
          role="Platium"
          profit="445.3K"
          value="+25K"
        />
        <FriendCard name="Andria" role="Platium" profit="435.3K" value="+35K" />
      </div>
    </div>
  );
};
export default Friends;
