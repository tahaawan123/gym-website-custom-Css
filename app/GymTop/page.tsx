import React from "react";
import Image from "next/image";
import GymPageCss from  "./GymTop.module.css"; // Import the new CSS file

const Gympage = () => {
  return (
    <div className={GymPageCss.gymPageContainer}>
      <div className={GymPageCss.imageWrapper}>
        <Image src="/Gym.jpg" alt="GymPic" width={1500} height={1000} />
      </div>
      <div className={GymPageCss.textOverlay}>
        <h1>WE ARE ONE OF PAKISTAN FIRST COMMUNITY-BASED GYMS</h1>
      </div>
      <button type="button" className={GymPageCss.classButton}>
        See Our Classes
      </button>
    </div>
  );
};

export default Gympage;
