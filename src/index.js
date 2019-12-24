import timeline_json from "./history.json";

(() => {
  window.timeline = new TL.Timeline("timeline-embed", timeline_json);
})();
