const airtable = require("airtable");

exports.handler = function (context, event, callback) {
  const base = new airtable({apiKey: context.AIRTABLE_API_KEY}).base(context.AIRTABLE_BASE_ID);
 const client = context.getTwilioClient();
 let paramsMap = new Map();
  base("appointments")
 .select()
 .all()
 .then((records) => {
   const sendingMessages = records.map((record) => {
     if (record.get('Appointment_Status') === "pending"){
       paramsMap['name'] = record.get('Name');
       //paramsMap['appointment_date'] = record.get('Date');
       //paramsMap['appointment_time'] = record.get('Appointment_Time');
       //paramsMap['airtable_record_id'] = record.getId();
       //paramsMap['appt_id'] = record.get('ID');
     }
   });
   return Promise.all(sendingMessages);
 })
   .then(() => {
     if (paramsMap['name'] === undefined) //No appointments in system
     {
       console.log("No appointments in system");
       callback(null, "From studio function");
     }
    
     params_list = {
           //"appointment_date": paramsMap['appointment_date'],
           //"appointment_time": paramsMap['appointment_time'],
           //"provider_name":"Owl Health",
           //"patient_name": paramsMap['name'],
           //"airtable_record_id": paramsMap['airtable_record_id'],
           //"appt_id": paramsMap['appt_id']
     };
    
     client.studio.v1.flows('Vaccine-Reminder').executions.create(
       {
         to: '+91XXXXXXXXXX',
         from: '+12XXXXXXXXXX',
         parameters: JSON.stringify(params_list)
       }
     )
     .then(function(execution) {
       console.log("Execution Id:" + execution.sid);
       callback(null, "Message sent via studio function");
     })
     .catch(err => callback(err));
   })
   .catch((err) => {
       console.log("Airtable error");
       callback(err);
   });
};
