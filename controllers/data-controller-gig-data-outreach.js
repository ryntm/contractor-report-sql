const gigDataOutreach = require('../models/GigData-Outreach');
const upworkData = require('../models/UpworkData')
const express = require('express');
const router = express.Router();


router.get('/api/gig-data-outreach', (req, res) => {
    gigDataOutreach.selectAllOutreach('GigData_Outreach', data => {
        res.json(data);
    });
});


// router.get('/api/bestpage/:year/:month', (req, res) => {
//     gigDataOutreach.selectBestPage(parseInt(req.params.year), parseInt(req.params.month), parseInt(req.params.year), parseInt(req.params.month), data => {
//         res.json(data);
//     });
// });

    // BEST PAGE ROUTES

        // MONTH

router.get('/bestpagecollection/:year/:month', (req, res) => {
    gigDataOutreach.selectBestPage(parseInt(req.params.year), parseInt(req.params.month), parseInt(req.params.year), parseInt(req.params.month), data => {
        gigDataOutreach.selectBestPageQA(parseInt(req.params.year), parseInt(req.params.month), parseInt(req.params.year), parseInt(req.params.month), qa_data => {
            gigDataOutreach.selectGigDataBestPageTotal(parseInt(req.params.year), data_total => {
                gigDataOutreach.selectGigDataBestPageQATotal(parseInt(req.params.year), qa_data_total => {
                    gigDataOutreach.selectGigDataBestPageTotal(parseInt(req.params.year)-1, data_total_prev_year => {
                        gigDataOutreach.selectGigDataBestPageQATotal(parseInt(req.params.year)-1, qa_data_total_prev_year => {
                            upworkData.selectUpworkDataBestPageYear(parseInt(req.params.year), upwork_data_curr_year => {
                                upworkData.selectUpworkDataBestPageYear(parseInt(req.params.year)-1, upwork_data_prev_year => {

                                    console.log("*****" + req._parsedOriginalUrl.path);

                                    let upwork_data_by_year = upwork_data_curr_year[0];
                                    let upwork_data_by_year_prev_year = upwork_data_prev_year[0];

                                    let data_total_by_year = data_total[0];
                                    let qa_data_total_by_year = qa_data_total[0];
        
                                    let data_total_by_year_prev_year = data_total_prev_year[0];
                                    let qa_data_total_by_year_prev_year = qa_data_total_prev_year[0];
                
                                    console.log(data_total);
                                    console.log(qa_data_total);
                                    // console.log("data");
                                    // console.log(data);
                                    // console.log("qa_data");
                                    // console.log(qa_data);
                                    // console.log(data.length);
                                    res.render("bestpage", {
                                        data: data,
                                        qa_data: qa_data,
                                        data_total: data_total_by_year,
                                        qa_data_total: qa_data_total_by_year,
                                        data_total_prev_year: data_total_by_year_prev_year,
                                        qa_data_total_prev_year: qa_data_total_by_year_prev_year,
                                        upwork_data: upwork_data_by_year,
                                        upwork_data_prev_year: upwork_data_by_year_prev_year,
                                        date: {year: req.params.year, month: req.params.month},
                                        type: {type: "bestpage"}
                                    });
                                });
                            });
                        });
                    });
                });
            });
        })
    });
});

