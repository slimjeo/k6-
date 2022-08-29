import http from "k6/http";

import { check } from "k6";

export default function () {
  const res = http.get("https://run.mocky.io/v3/9958775c-f27d-4a77-aa4e-89bee0250bdd");

  console.log(`body length ${res.body.length} virtual user ${__VU} iteration ${__ITER}`);
  check(res, {
    "is res.status 200": (r) => r.status === 200,
    "body size is 0 bytes": (r) => r.body.length == 0,
  });
}
