import http from "k6/http";
import { check, sleep } from "k6";

export let options = {
  tags: {
    name: "group1",
  },
  stages: [
    { duration: "10s", target: 50 },
    { duration: "30s", target: 50 },
    { duration: "10s", target: 0 },
  ],
};

export default function () {
  let res = http.get("http://localhost:8080/health");
  check(res, { "status is 200": (r) => r.status === 200 });

  sleep(1);
}
