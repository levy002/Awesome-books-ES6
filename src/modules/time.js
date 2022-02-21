import { DateTime } from 'luxon/src/luxon.js';

const displayDate = () => {
  const d = DateTime.now();
  const f = {
    month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric',
  };
  document.getElementById('time').innerHTML = d.setLocale('en-US').toLocaleString(f);
};

export default displayDate;