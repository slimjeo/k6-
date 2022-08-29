import http from "k6/http";

export let options()
export default function () {
  http.get("https://www.flipkart.com/");
}
