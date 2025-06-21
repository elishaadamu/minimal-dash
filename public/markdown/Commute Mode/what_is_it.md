Commute mode is tracked by the American Community Survey (ACS) by asking respondents to provide the means of transportation usually used to travel the longest distance to work the prior week. Transportation professionals often group travel modes into "single-occupancy vehicles" (SOV) and "non-single-occupancy vehicles" (non-SOV) because SOVs are a less efficient use of roadway and environmental resources. The non-SOV modes include carpooling, public transit (bus, rail, subway, trolley or light rail, ferryboat), walking, biking, working from home, and other means. A follow-up question asks about vehicle occupancy when "car, truck, van" is selected. If there is more than one passenger then it is considered carpooling (or non-SOV travel).

The first and second charts look at the modes of transportation workers use to get around, broken down by each mode’s share of commuters. They look at workers who drive alone, workers who do not drive alone, and the various modes workers use who do not drive alone. For each chart, toggle the point of origin drop down to get trends of workers that live in the region (residence) and those that work in the region (workplace). The radio buttons in the first chart offer both individual modes and some Census groupings of those modes. ‘Public Transit’ is a grouping of bus, rail, subway, trolley or light rail, and ferry. While ‘Tax, Motorcycle, or Other’ groups those three means of transportation. Although "worked from home" is not a means of transportation, it is an increasingly important option that lets people opt-out of driving. Both charts always use ACS 1-year data. Since urban area data is only released for residence and not workplace, these graphs are blank for the urban areas when workplace is selected.

The third chart also examines the modes of transportation workers use to commute, but only for the Philadelphia and Trenton urban areas (UAs). This chart always uses ACS 5-year data, because it is the official standard for FHWA Transportation Performance Management (TPM) PM3 percent non-SOV travel target setting, and this chart is especially designed to help the DVRPC’s partner agencies set targets. Since ACS 1-year data still informs target setting, the Philadelphia and Trenton UAs are included in the first and second charts as well.

Starting with the 2019 data release, the Census Bureau updated means of transportation categories with slight changes in language in the survey form. The following are the changes made, which could have some impact on comparing pre-2019 modes to 2019 or later, though it is likely insignificant.

- "Bus or trolley bus" became "Bus"
- "Subway or elevated" became "Subway or elevated rail" (_Tracking Progress_ uses "Subway" for this)
- "Railroad" became "Long-distance train or commuter rail" (_Tracking Progress_ uses "Rail" for this)
- "Streetcar or trolley car" became "Light rail, streetcar, or trolley" (_Tracking Progress_ uses "Trolley or Light Rail" for this)

Due to survey sample size, the commute mode shares displayed are estimates—each within a margin of error. Estimates may show a general trend but may not be statistically significant when comparing to each other if change is slight—particularly in lower-population geographies.

_Note: The Census Bureau issued [a statement acknowledging errors in 2017 ACS data for Philadelphia County](https://www.census.gov/programs-surveys/acs/technical-documentation/errata/121.html). Philadelphia estimates for geography of residence are omitted as a result, but the error may impact regional aggregations. Also note, the 2020 1yr ACS was not released due to disruptions of the COVID-19 pandemic._

#### Deficient Bridges by Ownership Type

chart:{
"type": "commute",
"file": "commute_modes_1_fk.csv",
"xAxis": "year",
"yAxis": {
"format": "percentage",
"label": "Percentage of Commuters"
},
"locations": [
{"value": "mpo", "label": "Greater Philadelphia"},
{"value": "ches", "label": "Chester County"},
{"value": "colh", "label": "Collegeville"},
{"value": "din", "label": "Dingmans Ferry"},
{"value": "hope", "label": "Hopewell"},
{"value": "pet", "label": "Peterborough"},
{"value": "prge", "label": "Prince George"}
],
"transportModes": {
"options": [
{"value": "bike", "label": "Bike"},
{"value": "bus", "label": "Bus"},
{"value": "ferry", "label": "Ferry"},
{"value": "mcyc", "label": "Motorcycle"},
{"value": "mo", "label": "Motor Other"},
{"value": "nsov", "label": "Non-SOV"},
{"value": "other", "label": "Other"},
{"value": "pool", "label": "Carpool"},
{"value": "rail", "label": "Rail"},
{"value": "sov", "label": "Drive Alone"},
{"value": "subw", "label": "Subway"},
{"value": "taxi", "label": "Taxi"},
{"value": "transit", "label": "Transit"},
{"value": "troll", "label": "Trolley"},
{"value": "walk", "label": "Walk"},
{"value": "wfh", "label": "Work from Home"}
]
},
"filters": {
"Value": [
{"value": "Residence", "label": "Residence"},
{"value": "Workplace", "label": "Workplace"}
]
}
}
