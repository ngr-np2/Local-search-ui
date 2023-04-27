import UserProfileCard from "../UserProfileCard";
import Forms from "./Forms";
const UserProfileSection = () => {
  return (
    <section className="p-6 mx-auto w-full">
      <div className="flex flex-wrap -mx-3 max-lg:flex-col">
        <div className="px-3 w-full max-w-full shrink-0 md:w-8/12 md:flex-0">
          <Forms />
        </div>
        <div class="px-3 mt-6 w-full max-w-full shrink-0 md:w-4/12 md:flex-0 md:mt-0">
          <UserProfileCard />
        </div>
      </div>
    </section>
  );
};

export default UserProfileSection;
