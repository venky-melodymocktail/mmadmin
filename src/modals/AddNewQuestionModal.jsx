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

const AddNewQuestionModal = observer(() => {
  const [anim, setAnim] = useState("");
  const [showModal, setShowModal] = useState(
    dl.modalsStatus["AddNewQuestionModal"],
  );
  useEffect(() => {
    if (!dl.modalsStatus["AddNewQuestionModal"]) {
      closeModal();
    } else {
      setShowModal(true);
    }
  }, [dl.modalsStatus["AddNewQuestionModal"]]);

  const closeModal = () => {
    setAnim("");
    setTimeout(() => {
      dl.modalsStatus["AddNewQuestionModal"] = false;
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

          height: "90vh",

          backgroundColor: "rgba(255,255,255,1.00)",

          overflow: "scroll",
        }}
      >
        <div
          id="t18_957_26"
          style={{
            height: 1023,
            width: 797,
            backgroundColor: "rgba(255,255,255,1.00)",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            display: "flex",
            paddingRight: 5,
            position: "relative",
            overflow: "visible",
            borderWidth: 0,
          }}
        >
          <div
            id="t18_950_973"
            style={{
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              display: "flex",
              position: "relative",
              overflow: "visible",
              borderWidth: 0,
            }}
          >
            <div
              id="t18_950_974"
              style={{
                height: 815,
                width: 735,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                display: "flex",
                paddingLeft: 37,
                paddingRight: 25,
                paddingTop: 75,
                position: "relative",
                overflow: "visible",
                borderWidth: 0,
                marginTop: 0,
              }}
            >
              <div
                id="t18_950_975"
                style={{
                  width: 260,
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  display: "flex",
                  paddingRight: 441,
                  paddingTop: 10,
                  paddingBottom: 10,
                  position: "relative",
                  overflow: "visible",
                  borderWidth: 0,
                  marginTop: 0,
                  marginBottom: 15.5,
                }}
              >
                <span
                  id="t18_950_976"
                  style={{
                    fontFamily: "Inter",
                    fontSize: 30,
                    fontWeight: 500,
                    color: "rgba(113,113,113,1)",
                    letterSpacing: 0,
                    lineHeight: "36.30681610107422px",
                    textAlign: "left",
                  }}
                >
                  Add new question
                </span>
              </div>

              <div
                id="t18_950_977"
                style={{
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  display: "flex",
                  position: "relative",
                  overflow: "visible",
                  borderWidth: 0,
                  marginTop: 15.5,
                  marginBottom: 15.5,
                }}
              >
                <div
                  id="t18_950_978"
                  style={{
                    width: 691,
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    display: "flex",
                    paddingRight: 10,
                    paddingTop: 10,
                    paddingBottom: 10,
                    position: "relative",
                    overflow: "visible",
                    borderWidth: 0,
                    marginTop: 0,
                    marginBottom: 1,
                  }}
                >
                  <span
                    id="t18_950_979"
                    style={{
                      fontFamily: "Inter",
                      fontSize: 13,
                      fontWeight: 500,
                      color: "rgba(167,167,167,1)",
                      letterSpacing: 0,
                      lineHeight: "15.732954025268555px",
                      textAlign: "left",
                    }}
                  >
                    Question
                  </span>
                </div>

                <input
                  id="t18_950_980"
                  placeholder="Enter Your Question"
                  style={{
                    height: 88,
                    width: 681,
                    backgroundColor: "rgba(248,246,246,1.00)",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    display: "flex",
                    paddingLeft: 10,
                    paddingRight: 10,
                    paddingTop: 10,
                    paddingBottom: 10,
                    position: "relative",
                    overflow: "visible",
                    borderWidth: 0,
                    marginTop: 1,
                    marginBottom: 0,
                    cursor: "pointer",
                    fontFamily: "Inter",
                    fontSize: 15,
                    color: "rgba(0,0,0,1)",
                    fontWeight: 400,
                    textAlign: "left",
                  }}
                  onChange={(val) => {
                    val = val.target.value;

                    dl.changes.newVisafaq.question = val;
                  }}
                  type="text"
                ></input>
              </div>

              <div
                id="t18_950_982"
                style={{
                  width: 701,
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  display: "flex",
                  position: "relative",
                  overflow: "visible",
                  borderWidth: 0,
                  marginTop: 15.5,
                  marginBottom: 15.5,
                }}
              >
                <div
                  id="t18_950_983"
                  style={{
                    width: 688,
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    display: "flex",
                    paddingRight: 10,
                    paddingTop: 10,
                    paddingBottom: 10,
                    position: "relative",
                    overflow: "visible",
                    borderWidth: 0,
                    marginTop: 0,
                    marginBottom: 1,
                  }}
                >
                  <span
                    id="t18_950_984"
                    style={{
                      fontFamily: "Inter",
                      fontSize: 13,
                      fontWeight: 500,
                      color: "rgba(167,167,167,1)",
                      letterSpacing: 0,
                      lineHeight: "15.732954025268555px",
                      textAlign: "left",
                    }}
                  >
                    Answer
                  </span>
                </div>

                <input
                  id="t18_950_985"
                  placeholder="Enter the answer"
                  style={{
                    height: 88,
                    width: 678,
                    backgroundColor: "rgba(248,246,246,1.00)",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    display: "flex",
                    paddingLeft: 10,
                    paddingRight: 10,
                    paddingTop: 10,
                    paddingBottom: 10,
                    position: "relative",
                    overflow: "visible",
                    borderWidth: 0,
                    marginTop: 1,
                    marginBottom: 0,
                    cursor: "pointer",
                    fontFamily: "Inter",
                    fontSize: 15,
                    color: "rgba(0,0,0,1)",
                    fontWeight: 400,
                    textAlign: "left",
                  }}
                  onChange={(val) => {
                    val = val.target.value;

                    dl.changes.newVisafaq.answer = val;
                  }}
                  type="text"
                ></input>
              </div>

              <div
                id="t18_950_987"
                style={{
                  width: 701,
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  display: "flex",
                  position: "relative",
                  overflow: "visible",
                  borderWidth: 0,
                  marginTop: 15.5,
                  marginBottom: 15.5,
                }}
              >
                <div
                  id="t18_950_988"
                  style={{
                    width: 316,
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    display: "flex",
                    paddingRight: 10,
                    paddingTop: 10,
                    paddingBottom: 10,
                    position: "relative",
                    overflow: "visible",
                    borderWidth: 0,
                    marginTop: 0,
                    marginBottom: 0.5,
                  }}
                >
                  <span
                    id="t18_950_989"
                    style={{
                      fontFamily: "Inter",
                      fontSize: 13,
                      fontWeight: 500,
                      color: "rgba(167,167,167,1)",
                      letterSpacing: 0,
                      lineHeight: "15.732954025268555px",
                      textAlign: "left",
                    }}
                  >
                    Category
                  </span>
                </div>

                <select
                  name="cars"
                  id="t18_950_990"
                  style={{
                    height: 46,
                    width: 326,
                    backgroundColor: "rgba(248,246,246,1.00)",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                    position: "relative",
                    overflow: "visible",
                    borderWidth: 0,
                    marginTop: 0.5,
                    marginBottom: 0,
                    cursor: "pointer",
                  }}
                  onChange={(val) => {
                    val = val.target.value;

                    dl.changes.newVisafaq.category = val;
                  }}
                >
                  <option value="" disabled selected>
                    Select your option
                  </option>
                  {Array.isArray(dl.changes.visaQandACategories) &&
                    dl.changes.visaQandACategories.map((item, index) => {
                      return (
                        <option value={item} selected={item == undefined}>
                          {item}
                        </option>
                      );
                    })}
                </select>
              </div>

              <div
                id="t18_950_993"
                style={{
                  width: 699,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  display: "flex",
                  position: "relative",
                  overflow: "visible",
                  borderWidth: 0,
                  marginTop: 15.5,
                  marginBottom: 0,
                }}
              >
                <span
                  id="t18_950_994"
                  style={{
                    fontFamily: "Inter",
                    fontSize: 15,
                    fontWeight: 500,
                    color: "rgba(113,113,113,1)",
                    letterSpacing: 0,
                    lineHeight: "18.15340805053711px",
                    textAlign: "left",
                    marginLeft: 0,
                    marginRight: 10.5,
                  }}
                >
                  Active
                </span>

                <MaterialSwitch
                  value={true}
                  backgroundColor={"rgba(186,15,23,1.00)"}
                  onChange={(val) => {
                    if (val == true) {
                      dl.changes.newVisafaq.status = "active";
                    } else {
                      dl.changes.newVisafaq.status = "inactive";
                    }
                  }}
                />
              </div>
            </div>

            <div
              id="t18_950_999"
              style={{
                height: 133,
                width: 797,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                position: "relative",
                overflow: "visible",
                borderWidth: 0,
                borderColor: "rgba(207,206,206,1)",
                borderTopWidth: 1,
                borderStyle: "solid",
                marginBottom: 0,
              }}
            >
              <div
                id="t18_950_1000"
                style={{
                  height: 20,
                  width: 105,
                  borderRadius: 100,
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
                  borderWidth: 1,
                  borderColor: "rgba(186,15,23,1)",
                  borderStyle: "solid",
                  marginLeft: 0,
                  marginRight: 19.5,
                  cursor: "pointer",
                }}
                onClick={(e) => {
                  dl.functions.modalsPlugin.closeModal("addNewQuestion");
                }}
              >
                <span
                  id="t18_950_1001"
                  style={{
                    fontFamily: "Inter",
                    fontSize: 17,
                    fontWeight: 500,
                    color: "rgba(186,15,23,1)",
                    letterSpacing: 0,
                    lineHeight: "20.573863983154297px",
                    textAlign: "left",
                  }}
                >
                  Cancel
                </span>
              </div>

              <div
                id="t18_950_1002"
                style={{
                  height: 20,
                  width: 105,
                  borderRadius: 100,
                  backgroundColor: "rgba(186,15,23,1.00)",
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
                  marginLeft: 19.5,
                  marginRight: 0,
                  cursor: "pointer",
                }}
                onClick={(e) => {
                  var body = dl.changes.newVisafaq;
                  dl.functions.createVisafaq(body);
                  dl.functions.modalsPlugin.closeModal("addNewQuestion");
                }}
              >
                <span
                  id="t18_950_1003"
                  style={{
                    fontFamily: "Inter",
                    fontSize: 17,
                    fontWeight: 500,
                    color: "rgba(255,255,255,1)",
                    letterSpacing: 0,
                    lineHeight: "20.573863983154297px",
                    textAlign: "left",
                  }}
                >
                  Save
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
});
export default AddNewQuestionModal;
