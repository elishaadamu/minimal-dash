Over the last several decades, the Greater Philadelphia economy has shifted away from manufacturing and toward the service and information sectors. An educated workforce is required to unlock future growth and higher wages. Closing regional gaps in educational attainment is also an important factor in achieving _Connections 2050_ long-range plan goals for an equitable economy, such as fostering a high-skilled workforce, reducing poverty and the wealth gap, and improving school quality for all residents. Discrepancies in educational attainment may be reinforced by inequities in educational funding and the lack of access to support services in many low-income communities.

#### Population 25 Years and Older Having Completed High-School by Planning Area

chart:{
"type": "education2",
"file": "edattainHS.csv",
"xAxis": "year",
"yAxis": {
"format": "percent",
"label": "Percentage of Population 25 Years and Olders",
"showValues": true
},
"bars": [
{"key": "hsRateCore", "name": "Core"},
{"key": "hsRateDeveloped", "name": "Developed"},
{"key": "hsRateGrowing", "name": "Growing"},
{"key": "hsRateRural", "name": "Rural"}
]
}

#### Population 25 Years and Older by Educational Attainment

chart:{
"type": "education1",
"file": "edattainComprehensive.csv",
"xAxis": "",
"yAxis": {
"format": "number",
"label": "Population",
"showValues": true
},
"options": [
{"value": "northshore", "label": "North Shore"},
{"value": "waianae", "label": "Waianae"},
{"value": "centralOahu", "label": "Central Oahu"},
{"value": "ewa", "label": "Ewa"},
{"value": "puc", "label": "PUC"},
{"value": "EastHonolulu", "label": "East Honolulu"},
{"value": "koolauloa", "label": "Koolauloa"},
{"value": "koolaupoko", "label": "Koolaupoko"}
],
"bars": [
{"key": "Associates Degree", "name": "Associates Degree"},
{"key": "Bachelors Degree", "name": "Bachelors Degree"},
{"key": "Graduate/Professional Degree", "name": "Graduate/Professional Degree"},
{"key": "Some College", "name": "Some College"},
{"key": "Graduated High School", "name": "Graduated High School"},
{"key": "Some High School", "name": "Some High School"},
{"key": "Less than High School", "name": "Less than High School"}
],
"defaultOption": "northshore"
}
