var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrada",
      "name": "ENTRADA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.02226684267364476,
          "pitch": 0.20723239583872655,
          "rotation": 0,
          "target": "1-saln"
        },
        {
          "yaw": 1.697590740542866,
          "pitch": 0.3538733011438424,
          "rotation": 0,
          "target": "4-despacho"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-saln",
      "name": "SALÓN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6043899715829824,
          "pitch": 0.19307481016686268,
          "rotation": 0,
          "target": "3-bao-principal_1"
        },
        {
          "yaw": 2.846293048386471,
          "pitch": 0.24409845073135372,
          "rotation": 0,
          "target": "0-entrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-dormitorio-principal",
      "name": "DORMITORIO PRINCIPAL",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.7023808584019324,
          "pitch": 0.16844686336171932,
          "rotation": 1.5707963267948966,
          "target": "3-bao-principal_1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-bao-principal_1",
      "name": "BAÑO PRINCIPAL_1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.9968346562299173,
          "pitch": 0.24637936351221157,
          "rotation": 5.497787143782138,
          "target": "2-dormitorio-principal"
        },
        {
          "yaw": 2.436365735290285,
          "pitch": 0.24114234918537747,
          "rotation": 1.5707963267948966,
          "target": "1-saln"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-despacho",
      "name": "DESPACHO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.9934732217633844,
          "pitch": 0.23507196573665823,
          "rotation": 0.7853981633974483,
          "target": "0-entrada"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "IQEVO-LOFT",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
