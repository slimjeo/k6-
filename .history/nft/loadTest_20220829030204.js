import http from "k6/http";
import { check } from "k6";
import { Trend } from "k6/metrics";

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
    'is body size '
  });
}
