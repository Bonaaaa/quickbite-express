// ModalsForm.jsx
import { useState } from "react";
import styles from "./Modals.module.css";
import { X } from "lucide-react";

export default function ModalsForm() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleGenderChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      gender: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
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
            Welcome {formData.name || "Guest"}!
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {/* Background content */}
      <div className={styles.backgroundContent}>
        <h1 className={styles.mainTitle}>My Website</h1>
        <p className={styles.mainText}>
          This is the main content of the website.
        </p>
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
            <p className={styles.modalSubtitle}>
              Please fill out this form to continue
            </p>
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
                value={formData.name}
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
                    checked={formData.gender === "male"}
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
                    checked={formData.gender === "female"}
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
