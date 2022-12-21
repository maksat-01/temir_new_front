import React, { useEffect } from "react";
import logo from "../../../assets/img/logo.svg";
import gsap from "gsap";
import { NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import API from "../../api/Api";
import { getIdUserParams } from "../../helper";
import { getUser } from "../../../pages/interface/getUser/redux/reducer";

const percent = "60%";

const AdminToWelcome = () => {
  const { user } = useAppSelector((state) => state.getUser);
  const dispatch = useAppDispatch();
  useEffect(() => {
    gsap.to(".admin--general__title", {
      y: `${percent}`,
      opacity: 1,
      duration: 3,
      scrub: 5,
    });
  }, []);

  useEffect(() => {
    API.get(`user-update/` + getIdUserParams())
      .then(({ data }) => {
        dispatch(getUser.actions.getUserSucceseded(data));
      })
      .catch((error) => {
        dispatch(getUser.actions.getUserError(error));
      });
  }, []);

  return (
    <div id="admin">
      <div className="admin--general">
        <div className="admin--general__title">
          <div className="admin--general__title--img">
            <img src={logo} alt="no_image" />
          </div>
          <div className="admin--general__title--h1">
            <h1>
              {user.username}, welcome to <br />
              your personal account!
            </h1>
          </div>
          <div className="admin--general__title--btn">
            <button>
              <NavLink to="/profile/">Continue</NavLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminToWelcome;
