import React, { useState } from "react";
import styles from "./Form.module.css";
import ListRender from "./ListRender";

const Form = () => {
  const [records, setRecords] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    organization: "",
    organizationSize: "",
    industry: "",
    agree: false,
  });

  const handleChange = (e) => {
    // console.log(e.target)
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    // console.log("Form submitted", formData);
    setRecords([formData, ...records]);
  };
  //   console.log(records);
  return (
    <>
      <form onSubmit={handleSubmit} className={styles.signup_form}>
        <h2>Try Sign free for 14 days</h2>
        <p>
          Already have a Formstack account?{" "}
          <a href="/start-trial">Start your trial in app</a>
        </p>
        <div>
          <label>
            First Name
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Last Name
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Work Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Organization Name
            <input
              type="text"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Organization Size
            <select
              name="organizationSize"
              value={formData.organizationSize}
              onChange={handleChange}
              required
            >
              <option value="">-- Select --</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Industry
            <select
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              required
            >
              <option value="">-- Select --</option>
              <option value="tech">Tech</option>
              <option value="finance">Finance</option>
              <option value="healthcare">Healthcare</option>
              <option value="education">Education</option>
              <option value="other">Other</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
            />
            I understand and agree to the{" "}
            <a href="/privacy-policy">Formstack Privacy Policy</a>,{" "}
            <a href="/software-services-agreement">
              Software Services Agreement
            </a>
            , and <a href="/acceptable-use-policy">Acceptable Use Policy</a>.
          </label>
        </div>
        <button type="submit">Start free trial</button>
      </form>
      <ListRender users={records} />
    </>
  );
};

export default Form;
