import http from "k6/http";

export let options = {
  vus: 15,
  duration: "5s",
};
export default function () {
  http.get("https://www.flipkart.com/");
}
