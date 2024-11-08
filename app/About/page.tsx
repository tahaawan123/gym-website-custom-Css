import React from "react";
import Image from "next/image";

// custom Css
import AboutCss from "./About.module.css"





const AboutPage = () => {
  return (
    <div>
      <div className={AboutCss.about}>
        <h2 className={AboutCss.h2}>
          READY TO GET STARTED?
        </h2>
      </div>

      {/* Image Section */}
      <div className={AboutCss.imgdiv}>
        <Image
          src={"/GymClasses.jpg"}
          alt="GymClasses"
          width={600}
          height={400}
          className={AboutCss.imgGymClass}
        />
        <h3 className={AboutCss.h3}>
          OUR CLASSES
        </h3>
        <Image
          src={"/GymTrainer.jpg"}
          alt="GymTrainer"
          width={661}
          height={400}
          className={AboutCss.GymTrainer}
        />
        <h3 className={AboutCss.h3Trainer}>
          OUR TRAINERS
        </h3>
      </div>

      {/* EQUIPMENT */}

      <h2 className={AboutCss.EquipmentHeading}>
        EQUIPMENT
      </h2>
      <div className={AboutCss.divP}>
        <p className={AboutCss.paragraph}>
          At Structure Health & Fitness, we are dedicated to transforming your
          fitness aspirations into reality. Our range of fitness equipment is
          meticulously designed to cater to all your exercise needs, whether you
          are a beginner or a seasoned athlete. From treadmills that propel you
          towards your cardio goals to weightlifting apparatus that build
          strength, our high-quality products ensure a holistic workout
          experience. Join us on the path to a healthier lifestyle, backed by
          the reliability of Structure Health & Fitness.
        </p>
        <Image
          src={"/Doumbble.jpg"}
          alt="GymTrainer"
          width={600}
          height={400}
          className={AboutCss.EquipmentImg}
        />
      </div>

      {/* COMMUNITY CARES */}

      <h2 className={AboutCss.communityHeading}>
        COMMUNITY CARES
      </h2>
      <div className={AboutCss.imgdiv}>
        <Image
          src={"/trainer.jpg"}
          alt="GymTrainer"
          width={600}
          height={400}
          className={AboutCss.communityImg}
        />

        <p className={AboutCss.paragraph}>
          Welcome to our vibrant gym community, where support is the foundation
          of our fitness journey. Join us to experience a welcoming atmosphere
          filled with like-minded individuals. Our monthly challenges keep you
          motivated and striving for your goals, while our online platforms
          proudly showcase your transformation to inspire others.
        </p>
      </div>

      {/* Personal Training At Its Best */}

      <h2 className={AboutCss.personalTrainingHeading}>
        PERSONAL TRAINING AT ITS BEST
      </h2>
      <div className={AboutCss.imgdiv}>
        <p className={AboutCss.paragraph}>
          Our personalized training program is designed to help you achieve your
          fitness goals efficiently. Our expert trainers not only guide you
          through effective workouts but also provide tailored diet charts to
          optimize your progress. Attain your fitness potential with our
          transformative program. Start your journey today.
        </p>
        <Image
          src={"/PersonalTraining.jpg"}
          alt="personalTrainer"
          width={600}
          height={400}
          className={AboutCss.personalTrainingImg}
        />
      </div>

      {/* Our Amenities */}

      <h2 className={AboutCss.AmenitiesHeading}>
        OUR AMENITIES
      </h2>
      <div className={AboutCss.imgdiv}>
        <Image
          src={"/pool.png"}
          alt="pool"
          width={600}
          height={400}
          className={AboutCss.amenitiesImg}
        />

        <p className={AboutCss.paragraph}>
          Experience a gym like no other with our top-notch amenities. Store
          your belongings in secure lockers, then unwind in our pool, jacuzzi,
          and sauna. Treat yourself to a rejuvenating massage at our spa or grab
          a healthy refreshment at our health bar. Our well-maintained shower
          facilities ensure you leave feeling refreshed and ready to conquer the
          day. Discover the perfect balance of fitness and relaxation at
          Structure Health & Fitness.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
