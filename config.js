var config = {}

config.host = process.env.HOST || "https://rnewman.documents.azure.com:443/";
config.authKey = process.env.AUTH_KEY || "IGjVyXpOCftdrquZX+JuyfaB2Hdzn5SedB76AYe3+BlJlFpEh8CJkZyE+z/AEDMXqZbOR6TEBvuOVvylJqISFQ==";
config.databaseId = "sample";
config.collectionId = "people";

module.exports = config;