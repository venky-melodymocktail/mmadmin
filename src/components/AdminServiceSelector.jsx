import React from "react";
import dl from "../datalayer/state";
import _ from "lodash";
import { observer } from "mobx-react";

import MaterialMenu from "./main/MaterialMenu.jsx";
import MaterialDate from "./main/MaterialDate.jsx";
import MaterialAutoComplete from "./main/MaterialAutoComplete.jsx";
import MaterialRating from "./main/MaterialRating.jsx";

import MaterialSelect from "./main/MaterialSelect.jsx";

const AdminServiceSelector = observer((mainprops) => {
  // if(_.isEmpty(props)){
  var props = {
    services: {
      rentals: { activeVisible: "none", inactiveVisible: "flex" },
      rideSharing: { activeVisible: "none", inactiveVisible: "flex" },
      movieSuggestions: { activeVisible: "none", inactiveVisible: "flex" },
      studyAbroad: { activeVisible: "none", inactiveVisible: "flex" },
      visaQna: { activeVisible: "none", inactiveVisible: "flex" },
      travelCompanion: { activeVisible: "none", inactiveVisible: "flex" },
      blogs: { activeVisible: "none", inactiveVisible: "flex" },
      users: { activeVisible: "none", inactiveVisible: "flex" },
      ads: { activeVisible: "none", inactiveVisible: "flex" },
      webinar: { activeVisible: "none", inactiveVisible: "flex" }
    },
  };
  for (var key in mainprops) {
    props[key] = mainprops[key];
  }
  // }

  return (
    <div style={{ justifyContent: "center", display: "flex" }}>
      <div
        id="t18_907_9327"
        style={{
          width: 175,
          backgroundColor: "rgba(255,255,255,1.00)",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          display: "flex",
          paddingTop: 20,
          paddingBottom: 20,
          position: "relative",
          overflow: "visible",
          borderWidth: 0,
          borderColor: "rgba(207,206,206,1)",
          borderRightWidth: 1,
          borderStyle: "solid",
          marginTop: 5,
          marginBottom: 5,
        }}
      >
        <div
          id="t18_907_9328"
          style={{
            width: 80,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            display: "flex",
            position: "relative",
            overflow: "visible",
            borderWidth: 0,
            marginTop: 0,
            marginBottom: 7.5,
            cursor: "pointer",
          }}
          onClick={(e) => {
            // var serviceSelector=props.services
            var serviceSelector = dl.changes.serviceSelector.services;

            for (var key in serviceSelector) {
              serviceSelector[key].activeVisible = "none";
              serviceSelector[key].inactiveVisible = "flex";
            }
            dl.functions.viewsPlugin.showView("offeredrooms");
            var currentPath = dl.functions.common.getLastPath();
            dl.functions.onLoadFunctions[currentPath]();

            serviceSelector["rentals"].activeVisible = "flex";
            serviceSelector["rentals"].inactiveVisible = "none";

            // var currentPath = dl.functions.common.getLastPath()
            // dl.functions.onLoadFunctions[currentPath]()
          }}
        >
          <div
            id="t18_907_9329"
            style={{
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              display: "flex",
              position: "relative",
              overflow: "visible",
              borderWidth: 0,
              marginTop: 0,
              marginBottom: 3,
            }}
          >
            {"https://melodymocktail.s3.ap-south-1.amazonaws.com/mm/rentalsInactive.png" !=
            "" ? (
              <img
                id="t18_907_9330"
                style={{
                  height: 55,
                  width: 55,
                  display: props.services.rentals.inactiveVisible,
                  borderWidth: 0,
                  marginTop: 0,
                }}
                src={
                  "https://melodymocktail.s3.ap-south-1.amazonaws.com/mm/rentalsInactive.png"
                }
              ></img>
            ) : (
              <></>
            )}

            {"https://melodymocktail.s3.ap-south-1.amazonaws.com/mm/rentalsActive.png" !=
            "" ? (
              <img
                id="t18_907_9331"
                style={{
                  height: 55,
                  width: 55,
                  display: props.services.rentals.activeVisible,
                  borderWidth: 0,
                  marginBottom: 0,
                }}
                src={
                  "https://melodymocktail.s3.ap-south-1.amazonaws.com/mm/rentalsActive.png"
                }
              ></img>
            ) : (
              <></>
            )}
          </div>

          <span
            id="t18_907_9332"
            style={{
              fontFamily: "Inter",
              fontSize: 14,
              fontWeight: 600,
              color: "rgba(113,113,113,1)",
              letterSpacing: 0,
              lineHeight: "16.94318199157715px",
              textAlign: "center",
              marginTop: 3,
              marginBottom: 0,
            }}
          >
            Rentals
          </span>
        </div>

        <div
          id="t18_907_9333"
          style={{
            width: 93,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            display: "flex",
            position: "relative",
            overflow: "visible",
            borderWidth: 0,
            marginTop: 7.5,
            marginBottom: 7.5,
            cursor: "pointer",
          }}
          onClick={(e) => {
            // var serviceSelector=props.services

            var serviceSelector = dl.changes.serviceSelector.services;

            for (var key in serviceSelector) {
              serviceSelector[key].activeVisible = "none";
              serviceSelector[key].inactiveVisible = "flex";
            }

            serviceSelector["rideSharing"].activeVisible = "flex";
            serviceSelector["rideSharing"].inactiveVisible = "none";
            dl.functions.viewsPlugin.showView("wantedrides");

            var currentPath = dl.functions.common.getLastPath();
            dl.functions.onLoadFunctions[currentPath]();
          }}
        >
          <div
            id="t18_907_9334"
            style={{
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              display: "flex",
              position: "relative",
              overflow: "visible",
              borderWidth: 0,
              marginTop: 0,
              marginBottom: 3,
            }}
          >
            {"https://melodymocktail.s3.ap-south-1.amazonaws.com/mm/ridesInactive.png" !=
            "" ? (
              <img
                id="t18_907_9335"
                style={{
                  height: 55,
                  width: 55,
                  display: props.services.rideSharing.inactiveVisible,
                  borderWidth: 0,
                  marginTop: 0,
                }}
                src={
                  "https://melodymocktail.s3.ap-south-1.amazonaws.com/mm/ridesInactive.png"
                }
              ></img>
            ) : (
              <></>
            )}

            {"https://melodymocktail.s3.ap-south-1.amazonaws.com/mm/ridesActive.png" !=
            "" ? (
              <img
                id="t18_907_9336"
                style={{
                  height: 55,
                  width: 55,
                  display: props.services.rideSharing.activeVisible,
                  borderWidth: 0,
                  marginBottom: 0,
                }}
                src={
                  "https://melodymocktail.s3.ap-south-1.amazonaws.com/mm/ridesActive.png"
                }
              ></img>
            ) : (
              <></>
            )}
          </div>

          <span
            id="t18_907_9337"
            style={{
              fontFamily: "Inter",
              fontSize: 14,
              fontWeight: 600,
              color: "rgba(113,113,113,1)",
              letterSpacing: 0,
              lineHeight: "16.94318199157715px",
              textAlign: "center",
              marginTop: 3,
              marginBottom: 0,
            }}
          >
            Ride sharing
          </span>
        </div>

        <div
          id="t18_907_9338"
          style={{
            width: 141,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            display: "flex",
            position: "relative",
            overflow: "visible",
            borderWidth: 0,
            marginTop: 7.5,
            marginBottom: 7.5,
            cursor: "pointer",
          }}
          onClick={(e) => {
            // var serviceSelector=props.services
            var serviceSelector = dl.changes.serviceSelector.services;

            for (var key in serviceSelector) {
              serviceSelector[key].activeVisible = "none";
              serviceSelector[key].inactiveVisible = "flex";
            }

            serviceSelector["movieSuggestions"].activeVisible = "flex";
            serviceSelector["movieSuggestions"].inactiveVisible = "none";

            dl.functions.viewsPlugin.showView("moviesuggestions");

            var currentPath = dl.functions.common.getLastPath();
            dl.functions.onLoadFunctions[currentPath]();
          }}
        >
          <div
            id="t18_907_9339"
            style={{
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              display: "flex",
              position: "relative",
              overflow: "visible",
              borderWidth: 0,
              marginTop: 0,
              marginBottom: 3,
            }}
          >
            {"https://melodymocktail.s3.ap-south-1.amazonaws.com/mm/moviesInactive.png" !=
            "" ? (
              <img
                id="t18_907_9340"
                style={{
                  height: 55,
                  width: 54.83203125,
                  display: props.services.movieSuggestions.inactiveVisible,
                  borderWidth: 0,
                  marginTop: 0,
                }}
                src={
                  "https://melodymocktail.s3.ap-south-1.amazonaws.com/mm/moviesInactive.png"
                }
              ></img>
            ) : (
              <></>
            )}

            {"https://melodymocktail.s3.ap-south-1.amazonaws.com/mm/moviesActive.png" !=
            "" ? (
              <img
                id="t18_907_9341"
                style={{
                  height: 55,
                  width: 54.660400390625,
                  display: props.services.movieSuggestions.activeVisible,
                  borderWidth: 0,
                  marginBottom: 0,
                }}
                src={
                  "https://melodymocktail.s3.ap-south-1.amazonaws.com/mm/moviesActive.png"
                }
              ></img>
            ) : (
              <></>
            )}
          </div>

          <span
            id="t18_907_9342"
            style={{
              fontFamily: "Inter",
              fontSize: 14,
              fontWeight: 600,
              color: "rgba(113,113,113,1)",
              letterSpacing: 0,
              lineHeight: "16.94318199157715px",
              textAlign: "center",
              marginTop: 3,
              marginBottom: 0,
            }}
          >
            Movie suggestions
          </span>
        </div>

        <div
          id="t18_907_9343"
          style={{
            width: 101,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            display: "flex",
            position: "relative",
            overflow: "visible",
            borderWidth: 0,
            marginTop: 7.5,
            marginBottom: 7.5,
            cursor: "pointer",
          }}
          onClick={(e) => {
            // var serviceSelector=props.services
            var serviceSelector = dl.changes.serviceSelector.services;

            for (var key in serviceSelector) {
              serviceSelector[key].activeVisible = "none";
              serviceSelector[key].inactiveVisible = "flex";
            }

            serviceSelector["studyAbroad"].activeVisible = "flex";
            serviceSelector["studyAbroad"].inactiveVisible = "none";

            dl.functions.viewsPlugin.showView("studyabroadbookings");
            var currentPath = dl.functions.common.getLastPath();
            dl.functions.onLoadFunctions[currentPath]();
          }}
        >
          <div
            id="t18_907_9344"
            style={{
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              display: "flex",
              position: "relative",
              overflow: "visible",
              borderWidth: 0,
              marginTop: 0,
              marginBottom: 3,
            }}
          >
            {"https://melodymocktail.s3.ap-south-1.amazonaws.com/mm/studyAbroadInactive.png" !=
            "" ? (
              <img
                id="t18_907_9345"
                style={{
                  height: 55,
                  width: 54.83203125,
                  display: props.services.studyAbroad.inactiveVisible,
                  borderWidth: 0,
                  marginTop: 0,
                }}
                src={
                  "https://melodymocktail.s3.ap-south-1.amazonaws.com/mm/studyAbroadInactive.png"
                }
              ></img>
            ) : (
              <></>
            )}

            {"https://melodymocktail.s3.ap-south-1.amazonaws.com/mm/studyAbroadActive.png" !=
            "" ? (
              <img
                id="t18_907_9346"
                style={{
                  height: 55,
                  width: 54.660400390625,
                  display: props.services.studyAbroad.activeVisible,
                  borderWidth: 0,
                  marginBottom: 0,
                }}
                src={
                  "https://melodymocktail.s3.ap-south-1.amazonaws.com/mm/studyAbroadActive.png"
                }
              ></img>
            ) : (
              <></>
            )}
          </div>

          <span
            id="t18_907_9347"
            style={{
              fontFamily: "Inter",
              fontSize: 14,
              fontWeight: 600,
              color: "rgba(113,113,113,1)",
              letterSpacing: 0,
              lineHeight: "16.94318199157715px",
              textAlign: "center",
              marginTop: 3,
              marginBottom: 0,
            }}
          >
            Study abroad
          </span>
        </div>

        <div
          id="t18_907_9348"
          style={{
            width: 141,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            display: "flex",
            position: "relative",
            overflow: "visible",
            borderWidth: 0,
            marginTop: 7.5,
            marginBottom: 7.5,
            cursor: "pointer",
          }}
          onClick={(e) => {
            // var serviceSelector=props.services
            var serviceSelector = dl.changes.serviceSelector.services;

            for (var key in serviceSelector) {
              serviceSelector[key].activeVisible = "none";
              serviceSelector[key].inactiveVisible = "flex";
            }

            serviceSelector["visaQna"].activeVisible = "flex";
            serviceSelector["visaQna"].inactiveVisible = "none";

            dl.functions.viewsPlugin.showView("visafaq");
            var currentPath = dl.functions.common.getLastPath();
            dl.functions.onLoadFunctions[currentPath]();
          }}
        >
          <div
            id="t18_907_9349"
            style={{
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              display: "flex",
              position: "relative",
              overflow: "visible",
              borderWidth: 0,
              marginTop: 0,
              marginBottom: 3,
            }}
          >
            {"https://melodymocktail.s3.ap-south-1.amazonaws.com/mm/visaInactive.png" !=
            "" ? (
              <img
                id="t18_907_9350"
                style={{
                  height: 55,
                  width: 54.83203125,
                  display: props.services.visaQna.inactiveVisible,
                  borderWidth: 0,
                  marginTop: 0,
                }}
                src={
                  "https://melodymocktail.s3.ap-south-1.amazonaws.com/mm/visaInactive.png"
                }
              ></img>
            ) : (
              <></>
            )}

            {"https://melodymocktail.s3.ap-south-1.amazonaws.com/mm/visaActive.png" !=
            "" ? (
              <img
                id="t18_907_9351"
                style={{
                  height: 55,
                  width: 54.660400390625,
                  display: props.services.visaQna.activeVisible,
                  borderWidth: 0,
                  marginBottom: 0,
                }}
                src={
                  "https://melodymocktail.s3.ap-south-1.amazonaws.com/mm/visaActive.png"
                }
              ></img>
            ) : (
              <></>
            )}
          </div>

          <span
            id="t18_907_9352"
            style={{
              fontFamily: "Inter",
              fontSize: 14,
              fontWeight: 600,
              color: "rgba(113,113,113,1)",
              letterSpacing: 0,
              lineHeight: "16.94318199157715px",
              textAlign: "center",
              marginTop: 3,
              marginBottom: 0,
            }}
          >
            Visa & Immigration
          </span>
        </div>

        <div
          id="t18_907_9353"
          style={{
            width: 131,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            display: "flex",
            position: "relative",
            overflow: "visible",
            borderWidth: 0,
            marginTop: 7.5,
            marginBottom: 7.5,
            cursor: "pointer",
          }}
          onClick={(e) => {
            // var serviceSelector=props.services
            var serviceSelector = dl.changes.serviceSelector.services;

            for (var key in serviceSelector) {
              serviceSelector[key].activeVisible = "none";
              serviceSelector[key].inactiveVisible = "flex";
            }

            serviceSelector["travelCompanion"].activeVisible = "flex";
            serviceSelector["travelCompanion"].inactiveVisible = "none";

            dl.functions.viewsPlugin.showView("wantedtravelcompanion");
            var currentPath = dl.functions.common.getLastPath();
            dl.functions.onLoadFunctions[currentPath]();
            // var currentPath = dl.functions.common.getLastPath()
            // dl.functions.onLoadFunctions[currentPath]()
          }}
        >
          <div
            id="t18_907_9354"
            style={{
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              display: "flex",
              position: "relative",
              overflow: "visible",
              borderWidth: 0,
              marginTop: 0,
              marginBottom: 3,
            }}
          >
            {"https://melodymocktail.s3.ap-south-1.amazonaws.com/mm/travelCompanionInactive.png" !=
            "" ? (
              <img
                id="t18_907_9355"
                style={{
                  height: 55,
                  width: 54.83203125,
                  display: props.services.travelCompanion.inactiveVisible,
                  borderWidth: 0,
                  marginTop: 0,
                }}
                src={
                  "https://melodymocktail.s3.ap-south-1.amazonaws.com/mm/travelCompanionInactive.png"
                }
              ></img>
            ) : (
              <></>
            )}

            {"https://melodymocktail.s3.ap-south-1.amazonaws.com/mm/travelCompanionActive.png" !=
            "" ? (
              <img
                id="t18_907_9356"
                style={{
                  height: 55,
                  width: 54.660400390625,
                  display: props.services.travelCompanion.activeVisible,
                  borderWidth: 0,
                  marginBottom: 0,
                }}
                src={
                  "https://melodymocktail.s3.ap-south-1.amazonaws.com/mm/travelCompanionActive.png"
                }
              ></img>
            ) : (
              <></>
            )}
          </div>

          <span
            id="t18_907_9357"
            style={{
              fontFamily: "Inter",
              fontSize: 14,
              fontWeight: 600,
              color: "rgba(113,113,113,1)",
              letterSpacing: 0,
              lineHeight: "16.94318199157715px",
              textAlign: "center",
              marginTop: 3,
              marginBottom: 0,
            }}
          >
            Travel companion
          </span>
        </div>

        <div
          id="t18_907_9358"
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            display: "flex",
            position: "relative",
            overflow: "visible",
            borderWidth: 0,
            marginTop: 7.5,
            marginBottom: 7.5,
            cursor: "pointer",
          }}
          onClick={(e) => {
            // var serviceSelector=props.services
            var serviceSelector = dl.changes.serviceSelector.services;

            for (var key in serviceSelector) {
              serviceSelector[key].activeVisible = "none";
              serviceSelector[key].inactiveVisible = "flex";
            }

            serviceSelector["blogs"].activeVisible = "flex";
            serviceSelector["blogs"].inactiveVisible = "none";

            dl.functions.viewsPlugin.showView("blogs");
            var currentPath = dl.functions.common.getLastPath();
            dl.functions.onLoadFunctions[currentPath]();
          }}
        >
          <div
            id="t18_907_9359"
            style={{
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              display: "flex",
              position: "relative",
              overflow: "visible",
              borderWidth: 0,
              marginTop: 0,
              marginBottom: 3,
            }}
          >
            {"https://melodymocktail.s3.ap-south-1.amazonaws.com/mm/blogsInactive.png" !=
            "" ? (
              <img
                id="t18_907_9360"
                style={{
                  height: 55,
                  width: 55,
                  display: props.services.blogs.inactiveVisible,
                  borderWidth: 0,
                  marginTop: 0,
                }}
                src={
                  "https://melodymocktail.s3.ap-south-1.amazonaws.com/mm/blogsInactive.png"
                }
              ></img>
            ) : (
              <></>
            )}

            {"https://melodymocktail.s3.ap-south-1.amazonaws.com/mm/blogsActive.png" !=
            "" ? (
              <img
                id="t18_907_9361"
                style={{
                  height: 55,
                  width: 55,
                  display: props.services.blogs.activeVisible,
                  borderWidth: 0,
                  marginBottom: 0,
                }}
                src={
                  "https://melodymocktail.s3.ap-south-1.amazonaws.com/mm/blogsActive.png"
                }
              ></img>
            ) : (
              <></>
            )}
          </div>

          <span
            id="t18_907_9362"
            style={{
              fontFamily: "Inter",
              fontSize: 14,
              fontWeight: 600,
              color: "rgba(113,113,113,1)",
              letterSpacing: 0,
              lineHeight: "16.94318199157715px",
              textAlign: "center",
              marginTop: 3,
              marginBottom: 0,
            }}
          >
            Blogs
          </span>
        </div>

        <div
          id="t18_907_9363"
          style={{
            width: 80,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            display: "flex",
            position: "relative",
            overflow: "visible",
            borderWidth: 0,
            marginTop: 7.5,
            marginBottom: 7.5,
            cursor: "pointer",
          }}
          onClick={(e) => {
            // var serviceSelector=props.services
            var serviceSelector = dl.changes.serviceSelector.services;

            for (var key in serviceSelector) {
              serviceSelector[key].activeVisible = "none";
              serviceSelector[key].inactiveVisible = "flex";
            }

            serviceSelector["users"].activeVisible = "flex";
            serviceSelector["users"].inactiveVisible = "none";

            dl.functions.viewsPlugin.showView("users");
            var currentPath = dl.functions.common.getLastPath();
            dl.functions.onLoadFunctions[currentPath]();
          }}
        >
          <div
            id="t18_907_9372"
            style={{
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              display: "flex",
              position: "relative",
              overflow: "visible",
              borderWidth: 0,
              marginTop: 0,
              marginBottom: 3,
            }}
          >
            {"https://melodymocktail.s3.ap-south-1.amazonaws.com/mm/usersInactive.png" !=
            "" ? (
              <img
                id="t18_907_9364"
                style={{
                  height: 55,
                  width: 54.660400390625,
                  display: props.services.users.inactiveVisible,
                  borderWidth: 0,
                  marginTop: 0,
                }}
                src={
                  "https://melodymocktail.s3.ap-south-1.amazonaws.com/mm/usersInactive.png"
                }
              ></img>
            ) : (
              <></>
            )}

            {"https://melodymocktail.s3.ap-south-1.amazonaws.com/mm/usersActive.png" !=
            "" ? (
              <img
                id="t18_907_9371"
                style={{
                  height: 55,
                  width: 54.83203125,
                  display: props.services.users.activeVisible,
                  borderWidth: 0,
                  marginBottom: 0,
                }}
                src={
                  "https://melodymocktail.s3.ap-south-1.amazonaws.com/mm/usersActive.png"
                }
              ></img>
            ) : (
              <></>
            )}
          </div>

          <span
            id="t18_907_9365"
            style={{
              fontFamily: "Inter",
              fontSize: 14,
              fontWeight: 600,
              color: "rgba(113,113,113,1)",
              letterSpacing: 0,
              lineHeight: "16.94318199157715px",
              textAlign: "left",
              marginTop: 3,
              marginBottom: 0,
            }}
          >
            Users
          </span>
        </div>

        <div
          id="t18_907_9366"
          style={{
            width: 80.47998046875,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            display: "flex",
            position: "relative",
            overflow: "visible",
            borderWidth: 0,
            marginTop: 7.5,
            marginBottom: 0,
            cursor: "pointer",
          }}
          onClick={(e) => {
            // var serviceSelector=props.services
            var serviceSelector = dl.changes.serviceSelector.services;

            for (var key in serviceSelector) {
              serviceSelector[key].activeVisible = "none";
              serviceSelector[key].inactiveVisible = "flex";
            }

            serviceSelector["ads"].activeVisible = "flex";
            serviceSelector["ads"].inactiveVisible = "none";
            dl.functions.viewsPlugin.showView("ads");

            var currentPath = dl.functions.common.getLastPath();
            dl.functions.onLoadFunctions[currentPath]();
          }}
        >
          <div
            id="t18_907_9367"
            style={{
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              display: "flex",
              position: "relative",
              overflow: "visible",
              borderWidth: 0,
              marginTop: 0,
              marginBottom: 3,
            }}
          >
            {"https://melodymocktail.s3.ap-south-1.amazonaws.com/mm/adsInactive.png" !=
            "" ? (
              <img
                id="t18_907_9368"
                style={{
                  height: 55,
                  width: 54.83203125,
                  display: props.services.ads.inactiveVisible,
                  borderWidth: 0,
                  marginTop: 0,
                }}
                src={
                  "https://melodymocktail.s3.ap-south-1.amazonaws.com/mm/adsInactive.png"
                }
              ></img>
            ) : (
              <></>
            )}

            {"https://melodymocktail.s3.ap-south-1.amazonaws.com/mm/adsActive.png" !=
            "" ? (
              <img
                id="t18_907_9369"
                style={{
                  height: 55,
                  width: 55,
                  display: props.services.ads.activeVisible,
                  borderWidth: 0,
                  marginBottom: 0,
                }}
                src={
                  "https://melodymocktail.s3.ap-south-1.amazonaws.com/mm/adsActive.png"
                }
              ></img>
            ) : (
              <></>
            )}
          </div>

          <span
            id="t18_907_9370"
            style={{
              fontFamily: "Inter",
              fontSize: 14,
              fontWeight: 600,
              color: "rgba(113,113,113,1)",
              letterSpacing: 0,
              lineHeight: "16.94318199157715px",
              textAlign: "center",
              marginTop: 3,
              marginBottom: 0,
            }}
          >
            Ads
          </span>
        </div>

        <div
          id="t18_907_9366"
          style={{
            width: 80.47998046875,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            display: "flex",
            position: "relative",
            overflow: "visible",
            borderWidth: 0,
            marginTop: 7.5,
            marginBottom: 0,
            cursor: "pointer",
          }}
          onClick={(e) => {
            // var serviceSelector=props.services
            var serviceSelector = dl.changes.serviceSelector.services;

            for (var key in serviceSelector) {
              serviceSelector[key].activeVisible = "none";
              serviceSelector[key].inactiveVisible = "flex";
            }

            serviceSelector["webinar"].activeVisible = "flex";
            serviceSelector["webinar"].inactiveVisible = "none";
            dl.functions.viewsPlugin.showView("webinar");

            var currentPath = dl.functions.common.getLastPath();
            dl.functions.onLoadFunctions[currentPath]();
          }}
        >
          <div
            id="t18_907_9367"
            style={{
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              display: "flex",
              position: "relative",
              overflow: "visible",
              borderWidth: 0,
              marginTop: 0,
              marginBottom: 3,
            }}
          >
            {"https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/7467e36d-2cf7-4cda-a056-935a167fd6f1.png" !=
            "" ? (
              <img
                id="t18_907_9368"
                style={{
                  height: 55,
                  width: 54.83203125,
                  display: props.services.webinar.inactiveVisible,
                  borderWidth: 0,
                  marginTop: 0,
                }}
                src={
                  "https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/7467e36d-2cf7-4cda-a056-935a167fd6f1.png"
                }
              ></img>
            ) : (
              <></>
            )}

            {"https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/7467e36d-2cf7-4cda-a056-935a167fd6f1.png" !=
            "" ? (
              <img
                id="t18_907_9369"
                style={{
                  height: 55,
                  width: 55,
                  display: props.services.webinar.activeVisible,
                  borderWidth: 0,
                  marginBottom: 0,
                }}
                src={
                  "https://melodymocktail.blob.core.windows.net/website/mmAwsImagesBucket/7467e36d-2cf7-4cda-a056-935a167fd6f1.png"
                }
              ></img>
            ) : (
              <></>
            )}
          </div>

          <span
            id="t18_907_9370"
            style={{
              fontFamily: "Inter",
              fontSize: 14,
              fontWeight: 600,
              color: "rgba(113,113,113,1)",
              letterSpacing: 0,
              lineHeight: "16.94318199157715px",
              textAlign: "center",
              marginTop: 3,
              marginBottom: 0,
            }}
          >
            Webinar
          </span>
        </div>
      </div>
    </div>
  );
});
export default AdminServiceSelector;
