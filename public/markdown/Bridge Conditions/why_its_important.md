Bridges enable mobility and commerce throughout the region. Federal transportation legislation requires state departments of transportation to use a Lowest Life Cycle Cost (LLCC) approach to maximize the life of a bridge at the lowest cost. LLCC emphasizes preservation and promotes the right treatment at the right time, while incorporating risk into the analysis. Bridges with a poor condition rating indicate maintenance needs that do not pose safety issues, as long as they are resolved in a timely manner.

This indicator reflects the _Connections 2050_ Plan goal to rebuild and modernize the region’s transportation assets in order to achieve and maintain a state-of-good repair.

#### Percentage of Deficient Bridges by Ownership Type

chart:{
"type": "line",
"file": "Bridge_Conditions_1_fk.csv",
"xAxis": "year",
"yAxis": {
"type": "percentage"
},
"option": true,
"optionKey": "Value",
"optionLabel": "Select Condition Type",
"options": [
{"value": "Bridge", "label": "Bridge Condition"},
{"value": "Deck", "label": "Deck Condition"}
],
"ownershipType": {
"label": "Select Ownership",
"options": [
{"value": "All", "label": "All"},
{"value": "State", "label": "State"},
{"value": "Local", "label": "Local"},
{"value": "Other", "label": "Other"}
]
},
"lines": [
{"key": "northshore- All", "name": "northshore", "type": "All"},
{"key": "northshore- State", "name": "northshore", "type": "State"},
{"key": "northshore- Local", "name": "northshore", "type": "Local"},
{"key": "northshore- Other", "name": "northshore", "type": "Other"},
{"key": "waianae Counties- All", "name": "waianae", "type": "All"},
{"key": "waianae Counties- State", "name": "waianae", "type": "State"},
{"key": "waianae Counties- Local", "name": "waianae", "type": "Local"},
{"key": "waianae Counties- Other", "name": "waianae", "type": "Other"},
{"key": "centraloahu Suburbs- All", "name": "centraloahu", "type": "All"},
{"key": "centraloahu Suburbs- State", "name": "centraloahu", "type": "State"},
{"key": "centraloahu Suburbs- Local", "name": "centraloahu", "type": "Local"},
{"key": "centraloahu Suburbs- Other", "name": "centraloahu", "type": "Other"},
{"key": "ewa Suburbs- All", "name": "ewa", "type": "All"},
{"key": "ewa Suburbs- State", "name": "ewa", "type": "State"},
{"key": "ewa Suburbs- Local", "name": "ewa", "type": "Local"},
{"key": "ewa Suburbs- Other", "name": "ewa", "type": "Other"},
{"key": "puc- All", "name": "puc", "type": "All"},
{"key": "puc- State", "name": "puc", "type": "State"},
{"key": "puc- Local", "name": "puc", "type": "Local"},
{"key": "puc- Other", "name": "puc", "type": "Other"},
{"key": "easthonolulu- All", "name": "easthonolulu", "type": "All"},
{"key": "easthonolulu- State", "name": "easthonolulu", "type": "State"},
{"key": "easthonolulu- Local", "name": "easthonolulu", "type": "Local"},
{"key": "easthonolulu- Other", "name": "easthonolulu", "type": "Other"},
{"key": "koolauloa- All", "name": "koolauloa", "type": "All"},
{"key": "koolauloa- State", "name": "koolauloa", "type": "State"},
{"key": "koolauloa- Local", "name": "koolauloa", "type": "Local"},
{"key": "koolauloa- Other", "name": "koolauloa", "type": "Other"},
{"key": "koolaupoko- All", "name": "koolaupoko", "type": "All"},
{"key": "koolaupoko- State", "name": "koolaupoko", "type": "State"},
{"key": "koolaupoko- Local", "name": "koolaupoko", "type": "Local"},
{"key": "koolaupoko- Other", "name": "koolaupoko", "type": "Other"}
]
}

#### Deficient Bridges by Ownership Type

chart:{
"type": "bridgeStacked",
"file": "Bridge_Conditions_2_fk.csv",
"xAxis": "year",
"yAxis": {
"format": "number",
"label": "Square Feet (Thousands)",
"showValues": true,
"valueLabel": {
"position": "inside",
"fontSize": 12,
"fill": "#000000"
}
},
"options": [
{"value": "Bridge", "label": "Number of Bridges"},
{"value": "Deck", "label": "Bridge Deck Area"}
],
"bars": [
{"key": "MPO- All", "name": "All", "type": "All"},
{"key": "MPO- State", "name": "State", "type": "State"},
{"key": "MPO- Local", "name": "Local", "type": "Local"},
{"key": "MPO- Other", "name": "Other", "type": "Other"}
],
"defaultOption": "Bridge"
}

#### Bridges by Condition

chart:{
"type": "bridgeStacked1",
"file": "Bridge_Conditions_3_fk.csv",
"xAxis": "year",
"yAxis": {
"format": "number",
"label": "Square Feet (Thousands)",
"showValues": true,
"valueLabel": {
"position": "inside",
"fontSize": 12,
"fill": "#000000"
}
},
"options": [
{"value": "Deck", "label": "Bridge Deck Area"},
{"value": "Bridge", "label": "Number of Bridges"}
],
"bars": [
{"key": "MPO- All", "name": "All", "type": "All"},
{"key": "MPO- Poor", "name": "Poor", "type": "Poor"},
{"key": "MPO- Fair", "name": "Fair", "type": "Fair"},
{"key": "MPO- Good", "name": "Good", "type": "Good"}
],
"defaultOption": "Deck"
}