router.get('/api/bestpagecollection/:year/:month', (req, res) => {
    gigDataOutreach.selectBestPage(parseInt(req.params.year), parseInt(req.params.month), parseInt(req.params.year), parseInt(req.params.month), data => {
        gigDataOutreach.selectBestPageQA(parseInt(req.params.year), parseInt(req.params.month), parseInt(req.params.year), parseInt(req.params.month), qa_data => {
            gigDataOutreach.selectGigDataBestPageTotal(parseInt(req.params.year), data_total => {
                gigDataOutreach.selectGigDataBestPageQATotal(parseInt(req.params.year), qa_data_total => {
                    gigDataOutreach.selectGigDataBestPageTotal(parseInt(req.params.year)-1, data_total_prev_year => {
                        gigDataOutreach.selectGigDataBestPageQATotal(parseInt(req.params.year)-1, qa_data_total_prev_year => {
                            upworkData.selectUpworkDataBestPageYear(parseInt(req.params.year), upwork_data_curr_year => {
                                upworkData.selectUpworkDataBestPageYear(parseInt(req.params.year)-1, upwork_data_prev_year => {

                                    console.log("*****" + req._parsedOriginalUrl.path);

                                    let upwork_data_by_year = upwork_data_curr_year[0];
                                    let upwork_data_by_year_prev_year = upwork_data_prev_year[0];

                                    let data_total_by_year = data_total[0];
                                    let qa_data_total_by_year = qa_data_total[0];
        
                                    let data_total_by_year_prev_year = data_total_prev_year[0];
                                    let qa_data_total_by_year_prev_year = qa_data_total_prev_year[0];
                
                                    console.log(data_total);
                                    console.log(qa_data_total);
                                    // console.log("data");
                                    // console.log(data);
                                    // console.log("qa_data");
                                    // console.log(qa_data);
                                    // console.log(data.length);
                                    res.json({
                                        data: data,
                                        qa_data: qa_data,
                                        data_total: data_total_by_year,
                                        qa_data_total: qa_data_total_by_year,
                                        data_total_prev_year: data_total_by_year_prev_year,
                                        qa_data_total_prev_year: qa_data_total_by_year_prev_year,
                                        upwork_data: upwork_data_by_year,
                                        upwork_data_prev_year: upwork_data_by_year_prev_year,
                                        date: {year: req.params.year, month: req.params.month},
                                        type: {type: "bestpage"}
                                    });
                                });
                            });
                        });
                    });
                });
            });
        })
    });
});

        // QUARTER

router.get('/bestpagecollection/:year/q/:quarter', (req, res) => {
    gigDataOutreach.selectBestPageQuarter(parseInt(req.params.year), parseInt(req.params.quarter), parseInt(req.params.year), parseInt(req.params.quarter), data => {
        gigDataOutreach.selectBestPageQAQuarter(parseInt(req.params.year), parseInt(req.params.quarter), parseInt(req.params.year), parseInt(req.params.quarter), qa_data => {
            gigDataOutreach.selectGigDataBestPageTotal(parseInt(req.params.year), data_total => {
                gigDataOutreach.selectGigDataBestPageQATotal(parseInt(req.params.year), qa_data_total => {
                    gigDataOutreach.selectGigDataBestPageTotal(parseInt(req.params.year)-1, data_total_prev_year => {
                        gigDataOutreach.selectGigDataBestPageQATotal(parseInt(req.params.year)-1, qa_data_total_prev_year => {
                            upworkData.selectUpworkDataBestPageYear(parseInt(req.params.year), upwork_data_curr_year => {
                                upworkData.selectUpworkDataBestPageYear(parseInt(req.params.year)-1, upwork_data_prev_year => {

                                    console.log("*****" + req._parsedOriginalUrl.path);

                                    let upwork_data_by_year = upwork_data_curr_year[0];
                                    let upwork_data_by_year_prev_year = upwork_data_prev_year[0];

                                    let data_total_by_year = data_total[0];
                                    let qa_data_total_by_year = qa_data_total[0];
        
                                    let data_total_by_year_prev_year = data_total_prev_year[0];
                                    let qa_data_total_by_year_prev_year = qa_data_total_prev_year[0];
                
                                    console.log(data_total);
                                    console.log(qa_data_total);
                                    // console.log("data");
                                    // console.log(data);
                                    // console.log("qa_data");
                                    // console.log(qa_data);
                                    // console.log(data.length);
                                    res.render("bestpage", {
                                        data: data,
                                        qa_data: qa_data,
                                        data_total: data_total_by_year,
                                        qa_data_total: qa_data_total_by_year,
                                        data_total_prev_year: data_total_by_year_prev_year,
                                        qa_data_total_prev_year: qa_data_total_by_year_prev_year,
                                        upwork_data: upwork_data_by_year,
                                        upwork_data_prev_year: upwork_data_by_year_prev_year,
                                        date: {year: req.params.year, quarter: req.params.quarter},
                                        type: {type: "bestpage"}
                                    });
                                });
                            });
                        });
                    });
                });
            });
        })
    });
});

