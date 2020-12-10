install:
		npm install

link:
		npm run installer

start:
		npx babel-node src/bin/testApi-run.js

getHtml:
		npx babel-node src/bin/testApi-getHtmlReport.js
		
publish:
		npm publish --dry-run

lint:
		npx eslint .