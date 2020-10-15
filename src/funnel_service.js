const AppService = require('../src/app_service');

const FunnelService = {
    getFieldFromDB(db, dealId, fieldName, tableName) {
        const field = AppService.getSpecificDeal(dealId).then((dealData) => {
            const deal = JSON.parse(JSON.parse(dealData).details.output).data;

            const projectId = AppService.getProjectId(db, dealId).then(
                (idData) => {
                    let id = idData[0].id;
                    const fieldValue = AppService.getFieldValue(
                        db,
                        fieldName,
                        tableName,
                        id
                    ).then((value) => {
                        return value[0];
                    });
                    return fieldValue;
                }
            );
            return projectId;
        });
        return field;
    },
};

module.exports = FunnelService;