router.get('/api/bestpagecollection/:year/q/:quarter', (req, res) => {
    gigDataOutreach.selectBestPageQuarter(parseInt(req.params.year), parseInt(req.params.quarter), parseInt(req.params.year), parseInt(req.params.quarter), data => {
        gigDataOutreach.selectBestPageQAQuarter(parseInt(req.params.year), parseInt(req.params.quarter), parseInt(req.params.year), parseInt(req.params.quarter), qa_data => {
            gigDataOutreach.selectGigDataBestPageTotal(parseInt(req.params.year), data_total => {
                gigDataOutreach.selectGigDataBestPageQATotal(parseInt(req.params.year), qa_data_total => {
                    gigDataOutreach.selectGigDataBestPageTotal(parseInt(req.params.year)-1, data_total_prev_year => {
                        gigDataOutreach.selectGigDataBestPageQATotal(parseInt(req.params.year)-1, qa_data_total_prev_year => {
                            upworkData.selectUpworkDataBestPageYear(parseInt(req.params.year), upwork_data_curr_year => {
                                upworkData.selectUpworkDataBestPageYear(parseInt(req.params.year)-1, upwork_data_prev_year => {

                                    console.log("*****" + req._parsedOriginalUrl.path);

                                    let upwork_data_by_year = upwork_data_curr_year[0];
                                    let upwork_data_by_year_prev_year = upwork_data_prev_year[0];

                                    let data_total_by_year = data_total[0];
                                    let qa_data_total_by_year = qa_data_total[0];
        
                                    let data_total_by_year_prev_year = data_total_prev_year[0];
                                    let qa_data_total_by_year_prev_year = qa_data_total_prev_year[0];
                
                                    console.log(data_total);
                                    console.log(qa_data_total);
                                    // console.log("data");
                                    // console.log(data);
                                    // console.log("qa_data");
                                    // console.log(qa_data);
                                    // console.log(data.length);
                                    res.json({
                                        data: data,
                                        qa_data: qa_data,
                                        data_total: data_total_by_year,
                                        qa_data_total: qa_data_total_by_year,
                                        data_total_prev_year: data_total_by_year_prev_year,
                                        qa_data_total_prev_year: qa_data_total_by_year_prev_year,
                                        upwork_data: upwork_data_by_year,
                                        upwork_data_prev_year: upwork_data_by_year_prev_year,
                                        date: {year: req.params.year, quarter: req.params.quarter},
                                        type: {type: "bestpage"}
                                    });
                                });
                            });
                        });
                    });
                });
            });
        })
    });
});

    // COLLEGE CONTACT VIEW AND API

        // MONTH

router.get('/collegecontactcollection/:year/:month', (req, res) => {
    gigDataOutreach.selectCollegeContact(parseInt(req.params.year), parseInt(req.params.month), parseInt(req.params.year), parseInt(req.params.month), data => {
        gigDataOutreach.selectCollegeContactQA(parseInt(req.params.year), parseInt(req.params.month), parseInt(req.params.year), parseInt(req.params.month), qa_data => {
            gigDataOutreach.selectGigDataCollegeContactTotal(parseInt(req.params.year), data_total => {
                gigDataOutreach.selectGigDataCollegeContactQATotal(parseInt(req.params.year), qa_data_total => {
                    gigDataOutreach.selectGigDataCollegeContactTotal(parseInt(req.params.year)-1, data_total_prev_year => {
                        gigDataOutreach.selectGigDataCollegeContactQATotal(parseInt(req.params.year)-1, qa_data_total_prev_year => {
                            upworkData.selectUpworkDataCollegeContactYear(parseInt(req.params.year), upwork_data_curr_year => {
                                upworkData.selectUpworkDataCollegeContactYear(parseInt(req.params.year)-1, upwork_data_prev_year => {
                                    
                                    console.log("*****" + req._parsedOriginalUrl.path);

                                    let upwork_data_by_year = upwork_data_curr_year[0];
                                    let upwork_data_by_year_prev_year = upwork_data_prev_year[0];

                                    let data_total_by_year = data_total[0];
                                    let qa_data_total_by_year = qa_data_total[0];
        
                                    let data_total_by_year_prev_year = data_total_prev_year[0];
                                    let qa_data_total_by_year_prev_year = qa_data_total_prev_year[0];
                
                                    console.log(data_total);
                                    console.log(qa_data_total);
                                    // console.log("data");
                                    // console.log(data);
                                    // console.log("qa_data");
                                    // console.log(qa_data);
                                    // console.log(data.length);
                                    res.render("collegecontact", {
                                        data: data,
                                        qa_data: qa_data,
                                        data_total: data_total_by_year,
                                        qa_data_total: qa_data_total_by_year,
                                        data_total_prev_year: data_total_by_year_prev_year,
                                        qa_data_total_prev_year: qa_data_total_by_year_prev_year,
                                        upwork_data: upwork_data_by_year,
                                        upwork_data_prev_year: upwork_data_by_year_prev_year,
                                        date: {year: req.params.year, month: req.params.month},
                                        type: {type: "collegecontact"}
                                    });
                                });
                            });
                        });
                    });
                });
            });
        })
    });
});


