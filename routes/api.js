const errors = require('restify-errors');
const request = require('request');


module.exports = server => {
    //Get Customers
    server.get('/search/:searchItem', async (req, res, next) => {

        request('https://pearldev.edprop.com/PearlDev/api/storageitems',
            { json: true }, (err, result, body) => {
                if (err) { return console.log(err); }
                console.log(body);
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
                                // output.push(Subcategories);
                            }
                            // output.push(item);
                        }
                    }
                    let resultCount = output.length;
                    res.send({ 'resultCount': resultCount, result: output });
                }

                next();
            });

    });
};