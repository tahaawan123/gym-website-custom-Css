import React from "react";
import Image from "next/image";
import  ReviewsCss  from  "./Reviews.module.css";     // Import the CSS file

const ReviewsPage = () => {
  return (
    <div>
      <div className={ReviewsCss.reviewsContainer}>
        <h1 className={ReviewsCss.title}>TESTIMONIALS</h1>
        <p className={ReviewsCss.reviewText}>
          I Joined Them Last Month And So Far Iam Having A Wonderful Experience
          Here. The Staff Is Friendly And Well Mannered. The Place Is Surrounded
          By Elite-class People As It Is One Of The Most Expensive Gyms And
          Fitness Clubs In Karachi. Iam Having Swimming Sessions There And So
          Far It Is My Best Experience.
        </p>

        {/* Profile Image */}
        <Image
          src={"/taha.jpg"}
          alt={"tahaPic"}
          width={100}
          height={100}
          className={ReviewsCss.profileImage}
        />
        <h3 className={ReviewsCss.profileName}>MUHAMMAD TAHA</h3>
        <p className={ReviewsCss.profileRole}>CROSSFIT PROFESSIONAL</p>
      </div>

      <div>
        <Image
          src={"/image1.jpg"}
          alt="background Image"
          width={500}
          height={500}
          className={ReviewsCss.fullImage}
        />
      </div>

      {/* Gym Facts */}
      <div className={ReviewsCss.gymFacts}>
        <h3 className={ReviewsCss.factsTitle}>GYM FACTS</h3>
        <div className={ReviewsCss.factsContainer}>
          <p className={ReviewsCss.fact}>
            <span className={ReviewsCss.factNumber}>12889</span>
            <br />
            Club Members
          </p>
          <p className={ReviewsCss.fact}>
            <span className={ReviewsCss.factNumber}>40</span>
            <br />
            Club Trainers
          </p>
          <p className={ReviewsCss.fact}>
            <span className={ReviewsCss.factNumber}>50</span>
            <br />
            Fitness Classes
          </p>
          <p className={ReviewsCss.fact}>
            <span className={ReviewsCss.factNumber}>232</span>
            <br />
            Gym Equipment
          </p>
        </div>
      </div>

      {/* Comfort Zone Section */}
      <div className={ReviewsCss.comfortZone}>
        <div className={ReviewsCss.comfortText}>
          <p className={ReviewsCss.comfortTitle}>GET OUT OF YOUR</p>
          <p className={ReviewsCss.comfortSubtitle}>COMFORT ZONE</p>
          <p className={ReviewsCss.comfortDescription}>
            Success usually comes to those who are too busy to be looking for
            it. The body achieves what the mind believes.
          </p>
          <button type="button" className={ReviewsCss.joinButton}>
            JOIN US TODAY
          </button>
        </div>
      </div>

      <div className={ReviewsCss.comfortZoneImage}>
        <Image
          src={"/comfortGym.jpg"}
          alt={"comfort Zone"}
          width={500}
          height={500}
          className={ReviewsCss.fullImage}
        />
      </div>
    </div>
  );
};

export default ReviewsPage;
