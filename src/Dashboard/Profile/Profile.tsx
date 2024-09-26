import { RootState } from "../../utils/Redux/store";

import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <div>
      <main>
      <p>Email: {user.Email}</p>
      <p>Name: {user.FirstName} {user.LastName}</p>
      <p>Token: {user.token} {user.LastName}</p>
      <p>Verified: {user.EmailVerified ? 'Yes' : 'No'}</p>

      </main>
    </div>
  );
};

export default Profile;
