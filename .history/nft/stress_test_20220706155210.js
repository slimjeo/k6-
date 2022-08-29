import { check, sleep } from "k6";
import http from "k6/http";
import { Rate } from "k6/metrics";

const failureRate = newRate("fail request");

export let options = {
  thresholds: {
    http_req_duration: ["p(95)<200"],
    http_req_failed: ["rate<0.01"],
    http_req_duration: ["p(99)<400"],
  },
  stage: [
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
  sleep(1)
};
export default function () {
  h;
}
