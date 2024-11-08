import React from "react";
import { FaChartBar, FaFlask, FaGem, FaTachometerAlt, FaMapSigns, FaDumbbell, FaAnchor, FaBolt } from "react-icons/fa";
import { LiaSwimmingPoolSolid } from "react-icons/lia";
import DataCss from "./Data.module.css";

const DataPage = () => {
  return (
    <div className={DataCss.datapage}>
      <h2 className={DataCss.heading}>Our Process</h2>

      {/* Motivational Icons */}
      <div className={DataCss.iconcontainer}>
        <div className={DataCss.iconbox}>
          <div className={DataCss.icon}>
            <FaChartBar />
          </div>
          Analyze Your Goal
        </div>
        <div className={DataCss.iconbox}>
          <div className={DataCss.icon}>
            <FaFlask />
          </div>
          WORK HARD ON IT
        </div>
        <div className={DataCss.iconbox}>
          <div className={DataCss.icon}>
            <FaTachometerAlt />
          </div>
          IMPROVE YOU
        </div>
        <div className={DataCss.iconbox}>
          <div className={DataCss.icon}>
            <FaGem />
          </div>
          ACHIEVE GOALS
        </div>
      </div>

      {/* Gym Details */}
      <div className={DataCss.detailscontainer}>
        <div className={DataCss.detailsbox}>
          <div className={DataCss.detailicon}>
            <FaMapSigns />
          </div>
          <p className={DataCss.detailnumber}>3</p>
          <p className={DataCss.detailtext}>Branches</p>
        </div>
        <div className={DataCss.detailsbox}>
          <div className={DataCss.detailicon}>
            <FaDumbbell />
          </div>
          <p className={DataCss.detailnumber}>232+</p>
          <p className={DataCss.detailtext}>Machines</p>
        </div>
        <div className={DataCss.detailsbox}>
          <div className={DataCss.detailicon}>
            <FaAnchor />
          </div>
          <p className={DataCss.detailnumber}>40+</p>
          <p className={DataCss.detailtext}>Trainers</p>
        </div>
        <div className={DataCss.detailsbox}>
          <div className={DataCss.detailicon}>
            <LiaSwimmingPoolSolid />
          </div>
          <p className={DataCss.detailnumber}>23</p>
          <p className={DataCss.detailtext}>Meters Pool</p>
        </div>
        <div className={DataCss.detailsbox}>
          <div className={DataCss.detailicon}>
            <FaBolt />
          </div>
          <p className={DataCss.detailnumber}>12,889+</p>
          <p className={DataCss.detailtext}>Clients</p>
        </div>
      </div>
    </div>
  );
};

export default DataPage;
