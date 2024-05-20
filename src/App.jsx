import "./App.css";
import "./hover.css";
import "./customCss.css";
import "./index.css";
import "../src/components/lexialComponents/themes/PlaygroundEditorTheme.css";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
  Navigate,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import onLoad from "./datalayer/onload";
import { useEffect } from "react";
import dl from "./datalayer/state";
import StripeCheckout from "./components/main/StripeCheckout";

import Login from "./views/Login";
import Users from "./views/Users";
import Blogs from "./views/Blogs";
import Moviesuggestions from "./views/Moviesuggestions";
import Visaquestions from "./views/Visaquestions";
import Visafaq from "./views/Visafaq";
import Visabookings from "./views/Visabookings";
import Visaexperts from "./views/Visaexperts";
import Blogcomments from "./views/Blogcomments";
import Questioncomments from "./views/Questioncomments";
import Studyabroadbookings from "./views/Studyabroadbookings";
import Studyabroadexperts from "./views/Studyabroadexperts";
import Wantedrides from "./views/Wantedrides";
import Offeredrides from "./views/Offeredrides";
import Offeredhomes from "./views/Offeredhomes";
import Wantedhomes from "./views/Wantedhomes";
import Offeredrooms from "./views/Offeredrooms";
import Wantedrooms from "./views/Wantedrooms";
import Blogimages from "./views/Blogimages";
import Blogcategories from "./views/Blogcategories";
import Adspaces from "./views/Adspaces";
import Ads from "./views/Ads";
import Wantedtravelcompanion from "./views/Wantedtravelcompanion";
import Offeredtravelcompanion from "./views/Offeredtravelcompanion";
import AddNewBlogModal from "./modals/AddNewBlogModal";
import AddNewMovieSuggestionModal from "./modals/AddNewMovieSuggestionModal";
import CommentsModal from "./modals/CommentsModal";
import AddNewQuestionModal from "./modals/AddNewQuestionModal";
import EditFaqModal from "./modals/EditFaqModal";
import BookingDetailsModal from "./modals/BookingDetailsModal";
import ReassignExpertModal from "./modals/ReassignExpertModal";
import AddNewExpertModal from "./modals/AddNewExpertModal";
import ReportsModal from "./modals/ReportsModal";
import LoadingModal from "./modals/LoadingModal";
import EditPromotionsModal from "./modals/EditPromotionsModal";
import AddNewImageModal from "./modals/AddNewImageModal";
import AddNewCategoryModal from "./modals/AddNewCategoryModal";
import AddNewAdModal from "./modals/AddNewAdModal";
import ActivateConfirmationModal from "./modals/ActivateConfirmationModal";
import DeleteConfirmationModal from "./modals/DeleteConfirmationModal";
import Webinar from "./views/Webinars/webinar";
import AddNewBlog from "./views/AddNewBlog/AddNewBlog";
import VisaQuestionAnswerModal from "./modals/VisaQuestionAnswer";

function App() {
  const location = useLocation();

  var navigate = useNavigate();
  useEffect(() => {
    dl.functions.navigate = navigate;
    if (!window.toast) {
      window.toast = toast;
    }
    onLoad();
  }, []);
  return (
    <>
      <TransitionGroup component={null}>
        <CSSTransition key={location.key} classNames="fade" timeout={300}>
          <Routes>
            <Route path="login" element={<Login />} />
            <Route path="users" element={<Users />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="moviesuggestions" element={<Moviesuggestions />} />
            <Route path="visaquestions" element={<Visaquestions />} />
            <Route path="visafaq" element={<Visafaq />} />
            <Route path="visabookings" element={<Visabookings />} />
            <Route path="visaexperts" element={<Visaexperts />} />
            <Route path="blogcomments" element={<Blogcomments />} />
            <Route path="addNewBlog" element={<AddNewBlog />} />
            <Route path="questioncomments" element={<Questioncomments />} />
            <Route
              path="studyabroadbookings"
              element={<Studyabroadbookings />}
            />
            <Route path="studyabroadexperts" element={<Studyabroadexperts />} />
            <Route path="wantedrides" element={<Wantedrides />} />
            <Route path="offeredrides" element={<Offeredrides />} />
            <Route path="offeredhomes" element={<Offeredhomes />} />
            <Route path="wantedhomes" element={<Wantedhomes />} />
            <Route path="offeredrooms" element={<Offeredrooms />} />
            <Route path="wantedrooms" element={<Wantedrooms />} />
            <Route path="blogimages" element={<Blogimages />} />
            <Route path="blogcategories" element={<Blogcategories />} />
            <Route path="adspaces" element={<Adspaces />} />
            <Route path="ads" element={<Ads />} />
            <Route path="webinar" element={<Webinar />} />
            <Route
              path="wantedtravelcompanion"
              element={<Wantedtravelcompanion />}
            />
            <Route
              path="offeredtravelcompanion"
              element={<Offeredtravelcompanion />}
            />
            <Route path="/"></Route>
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      <AddNewBlogModal />
      <AddNewMovieSuggestionModal />
      <CommentsModal />
      <AddNewQuestionModal />
      <EditFaqModal />
      <BookingDetailsModal />
      <ReassignExpertModal />
      <AddNewExpertModal />
      <ReportsModal />
      <LoadingModal />
      <EditPromotionsModal />
      <AddNewImageModal />
      <AddNewCategoryModal />
      <AddNewAdModal />
      <ActivateConfirmationModal />
      <DeleteConfirmationModal />
      <VisaQuestionAnswerModal />

      <StripeCheckout />

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
