import _ from "lodash";
import dl from "./state";

function onLoad() {
  const verifyadmin = async (adminDetail) => {
    var myHeaders = new Headers();
    myHeaders.append("apiKey", "OdocRewT1nf/GhB3RCq1Xg==");
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(adminDetail);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      var response = await fetch(
        // "https://services.neutrodev.com/users/login",
        "https://auth.melodymocktail.com/auth/admin",
        requestOptions
      );
      var res = await response.json();
      var users = [];
      for (var i = 0; i < res.length; i++) {
        var status = "active";
        var user = res[0];
        if (user.status) {
          status = user.status;
        }
        if (status == "active") {
          user["activeVisible"] = "none";
          user["disableVisible"] = "flex";
        } else {
          user["activeVisible"] = "flex";
          user["disableVisible"] = "none";
        }
        users.push(user);
      }

      return { status: response.status, result: res };
    } catch (err) {
      console.error(err);
      return err;
    }

    // .then(response => response.text())
    // .then(result => console.log(result))
    // .catch(error => console.log('error', error));
  };

  dl.functions.verifyadmin = verifyadmin;

  const getUsers = async (limit, page) => {
    console.log(process.env.BASE_URL);

    var token = dl.functions.common.getCookie("adminToken");
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    try {
      dl.functions.modalsPlugin.openModal("loading");
      var url = process.env.BASE_URL;
      var response = await fetch(
        `${url}/admin/users?limit=${limit}&page=${page}`,
        requestOptions
      );
      var res = await response.json();
      dl.changes.paginationState.total = res.totalPage;
      dl.changes.paginationState.active = Number(page);
      dl.functions.modalsPlugin.closeModal("loading");
      var users = [];
      for (var i = 0; i < res.result.length; i++) {
        var status = "active";
        var user = res.result[i];
        if (user.status) {
          status = user.status;
        }
        user.status = status; //_.capitalize(status)
        if (status == "active") {
          user["activeVisible"] = "none";
          user["disableVisible"] = "flex";
        } else {
          user["activeVisible"] = "flex";
          user["disableVisible"] = "none";
        }
        users.push(user);
      }

      dl.changes.data = users;
      return users;
      // alert(res)
    } catch (err) {
      console.error(err);
      return err;
    }
  };

  dl.functions.getUsers = getUsers;

  const updateUser = async (updates, index) => {
    var myHeaders = new Headers();
    var token = dl.functions.common.getCookie("adminToken");
    myHeaders.append("Authorization", token);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(updates);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    try {
      var url = process.env.BASE_URL;
      dl.functions.modalsPlugin.openModal("loading");
      var response = await fetch(
        // "https://melody-mocktail-6tjz.api.neutrodev.com/admin/users/update",
        `${url}/admin/users/update`,
        requestOptions
      );
      var res = await response.json();
      dl.functions.modalsPlugin.closeModal("loading");

      return response.status;
    } catch (err) {
      console.error(err);
      return err;
    }
  };
  dl.functions.updateUser = updateUser;

  const createBlogs = async (body) => {
    var myHeaders = new Headers();
    var token = dl.functions.common.getCookie("adminToken");
    myHeaders.append("Authorization", token);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(body);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      var url = process.env.BASE_URL;
      dl.functions.modalsPlugin.openModal("loading");
      var response = await fetch(
        // "https://melody-mocktail-6tjz.api.neutrodev.com/admin/blogs/create",
        `${url}/admin/blogs/create`,
        requestOptions
      );
      var res = await response.json();
      // alert(JSON.stringify(res))
      dl.functions.modalsPlugin.closeModal("loading");

      return { status: response.status, result: res };
    } catch (err) {
      console.error(err);
      return err;
    }
  };
  dl.functions.createBlogs = createBlogs;

  const getBlogs = async (limit, page) => {
    var myHeaders = new Headers();
    var token = dl.functions.common.getCookie("adminToken");
    myHeaders.append("Authorization", token);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    try {
      var url = process.env.BASE_URL;
      dl.functions.modalsPlugin.openModal("loading");
      var response = await fetch(
        `${url}/admin/blogs?limit=${limit}&page=${page}`,
        requestOptions
      );
      var res = await response.json();
      // alert(JSON.stringify(res))
      var blogs = [];
      dl.changes.paginationState.total = res.totalPage;
      dl.changes.paginationState.active = Number(page);
      dl.functions.modalsPlugin.closeModal("loading");
      for (var i = 0; i < res.result.length; i++) {
        var status = "active";
        var user = res.result[i];
        if (user.status) {
          status = user.status;
        }
        user.status = status; //_.capitalize(status)
        if (status == "active") {
          user["activeVisible"] = "none";
          user["disableVisible"] = "flex";
        } else {
          user["activeVisible"] = "flex";
          user["disableVisible"] = "none";
        }

        var date = new Date(user.mOn);
        var options = { year: "2-digit", month: "short", day: "numeric" };
        // var hours = date.getUTCHours();
        // var minutes = date.getUTCMinutes();
        // var formattedHours = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours;
        // var formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
        user["mOn"] = date.toLocaleString(undefined, options);
        // res.result[i]["cOnTime"] = `${formattedHours}:${formattedMinutes}`

        if (user.pinned == true) {
          user["pinned"] = "true";
          user["pinVisible"] = "flex";
          user["unpinVisible"] = "none";
        } else {
          user["pinned"] = "false";
          user["pinVisible"] = "none";
          user["unpinVisible"] = "flex";
        }
        user["menuItems"] = ["Edit", "View More", "View Comments"];
        blogs.push(user);
      }

      dl.changes.bloglist = blogs;
      return blogs;
      // alert(res)
    } catch (err) {
      // alert(JSON.stringify(err))
      return err;
    }
  };
  dl.functions.getBlogs = getBlogs;

  const updateBlogs = async (body) => {
    var myHeaders = new Headers();
    var token = dl.functions.common.getCookie("adminToken");
    myHeaders.append("Authorization", token);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(body);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      var url = process.env.BASE_URL;
      dl.functions.modalsPlugin.openModal("loading");
      var response = await fetch(`${url}/admin/blogs/update`, requestOptions);
      var res = await response.json();
      dl.functions.modalsPlugin.closeModal("loading");
      // alert(JSON.stringify(res))

      return { status: response.status, res: res };
    } catch (err) {
      // console.error(err);
      return err;
    }
  };
  dl.functions.updateBlogs = updateBlogs;

  const getBlogDetail = async (id) => {
    var myHeaders = new Headers();
    var token = dl.functions.common.getCookie("adminToken");
    myHeaders.append("Authorization", token);
    // myHeaders.append("Authorization", "eyJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI2NDJmYjcwZWI1N2MyOGJjODk0NWYxZGIiLCJhcGlrZXkiOiJPZG9jUmV3VDFuZi9HaEIzUkNxMVhnPT0iLCJ0eXBlIjoibWFpbiIsInR3b0ZhY3RvciI6ZmFsc2UsImlhdCI6MTY4MDg1MTYzNywiZXhwIjoxNjg0NDUxNjM3fQ._xHGr4Tbf1Oztm4khfKuTGIlJANKnWuS5L38vBAdwdc");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    try {
      var url = process.env.BASE_URL;
      dl.functions.modalsPlugin.openModal("loading");
      var response = await fetch(
        `${url}/admin/blogDetail?blogId=${id}`,
        requestOptions
      );
      var res = await response.json();
      if (res[0]) {
        dl.changes.blog.blogType = res[0].blogType;
        dl.changes.blog.title = res[0].title;
        dl.changes.blog.description = res[0].description;
        dl.changes.blog.travelType = res[0].travelType;
        dl.changes.blog.destination = res[0].destination;
        dl.changes.blog.status = res[0].status;
        dl.changes.blog.image = res[0].image ? res[0].image : { url: "" };
        dl.changes.blog["updating"] = true;
        dl.changes.blog["id"] = res[0]._id;
      }
      dl.functions.modalsPlugin.closeModal("loading");
      return res;
    } catch (err) {
      console.error(err);
      return err;
    }
  };
  dl.functions.getBlogDetail = getBlogDetail;

  const getMovieSuggestion = async (limit, page) => {
    var myHeaders = new Headers();
    var token = dl.functions.common.getCookie("adminToken");
    myHeaders.append("Authorization", token);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    try {
      var url = process.env.BASE_URL;
      dl.functions.modalsPlugin.openModal("loading");
      var response = await fetch(
        `${url}/admin/movieSuggestion?limit=${limit}&page=${page}`,
        requestOptions
      );
      var res = await response.json();
      // alert(JSON.stringify(res))
      dl.changes.paginationState.total = res.totalCount;
      dl.changes.paginationState.active = Number(page);
      dl.functions.modalsPlugin.closeModal("loading");
      var arr = [];
      for (var i = 0; i < res.result.length; i++) {
        var status = "active";
        var user = res.result[i];
        if (user.status) {
          status = user.status;
        }
        user.status = status; //_.capitalize(status)
        if (status == "active") {
          user["activeVisible"] = "none";
          user["disableVisible"] = "flex";
        } else {
          user["activeVisible"] = "flex";
          user["disableVisible"] = "none";
        }
        arr.push(user);
      }

      dl.changes.msDataArr = arr;
      // alert(JSON.stringify(dl.changes.msDataArr))
      return res;
      // alert(res)
    } catch (err) {
      console.error(err);
      return err;
    }
  };
  dl.functions.getMovieSuggestion = getMovieSuggestion;

  const createMovieSuggestion = async (body) => {
    var myHeaders = new Headers();
    var token = dl.functions.common.getCookie("adminToken");
    myHeaders.append("Authorization", token);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(body);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      var url = process.env.BASE_URL;
      dl.functions.modalsPlugin.openModal("loading");
      var response = await fetch(
        `${url}/admin/movieSuggestion/create`,
        requestOptions
      );
      var res = await response.json();
      // alert(JSON.stringify(res))

      dl.functions.getMovieSuggestion("7", "1");
      dl.functions.modalsPlugin.closeModal("loading");
      return { status: response.status, result: res };
    } catch (err) {
      console.error(err);
      return err;
    }
  };
  dl.functions.createMovieSuggestion = createMovieSuggestion;

  const updateMovieSuggestion = async (body) => {
    var myHeaders = new Headers();
    var token = dl.functions.common.getCookie("adminToken");
    myHeaders.append("Authorization", token);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(body);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      var url = process.env.BASE_URL;
      dl.functions.modalsPlugin.openModal("loading");
      var response = await fetch(
        `${url}/admin/movieDetail/update`,
        requestOptions
      );
      var res = await response.json();

      // alert(JSON.stringify(res))
      dl.functions.getMovieSuggestion("7", dl.changes.paginationState.active);
      dl.functions.modalsPlugin.closeModal("loading");

      return { status: response.status, res: res };
    } catch (err) {
      console.error(err);
      return err;
    }
  };
  dl.functions.updateMovieSuggestion = updateMovieSuggestion;

  const createVisafaq = async (body) => {
    var myHeaders = new Headers();
    var token = dl.functions.common.getCookie("adminToken");
    myHeaders.append("Authorization", token);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(body);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      var url = process.env.BASE_URL;
      dl.functions.modalsPlugin.openModal("loading");
      var response = await fetch(
        `${url}/admin/visafaqs/create`,
        requestOptions
      );
      var res = await response.json();
      if (response.status == 200) {
        dl.functions.getVisafaq("8", "1");
        return res;
      }
      dl.functions.modalsPlugin.closeModal("loading");
    } catch (err) {
      console.error(err);
      return err;
    }
  };
  dl.functions.createVisafaq = createVisafaq;

  const getVisafaq = async (limit, page) => {
    var myHeaders = new Headers();
    var token = dl.functions.common.getCookie("adminToken");
    myHeaders.append("Authorization", token);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    try {
      var url = process.env.BASE_URL;
      dl.functions.modalsPlugin.openModal("loading");
      var response = await fetch(
        `${url}/admin/visafaqs?limit=${limit}&page=${page}`,
        requestOptions
      );
      var res = await response.json();
      dl.changes.paginationState.total = res.totalPage;
      dl.changes.paginationState.active = Number(page);
      dl.functions.modalsPlugin.closeModal("loading");
      var list = [];
      // alert(JSON.stringify(res))
      for (let i = 0; i < res.result.length; i++) {
        // const date = new Date(res.result[i].mOn);
        // const localDateString = date.toLocaleString();
        // res.result[i][mOn] = localDateString

        var date = new Date(res.result[i].mOn);
        var options = { year: "2-digit", month: "short", day: "numeric" };
        var hours = date.getUTCHours();
        var minutes = date.getUTCMinutes();
        var formattedHours = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours;
        var formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
        res.result[i]["cOn"] = date.toLocaleString(undefined, options);
        res.result[i]["cOnTime"] = date.toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        });

        if (res.result[i].status == "active") {
          res.result[i]["activeVisible"] = "none";
          res.result[i]["disableVisible"] = "flex";
        } else {
          res.result[i]["activeVisible"] = "flex";
          res.result[i]["disableVisible"] = "none";
        }
        list.push(res.result[i]);
        // dl.changes.visafaqList.push(res.result[i])
      }
      dl.changes.visafaqList = list;
      // dl.changes.visafaqList = res.result

      return { status: response.status, totalpage: res.totalPage, res: res };
    } catch (err) {
      console.error(err);
      return err;
    }
  };
  dl.functions.getVisafaq = getVisafaq;

  const getfaqDetail = async (id) => {
    var myHeaders = new Headers();
    var token = dl.functions.common.getCookie("adminToken");
    myHeaders.append("Authorization", token);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    try {
      var url = process.env.BASE_URL;
      dl.functions.modalsPlugin.openModal("loading");
      var response = await fetch(
        `${url}/admin/visafaqsDetail?id=${id}`,
        requestOptions
      );
      var res = await response.json();
      dl.functions.modalsPlugin.closeModal("loading");
      dl.changes.visafaqDetail = res[0];
      if (res[0].status == "active") {
        dl.changes.visafaqDetail["status"] = true;
      } else {
        dl.changes.visafaqDetail["status"] = false;
      }
    } catch (err) {
      console.error(err);
      return err;
    }
  };
  dl.functions.getfaqDetail = getfaqDetail;

  const updateVisafaq = async (body) => {
    var myHeaders = new Headers();
    var token = dl.functions.common.getCookie("adminToken");
    myHeaders.append("Authorization", token);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(body);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      var url = process.env.BASE_URL;
      dl.functions.modalsPlugin.openModal("loading");
      var response = await fetch(
        `${url}/admin/visafaqs/update`,
        requestOptions
      );
      var res = await response.json();
      dl.functions.modalsPlugin.closeModal("loading");
      if (response.status == 200) {
        dl.functions.getVisafaq("7", dl.changes.paginationState.active);
        return res;
      }
    } catch (err) {
      console.error(err);
      return err;
    }
  };
  dl.functions.updateVisafaq = updateVisafaq;

  const getVisaQuestion = async (limit, page) => {
    var myHeaders = new Headers();
    var token = dl.functions.common.getCookie("adminToken");
    myHeaders.append("Authorization", token);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    try {
      var url = process.env.BASE_URL;
      dl.functions.modalsPlugin.openModal("loading");
      var response = await fetch(
        `${url}/admin/visaqandas?page=${page}&limit=${limit}`,
        requestOptions
      );
      var res = await response.json();

      dl.changes.paginationState.total = res.totalPage;
      dl.changes.paginationState.active = Number(page);
      dl.functions.modalsPlugin.closeModal("loading");
      // alert(JSON.stringify(res))
      var list = [];
      for (let i = 0; i < res.result.length; i++) {
        var date = new Date(res.result[i].cOn);
        var options = { year: "2-digit", month: "short", day: "numeric" };
        var hours = date.getUTCHours();
        var minutes = date.getUTCMinutes();
        var formattedHours = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours;
        var formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
        res.result[i]["cOn"] = date.toLocaleString(undefined, options);
        res.result[i]["cOnTime"] = date.toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        });

        res.result[i]["fullQuestion"] = res.result[i].question;
        res.result[i].question =
          res.result[i].question.substring(0, 100) + "...";

        res.result[i]["answered"] = res.result[i].answered;
        res.result[i]["answer"] = res.result[i].answers
          ? res.result[i].answers
          : ""; // change it when api have the ability

        if (res.result[i].status == "active") {
          res.result[i]["activeVisible"] = "none";
          res.result[i]["disableVisible"] = "flex";
          res.result[i]["menuItems"] = [
            "View More",
            "View Report",
            "View Comments",
          ];
        } else {
          res.result[i]["activeVisible"] = "flex";
          res.result[i]["disableVisible"] = "none";
          res.result[i]["menuItems"] = [
            "View More",
            "View Report",
            "View Comments",
          ];
        }
        list.push(res.result[i]);
        // dl.changes.visaQusetionsList.push()
      }
      dl.changes.visaQusetionsList = list;
      // dl.changes.visaQusetionsList = res.result
      return { status: response.status, totalpage: res.totalPage, res: res };
    } catch (err) {
      console.error(err);
      return err;
    }
  };
  dl.functions.getVisaQuestion = getVisaQuestion;

  const setVisaQuestionAnswer = async () => {
    // console.log("worked");
    // dl.changes.visaQusetionsList
    dl.changes.visaQuestionAnswerModalvals.answered =
      !dl.changes.visaQuestionAnswerModalvals.answered;

    var dateTime = new Date();

    var commentCount = dl.changes.visaQuestionAnswerModalvals.commentCount;

    if (dl.changes.visaQuestionAnswerModalvals.answered) {
      commentCount = commentCount + 1;
    } else {
      commentCount = commentCount - 1;
    }

    var body = {
      id: dl.changes.visaQuestionAnswerModalvals._id,
      answered: dl.changes.visaQuestionAnswerModalvals.answered,
      answeredOn: dateTime,
      answers: dl.changes.visaQuestionAnswerModalvals.answer,
      commentCount: commentCount,
    };

    var myHeaders = new Headers();
    var token = dl.functions.common.getCookie("adminToken");
    myHeaders.append("Authorization", token);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(body);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      var url = process.env.BASE_URL;
      dl.functions.modalsPlugin.openModal("loading");
      var response = await fetch(
        `${url}/admin/visaqandas/update`,
        requestOptions
      );
      var res = await response.json();
      dl.functions.modalsPlugin.closeModal("loading");
      if (response.status == 200) {
        // dl.functions.getVisaQuestion("7")
        dl.functions.modalsPlugin.closeModal("VisaQuestionAnswerModal");
        dl.functions.getVisaQuestion("8", dl.changes.paginationState.active);
        return res;
      }
    } catch (err) {
      console.error(err);
      return err;
    }
  };
  dl.functions.setVisaQuestionAnswer = setVisaQuestionAnswer;

  const updateVisaQuestion = async (body) => {
    var myHeaders = new Headers();
    var token = dl.functions.common.getCookie("adminToken");
    myHeaders.append("Authorization", token);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(body);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      var url = process.env.BASE_URL;
      dl.functions.modalsPlugin.openModal("loading");
      var response = await fetch(
        `${url}/admin/visaqandas/update`,
        requestOptions
      );
      var res = await response.json();
      dl.functions.modalsPlugin.closeModal("loading");
      if (response.status == 200) {
        // dl.functions.getVisaQuestion("7")
        return res;
      }
    } catch (err) {
      console.error(err);
      return err;
    }
  };
  dl.functions.updateVisaQuestion = updateVisaQuestion;

  const getOfferedRides = async (limit, page) => {
    var myHeaders = new Headers();
    var token = dl.functions.common.getCookie("adminToken");
    myHeaders.append("Authorization", token);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    try {
      var url = process.env.BASE_URL;
      dl.functions.modalsPlugin.openModal("loading");
      var response = await fetch(
        `${url}/admin/rideSharing?zipcode=00601&limit=${limit}&page=${page}&range=des`,
        requestOptions
      );
      var res = await response.json();

      dl.changes.paginationState.total = res.totalPage;
      dl.changes.paginationState.active = Number(page);
      dl.functions.modalsPlugin.closeModal("loading");

      if (response.status == 200) {
        dl.changes.offeredRideList = [];

        for (var i = 0; i < res.result.length; i++) {
          var result = {};
          result["_id"] = res.result[i]._id;
          // alert("here")
          result["title"] =
            res.result[i].from.city + " to " + res.result[i].to.city;
          result["postedBy"] = res.result[i].postedBy
            ? res.result[i].postedBy
            : "user";

          var date = new Date(res.result[i].mOn);
          var options = { year: "2-digit", month: "short", day: "numeric" };
          result["postedOn"] = date.toLocaleString(undefined, options);

          // result["postedOn"] = res.result[i].cOn
          result["from"] = res.result[i].from.city;
          result["to"] = res.result[i].to.city;
          result["status"] = res.result[i].status
            ? res.result[i].status
            : "active";

          result["promotion"] = res.result[i].promotion;
          if (res.result[i].promotion.status == true) {
            result["promotionState"] = "True";
            result["promotionColor"] = "rgba(2, 138, 0, 0.75)";
          } else {
            result["promotionState"] = "False";
            result["promotionColor"] = "rgba(207, 0, 0, 0.91)";
          }

          if (res.result[i].status == "active") {
            result["activeVisible"] = "none";
            result["disableVisible"] = "flex";
          } else {
            result["activeVisible"] = "flex";
            result["disableVisible"] = "none";
          }
          result["menuItems"] = ["Edit Promotion", "View More"];

          dl.changes.offeredRideList.push(result);
        }

        // alert(JSON.stringify(dl.changes.offeredRideList))
        return { status: response.status, result: result };
      }
    } catch (err) {
      console.error(err);
      return err;
    }
  };
  dl.functions.getOfferedRides = getOfferedRides;

  const getWantedRides = async (limit, page) => {
    var myHeaders = new Headers();
    var token = dl.functions.common.getCookie("adminToken");
    myHeaders.append("Authorization", token);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    try {
      var url = process.env.BASE_URL;
      dl.functions.modalsPlugin.openModal("loading");
      var response = await fetch(
        `${url}/admin/haveARide?zipcode=00601&limit=${limit}&page=${page}`,
        requestOptions
      );
      var res = await response.json();
      dl.changes.paginationState.total = res.totalPage;
      dl.changes.paginationState.active = Number(page);
      dl.functions.modalsPlugin.closeModal("loading");
      if (response.status == 200) {
        // var result = []
        dl.changes.wantedRideList = [];
        for (var i = 0; i < res.result.length; i++) {
          var result = {};
          result["_id"] = res.result[i]._id;
          result["title"] =
            res.result[i].from.city + " to " + res.result[i].to.city;
          result["postedBy"] = res.result[i].postedBy
            ? res.result[i].postedBy
            : "user";

          var date = new Date(res.result[i].mOn);
          var options = { year: "2-digit", month: "short", day: "numeric" };
          result["postedOn"] = date.toLocaleString(undefined, options);
          // result["postedOn"] = res.result[i].cOn
          result["from"] = res.result[i].from.city;
          result["to"] = res.result[i].to.city;
          result["status"] = res.result[i].status
            ? res.result[i].status
            : "active";

          result["promotion"] = res.result[i].promotion;
          if (res.result[i].promotion.status == true) {
            result["promotionState"] = "True";
            result["promotionColor"] = "rgba(2, 138, 0, 0.75)";
          } else {
            result["promotionState"] = "False";
            result["promotionColor"] = "rgba(207, 0, 0, 0.91)";
          }

          if (res.result[i].status == "active") {
            result["activeVisible"] = "none";
            result["disableVisible"] = "flex";
          } else {
            result["activeVisible"] = "flex";
            result["disableVisible"] = "none";
          }
          result["menuItems"] = ["Edit Promotion", "View More"];
          dl.changes.wantedRideList.push(result);
        }

        // alert(JSON.stringify(dl.changes.wantedRideList))
        return { status: response.status, result: result };
      }
    } catch (err) {
      console.error(err);
      return err;
    }
  };
  dl.functions.getWantedRides = getWantedRides;

  const updateRideSharing = async (body) => {
    var myHeaders = new Headers();
    var token = dl.functions.common.getCookie("adminToken");
    myHeaders.append("Authorization", token);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(body);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      var url = process.env.BASE_URL;
      dl.functions.modalsPlugin.openModal("loading");
      var response = await fetch(
        `${url}/admin/rideSharing/update`,
        requestOptions
      );
      var res = await response.json();
      dl.functions.modalsPlugin.closeModal("loading");
      if (response.status == 200) {
        // dl.functions.getVisaQuestion("7")
        return response.status;
      }
    } catch (err) {
      console.error(err);
      return err;
    }
  };
  dl.functions.updateRideSharing = updateRideSharing;

  const getOfferedRooms = async (limit, page) => {
    var myHeaders = new Headers();
    var token = dl.functions.common.getCookie("adminToken");
    myHeaders.append("Authorization", token);
    // myHeaders.append("Authorization", "eyJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI2NDUzNjc1Y2VhZTZlOThkYTc2MjIwY2IiLCJhcGlrZXkiOiJPZG9jUmV3VDFuZi9HaEIzUkNxMVhnPT0iLCJ0eXBlIjoibWFpbiIsInR3b0ZhY3RvciI6ZmFsc2UsImlhdCI6MTY4NDQ3NTEzNiwiZXhwIjoxNjg4MDc1MTM2fQ.Fhi9l5VNawVuM6X_1iB_unXO2pfznkiVywKONg6BQ-U");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    try {
      var url = process.env.BASE_URL;
      dl.functions.modalsPlugin.openModal("loading");
      var response = await fetch(
        `${url}/admin/rooms?zipcode=00601&limit=${limit}&page=${page}`,
        requestOptions
      );
      var res = await response.json();
      dl.changes.paginationState.total = res.totalPage;
      dl.changes.paginationState.active = Number(page);
      dl.functions.modalsPlugin.closeModal("loading");

      var result = [];
      if (response.status == 200) {
        // var result = []
        result = res.result;

        for (var i = 0; i < res.result.length; i++) {
          result[i]["postedBy"] = result[i].userDetail[0]
            ? result[i].userDetail[0].name
            : "user";
          if (result[i].status == "active") {
            result[i]["activeVisible"] = "none";
            result[i]["disableVisible"] = "flex";
          } else {
            result[i]["activeVisible"] = "flex";
            result[i]["disableVisible"] = "none";
          }

          // alert(JSON.stringify(result[i]))
          var date = new Date(result[i].cOn);
          var options = { year: "2-digit", month: "short", day: "numeric" };
          result[i]["cOn"] = date.toLocaleString(undefined, options);
          let fromDate = new Date(result[i].availabilityFrom);
          date = new Date(result[i].mOn);
          var options = { year: "2-digit", month: "short", day: "numeric" };
          result[i]["lastModified"] = date.toLocaleString(undefined, options);

          //  date = new Date(result[i].availabilityFrom);
          var options = { year: "2-digit", month: "short", day: "numeric" };
          result[i]["availableFrom"] = fromDate.toLocaleString(
            undefined,
            options
          );

          // alert(JSON.stringify(result[i]))

          result[i]["menuItems"] = ["Edit Promotion", "View More"];
          // alert(JSON.stringify(result[i]))
          if (result[i].promotion.status == "false") {
            result[i]["promotionStatusTrueVisible"] = "none";
            result[i]["promotionStatusFalseVisible"] = "flex";
          }

          if (result[i].promotion.status == "true") {
            result[i]["promotionStatusTrueVisible"] = "flex";
            result[i]["promotionStatusFalseVisible"] = "none";
          }
        }

        // alert(JSON.stringify(result))
        dl.changes.offeredRoomList = result;
        // alert(JSON.stringify(dl.changes.offeredRoomList))
        return res;
        // alert(JSON.stringify(dl.changes.wantedRideList))
        // return({"status":response.status, "result":result})
      }
    } catch (err) {
      console.error(err);
      return err;
    }
  };
  dl.functions.getOfferedRooms = getOfferedRooms;

  const getNeedARooms = async (limit, page) => {
    var myHeaders = new Headers();
    var token = dl.functions.common.getCookie("adminToken");
    myHeaders.append("Authorization", token);
    // myHeaders.append("Authorization", "eyJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI2NDUzNjc1Y2VhZTZlOThkYTc2MjIwY2IiLCJhcGlrZXkiOiJPZG9jUmV3VDFuZi9HaEIzUkNxMVhnPT0iLCJ0eXBlIjoibWFpbiIsInR3b0ZhY3RvciI6ZmFsc2UsImlhdCI6MTY4NDQ3NTEzNiwiZXhwIjoxNjg4MDc1MTM2fQ.Fhi9l5VNawVuM6X_1iB_unXO2pfznkiVywKONg6BQ-U");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    try {
      var url = process.env.BASE_URL;
      dl.functions.modalsPlugin.openModal("loading");
      var response = await fetch(
        `${url}/admin/needaroom?zipcode=00601&limit=${limit}&page=${page}`,
        requestOptions
      );
      var res = await response.json();
      dl.changes.paginationState.total = res.totalPage;
      dl.changes.paginationState.active = Number(page);
      dl.functions.modalsPlugin.closeModal("loading");
      // alert()
      var result = [];
      if (response.status == 200) {
        // var result = []
        result = res.result;

        for (var i = 0; i < res.result.length; i++) {
          result[i]["postedBy"] = result[i].userDetail[0]
            ? result[i].userDetail[0].name
            : "user";
          if (result[i].status == "active") {
            result[i]["activeVisible"] = "none";
            result[i]["disableVisible"] = "flex";
          } else {
            result[i]["activeVisible"] = "flex";
            result[i]["disableVisible"] = "none";
          }

          var date = new Date(result[i].cOn);
          var options = { year: "2-digit", month: "short", day: "numeric" };
          result[i]["cOn"] = date.toLocaleString(undefined, options);

          var date = new Date(result[i].mOn);
          var options = { year: "2-digit", month: "short", day: "numeric" };
          result[i]["lastModified"] = date.toLocaleString(undefined, options);

          var date = new Date(result[i].availabilityFrom);
          var options = { year: "2-digit", month: "short", day: "numeric" };
          result[i]["availableFrom"] = date.toLocaleString(undefined, options);

          result[i]["menuItems"] = ["Edit Promotion", "View More"];

          if (result[i].promotion.status == "false") {
            result[i]["promotionStatusTrueVisible"] = "none";
            result[i]["promotionStatusFalseVisible"] = "flex";
          }

          if (result[i].promotion.status == "true") {
            result[i]["promotionStatusTrueVisible"] = "flex";
            result[i]["promotionStatusFalseVisible"] = "none";
          }

          // list.push(result[i])
        }

        dl.changes.needARoomList = result;
        // alert(JSON.stringify(dl.changes.wantedRideList))
        // return({"status":response.status, "result":result})
      }
    } catch (err) {
      console.error(err);
      return err;
    }
  };
  dl.functions.getNeedARooms = getNeedARooms;

  const getOfferedHome = async (limit, page) => {
    var myHeaders = new Headers();
    var token = dl.functions.common.getCookie("adminToken");
    myHeaders.append("Authorization", token);
    // myHeaders.append("Authorization", "eyJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI2NDUzNjc1Y2VhZTZlOThkYTc2MjIwY2IiLCJhcGlrZXkiOiJPZG9jUmV3VDFuZi9HaEIzUkNxMVhnPT0iLCJ0eXBlIjoibWFpbiIsInR3b0ZhY3RvciI6ZmFsc2UsImlhdCI6MTY4NDQ3NTEzNiwiZXhwIjoxNjg4MDc1MTM2fQ.Fhi9l5VNawVuM6X_1iB_unXO2pfznkiVywKONg6BQ-U");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    try {
      var url = process.env.BASE_URL;
      dl.functions.modalsPlugin.openModal("loading");
      var response = await fetch(
        `${url}/admin/homes?zipcode=00601&limit=${limit}&page=${page}`,
        requestOptions
      );

      var res = await response.json();
      dl.changes.paginationState.total = res.totalPage;
      dl.changes.paginationState.active = Number(page);
      dl.functions.modalsPlugin.closeModal("loading");

      var result = [];
      if (response.status == 200) {
        // var result = []
        result = res.result;

        for (var i = 0; i < res.result.length; i++) {
          result[i]["postedBy"] = result[i].userDetail[0]
            ? result[i].userDetail[0].name
            : "user";
          if (result[i].status == "active") {
            result[i]["activeVisible"] = "none";
            result[i]["disableVisible"] = "flex";
          } else {
            result[i]["activeVisible"] = "flex";
            result[i]["disableVisible"] = "none";
          }

          var date = new Date(result[i].cOn);
          var options = { year: "2-digit", month: "short", day: "numeric" };
          result[i]["cOn"] = date.toLocaleString(undefined, options);

          date = new Date(result[i].mOn);
          var options = { year: "2-digit", month: "short", day: "numeric" };
          result[i]["lastModified"] = date.toLocaleString(undefined, options);

          let fromDate = new Date(result[i].availabilityFrom);
          var options = { year: "2-digit", month: "short", day: "numeric" };
          result[i]["availableFrom"] = fromDate.toLocaleString(
            undefined,
            options
          );

          result[i]["menuItems"] = ["Edit Promotion", "View More"];

          if (result[i].promotion.status == "false") {
            result[i]["promotionStatusTrueVisible"] = "none";
            result[i]["promotionStatusFalseVisible"] = "flex";
          }

          if (result[i].promotion.status == "true") {
            result[i]["promotionStatusTrueVisible"] = "flex";
            result[i]["promotionStatusFalseVisible"] = "none";
          }

          // list.push(result[i])
        }

        dl.changes.offeredHomeList = result;
        // alert(JSON.stringify(dl.changes.wantedRideList))
        // return({"status":response.status, "result":result})
      }
    } catch (err) {
      console.error(err);
      return err;
    }
  };
  dl.functions.getOfferedHome = getOfferedHome;

  const getNeedAHome = async (limit, page) => {
    var myHeaders = new Headers();
    var token = dl.functions.common.getCookie("adminToken");
    myHeaders.append("Authorization", token);
    // myHeaders.append("Authorization", "eyJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI2NDUzNjc1Y2VhZTZlOThkYTc2MjIwY2IiLCJhcGlrZXkiOiJPZG9jUmV3VDFuZi9HaEIzUkNxMVhnPT0iLCJ0eXBlIjoibWFpbiIsInR3b0ZhY3RvciI6ZmFsc2UsImlhdCI6MTY4NDQ3NTEzNiwiZXhwIjoxNjg4MDc1MTM2fQ.Fhi9l5VNawVuM6X_1iB_unXO2pfznkiVywKONg6BQ-U");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    try {
      var url = process.env.BASE_URL;
      dl.functions.modalsPlugin.openModal("loading");
      var response = await fetch(
        `${url}/admin/needAHomes?zipcode=00601&limit=${limit}&page=${page}`,
        requestOptions
      );

      var res = await response.json();
      dl.changes.paginationState.total = res.totalPage;
      dl.changes.paginationState.active = Number(page);
      dl.functions.modalsPlugin.closeModal("loading");

      var result = [];
      if (response.status == 200) {
        // var result = []
        result = res.result;

        for (var i = 0; i < res.result.length; i++) {
          result[i]["postedBy"] = result[i].userDetail[0]
            ? result[i].userDetail[0].name
            : "user";
          if (result[i].status == "active") {
            result[i]["activeVisible"] = "none";
            result[i]["disableVisible"] = "flex";
          } else {
            result[i]["activeVisible"] = "flex";
            result[i]["disableVisible"] = "none";
          }

          var date = new Date(result[i].mOn);
          var options = { year: "2-digit", month: "short", day: "numeric" };
          result[i]["cOn"] = date.toLocaleString(undefined, options);

          // var date = new Date(result[i].neededBy);
          // var options = { year: '2-digit', month: 'short', day: 'numeric' };
          result[i]["neededBy"] = result[i].neededBy;

          result[i]["menuItems"] = ["Edit Promotion", "View More"];

          if (result[i].promotion.status == "false") {
            result[i]["promotionStatusTrueVisible"] = "none";
            result[i]["promotionStatusFalseVisible"] = "flex";
          }

          if (result[i].promotion.status == "true") {
            result[i]["promotionStatusTrueVisible"] = "flex";
            result[i]["promotionStatusFalseVisible"] = "none";
          }

          // list.push(result[i])
        }

        dl.changes.needAHomeList = result;
        // alert(JSON.stringify(dl.changes.wantedRideList))
        // return({"status":response.status, "result":result})
      }
    } catch (err) {
      console.error(err);
      return err;
    }
  };
  dl.functions.getNeedAHome = getNeedAHome;

  const updateOfferedRoom = async (body) => {
    var myHeaders = new Headers();
    var token = dl.functions.common.getCookie("adminToken");
    myHeaders.append("Authorization", token);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(body);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      var url = process.env.BASE_URL;
      dl.functions.modalsPlugin.openModal("loading");
      var response = await fetch(`${url}/admin/rooms/update`, requestOptions);
      var res = await response.json();
      dl.functions.modalsPlugin.closeModal("loading");
      if (response.status == 200) {
        // dl.functions.getVisaQuestion("7")
        dl.functions.getOfferedRooms("6", dl.changes.paginationState.active);
        return response.status;
      }
    } catch (err) {
      console.error(err);
      return err;
    }
  };
  dl.functions.updateOfferedRoom = updateOfferedRoom;

  const updateNeedARoom = async (body) => {
    var myHeaders = new Headers();
    var token = dl.functions.common.getCookie("adminToken");
    myHeaders.append("Authorization", token);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(body);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      var url = process.env.BASE_URL;
      dl.functions.modalsPlugin.openModal("loading");
      var response = await fetch(
        `${url}/admin/needARooms/update`,
        requestOptions
      );
      var res = await response.json();
      dl.functions.modalsPlugin.closeModal("loading");
      if (response.status == 200) {
        // dl.functions.getVisaQuestion("7")
        dl.functions.getNeedARooms("6", dl.changes.paginationState.active);
        return response.status;
      }
    } catch (err) {
      console.error(err);
      return err;
    }
  };
  dl.functions.updateNeedARoom = updateNeedARoom;

  const updateOfferedHome = async (body) => {
    var myHeaders = new Headers();
    var token = dl.functions.common.getCookie("adminToken");
    myHeaders.append("Authorization", token);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(body);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      var url = process.env.BASE_URL;
      dl.functions.modalsPlugin.openModal("loading");
      var response = await fetch(`${url}/admin/home/update`, requestOptions);
      var res = await response.json();
      dl.functions.modalsPlugin.closeModal("loading");
      if (response.status == 200) {
        // dl.functions.getVisaQuestion("7")
        dl.functions.getOfferedHome("6", dl.changes.paginationState.active);
        return response.status;
      }
    } catch (err) {
      console.error(err);
      return err;
    }
  };
  dl.functions.updateOfferedHome = updateOfferedHome;

  const updateNeedAHome = async (body) => {
    var myHeaders = new Headers();
    var token = dl.functions.common.getCookie("adminToken");
    myHeaders.append("Authorization", token);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(body);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      var url = process.env.BASE_URL;
      dl.functions.modalsPlugin.openModal("loading");
      var response = await fetch(
        `${url}/admin/needAHome/update`,
        requestOptions
      );
      var res = await response.json();
      dl.functions.modalsPlugin.closeModal("loading");
      if (response.status == 200) {
        // dl.functions.getVisaQuestion("7")
        dl.functions.getNeedAHome("6", dl.changes.paginationState.active);
        return response.status;
      }
    } catch (err) {
      console.error(err);
      return err;
    }
  };
  dl.functions.updateNeedAHome = updateNeedAHome;

  const getAdSpaces = async (limit, page) => {
    var token = dl.functions.common.getCookie("adminToken");
    // var token="eyJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI2NDJmYjcwZWI1N2MyOGJjODk0NWYxZGIiLCJhcGlrZXkiOiJPZG9jUmV3VDFuZi9HaEIzUkNxMVhnPT0iLCJ0eXBlIjoibWFpbiIsInR3b0ZhY3RvciI6ZmFsc2UsImlhdCI6MTY4MDg1MTYzNywiZXhwIjoxNjg0NDUxNjM3fQ._xHGr4Tbf1Oztm4khfKuTGIlJANKnWuS5L38vBAdwdc"
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    try {
      var url = process.env.BASE_URL;
      dl.functions.modalsPlugin.openModal("loading");
      var response = await fetch(
        `${url}/admin/adspaces?limit=${limit}&page=${page}`,
        requestOptions
      );
      var res = await response.json();
      dl.functions.modalsPlugin.closeModal("loading");
      dl.changes.adSpaces = res;

      return dl.changes.adSpaces;

      // dl.changes.data = users
      // return users
      // alert(res)
    } catch (err) {
      console.error(err);
      return err;
    }
  };

  dl.functions.getAdSpaces = getAdSpaces;

  const getAds = async (limit, page) => {
    var token = dl.functions.common.getCookie("adminToken");
    // var token="eyJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI2NDJmYjcwZWI1N2MyOGJjODk0NWYxZGIiLCJhcGlrZXkiOiJPZG9jUmV3VDFuZi9HaEIzUkNxMVhnPT0iLCJ0eXBlIjoibWFpbiIsInR3b0ZhY3RvciI6ZmFsc2UsImlhdCI6MTY4MDg1MTYzNywiZXhwIjoxNjg0NDUxNjM3fQ._xHGr4Tbf1Oztm4khfKuTGIlJANKnWuS5L38vBAdwdc"
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    try {
      var url = process.env.BASE_URL;
      dl.functions.modalsPlugin.openModal("loading");
      var response = await fetch(
        `${url}/admin/ads?limit=${limit}&page=${page}`,
        requestOptions
      );
      var res = await response.json();
      let pageData = res[0].count;
      res = res[0].data;
      dl.changes.adsPagination.total = pageData.pages;
      dl.functions.modalsPlugin.closeModal("loading");
      let ads = [];

      for (var i = 0; i < res.length; i++) {
        let obj = {
          _id: res[i]._id,
          name: res[i].name,
          status: res[i].status,
          activeVisible: res[i].status == "active" ? "none" : "flex",
          disableVisible: res[i].status != "active" ? "none" : "flex",
          adspace: res[i].adSpaceId,
          urls: res[i].urls,
          redirectUrl: res[i].redirectUrl,
          expiresOn: res[i].expiresOn ? res[i].expiresOn : null,
        };
        ads.push(obj);
      }
      dl.changes.ads = ads;
      let adspaces = await getAdSpaces();
      // alert(JSON.stringify(adspaces))

      let adoptions = [];

      adspaces.forEach((s) => {
        adoptions.push(s.name);
      });

      // alert(JSON.stringify(adoptions))

      dl.changes.newAd.adSpaceOptions = adoptions;

      // alert(JSON.stringify(dl.changes.newAd.adSpaceOptions))

      // dl.changes.data = users
      // return users
      // alert(res)
    } catch (err) {
      console.error(err);
      return err;
    }
  };

  dl.functions.getAds = getAds;

  const activateAd = async (id) => {
    var token = dl.functions.common.getCookie("adminToken");
    // var token="eyJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI2NDJmYjcwZWI1N2MyOGJjODk0NWYxZGIiLCJhcGlrZXkiOiJPZG9jUmV3VDFuZi9HaEIzUkNxMVhnPT0iLCJ0eXBlIjoibWFpbiIsInR3b0ZhY3RvciI6ZmFsc2UsImlhdCI6MTY4MDg1MTYzNywiZXhwIjoxNjg0NDUxNjM3fQ._xHGr4Tbf1Oztm4khfKuTGIlJANKnWuS5L38vBAdwdc"
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      id: id,
      status: "active",
    });

    try {
      var url = process.env.BASE_URL;
      dl.functions.modalsPlugin.openModal("loading");

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      var response = await fetch(
        `${url}/admin/ad/updatestatus`,
        requestOptions
      );

      dl.functions.modalsPlugin.closeModal("loading");

      if (response.status == 200) {
        var page = dl.changes.adsPagination.active;
        dl.functions.getAds("8", page);
      }
    } catch (err) {
      console.error(err);
      return err;
    }
  };
  dl.functions.activateAd = activateAd;

  const dactivateAd = async (id) => {
    var token = dl.functions.common.getCookie("adminToken");
    // var token="eyJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI2NDJmYjcwZWI1N2MyOGJjODk0NWYxZGIiLCJhcGlrZXkiOiJPZG9jUmV3VDFuZi9HaEIzUkNxMVhnPT0iLCJ0eXBlIjoibWFpbiIsInR3b0ZhY3RvciI6ZmFsc2UsImlhdCI6MTY4MDg1MTYzNywiZXhwIjoxNjg0NDUxNjM3fQ._xHGr4Tbf1Oztm4khfKuTGIlJANKnWuS5L38vBAdwdc"
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      id: id,
      status: "disabled",
    });

    try {
      var url = process.env.BASE_URL;
      dl.functions.modalsPlugin.openModal("loading");

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      var response = await fetch(
        `${url}/admin/ad/updatestatus`,
        requestOptions
      );

      dl.functions.modalsPlugin.closeModal("loading");
      if (response.status == 200) {
        var page = dl.changes.adsPagination.active;
        dl.functions.getAds("8", page);
      }
    } catch (err) {
      console.error(err);
      return err;
    }
  };
  dl.functions.dactivateAd = dactivateAd;

  const getBlogImages = async (limit, page) => {
    var token = dl.functions.common.getCookie("adminToken");
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    try {
      var url = process.env.BASE_URL;
      dl.functions.modalsPlugin.openModal("loading");
      var response = await fetch(`${url}/admin/images`, requestOptions);
      var res = await response.json();
      dl.functions.modalsPlugin.closeModal("loading");
      let images = [];

      for (var i = 0; i < res.length; i++) {
        let obj = {
          _id: res[i]._id,
          name: res[i].name,
          url: `url(${res[i].url})`,
        };
        images.push(obj);
      }
      dl.changes.blogImages = images;
    } catch (err) {
      console.error(err);
      return err;
    }
  };

  dl.functions.getBlogImages = getBlogImages;

  const getTc = async (limit, page) => {
    var myHeaders = new Headers();
    var token = dl.functions.common.getCookie("adminToken");
    myHeaders.append("Authorization", token);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    try {
      var url = process.env.BASE_URL;
      dl.functions.modalsPlugin.openModal("loading");
      var response = await fetch(
        `${url}/admin/travelCompanion?limit=${limit}&page=${page}`,
        requestOptions
      );
      var res = await response.json();
      dl.functions.modalsPlugin.closeModal("loading");
      dl.changes.paginationState.total = Math.ceil(
        res[0].count.totalCount / Number(limit)
      );
      dl.changes.paginationState.active = Number(page);

      var result = res[0].result;
      for (var i = 0; i < result.length; i++) {
        result[i]["name"] = result[i].userDetail[0].name;

        var date = new Date(result[i].cOn);
        var options = { year: "2-digit", month: "short", day: "numeric" };
        result[i]["cOn"] = date.toLocaleString(undefined, options);
        // result[i]["cOn"] = result[i].cOn

        var date = new Date(result[i].mOn);
        var options = { year: "2-digit", month: "short", day: "numeric" };
        result[i]["mOn"] = date.toLocaleString(undefined, options);

        result[i]["from"] = result[i].from.name;
        result[i]["to"] = result[i].to.name;
        result[i]["status"] = result[i].status;
        result[i]["promotionStatus"] =
          result[i].promotion.status == true ? "True" : "False";

        if (result[i].promotion.status == true) {
          result[i]["promotionColor"] = "rgba(2, 138, 0, 0.75)";
        } else {
          result[i]["promotionColor"] = "rgba(207, 0, 0, 0.91)";
        }

        if (result[i].status == "active") {
          result[i]["activeteisible"] = "none";
          result[i]["disableVisible"] = "flex";
        } else {
          result[i]["activeteisible"] = "flex";
          result[i]["disableVisible"] = "none";
        }

        result[i]["menuItems"] = ["Edit Promotion", "View More"];
      }
      dl.changes.tcList = result;
      return res;
    } catch (err) {
      console.error(err);
      return err;
    }
  };
  dl.functions.getTc = getTc;

  const getWillBeATc = async (limit, page) => {
    var myHeaders = new Headers();
    var token = dl.functions.common.getCookie("adminToken");
    myHeaders.append("Authorization", token);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    try {
      var url = process.env.BASE_URL;
      dl.functions.modalsPlugin.openModal("loading");
      var response = await fetch(
        `${url}/admin/willBeATravelCompanion?limit=${limit}&page=${page}`,
        requestOptions
      );
      var res = await response.json();
      dl.functions.modalsPlugin.closeModal("loading");
      dl.changes.paginationState.total = Math.ceil(
        res[0].count.totalCount / Number(limit)
      );
      dl.changes.paginationState.active = Number(page);

      var result = res[0].result;
      for (var i = 0; i < result.length; i++) {
        result[i]["name"] = result[i].userDetail[0].name;

        var date = new Date(result[i].cOn);
        var options = { year: "2-digit", month: "short", day: "numeric" };
        result[i]["cOn"] = date.toLocaleString(undefined, options);
        // result[i]["cOn"] = result[i].cOn

        var date = new Date(result[i].mOn);
        var options = { year: "2-digit", month: "short", day: "numeric" };
        result[i]["mOn"] = date.toLocaleString(undefined, options);

        result[i]["from"] = result[i].from.name;
        result[i]["to"] = result[i].to.name;
        result[i]["status"] = result[i].status;
        result[i]["promotionStatus"] =
          result[i].promotion.status == true ? "True" : "False";
        if (result[i].promotion.status == true) {
          result[i]["promotionColor"] = "rgba(2, 138, 0, 0.75)";
        } else {
          result[i]["promotionColor"] = "rgba(207, 0, 0, 0.91)";
        }

        if (result[i].status == "active") {
          result[i]["activeteisible"] = "none";
          result[i]["disableVisible"] = "flex";
        } else {
          result[i]["activeteisible"] = "flex";
          result[i]["disableVisible"] = "none";
        }

        result[i]["menuItems"] = ["Edit Promotion", "View More"];
      }
      dl.changes.willBeATcList = result;
      return res;
    } catch (err) {
      console.error(err);
      return err;
    }
  };
  dl.functions.getWillBeATc = getWillBeATc;

  const updateTc = async (body) => {
    var myHeaders = new Headers();
    var token = dl.functions.common.getCookie("adminToken");
    myHeaders.append("Authorization", token);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(body);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      var url = process.env.BASE_URL;
      dl.functions.modalsPlugin.openModal("loading");
      var response = await fetch(
        `${url}/admin/travelCompanion/update`,
        requestOptions
      );
      var res = await response.json();
      dl.functions.modalsPlugin.closeModal("loading");
      if (response.status == 200) {
        // dl.functions.getVisaQuestion("7")
        dl.functions.getTc("8", "1");
        return response.status;
      }
    } catch (err) {
      console.error(err);
      return err;
    }
  };
  dl.functions.updateTc = updateTc;

  const updateWillBeATc = async (body) => {
    var myHeaders = new Headers();
    var token = dl.functions.common.getCookie("adminToken");
    myHeaders.append("Authorization", token);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(body);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      var url = process.env.BASE_URL;
      dl.functions.modalsPlugin.openModal("loading");
      var response = await fetch(
        `${url}/Admin/willBeATravelCompanion/update`,
        requestOptions
      );
      var res = await response.json();
      dl.functions.modalsPlugin.closeModal("loading");
      if (response.status == 200) {
        // dl.functions.getVisaQuestion("7")
        dl.functions.getWillBeATc("8", "1");
        return response.status;
      }
    } catch (err) {
      console.error(err);
      return err;
    }
  };
  dl.functions.updateWillBeATc = updateWillBeATc;

  const getBooking = async (category, limit, page) => {
    var myHeaders = new Headers();
    var token = dl.functions.common.getCookie("adminToken");
    myHeaders.append("Authorization", token);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    try {
      var url = process.env.BASE_URL;
      dl.functions.modalsPlugin.openModal("loading");
      var response = await fetch(
        `${url}/admin/Bookings?page=${page}&limit=${limit}&category=${category}`,
        requestOptions
      );
      var res = await response.json();
      dl.functions.modalsPlugin.closeModal("loading");
      dl.changes.paginationState.total = res.totalPage;
      dl.changes.paginationState.active = Number(page);

      var result = res.result;
      for (var i = 0; i < result.length; i++) {
        result[i]["name"] = result[i].userDetail.name
          ? result[i].userDetail.name
          : "No Data";
        result[i]["email"] = result[i].userDetail.email
          ? result[i].userDetail.email
          : "No Data";

        var slot = result[i].slot;
        if (slot == 12) {
          result[i]["slot"] = "12am-1pm";
        } else if (slot > 12) {
          result[i]["slot"] =
            String(slot - 12) + "pm-" + String(slot - 11) + "pm";
        } else {
          result[i]["slot"] = String(slot) + "am-" + String(slot + 1) + "am";
        }

        var date = new Date(result[i].date);
        var todayDate = new Date();
        var options = { year: "2-digit", month: "short", day: "numeric" };
        result[i]["date"] = date.toLocaleString(undefined, options);

        if (todayDate >= date) {
          result[i]["eventStauts"] = "Upcoming";
          result[i]["eventStautsColor"] = "rgba(186,15,23,1)";
        } else {
          result[i]["eventStauts"] = "Completed";
          result[i]["eventStautsColor"] = "rgba(6, 155, 41, 1)";
        }
        // result[i]["cOn"] = result[i].cOn

        result[i]["menuItems"] = ["Booking Details", "Reassign Expert"];

        result[i]["expertName"] = result[i].expertDetail.name;
      }
      dl.changes.bookingList = result;
      return res;
    } catch (err) {
      console.error(err);
      return err;
    }
  };
  dl.functions.getBooking = getBooking;

  const updateBooking = async (body) => {
    var myHeaders = new Headers();
    var token = dl.functions.common.getCookie("adminToken");
    myHeaders.append("Authorization", token);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(body);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      var url = process.env.BASE_URL;
      dl.functions.modalsPlugin.openModal("loading");
      var response = await fetch(`${url}/admin/updateBookings`, requestOptions);
      var res = await response.json();
      dl.functions.modalsPlugin.closeModal("loading");
      if (response.status == 200) {
        // dl.functions.getVisaQuestion("7")
        var currentPath = dl.functions.common.getLastPath();
        if (currentPath == "visabookings") {
          dl.functions.getBooking(
            "Visa %26 Immigration",
            "5",
            dl.changes.paginationState.active
          );
          dl.functions.modalsPlugin.closeModal("reassignExpert");
        }

        if (currentPath == "studyabroadbookings") {
          dl.functions.getBooking(
            "Study abroad",
            "5",
            dl.changes.paginationState.active
          );
          dl.functions.modalsPlugin.closeModal("reassignExpert");
        }
        return response.status;
      }
    } catch (err) {
      console.error(err);
      return err;
    }
  };
  dl.functions.updateBooking = updateBooking;

  const getExperts = async (category, limit, page) => {
    var myHeaders = new Headers();
    var token = dl.functions.common.getCookie("adminToken");
    myHeaders.append("Authorization", token);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    try {
      var url = process.env.BASE_URL;
      dl.functions.modalsPlugin.openModal("loading");
      var response = await fetch(
        `${url}/admin/experts?limit=${limit}&page=${page}&category=${category}`,
        requestOptions
      );

      var res = await response.json();
      dl.functions.modalsPlugin.closeModal("loading");
      dl.changes.paginationState.total = res.totalPage;
      dl.changes.paginationState.active = Number(page);

      var result = res.result;
      for (var i = 0; i < result.length; i++) {
        // result[i]["name"] = result[i].userDetail.name ? result[i].userDetail.name : "No Data"
        // result[i]["email"] = result[i].userDetail.email ? result[i].userDetail.email : "No Data"

        if (result[i].status == "active") {
          result[i]["activeVisible"] = "none";
          result[i]["disableVisible"] = "flex";
        } else {
          result[i]["activeVisible"] = "flex";
          result[i]["disableVisible"] = "none";
        }
      }
      dl.changes.expertList = result;
      return res;
    } catch (err) {
      console.error(err);
      return err;
    }
  };
  dl.functions.getExperts = getExperts;

  const createExpert = async (category) => {
    if (dl.changes.expertField.name == "") {
      alert("Enter Name");
      return;
    }
    if (dl.changes.expertField.email == "") {
      alert("Enter Email");
      return;
    }
    // dl.changes.expertField.phone = dl.changes.expertField.phone
    if (dl.changes.expertField.phone.length < 10) {
      // dl.changes.expertField.phone = "+1234567890"
      alert("Enter Correct Phone");
      return;
    }

    // if(dl.changes.expertField.status)
    var body = {
      name: dl.changes.expertField.name,
      email: dl.changes.expertField.email,
      phone: dl.changes.expertField.phone,
      category: category,
      active: dl.changes.expertField.status == true ? "active" : "inactive",
      slots: {
        monday: dl.changes.expertField.monday,
        tuesday: dl.changes.expertField.tuesday,
        wednesday: dl.changes.expertField.wednesday,
        thrusday: dl.changes.expertField.thrusday,
        friday: dl.changes.expertField.friday,
        saturday: dl.changes.expertField.saturday,
        sunday: dl.changes.expertField.sunday,
      },
    };

    var myHeaders = new Headers();
    var token = dl.functions.common.getCookie("adminToken");
    myHeaders.append("Authorization", token);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(body);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      var url = process.env.BASE_URL;
      dl.functions.modalsPlugin.openModal("loading");
      var response = await fetch(`${url}/admin/experts/create`, requestOptions);
      var res = await response.json();
      dl.functions.modalsPlugin.closeModal("loading");
      if (response.status == 200) {
        // dl.functions.getVisaQuestion("7")
        if (category == "Study abroad") {
          dl.functions.getExperts(
            "Study abroad",
            "6",
            dl.changes.paginationState.active
          );
          dl.functions.modalsPlugin.closeModal("addNewExpert");
        }

        if (category == "Visa & Immigration") {
          dl.functions.getExperts(
            "Visa %26 Immigration",
            "6",
            dl.changes.paginationState.active
          );
          dl.functions.modalsPlugin.closeModal("addNewExpert");
          // dl.functions.getExperts("Study abroad", "6", dl.changes.paginationState.active)
        }
        return response.status;
      }
    } catch (err) {
      console.error(err);
      return err;
    }
  };
  dl.functions.createExpert = createExpert;

  const updateExpert = async (category) => {
    if (dl.changes.expertField.name == "") {
      alert("Enter Name");
      return;
    }
    if (dl.changes.expertField.email == "") {
      alert("Enter Email");
      return;
    }
    // dl.changes.expertField.phone = "+1234567890"
    if (dl.changes.expertField.phone.length < 10) {
      // dl.changes.expertField.phone = "+1234567890"
      alert("Enter Correct Phone");
      return;
    }

    // if(dl.changes.expertField.status)
    var body = {
      id: dl.changes.expertField.id,
      name: dl.changes.expertField.name,
      email: dl.changes.expertField.email,
      phone: dl.changes.expertField.phone,
      category: category,
      active: dl.changes.expertField.status == true ? "active" : "inactive",
      slots: {
        monday: dl.changes.expertField.monday,
        tuesday: dl.changes.expertField.tuesday,
        wednesday: dl.changes.expertField.wednesday,
        thrusday: dl.changes.expertField.thrusday,
        friday: dl.changes.expertField.friday,
        saturday: dl.changes.expertField.saturday,
        sunday: dl.changes.expertField.sunday,
      },
    };

    var myHeaders = new Headers();
    var token = dl.functions.common.getCookie("adminToken");
    myHeaders.append("Authorization", token);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(body);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      var url = process.env.BASE_URL;
      dl.functions.modalsPlugin.openModal("loading");
      var response = await fetch(`${url}/admin/experts/update`, requestOptions);
      var res = await response.json();
      dl.functions.modalsPlugin.closeModal("loading");
      if (response.status == 200) {
        // dl.functions.getVisaQuestion("7")
        if (category == "Study abroad") {
          dl.functions.getExperts(
            "Study abroad",
            "6",
            dl.changes.paginationState.active
          );
          dl.functions.modalsPlugin.closeModal("addNewExpert");
        }

        if (category == "Visa & Immigration") {
          dl.functions.getExperts(
            "Visa %26 Immigration",
            "6",
            dl.changes.paginationState.active
          );
          dl.functions.modalsPlugin.closeModal("addNewExpert");
          // dl.functions.getExperts("Study abroad", "6", dl.changes.paginationState.active)
        }
        return response.status;
      }
    } catch (err) {
      console.error(err);
      return err;
    }
  };
  dl.functions.updateExpert = updateExpert;

  const editExpert = async (index) => {
    dl.changes.addExpertMode = "edit";
    var details = dl.changes.expertList[index];

    dl.functions.modalsPlugin.openModal("addNewExpert");

    dl.changes.expertField = {
      id: details._id,
      name: details.name,
      email: details.email,
      phone: details.phone,
      status: details.status == "active" ? true : false,
      monday: details.slots.monday ? details.slots.monday : [],
      tuesday: details.slots.tuesday ? details.slots.tuesday : [],
      wednesday: details.slots.wednesday ? details.slots.wednesday : [],
      thrusday: details.slots.thrusday ? details.slots.thrusday : [],
      friday: details.slots.friday ? details.slots.friday : [],
      saturday: details.slots.saturday ? details.slots.saturday : [],
      sunday: details.slots.sunday ? details.slots.sunday : [],
    };
  };
  dl.functions.editExpert = editExpert;

  const updateEXpertStatus = async (body, category) => {
    var myHeaders = new Headers();
    var token = dl.functions.common.getCookie("adminToken");
    myHeaders.append("Authorization", token);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(body);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      var url = process.env.BASE_URL;
      dl.functions.modalsPlugin.openModal("loading");
      var response = await fetch(`${url}/admin/experts/update`, requestOptions);
      var res = await response.json();
      dl.functions.modalsPlugin.closeModal("loading");
      if (response.status == 200) {
        // dl.functions.getVisaQuestion("7")
        if (category == "Study abroad") {
          dl.functions.getExperts(
            "Study abroad",
            "6",
            dl.changes.paginationState.active
          );
        }

        if (category == "Visa & Immigration") {
          dl.functions.getExperts(
            "Visa %26 Immigration",
            "6",
            dl.changes.paginationState.active
          );
          // dl.functions.getExperts("Study abroad", "6", dl.changes.paginationState.active)
        }
        return response.status;
      }
    } catch (err) {
      console.error(err);
      return err;
    }
  };
  dl.functions.updateEXpertStatus = updateEXpertStatus;

  const setBookingDetail = async (index, category) => {
    dl.functions.modalsPlugin.openModal("bookingDetails");
    var detail = dl.changes.bookingList[index];
    if (category == "Visa & Immigration") {
      dl.changes.bookingDetail = {
        name: detail.name,
        Email: detail.email,
        Session: detail.type + " " + "Session",
        Slot: detail.slot,
        service: "Visa Type",
        type: detail.otherDetails.visatype,
        date: detail.date,
        price: detail.orderData.total / 100,
        expert: detail.expertName,
        note: detail.otherDetails.notes,
        meetingLink: "https://meet.google.com/",
        eventStauts: detail.eventStauts,
        eventStautsColor: detail.eventStautsColor,
      };
    }

    if (category == "Study abroad") {
      dl.changes.bookingDetail = {
        name: detail.name,
        Email: detail.email,
        Session: detail.type + " " + "Session",
        Slot: detail.slot,
        service: "Applied For",
        type: detail.otherDetails.formType,
        date: detail.date,
        price: detail.orderData.total / 100,
        expert: detail.expertName,
        note: detail.otherDetails.notes,
        meetingLink: "https://meet.google.com/",
        eventStauts: detail.eventStauts,
        eventStautsColor: detail.eventStautsColor,
      };
    }
  };
  dl.functions.setBookingDetail = setBookingDetail;

  const getExpertList = async (category) => {
    var myHeaders = new Headers();
    var token = dl.functions.common.getCookie("adminToken");
    myHeaders.append("Authorization", token);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    var limit = 20;
    var page = 1;

    try {
      var url = process.env.BASE_URL;
      dl.functions.modalsPlugin.openModal("loading");
      var response = await fetch(
        `${url}/admin/experts?limit=${limit}&page=${page}&category=${category}`,
        requestOptions
      );

      var res = await response.json();
      dl.functions.modalsPlugin.closeModal("loading");
      dl.changes.paginationState.total = res.totalPage;
      dl.changes.paginationState.active = Number(page);

      var result = res.result;
      var list = [];
      var detailedList = [];
      for (var i = 0; i < result.length; i++) {
        // result[i]["name"] = result[i].userDetail.name ? result[i].userDetail.name : "No Data"
        // result[i]["email"] = result[i].userDetail.email ? result[i].userDetail.email : "No Data"
        var obj = {};
        if (result[i].status == "active") {
          list.push(result[i].name);
          obj["name"] = result[i].name;
          obj["id"] = result[i]._id;
        }

        detailedList.push(obj);
      }
      dl.changes.expertNameList = list;
      dl.changes.expertDetailedList = detailedList;

      return res;
    } catch (err) {
      console.error(err);
      return err;
    }
  };
  dl.functions.getExpertList = getExpertList;

  const getBlogComments = async (blogId, limit, page) => {
    var myHeaders = new Headers();
    var token = dl.functions.common.getCookie("adminToken");
    myHeaders.append("Authorization", token);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    try {
      var url = process.env.BASE_URL;
      dl.functions.modalsPlugin.openModal("loading");
      var response = await fetch(
        `${url}/admin/blogcomments?blogId=${blogId}&limit=${limit}&page=${page}`,
        requestOptions
      );

      var res = await response.json();
      dl.functions.modalsPlugin.closeModal("loading");
      dl.changes.paginationState.total = res.totalPage;
      dl.changes.paginationState.active = Number(page);

      var result = res.result;
      // var list = []
      // var detailedList = []
      for (var i = 0; i < result.length; i++) {
        if (result[i].status == "active") {
          result[i]["activeVisible"] = "none";
          result[i]["disableVisible"] = "flex";
        } else {
          result[i]["activeVisible"] = "flex";
          result[i]["disableVisible"] = "none";
        }

        result[i]["name"] = result[i].user.name
          ? result[i].user.name
          : "no data";

        var date = new Date(result[i].cOn);
        var options = { year: "2-digit", month: "short", day: "numeric" };
        var hours = date.getUTCHours();
        var minutes = date.getUTCMinutes();
        var formattedHours = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours;
        var formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
        result[i]["cOn"] = date.toLocaleString(undefined, options);
        result[i]["cOnTime"] = date.toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        });
      }
      dl.changes.commentList = result;

      return res;
    } catch (err) {
      console.error(err);
      return err;
    }
  };
  dl.functions.getBlogComments = getBlogComments;

  const updateBlogComments = async (body) => {
    var myHeaders = new Headers();
    var token = dl.functions.common.getCookie("adminToken");
    myHeaders.append("Authorization", token);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(body);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      var url = process.env.BASE_URL;
      dl.functions.modalsPlugin.openModal("loading");
      var response = await fetch(
        `${url}/admin/blogcomments/update`,
        requestOptions
      );
      var res = await response.json();
      dl.functions.modalsPlugin.closeModal("loading");
      if (response.status == 200) {
        dl.functions.getBlogComments(
          dl.changes.commentList[0].blogId,
          "5",
          dl.changes.paginationState.active
        );
        return response.status;
      }
    } catch (err) {
      console.error(err);
      return err;
    }
  };
  dl.functions.updateBlogComments = updateBlogComments;

  const getVisaComments = async (id, limit, page) => {
    var myHeaders = new Headers();
    var token = dl.functions.common.getCookie("adminToken");
    myHeaders.append("Authorization", token);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    try {
      var url = process.env.BASE_URL;
      dl.functions.modalsPlugin.openModal("loading");
      var response = await fetch(
        `${url}/admin/visaquestioncomments?visaQuestionID=${id}&limit=${limit}&page=${page}`,
        requestOptions
      );

      var res = await response.json();
      dl.functions.modalsPlugin.closeModal("loading");
      dl.changes.paginationState.total = res.totalPage;
      dl.changes.paginationState.active = Number(page);

      var result = res.result;
      // var list = []
      // var detailedList = []
      for (var i = 0; i < result.length; i++) {
        if (result[i].status == "active") {
          result[i]["activeVisible"] = "none";
          result[i]["disableVisible"] = "flex";
        } else {
          result[i]["activeVisible"] = "flex";
          result[i]["disableVisible"] = "none";
        }

        result[i]["name"] = result[i].user.name
          ? result[i].user.name
          : "no data";

        var date = new Date(result[i].cOn);
        var options = { year: "2-digit", month: "short", day: "numeric" };
        var hours = date.getUTCHours();
        var minutes = date.getUTCMinutes();
        var formattedHours = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours;
        var formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
        result[i]["cOn"] = date.toLocaleString(undefined, options);
        result[i]["cOnTime"] = date.toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        });
      }
      dl.changes.commentList = result;

      return res;
    } catch (err) {
      console.error(err);
      return err;
    }
  };
  dl.functions.getVisaComments = getVisaComments;

  const updateVisaQuestionComment = async (body) => {
    var myHeaders = new Headers();
    var token = dl.functions.common.getCookie("adminToken");
    myHeaders.append("Authorization", token);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(body);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      var url = process.env.BASE_URL;
      dl.functions.modalsPlugin.openModal("loading");
      var response = await fetch(
        `${url}/admin/visaquestioncomments/update`,
        requestOptions
      );
      var res = await response.json();
      dl.functions.modalsPlugin.closeModal("loading");
      if (response.status == 200) {
        dl.functions.getVisaComments(
          dl.changes.commentList[0].visaQuestionID,
          "5",
          dl.changes.paginationState.active
        );
        return response.status;
      }
    } catch (err) {
      console.error(err);
      return err;
    }
  };
  dl.functions.updateVisaQuestionComment = updateVisaQuestionComment;

  const onSavePromotionPopup = async () => {
    if (dl.changes.promotiondata.status)
      var fromdate = new Date(dl.changes.promotiondata.promotionFrom);
    var todate = new Date(dl.changes.promotiondata.promotionTo);
    var today = new Date();

    // if(dl.changes.promotiondata.status==true){
    if (dl.changes.promotiondata.status == false) {
      if (fromdate < todate) {
        dl.changes.promotePopupErroeMsg = "";
        // alert("sucess")
      }

      var body = {
        id: dl.changes.selectedPromotion._id,
        promotion: {
          status: dl.changes.promotiondata.status,
          promotionFrom: dl.changes.promotiondata.promotionFrom,
          promotionTo: dl.changes.promotiondata.promotionTo,
        },
      };
      var currentPath = dl.functions.common.getLastPath();

      if (currentPath == "offeredrooms") {
        var res = await dl.functions.updateOfferedRoom(body);
        dl.functions.modalsPlugin.closeModal("editPromotions");
      }

      if (currentPath == "wantedrooms") {
        var res = await dl.functions.updateNeedARoom(body);
        dl.functions.modalsPlugin.closeModal("editPromotions");
      }

      if (currentPath == "offeredhomes") {
        var res = await dl.functions.updateOfferedHome(body);
        dl.functions.modalsPlugin.closeModal("editPromotions");
      }

      if (currentPath == "wantedhomes") {
        var res = await dl.functions.updateNeedAHome(body);
        dl.functions.modalsPlugin.closeModal("editPromotions");
      }

      if (currentPath == "wantedrides") {
        body.promotion.status = false;
        var res = await dl.functions.updateRideSharing(body);
        if (res == 200) {
          dl.functions.modalsPlugin.closeModal("editPromotions");
          dl.functions.getWantedRides("6", dl.changes.paginationState.active);
        }
      }

      if (currentPath == "offeredrides") {
        body.promotion.status = false;
        var res = await dl.functions.updateRideSharing(body);
        if (res == 200) {
          dl.functions.modalsPlugin.closeModal("editPromotions");
          dl.functions.getOfferedRides("6", dl.changes.paginationState.active);
        }
      }

      if (currentPath == "wantedtravelcompanion") {
        body.promotion.status = false;
        var res = await dl.functions.updateTc(body);
        if (res == 200) {
          dl.functions.modalsPlugin.closeModal("editPromotions");
          dl.functions.getTc("8", dl.changes.paginationState.active);
        }
      }

      if (currentPath == "offeredtravelcompanion") {
        body.promotion.status = false;
        var res = await dl.functions.updateWillBeATc(body);
        if (res == 200) {
          dl.functions.modalsPlugin.closeModal("editPromotions");
          dl.functions.getWillBeATc("8", dl.changes.paginationState.active);
        }
      }
    } else {
      // if(fromdate<todate){

      // }
      var body = {
        id: dl.changes.selectedPromotion._id,
        promotion: {
          status: dl.changes.promotiondata.status,
          promotionFrom: dl.changes.promotiondata.promotionFrom,
          promotionTo: dl.changes.promotiondata.promotionTo,
        },
      };

      var currentPath = dl.functions.common.getLastPath();

      if (currentPath == "offeredrooms") {
        var res = await dl.functions.updateOfferedRoom(body);
        dl.functions.modalsPlugin.closeModal("editPromotions");
      }

      if (currentPath == "wantedrooms") {
        var res = await dl.functions.updateNeedARoom(body);
        dl.functions.modalsPlugin.closeModal("editPromotions");
      }

      if (currentPath == "offeredhomes") {
        var res = await dl.functions.updateOfferedHome(body);
        dl.functions.modalsPlugin.closeModal("editPromotions");
      }

      if (currentPath == "wantedhomes") {
        var res = await dl.functions.updateNeedAHome(body);
        dl.functions.modalsPlugin.closeModal("editPromotions");
      }

      if (currentPath == "wantedrides") {
        var res = await dl.functions.updateRideSharing(body);
        if (res == 200) {
          dl.functions.modalsPlugin.closeModal("editPromotions");
          dl.functions.getWantedRides("6", dl.changes.paginationState.active);
        }
      }

      if (currentPath == "offeredrides") {
        var res = await dl.functions.updateRideSharing(body);
        if (res == 200) {
          dl.functions.modalsPlugin.closeModal("editPromotions");
          dl.functions.getOfferedRides("6", dl.changes.paginationState.active);
        }
      }

      if (currentPath == "wantedtravelcompanion") {
        var res = await dl.functions.updateTc(body);
        if (res == 200) {
          dl.functions.modalsPlugin.closeModal("editPromotions");
          dl.functions.getTc("8", dl.changes.paginationState.active);
        }
      }

      if (currentPath == "offeredtravelcompanion") {
        var res = await dl.functions.updateWillBeATc(body);
        if (res == 200) {
          dl.functions.modalsPlugin.closeModal("editPromotions");
          dl.functions.getWillBeATc("8", dl.changes.paginationState.active);
        }
      }
    }
  };
  dl.functions.onSavePromotionPopup = onSavePromotionPopup;

  const createBlogCategory = async (body) => {
    var myHeaders = new Headers();
    var token = dl.functions.common.getCookie("adminToken");
    myHeaders.append("Authorization", token);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(body);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      var url = process.env.BASE_URL;
      dl.functions.modalsPlugin.openModal("loading");
      var response = await fetch(
        `${url}/admin/blogCategory/create`,
        requestOptions
      );
      var res = await response.json();
      dl.functions.modalsPlugin.closeModal("loading");
      if (response.status == 200) {
        dl.functions.getBlogCtegory();
        return response.status;
      }
    } catch (err) {
      console.error(err);
      return err;
    }
  };
  dl.functions.createBlogCategory = createBlogCategory;

  const getBlogCtegory = async () => {
    var myHeaders = new Headers();
    var token = dl.functions.common.getCookie("adminToken");
    myHeaders.append("Authorization", token);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    try {
      var url = process.env.BASE_URL;
      dl.functions.modalsPlugin.openModal("loading");
      var response = await fetch(`${url}/admin/blogCategory`, requestOptions);

      var res = await response.json();
      dl.functions.modalsPlugin.closeModal("loading");
      // dl.changes.paginationState.total = res.totalPage
      // dl.changes.paginationState.active  = Number(page)

      dl.changes.blogCategory = res;

      var category = [];
      for (var i = 0; i < res.length; i++) {
        category.push(res[i].category);
      }
      dl.changes.tsCategories = category;

      return res;
    } catch (err) {
      console.error(err);
      return err;
    }
  };
  dl.functions.getBlogCtegory = getBlogCtegory;

  const getReports = async (id, limit, page) => {
    var myHeaders = new Headers();
    var token = dl.functions.common.getCookie("adminToken");
    myHeaders.append("Authorization", token);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    try {
      var url = process.env.BASE_URL;
      dl.functions.modalsPlugin.openModal("loading");
      var response = await fetch(
        `${url}/admin/reports?reportedId=${id}&page=${page}&limit=${limit}`,
        requestOptions
      );

      var res = await response.json();
      dl.functions.modalsPlugin.closeModal("loading");

      var result = res.result;
      dl.changes.reportPaginationState.total = Math.ceil(
        res.totalPage / Number(limit)
      );
      dl.changes.reportPaginationState.active = Number(page);

      for (var i = 0; i < res.result.length; i++) {
        result[i]["name"] = `${result[i].firstName} ${result[i].lastName}`;

        var date = new Date(result[i].cOn);
        var options = { year: "2-digit", month: "short", day: "numeric" };
        var hours = date.getUTCHours();
        var minutes = date.getUTCMinutes();
        var formattedHours = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours;
        var formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
        result[i]["cOn"] = date.toLocaleString(undefined, options);
        result[i]["cOnTime"] = date.toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        });
      }
      dl.changes.reportsList = result;

      return res;
    } catch (err) {
      console.error(err);
      return err;
    }
  };
  dl.functions.getReports = getReports;

  const updateBlogCategory = async (body) => {
    var myHeaders = new Headers();
    var token = dl.functions.common.getCookie("adminToken");
    myHeaders.append("Authorization", token);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(body);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      var url = process.env.BASE_URL;
      dl.functions.modalsPlugin.openModal("loading");
      var response = await fetch(
        `${url}/admin/blogCategory/update`,
        requestOptions
      );
      var res = await response.json();
      dl.functions.modalsPlugin.closeModal("loading");
      if (response.status == 200) {
        dl.functions.getBlogCtegory();
        return response.status;
      }
    } catch (err) {
      console.error(err);
      return err;
    }
  };
  dl.functions.updateBlogCategory = updateBlogCategory;

  const setAddImage = (sizes) => {
    var lg = `(${String(sizes.lg.width)} * ${String(sizes.lg.height)})`;
    var md = `(${String(sizes.md.width)} * ${String(sizes.md.height)})`;
    var sm = `(${String(sizes.sm.width)} * ${String(sizes.sm.height)})`;
    var xs = `(${String(sizes.xs.width)} * ${String(sizes.xs.height)})`;

    dl.changes.newAd.imageSize.lg = lg;
    dl.changes.newAd.imageSize.md = md;
    dl.changes.newAd.imageSize.sm = sm;
    dl.changes.newAd.imageSize.xs = xs;
  };
  dl.functions.setAddImage = setAddImage;

  const adsLoad = () => {
    dl.functions.getAds("8", "1");
  };

  const adspacesLoad = () => {
    dl.functions.getAdSpaces("6", "1");
  };

  const usersOnLoad = () => {
    dl.functions.getUsers("8", "1");
  };

  const blogsOnLoad = () => {
    dl.functions.getBlogCtegory();
    dl.functions.getBlogs("5", "1");
  };
  const blogImagesOnLoad = () => {
    dl.functions.getBlogImages("5", "1");
  };

  const moviesuggestions = () => {
    dl.functions.getMovieSuggestion("7", "1");
  };

  const visafaqLoad = () => {
    dl.functions.getVisafaq("7", "1");
  };

  const visaquestionsLoad = () => {
    dl.functions.getVisaQuestion("8", "1");
  };

  const offeredridesLoad = () => {
    dl.functions.getOfferedRides("6", "1");
  };

  const wantedridesLoad = () => {
    dl.functions.getWantedRides("6", "1");
  };

  const offeredhomesLoad = () => {
    dl.functions.getOfferedHome("6", "1");
  };

  const wantedhomesLoad = () => {
    dl.functions.getNeedAHome("6", "1");
  };

  const offeredroomsLoad = () => {
    dl.functions.getOfferedRooms("6", "1");
  };

  const wantedroomsLoad = () => {
    dl.functions.getNeedARooms("6", "1");
  };

  const wantedtravelcompanionLoad = () => {
    dl.functions.getTc("8", "1");
  };

  const offeredtravelcompanionLoad = () => {
    dl.functions.getWillBeATc("8", "1");
  };

  const studyabroadbookingsLoad = () => {
    dl.functions.getBooking("Study abroad", "5", "1");
  };

  const visabookingsLoad = () => {
    dl.functions.getBooking("Visa %26 Immigration", "5", "1");
  };

  const visaexpertsLoad = () => {
    dl.functions.getExperts("Visa %26 Immigration", "8", "1");
  };
  const studyabroadexpertsLoad = () => {
    dl.functions.getExperts("Study abroad", "8", "1");
  };

  const blogcategoriesLoad = () => {
    dl.functions.getBlogCtegory();
  };

  const blogcommentsLoad = () => {
    var id = dl.changes.selectedComment._id;
    dl.changes.blogTitle = dl.changes.selectedComment.title;
    dl.functions.getBlogComments(id, "5", "1");
  };

  const questioncommentsLoad = () => {
    var id = dl.changes.selectedComment._id;
    dl.changes.commentsQuestion = dl.changes.selectedComment.question;
    dl.functions.getVisaComments(id, "5", "1");
  };

  var onLoadFunctions = {
    users: usersOnLoad,
    blogs: blogsOnLoad,
    // signup:signupOnLoad,
    moviesuggestions: moviesuggestions,
    visafaq: visafaqLoad,
    visaquestions: visaquestionsLoad,
    offeredrides: offeredridesLoad,
    wantedrides: wantedridesLoad,
    offeredhomes: offeredhomesLoad,
    wantedhomes: wantedhomesLoad,
    offeredrooms: offeredroomsLoad,
    wantedrooms: wantedroomsLoad,
    adspaces: adspacesLoad,
    ads: adsLoad,
    blogimages: blogImagesOnLoad,
    wantedtravelcompanion: wantedtravelcompanionLoad,
    offeredtravelcompanion: offeredtravelcompanionLoad,
    studyabroadbookings: studyabroadbookingsLoad,
    visabookings: visabookingsLoad,
    visaexperts: visaexpertsLoad,
    studyabroadexperts: studyabroadexpertsLoad,
    blogcategories: blogcategoriesLoad,
    blogcomments: blogcommentsLoad,
    questioncomments: questioncommentsLoad,
  };
  dl.functions.onLoadFunctions = onLoadFunctions;

  const sectorOnLoad = (currentPath) => {
    var serviceSelector = dl.changes.serviceSelector.services;
    for (var key in serviceSelector) {
      serviceSelector[key].activeVisible = "none";
      serviceSelector[key].inactiveVisible = "flex";
    }

    if (
      currentPath == "offeredrooms" ||
      currentPath == "wantedrooms" ||
      currentPath == "offeredhomes" ||
      currentPath == "wantedhomes"
    ) {
      serviceSelector["rentals"].activeVisible = "flex";
      serviceSelector["rentals"].inactiveVisible = "none";
    } else if (currentPath == "wantedrides" || currentPath == "offeredrides") {
      serviceSelector["rideSharing"].activeVisible = "flex";
      serviceSelector["rideSharing"].inactiveVisible = "none";
    } else if (currentPath == "moviesuggestions") {
      serviceSelector["movieSuggestions"].activeVisible = "flex";
      serviceSelector["movieSuggestions"].inactiveVisible = "none";
    } else if (
      currentPath == "studyabroadbookings" ||
      currentPath == "studyabroadexperts"
    ) {
      serviceSelector["studyAbroad"].activeVisible = "flex";
      serviceSelector["studyAbroad"].inactiveVisible = "none";
    } else if (
      currentPath == "visafaq" ||
      currentPath == "questioncomments" ||
      currentPath == "visaquestions" ||
      currentPath == "visabookings" ||
      currentPath == "visaexperts"
    ) {
      serviceSelector["visaQna"].activeVisible = "flex";
      serviceSelector["visaQna"].inactiveVisible = "none";
    } else if (
      currentPath == "wantedtravelcompanion" ||
      currentPath == "offeredtravelcompanion"
    ) {
      serviceSelector["travelCompanion"].activeVisible = "flex";
      serviceSelector["travelCompanion"].inactiveVisible = "none";
    } else if (
      currentPath == "blogcomments" ||
      currentPath == "blogs" ||
      currentPath == "blogimages" ||
      currentPath == "blogcategories"
    ) {
      serviceSelector["blogs"].activeVisible = "flex";
      serviceSelector["blogs"].inactiveVisible = "none";
    } else if (currentPath == "users") {
      serviceSelector["users"].activeVisible = "flex";
      serviceSelector["users"].inactiveVisible = "none";
    } else if (currentPath == "ads" || currentPath == "adspaces") {
      serviceSelector["ads"].activeVisible = "flex";
      serviceSelector["ads"].inactiveVisible = "none";
    }
  };
  dl.functions.sectorOnLoad = sectorOnLoad;

  var token = dl.functions.common.getCookie("adminToken");
  var currentPath = dl.functions.common.getLastPath();

  if (!token) {
    // dl.functions.viewsPlugin.showView('login')

    // console.log('here')
    // dl.functions.navigate('/login');
    dl.functions.viewsPlugin.showView("login");
  } else {
    // dl.functions.viewsPlugin.showView('users')
    dl.functions.sectorOnLoad(currentPath);
    if (onLoadFunctions[currentPath]) {
      // alert(currentPath)
      onLoadFunctions[currentPath]();
    }
    var todaysDate = new Date();
    dl.changes.todaysDate = todaysDate;
    // onLoadFunctions[currentPath]()
  }
}

export default onLoad;
