const { execSync } = require("child_process");

execSync("prisma generate", log);
execSync("prisma migrate dev --preview-feature", log);
execSync("prisma db seed --preview-feature", log);

function log(error, stdout, stderr) {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
}



