CREATE DATABASE hotpodtato CHARACTER SET utf8 COLLATE utf8_hungarian_ci;

CREATE TABLE users(
    id INT NOT NULL,
    username VARCHAR(50),
    usermail VARCHAR(50),
    passw VARCHAR(50),
    regdate DATE,
    CONSTRAINT pk_users PRIMARY KEY(id)
);

INSERT INTO users(id,username,usermail,passw,regdate) VALUES
(1,"admin","admin@hotpodtato.hu","123456","2023-12-25"),
(2,"varganorbert","vrgnrb@hotpodtato.hu","789654","2023-12-25"),
(3,"monoriferenc","monoriferenc@hotpodtato.hu","19960525","2023-12-25");


CREATE TABLE players(
    leaguetype VARCHAR(10),
    playername VARCHAR(100),
    team VARCHAR(100),
    position VARCHAR(3),
    exp VARCHAR(5),
    status VARCHAR(5),
    injtype VARCHAR(50),
    recoverytime VARCHAR(50),
    gamesplayed INT,
    pyards INT,
    ptds INT,
    pint INT,
    rushyards INT,
    rushtds INT,
    rec INT,
    recyards INT,
    rectds INT,
    sck INT,
    recints INT,
    ffumbles INT,
    freturn INT,
    ppg DOUBLE,
    totalpoint DOUBLE
);

