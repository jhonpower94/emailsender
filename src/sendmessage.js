export const sendMessage = (message, subject, email) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify({
    message: message,
    to: email,
    subject: subject,
  });

  var requestOption = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  return fetch("https://nodeoutlook.vercel.app/trust", requestOption).then(
    (res) => res.text()
  );
};
