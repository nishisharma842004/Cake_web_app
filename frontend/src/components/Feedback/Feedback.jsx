import React, { useState } from "react";
import axios from "axios";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    rating: 3,
  });

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await axios.post(
        "https://testingapp-mx0n.onrender.com/api/v1/admin/contact",
        formData
        // Removed Authorization header, assuming it’s not required
      );

      setSuccess(
        response.data.message ||
          "Thank you so much for giving your valuable feedback."
      );

      setFormData({
        name: "",
        email: "",
        message: "",
        rating: 3,
      });
    } catch (err) {
      console.error(err.response?.data || err.message);
      setError(
        err.response?.data?.message || "Something went wrong. Please try again."
      );
    }
  };

  return (
    <section className="feedbackClass">
      <main style={{ maxWidth: "500px", margin: "auto", padding: "1rem" }}>
        <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>
          Give Your Feedback
        </h2>
        <form onSubmit={handleSubmit}>
          <table style={{ width: "100%" }}>
            <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{ width: "100%", padding: "0.5rem" }}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{ width: "100%", padding: "0.5rem" }}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    style={{
                      width: "100%",
                      padding: "0.5rem",
                      resize: "vertical",
                    }}
                  ></textarea>
                </td>
              </tr>
              <tr>
                <td>
                  <label style={{ fontWeight: "bold" }}>
                    Rating:
                    <select
                      name="rating"
                      value={formData.rating}
                      onChange={handleChange}
                      style={{
                        marginLeft: "1rem",
                        padding: "0.3rem",
                        fontWeight: "normal",
                      }}
                    >
                      <option value={1}>1 ⭐</option>
                      <option value={2}>2 ⭐</option>
                      <option value={3}>3 ⭐</option>
                      <option value={4}>4 ⭐</option>
                      <option value={5}>5 ⭐</option>
                    </select>
                  </label>
                </td>
              </tr>
              <tr>
                <td>
                  <button
                    type="submit"
                    style={{
                      padding: "0.7rem 1.5rem",
                      marginTop: "1rem",
                      width: "100%",
                      backgroundColor: "#4CAF50",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Submit
                  </button>
                </td>
              </tr>
              <tr>
                <td style={{ paddingTop: "1rem" }}>
                  {success && (
                    <p style={{ color: "green", fontWeight: "bold" }}>
                      {success}
                    </p>
                  )}
                  {error && (
                    <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </main>
    </section>
  );
};

export default FeedbackForm;