INSERT INTO players(leaguetype,playername,team,position,exp,status,injtype,recoverytime,gamesplayed,pyards,ptds,pint,rushyards,rushtds,rec,recyards,rectds,sck,recints,ffumbles,freturn,ppg,totalpoint) VALUES
("Redraft","Josh Allen","BUF","QB","5","H","None","0 week",15,3778,27,15,413,13,0,0,0,0,0,0,0,23.23,348.42),
("Dynasty","Jalen Hurts","PHI","QB","2","H","None","0 week",15,3636,20,13,576,15,0,0,0,0,0,0,0,22.47,337.04),
("Dynasty","Christian McCaffrey","SF","RB","5","H","None","0 week",15,0,0,0,1395,14,63,537,7,0,0,0,0,22.31,315.2),
("Redraft","Dak Prescott","DAL","QB","6","H","None","0 week",15,3892,30,7,237,2,0,0,0,0,0,0,0,19.83,297.38),
("Redraft","Lamar Jackson","BAL","QB","5","H","None","0 week",15,3357,19,7,786,5,0,0,0,0,0,0,0,19.66,294.88),
("Dynasty","Brock Purdy","SF","QB","2","Q","Knee","1-2 week",15,4050,29,11,140,2,0,0,0,0,0,0,0,18.53,278),
("Dynasty","Jordan Love","GB","QB","4","H","None","0 week",15,3587,27,11,246,3,0,0,0,0,0,0,0,18.14,272.08),
("Redraft","Patrick Mahomes","KC","QB","6","H","None","0 week",15,3938,26,14,387,0,0,0,0,0,0,0,0,17.88,268.22),
("Dynasty","Jared Goff","DET","QB","6","H","None","0 week",15,3984,27,10,21,2,0,0,0,0,0,0,0,17.16,257.46),
("Redraft","Russell Wilson","DEN","QB","11","H","None","0 week",15,3070,26,8,341,3,0,0,0,0,0,0,0,17.13,256.9),
("Redraft","Baker Mayfield","TB","QB","7","H","None","0 week",15,3598,26,8,157,1,0,0,0,0,0,0,0,16.77,251.62),
("Dynasty","Tua Tagovailoa","MIA","QB","3","H","None","0 week",15,4214,26,10,53,0,0,0,0,0,0,0,0,16.52,247.86),
("Dynasty","Trevor Lawrence","JAX","QB","2","H","None","0 week",15,3736,19,12,329,4,0,0,0,0,0,0,0,16.42,246.34),
("Redraft","Sam Howell","WAS","QB","R","H","None","0 week",15,3624,19,17,265,5,0,0,0,0,0,0,0,16.23,243.46),
("Dynasty","Raheem Mostert","MIA","RB","10","H","None","0 week",15,0,0,0,1012,18,25,175,3,0,0,0,0,16.18,242.7),
("Redraft","C.J. Stroud","HOU","QB","R","H","None","0 week",13,3631,20,5,143,3,1,0,0,0,0,0,0,18.58,241.54),
("Redraft","Tyreek Hill","MIA","WR","8","H","None","0 week",14,0,0,0,15,0,106,1641,12,0,0,0,0,16.83,235.6),
("Redraft","Justin Herbert","LAC","QB","2","IR","Ankle","4-6 week",13,3134,20,7,228,3,1,10,0,0,0,0,0,17.94,233.16),
("Dynasty","Matthew Stafford","LAR","QB","10","H","None","0 week",14,3648,23,9,66,0,0,0,0,0,0,0,0,16.47,230.52),
("Redraft","CeeDee Lamb","DAL","WR","R","H","None","0 week",15,0,0,0,101,2,109,1424,9,0,0,0,0,14.57,218.5),
("Dynasty","Joshua Dobbs","MIN","QB","7","H","None","0 week",13,2464,13,10,421,6,0,0,0,0,0,0,0,15.44,200.66),
("Redraft","Derek Carr","NO","QB","8","H","None","0 week",15,3417,19,8,37,0,0,0,0,0,0,0,0,13.23,198.38),
("Dynasty","Justin Fields","CHI","QB","R","H","None","0 week",11,2146,15,9,585,3,0,0,0,0,0,0,0,17.85,196.34),
("Redraft","Kyren Williams","LAR","RB","R","H","None","0 week",11,0,0,0,1057,9,30,192,3,0,0,0,0,17.72,194.9),
("Dynasty","Mike Evans","TB","WR","8","H","None","0 week",15,0,0,0,0,0,73,1163,13,0,0,0,0,12.95,194.3),
("Redraft","Derrick Henry","TEN","RB","7","H","None","0 week",15,14,2,0,972,11,28,214,0,0,0,0,0,12.88,193.16),
("Redraft","Travis Etienne Jr.","JAX","RB","R","H","None","0 week",15,0,0,0,849,9,51,430,1,0,0,0,0,12.79,191.9),
("Dynasty","Rachaad White","TB","RB","R","H","None","0 week",15,0,0,0,873,6,56,507,3,0,0,0,0,12.67,190),
("Redraft","Geno Smith","SEA","QB","6","H","None","0 week",13,3145,17,9,94,1,1,-2,0,0,0,0,0,14.54,189),
("Redraft","T.J. Watt","PIT","TE","7","H","None","0 week",15,0,0,0,0,0,0,0,0,17,1,4,3,11.88,181.6),
("Redraft","A.J. Brown","PHI","WR","5","D","Neck","2-3 week",15,0,0,0,0,0,101,1394,7,0,0,0,0,11.96,179.4),
("Dynasty","James Cook","BUF","RB","R","H","None","0 week",15,0,0,0,1038,2,40,433,4,0,0,0,0,11.94,179.1),
("Redraft","Foyesade Oluokun","JAX","RB","7","H","None","0 week",15,0,0,0,0,0,0,0,0,6.5,1,1,2,11.92,178.8),
("Redraft","Jahmyr Gibbs","DET","RB","R","H","None","0 week",13,0,0,0,872,9,51,316,1,0,0,0,0,11.79,176.8),
("Dynasty","Joe Mixon","CIN","RB","6","H","None","0 week",15,0,0,0,858,8,47,348,1,0,0,0,0,11.77,176.6),
("Redraft","Amon-Ra St. Brown","DET","WR","1","H","None","0 week",14,0,0,0,13,0,106,1281,8,0,0,1,0,12.53,175.4),
("Redraft","Gardner Minshew","IND","QB","4","H","None","0 week",14,2940,14,9,88,3,0,0,0,0,0,0,0,12.46,174.4),
("Dynasty","Keenan Allen","LAC","WR","9","H","None","0 week",13,49,1,0,6,0,108,1243,7,0,0,0,0,13.14,170.86),
("Redraft","Puka Nacua","LAR","WR","R","H","None","0 week",15,0,0,0,70,0,96,1327,5,0,0,0,0,11.31,169.7),
("Redraft","Breece Hall","NYJ","RB","1","H","None","0 week",15,0,0,0,732,4,65,537,3,0,0,0,0,9.88,168.9),
("Dynasty","David Montgomery","DET","RB","3","H","None","0 week",12,0,0,0,910,11,16,117,0,0,0,0,0,13.11,168.7),
("Redraft","Deebo Samuel","SF","WR","Q","3","Shoulder","1-2 week",13,0,0,0,179,5,53,834,6,0,0,0,0,12.87,167.3),
("Redraft","Antoine Winfield Jr.","TB","TE","4","H","None","0 week",15,0,0,0,0,0,0,0,0,5,3,5,4,10.99,164.9),
("Redraft","DJ Moore","CHI","WR","5","H","None","0 week",15,0,0,0,21,1,83,1141,7,0,0,1,0,10.81,162.2),
("Dynasty","Desmond Ridder","ATL","QB","1","H","None","0 week",13,2528,10,10,193,5,1,-6,0,0,0,0,0,12.45,161.82),
("Redraft","Gus Edwards","BAL","RB","4","H","None","0 week",15,0,0,0,694,12,12,180,0,0,0,0,0,10.76,161.4),
("Redraft","Bijan Robinson","ATL","RB","R","H","None","0 week",15,0,0,0,873,4,48,373,3,0,0,0,0,10.71,160.6),
("Dynasty","Danielle Hunter","MIN","TE","10","H","None","0 week",15,0,0,0,0,0,0,0,0,12.5,0,4,0,10.61,159.1),
("Dynasty","Brandon Aubrey","DAL","TE","R","H","None","0 week",15,0,0,0,0,0,0,0,0,0,0,0,0,10.47,157),
("Redraft","Ja'Marr Chase","CIN","WR","2","H","None","0 week",14,-7,0,0,-6,0,93,1156,7,0,0,0,0,10.34,156.72);

