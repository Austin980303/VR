var APP_DATA = {
  "scenes": [
    {
      "id": "0-metro-station",
      "name": "metro station",
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
        "yaw": -2.580410225332276,
        "pitch": 0.18602192038337861,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -2.757402485358549,
          "pitch": 0.552336606411842,
          "rotation": 3.9269908169872414,
          "target": "1-little-playground"
        },
        {
          "yaw": 3.094628680947501,
          "pitch": 0.15813611708959563,
          "rotation": 4.71238898038469,
          "target": "3-basketball-court"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.580410225332276,
          "pitch": 0.18602192038337861,
          "title": "捷運站",
          "text": "有造型的地方"
        }
      ]
    },
    {
      "id": "1-little-playground",
      "name": "little playground",
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
        "yaw": -1.2965303014815142,
        "pitch": 0.13230157240851526,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -0.5873592985704761,
          "pitch": 0.15829385897446357,
          "rotation": 7.853981633974483,
          "target": "2-big-playground"
        },
        {
          "yaw": -1.7150626875948944,
          "pitch": 0.34481671042540185,
          "rotation": 3.9269908169872414,
          "target": "0-metro-station"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.2965303014815142,
          "pitch": 0.13230157240851526,
          "title": "小舞台",
          "text": "有小朋友會在玩"
        }
      ]
    },
    {
      "id": "2-big-playground",
      "name": "big playground",
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
        "yaw": -1.1167273197392174,
        "pitch": 0.24933757876985752,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -0.721642709128087,
          "pitch": 0.3159515684388481,
          "rotation": 7.0685834705770345,
          "target": "2-big-playground"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.0178998029890867,
          "pitch": 0.3246144220554399,
          "title": "遊樂場",
          "text": "也有很多小朋友"
        }
      ]
    },
    {
      "id": "3-basketball-court",
      "name": "basketball court",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.2582334172129883,
        "pitch": 0.23916053473844912,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 1.0154606873389511,
          "pitch": 0.16240898485215283,
          "rotation": 0.7853981633974483,
          "target": "4-ecological"
        },
        {
          "yaw": -0.2655372824759077,
          "pitch": 0.5257067206481523,
          "rotation": 3.9269908169872414,
          "target": "0-metro-station"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.261590906312982,
          "pitch": 0.23580304563845544,
          "title": "籃球場",
          "text": "有很多人去打球"
        }
      ]
    },
    {
      "id": "4-ecological",
      "name": "ecological",
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
        "yaw": -1.5695778625574377,
        "pitch": 0.2077704571617076,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -0.837294512925892,
          "pitch": 0.27274099015565234,
          "rotation": 0.7853981633974483,
          "target": "3-basketball-court"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.2031624560814382,
          "pitch": 0.05743337652660507,
          "title": "生態池",
          "text": "有很多鳥"
        }
      ]
    }
  ],
  "name": "大安森林公園全景",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
