import http from "k6/http";

export let options = {
  vus: 10,
  durations: "10s",
};

export default function () {
  http.get("https://www.flipkart.com/"), http.get("https://www.google.com");
}
