import { check, sleep } from "k6";
import http, { expectedStatuses } from "k6/http";
import { Rate } from "k6/metrics";

const failRate = new Rate("fail request");

export let options = {
  /*thresholds: {
    http_req_duration: ["p(95)<200"],
    http_req_failed: ["rate<0.01"],
     http_req_duration: ["p(99)<400"],
  },*/
  stages: [
    { duration: "2m", target: 100 },
    { duration: "5m", target: 100 },
    { duration: "2m", target: 200 },
    { duration: "5m", target: 200 },
    { duration: "2m", target: 300 },
    { duration: "5m", target: 300 },
    { duration: "2m", target: 400 },
    { duration: "5m", target: 400 },
    { duration: "10m", target: 0 },
  ],

  thresholds: {
    checks: ["rate>0.95"],
  },
};
export default function () {
  let resp = http.get("https://run.mocky.io/v3/9958775c-f27d-4a77-aa4e-89bee0250bdd");

  check(resp, {
    "is status 200": (r) => r.status === 200,
  });
}
