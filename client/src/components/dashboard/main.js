import { AdminTitle } from "../../utils/tools";
import { useSelector } from "react-redux";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
const DashboardMain = () => {
  const users = useSelector((state) => state.users);

  return (
    <div>
      <AdminTitle title="Dashboard" />

      {users.data.role === "admin" ? (
        <p>
          <InsertEmoticonIcon className="smile-face" />
          Welcome Back! we been missing you!
        </p>
      ) : users.data.verified ? (
        <p className="verify-reminder">
          <CheckCircleIcon className="smile-face" /> Your account is verified,
          please select ''Owner upload listing' to upload your property for us,
          we'll help you rent out as soon as possible!
        <br/>
        <br/>
          **Admin will filters sensitive and private info, 
          public sees only general info and photos.
        </p>
      ) : (
        <p className="verify-reminder">
          <AnnouncementIcon className="announce-icon" />
          Welcome to Rentbase! You have not verified your account yet, please
          check your email, once verified, you will be able to upload their
          property in Dashboard, 
        </p>
      )}
    </div>
  );
};

export default DashboardMain;
