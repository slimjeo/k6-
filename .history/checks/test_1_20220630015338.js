/*
https://run.mocky.io/v3/31b33ac0-ba9f-4d79-9018-dbbde1001b3c
*/
import check from "k6";
import http from "k6/http";

export default function () {
  const res = http.get("https://designer.mocky.io/manage/delete/0d0f1eb4-4b71-4007-afc2-9a95d3c991c7/r3NUoylJdmWMkkMsyXmp4E4QLEWDwnYShGNB");

  check(res, { "is status 200": (r) => r.status === 200 });
}
