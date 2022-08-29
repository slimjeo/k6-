import http from "k6/http";
import { check } from "k6";


export const options = {
  thresholds: {
    // 90% of requests must finish within 400ms.
    http_req_duration: ['p(99.9) < 1000'],
  },


export default function () {
  let url = "https://postman-echo.com/post";
  let params = {
    header: {
      "content-Type": "application/json",
    },
  };
  let body = JSON.stringify({
    Cakes: [
      {
        Name: "Muffin",
        Price: 10.0,
      },
      {
        Name: "Crumpet",
        Price: 5.0,
      },
    ],
  });

  const response = http.post(url, params, body);
  console.log(`response body length ${response.body.length}`);

  check(response, {
    "is status 200": (r) => r.status === 200,
    "is body size 447 bytes": (r) => r.body.length == 447,
  });
}
}