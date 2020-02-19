import eras from './data/eras.json';
import data1 from './data/data-1.json'
import data2 from './data/data-2.json'
import "./static/timeline3/css/timeline.css";
import "./styles.css";

const timelineDataJson = {
  "title": {
    "text": {
      "headline": "History of the World",
      "text": "<p>A short timeline of the World history</p>"
    }
  },
  ...eras,
  events: [
    ...data1.events,
    ...data2.events
  ]
};

(() => {
  window.timeline = new TL.Timeline("timeline", timelineDataJson);
})();
