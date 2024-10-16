import { useState } from "react";
import "./app.css";

const reportPreview = ({
  calls,
  answered,
  followUp,
  emailSent,
  appointments,
  outOfService
}) => {
  const [buttonText, setButtonText] = useState("Copy");
  const copyText = () => {
    const reportElement = document.getElementById("report");
    const paragraphs = reportElement.getElementsByTagName("p");
    const text = Array.from(paragraphs)
      .map((p) => p.textContent)
      .join("\n");
    navigator.clipboard.writeText(text);
    setButtonText("Copied");
    setTimeout(() => {
      setButtonText("Copy");
    }, 1500);
  };

  const clearReport = () => {
    localStorage.removeItem("report");
    window.location.reload();
  };

  return (
    <div className="reportContainer">
      <h1>Today's report</h1>
      <div id="report">
        <p>Calls made {calls}</p>
        <p>Answered {answered}</p>
        <p>Follow up {followUp}</p>
        <p>Email sent {emailSent}</p>
        <p>Appointmens {appointments}</p>
        <p>Out Of Service {outOfService}</p>
        <div className="reportButtonContainer">
          <button className="reportButton" onClick={copyText}>
            {buttonText}
          </button>
          <button className="reportButton" onClick={clearReport}>
            Clear Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default reportPreview;
