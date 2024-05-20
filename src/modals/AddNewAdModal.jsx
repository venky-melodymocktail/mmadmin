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
import ReactDatePicker from "react-datepicker";

var todaysDate = new Date();
var minDate = new Date(todaysDate);
minDate.setDate(todaysDate.getDate() + 1);

const AddNewAdModal = observer(() => {
  const [anim, setAnim] = useState("");
  const [showModal, setShowModal] = useState(dl.modalsStatus["AddNewAdModal"]);
  useEffect(() => {
    if (!dl.modalsStatus["AddNewAdModal"]) {
      closeModal();
    } else {
      setShowModal(true);
    }
  }, [dl.modalsStatus["AddNewAdModal"]]);

  const closeModal = () => {
    setAnim("");
    setTimeout(() => {
      dl.modalsStatus["AddNewAdModal"] = false;
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

          overflow: "scroll",
        }}
      >
        <div
          id="t18_1383_501"
          style={{
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
            id="t18_1382_368"
            style={{
              backgroundColor: "rgba(255,255,255,1.00)",
              flexDirection: "column",
              alignItems: "flex-end",
              justifyContent: "center",
              display: "flex",
              position: "relative",
              overflow: "visible",
              borderWidth: 0,
            }}
          >
            <div
              id="t18_1382_369"
              style={{
                height: 900,
                width: 767,
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                display: "flex",
                paddingLeft: 30,
                paddingTop: 20,
                position: "relative",
                overflow: "visible",
                borderWidth: 0,
                marginTop: 0,
              }}
            >
              <div
                id="t18_1382_370"
                style={{
                  width: 181,
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
                  marginBottom: 10,
                }}
              >
                <span
                  id="t18_1382_371"
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
                  Add new ad
                </span>
              </div>

              <div
                id="t18_1475_5"
                style={{
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  display: "flex",
                  position: "relative",
                  overflow: "visible",
                  borderWidth: 0,
                  marginTop: 10,
                  marginBottom: 10,
                }}
              >
                <div
                  id="t18_1382_372"
                  style={{
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    display: "flex",
                    position: "relative",
                    overflow: "visible",
                    borderWidth: 0,
                    marginLeft: 0,
                    marginRight: 7.5,
                  }}
                >
                  <div
                    id="t18_1382_373"
                    style={{
                      height: 17,
                      width: 65,
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
                    }}
                  >
                    <span
                      id="t18_1382_374"
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
                      Ad name
                    </span>
                  </div>

                  <input
                    id="t18_1382_375"
                    placeholder="Enter Name"
                    value={dl.changes.newAd.name}
                    style={{
                      height: 26,
                      width: 340,
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
                      cursor: "pointer",
                      fontFamily: "Inter",
                      fontSize: 13,
                      color: "rgba(0,0,0,1)",
                      fontWeight: 400,
                      textAlign: "left",
                    }}
                    onChange={(val) => {
                      val = val.target.value;

                      dl.changes.newAd.name = val;
                    }}
                    type="text"
                  ></input>
                </div>

                <div
                  id="t18_1382_377"
                  style={{
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    display: "flex",
                    position: "relative",
                    overflow: "visible",
                    borderWidth: 0,
                    marginLeft: 7.5,
                    marginRight: 0,
                  }}
                >
                  <div
                    id="t18_1382_378"
                    style={{
                      height: 17,
                      width: 111,
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
                    }}
                  >
                    <span
                      id="t18_1382_379"
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
                      Select Ad space
                    </span>
                  </div>

                  <MaterialAutoComplete
                    options={dl.changes.newAd.adSpaceOptions}
                    onChange={(val) => {}}
                    onSelect={(val) => {
                      let index = dl.changes.newAd.adSpaceOptions.indexOf(val);
                      // dl.changes.selectedAddspace = val
                      // alert(index)

                      dl.changes.newAd.showUploadImages = "flex";

                      dl.functions.setAddImage(
                        dl.changes.adSpaces[index].sizes
                      );
                      dl.changes.newAd.adSpaceId =
                        dl.changes.adSpaces[index]._id;

                      //  alert(JSON.stringify(dl.changes.newAd))
                    }}
                    style={{
                      height: 26,
                      width: 306,
                      backgroundColor: "rgba(248,246,246,1.00)",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      justifyContent: "center",
                      display: "flex",
                      paddingLeft: 10,
                      paddingRight: 10,
                      paddingTop: 10,
                      paddingBottom: 10,
                      position: "relative",
                      overflow: "visible",
                      borderWidth: 0,
                      marginBottom: 0,
                      cursor: "pointer",
                    }}
                    value={dl.changes.selectedAddSpaceEdit}
                  ></MaterialAutoComplete>
                </div>
              </div>

              <div
                id="t18_1475_6"
                style={{
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  display: "flex",
                  position: "relative",
                  overflow: "visible",
                  borderWidth: 0,
                  marginTop: 10,
                  marginBottom: 10,
                }}
              >
                <div
                  id="t18_1475_7"
                  style={{
                    height: 17,
                    width: 90,
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
                  }}
                >
                  <span
                    id="t18_1475_8"
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
                    Expires on
                  </span>
                </div>

                <ReactDatePicker
                  // dateFormat={"dd/MM/yyyy"}
                  selected={
                    dl.changes.newAd.expiresOn
                      ? new Date(dl.changes.newAd.expiresOn)
                      : null
                  }
                  // value={dl.changes.newAd.expiresOn}
                  onChange={(val) => {
                    var expiryDate = new Date(val);
                    dl.changes.newAd.expiresOn = expiryDate;
                    console.log(typeof dl.changes.newAd.expiresOn);
                  }}
                  minDate={minDate}
                  style={{
                    height: 46,
                    // width: 306,
                    backgroundColor: "rgba(248,246,246,1.00)",

                    paddingLeft: 10,
                    paddingRight: 10,
                    paddingTop: 10,
                    paddingBottom: 10,

                    cursor: "pointer",
                  }}
                />
              </div>

              <div
                id="t18_1475_6"
                style={{
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  display: "flex",
                  position: "relative",
                  overflow: "visible",
                  borderWidth: 0,
                  marginTop: 10,
                  marginBottom: 10,
                }}
              >
                <div
                  id="t18_1475_7"
                  style={{
                    height: 17,
                    width: 90,
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
                  }}
                >
                  <span
                    id="t18_1475_8"
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
                    Redirect URL
                  </span>
                </div>

                <input
                  id="t18_1475_9"
                  value={dl.changes.newAd.redirectUrl}
                  style={{
                    height: 26,
                    width: 681,
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
                    cursor: "pointer",
                    fontFamily: "Inter",
                    fontSize: 13,
                    color: "rgba(0,0,0,1)",
                    fontWeight: 400,
                    textAlign: "left",
                  }}
                  onChange={(val) => {
                    val = val.target.value;

                    dl.changes.newAd.redirectUrl = val;
                  }}
                  type="text"
                ></input>
              </div>

              <div
                id="t18_1392_2"
                style={{
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  display: dl.changes.newAd.showUploadImages,
                  paddingBottom: 10,
                  position: "relative",
                  overflow: "visible",
                  borderWidth: 0,
                  marginTop: 10,
                  marginBottom: 0,
                }}
              >
                <div
                  id="t18_1383_458"
                  style={{
                    flexDirection: "row",
                    alignItems: "flex-end",
                    justifyContent: "flex-start",
                    display: "flex",
                    position: "relative",
                    overflow: "visible",
                    borderWidth: 0,
                    marginTop: 0,
                    marginBottom: 10,
                  }}
                >
                  <div
                    id="t18_1382_382"
                    style={{
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      display: "flex",
                      position: "relative",
                      overflow: "visible",
                      borderWidth: 0,
                      marginLeft: 0,
                      marginRight: 10,
                    }}
                  >
                    <div
                      id="t18_1382_418"
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        display: "flex",
                        position: "relative",
                        overflow: "visible",
                        borderWidth: 0,
                        marginTop: 0,
                        marginBottom: 5,
                      }}
                    >
                      <div
                        id="t18_1382_383"
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          display: "flex",
                          position: "relative",
                          overflow: "visible",
                          borderWidth: 0,
                          marginLeft: 0,
                          marginRight: 5,
                        }}
                      >
                        <span
                          id="t18_1382_384"
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
                          Image Lg
                        </span>
                      </div>

                      <span
                        id="t18_1382_417"
                        style={{
                          fontFamily: "Inter",
                          fontSize: 13,
                          fontWeight: 500,
                          color: "rgba(167,167,167,1)",
                          letterSpacing: 0,
                          lineHeight: "15.732954025268555px",
                          textAlign: "left",
                          marginLeft: 5,
                          marginRight: 0,
                        }}
                      >
                        {dl.changes.newAd.imageSize.lg}
                      </span>
                    </div>

                    <input
                      id="t18_1382_385"
                      style={{
                        height: 69,
                        width: 523,
                        backgroundColor: "rgba(248,246,246,1.00)",
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
                        marginTop: 5,
                        marginBottom: 0,
                        cursor: "pointer",
                      }}
                      onChange={(val) => {
                        val = val.target.files;

                        let file = val[0];
                        dl.changes.newAd.urls.lg = `url(${URL.createObjectURL(file)})`;
                        dl.changes.newAd.files.lg = file;
                        dl.changes.newAd.showImages.lg = "flex";
                      }}
                      type="file"
                      multiple
                    ></input>
                  </div>

                  <div
                    id="t18_1383_453"
                    style={{
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      display: dl.changes.newAd.showImages.lg,
                      position: "relative",
                      overflow: "visible",
                      borderWidth: 0,
                      marginLeft: 10,
                      marginRight: 0,
                    }}
                  >
                    {dl.changes.newAd.urls.lg?.slice(4, -1).trim() != "" ? (
                      <img
                        id="t18_1383_454"
                        style={{
                          height: 90,
                          width: 138,
                          display: "flex",
                          borderWidth: 0,
                        }}
                        src={dl.changes.newAd.urls.lg?.slice(4, -1).trim()}
                      ></img>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>

                <div
                  id="t18_1383_459"
                  style={{
                    flexDirection: "row",
                    alignItems: "flex-end",
                    justifyContent: "flex-start",
                    display: "flex",
                    position: "relative",
                    overflow: "visible",
                    borderWidth: 0,
                    marginTop: 10,
                    marginBottom: 10,
                  }}
                >
                  <div
                    id="t18_1383_460"
                    style={{
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      display: "flex",
                      position: "relative",
                      overflow: "visible",
                      borderWidth: 0,
                      marginLeft: 0,
                      marginRight: 10,
                    }}
                  >
                    <div
                      id="t18_1383_461"
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        display: "flex",
                        position: "relative",
                        overflow: "visible",
                        borderWidth: 0,
                        marginTop: 0,
                        marginBottom: 5,
                      }}
                    >
                      <div
                        id="t18_1383_462"
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          display: "flex",
                          position: "relative",
                          overflow: "visible",
                          borderWidth: 0,
                          marginLeft: 0,
                          marginRight: 5,
                        }}
                      >
                        <span
                          id="t18_1383_463"
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
                          Image Md
                        </span>
                      </div>

                      <span
                        id="t18_1383_464"
                        style={{
                          fontFamily: "Inter",
                          fontSize: 13,
                          fontWeight: 500,
                          color: "rgba(167,167,167,1)",
                          letterSpacing: 0,
                          lineHeight: "15.732954025268555px",
                          textAlign: "left",
                          marginLeft: 5,
                          marginRight: 0,
                        }}
                      >
                        {dl.changes.newAd.imageSize.md}
                      </span>
                    </div>

                    <input
                      id="t18_1383_465"
                      style={{
                        height: 69,
                        width: 523,
                        backgroundColor: "rgba(248,246,246,1.00)",
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
                        marginTop: 5,
                        marginBottom: 0,
                        cursor: "pointer",
                      }}
                      onChange={(val) => {
                        val = val.target.files;

                        let file = val[0];
                        dl.changes.newAd.urls.md = `url(${URL.createObjectURL(file)})`;
                        dl.changes.newAd.files.md = file;
                        dl.changes.newAd.showImages.md = "flex";
                      }}
                      type="file"
                      multiple
                    ></input>
                  </div>

                  <div
                    id="t18_1383_471"
                    style={{
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      display: dl.changes.newAd.showImages.md,
                      position: "relative",
                      overflow: "visible",
                      borderWidth: 0,
                      marginLeft: 10,
                      marginRight: 0,
                    }}
                  >
                    {dl.changes.newAd.urls.md?.slice(4, -1).trim() != "" ? (
                      <img
                        id="t18_1383_472"
                        style={{
                          height: 90,
                          width: 138,
                          display: "flex",
                          borderWidth: 0,
                        }}
                        src={dl.changes.newAd.urls.md?.slice(4, -1).trim()}
                      ></img>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>

                <div
                  id="t18_1383_473"
                  style={{
                    flexDirection: "row",
                    alignItems: "flex-end",
                    justifyContent: "flex-start",
                    display: "flex",
                    position: "relative",
                    overflow: "visible",
                    borderWidth: 0,
                    marginTop: 10,
                    marginBottom: 10,
                  }}
                >
                  <div
                    id="t18_1383_474"
                    style={{
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      display: "flex",
                      position: "relative",
                      overflow: "visible",
                      borderWidth: 0,
                      marginLeft: 0,
                      marginRight: 10,
                    }}
                  >
                    <div
                      id="t18_1383_475"
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        display: "flex",
                        position: "relative",
                        overflow: "visible",
                        borderWidth: 0,
                        marginTop: 0,
                        marginBottom: 5,
                      }}
                    >
                      <div
                        id="t18_1383_476"
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          display: "flex",
                          position: "relative",
                          overflow: "visible",
                          borderWidth: 0,
                          marginLeft: 0,
                          marginRight: 5,
                        }}
                      >
                        <span
                          id="t18_1383_477"
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
                          Image S
                        </span>
                      </div>

                      <span
                        id="t18_1383_478"
                        style={{
                          fontFamily: "Inter",
                          fontSize: 13,
                          fontWeight: 500,
                          color: "rgba(167,167,167,1)",
                          letterSpacing: 0,
                          lineHeight: "15.732954025268555px",
                          textAlign: "left",
                          marginLeft: 5,
                          marginRight: 0,
                        }}
                      >
                        {dl.changes.newAd.imageSize.sm}
                      </span>
                    </div>

                    <input
                      id="t18_1383_479"
                      style={{
                        height: 69,
                        width: 523,
                        backgroundColor: "rgba(248,246,246,1.00)",
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
                        marginTop: 5,
                        marginBottom: 0,
                        cursor: "pointer",
                      }}
                      onChange={(val) => {
                        val = val.target.files;

                        let file = val[0];
                        dl.changes.newAd.urls.sm = `url(${URL.createObjectURL(file)})`;
                        dl.changes.newAd.files.sm = file;
                        dl.changes.newAd.showImages.sm = "flex";
                      }}
                      type="file"
                      multiple
                    ></input>
                  </div>

                  <div
                    id="t18_1383_485"
                    style={{
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      display: dl.changes.newAd.showImages.sm,
                      position: "relative",
                      overflow: "visible",
                      borderWidth: 0,
                      marginLeft: 10,
                      marginRight: 0,
                    }}
                  >
                    {dl.changes.newAd.urls.sm?.slice(4, -1).trim() != "" ? (
                      <img
                        id="t18_1383_486"
                        style={{
                          height: 90,
                          width: 138,
                          display: "flex",
                          borderWidth: 0,
                        }}
                        src={dl.changes.newAd.urls.sm?.slice(4, -1).trim()}
                      ></img>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>

                <div
                  id="t18_1383_487"
                  style={{
                    flexDirection: "row",
                    alignItems: "flex-end",
                    justifyContent: "flex-start",
                    display: "flex",
                    position: "relative",
                    overflow: "visible",
                    borderWidth: 0,
                    marginTop: 10,
                    marginBottom: 0,
                  }}
                >
                  <div
                    id="t18_1383_488"
                    style={{
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      display: "flex",
                      position: "relative",
                      overflow: "visible",
                      borderWidth: 0,
                      marginLeft: 0,
                      marginRight: 10,
                    }}
                  >
                    <div
                      id="t18_1383_489"
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        display: "flex",
                        position: "relative",
                        overflow: "visible",
                        borderWidth: 0,
                        marginTop: 0,
                        marginBottom: 5,
                      }}
                    >
                      <div
                        id="t18_1383_490"
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          display: "flex",
                          position: "relative",
                          overflow: "visible",
                          borderWidth: 0,
                          marginLeft: 0,
                          marginRight: 5,
                        }}
                      >
                        <span
                          id="t18_1383_491"
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
                          Image Xs
                        </span>
                      </div>

                      <span
                        id="t18_1383_492"
                        style={{
                          fontFamily: "Inter",
                          fontSize: 13,
                          fontWeight: 500,
                          color: "rgba(167,167,167,1)",
                          letterSpacing: 0,
                          lineHeight: "15.732954025268555px",
                          textAlign: "left",
                          marginLeft: 5,
                          marginRight: 0,
                        }}
                      >
                        {dl.changes.newAd.imageSize.xs}
                      </span>
                    </div>

                    <input
                      id="t18_1383_493"
                      style={{
                        height: 69,
                        width: 523,
                        backgroundColor: "rgba(248,246,246,1.00)",
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
                        marginTop: 5,
                        marginBottom: 0,
                        cursor: "pointer",
                      }}
                      onChange={(val) => {
                        val = val.target.files;

                        let file = val[0];
                        dl.changes.newAd.urls.xs = `url(${URL.createObjectURL(file)})`;
                        dl.changes.newAd.files.xs = file;
                        dl.changes.newAd.showImages.xs = "flex";
                      }}
                      type="file"
                      multiple
                    ></input>
                  </div>

                  <div
                    id="t18_1383_499"
                    style={{
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      display: dl.changes.newAd.showImages.xs,
                      position: "relative",
                      overflow: "visible",
                      borderWidth: 0,
                      marginLeft: 10,
                      marginRight: 0,
                    }}
                  >
                    {dl.changes.newAd.urls.xs?.slice(4, -1).trim() != "" ? (
                      <img
                        id="t18_1383_500"
                        style={{
                          height: 90,
                          width: 138,
                          display: "flex",
                          borderWidth: 0,
                        }}
                        src={dl.changes.newAd.urls.xs?.slice(4, -1).trim()}
                      ></img>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div
              id="t18_1382_387"
              style={{
                height: 134,
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
                id="t18_1382_388"
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
                  dl.functions.modalsPlugin.closeModal("addNewAd");
                }}
              >
                <span
                  id="t18_1382_389"
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
                id="t18_1382_390"
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
                  const createNewAd = async () => {
                    let newAd = dl.changes.newAd;
                    if (!newAd.name || newAd.name == "") {
                      alert("Name is required");
                      return;
                    }
                    if (!newAd.adSpaceId || newAd.adSpaceId == "") {
                      alert("Please select an adspace");
                      return;
                    }
                    var files = newAd.files;
                    for (var key in files) {
                      if (!files[key]) {
                        alert("Please upload all images");
                        return;
                      }
                    }

                    let urls = {};
                    dl.functions.modalsPlugin.openModal("loading");

                    for (var key in files) {
                      let file = files[key];
                      let url =
                        await dl.functions.common.neutrodev.generateAndUpload(
                          file,
                          false,
                          "OdocRewT1nf/GhB3RCq1Xg=="
                        );
                      urls[key] = url.url;
                    }

                    let obj = {
                      name: newAd.name,
                      adSpaceId: newAd.adSpaceId,
                      expiresOn: newAd.expiresOn,
                      urls: urls,
                      redirectUrl: newAd.redirectUrl,
                    };

                    var myHeaders = new Headers();
                    var adminToken =
                      dl.functions.common.getCookie("adminToken");
                    myHeaders.append("Authorization", adminToken);
                    myHeaders.append("Content-Type", "application/json");

                    var raw = JSON.stringify(obj);

                    var requestOptions = {
                      method: "POST",
                      headers: myHeaders,
                      body: raw,
                      redirect: "follow",
                    };

                    try {
                      var url = process.env.BASE_URL;
                      var response = await fetch(
                        `${url}/admin/ad/create`,
                        requestOptions
                      );
                      const res = await response.json();

                      dl.functions.modalsPlugin.closeModal("loading");

                      if (response.status == 200) {
                        dl.functions.modalsPlugin.closeModal("addNewAd");
                        dl.functions.getAds("6", "1");
                      } else {
                        return "Something went wrong";
                      }
                    } catch (err) {
                      // alert(JSON.stringify(err))
                      return err;
                    }
                  };

                  function extractUrlFromUrlString(urlString) {
                    const urlRegex = /url\((.*?)\)/; // Regular expression to match 'url(...)'

                    const matches = urlString.match(urlRegex); // Find the match in the string

                    if (matches && matches.length > 1) {
                      const extractedUrl = matches[1]; // Extract the URL from the match
                      return extractedUrl; // Return the extracted URL
                    } else {
                      return null; // Return null if no URL found
                    }
                  }

                  const updateAd = async () => {
                    let newAd = dl.changes.newAd;

                    if (!newAd.name || newAd.name == "") {
                      alert("Invalid name entered");
                      return;
                    }
                    let files = newAd.files;

                    let urls = {};
                    dl.functions.modalsPlugin.openModal("loading");

                    for (var key in files) {
                      let file = files[key];
                      if (file) {
                        let url =
                          await dl.functions.common.neutrodev.generateAndUpload(
                            file,
                            false,
                            "OdocRewT1nf/GhB3RCq1Xg=="
                          );
                        urls[key] = url.url;
                      } else {
                        urls[key] = extractUrlFromUrlString(newAd.urls[key]);
                      }
                    }

                    let obj = {
                      id: dl.changes.selectedAdId,

                      name: newAd.name,
                      expiresOn: newAd.expiresOn,
                      urls: urls,
                      redirectUrl: newAd.redirectUrl,
                    };
                    //   alert(JSON.stringify(obj))

                    var myHeaders = new Headers();
                    var adminToken =
                      dl.functions.common.getCookie("adminToken");
                    myHeaders.append("Authorization", adminToken);
                    myHeaders.append("Content-Type", "application/json");

                    var raw = JSON.stringify(obj);

                    var requestOptions = {
                      method: "POST",
                      headers: myHeaders,
                      body: raw,
                      redirect: "follow",
                    };

                    try {
                      var url = process.env.BASE_URL;
                      var response = await fetch(
                        `${url}/admin/ad/update`,
                        requestOptions
                      );
                      const res = await response.json();

                      dl.functions.modalsPlugin.closeModal("loading");

                      if (response.status == 200) {
                        dl.functions.modalsPlugin.closeModal("addNewAd");
                        dl.functions.getAds("6", "1");
                      } else {
                        return "Something went wrong";
                      }
                    } catch (err) {
                      // alert(JSON.stringify(err))
                      return err;
                    }
                  };

                  const run = async () => {
                    if (dl.changes.newAdMode == "add") {
                      createNewAd();
                    } else {
                      updateAd();
                    }
                  };

                  run();
                }}
              >
                <span
                  id="t18_1382_391"
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
export default AddNewAdModal;
