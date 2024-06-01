import React, { useEffect, useState } from "react";
import "./app.css";
import ReportPreview from "./ReportPreview.jsx";

const StatsContainer = () => {
  const [callsMade, setCallsMade] = useState(() => {
    const data = localStorage.getItem("report");
    return data ? JSON.parse(data).callsMade : 0;
  });
  const [answered, setAnswered] = useState(() => {
    const data = localStorage.getItem("report");
    return data ? JSON.parse(data).answered : 0;
  });
  const [followUp, setFollowUp] = useState(() => {
    const data = localStorage.getItem("report");
    return data ? JSON.parse(data).followUp : 0;
  });
  const [emailSent, setEmailSent] = useState(() => {
    const data = localStorage.getItem("report");
    return data ? JSON.parse(data).emailSent : 0;
  });
  const [appointments, setAppointments] = useState(() => {
    const data = localStorage.getItem("report");
    return data ? JSON.parse(data).appointments : 0;
  });

  useEffect(() => {
    localStorage.setItem(
      "report",
      JSON.stringify({
        callsMade: callsMade,
        answered: answered,
        followUp: followUp,
        emailSent: emailSent,
        appointments: appointments,
      })
    );
  }, [callsMade, answered, followUp, emailSent, appointments]);

  useEffect(() => {
    const data = localStorage.getItem("report");
    if (data) {
      const parsedData = JSON.parse(data);
      setCallsMade(parsedData.callsMade || 0);
      setAnswered(parsedData.answered || 0);
      setFollowUp(parsedData.followUp || 0);
      setEmailSent(parsedData.emailSent || 0);
      setAppointments(parsedData.appointments || 0);
    }
  }, []);

  return (
    <div className="appContainer">
      <div className="statsContainer">
        <div className="statContainer">
          <h1>Calls</h1>
          <p>{callsMade}</p>
          <button onClick={() => setCallsMade(callsMade + 1)}>+1</button>
        </div>
        <div className="statContainer">
          <h1>Answered</h1>
          <p>{answered}</p>
          <button onClick={() => setAnswered(answered + 1)}>+1</button>
        </div>
        <div className="statContainer">
          <h1>Follow up</h1>
          <p>{followUp}</p>
          <button onClick={() => setFollowUp(followUp + 1)}>+1</button>
        </div>
        <div className="statContainer">
          <h1>Email sent</h1>
          <p>{emailSent}</p>
          <button onClick={() => setEmailSent(emailSent + 1)}>+1</button>
        </div>
        <div className="statContainer">
          <h1>Appoinments</h1>
          <p>{appointments}</p>
          <button onClick={() => setAppointments(appointments + 1)}>+1</button>
        </div>
      </div>
      <ReportPreview
        calls={callsMade}
        answered={answered}
        followUp={followUp}
        emailSent={emailSent}
        appointments={appointments}
      />
    </div>
  );
};

export default StatsContainer;
