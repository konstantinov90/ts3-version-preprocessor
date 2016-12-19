#!/usr/bin/env node

const fs = require('fs');
const program = require('commander');

program.arguments('<versionFileName>')
.option('-s, --save <outFileName>', 'filename to save output to')
.action(function (versionFileName) {

  const v = require(versionFileName);
  const sources = v._sources;
  delete v['_sources']
  let res = JSON.stringify(v, null, 2);

  for (key in sources) {
    const re = new RegExp('{\\s*"@"\\s*:\\s*"' + key + '"\\s*}', 'g');
    res = res.replace(re, JSON.stringify(sources[key], null, 2));
  }

  if (program.save) {
    console.log('outfile', program.save)
    fs.writeFile(program.save, res);
  } else {
    console.log(res);
  }

})
.parse(process.argv);
