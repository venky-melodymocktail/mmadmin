import Resizer from "react-image-file-resizer";

const contentTypes = {
  png: "image/png",
  jpg: "image/jpeg",
  pdf: "application/pdf",
};
const getCookie = (name) => {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};
const sleep = async (delay) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

const setCookie = async (name, value, minutes, domain) => {
  var expires = "";
  if (minutes) {
    var date = new Date();
    date.setTime(date.getTime() + minutes * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  var cookie = name + "=" + (value || "") + expires + "; path=/";
  if (domain) {
    cookie += "; domain=" + domain;
  }
  document.cookie = cookie;
};

const goToDivId = (id) => {
  id = "t18_" + id.replace(":", "_");
  var div = document.getElementById(id);

  div.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
};

function callNumber(number) {
  window.location.href = "tel:" + number;
}
function sendEmail(email) {
  window.location.href = "mailto:" + email;
}
function startWAChat(phoneNumber) {
  window.open("https://wa.me/" + phoneNumber, "_blank");
}

// Function to get the last path of a URL
function getLastPath(url = window.location.href) {
  return new URL(url).pathname
    .split("/")
    .filter((path) => path !== "")
    .pop();
}

// Function to get all the paths of a URL
function getAllPaths(url = window.location.href) {
  return new URL(url).pathname.split("/").filter((path) => path !== "");
}

function getParams(url = window.location.href) {
  const searchParams = new URL(url).searchParams;
  const params = {};
  for (const [key, value] of searchParams.entries()) {
    params[key] = value;
  }
  return params;
}

function relativeRedirect(path, newTab = false) {
  // Combine the new pathname with the original URL
  var newUrl =
    window.location.protocol + "//" + window.location.host + "/" + path;

  // Navigate to the new URL
  if (newTab) {
    window.open(newUrl, "_blank");
  } else {
    window.location.href = newUrl;
  }
}
function copyToClipboard(str) {
  const el = document.createElement("textarea"); // create a temporary textarea element
  el.value = str; // set the value of the element to the string to be copied
  el.setAttribute("readonly", ""); // set the element as read-only to prevent user input
  el.style.position = "absolute"; // move the element offscreen
  el.style.left = "-9999px";
  document.body.appendChild(el); // add the element to the document
  el.select(); // select the element
  document.execCommand("copy"); // copy the selected text to the clipboard
  document.body.removeChild(el); // remove the element from the document
}

function shareOnWhatsApp(str) {
  const encodedStr = encodeURIComponent(str); // encode the string for use in the URL
  // const whatsappUrl = `whatsapp://send?text=${encodedStr}`; // create the WhatsApp share URL
  const whatsappUrl = ` https://wa.me/?text=${encodedStr}`; // create the WhatsApp share URL
  // window.location.href = whatsappUrl; // open the WhatsApp share dialog
  window.open(whatsappUrl, "_blank");
}

function shareOnFacebook(str) {
  const encodedStr = encodeURIComponent(str); // encode the string for use in the URL
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedStr}`; // create the Facebook Share Dialog URL
  window.open(facebookUrl, "_blank"); // open the Share Dialog in a new window
}

function shareOnTwitter(str) {
  const encodedStr = encodeURIComponent(str); // encode the string for use in the URL
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodedStr}`; // create the Twitter Share Dialog URL
  window.open(twitterUrl, "_blank"); // open the Share Dialog in a new window
}

function shareOnLinkedIn(str) {
  const encodedStr = encodeURIComponent(str); // encode the string for use in the URL
  const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedStr}`; // create the LinkedIn Share Dialog URL
  window.open(linkedInUrl, "_blank"); // open the Share Dialog in a new window
}

function stripHtml(htmlString) {
  // Create a temporary div element to store the HTML
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = htmlString;

  // Strip the HTML tags and get the plain text
  const plainText = tempDiv.textContent || tempDiv.innerText || "";

  // Return the text with the specified character count
  // return plainText.substring(0, characterCount);
  return plainText;
}

async function getUploadUrl(apiKey, fileType = "jpg", secure = false) {
  var raw = {
    fileType,
    secure,
  };

  var res = await fetch(`https://services.neutrodev.com/upload`, {
    method: "post",
    headers: { "Content-Type": "application/json", apikey: apiKey },
    // credentials: 'include',
    body: JSON.stringify(raw),
  });

  var status = res.status;
  res = await res.json();
  console.log(res, status);
  if (status == 200) {
  } else {
  }
  return { res, status };
}

