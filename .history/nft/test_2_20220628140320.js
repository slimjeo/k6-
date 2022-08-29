import http from "k6/http";

export let options = {
  durations: "10s",
  vus: 20,
};

export default function () {
  http.get("https://www.flipkart.com/"), http.get("https://www.google.com");
}
