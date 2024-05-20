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

const AddNewExpertModal = observer(() => {
  const [anim, setAnim] = useState("");
  const [showModal, setShowModal] = useState(
    dl.modalsStatus["AddNewExpertModal"],
  );
  useEffect(() => {
    if (!dl.modalsStatus["AddNewExpertModal"]) {
      closeModal();
    } else {
      setShowModal(true);
    }
  }, [dl.modalsStatus["AddNewExpertModal"]]);

  const closeModal = () => {
    setAnim("");
    setTimeout(() => {
      dl.modalsStatus["AddNewExpertModal"] = false;
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
          id="t18_957_32"
          style={{
            height: 1024,
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
            id="t18_950_1395"
            style={{
              height: 1024,
              backgroundColor: "rgba(255,255,255,1.00)",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              position: "relative",
              overflow: "visible",
              borderWidth: 0,
            }}
          >
            <div
              id="t18_950_1396"
              style={{
                height: 875,
                width: 766,
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                display: "flex",
                paddingLeft: 31,
                paddingTop: 21,
                paddingBottom: 20,
                position: "relative",
                overflow: "visible",
                borderWidth: 0,
                marginTop: 0,
              }}
            >
              <div
                id="t18_950_1397"
                style={{
                  width: 693,
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  display: "flex",
                  paddingTop: 10,
                  paddingBottom: 10,
                  position: "relative",
                  overflow: "visible",
                  borderWidth: 0,
                  marginTop: 0,
                  marginBottom: 3.5,
                }}
              >
                <div
                  id="t18_950_1398"
                  style={{
                    height: 36,
                    width: 228,
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    display: "flex",
                    position: "relative",
                    overflow: "visible",
                    borderWidth: 0,
                  }}
                >
                  <span
                    id="t18_950_1399"
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
                    Add new expert
                  </span>
                </div>
              </div>

              <div
                id="t18_950_1400"
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  display: "flex",
                  position: "relative",
                  overflow: "visible",
                  borderWidth: 0,
                  marginTop: 3.5,
                  marginBottom: 3.5,
                }}
              >
                <div
                  id="t18_950_1401"
                  style={{
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    display: "flex",
                    position: "relative",
                    overflow: "visible",
                    borderWidth: 0,
                    marginLeft: 0,
                    marginRight: 21,
                  }}
                >
                  <div
                    id="t18_950_1402"
                    style={{
                      width: 315,
                      flexDirection: "row",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      display: "flex",
                      paddingRight: 10,
                      paddingBottom: 10,
                      position: "relative",
                      overflow: "visible",
                      borderWidth: 0,
                      marginTop: 0,
                      marginBottom: 1,
                    }}
                  >
                    <span
                      id="t18_950_1403"
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
                      Name
                    </span>
                  </div>

                  <input
                    id="t18_950_1404"
                    placeholder="Enter Name"
                    value={dl.changes.expertField.name}
                    style={{
                      height: 26,
                      width: 305,
                      backgroundColor: "rgba(248,246,246,1.00)",
                      flexDirection: "row",
                      alignItems: "center",
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

                      dl.changes.expertField.name = val;
                    }}
                    type="text"
                  ></input>
                </div>

                <div
                  id="t18_950_1406"
                  style={{
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    display: "flex",
                    position: "relative",
                    overflow: "visible",
                    borderWidth: 0,
                    marginLeft: 21,
                    marginRight: 0,
                  }}
                >
                  <div
                    id="t18_950_1407"
                    style={{
                      width: 315,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      display: "flex",
                      paddingRight: 10,
                      paddingBottom: 10,
                      position: "relative",
                      overflow: "visible",
                      borderWidth: 0,
                      marginTop: 0,
                      marginBottom: 1,
                    }}
                  >
                    <span
                      id="t18_950_1408"
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
                      Email
                    </span>
                  </div>

                  <input
                    id="t18_950_1409"
                    placeholder="Enter Email"
                    value={dl.changes.expertField.email}
                    style={{
                      height: 26,
                      width: 305,
                      backgroundColor: "rgba(248,246,246,1.00)",
                      flexDirection: "row",
                      alignItems: "center",
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

                      dl.changes.expertField.email = val;
                    }}
                    type="text"
                  ></input>
                </div>
              </div>

              <div
                id="t18_950_1411"
                style={{
                  width: 693,
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  display: "flex",
                  position: "relative",
                  overflow: "visible",
                  borderWidth: 0,
                  marginTop: 3.5,
                  marginBottom: 3.5,
                }}
              >
                <div
                  id="t18_950_1412"
                  style={{
                    width: 325,
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    display: "flex",
                    paddingBottom: 10,
                    position: "relative",
                    overflow: "visible",
                    borderWidth: 0,
                    marginTop: 0,
                  }}
                >
                  <span
                    id="t18_950_1413"
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
                    Phone
                  </span>
                </div>

                <div
                  id="t18_950_1414"
                  style={{
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    display: "flex",
                    position: "relative",
                    overflow: "visible",
                    borderWidth: 0,
                    marginBottom: 0,
                  }}
                >
                  <input
                    id="t18_950_1415"
                    value={dl.changes.expertField.phone}
                    style={{
                      height: 26,
                      width: 301,
                      backgroundColor: "rgba(248,246,246,1.00)",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      display: "flex",
                      paddingLeft: 14,
                      paddingRight: 10,
                      paddingTop: 10,
                      paddingBottom: 10,
                      position: "relative",
                      overflow: "visible",
                      borderWidth: 0,
                      marginLeft: 0,
                      marginRight: 21,
                      cursor: "pointer",
                    }}
                    onChange={(val) => {
                      val = val.target.value;

                      dl.changes.expertField.phone = val;
                    }}
                    type="text"
                  ></input>

                  <div
                    id="t18_950_1416"
                    style={{
                      width: 326,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      display: "flex",
                      position: "relative",
                      overflow: "visible",
                      borderWidth: 0,
                      marginLeft: 21,
                      marginRight: 0,
                    }}
                  >
                    <span
                      id="t18_950_1417"
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
                      value={dl.changes.expertField.status}
                      backgroundColor={"rgba(186,15,23,1.00)"}
                      onChange={(val) => {
                        dl.changes.expertField.status = val;
                      }}
                    />
                  </div>
                </div>
              </div>

              <div
                id="t18_950_1420"
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  display: "flex",
                  position: "relative",
                  overflow: "visible",
                  borderWidth: 0,
                  marginTop: 3.5,
                  marginBottom: 0,
                }}
              >
                <div
                  id="t18_950_1421"
                  style={{
                    width: 691,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    display: "flex",
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
                    id="t18_950_1422"
                    style={{
                      fontFamily: "Inter",
                      fontSize: 18,
                      fontWeight: 500,
                      color: "rgba(113,113,113,1)",
                      letterSpacing: 0,
                      lineHeight: "21.784090042114258px",
                      textAlign: "left",
                    }}
                  >
                    Select slots
                  </span>
                </div>

                <div
                  id="t18_950_1423"
                  style={{
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    display: "flex",
                    position: "relative",
                    overflow: "visible",
                    borderWidth: 0,
                    marginTop: 1,
                    marginBottom: 1,
                  }}
                >
                  <div
                    id="t18_950_1424"
                    style={{
                      width: 691,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      display: "flex",
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
                      id="t18_950_1425"
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
                      Monday
                    </span>
                  </div>

                  <MaterialSelect
                    options={dl.changes.timeSlots}
                    style={{
                      height: 26,
                      width: 651,
                      backgroundColor: "rgba(248,246,246,1.00)",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      justifyContent: "center",
                      display: "flex",
                      paddingLeft: 10,
                      paddingRight: 30,
                      paddingTop: 10,
                      paddingBottom: 10,
                      position: "relative",
                      overflow: "visible",
                      borderWidth: 0,
                      marginTop: 0.5,
                      marginBottom: 0,
                      cursor: "pointer",
                    }}
                    value={dl.changes.expertField.monday}
                    onChange={(val) => {
                      dl.changes.expertField.monday = val;
                    }}
                  />
                </div>

                <div
                  id="t18_950_1428"
                  style={{
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    display: "flex",
                    position: "relative",
                    overflow: "visible",
                    borderWidth: 0,
                    marginTop: 1,
                    marginBottom: 1,
                  }}
                >
                  <div
                    id="t18_950_1429"
                    style={{
                      width: 681,
                      flexDirection: "row",
                      alignItems: "center",
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
                      id="t18_950_1430"
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
                      Tuesday
                    </span>
                  </div>

                  <MaterialSelect
                    options={dl.changes.timeSlots}
                    style={{
                      height: 26,
                      width: 651,
                      backgroundColor: "rgba(248,246,246,1.00)",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      justifyContent: "center",
                      display: "flex",
                      paddingLeft: 10,
                      paddingRight: 30,
                      paddingTop: 10,
                      paddingBottom: 10,
                      position: "relative",
                      overflow: "visible",
                      borderWidth: 0,
                      marginTop: 0.5,
                      marginBottom: 0,
                      cursor: "pointer",
                    }}
                    value={dl.changes.expertField.tuesday}
                    onChange={(val) => {
                      dl.changes.expertField.tuesday = val;
                    }}
                  />
                </div>

                <div
                  id="t18_950_1433"
                  style={{
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    display: "flex",
                    position: "relative",
                    overflow: "visible",
                    borderWidth: 0,
                    marginTop: 1,
                    marginBottom: 1,
                  }}
                >
                  <div
                    id="t18_950_1434"
                    style={{
                      width: 681,
                      flexDirection: "row",
                      alignItems: "center",
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
                      id="t18_950_1435"
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
                      Wednesday
                    </span>
                  </div>

                  <MaterialSelect
                    options={dl.changes.timeSlots}
                    style={{
                      height: 26,
                      width: 651,
                      backgroundColor: "rgba(248,246,246,1.00)",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      justifyContent: "center",
                      display: "flex",
                      paddingLeft: 10,
                      paddingRight: 30,
                      paddingTop: 10,
                      paddingBottom: 10,
                      position: "relative",
                      overflow: "visible",
                      borderWidth: 0,
                      marginTop: 0.5,
                      marginBottom: 0,
                      cursor: "pointer",
                    }}
                    value={dl.changes.expertField.wednesday}
                    onChange={(val) => {
                      dl.changes.expertField.wednesday = val;
                    }}
                  />
                </div>

                <div
                  id="t18_950_1438"
                  style={{
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    display: "flex",
                    position: "relative",
                    overflow: "visible",
                    borderWidth: 0,
                    marginTop: 1,
                    marginBottom: 1,
                  }}
                >
                  <div
                    id="t18_950_1439"
                    style={{
                      width: 681,
                      flexDirection: "row",
                      alignItems: "center",
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
                      id="t18_950_1440"
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
                      Thursday
                    </span>
                  </div>

                  <MaterialSelect
                    options={dl.changes.timeSlots}
                    style={{
                      height: 26,
                      width: 651,
                      backgroundColor: "rgba(248,246,246,1.00)",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      justifyContent: "center",
                      display: "flex",
                      paddingLeft: 10,
                      paddingRight: 30,
                      paddingTop: 10,
                      paddingBottom: 10,
                      position: "relative",
                      overflow: "visible",
                      borderWidth: 0,
                      marginTop: 0.5,
                      marginBottom: 0,
                      cursor: "pointer",
                    }}
                    value={dl.changes.expertField.thrusday}
                    onChange={(val) => {
                      dl.changes.expertField.thrusday = val;
                    }}
                  />
                </div>

                <div
                  id="t18_950_1443"
                  style={{
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    display: "flex",
                    position: "relative",
                    overflow: "visible",
                    borderWidth: 0,
                    marginTop: 1,
                    marginBottom: 1,
                  }}
                >
                  <div
                    id="t18_950_1444"
                    style={{
                      width: 681,
                      flexDirection: "row",
                      alignItems: "center",
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
                      id="t18_950_1445"
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
                      Friday
                    </span>
                  </div>

                  <MaterialSelect
                    options={dl.changes.timeSlots}
                    style={{
                      height: 26,
                      width: 651,
                      backgroundColor: "rgba(248,246,246,1.00)",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      justifyContent: "center",
                      display: "flex",
                      paddingLeft: 10,
                      paddingRight: 30,
                      paddingTop: 10,
                      paddingBottom: 10,
                      position: "relative",
                      overflow: "visible",
                      borderWidth: 0,
                      marginTop: 0.5,
                      marginBottom: 0,
                      cursor: "pointer",
                    }}
                    value={dl.changes.expertField.friday}
                    onChange={(val) => {
                      dl.changes.expertField.friday = val;
                    }}
                  />
                </div>

                <div
                  id="t18_950_1448"
                  style={{
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    display: "flex",
                    position: "relative",
                    overflow: "visible",
                    borderWidth: 0,
                    marginTop: 1,
                    marginBottom: 1,
                  }}
                >
                  <div
                    id="t18_950_1449"
                    style={{
                      width: 682,
                      flexDirection: "row",
                      alignItems: "center",
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
                      id="t18_950_1450"
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
                      Saturday
                    </span>
                  </div>

                  <MaterialSelect
                    options={dl.changes.timeSlots}
                    style={{
                      height: "50px",
                      width: 651,
                      backgroundColor: "rgba(248,246,246,1.00)",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      justifyContent: "center",
                      display: "flex",
                      paddingLeft: 10,
                      paddingRight: 30,
                      paddingTop: 10,
                      paddingBottom: 10,
                      position: "relative",
                      overflow: "visible",
                      borderWidth: 0,
                      marginTop: 0.5,
                      marginBottom: 0,
                      cursor: "pointer",
                    }}
                    value={dl.changes.expertField.saturday}
                    onChange={(val) => {
                      dl.changes.expertField.saturday = val;
                    }}
                  />
                </div>

                <div
                  id="t18_950_1453"
                  style={{
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    display: "flex",
                    position: "relative",
                    overflow: "visible",
                    borderWidth: 0,
                    marginTop: 1,
                    marginBottom: 0,
                  }}
                >
                  <div
                    id="t18_950_1454"
                    style={{
                      width: 680,
                      flexDirection: "row",
                      alignItems: "center",
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
                      id="t18_950_1455"
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
                      Sunday
                    </span>
                  </div>

                  <MaterialSelect
                    options={dl.changes.timeSlots}
                    style={{
                      height: 26,
                      width: 651,
                      backgroundColor: "rgba(248,246,246,1.00)",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      justifyContent: "center",
                      display: "flex",
                      paddingLeft: 10,
                      paddingRight: 30,
                      paddingTop: 10,
                      paddingBottom: 10,
                      position: "relative",
                      overflow: "visible",
                      borderWidth: 0,
                      marginTop: 0.5,
                      marginBottom: 0,
                      cursor: "pointer",
                    }}
                    value={dl.changes.expertField.sunday}
                    onChange={(val) => {
                      dl.changes.expertField.sunday = val;
                    }}
                  />
                </div>
              </div>
            </div>

            <div
              id="t18_950_1458"
              style={{
                height: 124,
                width: "",
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
                id="t18_950_1459"
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
                  dl.functions.modalsPlugin.closeModal("addNewExpert");
                }}
              >
                <span
                  id="t18_950_1460"
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
                id="t18_950_1461"
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
                  if (dl.changes.addExpertMode == "edit") {
                    var currentPath = dl.functions.common.getLastPath();
                    if (currentPath == "visaexperts") {
                      dl.functions.updateExpert("Visa & Immigration");
                    }

                    if (currentPath == "studyabroadexperts") {
                      dl.functions.updateExpert("Study abroad");
                    }
                  } else {
                    var currentPath = dl.functions.common.getLastPath();
                    if (currentPath == "visaexperts") {
                      dl.functions.createExpert("Visa & Immigration");
                    }

                    if (currentPath == "studyabroadexperts") {
                      dl.functions.createExpert("Study abroad");
                    }
                  }
                }}
              >
                <span
                  id="t18_950_1462"
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
export default AddNewExpertModal;
