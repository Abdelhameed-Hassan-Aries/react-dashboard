import "./User.css";
import {
  CalendarToday,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  LocationSearching,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://scontent.fcai20-6.fna.fbcdn.net/v/t31.18172-8/26172857_1890591607636121_7761768485069054532_o.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=pGSCvC7QO08AX9TasJQ&_nc_ht=scontent.fcai20-6.fna&oh=20fd2e0c8b58c98b4be977cc0b04724b&oe=60DB126C"
              alt="Abdelhameed"
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">awesomeabdo95</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">Abdelhameed Hassan</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">20.4.1995</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+002 0127 9989 791</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">
                abdelhameed.hs0@gmail.com
              </span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">Cairo, Egypt</span>
            </div>
          </div>
        </div>

        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label htmlFor="">Username</label>
                <input
                  className="userUpdateInput"
                  type="text"
                  placeholder="awesomeabdo95"
                />
              </div>
              <div className="userUpdateItem">
                <label htmlFor="">FullName</label>
                <input
                  className="userUpdateInput"
                  type="text"
                  placeholder="Abdelhameed Hassan"
                />
              </div>
              <div className="userUpdateItem">
                <label htmlFor="">Email</label>
                <input
                  className="userUpdateInput"
                  type="text"
                  placeholder="abdelhameed.hs0@gmail.com"
                />
              </div>
              <div className="userUpdateItem">
                <label htmlFor="">Phone</label>
                <input
                  className="userUpdateInput"
                  type="text"
                  placeholder="+002 0127 9989 791"
                />
              </div>
              <div className="userUpdateItem">
                <label htmlFor="">Address</label>
                <input
                  className="userUpdateInput"
                  type="text"
                  placeholder="Cairo, Egypt"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="https://scontent.fcai20-6.fna.fbcdn.net/v/t31.18172-8/26172857_1890591607636121_7761768485069054532_o.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=pGSCvC7QO08AX9TasJQ&_nc_ht=scontent.fcai20-6.fna&oh=20fd2e0c8b58c98b4be977cc0b04724b&oe=60DB126C"
                  alt="Abdelhammed"
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdatesButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
