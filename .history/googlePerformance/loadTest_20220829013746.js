import http from "k6/http";

export default function () {
  let url = "https://postman-echo.com/post";
  let params = {
    header: {
      "content-Type": "application/json",
    },

    let body = JSON.stringify({
      "Cakes": [
        {
          "Name": "Muffin",
          "Price": 10.00
        },
        {
          "Name": "Crumpet",
          "Price": 5.00
        }
      ]
    })

  };
}
