const gigDataAdmin = require('../models/GigData');
const upworkData = require('../models/UpworkData')
const express = require('express');
const router = express.Router();

router.get('/api/gig-data-admin', (req, res) => {
    gigDataAdmin.selectAllGigData(data => {
        res.json(data);
    });
});

    // DEGREE COLLECTION

        // MONTH

router.get('/degreecollection/:year/:month', (req, res) => {
    gigDataAdmin.selectGigDataDegree(parseInt(req.params.year), parseInt(req.params.month), parseInt(req.params.year), parseInt(req.params.month), data => {
        gigDataAdmin.selectGigDataDegreeQA(parseInt(req.params.year), parseInt(req.params.month), parseInt(req.params.year), parseInt(req.params.month), qa_data => {
            gigDataAdmin.selectGigDataDegreeTotal(parseInt(req.params.year), data_total => {
                gigDataAdmin.selectGigDataDegreeQATotal(parseInt(req.params.year), qa_data_total => {
                    gigDataAdmin.selectGigDataDegreeTotal(parseInt(req.params.year)-1, data_total_prev_year => {
                        gigDataAdmin.selectGigDataDegreeQATotal(parseInt(req.params.year)-1, qa_data_total_prev_year => {
                            upworkData.selectUpworkDataDegreeYear(parseInt(req.params.year), upwork_data_curr_year => {
                                upworkData.selectUpworkDataDegreeYear(parseInt(req.params.year)-1, upwork_data_prev_year => {

                                    console.log("*****" + req._parsedOriginalUrl.path);

                                    let upwork_data_by_year = upwork_data_curr_year[0];
                                    let upwork_data_by_year_prev_year = upwork_data_prev_year[0];

                                    let data_total_by_year = data_total[0];
                                    let qa_data_total_by_year = qa_data_total[0];
        
                                    let data_total_by_year_prev_year = data_total_prev_year[0];
                                    let qa_data_total_by_year_prev_year = qa_data_total_prev_year[0];
                
                                    console.log(data_total_by_year);
                                    console.log(qa_data_total_by_year);
                                    // console.log("data");
                                    // console.log(data);
                                    // console.log("qa_data");
                                    // console.log(qa_data);
                                    // console.log(data.length);
                                    res.render("degreecollection", {
                                        data: data,
                                        qa_data: qa_data,
                                        data_total: data_total_by_year,
                                        qa_data_total: qa_data_total_by_year,
                                        data_total_prev_year: data_total_by_year_prev_year,
                                        qa_data_total_prev_year: qa_data_total_by_year_prev_year,
                                        upwork_data: upwork_data_by_year,
                                        upwork_data_prev_year: upwork_data_by_year_prev_year,
                                        date: {year: req.params.year, month: req.params.month},
                                        type: {type: "degreecollection"}
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

// degree collection data api route

router.get('/api/degreecollection/:year/:month', (req, res) => {
    gigDataAdmin.selectGigDataDegree(parseInt(req.params.year), parseInt(req.params.month), parseInt(req.params.year), parseInt(req.params.month), data => {
        gigDataAdmin.selectGigDataDegreeQA(parseInt(req.params.year), parseInt(req.params.month), parseInt(req.params.year), parseInt(req.params.month), qa_data => {
            gigDataAdmin.selectGigDataDegreeTotal(parseInt(req.params.year), data_total => {
                gigDataAdmin.selectGigDataDegreeQATotal(parseInt(req.params.year), qa_data_total => {
                    gigDataAdmin.selectGigDataDegreeTotal(parseInt(req.params.year)-1, data_total_prev_year => {
                        gigDataAdmin.selectGigDataDegreeQATotal(parseInt(req.params.year)-1, qa_data_total_prev_year => {
                            upworkData.selectUpworkDataDegreeYear(parseInt(req.params.year), upwork_data_curr_year => {
                                upworkData.selectUpworkDataDegreeYear(parseInt(req.params.year)-1, upwork_data_prev_year => {

                                    console.log("*****" + req._parsedOriginalUrl.path);

                                    let upwork_data_by_year = upwork_data_curr_year[0];
                                    let upwork_data_by_year_prev_year = upwork_data_prev_year[0];

                                    let data_total_by_year = data_total[0];
                                    let qa_data_total_by_year = qa_data_total[0];
        
                                    let data_total_by_year_prev_year = data_total_prev_year[0];
                                    let qa_data_total_by_year_prev_year = qa_data_total_prev_year[0];
                
                                    console.log(data_total_by_year);
                                    console.log(qa_data_total_by_year);
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
                                        type: {type: "degreecollection"}
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

    // DEGREE COLLECTION - QUARTER

router.get('/degreecollection/:year/q/:quarter', (req, res) => {
    gigDataAdmin.selectGigDataDegreeQuarter(parseInt(req.params.year), parseInt(req.params.quarter), parseInt(req.params.year), parseInt(req.params.quarter), data => {
        gigDataAdmin.selectGigDataDegreeQAQuarter(parseInt(req.params.year), parseInt(req.params.quarter), parseInt(req.params.year), parseInt(req.params.quarter), qa_data => {
            gigDataAdmin.selectGigDataDegreeTotal(parseInt(req.params.year), data_total => {
                gigDataAdmin.selectGigDataDegreeQATotal(parseInt(req.params.year), qa_data_total => {
                    gigDataAdmin.selectGigDataDegreeTotal(parseInt(req.params.year)-1, data_total_prev_year => {
                        gigDataAdmin.selectGigDataDegreeQATotal(parseInt(req.params.year)-1, qa_data_total_prev_year => {
                            upworkData.selectUpworkDataDegreeYear(parseInt(req.params.year), upwork_data_curr_year => {
                                upworkData.selectUpworkDataDegreeYear(parseInt(req.params.year)-1, upwork_data_prev_year => {

                                    console.log("*****" + req._parsedOriginalUrl.path);

                                    let upwork_data_by_year = upwork_data_curr_year[0];
                                    let upwork_data_by_year_prev_year = upwork_data_prev_year[0];

                                    let data_total_by_year = data_total[0];
                                    let qa_data_total_by_year = qa_data_total[0];
        
                                    let data_total_by_year_prev_year = data_total_prev_year[0];
                                    let qa_data_total_by_year_prev_year = qa_data_total_prev_year[0];
                
                                    console.log(data_total_by_year);
                                    console.log(qa_data_total_by_year);
                                    // console.log("data");
                                    // console.log(data);
                                    // console.log("qa_data");
                                    // console.log(qa_data);
                                    // console.log(data.length);
                                    res.render("degreecollection", {
                                        data: data,
                                        qa_data: qa_data,
                                        data_total: data_total_by_year,
                                        qa_data_total: qa_data_total_by_year,
                                        data_total_prev_year: data_total_by_year_prev_year,
                                        qa_data_total_prev_year: qa_data_total_by_year_prev_year,
                                        upwork_data: upwork_data_by_year,
                                        upwork_data_prev_year: upwork_data_by_year_prev_year,
                                        date: {year: req.params.year, quarter: req.params.quarter},
                                        type: {type: "degreecollection"}
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

// DEGREE COLLECTION API - QUARTER

router.get('/api/degreecollection/:year/q/:quarter', (req, res) => {
    gigDataAdmin.selectGigDataDegreeQuarter(parseInt(req.params.year), parseInt(req.params.quarter), parseInt(req.params.year), parseInt(req.params.quarter), data => {
        gigDataAdmin.selectGigDataDegreeQAQuarter(parseInt(req.params.year), parseInt(req.params.quarter), parseInt(req.params.year), parseInt(req.params.quarter), qa_data => {
            gigDataAdmin.selectGigDataDegreeTotal(parseInt(req.params.year), data_total => {
                gigDataAdmin.selectGigDataDegreeQATotal(parseInt(req.params.year), qa_data_total => {
                    gigDataAdmin.selectGigDataDegreeTotal(parseInt(req.params.year)-1, data_total_prev_year => {
                        gigDataAdmin.selectGigDataDegreeQATotal(parseInt(req.params.year)-1, qa_data_total_prev_year => {
                            upworkData.selectUpworkDataDegreeYear(parseInt(req.params.year), upwork_data_curr_year => {
                                upworkData.selectUpworkDataDegreeYear(parseInt(req.params.year)-1, upwork_data_prev_year => {

                                    console.log("*****" + req._parsedOriginalUrl.path);

                                    let upwork_data_by_year = upwork_data_curr_year[0];
                                    let upwork_data_by_year_prev_year = upwork_data_prev_year[0];

                                    let data_total_by_year = data_total[0];
                                    let qa_data_total_by_year = qa_data_total[0];
        
                                    let data_total_by_year_prev_year = data_total_prev_year[0];
                                    let qa_data_total_by_year_prev_year = qa_data_total_prev_year[0];
                
                                    console.log(data_total_by_year);
                                    console.log(qa_data_total_by_year);
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
                                        type: {type: "degreecollection"}
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



// TUITION COLLECTION 

    // MONTH

router.get('/tuitioncollection/:year/:month', (req, res) => {
    gigDataAdmin.selectGigDataTuition(parseInt(req.params.year), parseInt(req.params.month), parseInt(req.params.year), parseInt(req.params.month), data => {
        gigDataAdmin.selectGigDataTuitionQA(parseInt(req.params.year), parseInt(req.params.month), parseInt(req.params.year), parseInt(req.params.month), qa_data => {
            gigDataAdmin.selectGigDataTuitionTotal(parseInt(req.params.year), data_total => {
                gigDataAdmin.selectGigDataTuitionQATotal(parseInt(req.params.year), qa_data_total => {
                    gigDataAdmin.selectGigDataTuitionTotal(parseInt(req.params.year)-1, data_total_prev_year => {
                        gigDataAdmin.selectGigDataTuitionQATotal(parseInt(req.params.year)-1, qa_data_total_prev_year => {
                            upworkData.selectUpworkDataTuitionYear(parseInt(req.params.year), upwork_data_curr_year => {
                                upworkData.selectUpworkDataTuitionYear(parseInt(req.params.year)-1, upwork_data_prev_year => {

                                    console.log("*****" + req._parsedOriginalUrl.path);

                                    let upwork_data_by_year = upwork_data_curr_year[0];
                                    let upwork_data_by_year_prev_year = upwork_data_prev_year[0];

                                    let data_total_by_year = data_total[0];
                                    let qa_data_total_by_year = qa_data_total[0];
        
                                    let data_total_by_year_prev_year = data_total_prev_year[0];
                                    let qa_data_total_by_year_prev_year = qa_data_total_prev_year[0];
                
                                    console.log(data_total_by_year);
                                    console.log(qa_data_total_by_year);
                                    // console.log("data");
                                    // console.log(data);
                                    // console.log("qa_data");
                                    // console.log(qa_data);
                                    // console.log(data.length);
                                    res.render("tuitioncollection", {
                                        data: data,
                                        qa_data: qa_data,
                                        data_total: data_total_by_year,
                                        qa_data_total: qa_data_total_by_year,
                                        data_total_prev_year: data_total_by_year_prev_year,
                                        qa_data_total_prev_year: qa_data_total_by_year_prev_year,
                                        upwork_data: upwork_data_by_year,
                                        upwork_data_prev_year: upwork_data_by_year_prev_year,
                                        date: {year: req.params.year, month: req.params.month},
                                        type: {type: "tuitioncollection"}
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

// API for Tuition Collection

router.get('/api/tuitioncollection/:year/:month', (req, res) => {
    gigDataAdmin.selectGigDataTuition(parseInt(req.params.year), parseInt(req.params.month), parseInt(req.params.year), parseInt(req.params.month), data => {
        gigDataAdmin.selectGigDataTuitionQA(parseInt(req.params.year), parseInt(req.params.month), parseInt(req.params.year), parseInt(req.params.month), qa_data => {
            gigDataAdmin.selectGigDataTuitionTotal(parseInt(req.params.year), data_total => {
                gigDataAdmin.selectGigDataTuitionQATotal(parseInt(req.params.year), qa_data_total => {
                    gigDataAdmin.selectGigDataTuitionTotal(parseInt(req.params.year)-1, data_total_prev_year => {
                        gigDataAdmin.selectGigDataTuitionQATotal(parseInt(req.params.year)-1, qa_data_total_prev_year => {
                            upworkData.selectUpworkDataTuitionYear(parseInt(req.params.year), upwork_data_curr_year => {
                                upworkData.selectUpworkDataTuitionYear(parseInt(req.params.year)-1, upwork_data_prev_year => {

                                    console.log("*****" + req._parsedOriginalUrl.path);

                                    let upwork_data_by_year = upwork_data_curr_year[0];
                                    let upwork_data_by_year_prev_year = upwork_data_prev_year[0];

                                    let data_total_by_year = data_total[0];
                                    let qa_data_total_by_year = qa_data_total[0];
        
                                    let data_total_by_year_prev_year = data_total_prev_year[0];
                                    let qa_data_total_by_year_prev_year = qa_data_total_prev_year[0];
                
                                    console.log(data_total_by_year);
                                    console.log(qa_data_total_by_year);
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
                                        type: {type: "tuitioncollection"}
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


    // TUITION COLLECTION - QUARTER

router.get('/tuitioncollection/:year/q/:quarter', (req, res) => {
    gigDataAdmin.selectGigDataTuitionQuarter(parseInt(req.params.year), parseInt(req.params.quarter), parseInt(req.params.year), parseInt(req.params.quarter), data => {
        gigDataAdmin.selectGigDataTuitionQAQuarter(parseInt(req.params.year), parseInt(req.params.quarter), parseInt(req.params.year), parseInt(req.params.quarter), qa_data => {
            gigDataAdmin.selectGigDataTuitionTotal(parseInt(req.params.year), data_total => {
                gigDataAdmin.selectGigDataTuitionQATotal(parseInt(req.params.year), qa_data_total => {
                    gigDataAdmin.selectGigDataTuitionTotal(parseInt(req.params.year)-1, data_total_prev_year => {
                        gigDataAdmin.selectGigDataTuitionQATotal(parseInt(req.params.year)-1, qa_data_total_prev_year => {
                            upworkData.selectUpworkDataTuitionYear(parseInt(req.params.year), upwork_data_curr_year => {
                                upworkData.selectUpworkDataTuitionYear(parseInt(req.params.year)-1, upwork_data_prev_year => {

                                    console.log("*****" + req._parsedOriginalUrl.path);

                                    let upwork_data_by_year = upwork_data_curr_year[0];
                                    let upwork_data_by_year_prev_year = upwork_data_prev_year[0];

                                    let data_total_by_year = data_total[0];
                                    let qa_data_total_by_year = qa_data_total[0];
        
                                    let data_total_by_year_prev_year = data_total_prev_year[0];
                                    let qa_data_total_by_year_prev_year = qa_data_total_prev_year[0];
                
                                    console.log(data_total_by_year);
                                    console.log(qa_data_total_by_year);
                                    // console.log("data");
                                    // console.log(data);
                                    // console.log("qa_data");
                                    // console.log(qa_data);
                                    // console.log(data.length);
                                    res.render("tuitioncollection", {
                                        data: data,
                                        qa_data: qa_data,
                                        data_total: data_total_by_year,
                                        qa_data_total: qa_data_total_by_year,
                                        data_total_prev_year: data_total_by_year_prev_year,
                                        qa_data_total_prev_year: qa_data_total_by_year_prev_year,
                                        upwork_data: upwork_data_by_year,
                                        upwork_data_prev_year: upwork_data_by_year_prev_year,
                                        date: {year: req.params.year, quarter: req.params.quarter},
                                        type: {type: "tuitioncollection"}
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


    // TUITION COLLECTION API - QUARTER

router.get('/api/tuitioncollection/:year/q/:quarter', (req, res) => {
    gigDataAdmin.selectGigDataTuitionQuarter(parseInt(req.params.year), parseInt(req.params.quarter), parseInt(req.params.year), parseInt(req.params.quarter), data => {
        gigDataAdmin.selectGigDataTuitionQAQuarter(parseInt(req.params.year), parseInt(req.params.quarter), parseInt(req.params.year), parseInt(req.params.quarter), qa_data => {
            gigDataAdmin.selectGigDataTuitionTotal(parseInt(req.params.year), data_total => {
                gigDataAdmin.selectGigDataTuitionQATotal(parseInt(req.params.year), qa_data_total => {
                    gigDataAdmin.selectGigDataTuitionTotal(parseInt(req.params.year)-1, data_total_prev_year => {
                        gigDataAdmin.selectGigDataTuitionQATotal(parseInt(req.params.year)-1, qa_data_total_prev_year => {
                            upworkData.selectUpworkDataTuitionYear(parseInt(req.params.year), upwork_data_curr_year => {
                                upworkData.selectUpworkDataTuitionYear(parseInt(req.params.year)-1, upwork_data_prev_year => {

                                    console.log("*****" + req._parsedOriginalUrl.path);

                                    let upwork_data_by_year = upwork_data_curr_year[0];
                                    let upwork_data_by_year_prev_year = upwork_data_prev_year[0];

                                    let data_total_by_year = data_total[0];
                                    let qa_data_total_by_year = qa_data_total[0];
        
                                    let data_total_by_year_prev_year = data_total_prev_year[0];
                                    let qa_data_total_by_year_prev_year = qa_data_total_prev_year[0];
                
                                    console.log(data_total_by_year);
                                    console.log(qa_data_total_by_year);
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
                                        type: {type: "tuitioncollection"}
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


// router.get('/api/tuitioncollection/:year/:month', (req, res) => {
//     gigDataAdmin.selectGigDataTuition(parseInt(req.params.year), parseInt(req.params.month), data => {
//         upworkData.selectUpworkDataTuition(parseInt(req.params.year), parseInt(req.params.month), upwork_data => {
//             // gigData.selectGigDataTuitionQA(parseInt(req.params.year), parseInt(req.params.month), qa_data => {
//                 console.log("*****" + req._parsedOriginalUrl.path)
//                 console.log(upwork_data);
//                 console.log(data);
//                 // console.log(data.length);
//                 res.json({
//                     data: data,
//                     upwork_data: upwork_data
//                 });

//             // })

//         })

//     });
// });

module.exports = router