router.get('/api/collegecontactcollection/:year/:month', (req, res) => {
    gigDataOutreach.selectCollegeContact(parseInt(req.params.year), parseInt(req.params.month), parseInt(req.params.year), parseInt(req.params.month), data => {
        console.log("1");

        gigDataOutreach.selectCollegeContactQA(parseInt(req.params.year), parseInt(req.params.month), parseInt(req.params.year), parseInt(req.params.month), qa_data => {
            console.log("2");

            gigDataOutreach.selectGigDataCollegeContactTotal(parseInt(req.params.year), data_total => {
                console.log("3");

                gigDataOutreach.selectGigDataCollegeContactQATotal(parseInt(req.params.year), qa_data_total => {
                    console.log("4");

                    gigDataOutreach.selectGigDataCollegeContactTotal(parseInt(req.params.year)-1, data_total_prev_year => {
                        console.log("5");

                        gigDataOutreach.selectGigDataCollegeContactQATotal(parseInt(req.params.year)-1, qa_data_total_prev_year => {
                            console.log("6");

                            upworkData.selectUpworkDataCollegeContactYear(parseInt(req.params.year), upwork_data_curr_year => {
                                console.log("7");

                                upworkData.selectUpworkDataCollegeContactYear(parseInt(req.params.year)-1, upwork_data_prev_year => {
                                    
                                    console.log("*****" + req._parsedOriginalUrl.path);

                                    let upwork_data_by_year = upwork_data_curr_year[0];
                                    let upwork_data_by_year_prev_year = upwork_data_prev_year[0];

                                    let data_total_by_year = data_total[0];
                                    let qa_data_total_by_year = qa_data_total[0];
        
                                    let data_total_by_year_prev_year = data_total_prev_year[0];
                                    let qa_data_total_by_year_prev_year = qa_data_total_prev_year[0];
                
                                    console.log(data_total);
                                    console.log(qa_data_total);
                                    // console.log("data");
                                    // console.log(data);
                                    // console.log("qa_data");
                                    // console.log(qa_data);
                                    // console.log(data.length);
                                    res.json({
                                        data: data,
                                        qa_data: qa_data,
                                        data_total: data_total_by_year,
                                        qa_data_total: qa_data_total_by_year,
                                        data_total_prev_year: data_total_by_year_prev_year,
                                        qa_data_total_prev_year: qa_data_total_by_year_prev_year,
                                        upwork_data: upwork_data_by_year,
                                        upwork_data_prev_year: upwork_data_by_year_prev_year,
                                        date: {year: req.params.year, month: req.params.month},
                                        type: {type: "collegecontact"}
                                    });
                                });
                            });
                        });
                    });
                });
            });
        })
    });
});

    // QUARTER

