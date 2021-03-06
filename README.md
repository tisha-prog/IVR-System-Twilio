# IVR Vaccine-Appointment-Management-System
A prototype of Interactive Voice Response System (IVR), for vaccination-appointment-management . This is designed for public health agencies to manage the appointments by making an outgoing call to user automatically a day before the actual appointment is scheduled, in order to reduce *no-shows*.  The IVR system collects input from the user , and updates it into the database , i.e. , Airtable .
1. When the user Confirms the appointment then the status changes from Pending to Confirmed in the Databse.
2. When the input is to Cancel the appointment then the status changes from Pending to Cancelled in the Airtable , Database.
3. When the input is Rescheduling, then the status remains Pending and list of available slots is being provided to the user to choose from.
![patient outreach app architecture](https://user-images.githubusercontent.com/60807484/172104262-db3e5dce-ed29-4acf-b321-38f31e24b4f3.png)

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

  
  
## Studio Flow
![git ivr](https://user-images.githubusercontent.com/60807484/130946344-c0f1036f-e56c-4fd9-9be8-a8096b53f9b9.png)


## Airtable 
![airtable](https://user-images.githubusercontent.com/60807484/130946822-c88bbe5d-573e-4e38-8343-9073c01a596a.png)

## Postman
![postman](https://user-images.githubusercontent.com/60807484/130947156-08869aa3-9cf4-423a-806a-9cf4e2e602ac.png)
