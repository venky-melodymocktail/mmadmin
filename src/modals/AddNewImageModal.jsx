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

const AddNewImageModal = observer(() => {
  const [anim, setAnim] = useState("");
  const [showModal, setShowModal] = useState(
    dl.modalsStatus["AddNewImageModal"]
  );
  useEffect(() => {
    if (!dl.modalsStatus["AddNewImageModal"]) {
      closeModal();
    } else {
      setShowModal(true);
    }
  }, [dl.modalsStatus["AddNewImageModal"]]);

  const closeModal = () => {
    setAnim("");
    setTimeout(() => {
      dl.modalsStatus["AddNewImageModal"] = false;
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
          id="t18_1340_528"
          style={{
            flexDirection: "column",
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
            id="t18_1340_473"
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
              id="t18_1119_184"
              style={{
                height: 466,
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
                id="t18_1119_185"
                style={{
                  height: 331,
                  width: 797,
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  display: "flex",
                  paddingTop: 30,
                  position: "relative",
                  overflow: "visible",
                  borderWidth: 0,
                  marginTop: 0,
                }}
              >
                <div
                  id="t18_1119_194"
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
                    id="t18_1119_195"
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
                    id="t18_1119_196"
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

                      let file = val[0];
                      // dl.changes.newImage.urls.lg=`url(${URL.createObjectURL(file)})`
                      dl.changes.newImage.file = file;
                      // alert(dl.changes.newImage.file)
                    }}
                    type="file"
                    multiple
                  ></input>
                </div>

                <div
                  id="t18_1119_186"
                  style={{
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    display: "flex",
                    position: "relative",
                    overflow: "visible",
                    borderWidth: 0,
                    marginTop: 14,
                    marginBottom: 0,
                  }}
                >
                  <span
                    id="t18_1119_187"
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
                    Add name
                  </span>

                  <input
                    id="t18_1119_188"
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

                      dl.changes.newImage.name = val;
                    }}
                    type="text"
                  ></input>
                </div>
              </div>

              <div
                id="t18_1119_238"
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
                  id="t18_1119_239"
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
                    dl.functions.modalsPlugin.closeModal("addNewImage");
                  }}
                >
                  <span
                    id="t18_1119_240"
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
                  id="t18_1119_241"
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
                    const createNewImage = async () => {
                      let newImage = dl.changes.newImage;
                      if (!newImage.name || newImage.name == "") {
                        alert("Name is required");
                        return;
                      }

                      var file = newImage.file;
                      if (!file) {
                        alert("Select an image");
                        return;
                      }

                      dl.functions.modalsPlugin.openModal("loading");

                      let url =
                        await dl.functions.common.neutrodev.generateAndUpload(
                          file,
                          false,
                          "OdocRewT1nf/GhB3RCq1Xg=="
                        );
                      url = url.url;

                      let obj = {
                        name: newImage.name,
                        url: url,
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
                        var baseurl = process.env.BASE_URL;
                        var response = await fetch(
                          `${baseurl}/admin/images/create`,
                          requestOptions
                        );
                        const res = await response.json();

                        dl.functions.modalsPlugin.closeModal("loading");

                        if (response.status == 200) {
                          dl.functions.modalsPlugin.closeModal("addNewImage");

                          dl.functions.getBlogImages();
                        } else {
                          return "Something went wrong";
                        }
                      } catch (err) {
                        // alert(JSON.stringify(err))
                        return err;
                      }
                    };

                    createNewImage();
                  }}
                >
                  <span
                    id="t18_1119_242"
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
      </div>
    </Modal>
  );
});
export default AddNewImageModal;
