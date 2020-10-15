const express = require('express');
const { getSpecificDeal } = require('./app_service');
const AppService = require('./app_service');
const FunnelService = require('./funnel_service');

const appRouter = express.Router();
const jsonParser = express.json();

process.on('unhandledRejection', function (err) {
    console.log(err);
});

appRouter.route('/').post((req, res, next) => {
    let dealId = '2731480000015233052';
    let retrievedDealData = {};
    let currentDealData = {};
    let changedKeyValues = {};

    const promise = getSpecificDeal(dealId);
    const promise2 = promise.then((dealData) => {
        return JSON.parse(JSON.parse(dealData).details.output).data[0];
    });

    //FUNNEL

    promise2.then((deal) => {
        //PM assigns PC then CRM sends welcome email/text sent to customer and CRM changes finance status to “Create Finance Account”
        FunnelService.getFieldFromDB(
            req.app.get('db'),
            dealId,
            'project_coordinator',
            'deal_info'
        ).then((fieldValue) => {
            const projectCoordinator = fieldValue.project_coordinator;
            if (projectCoordinator !== deal.Project_Coordinator.name) {
                let name = 'Finance_Status';
                let value = 'Create Finance Account';

                AppService.updateCRM(name, value, dealId);
            }
        });
    });

    //PM Assigns a PC then CRM sends welcome email/text to customer and changes finance status to "Create Finance Account"

    /* 
    Dependencies
        Need to seed the database with current crm data

    Notes
        For new deals the need to be added to database as soon as they are created

    Objectives
        See what changed
        Update the database with new values
        Check to see if changed values match any functions
        Perform logic based in the flowchart
        Update CRM and database with new values

    Plan
        Build out functions 
        Test that CRM is updated

    Functions Needed
        updateDatabase(key, value)
        updateCRM(key, value)
    */
});

module.exports = appRouter;
