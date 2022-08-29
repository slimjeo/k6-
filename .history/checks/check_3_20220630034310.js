import http from "k6/http";

import { check } from "k6";

export default function () {
  http.get("https://run.mocky.io/v3/9958775c-f27d-4a77-aa4e-89bee0250bdd");
}
