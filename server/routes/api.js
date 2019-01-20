const errors = require('restify-errors');
const request = require('request');
const config = require('../config');

module.exports = server => {
    //Search api
    server.get('/search/:searchItem', (req, res, next) => {
        request(config.External_DEV_URL + '/storageitems',
            { json: true },
            (err, result, body) => {
                if (err) { return console.log(err); }
                if (body.Results.length < 1)
                    res.send("No items found");
                else {
                    let output = [];
                    for (var item of body.Results) { //9 objects
                        if (item.Subcategories.length > 0) {
                            for (Subcategories of item.Subcategories) { // iterate subcategories
                                if (Subcategories.StorageItems.length > 0) {
                                    for (StorageItems of Subcategories.StorageItems)
                                        if (StorageItems.DisplayName.toLowerCase().includes(req.params.searchItem.toLowerCase())) output.push(StorageItems);
                                }
                            }
                        }
                    }
                    let resultCount = output.length;
                    res.send(output);
                }
                next();
            });
    });

    // location api
    server.get('/location', (req, res, next) => {
        request(config.External_DEV_URL + '/locations',
            { json: true },
            (err, result, body) => {
                if (err) { return console.log(err); }
                if (body.Results.length < 1)
                    res.send("No items found");
                else {
                    let output = [];
                    for (let loc of body.Results) { //9 objects
                        if (loc.Address.City.toLowerCase() == "new york") {
                            let formattedObj = {};
                            formattedObj.LocationName = loc.LocationName;
                            formattedObj.LocationNumber = loc.LocationNumber;
                            formattedObj.Phone = loc.Phone;
                            formattedObj.NeighborhoodName = loc.NeighborhoodName;
                            formattedObj.ZipCode = loc.Address.ZipCode;
                            formattedObj.LocationPhotoPath = config.External_Image_Path + loc.LocationPhotoPath;
                            output.push(formattedObj);
                        }
                    }
                    let resultCount = output.length;
                    res.send(output.sort((a, b) => parseFloat(b.LocationNumber) - parseFloat(a.LocationNumber)));
                }
                next();
            });
    });
};