var request = require('request');
var cheerio = require('cheerio')

function indeks(input, callback) {
    var options = {
        url: "https://www.omniva.ee/padre.php",
        headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:24.0) Gecko/20100101 Firefox/24.0',
            'Content-Type': 'application/x-www-form-urlencoded',
            'charset': "UTF-8"
        },
        form: {
            zip_code: input
        }
    };
    request.post(options, function(e, r, body) {
        body = JSON.parse(body)
        
        if(!e && body.msg) {
            var body = cheerio.load(body.msg, {
                decodeEntities: false
            })

            var count = body("p").get().length
            console.log(count)
            var arr = []


            for(var i = 0; i < count; i++) {
                var element = body("p").eq(i).text()
                arr.push(element)
            }

            callback(null, arr)
        } else {
            callback("Address not found!", null)
        }
    });
}

module.exports = indeks