async function uploadFile(url, file, fileType = "jpg") {
  // console.log(process.env.UPLOAD_SECRETKEY)
    var key = "51Y08tbLf7Tc5poL"

    try {
        const formdata = new FormData();
        formdata.append("file", file, "1eeccb2f-8dbb-4f60-b27b-33bf37fda00c");
        formdata.append("secret_key", key);

        const requestOptions = {
        method: "POST",
        // mode: 'no-cors',
        body: formdata,
        redirect: "follow"
        };

        var response = await fetch("https://mai.melodymocktail.com/upload/", requestOptions)
        var res = await response.json()
        console.log(response)
        if(response.status==201){
            return(res.url)
        }
        else{
            console.log("something went wrong");
            return null
        }
    } catch (error) {
        return error
    }
}

const resizeFile = (file) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      600,
      400,
      "JPEG",
      100,
      0,
      (uri) => {
        resolve(uri);
      },
      "file",
    );
  });

async function generateAndUpload(file, secure, apiKey, fileType = "png") {
  console.log(file)

    file = await resizeFile(file)

    var res = await uploadFile("", file)
    if (res) {
        return { url: res, secure: secure }
    } else {
        return { url: 'error', secure: secure }
    }
}

const rzpPayment = async (apiKey, orderId, cb) => {
  var options = {
    key: apiKey, // Enter the Key ID generated from the Dashboard
    currency: "INR",
    name: "Test Account",
    description: "Test Transaction",
    image: "https://example.com/your_logo",
    order_id: orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    handler: function (response) {
      // alert(response.razorpay_payment_id);
      // alert(response.razorpay_order_id);
      // alert(response.razorpay_signature);

      // this.onPaymentUpdate(response)
      cb(response);
    },
    // "prefill": {
    //     "name": "Gaurav Kumar",
    //     "email": "gaurav.kumar@example.com",
    //     "contact": "9999999999"
    // },
    // "notes": {
    //     "address": "Razorpay Corporate Office"
    // },
    theme: {
      color: "#FF824B",
    },
  };
  var rzp1 = new window.Razorpay(options);
  rzp1.on("payment.failed", function (response) {
    // alert(response.error.code);
    // alert(response.error.description);
    // alert(response.error.source);
    // alert(response.error.step);
    // alert(response.error.reason);
    // alert(response.error.metadata.order_id);
    // alert(response.error.metadata.payment_id);
  });

  rzp1.open();
};

var commonFunctions = {
  getCookie: getCookie,
  sleep: sleep,
  setCookie: setCookie,
  goToDivId: goToDivId,
  callNumber: callNumber,
  sendEmail: sendEmail,
  startWAChat: startWAChat,
  getLastPath: getLastPath,
  getAllPaths: getAllPaths,
  getParams: getParams,
  relativeRedirect: relativeRedirect,
  neutrodev: {
    getUploadUrl: getUploadUrl,
    uploadFile: uploadFile,
    generateAndUpload: generateAndUpload,
  },
  copyToClipboard: copyToClipboard,
  stripHtml: stripHtml,
  socialShare: {
    shareOnWhatsApp,
    shareOnFacebook,
    shareOnLinkedIn,
    shareOnTwitter,
  },
  payments: {
    rzpPayment: rzpPayment,
  },
};

export default commonFunctions;
