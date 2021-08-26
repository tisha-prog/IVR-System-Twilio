const airtable = require("airtable");

exports.handler = function (context, event, callback) {
 const base = new airtable({apiKey: context.AIRTABLE_API_KEY}).base(context.AIRTABLE_BASE_ID);
 let response = new Twilio.Response();
 response.appendHeader('Content-Type', 'application/json');
 let paramsMap = {};

 base("appointments")
 .select()
 .all()
 .then((records) => {
   records.map((record) => {
     console.log(record.get('Waitlist'));
     if (record.get('Waitlist')){
       paramsMap['new_name'] = record.get('Name');
       paramsMap['new_date'] = record.get('Date');
       paramsMap['new_time'] = record.get('Appointment_Time');
       paramsMap['phone_number'] = record.get('Phone_Number');
       paramsMap['new_record_id'] = record.getId();
       paramsMap['new_appt_id'] = record.get('ID');
     }
   });
   response.setBody(paramsMap);
   return callback(null, response);
 })
};
