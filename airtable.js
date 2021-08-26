onst airtable = require("airtable");
exports.handler = function (context, event, callback) {
const base = new airtable(
  {apiKey: context.AIRTABLE_API_KEY})
  .base(context.AIRTABLE_BASE_ID);
  let appt_status = event.appt_status;
  let record_id = event.record_id;
  let date = event.date;
  let time = event.time;
  let waitlist = event.waitlist
  if (waitlist) {
    waitlist = null
  }
   base("appointments").update(
    record_id,
    {"Appointment_Status": appt_status,
     "Date": date,
     "Appointment_Time": time,
     "Waitlist": waitlist},
    (error, record_id) => {
      if (error) {
        console.error(error, record_id);
        throw error;
      } else {
        callback(null, "Success!");
        }
    });
}
