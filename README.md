# Instruction for setting up Frontend server
0. Please check the `nodejs`, `npm`, and `yarn` are installed. Or
```bash
sudo apt install nodejs
sudo apt install npm
sudo npm install --global yarn
```

1. Install dependency
```bash
yarn install
```

2. Create static files
```bash
yarn deploy
```

3. Copy the static files to the corresponding directory
```bash
sudo cp -r ./build/* /var/www/html/
```

4. Restart `nginx`
```bash
sudo systemctl restart nginx 
```

### note
* package.json 

replace
```json
"browserslist": {
"production": [
  ">0.2%",
  "not dead",
  "not op_mini all"
],
"development": [
  "last 1 chrome version",
  "last 1 firefox version",
  "last 1 safari version"
]
},
```
with

```json
"browserslist": [
  ">0.2%",
  "not dead",
  "not op_mini all"
],
```