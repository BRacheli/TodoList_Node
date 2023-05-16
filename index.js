const express = require('express')
const app = express()


app.get('/', (req, res) => {

    const sdk = require('api')('@render-api/v1.0#dnrc1ulf088q9j');

    sdk.auth('rnd_2Bhkj08tiutzt4svg876r9');
    sdk.getCustomDomains({ limit: '20', name: 'domain1.com,domain2.com', serviceId: 'srv-ceerm6ftuf76r' })
    .then(({ data }) => res.send(data))
    .catch(err => res.send(err));


});


app.listen(3004, () => {
    console.log(`Example app listening on port 3000`)
    console.log('http://localhost:3004');
})