CREATE TABLE leagues(
    leaguename VARCHAR(100),
    leaguetype VARCHAR(10),
    numberofplayers INT,
    members VARCHAR(255),
    gamesplayed INT,
    balance VARCHAR(5),
    s_r_points VARCHAR(9)
);

INSERT INTO leagues(leaguename,leaguetype,numberofplayers,members,gamesplayed,balance,s_r_points) VALUES
("Superstars","Dynasty",6,"Józsi",12,"10-2","1099-613"),
("Superstars","Dynasty",6,"Béla",12,"8-4","975-604"),
("Superstars","Dynasty",6,"Kopasz",12,"7-5","901-594"),
("Superstars","Dynasty",6,"Oti",12,"6-6","811-743"),
("Superstars","Dynasty",6,"Laller",12,"4-8","655-812"),
("Superstars","Dynasty",6,"Biggun",12,"1-11","354-1108"),
("Tojáslabda","Redraft",8,"Emil",10,"10-0","1001-403"),
("Tojáslabda","Redraft",8,"5000 yard",10,"9-1","878-404"),
("Tojáslabda","Redraft",8,"QB master",10,"7-3","901-611"),
("Tojáslabda","Redraft",8,"TD Store",10,"6-4","811-485"),
("Tojáslabda","Redraft",8,"Atis",10,"5-5","650-609"),
("Tojáslabda","Redraft",8,"Hústornyok",10,"4-6","534-665"),
("Tojáslabda","Redraft",8,"Vikingek",10,"3-7","311-712"),
("Tojáslabda","Redraft",8,"Raiders fan",10,"1-9","254-997"),
("GOATs","Dynasty",8,"Bill",11,"10-1","1201-503"),
("GOATs","Dynasty",8,"Kevin",11,"10-1","1176-504"),
("GOATs","Dynasty",8,"Atesz",11,"8-3","1001-511"),
("GOATs","Dynasty",8,"TB12",11,"7-4","911-405"),
("GOATs","Dynasty",8,"Zolee",11,"5-6","650-609"),
("GOATs","Dynasty",8,"Kickoff",11,"4-6","564-665"),
("GOATs","Dynasty",8,"FumbleGuy",11,"3-7","311-712"),
("GOATs","Dynasty",8,"Joe Montana",11,"1-9","254-997"),
("SBKings","Redraft",6,"Szikla",10,"8-2","901-513"),
("SBKings","Redraft",6,"BigHit",12,"8-2","875-504"),
("SBKings","Redraft",6,"Speedy",12,"7-3","801-494"),
("SBKings","Redraft",6,"Baller",12,"5-5","711-703"),
("SBKings","Redraft",6,"Alfa",12,"4-6","455-712"),
("SBKings","Redraft",6,"LastDance",12,"2-8","334-808");

CREATE TABLE news(
    id INT NOT NULL,
    content Longtext,
    author VARCHAR(100),
    dates date
);

CREATE TABLE blog(
    id INT NOT NULL,
    content Longtext,
    author VARCHAR(100),
    dates date
);