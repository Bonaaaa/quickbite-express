// ModalsForm.jsx
import { useState } from "react";
import styles from "./Modals.module.css";
import { X } from "lucide-react";

export default function ModalsForm({ userData, setUserData }) {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleGenderChange = (e) => {
    setUserData((prev) => ({
      ...prev,
      gender: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", userData);
    // Process form data here
    setIsModalOpen(false);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  if (!isModalOpen) {
    return (
      <div className={styles.welcomeContainer}>
        <div className={styles.welcomeContent}>
          <h1 className={styles.welcomeTitle}>
            Welcome {userData.name || "Guest"}!
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {/* Background content */}
      <div className={styles.welcomeContainer}>
        <div className={styles.welcomeContent}>
          <h1 className={styles.welcomeTitle}>
            Welcome {userData.name || "Guest"}!
          </h1>
        </div>
      </div>

      {/* Modal Overlay */}
      <div className={styles.modalOverlay}>
        {/* Modal Content */}
        <div className={styles.modalContent}>
          {/* Modal Header */}
          <div className={styles.modalHeader}>
            <button className={styles.closeButton} onClick={handleClose}>
              <X />
            </button>
            <p className={styles.modalSubtitle}>🍔 QuickBite Express</p>
          </div>

          {/* Modal Body */}
          <div className={styles.modalBody}>
            {/* Name Field */}
            <div className={styles.formField}>
              <label htmlFor="name" className={styles.label}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={userData.name}
                onChange={handleInputChange}
                className={styles.input}
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email Field */}
            <div className={styles.formField}>
              <label className={styles.label}>Gender</label>
              <div className={styles.radioGroup}>
                <div className={styles.radioOption}>
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                    checked={userData.gender === "male"}
                    onChange={handleGenderChange}
                    className={styles.radioInput}
                  />
                  <label htmlFor="male" className={styles.radioLabel}>
                    Male
                  </label>
                </div>
                <div className={styles.radioOption}>
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    checked={userData.gender === "female"}
                    onChange={handleGenderChange}
                    className={styles.radioInput}
                  />
                  <label htmlFor="female" className={styles.radioLabel}>
                    Female
                  </label>
                </div>
              </div>
            </div>

            {/* Form Actions */}
            <div className={styles.formActions}>
              <button className={styles.skipButton} onClick={handleClose}>
                Skip for now
              </button>
              <button className={styles.submitButton} onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
