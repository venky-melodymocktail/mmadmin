import React, { useEffect } from "react";
import dl from "../datalayer/state";
import Modal from "@mui/material/Modal";
import { observer } from "mobx-react";
import OtpInput from "react-otp-input";
import Lottie from "react-lottie";
import ReCAPTCHA from "react-google-recaptcha";

import { useState } from "react";
import MaterialSwitch from "../components/main/MaterialSwitch.jsx";
import MaterialSelect from "../components/main/MaterialSelect.jsx";
import ReactDraft from "../components/main/ReactDraft.jsx";
import MaterialMenu from "../components/main/MaterialMenu.jsx";
import MMPagination from "../components/main/MMPagination.jsx";
import MMFilter from "../components/main/MMFilter.jsx";
import MaterialDate from "../components/main/MaterialDate.jsx";
import MaterialAutoComplete from "../components/main/MaterialAutoComplete.jsx";
import MaterialRating from "../components/main/MaterialRating.jsx";
import popupCross from "../assets/popup_cross.svg";
import onLoad from "../datalayer/onload.js";

const VisaQuestionAnswerModal = observer(() => {
  const [anim, setAnim] = useState("");
  const [showModal, setShowModal] = useState(
    dl.modalsStatus["VisaQuestionAnswerModal"]
  );
  useEffect(() => {
    if (!dl.modalsStatus["VisaQuestionAnswerModal"]) {
      closeModal();
    } else {
      setShowModal(true);
    }
  }, [dl.modalsStatus["VisaQuestionAnswerModal"]]);

  const closeModal = () => {
    setAnim("");
    setTimeout(() => {
      dl.modalsStatus["VisaQuestionAnswerModal"] = false;
      setAnim("");
      setShowModal(false);
    }, 0);
  };

  return (
    <Modal
      className={anim}
      open={showModal}
      disableAutoFocus={true}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      onClose={() => {
        closeModal();
      }}
    >
      <div
        className="popupModal"
        style={{
          position: "absolute",

          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",

          overflow: "scroll",
        }}
      >
        <div
          id="t18_1340_504"
          className="popupModal"
          style={{
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            display: "flex",
            // paddingBottom: 5,
            position: "relative",
            // overflow: "visible",
            borderWidth: 0,
            maxHeight: "90vh",
            overflow: "scroll",
            overflowX: "hidden",
            borderRadius: 20,
          }}
        >
          <div
            id="t18_1340_505"
            style={{
              width: 700,

              backgroundColor: "rgba(248,246,246,1.00)",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              paddingLeft: 10,
              paddingRight: 10,
              paddingTop: 20,
              paddingBottom: 25,
              position: "relative",

              borderWidth: 0,
            }}
          >
            <div
              id="t18_1340_527"
              style={{
                width: "90%",
                flexDirection: "row",
                alignItems: "flex-start",
                display: "flex",
                paddingLeft: 10,
                paddingRight: 10,
                // paddingTop: 10,
                // paddingBottom: 10,
                position: "relative",
                overflow: "visible",
                borderWidth: 0,
                marginTop: 0,
                marginBottom: 5,
              }}
            >
              <img
                id="t18_1340_526"
                style={{
                  height: 35,
                  width: 35,
                  display: "flex",
                  borderWidth: 0,
                  cursor: "pointer",
                }}
                onClick={(e) => {
                  dl.functions.modalsPlugin.closeModal(
                    "VisaQuestionAnswerModal"
                  );
                }}
                src={popupCross}
              />
            </div>

            <div
              id="t18_1340_506"
              style={{
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                display: "flex",
                position: "relative",
                overflow: "visible",
                borderWidth: 0,
                marginTop: 5,
                marginBottom: 0,
              }}
            >
              <div
                id="t18_1340_507"
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  display: "flex",
                  position: "relative",
                  overflow: "visible",
                  borderWidth: 0,
                  marginTop: 0,
                  marginBottom: 25,
                }}
              >
                <div
                  id="t18_1340_508"
                  style={{
                    width: "90%",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    display: "flex",
                    position: "relative",
                    overflow: "visible",
                    borderWidth: 0,
                    marginTop: 0,
                    marginBottom: 5.5,
                  }}
                >
                  <a
                    style={{
                      fontFamily: "Inter",
                      fontSize: 15,
                      fontWeight: 500,
                      color: "rgba(113,113,113,1)",
                      letterSpacing: 0,
                      lineHeight: "18.15340805053711px",
                      textAlign: "left",
                    }}
                  >
                    {" "}
                    Question:
                  </a>
                  <div
                    id="t18_1340_509"
                    style={{
                      width: "100%",
                      flexDirection: "row",
                      //   alignItems: "center",
                      //   justifyContent: "center",
                      display: "flex",
                      //   paddingLeft: 10,
                      //   paddingRight: 10,
                      paddingTop: 10,
                      paddingBottom: 10,
                      position: "relative",
                      overflow: "visible",
                      borderWidth: 0,
                    }}
                  >
                    <span
                      id="t18_1340_510"
                      style={{
                        fontFamily: "Inter",
                        fontSize: 24,
                        fontWeight: 600,
                        color: "rgba(0,0,0,1)",
                        letterSpacing: 0,
                        lineHeight: "29.045454025268555px",
                        textAlign: "left",
                      }}
                    >
                      {dl.changes.visaQuestionAnswerModalvals.fullQuestion}
                    </span>
                  </div>
                </div>

                <div
                  id="t18_1340_515"
                  style={{
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    display: "flex",
                    position: "relative",
                    overflow: "visible",
                    width: "90%",
                    borderWidth: 0,
                    marginTop: 10.5,
                    marginBottom: 0,
                  }}
                >
                  <div
                    id="t18_1340_516"
                    style={{
                      height: 15,
                      //   width: "90%",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      display: "flex",
                      paddingTop: 0,
                      paddingBottom: 10,
                      position: "relative",
                      overflow: "visible",
                      borderWidth: 0,
                      marginTop: 0,
                    }}
                  >
                    <span
                      id="t18_1340_517"
                      style={{
                        fontFamily: "Inter",
                        fontSize: 15,
                        fontWeight: 500,
                        color: "rgba(113,113,113,1)",
                        letterSpacing: 0,
                        lineHeight: "18.15340805053711px",
                        textAlign: "left",
                      }}
                    >
                      Answer:
                    </span>
                  </div>

                  <textarea
                    id="t18_1340_518"
                    value={dl.changes.visaQuestionAnswerModalvals.answer}
                    style={{
                      height: 150,
                      paddingTop: 10,
                      paddingBottom: 10,
                      width: "96%",
                      backgroundColor: "rgba(255,255,255,1.00)",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      display: "flex",
                      paddingLeft: 23,
                      paddingRight: 19,
                      position: "relative",
                      overflow: "visible",
                      borderWidth: 0,
                      borderColor: "rgb(13, 130, 17)",
                      borderLeftWidth: 6,
                      borderStyle: "solid",
                      marginBottom: 0,
                      cursor: "pointer",
                      fontSize: 20,
                      color: "#0b870f",
                      fontWeight: "600",
                    }}
                    // multiple:true
                    onChange={(val) => {
                      val = val.target.value;
                      console.log(val);
                      dl.changes.visaQuestionAnswerModalvals.answer = val;
                    }}
                    type="text"
                  ></textarea>
                </div>
              </div>

              <div
                id="t18_1340_522"
                style={{
                  width: "100%",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  paddingLeft: 10,
                  paddingRight: 10,
                  position: "relative",
                  overflow: "visible",
                  borderWidth: 0,
                  marginTop: 25,
                  marginBottom: 0,
                }}
              >
                <div
                  id="t18_1340_523"
                  style={{
                    height: 21,
                    paddingInline: 25,
                    backgroundColor: dl.changes.visaQuestionAnswerModalvals
                      .answered
                      ? "rgba(186,15,23,1.00)"
                      : "rgb(13, 130, 17)",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                    paddingLeft: 10,
                    paddingRight: 10,
                    paddingTop: 10,
                    paddingBottom: 10,
                    position: "relative",
                    overflow: "visible",
                    borderWidth: 0,
                    cursor: "pointer",
                    borderRadius: 5,
                  }}
                  onClick={(e) => {
                    dl.functions.setVisaQuestionAnswer();
                  }}
                >
                  <span
                    id="t18_1340_524"
                    style={{
                      fontFamily: "Inter",
                      fontSize: 18,
                      fontWeight: 700,
                      color: "rgba(255,255,255,1)",
                      letterSpacing: 0,
                      lineHeight: "21.784090042114258px",
                      textAlign: "left",
                    }}
                  >
                    {dl.changes.visaQuestionAnswerModalvals.answered
                      ? "Remove Answer"
                      : "Show Answer"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
});
export default VisaQuestionAnswerModal;
