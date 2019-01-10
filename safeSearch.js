const functions = require('firebase-functions');
var sightengine = require('sightengine')('69126675', 'bSC82kuRzebFqtVderpR');
/*var picWoman="https://d3m9459r9kwism.cloudfront.net/img/examples/example7.jpg";
var picNothing="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUvjnlLzPdQb8gd7FHuUhMWt6HAgPIESR4RXhBpRVJ5ehpgppG";
var picBaby="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPAGH171hVoxm-qzjtZYxPTgxUCGslex17WVkTC2NCnb-9GcPC";
var picBar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKSMndRHPPjmCSeWYXleIkwF4yWSbKoj3TUelJr0o_LXEzrs0CIA";
var picWoman2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi_NdPgUF_hbxalvrVE-RtRJEnvAJfUyWV1vsa9z0EM2yfIzLdrA";
var picFatWoman="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSGzHG-sbe_C4SDcSIWg9PiISkA8GGYsCyGUr54dHJ_2RzddCi";
*/

exports.safeSearch = functions.https.onRequest((req, res) => {
    sightengine.check(['nudity']).set_url(req.data.url).then(function(result) {
        res.send(result);
    }).catch(function(err) {
        res.send(err);
    });

});