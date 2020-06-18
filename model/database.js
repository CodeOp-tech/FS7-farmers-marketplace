require("dotenv").config();
const mysql = require("mysql");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const con = mysql.createConnection({
  host: DB_HOST || "127.0.0.1",
  user: DB_USER || "root",
  password: DB_PASS,
  database: DB_NAME || "farmers",

  multipleStatements: true,
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");

  let sql = `DROP TABLE IF EXISTS products;
    DROP TABLE IF EXISTS users;
    DROP TABLE IF EXISTS markets;
    DROP TABLE IF EXISTS users_markets;
    
    CREATE TABLE products (
      id int NOT NULL AUTO_INCREMENT,
      name varchar(255) NOT NULL,
      unit_price decimal(6,2) NOT NULL,
      units varchar(4) NOT NULL,
      description varchar(512) NOT NULL,
      tax_code varchar(255) NOT NULL,
      category_id int,
      isPerishable TINYINT(1) NOT NULL,
      shelf_life_count int NOT NULL,
      shelf_life_units varchar(255) NOT NULL,
      seller_id int NOT NULL,
      img varchar(512) NOT NULL,
      PRIMARY KEY (id)
    );
    
    CREATE TABLE users (
      id int NOT NULL AUTO_INCREMENT,
      firstname varchar(255) NOT NULL,
      lastname varchar(255) NOT NULL,
      email varchar(255) NOT NULL,
      address1 varchar(255),
      postcode varchar(255),
      city varchar(255),
      location varchar(255),
      company_name varchar(255),
      company_no varchar(255),
      tel_no varchar(255),
      mob_no varchar(255),
      website varchar(255),
      isSeller TINYINT(1),
      password varchar(255),
      username varchar(255),
      lat varchar(255),
      lng varchar(255),
      PRIMARY KEY (id),
      img varchar(255) 
    );
    
    CREATE TABLE markets (
      id int NOT NULL AUTO_INCREMENT,
      name varchar(255) NOT NULL,
      email varchar(255) NOT NULL,
      address1 varchar(255) NOT NULL,
      postcode varchar(255) NOT NULL,
      city varchar(255) NOT NULL,
      location varchar(255),
      company_name varchar(255) NOT NULL,
      company_no varchar(255) NOT NULL,
      tel_no varchar(255) NOT NULL,
      mob_no varchar(255) NOT NULL,
      day varchar(10) NOT NULL,
      start_time time NOT NULL,
      end_time time NOT NULL,
      website varchar(255) NOT NULL,
      lat decimal(10,8),
      lng decimal(10,8),
      img varchar(255),  
      PRIMARY KEY (id)
    );
    
    CREATE TABLE users_markets (
      id int NOT NULL AUTO_INCREMENT,
      market_id int NOT NULL,
      user_id int NOT NULL,
      PRIMARY KEY (id)    
    );
    
    INSERT INTO markets (name, email, address1, postcode, city, location, company_name, company_no, tel_no, mob_no, day, start_time, end_time, website, lat, lng) 
    VALUES ("Balham Farmers' Market", "info@lfm.org.uk", "Hydethorpe Rd", "SW12 OJA", "London", "bla", "London Farmers' Markets", "3815770",  "0207833 0338",  "0207833 0338", "Saturday", "09:00", "13:00", "http://www.lfm.org.uk", "51.444015", "-0.144320");
    INSERT INTO markets (name, email, address1, postcode, city, location, company_name, company_no, tel_no, mob_no, day, start_time, end_time, website, lat, lng) 
    VALUES ("Blackheath Farmers' Market", "info@lfm.org.uk", "Blackheath Station Car Park", "SE3 9LA", "London", "bla", "London Farmers' Markets", "3815770",  "0207833 0338",  "0207833 0338", "Saturday", "09:00", "13:00", "http://www.lfm.org.uk", "51.465881", "0.007321");
    INSERT INTO markets (name, email, address1, postcode, city, location, company_name, company_no, tel_no, mob_no, day, start_time, end_time, website, lat, lng) 
    VALUES ("Bloomsbury Farmers' Market", "info@lfm.org.uk", "Torrington Square", "WC1E 7HY", "London", "bla", "London Farmers' Markets", "3815770",  "0207833 0338",  "0207833 0338", "Saturday", "09:00", "13:00", "http://www.lfm.org.uk", "51.523124", "-0.130947");
    INSERT INTO markets (name, email, address1, postcode, city, location, company_name, company_no, tel_no, mob_no, day, start_time, end_time, website, lat, lng) 
    VALUES ("Ealing Farmers' Market", "info@lfm.org.uk", "Leeland Rd", "W13 9HH", "London", "bla", "London Farmers' Markets", "3815770",  "0207833 0338",  "0207833 0338", "Saturday", "09:00", "13:00", "http://www.lfm.org.uk", "51.509868", "-0.323552");
    INSERT INTO markets (name, email, address1, postcode, city, location, company_name, company_no, tel_no, mob_no, day, start_time, end_time, website, lat, lng) 
    VALUES ("Islington Farmers' Market", "info@lfm.org.uk", "Chapel Market", "N1 9PZ", "London", "bla", "London Farmers' Markets", "3815770",  "0207833 0338",  "0207833 0338", "Saturday", "09:00", "13:00", "http://www.lfm.org.uk", "51.533465", "-0.109626");
    INSERT INTO markets (name, email, address1, postcode, city, location, company_name, company_no, tel_no, mob_no, day, start_time, end_time, website, lat, lng) 
    VALUES ("Ladbroke Grove Farmers' Market", "info@lfm.org.uk", "Portobello Rd", "W10 5SZ", "London", "bla", "London Farmers' Markets", "3815770",  "0207833 0338",  "0207833 0338", "Saturday", "09:00", "13:00", "http://www.lfm.org.uk", "51.520545", "-0.208870");
    INSERT INTO markets (name, email, address1, postcode, city, location, company_name, company_no, tel_no, mob_no, day, start_time, end_time, website, lat, lng) 
    VALUES ("London Bridge Farmers' Market", "info@lfm.org.uk", "Kings College, Guys Campus, Guys & St. Thomas Hospital", "SE1 1UL", "London", "bla", "London Farmers' Markets", "3815770",  "0207833 0338",  "0207833 0338", "Saturday", "09:00", "13:00", "http://www.lfm.org.uk", "51.503597", "-0.088643");
    INSERT INTO markets (name, email, address1, postcode, city, location, company_name, company_no, tel_no, mob_no, day, start_time, end_time, website, lat, lng) 
    VALUES ("Marylebone Farmers' Market", "info@lfm.org.uk", "Aybrook St", "W1U 4DF", "London", "bla", "London Farmers' Markets", "3815770",  "0207833 0338",  "0207833 0338", "Saturday", "09:00", "13:00", "http://www.lfm.org.uk", "51.518981", "-0.152651");
    INSERT INTO markets (name, email, address1, postcode, city, location, company_name, company_no, tel_no, mob_no, day, start_time, end_time, website, lat, lng) 
    VALUES ("Notting Hill Farmers' Market", "info@lfm.org.uk", "Kensington Church St", "W11 3LQ", "London", "bla", "London Farmers' Markets", "3815770",  "0207833 0338",  "0207833 0338", "Saturday", "09:00", "13:00", "http://www.lfm.org.uk", "51.508442", "-0.195252");
    INSERT INTO markets (name, email, address1, postcode, city, location, company_name, company_no, tel_no, mob_no, day, start_time, end_time, website, lat, lng) 
    VALUES ("Parliament Hill Farmers' Market", "info@lfm.org.uk", "Highgate Rd", "NW5 1RN", "London", "bla", "London Farmers' Markets", "3815770",  "0207833 0338",  "0207833 0338", "Saturday", "09:00", "13:00", "http://www.lfm.org.uk", "51.559565", "-0.151631");
    INSERT INTO markets (name, email, address1, postcode, city, location, company_name, company_no, tel_no, mob_no, day, start_time, end_time, website, lat, lng) 
    VALUES ("Pimlico Road Farmers' Market", "info@lfm.org.uk", "Pimlico Rd", "SW1W 8UT", "London", "bla", "London Farmers' Markets", "3815770",  "0207833 0338",  "0207833 0338", "Saturday", "09:00", "13:00", "http://www.lfm.org.uk", "51.490853", "-0.150743");
    INSERT INTO markets (name, email, address1, postcode, city, location, company_name, company_no, tel_no, mob_no, day, start_time, end_time, website, lat, lng) 
    VALUES ("Queens Park Farmers' Market", "info@lfm.org.uk", "Salusbury Rd", "NW6 6RG", "London", "bla", "London Farmers' Markets", "3815770",  "0207833 0338",  "0207833 0338", "Sunday", "10:00", "14:00", "http://www.lfm.org.uk", "51.536827", "-0.205834");
    INSERT INTO markets (name, email, address1, postcode, city, location, company_name, company_no, tel_no, mob_no, day, start_time, end_time, website, lat, lng) 
    VALUES ("South Kensington Farmers' Market", "info@lfm.org.uk", "Bute St", "SW7 3EX", "London", "bla", "London Farmers' Markets", "3815770",  "0207833 0338",  "0207833 0338", "Saturday", "09:00", "13:00", "http://www.lfm.org.uk", "51.493630", "-0.176313");
    INSERT INTO markets (name, email, address1, postcode, city, location, company_name, company_no, tel_no, mob_no, day, start_time, end_time, website, lat, lng) 
    VALUES ("Swiss Cottage Farmers' Market", "info@lfm.org.uk", "Eton Ave", "NW3 3EU", "London", "bla", "London Farmers' Markets", "3815770",  "0207833 0338",  "0207833 0338", "Wednesday", "10:00", "14:00", "http://www.lfm.org.uk", "51.544086", "-0.173968");
    INSERT INTO markets (name, email, address1, postcode, city, location, company_name, company_no, tel_no, mob_no, day, start_time, end_time, website, lat, lng) 
    VALUES ("Twickenham Farmers' Market", "info@lfm.org.uk", "Holly Rd", "TW1 4HF", "London", "bla", "London Farmers' Markets", "3815770",  "0207833 0338",  "0207833 0338", "Saturday", "09:00", "13:00", "http://www.lfm.org.uk", "51.446491", "-0.331241");
    INSERT INTO markets (name, email, address1, postcode, city, location, company_name, company_no, tel_no, mob_no, day, start_time, end_time, website, lat, lng) 
    VALUES ("Walthamstow Farmers' Market", "info@lfm.org.uk", "High Street", "E17 7JN", "London", "bla", "London Farmers' Markets", "3815770",  "0207833 0338",  "0207833 0338", "Saturday", "09:00", "13:00", "http://www.lfm.org.uk", "51.584836", "-0.021410");
    INSERT INTO markets (name, email, address1, postcode, city, location, company_name, company_no, tel_no, mob_no, day, start_time, end_time, website, lat, lng) 
    VALUES ("West Hampstead Farmers' Market", "info@lfm.org.uk", "Iverson Rd", "NW6 1PF", "London", "bla", "London Farmers' Markets", "3815770",  "0207833 0338",  "0207833 0338", "Saturday", "09:00", "13:00", "http://www.lfm.org.uk", "51.548228", "-0.191399");
    INSERT INTO markets (name, email, address1, postcode, city, location, company_name, company_no, tel_no, mob_no, day, start_time, end_time, website, lat, lng) 
    VALUES ("Westminster Bridge Farmers' Market", "info@lfm.org.uk", "Westminster Bridge Rd", "SE1 7EP", "London", "bla", "London Farmers' Markets", "3815770",  "0207833 0338",  "0207833 0338", "Saturday", "09:00", "13:00", "http://www.lfm.org.uk", "51.500852", "-0.119008");
    INSERT INTO markets (name, email, address1, postcode, city, location, company_name, company_no, tel_no, mob_no, day, start_time, end_time, website, lat, lng) 
    VALUES ("Wimbledon Farmers' Market", "info@lfm.org.uk", "Havana Rd", "SW19 8EG", "London", "bla", "London Farmers' Markets", "3815770",  "0207833 0338",  "0207833 0338", "Saturday", "09:00", "13:00", "http://www.lfm.org.uk", "51.438928", "-0.195700");
    
    
    INSERT INTO users (firstname, lastname, email,  address1, postcode, city, location, company_name, company_no, tel_no, mob_no, website,  isSeller, lat, lng, img) 
    VALUES ("Adrian", "Izzard", "adrian@wildco.co.uk",  "11 Chalky rd", "CB21 6AT", "Cambridge","",   "Wild Country Organics", "", "", "", "http://www.wildco.co.uk/",  1, "52.103484", "0.232812", "./images/supplier_img/apples.jpg");
    INSERT INTO users (firstname, lastname, email,  address1, postcode, city, location, company_name, company_no, tel_no, mob_no, website,  isSeller, lat, lng, img) 
    VALUES ("Jan",  "Urbanowski", "info@urbogreens.com",  "Bermondsey","",    "London","",    "Urbogreens", "", "", "", "http://www.urbogreens.com", 1, "51.492705", "-0.064974", "https://cdn.pixabay.com/photo/2016/01/19/14/51/vegetables-1149006__340.jpg");
    INSERT INTO users (firstname, lastname, email,  address1, postcode, city, location, company_name, company_no, tel_no, mob_no, website,  isSeller, lat, lng, img) 
    VALUES ("Ted",  "Dawson", "tedsveg@aim.com", "", "",      "Boston, Lincolnshire", "",   "Teds Veg", "", "", "",       "http://www.tedsveg.co.uk", 1, "51.505376", "-0.091057", "./images/supplier_img/lettuce.jpg");
    INSERT INTO users (firstname, lastname, email,  address1, postcode, city, location, company_name, company_no, tel_no, mob_no, website,  isSeller, lat, lng, img) 
    VALUES ("William",  "Rooney", "info@mushroomtable.com", "Colchester rd",  "Co7 7TN",  "Colchester, Essex","",   "The Mushroom Table","","","", "http://www.mushroomtable.com", 1, "51.906431", "1.001597", "./images/supplier_img/sweet_peas.jpg");
    INSERT INTO users (firstname, lastname, email,  address1, postcode, city, location, company_name, company_no, tel_no, mob_no, website,  isSeller, lat, lng, img) 
    VALUES ("Ceri", "Brinkworth", "ceri@brinkworthdairy.co.uk", "Hill End Farm",  "SN15 5AZ", "Chippenham", "","Brinkworth Dairy","", "", "", "http://www.brinkworthdairy.co.uk", 1, "51.557338", "-1.998485", "https://cdn.pixabay.com/photo/2012/06/21/00/48/market-50423_1280.jpg");
    INSERT INTO users (firstname, lastname, email,  address1, postcode, city, location, company_name, company_no, tel_no, mob_no, website,  isSeller, lat, lng, img) 
    VALUES ("Michael",  "Dallaway", "michael@rentacherrytree.co.uk",  "Cooks Yard Farm",  "TN31 6HS","", "",  "Rent a Cherry Tree","","","","https://rentacherrytree.co.uk/", 1, "50.980601", "0.601169", "./images/supplier_img/cherries.jpg");
    INSERT INTO users (firstname, lastname, email,  address1, postcode, city, location, company_name, company_no, tel_no, mob_no, website,  isSeller, lat, lng, img) 
    VALUES ("Nicky",   "Chambers",  "nicky@picksorganic.co.uk", "The Cottage, King St, Barkby Thorpe",   "LE7 3QF",  "Leicester", "",   "Picks Organic Farm", "", "", "","https://www.picksorganic.co.uk/", 1, "52.666270", "-1.053768", "./images/supplier_img/meat.jpg");
    INSERT INTO users (firstname, lastname, email,  address1, postcode, city, location, company_name, company_no, tel_no, mob_no, website,  isSeller, lat, lng, img) 
    VALUES ("Peter",  "Sikora", "info@culinaryherbco.co.uk",  "Hailsham Road",  "BN26 6RE", "East Sussex",  "", "The Culinary Herb Co", "", "", "07929 545488",   "https://www.culinaryherbco.co.uk/",  1, "50.825516", "0.241456", "./images/supplier_img/basil.jpg");
    INSERT INTO users (firstname, lastname, email,  address1, postcode, city, location, company_name, company_no, tel_no, mob_no, website,  isSeller, lat, lng, img) 
    VALUES ("Stuart", "Stables",  "stuart@grasmere-farm.co.uk", "9-10, Market Gate, Market Deeping",  "PE6 8DL",  "Peterborough", "", "Grasmere Farm", "", "", "",  "www.grasmere-farm.co.uk",  1, "52.675267", "-0.315821", "./images/supplier_img/cucumber.jpg");
    INSERT INTO users (firstname, lastname, email,  address1, postcode, city, location, company_name, company_no, tel_no, mob_no, website,  isSeller, lat, lng, img) 
    VALUES ("Stein",  "Leenders", "steinleenders@gmail.com",  "Brambletye Ln, Forest Row",  "RH18", "East Grinstead", "",   "Bramble Tye Fruit Farm", "", "", "", "-",  1, "51.102900", "0.025270", "./images/supplier_img/broccoli.jpg");
    INSERT INTO users (firstname, lastname, email,  address1, postcode, city, location, company_name, company_no, tel_no, mob_no, website,  isSeller, lat, lng, img) 
    VALUES ("David",  "Lucas",  "info@edenfarms.co.uk", "Rectory Lane, Old Bolingbroke",  "PE23 4EY",  "Spilsby", "",   "Eden Farms", "", "", "", "www.edenfarms.co.uk", 1, "53.163248", "0.027059", "./images/supplier_img/peppers.jpg");
   INSERT INTO users (firstname,	lastname,	email,	address1,	postcode,	city,	company_name, isSeller, username, password) 
    VALUES ("Alba",	"Pons",	"test@test.co.uk",	"Onslow Square",	"08002", 	"Barcelona","Sunday Farmers Market", 0, "albap", "testing123");
    INSERT INTO users (firstname,	lastname,	email,	address1,	postcode,	city,	company_name, isSeller, username, password) 
    VALUES ("Cihem",	"Zine",	"test@test.co.uk",	"Ladbroke grove",	"W11",	"Barcelona", "Santa Caterina Market", 0, "cihemz", "testing123");
    INSERT INTO users (firstname,	lastname,	email,	address1,	postcode,	city, company_name,	isSeller, username, password) 
    VALUES ("Erica",	"Calogero",	"test@test.co.uk",	"Victor rd",	"NW10 5XE",	"London", "Islington Farmers' Market", 0, "ericac", "testing123");
    INSERT INTO users (firstname,	lastname,	email,	address1,	postcode,	city, company_name,	isSeller, username, password) 
    VALUES ("Jane",	"Smith",	"test@test.co.uk",	"Upper St",	"N1", 	"London", "Notting Hill Farmers' Market", 0, "janes", "testing123");
    INSERT INTO users (firstname,	lastname,	email,	address1,	postcode,	city, company_name,	isSeller, username, password) 
    VALUES ("John",	"Doe",	"test@test.co.uk",	"Hamilton Terrace",	"NW8",	"London", "West Hampstead Farmers' Market", 0, "johnd", "testing123");
    INSERT INTO users (firstname,	lastname,	email,	address1,	postcode,	city, company_name,	isSeller, username, password) 
    VALUES ("Peter", "Parker", "test@test.co.uk", "Bermondsey St", "SE1",	"London", "South Kensington Saturday Farmers' Market", 0, "peterp", "testing123");
   
    INSERT INTO users_markets (user_id, market_id) 
    VALUES (1,17);
    INSERT INTO users_markets (user_id, market_id) 
    VALUES (2,17);
    INSERT INTO users_markets (user_id, market_id) 
    VALUES (3,17);
    INSERT INTO users_markets (user_id, market_id) 
    VALUES (4,17);
    INSERT INTO users_markets (user_id, market_id) 
    VALUES (5,17);
    INSERT INTO users_markets (user_id, market_id) 
    VALUES (6,17);
    INSERT INTO users_markets (user_id, market_id) 
    VALUES (7,17);
    INSERT INTO users_markets (user_id, market_id) 
    VALUES (8,17);
    INSERT INTO users_markets (user_id, market_id) 
    VALUES (9,17);
    INSERT INTO users_markets (user_id, market_id) 
    VALUES (10,17);
    INSERT INTO users_markets (user_id, market_id) 
    VALUES (11,17);
    INSERT INTO users_markets (user_id, market_id) 
    VALUES (4,8);
    INSERT INTO users_markets (user_id, market_id) 
    VALUES (6,8);
    INSERT INTO users_markets (user_id, market_id) 
    VALUES (1,8);
    INSERT INTO users_markets (user_id, market_id) 
    VALUES (6,9);
    INSERT INTO users_markets (user_id, market_id) 
    VALUES (1,9);
    INSERT INTO users_markets (user_id, market_id) 
    VALUES (9,9);
    INSERT INTO products (name,	unit_price,	units,	description,	tax_code,	seller_id,	isPerishable,	shelf_life_count,	shelf_life_units, img) 
    VALUES ("Angelica (Archangelica)",	2.5,	"#",	"MONOCARPIC. Ht 1-2.5m. Angelica is best known as a decorative confectionery for cakes. You can add the leaves to stewing rhubarb or gooseberries to add a sweetness without adding excess sugar. Being monocarpic it tends to have a three-year lifespan.",
      "1",8,	1,	3,	"yrs", "https://www.victoriananursery.co.uk/images/250/sq_angelica_002.jpg");
      
    INSERT INTO products (name,	unit_price,	units,	description,	tax_code,	seller_id,	isPerishable,	shelf_life_count,	shelf_life_units, img) 
    VALUES ("Basil",	2.3,	"#",	"TENDER ANNUAL. Ht 30cm. This basil originates from Mexico. The leaves have a hint of purple and are highly cinnamon-scented when rubbed.  The leaves can be used in spicy dishes, curries and salad dressings. Plant somewhere sheltered from the wind in rich, fertile, well-drained soil in full sun.",
    "1", 2,	1,	3,	"yrs", "https://www.plantsguru.com/image/cache/herb/sweet-basil-800x800.jpg");
    INSERT INTO products (name,	unit_price,	units,	description,	tax_code,	seller_id,	isPerishable,	shelf_life_count,	shelf_life_units, img) 
    VALUES ("Lovage (Levisticum officinale)",	3.15,	"#",	"HARDY PERENNIAL. Ht 1.5m. This plant produces large celery scented leaves and stems with fleshy roots. It adds a meaty flavour to food and can be used in salads, to flavour soups, stews, stocks and savoury dishes. Rub the leaves on chicken or around salad bowls. The young shoots and leaf stalks can be blanched and eaten as a vegetable.",
    "1",9,	1,	3,	"yrs", "https://www.diet-health.info/images/recipes/1400/liebstoeckel-im-garten-lovage-by-juefraphoto-fotolia-51701952.jpg");
    INSERT INTO products (name,	unit_price,	units,	description,	tax_code,	seller_id,	isPerishable,	shelf_life_count,	shelf_life_units, img) 
    VALUES ("Mint (eau de cologne)",	2.9,	"#",	"HARDY PERENNIAL. Ht 60-80cm. This plant is also known as bergamot mint with a slight citrus scent. It is a vigorous grower with undertones of lemon, orange and lavender. Add the fresh leaves to fruit salads, summer drinks and light summer salads. It can also be added to potpourri or hot bathwater.",
    "1",6,	1,	3,	"yrs", "https://www.victoriananursery.co.uk/images/800/sq_eau_de_cologne_mint_001.jpg");
    INSERT INTO products (name,	unit_price,	units,	description,	tax_code,	seller_id,	isPerishable,	shelf_life_count,	shelf_life_units, img) 
    VALUES ("Mizuna (Brassica Rapa Japoinca)",	3.3,	"#",	"HARDY ANNUAL. Ht 30cm. Mizuna is a Japanese leafy vegetable, which can be used as a cut and come again salad leaf. Very easy to grow with a light peppery, cabbage flavour and can be picked all year round. Add the leaves raw in mixed salads or cooked and seasoned in stir-fries. Plant in fertile, rich soil in a shady spot.",
    "1",3,	1,	3,	"yrs", "https://dp2o72xxh5dh5.cloudfront.net/wp-content/uploads/2019/03/agrilution-Mizuna-7-1-uai-3499x2333.jpg");
    INSERT INTO products (name,	unit_price,	units,	description,	tax_code,	seller_id,	isPerishable,	shelf_life_count,	shelf_life_units, img) 
    VALUES ("Sweet Cicely (Myrrhis odorata)",	1.2,	"#",	"HARDY PERENNIAL. Ht 50-100cm. This plant is one of the first to emerge after winter. It can be used as a substitute for sugar and has a sweet aniseed flavour. Add chopped leaves into salads, dressings, omelettes, soups and stews. Try adding the leaves to boiling water when cooking cabbage or cooking fruit, such as blackcurrants, plums, rhubarb or gooseberries.",
    "1",1,	1,	3,	"yrs", "https://hillfarmnursery.files.wordpress.com/2014/11/myrrhis-odorata-may-23-2014-4.jpg");
    `;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation `users, markets and products` was successful!");

    console.log("Closing...");
  });

  con.end();
});
