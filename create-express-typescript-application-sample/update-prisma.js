const fs = require('fs');

fs.readFile('prisma/schema.prisma', 'utf8', (err, data) => {
  if (err) {
    return console.error(err);
  }

  let result = data;

  if (process.env.NODE_ENV === 'production') {
    result = data.replace('sqlite', 'mysql').replace('"DATABASE_URL"', '"DATABASE_URL_PROD"');
  } else if (process.env.NODE_ENV === 'development') {
    result = data.replace('mysql', 'sqlite').replace('"DATABASE_URL_PROD"', '"DATABASE_URL"');
  }

  fs.writeFile('prisma/schema.prisma', result, 'utf8', (err) => {
    if (err) return console.error(err);
  });
});