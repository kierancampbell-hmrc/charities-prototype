//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// "Claiming r11 gift aid" route
router.post ('/form-handler-gift-aid', function (req, res) {
    const giftAid = req.body.giftAid;

    if(giftAid === 'yes') {
        res.redirect('/cp-r11-claiming-tax-relief');
    } else if(giftAid === 'no') {
        res.redirect('/cp-r11-claiming-tax-relief');
    } else {
        res.redirect('/cp-r11-claiming-gift-aid');
    }
})

// "Claiming r11 tax relief" route
router.post ('/form-handler-tax-relief', function (req, res) {
    const taxRelief = req.body.taxRelief;

    if(taxRelief === 'yes') {
        res.redirect('/cp-r12-claiming-gasds');
    } else if(taxRelief === 'no') {
        res.redirect('/cp-r12-claiming-gasds');
    } else {
        res.redirect('/cp-r11-claiming-tax-relief');
    }
})

// "Claiming r12 gasds" route
router.post ('/form-handler-gasds', function (req, res) {
    const gasds = req.body.gasds;

    if(gasds === 'yes') {
        res.redirect('/cp-r13-claim-reference-number');
    } else if(gasds === 'no') {
        res.redirect('/cp-r13-claim-reference-number');
    } else {
        res.redirect('/cp-r12-claiming-gasds');
    }
})

// "Claiming r17 gasds non community" route
router.post ('/form-handler-gasds-non-community', function (req, res) {
    const gasdsNonCom = req.body.gasdsNonCom;

    if(gasdsNonCom === 'yes') {
        res.redirect('/cp-r18-gasds-community');
    } else if(gasdsNonCom === 'no') {
        res.redirect('/cp-r18-gasds-community');
    } else {
        res.redirect('/cp-r17-gasds-non-community');
    }
})

// "Claiming r18 gasds community" route
router.post ('/form-handler-gasds-community', function (req, res) {
    const gasdsCom = req.body.gasdsCom;

    if(gasdsCom === 'yes') {
        res.redirect('/cp-r19-connected-charities');
    } else if(gasdsCom === 'no') {
        res.redirect('/cp-r19-connected-charities');
    } else {
        res.redirect('/cp-r18-gasds-community');
    }
})

// "Claiming r19 connected charities" route
router.post ('/form-handler-connected-charities', function (req, res) {
    const connectedCharities = req.body.connectedCharities;

    if(connectedCharities === 'yes') {
        res.redirect('/cp-r110-gasds-claim-adjustment');
    } else if(connectedCharities === 'no') {
        res.redirect('/cp-r110-gasds-claim-adjustment');
    } else {
        res.redirect('/cp-r19-connected-charities');
    }
})
