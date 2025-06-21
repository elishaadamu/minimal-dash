Over the last two decades, the region has made significant progress in improving bridge conditions. DVRPC is working with both state departments of transportation to advance the right repair project at the right time by allocating more funding to preserving and maintaining existing bridges. Since peaking at nearly 18% in 2003, deficient deck area has decreased to just below 6% in 2023—a 62% drop in the total deficient deck area. Total deficient bridges have decreased steadily, both in terms of total number of bridges and deck area.

With a mature and aging transportation network, however, asset condition continues to be a significant challenge. Despite lower deficiency ratings, a large majority of bridges in the region are in fair condition. These bridges will need considerable investment in order to maintain a fair rating. In addition, the largest single 10-year period for building the region's infrastructure occurred during the 1960s; this means that many of these facilities have reached the end of their useful life and will need to be rehabilitated or reconstructed soon.

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
{"key": "MPO- All", "name": "MPO", "type": "All"},
{"key": "MPO- State", "name": "MPO", "type": "State"},
{"key": "MPO- Local", "name": "MPO", "type": "Local"},
{"key": "MPO- Other", "name": "MPO", "type": "Other"},
{"key": "Hopewell All Counties- All", "name": "Hopewell", "type": "All"},
{"key": "Hopewell All Counties- State", "name": "Hopewell", "type": "State"},
{"key": "Hopewell All Counties- Local", "name": "Hopewell", "type": "Local"},
{"key": "Hopewell All Counties- Other", "name": "Hopewell", "type": "Other"},
{"key": "Petersburg Suburbs- All", "name": "Petersburg", "type": "All"},
{"key": "Petersburg Suburbs- State", "name": "Petersburg", "type": "State"},
{"key": "Petersburg Suburbs- Local", "name": "Petersburg", "type": "Local"},
{"key": "Petersburg Suburbs- Other", "name": "Petersburg", "type": "Other"},
{"key": "Colonial Heights Suburbs- All", "name": "Colonial Heights", "type": "All"},
{"key": "Colonial Heights Suburbs- State", "name": "Colonial Heights", "type": "State"},
{"key": "Colonial Heights Suburbs- Local", "name": "Colonial Heights", "type": "Local"},
{"key": "Colonial Heights Suburbs- Other", "name": "Colonial Heights", "type": "Other"},
{"key": "Chesterfield- All", "name": "Chesterfield", "type": "All"},
{"key": "Chesterfield- State", "name": "Chesterfield", "type": "State"},
{"key": "Chesterfield- Local", "name": "Chesterfield", "type": "Local"},
{"key": "Chesterfield- Other", "name": "Chesterfield", "type": "Other"},
{"key": "Dinwiddie- All", "name": "Dinwiddie", "type": "All"},
{"key": "Dinwiddie- State", "name": "Dinwiddie", "type": "State"},
{"key": "Dinwiddie- Local", "name": "Dinwiddie", "type": "Local"},
{"key": "Dinwiddie- Other", "name": "Dinwiddie", "type": "Other"},
{"key": "Prince George- All", "name": "Prince George", "type": "All"},
{"key": "Prince George- State", "name": "Prince George", "type": "State"},
{"key": "Prince George- Local", "name": "Prince George", "type": "Local"},
{"key": "Prince George- Other", "name": "Prince George", "type": "Other"}
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
