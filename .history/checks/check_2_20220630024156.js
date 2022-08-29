/*
https://run.mocky.io/v3/31b33ac0-ba9f-4d79-9018-dbbde1001b3c
*/
import { check } from "k6";
import http from "k6/http";

export default function () {
  const res = http.get("https://run.mocky.io/v3/c6155b9c-50b9-4e7d-b921-d3e6fd1ef75d");

  console.log(`res body length ${res.body.length} `);
  check(res, {
    "is status 200": (r) => r.status === 200,
  });
}
