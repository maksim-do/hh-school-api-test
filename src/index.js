import newman from 'newman';
import collection from '../collection/collection.json';

export default (typeOfReporter, messageComplete) => {
  newman.run({
    collection,
    reporters: [typeOfReporter],
    reporter: {
      html: {
        export: `./reports/${new Date().toLocaleString()}.html`, // If not specified, the file will be written to `newman/` in the current working directory.
        template: 'template/1.hbs', // optional, this will be picked up relative to the directory that Newman runs in.
      },
    },
  }).on('start', () => {
    console.log('running a collection...');
  }).on('done', (err, summary) => {
    if (err || summary.error) console.error('collection run encountered an error.');
    else console.log(messageComplete);
  });
};
