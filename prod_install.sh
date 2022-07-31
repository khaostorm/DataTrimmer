cd build
cd site
scp ../../package-lock.json ./
NODE_ENV="prod" npm install
cd ..
cd server
scp ../../package-lock.json ./
NODE_ENV="prod" npm install
cd ../..
