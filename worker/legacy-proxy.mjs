export default {
  fetch(request) {
    const target = new URL(request.url);
    target.hostname = "wloc.ciaooo55.dpdns.org";
    return fetch(new Request(target, request));
  },
};
