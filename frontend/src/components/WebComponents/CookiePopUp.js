import React from "react";
import "./PopUp.scss";
// Basic
// import CookieConsent from "react-cookie-consent";
import { Link } from 'react-router-dom';


// Option
import CookieConsent, { Cookies } from "react-cookie-consent";

const Popup = () => {
  return (
    <div className="PopUp">
      <CookieConsent
        disableStyles
        location="none"
        cookieName="PrivacyPolicy"
        overlay
        overlayClasses="overlayclass"
      >
        <h1>Dressense Privacy Policy </h1>
        <h2>We value your privacy</h2>
        When you use Dressense, we and our partners use cookies and other methods to process your personal data in order to customize content and your site experience, analyze our traffic, understand where our visitors are coming from, and to show you personalized content.
        Please click “I Agree” to accept this use of your data. 
        Alternatively, you may select, “Set My Preferences” to accept (or reject) specific categories of data processing. 
        For more information on how we process your personal data, or to update your preferences at any time, please visit our Privacy Policy.
        <Link to ='/home/settings' >
          <button> Set My Preferences</button>
        </Link>
      </CookieConsent>
    </div>
  );
};

export default Popup;