const gigDataAdmin = require('../models/GigData');
const gigDataOutreach = require('../models/GigData-Outreach');
const upworkData = require('../models/UpworkData');
const express = require('express');
const { getIndividualCollegeContact, getName } = require('../config/orm');
const gigData = require('../models/GigData');
const router = express.Router();

let date = new Date();


router.get('/', (req, res) => {

    res.redirect(`/degreecollection/${date.getFullYear()}/${date.getMonth()+1}`);
    // gigDataAdmin.selectGigDataDegree(parseInt(date.getFullYear()), parseInt(date.getMonth()+1), parseInt(date.getFullYear()), parseInt(date.getMonth()+1), data => {
    //     gigDataAdmin.selectGigDataDegreeQA(parseInt(date.getFullYear()), parseInt(date.getMonth()+1), parseInt(date.getFullYear()), parseInt(date.getMonth())+1, qa_data => {
    //         gigDataAdmin.selectGigDataDegreeTotal(parseInt(date.getFullYear()), data_total => {
    //             gigDataAdmin.selectGigDataDegreeQATotal(parseInt(date.getFullYear()), qa_data_total => {
    //                 gigDataAdmin.selectGigDataDegreeTotal(parseInt(date.getFullYear())-1, data_total_prev_year => {
    //                     gigDataAdmin.selectGigDataDegreeQATotal(parseInt(date.getFullYear())-1, qa_data_total_prev_year => {
    //                         upworkData.selectUpworkDataDegreeYear(parseInt(date.getFullYear()), upwork_data_curr_year => {
    //                             upworkData.selectUpworkDataDegreeYear(parseInt(date.getFullYear())-1, upwork_data_prev_year => {

    //                                 console.log("*****" + req._parsedOriginalUrl.path);

    //                                 let upwork_data_by_year = upwork_data_curr_year[0];
    //                                 let upwork_data_by_year_prev_year = upwork_data_prev_year[0];

    //                                 let data_total_by_year = data_total[0];
    //                                 let qa_data_total_by_year = qa_data_total[0];
        
    //                                 let data_total_by_year_prev_year = data_total_prev_year[0];
    //                                 let qa_data_total_by_year_prev_year = qa_data_total_prev_year[0];
                
    //                                 res.render("degreecollection", {
    //                                     data: data,
    //                                     qa_data: qa_data,
    //                                     data_total: data_total_by_year,
    //                                     qa_data_total: qa_data_total_by_year,
    //                                     data_total_prev_year: data_total_by_year_prev_year,
    //                                     qa_data_total_prev_year: qa_data_total_by_year_prev_year,
    //                                     upwork_data: upwork_data_by_year,
    //                                     upwork_data_prev_year: upwork_data_by_year_prev_year,
    //                                     date: {year: date.getFullYear(), month: date.getMonth()+1},
    //                                     type: {type: "degreecollection"}
    //                                 });
    //                             });
    //                         });
    //                     });
    //                 });
    //             });
    //         });
    //     })
    // });
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
                                    gigDataAdmin.getAllUsers( allUsers => {

                                        console.log("*****" + req._parsedOriginalUrl.path);
    
                                        let upwork_data_by_year = upwork_data_curr_year[0];
                                        let upwork_data_by_year_prev_year = upwork_data_prev_year[0];
    
                                        let data_total_by_year = data_total[0];
                                        let qa_data_total_by_year = qa_data_total[0];
            
                                        let data_total_by_year_prev_year = data_total_prev_year[0];
                                        let qa_data_total_by_year_prev_year = qa_data_total_prev_year[0];
                    
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
                                            type: {type: "degreecollection"},
                                            all_users: allUsers
                                        });
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
                                    gigDataAdmin.getAllUsers( allUsers => {
                                        console.log("*****" + req._parsedOriginalUrl.path);
    
                                        let upwork_data_by_year = upwork_data_curr_year[0];
                                        let upwork_data_by_year_prev_year = upwork_data_prev_year[0];
    
                                        let data_total_by_year = data_total[0];
                                        let qa_data_total_by_year = qa_data_total[0];
            
                                        let data_total_by_year_prev_year = data_total_prev_year[0];
                                        let qa_data_total_by_year_prev_year = qa_data_total_prev_year[0];
                    
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
                                            type: {type: "tuitioncollection"},
                                            allUsers: allUsers

                                        });
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

router.get('/id/:contractor', (req, res) => {
    gigDataAdmin.getContactGigTypes(parseInt(req.params.contractor), gigTypes => {
        
        let types_key_values = Object.values(JSON.parse(JSON.stringify(gigTypes)))

        let name;
        let types = [];
        let degreeArray = [];
        let tuitionArray = [];
        let collegeContactArray = [];
        let bestPageArray = []; 
        let gigTotalsArray = [];
        let allUsersArray = [];

        for (let i = types_key_values.length-1; i >= 0; i--) {
            types.push(types_key_values[i].type)
        } 

        // console.log(types_key_values)

        // console.log(types)

        getNameFunction();

        function getNameFunction() {
            gigDataAdmin.getName(parseInt(req.params.contractor), userName => {
                name = JSON.parse(JSON.stringify(userName[0].name))
                console.log(name)
                degreeFunction();
            })
        }

        function degreeFunction() {
            gigDataAdmin.getIndividualDegree(parseInt(req.params.contractor), degreeData => {
                for (let i = degreeData.length-1; i >= 0; i--) {
                    degreeArray.push(JSON.parse(JSON.stringify(degreeData[i])))
                }
                // console.log('\x1b[36m%s\x1b[0m', "Degree Collection Array")
                // console.log(degreeArray)
                
                tuitionFunction()
            })
        }

        function tuitionFunction() {
            gigDataAdmin.getIndividualTuition(parseInt(req.params.contractor), tuitionData => {
                for (let i = tuitionData.length-1; i >= 0 ; i--) {
                    tuitionArray.push(JSON.parse(JSON.stringify(tuitionData[i])))
                } 
                // console.log('\x1b[36m%s\x1b[0m', "Tuition Collection Array")
                // console.log(tuitionArray)

                collegeContactFunction()
            })
        }

        function collegeContactFunction() {
            gigDataOutreach.getIndividualCollegeContact(parseInt(req.params.contractor), collegeContactData => {
                for (let i = collegeContactData.length-1; i >= 0 ; i--) {
                    collegeContactArray.push(JSON.parse(JSON.stringify(collegeContactData[i])))
                }
                // console.log('\x1b[36m%s\x1b[0m', "College Contact Collection Array")
                // console.log(collegeContactArray)

                bestPageFunction()
            })
        }

        function bestPageFunction() {
            gigDataOutreach.getIndividualBestPage(parseInt(req.params.contractor), bestPageData => {
                for (let i = bestPageData.length-1; i >= 0 ; i--) {
                    bestPageArray.push(JSON.parse(JSON.stringify(bestPageData[i])))
                }
                // console.log('\x1b[36m%s\x1b[0m', "Best Page Collection Array")
                // console.log(bestPageArray)

                getAllGigTotal()
            })
        }
        
        function getAllGigTotal() {
            gigDataAdmin.getAllGigTotal(totalData => {
                for (let i = totalData.length-1; i >= 0 ; i--) {
                    gigTotalsArray.push(JSON.parse(JSON.stringify(totalData[i])))
                }
                // console.log('\x1b[36m%s\x1b[0m', "Gig Totals Array")
                
                getAllUsers()
            })
        }

        function getAllUsers() {
            gigDataAdmin.getAllUsers(allUsers => {
                // for (let i = allUsers.length-1; i >= 0; i--) {
                //     allUsersArray.push(JSON.parse(JSON.stringify(allUsers[i])))
                // }
                // console.log(allUsersArray)

                allUsersArray = allUsers
                resResults()
            })
        }

        function resResults() {
            res.render('contractor', {
                name: name,
                types: gigTypes,
                degree_data: degreeArray,
                tuition_data: tuitionArray,
                college_contact_data: collegeContactArray,
                best_page_data: bestPageArray,
                gig_total_data: gigTotalsArray,
                all_users: allUsersArray
            })
        }
    })
})

    // CONTRACTOR INDIVIDUAL REPORT API

router.get('/api/id/:contractor', (req, res) => {
    gigDataAdmin.getContactGigTypes(parseInt(req.params.contractor), gigTypes => {
        
        let types_key_values = Object.values(JSON.parse(JSON.stringify(gigTypes)))

        let name;
        let types = [];
        let degreeArray = [];
        let tuitionArray = [];
        let collegeContactArray = [];
        let bestPageArray = []; 
        let gigTotalsArray = [];
        let allUsersArray;

        // console.log(types[0])

        for (let i = types_key_values.length-1; i >= 0; i--) {
            console.log(types_key_values[i].type)
            console.log(i)
            types.push(types_key_values[i].type)
        } 

        // console.log(types_key_values)

        // console.log(types)

        // console.log(types.indexOf("Gig::DegreeCollection"))

        getNameFunction();

        function getNameFunction() {
            gigDataAdmin.getName(parseInt(req.params.contractor), userName => {
                name = JSON.parse(JSON.stringify(userName[0].name))
                console.log(name)
                degreeFunction();
            })
        }

        function degreeFunction() {
            gigDataAdmin.getIndividualDegree(parseInt(req.params.contractor), degreeData => {
                for (let i = degreeData.length-1; i >= 0; i--) {
                    degreeArray.push(JSON.parse(JSON.stringify(degreeData[i])))
                }
                // console.log('\x1b[36m%s\x1b[0m', "Degree Collection Array")
                // console.log(degreeArray)
                
                tuitionFunction()
            })
        }

        function tuitionFunction() {
            gigDataAdmin.getIndividualTuition(parseInt(req.params.contractor), tuitionData => {
                for (let i = tuitionData.length-1; i >= 0 ; i--) {
                    tuitionArray.push(JSON.parse(JSON.stringify(tuitionData[i])))
                } 
                // console.log('\x1b[36m%s\x1b[0m', "Tuition Collection Array")
                // console.log(tuitionArray)

                collegeContactFunction()
            })
        }

        function collegeContactFunction() {
            gigDataOutreach.getIndividualCollegeContact(parseInt(req.params.contractor), collegeContactData => {
                for (let i = collegeContactData.length-1; i >= 0 ; i--) {
                    collegeContactArray.push(JSON.parse(JSON.stringify(collegeContactData[i])))
                }
                // console.log('\x1b[36m%s\x1b[0m', "College Contact Collection Array")
                // console.log(collegeContactArray)

                bestPageFunction()
            })
        }

        function bestPageFunction() {
            gigDataOutreach.getIndividualBestPage(parseInt(req.params.contractor), bestPageData => {
                for (let i = bestPageData.length-1; i >= 0 ; i--) {
                    bestPageArray.push(JSON.parse(JSON.stringify(bestPageData[i])))
                }
                // console.log('\x1b[36m%s\x1b[0m', "Best Page Collection Array")
                // console.log(bestPageArray)

                getAllGigTotal()
            })
        }

        
        function getAllGigTotal() {
            gigDataAdmin.getAllGigTotal(totalData => {
                for (let i = totalData.length-1; i >= 0 ; i--) {
                    gigTotalsArray.push(JSON.parse(JSON.stringify(totalData[i])))
                }
                // console.log('\x1b[36m%s\x1b[0m', "Gig Totals Array")
                
                getAllUsers()
            })
        }

        function getAllUsers() {
            gigDataAdmin.getAllUsers(allUsers => {
                // for (let i = allUsers.length-1; i >= 0; i--) {
                //     allUsersArray.push(JSON.parse(JSON.stringify(allUsers[i])))
                // }
                allUsersArray = allUsers
                console.log(allUsers)

                resResults()
            })
        }

        function resResults() {
            res.json({
                name: name,
                types: gigTypes,
                degree_data: degreeArray,
                tuition_data: tuitionArray,
                college_contact_data: collegeContactArray,
                best_page_data: bestPageArray,
                gig_total_data: gigTotalsArray,
                all_users: allUsersArray
            })
        }

        // console.log(degreeArray)

        // res.json({
        //     types: gigTypes

        // })
    })
})


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