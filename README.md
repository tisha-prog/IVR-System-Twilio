# IVR Vaccine-Appointment-Management-System
A prototype of Interactive Voice Response System (IVR), for vaccination-appointment-management . This is designed for public health agencies to manage the appointments by making an outgoing call to user automatically a day before the actual appointment is scheduled, in order to reduce *no-shows*.  The IVR system collects input from the user , and updates it into the database , i.e. , Airtable .
1. When the user Confirms the appointment then the status changes from Pending to Confirmed in the Databse.
2. When the input is to Cancel the appointment then the status changes from Pending to Cancelled in the Airtable , Database.
3. When the input is Rescheduling, then the status remains Pending and list of available slots is being provided to the user to choose from.


## Pre-requisites
TWILIO

AIRTABLE

POSTMAN

#### Environment-variables


| Variable              | Description                           
| :-------------------- | :-------------------------------------------------------
| `TWILIO_PHONE_NUMBER` | Twilio phone number for making an outgoing call       
| `ADMIN_PASSWORD`      | Password to restrict access to sensitive data         
| `AUTH_TOKEN`          |  existing auth tokens from Twilio   
| `FLOW_SID`            | SID of Studio Flow. Set automatically.                
| `AIRTABLE_API_KEY`    | Airtable Api key
| `AIRTABLE_BASE_ID`    | Base ID from Airtable 
| `ACCOUNT_SID`         | Twilio account sid

  
  
