import http from "k6/http";

export let options = {
  stages: [
    { duration: "10s", target: 10 },
    { duration: "12s", target: 15 },
  ],
};
export default function () {
  http.get("https://www.flipkart.com/");
}
