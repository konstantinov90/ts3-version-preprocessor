Command-line utility to preprocess TS3 version JSONExample:##### inital file:<pre>{  "_sources": {    "rio": {      "sessionShift": 0,      "source": {        "code": "LOADCRM"      }    }  },  ...  ...  "sessionTypes": [{      ...      "operationTypes": [{        ...        "operationTypeSources": [{            "@": "rio"          }          ...        ]        }...      ]    },    ...  ]  ...}</pre>##### processed file:<pre>{  ...  "sessionTypes": [{      ...      "operationTypes": [{        ...        "operationTypeSources": [{            "sessionShift": 0,            "source": {              "code": "LOADCRM"            }          }          ...        ]        }...      ]    },    ...  ]  ...}</pre>Usage: index [options] <versionFileName>
Options:
  -h, --help                output usage information
  -s, --save <outFileName>  filename to save output to