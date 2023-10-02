import React from "react";
import ProfileCard from "../components/ProfileCard.js";
import Table from "../components/Table.js";

const Profile = () => {
	return (
		<>
		<div className="flex">
      <div className="flex">
        <ProfileCard />
      </div>
      <div className="flex-1">
        <Table />

      </div>
    </div>
		</>
	);
};

export default Profile;
