import { check } from "k6";
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
    {
      duration,
    },
  ],
};