router.get('/collegecontactcollection/:year/q/:quarter', (req, res) => {
    gigDataOutreach.selectCollegeContactQuarter(parseInt(req.params.year), parseInt(req.params.quarter), parseInt(req.params.year), parseInt(req.params.quarter), data => {
        gigDataOutreach.selectCollegeContactQAQuarter(parseInt(req.params.year), parseInt(req.params.quarter), parseInt(req.params.year), parseInt(req.params.quarter), qa_data => {
            gigDataOutreach.selectGigDataCollegeContactTotal(parseInt(req.params.year), data_total => {
                gigDataOutreach.selectGigDataCollegeContactQATotal(parseInt(req.params.year), qa_data_total => {
                    gigDataOutreach.selectGigDataCollegeContactTotal(parseInt(req.params.year)-1, data_total_prev_year => {
                        gigDataOutreach.selectGigDataCollegeContactQATotal(parseInt(req.params.year)-1, qa_data_total_prev_year => {
                            upworkData.selectUpworkDataCollegeContactYear(parseInt(req.params.year), upwork_data_curr_year => {
                                upworkData.selectUpworkDataCollegeContactYear(parseInt(req.params.year)-1, upwork_data_prev_year => {
                                    
                                    console.log("*****" + req._parsedOriginalUrl.path);

                                    let upwork_data_by_year = upwork_data_curr_year[0];
                                    let upwork_data_by_year_prev_year = upwork_data_prev_year[0];

                                    let data_total_by_year = data_total[0];
                                    let qa_data_total_by_year = qa_data_total[0];
        
                                    let data_total_by_year_prev_year = data_total_prev_year[0];
                                    let qa_data_total_by_year_prev_year = qa_data_total_prev_year[0];
                
                                    console.log(data_total);
                                    console.log(qa_data_total);
                                    // console.log("data");
                                    // console.log(data);
                                    // console.log("qa_data");
                                    // console.log(qa_data);
                                    // console.log(data.length);
                                    res.render("collegecontact", {
                                        data: data,
                                        qa_data: qa_data,
                                        data_total: data_total_by_year,
                                        qa_data_total: qa_data_total_by_year,
                                        data_total_prev_year: data_total_by_year_prev_year,
                                        qa_data_total_prev_year: qa_data_total_by_year_prev_year,
                                        upwork_data: upwork_data_by_year,
                                        upwork_data_prev_year: upwork_data_by_year_prev_year,
                                        date: {year: req.params.year, quarter: req.params.quarter},
                                        type: {type: "collegecontact"}
                                    });
                                });
                            });
                        });
                    });
                });
            });
        })
    });
});


router.get('/api/collegecontactcollection/:year/:month', (req, res) => {
    gigDataOutreach.selectCollegeContact(parseInt(req.params.year), parseInt(req.params.month), parseInt(req.params.year), parseInt(req.params.month), data => {
        console.log("1");

        gigDataOutreach.selectCollegeContactQA(parseInt(req.params.year), parseInt(req.params.month), parseInt(req.params.year), parseInt(req.params.month), qa_data => {
            console.log("2");

            gigDataOutreach.selectGigDataCollegeContactTotal(parseInt(req.params.year), data_total => {
                console.log("3");

                gigDataOutreach.selectGigDataCollegeContactQATotal(parseInt(req.params.year), qa_data_total => {
                    console.log("4");

                    gigDataOutreach.selectGigDataCollegeContactTotal(parseInt(req.params.year)-1, data_total_prev_year => {
                        console.log("5");

                        gigDataOutreach.selectGigDataCollegeContactQATotal(parseInt(req.params.year)-1, qa_data_total_prev_year => {
                            console.log("6");

                            upworkData.selectUpworkDataCollegeContactYear(parseInt(req.params.year), upwork_data_curr_year => {
                                console.log("7");

                                upworkData.selectUpworkDataCollegeContactYear(parseInt(req.params.year)-1, upwork_data_prev_year => {
                                    
                                    console.log("*****" + req._parsedOriginalUrl.path);

                                    let upwork_data_by_year = upwork_data_curr_year[0];
                                    let upwork_data_by_year_prev_year = upwork_data_prev_year[0];

                                    let data_total_by_year = data_total[0];
                                    let qa_data_total_by_year = qa_data_total[0];
        
                                    let data_total_by_year_prev_year = data_total_prev_year[0];
                                    let qa_data_total_by_year_prev_year = qa_data_total_prev_year[0];
                
                                    console.log(data_total);
                                    console.log(qa_data_total);
                                    // console.log("data");
                                    // console.log(data);
                                    // console.log("qa_data");
                                    // console.log(qa_data);
                                    // console.log(data.length);
                                    res.json({
                                        data: data,
                                        qa_data: qa_data,
                                        data_total: data_total_by_year,
                                        qa_data_total: qa_data_total_by_year,
                                        data_total_prev_year: data_total_by_year_prev_year,
                                        qa_data_total_prev_year: qa_data_total_by_year_prev_year,
                                        upwork_data: upwork_data_by_year,
                                        upwork_data_prev_year: upwork_data_by_year_prev_year,
                                        date: {year: req.params.year, month: req.params.month},
                                        type: {type: "collegecontact"}
                                    });
                                });
                            });
                        });
                    });
                });
            });
        })
    });
});

module.exports = router


