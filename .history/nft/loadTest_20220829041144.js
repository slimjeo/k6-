import http from "k6/http";
import { check } from "k6";
import { sleep } from "k6";

export const options = {
  thresholds: {
    // 90% of requests must finish within 400ms.
    http_req_duration: ["p(100) < 60000"],
  },
};
export default function () {
  let domain = "https://postman-echo.com/";
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
  sleep(1);
  const response = http.post(url, params, body);
  console.log(`response body length ${response.body.length}`);

  check(response, {
    "is status 200": (r) => r.status === 200,
    "is body size 447 bytes": (r) => r.body.length == 447,
    "verify page text": (r) => r.body.includes("Muffin"),
  });
}
