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

const AddNewMovieSuggestionModal = observer(() => {
  const [anim, setAnim] = useState("");
  const [showModal, setShowModal] = useState(
    dl.modalsStatus["AddNewMovieSuggestionModal"],
  );
  useEffect(() => {
    if (!dl.modalsStatus["AddNewMovieSuggestionModal"]) {
      closeModal();
    } else {
      setShowModal(true);
    }
  }, [dl.modalsStatus["AddNewMovieSuggestionModal"]]);

  const closeModal = () => {
    setAnim("");
    setTimeout(() => {
      dl.modalsStatus["AddNewMovieSuggestionModal"] = false;
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
          id="t18_494_461"
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
            id="t18_494_462"
            style={{
              height: 919,
              width: 797,
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              position: "relative",
              overflow: "visible",
              borderWidth: 0,
              marginTop: 0,
            }}
          >
            <div
              id="t18_494_463"
              style={{
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                display: "flex",
                position: "relative",
                overflow: "visible",
                borderWidth: 0,
                marginTop: 0,
                marginBottom: 14,
              }}
            >
              <span
                id="t18_494_464"
                style={{
                  fontFamily: "Inter",
                  fontSize: 13,
                  fontWeight: 500,
                  color: "rgba(167,167,167,1)",
                  letterSpacing: 0,
                  lineHeight: "15.732954025268555px",
                  textAlign: "left",
                  marginTop: 0,
                  marginBottom: 5.5,
                }}
              >
                Add title
              </span>

              <input
                id="t18_494_465"
                placeholder="Title"
                value={dl.changes.msData.title}
                style={{
                  height: 19,
                  width: 678,
                  backgroundColor: "rgba(248,246,246,1.00)",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  display: "flex",
                  paddingLeft: 13,
                  paddingRight: 10,
                  paddingTop: 13,
                  paddingBottom: 13,
                  position: "relative",
                  overflow: "visible",
                  borderWidth: 0,
                  marginTop: 5.5,
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

                  dl.changes.msData.title = val;
                }}
                type="text"
              ></input>
            </div>

            <div
              id="t18_494_467"
              style={{
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                display: "flex",
                position: "relative",
                overflow: "visible",
                borderWidth: 0,
                marginTop: 14,
                marginBottom: 14,
              }}
            >
              <span
                id="t18_494_468"
                style={{
                  fontFamily: "Inter",
                  fontSize: 13,
                  fontWeight: 500,
                  color: "rgba(167,167,167,1)",
                  letterSpacing: 0,
                  lineHeight: "15.732954025268555px",
                  textAlign: "left",
                  marginTop: 0,
                  marginBottom: 5.5,
                }}
              >
                Description
              </span>

              <input
                id="t18_494_469"
                placeholder="Description"
                value={dl.changes.msData.description}
                style={{
                  height: 49,
                  width: 681,
                  backgroundColor: "rgba(248,246,246,1.00)",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  display: "flex",
                  paddingLeft: 10,
                  paddingRight: 10,
                  paddingTop: 10,
                  paddingBottom: 69,
                  position: "relative",
                  overflow: "visible",
                  borderWidth: 0,
                  marginTop: 5.5,
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

                  dl.changes.msData.description = val;
                }}
                type="text"
              ></input>
            </div>

            <div
              id="t18_494_471"
              style={{
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                display: "flex",
                position: "relative",
                overflow: "visible",
                borderWidth: 0,
                marginTop: 14,
                marginBottom: 14,
              }}
            >
              <span
                id="t18_494_472"
                style={{
                  fontFamily: "Inter",
                  fontSize: 13,
                  fontWeight: 500,
                  color: "rgba(167,167,167,1)",
                  letterSpacing: 0,
                  lineHeight: "15.732954025268555px",
                  textAlign: "left",
                  marginTop: 0,
                  marginBottom: 5.5,
                }}
              >
                Image
              </span>

              <input
                id="t18_494_473"
                style={{
                  height: 46,
                  width: 153,
                  backgroundColor: "rgba(248,246,246,1.00)",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  paddingLeft: 274,
                  paddingRight: 274,
                  paddingTop: 37,
                  paddingBottom: 37,
                  position: "relative",
                  overflow: "visible",
                  borderWidth: 0,
                  marginTop: 5.5,
                  marginBottom: 0,
                  cursor: "pointer",
                  fontFamily: "Inter",
                  fontSize: 13,
                  color: "rgba(207,206,206,1)",
                  fontWeight: 400,
                  textAlign: "center",
                }}
                onChange={(val) => {
                  val = val.target.files;

                  const run = async () => {
                    dl.changes.imageData = {};
                    if (val[0]) {
                      dl.changes.imageData = val[0];
                      // alert(dl.changes.imageData)
                    }
                  };

                  run();
                }}
                type="file"
                multiple
              ></input>
            </div>

            <div
              id="t18_494_475"
              style={{
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                position: "relative",
                overflow: "visible",
                borderWidth: 0,
                marginTop: 14,
                marginBottom: 0,
              }}
            >
              <div
                id="t18_494_476"
                style={{
                  height: 72,
                  width: 701,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  position: "relative",
                  overflow: "visible",
                  borderWidth: 0,
                  marginTop: 0,
                  marginBottom: 17,
                }}
              >
                <div
                  id="t18_494_477"
                  style={{
                    height: 72,
                    width: 326,
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    display: "flex",
                    position: "relative",
                    overflow: "visible",
                    borderWidth: 0,
                    marginLeft: 0,
                    marginRight: 25,
                  }}
                >
                  <span
                    id="t18_494_478"
                    style={{
                      fontFamily: "Inter",
                      fontSize: 13,
                      fontWeight: 500,
                      color: "rgba(167,167,167,1)",
                      letterSpacing: 0,
                      lineHeight: "15.732954025268555px",
                      textAlign: "left",
                      marginTop: 0,
                      marginBottom: 5.5,
                    }}
                  >
                    Type
                  </span>

                  <select
                    name="cars"
                    id="t18_494_479"
                    style={{
                      height: 45,
                      width: 286,
                      backgroundColor: "rgba(248,246,246,1.00)",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      display: "flex",
                      paddingLeft: 20,
                      paddingRight: 20,
                      position: "relative",
                      overflow: "visible",
                      borderWidth: 0,
                      marginTop: 5.5,
                      marginBottom: 0,
                      cursor: "pointer",
                    }}
                    onChange={(val) => {
                      val = val.target.value;

                      dl.changes.msData.category = val;
                    }}
                  >
                    <option value="" disabled selected>
                      Select your option
                    </option>
                    {Array.isArray(dl.changes.msType) &&
                      dl.changes.msType.map((item, index) => {
                        return (
                          <option
                            value={item}
                            selected={item == dl.changes.msData.category}
                          >
                            {item}
                          </option>
                        );
                      })}
                  </select>
                </div>

                <div
                  id="t18_494_482"
                  style={{
                    height: 72,
                    width: 325.72998046875,
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    display: "flex",
                    position: "relative",
                    overflow: "visible",
                    borderWidth: 0,
                    marginLeft: 25,
                    marginRight: 0,
                  }}
                >
                  <span
                    id="t18_494_483"
                    style={{
                      fontFamily: "Inter",
                      fontSize: 13,
                      fontWeight: 500,
                      color: "rgba(167,167,167,1)",
                      letterSpacing: 0,
                      lineHeight: "15.732954025268555px",
                      textAlign: "left",
                      marginTop: 0,
                      marginBottom: 5,
                    }}
                  >
                    Genre
                  </span>

                  <select
                    name="cars"
                    id="t18_494_484"
                    style={{
                      height: 45,
                      width: 286,
                      backgroundColor: "rgba(248,246,246,1.00)",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      display: "flex",
                      paddingLeft: 20,
                      paddingRight: 20,
                      position: "relative",
                      overflow: "visible",
                      borderWidth: 0,
                      marginTop: 5,
                      marginBottom: 0,
                      cursor: "pointer",
                    }}
                    onChange={(val) => {
                      val = val.target.value;

                      dl.changes.msData.genre = val;
                    }}
                  >
                    <option value="" disabled selected>
                      Select your option
                    </option>
                    {Array.isArray(dl.changes.msGenre) &&
                      dl.changes.msGenre.map((item, index) => {
                        return (
                          <option
                            value={item}
                            selected={item == dl.changes.msData.genre}
                          >
                            {item}
                          </option>
                        );
                      })}
                  </select>
                </div>
              </div>

              <div
                id="t18_494_487"
                style={{
                  height: 72,
                  width: 701,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  display: "flex",
                  position: "relative",
                  overflow: "visible",
                  borderWidth: 0,
                  marginTop: 17,
                  marginBottom: 17,
                }}
              >
                <div
                  id="t18_494_488"
                  style={{
                    height: 72,
                    width: 325.72998046875,
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    display: "flex",
                    position: "relative",
                    overflow: "visible",
                    borderWidth: 0,
                    marginLeft: 0,
                    marginRight: 25,
                  }}
                >
                  <span
                    id="t18_494_489"
                    style={{
                      fontFamily: "Inter",
                      fontSize: 13,
                      fontWeight: 500,
                      color: "rgba(167,167,167,1)",
                      letterSpacing: 0,
                      lineHeight: "15.732954025268555px",
                      textAlign: "left",
                      marginTop: 0,
                      marginBottom: 5.5,
                    }}
                  >
                    Language
                  </span>

                  <select
                    name="cars"
                    id="t18_494_490"
                    style={{
                      height: 45,
                      width: 286,
                      backgroundColor: "rgba(248,246,246,1.00)",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      display: "flex",
                      paddingLeft: 20,
                      paddingRight: 20,
                      position: "relative",
                      overflow: "visible",
                      borderWidth: 0,
                      marginTop: 5.5,
                      marginBottom: 0,
                      cursor: "pointer",
                    }}
                    onChange={(val) => {
                      val = val.target.value;

                      dl.changes.msData.language = val;
                    }}
                  >
                    <option value="" disabled selected>
                      Select your option
                    </option>
                    {Array.isArray(dl.changes.msLanguage) &&
                      dl.changes.msLanguage.map((item, index) => {
                        return (
                          <option
                            value={item}
                            selected={item == dl.changes.msData.language}
                          >
                            {item}
                          </option>
                        );
                      })}
                  </select>
                </div>

                <div
                  id="t18_494_493"
                  style={{
                    height: 72,
                    width: 326,
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    display: "flex",
                    position: "relative",
                    overflow: "visible",
                    borderWidth: 0,
                    marginLeft: 25,
                    marginRight: 0,
                  }}
                >
                  <span
                    id="t18_494_494"
                    style={{
                      fontFamily: "Inter",
                      fontSize: 13,
                      fontWeight: 500,
                      color: "rgba(167,167,167,1)",
                      letterSpacing: 0,
                      lineHeight: "15.732954025268555px",
                      textAlign: "left",
                      marginTop: 0,
                      marginBottom: 6,
                    }}
                  >
                    Rating
                  </span>

                  <input
                    id="t18_494_495"
                    placeholder="Rating"
                    value={dl.changes.msData.rating}
                    style={{
                      height: 45,
                      width: 306,
                      backgroundColor: "rgba(248,246,246,1.00)",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      display: "flex",
                      paddingLeft: 20,
                      position: "relative",
                      overflow: "visible",
                      borderWidth: 0,
                      marginTop: 6,
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

                      dl.changes.msData.rating = val;
                    }}
                    type="text"
                  ></input>
                </div>
              </div>

              <div
                id="t18_494_498"
                style={{
                  width: 701,
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  display: "flex",
                  position: "relative",
                  overflow: "visible",
                  borderWidth: 0,
                  marginTop: 17,
                  marginBottom: 17,
                }}
              >
                <span
                  id="t18_494_499"
                  style={{
                    fontFamily: "Inter",
                    fontSize: 13,
                    fontWeight: 500,
                    color: "rgba(167,167,167,1)",
                    letterSpacing: 0,
                    lineHeight: "15.732954025268555px",
                    textAlign: "left",
                    marginTop: 0,
                    marginBottom: 5.5,
                  }}
                >
                  Trailer link
                </span>

                <input
                  id="t18_494_500"
                  placeholder="Trailer Url"
                  value={dl.changes.msData.trailerURL}
                  style={{
                    height: 19,
                    width: 447,
                    backgroundColor: "rgba(248,246,246,1.00)",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    display: "flex",
                    paddingLeft: 27,
                    paddingRight: 227,
                    paddingTop: 13,
                    paddingBottom: 13,
                    position: "relative",
                    overflow: "visible",
                    borderWidth: 0,
                    marginTop: 5.5,
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

                    dl.changes.msData.trailerURL = val;
                  }}
                  type="text"
                ></input>
              </div>

              <div
                id="t18_499_635"
                style={{
                  width: 701,
                  flexDirection: "row",
                  alignItems: "flex-end",
                  justifyContent: "flex-start",
                  display: "flex",
                  position: "relative",
                  overflow: "visible",
                  borderWidth: 0,
                  marginTop: 17,
                  marginBottom: 0,
                }}
              >
                <div
                  id="t18_494_502"
                  style={{
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    display: "flex",
                    position: "relative",
                    overflow: "visible",
                    borderWidth: 0,
                    marginLeft: 0,
                    marginRight: 17,
                  }}
                >
                  <span
                    id="t18_494_503"
                    style={{
                      fontFamily: "Inter",
                      fontSize: 13,
                      fontWeight: 500,
                      color: "rgba(167,167,167,1)",
                      letterSpacing: 0,
                      lineHeight: "15.732954025268555px",
                      textAlign: "left",
                      marginTop: 0,
                      marginBottom: 5.5,
                    }}
                  >
                    OTT platforms
                  </span>

                  <MaterialSelect
                    options={dl.changes.msOttPlatforms}
                    style={{
                      height: 45,
                      width: 286,
                      backgroundColor: "rgba(248,246,246,1.00)",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      display: "flex",
                      paddingLeft: 20,
                      paddingRight: 20,
                      position: "relative",
                      overflow: "visible",
                      borderWidth: 0,
                      marginTop: 5.5,
                      marginBottom: 0,
                      cursor: "pointer",
                    }}
                    value={dl.changes.msData.availableOn}
                    onChange={(val) => {
                      dl.changes.msData.availableOn = val;
                    }}
                  />
                </div>

                <div
                  id="t18_494_507"
                  style={{
                    width: 326,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    display: "flex",
                    position: "relative",
                    overflow: "visible",
                    borderWidth: 0,
                    marginLeft: 17,
                    marginRight: 0,
                  }}
                >
                  <span
                    id="t18_494_508"
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
                    value={dl.changes.msData.status}
                    backgroundColor={"rgba(186,15,23,1.00)"}
                    onChange={(val) => {
                      dl.changes.msData.status = val;

                      if (val == true) {
                        dl.changes.msData.status = "active";
                      } else {
                        dl.changes.msData.status = "inactive";
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            id="t18_494_513"
            style={{
              height: 105,
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
              id="t18_494_514"
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
                dl.functions.modalsPlugin.closeModal("addNewMovieSuggestion");
              }}
            >
              <span
                id="t18_494_515"
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
              id="t18_494_516"
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
                const run = async () => {
                  if (dl.changes.imageData instanceof File) {
                    var res =
                      await dl.functions.common.neutrodev.generateAndUpload(
                        dl.changes.imageData,
                        false,
                        "OdocRewT1nf/GhB3RCq1Xg==",
                      );
                    dl.changes.msData.image = res;
                  }

                  if (dl.changes.updateMovieSuggestions == true) {
                    var body = dl.changes.msData;
                    if (body.status == true) {
                      body["status"] = "active";
                    } else {
                      body["status"] = "inactive";
                    }

                    body["id"] = dl.changes.msData._id;
                    var res = await dl.functions.updateMovieSuggestion(body);
                    // alert(JSON.stringify(res))
                  } else {
                    var body = dl.changes.msData;
                    if (body.status == true) {
                      body.status = "active";
                    } else {
                      body.status = "inactive";
                    }
                    var res = await dl.functions.createMovieSuggestion(body);

                    if (res.status == 200) {
                      alert("Movie Suggestion Created");
                    } else {
                      alert("something went wrong!");
                    }
                    dl.changes.msData = {
                      title: "",
                      gener: "",
                      rating: 0,
                      availableOn: [],
                      language: "",
                      category: "",
                      description: "",
                      country: "",
                      trailerURL: "",
                      status: "active",
                      activeVisible: "flex",
                      disableVisible: "none",
                    };
                  }
                };

                run();
                dl.functions.modalsPlugin.closeModal("addNewMovieSuggestion");
              }}
            >
              <span
                id="t18_494_517"
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
    </Modal>
  );
});
export default AddNewMovieSuggestionModal;
