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
          "yaw": -6.069631908189876e-9,
          "pitch": 0.1929789295343607,
          "rotation": 0,
          "target": "1-saln"
        },
        {
          "yaw": 1.7206930271377505,
          "pitch": 0.33983876947404923,
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
          "yaw": -0.6163181582600217,
          "pitch": 0.24503370975477523,
          "rotation": 0,
          "target": "2-dormitorio-principal"
        },
        {
          "yaw": 2.852544943863025,
          "pitch": 0.24018542229446993,
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
          "yaw": 2.642863299974289,
          "pitch": 0.18562133058492414,
          "rotation": 7.0685834705770345,
          "target": "1-saln"
        },
        {
          "yaw": 2.8859656096532857,
          "pitch": 0.38779766063065324,
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
          "yaw": 2.559442723498801,
          "pitch": 0.3030818546324081,
          "rotation": 0.7853981633974483,
          "target": "1-saln"
        },
        {
          "yaw": 2.0144035165873584,
          "pitch": 0.3640405192125158,
          "rotation": 4.71238898038469,
          "target": "2-dormitorio-principal"
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
          "yaw": -1.1774328022801903,
          "pitch": 0.22028067966908615,
          "rotation": 0.7853981633974483,
          "target": "0-entrada"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "MIALMA-LOFT",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
