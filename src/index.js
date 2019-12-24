import timeline_json from "./history.json";
import "./static/timeline3/css/timeline.css";

(() => {
  window.timeline = new TL.Timeline("timeline-embed", timeline_json);
})();
