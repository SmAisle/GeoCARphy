/* name: lon, lat, state, [capital?] */
export const CITIES={
'Portland ME':[-70.26,43.66,'Maine'],Boston:[-71.06,42.36,'Massachusetts',1],Burlington:[-73.21,44.48,'Vermont'],Hartford:[-72.68,41.76,'Connecticut',1],Albany:[-73.76,42.65,'New York',1],'New York':[-74.01,40.71,'New York'],Syracuse:[-76.15,43.05,'New York'],Buffalo:[-78.88,42.89,'New York'],
Scranton:[-75.66,41.41,'Pennsylvania'],Philadelphia:[-75.17,39.95,'Pennsylvania'],Harrisburg:[-76.88,40.26,'Pennsylvania',1],Pittsburgh:[-80,40.44,'Pennsylvania'],Erie:[-80.09,42.13,'Pennsylvania'],Baltimore:[-76.61,39.29,'Maryland'],Washington:[-77.04,38.9,'District of Columbia'],
Richmond:[-77.44,37.54,'Virginia',1],Norfolk:[-76.29,36.85,'Virginia'],Raleigh:[-78.64,35.78,'North Carolina',1],Charlotte:[-80.84,35.23,'North Carolina'],Charleston:[-79.93,32.78,'South Carolina'],Columbia:[-81.03,34,'South Carolina',1],Savannah:[-81.1,32.08,'Georgia'],Atlanta:[-84.39,33.75,'Georgia',1],
Jacksonville:[-81.66,30.33,'Florida'],Orlando:[-81.38,28.54,'Florida'],Tampa:[-82.46,27.95,'Florida'],Miami:[-80.19,25.76,'Florida'],Tallahassee:[-84.28,30.44,'Florida',1],Birmingham:[-86.8,33.52,'Alabama'],Mobile:[-88.04,30.69,'Alabama'],'New Orleans':[-90.07,29.95,'Louisiana'],Jackson:[-90.18,32.3,'Mississippi',1],
Memphis:[-90.05,35.15,'Tennessee'],Nashville:[-86.78,36.16,'Tennessee',1],Knoxville:[-83.92,35.96,'Tennessee'],Louisville:[-85.76,38.25,'Kentucky'],Cincinnati:[-84.51,39.1,'Ohio'],Columbus:[-83,39.96,'Ohio',1],Cleveland:[-81.69,41.5,'Ohio'],Toledo:[-83.54,41.65,'Ohio'],Detroit:[-83.05,42.33,'Michigan'],
Indianapolis:[-86.16,39.77,'Indiana',1],Chicago:[-87.63,41.88,'Illinois'],Milwaukee:[-87.91,43.04,'Wisconsin'],Madison:[-89.4,43.07,'Wisconsin',1],Minneapolis:[-93.27,44.98,'Minnesota'],Duluth:[-92.1,46.79,'Minnesota'],Fargo:[-96.79,46.88,'North Dakota'],'Sioux Falls':[-96.73,43.55,'South Dakota'],'Des Moines':[-93.62,41.59,'Iowa',1],Omaha:[-95.93,41.26,'Nebraska'],
'Kansas City':[-94.58,39.1,'Missouri'],'St Louis':[-90.2,38.63,'Missouri'],'Little Rock':[-92.29,34.75,'Arkansas',1],Tulsa:[-95.99,36.15,'Oklahoma'],'Oklahoma City':[-97.52,35.47,'Oklahoma',1],Wichita:[-97.34,37.69,'Kansas'],Dallas:[-96.8,32.78,'Texas'],Houston:[-95.37,29.76,'Texas'],Austin:[-97.74,30.27,'Texas',1],'San Antonio':[-98.49,29.42,'Texas'],'El Paso':[-106.49,31.76,'Texas'],Amarillo:[-101.83,35.22,'Texas'],
Albuquerque:[-106.65,35.08,'New Mexico'],Denver:[-104.99,39.74,'Colorado',1],Cheyenne:[-104.82,41.14,'Wyoming',1],'Rapid City':[-103.23,44.08,'South Dakota'],Billings:[-108.5,45.78,'Montana'],Missoula:[-114,46.87,'Montana'],'Salt Lake City':[-111.89,40.76,'Utah',1],Boise:[-116.2,43.62,'Idaho',1],Spokane:[-117.43,47.66,'Washington'],Seattle:[-122.33,47.61,'Washington'],
Portland:[-122.68,45.52,'Oregon'],Eugene:[-123.09,44.05,'Oregon'],Bend:[-121.31,44.06,'Oregon'],Reno:[-119.81,39.53,'Nevada'],Sacramento:[-121.49,38.58,'California',1],'San Francisco':[-122.42,37.77,'California'],Fresno:[-119.79,36.74,'California'],'Los Angeles':[-118.24,34.05,'California'],'San Diego':[-117.16,32.72,'California'],'Las Vegas':[-115.14,36.17,'Nevada'],Flagstaff:[-111.65,35.2,'Arizona'],Phoenix:[-112.07,33.45,'Arizona',1],Tucson:[-110.97,32.22,'Arizona']};
/* from|to|road|look|toll(1) */
export const ROADS=`Portland ME|Boston|I-95|coast|1
Boston|Hartford|I-84|hills|2
Boston|Albany|Mass Pike|hills|1
Boston|New York|I-95|city|1
Burlington|Albany|US-7|hills
Burlington|Boston|I-89|hills
Hartford|New York|Merritt Pkwy|hills
Hartford|Albany|I-90|hills|2
Albany|New York|NY Thruway|hills|1
Albany|Syracuse|NY Thruway|hills|1
Syracuse|Buffalo|NY Thruway|farm|1
Syracuse|Scranton|I-81|hills
Buffalo|Erie|I-90|lake|1
Buffalo|Scranton|I-86|hills
New York|Scranton|I-80|hills|2
New York|Philadelphia|NJ Turnpike|city|1
Scranton|Harrisburg|I-81|hills
Scranton|Philadelphia|I-476|hills|1
Philadelphia|Harrisburg|PA Turnpike|farm|1
Philadelphia|Baltimore|I-95|city|2
Harrisburg|Baltimore|I-83|farm
Harrisburg|Pittsburgh|PA Turnpike|hills|1
Pittsburgh|Erie|I-79|hills
Pittsburgh|Cleveland|I-76|hills|1
Pittsburgh|Columbus|I-70|hills
Pittsburgh|Washington|I-70|hills|1
Baltimore|Washington|I-95|city
Washington|Richmond|I-95|city
Richmond|Norfolk|I-64|coast
Richmond|Raleigh|I-85|farm
Richmond|Charlotte|I-85|farm
Norfolk|Raleigh|US-64|farm
Raleigh|Charlotte|I-40|hills
Raleigh|Columbia|I-95|farm
Raleigh|Charleston|I-95|farm
Charlotte|Columbia|I-77|hills
Charlotte|Atlanta|I-85|hills
Charlotte|Knoxville|I-40|hills
Columbia|Charleston|I-26|farm
Columbia|Atlanta|I-20|hills
Charleston|Savannah|US-17|coast
Savannah|Atlanta|I-16|farm
Savannah|Jacksonville|I-95|coast
Atlanta|Jacksonville|I-75|farm
Atlanta|Tallahassee|I-75|farm
Atlanta|Birmingham|I-20|hills
Atlanta|Nashville|I-24|hills
Atlanta|Knoxville|I-75|hills
Jacksonville|Orlando|I-95|palm
Jacksonville|Tallahassee|I-10|palm
Orlando|Tampa|I-4|palm
Orlando|Miami|FL Turnpike|palm|1
Tampa|Miami|I-75|palm|2
Tallahassee|Tampa|US-19|palm
Tallahassee|Mobile|I-10|coast
Birmingham|Mobile|I-65|farm
Birmingham|Nashville|I-65|hills
Birmingham|Memphis|I-22|hills
Birmingham|Jackson|I-20|farm
Mobile|New Orleans|I-10|coast
New Orleans|Jackson|I-55|farm
New Orleans|Houston|I-10|coast
Jackson|Memphis|I-55|farm
Jackson|Little Rock|US-65|farm
Jackson|Dallas|I-20|farm
Memphis|Nashville|I-40|hills
Memphis|Little Rock|I-40|farm
Memphis|St Louis|I-55|farm
Nashville|Knoxville|I-40|hills
Nashville|Louisville|I-65|hills
Nashville|St Louis|I-24|farm
Knoxville|Louisville|I-75|hills
Knoxville|Cincinnati|I-75|hills
Louisville|Cincinnati|I-71|hills
Louisville|Indianapolis|I-65|farm|2
Louisville|St Louis|I-64|farm
Cincinnati|Columbus|I-71|farm
Cincinnati|Indianapolis|I-74|farm
Columbus|Cleveland|I-71|farm
Columbus|Toledo|US-23|farm
Columbus|Indianapolis|I-70|farm
Cleveland|Erie|I-90|lake
Cleveland|Toledo|Ohio Turnpike|lake|1
Toledo|Detroit|I-75|lake
Toledo|Chicago|Indiana Toll Road|farm|1
Detroit|Chicago|I-94|lake
Indianapolis|Chicago|I-65|farm
Indianapolis|St Louis|I-70|farm
Chicago|Milwaukee|I-94|lake|1
Chicago|Madison|I-90|farm|1
Chicago|Des Moines|I-80|farm|1
Chicago|St Louis|I-55|farm
Milwaukee|Madison|I-94|farm
Madison|Minneapolis|I-94|farm
Milwaukee|Duluth|US-53|hills
Duluth|Minneapolis|I-35|hills
Minneapolis|Fargo|I-94|plains
Minneapolis|Sioux Falls|I-90|plains
Minneapolis|Des Moines|I-35|farm
Fargo|Sioux Falls|I-29|plains
Fargo|Billings|I-94|plains
Sioux Falls|Omaha|I-29|plains
Sioux Falls|Rapid City|I-90|plains
Des Moines|Omaha|I-80|farm
Des Moines|Kansas City|I-35|farm
Des Moines|St Louis|US-61|farm
Omaha|Kansas City|I-29|farm
Omaha|Denver|I-80|plains
Omaha|Cheyenne|I-80|plains
Kansas City|St Louis|I-70|farm
Kansas City|Wichita|Kansas Turnpike|plains|1
Kansas City|Tulsa|US-169|plains
Kansas City|Denver|I-70|plains
St Louis|Tulsa|I-44|hills|1
St Louis|Little Rock|US-67|hills
Little Rock|Tulsa|I-40|hills
Little Rock|Dallas|I-30|farm
Tulsa|Oklahoma City|Turner Tpk|plains|1
Tulsa|Wichita|Cimarron Tpk|plains|1
Wichita|Oklahoma City|I-35|plains|1
Wichita|Denver|US-50|plains
Wichita|Amarillo|US-54|plains
Oklahoma City|Dallas|I-35|plains
Oklahoma City|Amarillo|I-40|plains
Dallas|Houston|I-45|farm
Dallas|Austin|I-35|farm
Dallas|Amarillo|US-287|plains
Dallas|El Paso|I-20|desert
Houston|San Antonio|I-10|farm
Houston|Austin|US-290|farm
Austin|San Antonio|I-35|farm
San Antonio|El Paso|I-10|desert
Amarillo|Albuquerque|I-40|desert
Amarillo|Denver|US-287|plains
El Paso|Albuquerque|I-25|desert
El Paso|Tucson|I-10|desert
Albuquerque|Denver|I-25|hills
Albuquerque|Flagstaff|I-40|desert
Denver|Cheyenne|I-25|plains
Denver|Salt Lake City|I-70|hills
Cheyenne|Salt Lake City|I-80|hills
Cheyenne|Rapid City|US-85|plains
Cheyenne|Billings|I-25|plains
Rapid City|Billings|I-90|plains
Billings|Missoula|I-90|hills
Billings|Salt Lake City|I-15|hills
Missoula|Spokane|I-90|hills
Missoula|Boise|US-93|hills
Spokane|Seattle|I-90|hills
Spokane|Portland|I-84|hills
Spokane|Boise|US-95|hills
Salt Lake City|Boise|I-84|hills
Salt Lake City|Reno|I-80|desert
Salt Lake City|Las Vegas|I-15|desert
Boise|Portland|I-84|hills
Boise|Bend|US-20|desert
Seattle|Portland|I-5|hills
Portland|Eugene|I-5|hills
Portland|Bend|US-26|hills
Eugene|Bend|OR-58|hills
Eugene|Sacramento|I-5|hills
Eugene|San Francisco|I-5|hills|2
Bend|Reno|US-395|desert
Reno|Sacramento|I-80|hills
Sacramento|San Francisco|I-80|city|2
Sacramento|Fresno|CA-99|farm
San Francisco|Fresno|CA-152|farm
San Francisco|Los Angeles|US-101|coast
Fresno|Los Angeles|CA-99|desert
Los Angeles|San Diego|I-5|palm
Los Angeles|Las Vegas|I-15|desert
Los Angeles|Phoenix|I-10|desert
San Diego|Phoenix|I-8|desert
Las Vegas|Flagstaff|US-93|desert
Las Vegas|Phoenix|US-93|desert
Reno|Las Vegas|US-95|desert
Flagstaff|Phoenix|I-17|desert
Phoenix|Tucson|I-10|desert`.split('\n').map(l=>l.split('|'));
