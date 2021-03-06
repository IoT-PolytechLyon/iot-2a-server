# Polytech - IoT API Server
**BENALI Myriam & NAAJI Dorian**

- [_Project report_](https://github.com/IoT-PolytechLyon/iot-2a-server/blob/main/doc/RAPPORT_IoT-BENALI_Myriam-NAAJI_Dorian.pdf)
- [_Wireframe of the client app that will consume the API_](https://app.moqups.com/3cfPlxezOO/view/page/ae8fe8eb0)
- [_Connected Object and Global Application Ecosystem Demonstration Video_](https://www.youtube.com/watch?v=3qnKhdDAtUE)
- [ Mobile application demo video ](https://www.youtube.com/watch?v=WWNtsDXCYrM)

# API json objects structure

## user

Take a look at :
- [**user json schema (html, easier to read)**](https://iot-polytechlyon.github.io/user-schema.html)
- [_user json schema (json)_](doc/json-structure/user-schema.json)

Example :

```json
{
    "email": "myriam.b@gmail.com",
    "password": "blabla",
    "firstName": "Myriam",
    "lastName": "B",
    "sex": true,
    "age": 23,
    "address": "rue bloblo",
    "city": "Villeurbanne",
    "country": "France"
}
```


## connectedDevice

Take a look at :
- [**connectedDevice json schema (html, easier to read)**](https://iot-polytechlyon.github.io/connectedDevice-schema.html)
- [_connectedDevice json schema (json)_](doc/json-structure/connectedDevice-schema.json)

Example :

```json
{
    "name": "device_esp32_leds",
    "description": "that device links one esp32 microCPU with 1 NFC reader, 1 motion sensor and 3 LEDs.",
    "router": "192.168.0.19",
    "state": {
        "pir_state": {
            "detected_something": false
        },
        "nfc_state": {
            "is_activated": false
        },
        "led_state": {
            "is_on": false,
            "red_value": 144,
            "green_value": 17,
            "blue_value": 232
        }
    }
}
```

# Getting started

## Installing MongoDB

In order to be able to start the project, you need to [download MongoDB](https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-4.4.2-signed.msi) and to install it, as well as MongoDB Compass that is embedded
with the installer.

## Getting started with MongoDB

[MongoDB documentation](https://docs.mongodb.com/manual/tutorial/getting-started/) is really complete.
Check it out for more insight.

## Start the project

`nodemon app.js`

