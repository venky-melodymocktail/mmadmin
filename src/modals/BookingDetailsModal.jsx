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

const BookingDetailsModal = observer(() => {
  const [anim, setAnim] = useState("");
  const [showModal, setShowModal] = useState(
    dl.modalsStatus["BookingDetailsModal"],
  );
  useEffect(() => {
    if (!dl.modalsStatus["BookingDetailsModal"]) {
      closeModal();
    } else {
      setShowModal(true);
    }
  }, [dl.modalsStatus["BookingDetailsModal"]]);

  const closeModal = () => {
    setAnim("");
    setTimeout(() => {
      dl.modalsStatus["BookingDetailsModal"] = false;
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

          backgroundColor: "rgba(255,255,255,1.00)",

          overflow: "scroll",
        }}
      >
        <div
          id="t18_957_29"
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
            id="t18_950_1175"
            style={{
              height: 1024,
              width: 797,
              backgroundColor: "rgba(255,255,255,1.00)",
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
              id="t18_950_1176"
              style={{
                height: 850,
                width: 767,
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                display: "flex",
                paddingLeft: 32,
                paddingTop: 40,
                position: "relative",
                overflow: "visible",
                borderWidth: 0,
                borderColor: "rgba(207,206,206,1)",
                borderBottomWidth: 1,
                borderStyle: "solid",
                marginTop: 0,
                marginBottom: 5,
              }}
            >
              <div
                id="t18_950_1177"
                style={{
                  width: 692,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  display: "flex",
                  position: "relative",
                  overflow: "visible",
                  borderWidth: 0,
                  marginTop: 0,
                  marginBottom: 11,
                }}
              >
                <span
                  id="t18_950_1178"
                  style={{
                    fontFamily: "Inter",
                    fontSize: 15,
                    fontWeight: 600,
                    color: dl.changes.bookingDetail.eventStautsColor,
                    letterSpacing: 0,
                    lineHeight: "18.15340805053711px",
                    textAlign: "left",
                  }}
                >
                  {dl.changes.bookingDetail.eventStauts}
                </span>
              </div>

              <div
                id="t18_950_1179"
                style={{
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  display: "flex",
                  position: "relative",
                  overflow: "visible",
                  borderWidth: 0,
                  marginTop: 11,
                  marginBottom: 11,
                }}
              >
                <div
                  id="t18_950_1180"
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
                    id="t18_950_1181"
                    style={{
                      width: 77,
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
                      marginBottom: 0.5,
                    }}
                  >
                    <span
                      id="t18_950_1182"
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
                      User name
                    </span>
                  </div>

                  <div
                    id="t18_950_1183"
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
                      marginTop: 0.5,
                      marginBottom: 0,
                    }}
                  >
                    <span
                      id="t18_950_1184"
                      style={{
                        fontFamily: "Inter",
                        fontSize: 15,
                        fontWeight: 400,
                        color: "rgba(0,0,0,1)",
                        letterSpacing: 0,
                        lineHeight: "18.15340805053711px",
                        textAlign: "left",
                      }}
                    >
                      {dl.changes.bookingDetail.name}
                    </span>
                  </div>
                </div>

                <div
                  id="t18_950_1185"
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
                    id="t18_950_1186"
                    style={{
                      width: 325,
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
                      id="t18_950_1187"
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

                  <div
                    id="t18_950_1188"
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
                      marginTop: 0.5,
                      marginBottom: 0,
                    }}
                  >
                    <span
                      id="t18_950_1189"
                      style={{
                        fontFamily: "Inter",
                        fontSize: 15,
                        fontWeight: 400,
                        color: "rgba(0,0,0,1)",
                        letterSpacing: 0,
                        lineHeight: "18.15340805053711px",
                        textAlign: "left",
                      }}
                    >
                      {dl.changes.bookingDetail.Email}
                    </span>
                  </div>
                </div>
              </div>

              <div
                id="t18_950_1190"
                style={{
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  display: "flex",
                  position: "relative",
                  overflow: "visible",
                  borderWidth: 0,
                  marginTop: 11,
                  marginBottom: 11,
                }}
              >
                <div
                  id="t18_950_1191"
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
                    id="t18_950_1192"
                    style={{
                      width: 325,
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
                      id="t18_950_1193"
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
                      Session type
                    </span>
                  </div>

                  <div
                    id="t18_950_1194"
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
                      marginTop: 0.5,
                      marginBottom: 0,
                    }}
                  >
                    <span
                      id="t18_950_1195"
                      style={{
                        fontFamily: "Inter",
                        fontSize: 15,
                        fontWeight: 400,
                        color: "rgba(0,0,0,1)",
                        letterSpacing: 0,
                        lineHeight: "18.15340805053711px",
                        textAlign: "left",
                      }}
                    >
                      {dl.changes.bookingDetail.Session}
                    </span>
                  </div>
                </div>

                <div
                  id="t18_950_1196"
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
                    id="t18_950_1197"
                    style={{
                      width: 315,
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
                      marginBottom: 1,
                    }}
                  >
                    <span
                      id="t18_950_1198"
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
                      Time slot
                    </span>
                  </div>

                  <div
                    id="t18_950_1199"
                    style={{
                      height: 25,
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
                    }}
                  >
                    <span
                      id="t18_950_1200"
                      style={{
                        fontFamily: "Inter",
                        fontSize: 15,
                        fontWeight: 400,
                        color: "rgba(0,0,0,1)",
                        letterSpacing: 0,
                        lineHeight: "18.15340805053711px",
                        textAlign: "left",
                      }}
                    >
                      {dl.changes.bookingDetail.Slot}
                    </span>
                  </div>
                </div>
              </div>

              <div
                id="t18_950_1201"
                style={{
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  display: "flex",
                  position: "relative",
                  overflow: "visible",
                  borderWidth: 0,
                  marginTop: 11,
                  marginBottom: 11,
                }}
              >
                <div
                  id="t18_950_1202"
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
                    id="t18_950_1203"
                    style={{
                      width: 325,
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
                    }}
                  >
                    <span
                      id="t18_950_1204"
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
                      {dl.changes.bookingDetail.service}
                    </span>
                  </div>

                  <div
                    id="t18_950_1205"
                    style={{
                      height: 27,
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
                      marginBottom: 0,
                    }}
                  >
                    <span
                      id="t18_950_1206"
                      style={{
                        fontFamily: "Inter",
                        fontSize: 15,
                        fontWeight: 400,
                        color: "rgba(0,0,0,1)",
                        letterSpacing: 0,
                        lineHeight: "18.15340805053711px",
                        textAlign: "left",
                      }}
                    >
                      {dl.changes.bookingDetail.type}
                    </span>
                  </div>
                </div>

                <div
                  id="t18_950_1207"
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
                    id="t18_950_1208"
                    style={{
                      width: 325,
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
                      id="t18_950_1209"
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
                      Date
                    </span>
                  </div>

                  <div
                    id="t18_950_1210"
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
                      marginTop: 0.5,
                      marginBottom: 0,
                    }}
                  >
                    <span
                      id="t18_950_1211"
                      style={{
                        fontFamily: "Inter",
                        fontSize: 15,
                        fontWeight: 400,
                        color: "rgba(0,0,0,1)",
                        letterSpacing: 0,
                        lineHeight: "18.15340805053711px",
                        textAlign: "left",
                      }}
                    >
                      {dl.changes.bookingDetail.date}
                    </span>
                  </div>
                </div>
              </div>

              <div
                id="t18_950_1212"
                style={{
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  display: "flex",
                  position: "relative",
                  overflow: "visible",
                  borderWidth: 0,
                  marginTop: 11,
                  marginBottom: 11,
                }}
              >
                <div
                  id="t18_950_1213"
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
                    id="t18_950_1214"
                    style={{
                      width: 325,
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
                      id="t18_950_1215"
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
                      Price
                    </span>
                  </div>

                  <div
                    id="t18_950_1216"
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
                      marginTop: 0.5,
                      marginBottom: 0,
                    }}
                  >
                    <span
                      id="t18_950_1217"
                      style={{
                        fontFamily: "Inter",
                        fontSize: 20,
                        fontWeight: 600,
                        color: "rgba(0,0,0,1)",
                        letterSpacing: 0,
                        lineHeight: "24.204544067382812px",
                        textAlign: "left",
                      }}
                    >
                      {dl.changes.bookingDetail.price}
                    </span>
                  </div>
                </div>

                <div
                  id="t18_950_1218"
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
                    id="t18_950_1219"
                    style={{
                      width: 325,
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
                      id="t18_950_1220"
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
                      Expert name
                    </span>
                  </div>

                  <div
                    id="t18_950_1221"
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
                      marginTop: 0.5,
                      marginBottom: 0,
                    }}
                  >
                    <span
                      id="t18_950_1222"
                      style={{
                        fontFamily: "Inter",
                        fontSize: 15,
                        fontWeight: 400,
                        color: "rgba(0,0,0,1)",
                        letterSpacing: 0,
                        lineHeight: "18.15340805053711px",
                        textAlign: "left",
                      }}
                    >
                      {dl.changes.bookingDetail.expert}
                    </span>
                  </div>
                </div>
              </div>

              <div
                id="t18_950_1223"
                style={{
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  display: "flex",
                  position: "relative",
                  overflow: "visible",
                  borderWidth: 0,
                  marginTop: 11,
                  marginBottom: 11,
                }}
              >
                <div
                  id="t18_950_1224"
                  style={{
                    width: 701,
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
                    id="t18_950_1225"
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
                    Notes for the speaker
                  </span>
                </div>

                <div
                  id="t18_950_1226"
                  style={{
                    height: 79,
                    width: 681,
                    backgroundColor: "rgba(248,246,246,1.00)",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    display: "flex",
                    paddingLeft: 10,
                    paddingRight: 10,
                    paddingTop: 20,
                    paddingBottom: 10,
                    position: "relative",
                    overflow: "visible",
                    borderWidth: 0,
                    marginTop: 0.5,
                    marginBottom: 0,
                  }}
                >
                  <span
                    id="t18_950_1227"
                    style={{
                      fontFamily: "Inter",
                      fontSize: 15,
                      fontWeight: 400,
                      color: "rgba(0,0,0,1)",
                      letterSpacing: 0,
                      lineHeight: "18.15340805053711px",
                      textAlign: "left",
                    }}
                  >
                    {dl.changes.bookingDetail.note}
                  </span>
                </div>
              </div>

              <div
                id="t18_950_1228"
                style={{
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  display: "flex",
                  position: "relative",
                  overflow: "visible",
                  borderWidth: 0,
                  marginTop: 11,
                  marginBottom: 0,
                }}
              >
                <div
                  id="t18_950_1229"
                  style={{
                    width: 701,
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
                    marginBottom: 1.5,
                  }}
                >
                  <span
                    id="t18_950_1230"
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
                    Meeting link
                  </span>
                </div>

                <div
                  id="t18_950_1231"
                  style={{
                    height: 44,
                    width: 701,
                    backgroundColor: "rgba(248,246,246,1.00)",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                    position: "relative",
                    overflow: "visible",
                    borderWidth: 0,
                    marginTop: 1.5,
                    marginBottom: 0,
                  }}
                >
                  <span
                    id="t18_950_1232"
                    style={{
                      fontFamily: "Inter",
                      fontSize: 15,
                      fontWeight: 400,
                      color: "rgba(0,0,0,1)",
                      letterSpacing: 0,
                      lineHeight: "18.15340805053711px",
                      textAlign: "left",
                      marginLeft: 0,
                      marginRight: 251.5,
                    }}
                  >
                    {dl.changes.bookingDetail.meetingLink}
                  </span>

                  {"https://dgslk2men7iqd.cloudfront.net/6421601b2aa50b3f6673a74e/9ae01353b3d859f9296f83bad2d9a17ec2a62bf5.png" !=
                  "" ? (
                    <img
                      id="t18_950_1233"
                      style={{
                        height: 17,
                        width: 15,
                        display: "flex",
                        borderWidth: 0,
                        marginLeft: 251.5,
                        marginRight: 0,
                        cursor: "pointer",
                      }}
                      onClick={(e) => {
                        var link = dl.changes.bookingDetail.meetingLink;
                        dl.functions.common.copyToClipboard(link);
                        window.toast("Link Copied");
                      }}
                      src={
                        "https://dgslk2men7iqd.cloudfront.net/6421601b2aa50b3f6673a74e/9ae01353b3d859f9296f83bad2d9a17ec2a62bf5.png"
                      }
                    ></img>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>

            <div
              id="t18_1130_4"
              style={{
                width: 777,
                flexDirection: "column",
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
                marginTop: 5,
                marginBottom: 0,
              }}
            >
              <div
                id="t18_1130_2"
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
                  cursor: "pointer",
                }}
                onClick={(e) => {
                  dl.functions.modalsPlugin.closeModal("bookingDetails");
                }}
              >
                <span
                  id="t18_1130_3"
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
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
});
export default BookingDetailsModal;
