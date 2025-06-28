import React from "react";
import { useSelector } from "react-redux";
import { getInitials } from "../utils/helper";

const Profile = ({ onLogout }) => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="flex items-center gap-4 px-4 py-2 bg-slate-100 rounded-xl">
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-200 text-slate-700 font-semibold text-base">
        {getInitials(currentUser?.username)}
      </div>

      <div className="flex flex-col">
        <p className="text-sm font-medium text-slate-800">
          {currentUser?.username || ""}
        </p>
        <button
          onClick={onLogout}
          className="text-xs text-red-500 hover:text-red-600 hover:underline transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
