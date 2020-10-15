const axios = require('axios');
const request = require('request');
const rp = require('request-promise-native');

const AppService = {
    getAllDeals() {
        const deals = axios({
            method: 'get',
            url:
                'https://www.zohoapis.com/crm/v2/functions/getalldeals/actions/execute?auth_type=apikey&zapikey=1003.aa2b757979ed066cc35d4ed355381f7c.71da56cfc7ff0b68007ebfc398e3238b',
        })
            .then((res) => JSON.parse(res.data.details.output))
            .then((response) => {
                return response;
            });
        return deals;
    },
    getSpecificDeal(dealId) {
        const options = {
            method: 'POST',
            url:
                'https://www.zohoapis.com/crm/v2/functions/getdeal/actions/execute?auth_type=apikey&zapikey=1003.2a6d45d19cc0298da683cbeaa3533a06.9d8d7c8c249c812474e1a3d7f1053476',
            headers: {
                Cookie:
                    '1a99390653=a39e9ecd87b45a785f4a04291d2d76fa; crmcsr=a4d8292e-32f2-4775-8794-cec419516538; _zcsr_tmp=a4d8292e-32f2-4775-8794-cec419516538; JSESSIONID=34D518EF43F5B7963A4142A0443D7D30',
            },
            formData: {
                arguments: `{"dealId" : ${dealId}}`,
            },
        };
        const dealData = rp(options, function (error, response) {
            if (error) throw new Error(error);
        });
        return dealData;
    },
    getFieldValue(db, fieldName, tableName, dealId) {
        return db
            .select(fieldName)
            .from(tableName)
            .where('project_id', '=', dealId);
    },
    getProjectId(db, dealId) {
        return db.select('id').from('projects').where('deal_id', '=', dealId);
    },
    updateCRM(name, value, dealId) {
        axios({
            method: 'POST',
            url: `https://hooks.zapier.com/hooks/catch/5453547/og4zh4q?name=${name}&value=${value}&deal_id=${dealIdˆ}`,
        });
    },
};
module.exports = AppService;
