import React from "react";
import Image from "next/image";
import FormCss from "./Form.module.css";   // Import the new CSS file

const FormPage = () => {
  return (
    <div className={FormCss.formPage}>
      <div className={FormCss.textContainer}>
        <p className={FormCss.mainText}>
          WE ARE NOT LIKE ANY OTHER GYM IN PAKISTAN
        </p>
        <p className={FormCss.subText}>
          Whether you want to get in shape with a personalized fitness training
          plan, break a sweat in a team environment, or reach peak athletic
          performance, our group of expert fitness coaches and community members
          are here to help you be your best self, every day.
        </p>
      </div>

      {/* Gym Form */}
      <div className="">
      <div className={FormCss.formContainer}>
        <p className={FormCss.offerText}>
          Special Trial Offer
        </p>
        <div className={FormCss.formBox}>
          <p className={FormCss.trialInfo}>
            Sign up to begin your 3-day trial membership for only 3,000 PKR
          </p>
          <div className={FormCss.form}>
          <form action="./form" >
            <input type="text" placeholder="First Name" />
            <br /><br />
            <input type="text" placeholder="Last Name" />
            <br /><br />
            <input type="email" placeholder="Email" />
            <br /><br />
            <input type="tel" placeholder="Phone Number" />
            <br /><br />
            <button type="button" className={FormCss.submitButton}>
              SUBMIT
            </button>
          </form>
          </div>
        </div>
      </div>
      </div>
      <div className={FormCss.imageContainer}>
        <Image
          src={"/pic.jpg"}
          alt={"machineimage"}
          width={500}
          height={500}
          className={FormCss.fullImage}
        />
      </div>
    </div>
  );
};

export default FormPage;
