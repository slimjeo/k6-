import { check } from "k6";
import http from "k6/http";
import { Rate } from "k6/metrics";

const failureRate = newRate("fail request");

export let options = {
  thresholds: {
    http_req_duration: ["p(95)<400"],
    http_req_failed: [],
  },
};
