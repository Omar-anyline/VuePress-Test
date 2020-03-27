# GETTING STARTED

In order to develop with the Anyline SDK, you require a License Key. A License Key is always bound to your App, to an Anyline SDK major version, and an amount of time.



### API QUICK START GUIDE
In this guide, we will show you how to use the Anyline API.

### Generate an Anyline License
In order to use the Anyline WebAPI, you require a License Key. The Guide on How To Generate a License can be found at Anyline License Key Generation This trial license is worth for 100 Scans in 1 month

## Input Image Requirements:
* Please make sure that the image in not blurry and in good quality.
* The scannable item should be centered in the image and not rotated more than 10 degrees.
* For German ID and Driving License cases make sure that the whole border of the card is visible in the image


## Request properties

Your POST request should contain three things to be valid: “config”, “license”, and “blob”


### config
The “config” parameter will define which product you are using and also in the future configurate your request. The API configuration is exactly structured as the configuration from the Anyline technologies.


#### MRZ
```js

{
    "config": {
        "viewPlugin": {
            "plugin": {
                "idPlugin": {
                    "mrzConfig": {}
                }
            }
        }
    }
}

```


#### German ID:
```js

{
    "config": {
        "viewPlugin": {
            "plugin": {
                "idPlugin": {
                    "germanIdFrontConfig": {}
                }
            }
        }
    }
}

```

#### Driving License:
```js

{
    "config": {
        "viewPlugin": {
            "plugin": {
                "idPlugin": {
                    "drivingLicenseConfig": {}
                }
            }
        }
    }
}

```


#### Energie:
```js

{
    "config": {
        "viewPlugin": {
            "plugin": {
                "meterPlugin": {
                    "scanMode": "MyEnergyScanMode"
                }
            }
        }
    }
    }

```

The Energie scanMode property can be one of the following:

| Mode                           | Parameter in Module Description       |
| ------------------------------ |:-------------:|
| AUTO_ANALOG_DIGITAL_METER      | Auto Analog/Digital Meter Description |
| ANALOG_METER                   | Analog Meter Description              |
| DIGITAL_METER	                 | Digital Meter Description             |
| DIAL_METER                     | Dial Meter Description                |
| DOT_MATRIX_METER	             | Dot Matrix Meter Description          |


### license
Here you put in your Anyline API License.

```js

{
    "license" : "MyAnylineLicense"
    }

```

### blob
The blob proerty is for your image in the base64 format.

```js

{
    "blob": "Base64EcnryptedString"
    }

```