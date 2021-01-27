const { escapeId } = require("mysql");
const connection = require("./connection.js")

let orm = {
    selectAll: (table, cb) => {
        connection.query('SELECT * FROM ??', table, (err, res) => {
            if (err) {
                throw err;
            } else {
                cb(res);
            }
        })
    },

    selectUpworkDataDegree: (year, month, cb) => {
        connection.query('SELECT userId, name, SUM(totalhours) AS totalhours, SUM(totalcharges) AS totalcharges FROM UpworkData WHERE activity = "MegaDegreeCollection" AND year = ? AND month = ? GROUP BY name',
        [year, month],
        (err, res) => {
            if (err) {
                throw err;
            } else {  
                cb(res);
            }
        })
    },

    // getting annual upwork charges

    selectUpworkDataDegreeYear: (year, cb) => {
        connection.query('SELECT userId, SUM(totalhours) AS totalhours, SUM(totalcharges) AS totalcharges FROM UpworkData WHERE activity = "MegaDegreeCollection" AND year = ? GROUP BY year',
        [year],
        (err, res) => {
            if (err) {
                throw err;
            } else {  
                cb(res);
            }
        })
    },

    // DEGREE COLLECTION GIG DATA AND UPWORK DATA JOINED

    // MONTH

    selectGigDataDegree: (upworkYear, upworkMonth, year, month, cb) => {
        connection.query('SELECT GigData.owner_id AS id, GigData.oc_name, GigData.submitted_year, GigData.submitted_month, GigData.type, UpworkSums.year, UpworkSums.month, UpworkSums.activity, CASE WHEN COUNT(GigData.id) > 0 THEN COUNT(GigData.id) ELSE 0 END AS gig_count, CASE WHEN SUM(GigData.degree_gig_count) > 0 THEN SUM(GigData.degree_gig_count) ELSE 0 END AS degrees_collected, CASE WHEN UpworkSums.total_hours IS NULL THEN 0 ELSE UpworkSums.total_hours END AS total_hours, CASE WHEN UpworkSums.total_charges IS NULL THEN 0 ELSE UpworkSums.total_charges END AS total_charges FROM GigData ' + 
        // Creating a table with upwork data sums and using that to join with gig data
        'LEFT JOIN (SELECT userId, name, year, month, activity, CASE WHEN sum(totalhours) = NULL THEN 0 ELSE sum(totalhours) END AS total_hours, CASE WHEN sum(totalcharges) = NULL THEN 0 ELSE sum(totalcharges) END AS total_charges FROM UpworkData WHERE activity = "MegaDegreeCollection" and year = ? and month = ? GROUP BY userId) AS UpworkSums ON (UpworkSums.userId = GigData.owner_id) ' +
        // Setting parameters for the gig data
        'WHERE GigData.type = "Gig::DegreeCollection" AND GigData.submitted_year = ? AND GigData.submitted_month = ? GROUP BY GigData.oc_name order by GigData.oc_name', 
        [upworkYear, upworkMonth, year, month],
        (err, res) => {
            if (err) {
                throw err;
            } else {
                cb(res);
            }
        })
    },

    selectGigDataDegreeQA: (upworkYear, upworkMonth, year, month, cb) => {
        connection.query('SELECT GigData.qa_owner_id AS id, GigData.qaer_name, GigData.qa_submitted_year, GigData.qa_submitted_month, GigData.type, UpworkSums.year, UpworkSums.month, UpworkSums.activity, CASE WHEN COUNT(GigData.id) > 0 THEN COUNT(GigData.id) ELSE 0 END AS gig_count, CASE WHEN SUM(GigData.degree_gig_count) > 0 THEN SUM(GigData.degree_gig_count) ELSE 0 END AS degrees_collected, CASE WHEN UpworkSums.total_hours IS NULL THEN 0 ELSE UpworkSums.total_hours END AS total_hours, CASE WHEN UpworkSums.total_charges IS NULL THEN 0 ELSE UpworkSums.total_charges END AS total_charges FROM GigData ' + 
        // Creating a table with upwork data sums and using that to join with gig data
        'LEFT JOIN (SELECT userId, name, year, month, activity, sum(totalhours) AS total_hours, sum(totalcharges) AS total_charges FROM UpworkData WHERE activity = "MegaDegreeCollection" and year = ? and month = ? GROUP BY userId) AS UpworkSums ON (UpworkSums.userId = GigData.qa_owner_id) ' +
        // Setting parameters for the gig data
        'WHERE GigData.type = "Gig::DegreeCollection" AND GigData.qa_submitted_year = ? AND GigData.qa_submitted_month = ? GROUP BY GigData.qaer_name order by GigData.qaer_name', 
        [upworkYear, upworkMonth, year, month],
        (err, res) => {
            if (err) {
                throw err;
            } else {
                cb(res);
            }
        })
    },


    // QUARTER

    selectGigDataDegreeQuarter: (upworkYear, upworkQuarter, year, quarter, cb) => {
        connection.query('SELECT GigData.owner_id AS id, GigData.oc_name, GigData.submitted_year, GigData.submitted_quarter, GigData.type, UpworkSums.year, UpworkSums.quarter, UpworkSums.activity, CASE WHEN COUNT(GigData.id) > 0 THEN COUNT(GigData.id) ELSE 0 END AS gig_count, CASE WHEN SUM(GigData.degree_gig_count) > 0 THEN SUM(GigData.degree_gig_count) ELSE 0 END AS degrees_collected, CASE WHEN UpworkSums.total_hours IS NULL THEN 0 ELSE UpworkSums.total_hours END AS total_hours, CASE WHEN UpworkSums.total_charges IS NULL THEN 0 ELSE UpworkSums.total_charges END AS total_charges FROM GigData ' + 
        // Creating a table with upwork data sums and using that to join with gig data
        'LEFT JOIN (SELECT userId, name, year, quarter, activity, CASE WHEN sum(totalhours) = NULL THEN 0 ELSE sum(totalhours) END AS total_hours, CASE WHEN sum(totalcharges) = NULL THEN 0 ELSE sum(totalcharges) END AS total_charges FROM UpworkData WHERE activity = "MegaDegreeCollection" and year = ? and quarter = ? GROUP BY userId) AS UpworkSums ON (UpworkSums.userId = GigData.owner_id) ' +
        // Setting parameters for the gig data
        'WHERE GigData.type = "Gig::DegreeCollection" AND GigData.submitted_year = ? AND GigData.submitted_quarter = ? GROUP BY GigData.oc_name order by GigData.oc_name', 
        [upworkYear, upworkQuarter, year, quarter],
        (err, res) => {
            if (err) {
                throw err;
            } else {
                cb(res);
            }
        })
    },

    selectGigDataDegreeQAQuarter: (upworkYear, upworkQuarter, year, quarter, cb) => {
        connection.query('SELECT GigData.qa_owner_id AS id, GigData.qaer_name, GigData.qa_submitted_year, GigData.qa_submitted_quarter, GigData.type, UpworkSums.year, UpworkSums.quarter, UpworkSums.activity, CASE WHEN COUNT(GigData.id) > 0 THEN COUNT(GigData.id) ELSE 0 END AS gig_count, CASE WHEN SUM(GigData.degree_gig_count) > 0 THEN SUM(GigData.degree_gig_count) ELSE 0 END AS degrees_collected, CASE WHEN UpworkSums.total_hours IS NULL THEN 0 ELSE UpworkSums.total_hours END AS total_hours, CASE WHEN UpworkSums.total_charges IS NULL THEN 0 ELSE UpworkSums.total_charges END AS total_charges FROM GigData ' + 
        // Creating a table with upwork data sums and using that to join with gig data
        'LEFT JOIN (SELECT userId, name, year, quarter, activity, sum(totalhours) AS total_hours, sum(totalcharges) AS total_charges FROM UpworkData WHERE activity = "MegaDegreeCollection" and year = ? and quarter = ? GROUP BY userId) AS UpworkSums ON (UpworkSums.userId = GigData.qa_owner_id) ' +
        // Setting parameters for the gig data
        'WHERE GigData.type = "Gig::DegreeCollection" AND GigData.qa_submitted_year = ? AND GigData.qa_submitted_quarter = ? GROUP BY GigData.qaer_name order by GigData.qaer_name', 
        [upworkYear, upworkQuarter, year, quarter],
        (err, res) => {
            if (err) {
                throw err;
            } else {
                cb(res);
            }
        })
    },



    // Current year totals. Gig data Regular and QA for degree collection

    selectGigDataDegreeTotal: (year, cb) => {
        connection.query('SELECT submitted_year, COUNT(id) AS gig_count, SUM(degree_gig_count) AS degrees_collected FROM GigData WHERE type = "Gig::DegreeCollection" AND submitted_year = ? GROUP BY submitted_year',
        [year],
        (err, res) => {
            if (err) {
                throw err;
            } else {
                cb(res);
            }
        })
    },

    selectGigDataDegreeQATotal: (year, cb) => {
        connection.query('SELECT qa_submitted_year, COUNT(id) AS gig_count, SUM(degree_gig_count) AS degrees_collected FROM GigData WHERE type = "Gig::DegreeCollection" AND qa_submitted_year = ? GROUP BY qa_submitted_year',
        [year],
        (err, res) => {
            if (err) {
                throw err;
            } else {
                cb(res);
            }
        })
    },

    // Tuition collection annual upwork

    selectUpworkDataTuitionYear: (year, cb) => {
        connection.query('SELECT userId, SUM(totalhours) AS totalhours, SUM(totalcharges) AS totalcharges FROM UpworkData WHERE activity = "CollegeTuition" AND year = ? GROUP BY year',
        [year],
        (err, res) => {
            if (err) {
                throw err;
            } else {  
                cb(res);
            }
        });
    },

    // TUITION COLLECTION GIG DATA AND UPWORK DATA JOINED

        // MONTH

    selectGigDataTuition: (upworkYear, upworkMonth, year, month, cb) => {
        connection.query('SELECT GigData.owner_id AS id, GigData.oc_name, GigData.submitted_year, GigData.submitted_month, GigData.type, UpworkSums.year, UpworkSums.month, UpworkSums.activity, CASE WHEN COUNT(GigData.id) > 0 THEN COUNT(GigData.id) ELSE 0 END AS gig_count, CASE WHEN SUM(GigData.tuition_degree_count) > 0 THEN SUM(GigData.tuition_degree_count) ELSE 0 END AS tuitions_collected, CASE WHEN UpworkSums.total_hours IS NULL THEN 0 ELSE UpworkSums.total_hours END AS total_hours, CASE WHEN UpworkSums.total_charges IS NULL THEN 0 ELSE UpworkSums.total_charges END AS total_charges FROM GigData ' + 
        // Creating a table with upwork data sums and using that to join with gig data
        'LEFT JOIN (SELECT userId, name, year, month, activity, CASE WHEN sum(totalhours) = NULL THEN 0 ELSE sum(totalhours) END AS total_hours, CASE WHEN sum(totalcharges) = NULL THEN 0 ELSE sum(totalcharges) END AS total_charges FROM UpworkData WHERE activity = "CollegeTuition" and year = ? and month = ? GROUP BY userId) AS UpworkSums ON (UpworkSums.userId = GigData.owner_id) ' +
        // Setting parameters for the gig data
        'WHERE GigData.type = "Gig::CollegeTuitionCollection" AND GigData.submitted_year = ? AND GigData.submitted_month = ? GROUP BY GigData.oc_name order by GigData.oc_name', 
        [upworkYear, upworkMonth, year, month],
        (err, res) => {
            if (err) {
                throw err;
            } else {
                cb(res);
            }
        })
    },

    selectGigDataTuitionQA: (upworkYear, upworkMonth, year, month, cb) => {
        connection.query('SELECT GigData.qa_owner_id AS id, GigData.qaer_name, GigData.qa_submitted_year, GigData.qa_submitted_month, GigData.type, UpworkSums.year, UpworkSums.month, UpworkSums.activity, CASE WHEN COUNT(GigData.id) > 0 THEN COUNT(GigData.id) ELSE 0 END AS gig_count, CASE WHEN SUM(GigData.tuition_degree_count) > 0 THEN SUM(GigData.tuition_degree_count) ELSE 0 END AS tuitions_collected, CASE WHEN UpworkSums.total_hours IS NULL THEN 0 ELSE UpworkSums.total_hours END AS total_hours, CASE WHEN UpworkSums.total_charges IS NULL THEN 0 ELSE UpworkSums.total_charges END AS total_charges FROM GigData ' + 
        // Creating a table with upwork data sums and using that to join with gig data
        'LEFT JOIN (SELECT userId, name, year, month, activity, sum(totalhours) AS total_hours, sum(totalcharges) AS total_charges FROM UpworkData WHERE activity = "CollegeTuition" and year = ? and month = ? GROUP BY userId) AS UpworkSums ON (UpworkSums.userId = GigData.qa_owner_id) ' +
        // Setting parameters for the gig data
        'WHERE GigData.type = "Gig::CollegeTuitionCollection" AND GigData.qa_submitted_year = ? AND GigData.qa_submitted_month = ? GROUP BY GigData.qaer_name order by GigData.qaer_name', 
        [upworkYear, upworkMonth, year, month],
        (err, res) => {
            if (err) {
                throw err;
            } else {
                cb(res);
            }
        })
    },

        // QUARTER

    selectGigDataTuitionQuarter: (upworkYear, upworkQuarter, year, quarter, cb) => {
        connection.query('SELECT GigData.owner_id AS id, GigData.oc_name, GigData.submitted_year, GigData.submitted_quarter, GigData.type, UpworkSums.year, UpworkSums.quarter, UpworkSums.activity, CASE WHEN COUNT(GigData.id) > 0 THEN COUNT(GigData.id) ELSE 0 END AS gig_count, CASE WHEN SUM(GigData.tuition_degree_count) > 0 THEN SUM(GigData.tuition_degree_count) ELSE 0 END AS tuitions_collected, CASE WHEN UpworkSums.total_hours IS NULL THEN 0 ELSE UpworkSums.total_hours END AS total_hours, CASE WHEN UpworkSums.total_charges IS NULL THEN 0 ELSE UpworkSums.total_charges END AS total_charges FROM GigData ' + 
        // Creating a table with upwork data sums and using that to join with gig data
        'LEFT JOIN (SELECT userId, name, year, quarter, activity, CASE WHEN sum(totalhours) = NULL THEN 0 ELSE sum(totalhours) END AS total_hours, CASE WHEN sum(totalcharges) = NULL THEN 0 ELSE sum(totalcharges) END AS total_charges FROM UpworkData WHERE activity = "CollegeTuition" and year = ? and quarter = ? GROUP BY userId) AS UpworkSums ON (UpworkSums.userId = GigData.owner_id) ' +
        // Setting parameters for the gig data
        'WHERE GigData.type = "Gig::CollegeTuitionCollection" AND GigData.submitted_year = ? AND GigData.submitted_quarter = ? GROUP BY GigData.oc_name order by GigData.oc_name', 
        [upworkYear, upworkQuarter, year, quarter],
        (err, res) => {
            if (err) {
                throw err;
            } else {
                cb(res);
            }
        })
    },

    selectGigDataTuitionQAQuarter: (upworkYear, upworkQuarter, year, quarter, cb) => {
        connection.query('SELECT GigData.qa_owner_id AS id, GigData.qaer_name, GigData.qa_submitted_year, GigData.qa_submitted_quarter, GigData.type, UpworkSums.year, UpworkSums.quarter, UpworkSums.activity, CASE WHEN COUNT(GigData.id) > 0 THEN COUNT(GigData.id) ELSE 0 END AS gig_count, CASE WHEN SUM(GigData.tuition_degree_count) > 0 THEN SUM(GigData.tuition_degree_count) ELSE 0 END AS tuitions_collected, CASE WHEN UpworkSums.total_hours IS NULL THEN 0 ELSE UpworkSums.total_hours END AS total_hours, CASE WHEN UpworkSums.total_charges IS NULL THEN 0 ELSE UpworkSums.total_charges END AS total_charges FROM GigData ' + 
        // Creating a table with upwork data sums and using that to join with gig data
        'LEFT JOIN (SELECT userId, name, year, quarter, activity, sum(totalhours) AS total_hours, sum(totalcharges) AS total_charges FROM UpworkData WHERE activity = "CollegeTuition" and year = ? and quarter = ? GROUP BY userId) AS UpworkSums ON (UpworkSums.userId = GigData.qa_owner_id) ' +
        // Setting parameters for the gig data
        'WHERE GigData.type = "Gig::CollegeTuitionCollection" AND GigData.qa_submitted_year = ? AND GigData.qa_submitted_month = ? GROUP BY GigData.qaer_name order by GigData.qaer_name', 
        [upworkYear, upworkQuarter, year, quarter],
        (err, res) => {
            if (err) {
                throw err;
            } else {
                cb(res);
            }
        })
    },

    // Current year totals. Gig data for Regular and QA for tuition collection

    selectGigDataTuitionTotal: (year, cb) => {
        connection.query('SELECT submitted_year, COUNT(id) AS gig_count, SUM(tuition_degree_count) AS tuitions_collected FROM GigData WHERE type = "Gig::CollegeTuitionCollection" AND submitted_year = ? GROUP BY submitted_year',
        [year],
        (err, res) => {
            if (err) {
                throw err;
            } else {
                cb(res);
            }
        })
    },

    selectGigDataTuitionQATotal: (year, cb) => {
        connection.query('SELECT qa_submitted_year, COUNT(id) AS gig_count, SUM(tuition_degree_count) AS tuitions_collected FROM GigData WHERE type = "Gig::CollegeTuitionCollection" AND qa_submitted_year = ? GROUP BY qa_submitted_year',
        [year],
        (err, res) => {
            if (err) {
                throw err;
            } else {
                cb(res);
            }
        })
    },

    // BEST PAGE GIG DATA

        // MONTH

    selectBestPage: (upworkYear, upworkMonth, year, month, cb) => {
        connection.query('SELECT GigData_Outreach.owner_id AS id, GigData_Outreach.oc_name, GigData_Outreach.submitted_year, GigData_Outreach.submitted_month, GigData_Outreach.type, UpworkSums.year, UpworkSums.month, UpworkSums.activity, CASE WHEN COUNT(GigData_Outreach.gigs_id) > 0 THEN COUNT(GigData_Outreach.gigs_id) ELSE 0 END AS gig_count, CASE WHEN SUM(GigData_Outreach.best_page_count) > 0 THEN SUM(GigData_Outreach.best_page_count) ELSE 0 END AS bestpages_collected, CASE WHEN UpworkSums.total_hours IS NULL THEN 0 ELSE UpworkSums.total_hours END AS total_hours, CASE WHEN UpworkSums.total_charges IS NULL THEN 0 ELSE UpworkSums.total_charges END AS total_charges FROM GigData_Outreach LEFT JOIN (SELECT userId, name, year, month, activity, sum(totalhours) AS total_hours, sum(totalcharges) AS total_charges FROM UpworkData WHERE activity = "BestPageGigs" AND year = ? AND month = ? GROUP BY userId) AS UpworkSums ON (UpworkSums.userId = GigData_Outreach.owner_id) WHERE GigData_Outreach.type = "Gig::BestPageContact" AND GigData_Outreach.submitted_year = ? AND GigData_Outreach.submitted_month = ? GROUP BY GigData_Outreach.oc_name ORDER BY GigData_Outreach.oc_name',
        [upworkYear, upworkMonth, year, month],
        (err, res) => {
            if (err) {
                throw err;
            } else {
                cb(res);
            }
        })
    },

    selectBestPageQA: (upworkYear, upworkMonth, year, month, cb) => {
        connection.query('SELECT GigData_Outreach.qa_owner_id AS id, GigData_Outreach.qa_name AS qaer_name, GigData_Outreach.qa_submitted_year, GigData_Outreach.qa_submitted_month, GigData_Outreach.type, UpworkSums.year, UpworkSums.month, UpworkSums.activity, CASE WHEN COUNT(GigData_Outreach.gigs_id) > 0 THEN COUNT(GigData_Outreach.gigs_id) ELSE 0 END AS gig_count, CASE WHEN SUM(GigData_Outreach.best_page_count) > 0 THEN SUM(GigData_Outreach.best_page_count) ELSE 0 END AS bestpages_collected, CASE WHEN UpworkSums.total_hours IS NULL THEN 0 ELSE UpworkSums.total_hours END AS total_hours, CASE WHEN UpworkSums.total_charges IS NULL THEN 0 ELSE UpworkSums.total_charges END AS total_charges FROM GigData_Outreach LEFT JOIN (SELECT userId, name, year, month, activity, sum(totalhours) AS total_hours, sum(totalcharges) AS total_charges FROM UpworkData WHERE activity = "BestPageGigs" AND year = ? AND month = ? GROUP BY userId) AS UpworkSums ON (UpworkSums.userId = GigData_Outreach.qa_owner_id) WHERE GigData_Outreach.type = "Gig::BestPageContact" AND GigData_Outreach.qa_submitted_year = ? AND GigData_Outreach.qa_submitted_month = ? GROUP BY GigData_Outreach.qa_name ORDER BY GigData_Outreach.qa_name',
        [upworkYear, upworkMonth, year, month],
        (err, res) => {
            if (err) {
                throw err;
            } else {
                cb(res);
            }
        })
    },

        // QUARTER 

    selectBestPageQuarter: (upworkYear, upworkQuarter, year, quarter, cb) => {
        connection.query('SELECT GigData_Outreach.owner_id AS id, GigData_Outreach.oc_name, GigData_Outreach.submitted_year, GigData_Outreach.submitted_quarter, GigData_Outreach.type, UpworkSums.year, UpworkSums.quarter, UpworkSums.activity, CASE WHEN COUNT(GigData_Outreach.gigs_id) > 0 THEN COUNT(GigData_Outreach.gigs_id) ELSE 0 END AS gig_count, CASE WHEN SUM(GigData_Outreach.best_page_count) > 0 THEN SUM(GigData_Outreach.best_page_count) ELSE 0 END AS bestpages_collected, CASE WHEN UpworkSums.total_hours IS NULL THEN 0 ELSE UpworkSums.total_hours END AS total_hours, CASE WHEN UpworkSums.total_charges IS NULL THEN 0 ELSE UpworkSums.total_charges END AS total_charges FROM GigData_Outreach LEFT JOIN (SELECT userId, name, year, quarter, activity, sum(totalhours) AS total_hours, sum(totalcharges) AS total_charges FROM UpworkData WHERE activity = "BestPageGigs" AND year = ? AND quarter = ? GROUP BY userId) AS UpworkSums ON (UpworkSums.userId = GigData_Outreach.owner_id) WHERE GigData_Outreach.type = "Gig::BestPageContact" AND GigData_Outreach.submitted_year = ? AND GigData_Outreach.submitted_quarter = ? GROUP BY GigData_Outreach.oc_name ORDER BY GigData_Outreach.oc_name',
        [upworkYear, upworkQuarter, year, quarter],
        (err, res) => {
            if (err) {
                throw err;
            } else {
                cb(res);
            }
        })
    },

    selectBestPageQAQuarter: (upworkYear, upworkQuarter, year, quarter, cb) => {
        connection.query('SELECT GigData_Outreach.qa_owner_id AS id, GigData_Outreach.qa_name AS qaer_name, GigData_Outreach.qa_submitted_year, GigData_Outreach.qa_submitted_quarter, GigData_Outreach.type, UpworkSums.year, UpworkSums.quarter, UpworkSums.activity, CASE WHEN COUNT(GigData_Outreach.gigs_id) > 0 THEN COUNT(GigData_Outreach.gigs_id) ELSE 0 END AS gig_count, CASE WHEN SUM(GigData_Outreach.best_page_count) > 0 THEN SUM(GigData_Outreach.best_page_count) ELSE 0 END AS bestpages_collected, CASE WHEN UpworkSums.total_hours IS NULL THEN 0 ELSE UpworkSums.total_hours END AS total_hours, CASE WHEN UpworkSums.total_charges IS NULL THEN 0 ELSE UpworkSums.total_charges END AS total_charges FROM GigData_Outreach LEFT JOIN (SELECT userId, name, year, quarter, activity, sum(totalhours) AS total_hours, sum(totalcharges) AS total_charges FROM UpworkData WHERE activity = "BestPageGigs" AND year = ? AND quarter = ? GROUP BY userId) AS UpworkSums ON (UpworkSums.userId = GigData_Outreach.qa_owner_id) WHERE GigData_Outreach.type = "Gig::BestPageContact" AND GigData_Outreach.qa_submitted_year = ? AND GigData_Outreach.qa_submitted_quarter = ? GROUP BY GigData_Outreach.qa_name ORDER BY GigData_Outreach.qa_name',
        [upworkYear, upworkQuarter, year, quarter],
        (err, res) => {
            if (err) {
                throw err;
            } else {
                cb(res);
            }
        })
    },

        // ANNUAL

    selectGigDataBestPageTotal: (year, cb) => {
        connection.query('SELECT submitted_year, COUNT(gigs_id) AS gig_count, SUM(best_page_count) AS bestpages_collected FROM GigData_Outreach WHERE type = "Gig::BestPageContact" AND submitted_year = ? GROUP BY submitted_year',
        [year],
        (err, res) => {
            if (err) {
                throw err;
            } else {
                cb(res);
            }
        })
    },

    selectGigDataBestPageQATotal: (year, cb) => {
        connection.query('SELECT qa_submitted_year, COUNT(gigs_id) AS gig_count, SUM(best_page_count) AS bestpages_collected FROM GigData_Outreach WHERE type = "Gig::BestPageContact" AND qa_submitted_year = ? GROUP BY qa_submitted_year',
        [year],
        (err, res) => {
            if (err) {
                throw err;
            } else {
                cb(res);
            }
        })
    },

    selectUpworkDataBestPageYear: (year, cb) => {
        connection.query('SELECT userId, SUM(totalhours) AS totalhours, SUM(totalcharges) AS totalcharges FROM UpworkData WHERE activity = "BestPageGigs" AND year = ? GROUP BY year',
        [year],
        (err, res) => {
            if (err) {
                throw err;
            } else {  
                cb(res);
            }
        });
    },

    // COLLEGE CONTACT DATA

        // MONTH

    selectCollegeContact: (upworkYear, upworkMonth, year, month, cb) => {
        connection.query('SELECT GigData_Outreach.owner_id AS id, GigData_Outreach.oc_name, GigData_Outreach.submitted_year, GigData_Outreach.submitted_month, GigData_Outreach.type, UpworkSums.year, UpworkSums.month, UpworkSums.activity, CASE WHEN COUNT(GigData_Outreach.gigs_id) > 0 THEN COUNT(GigData_Outreach.gigs_id) ELSE 0 END AS gig_count, CASE WHEN SUM(GigData_Outreach.college_contacts_count) > 0 THEN SUM(GigData_Outreach.college_contacts_count) ELSE 0 END AS college_contacts_collected, CASE WHEN UpworkSums.total_hours IS NULL THEN 0 ELSE UpworkSums.total_hours END AS total_hours, CASE WHEN UpworkSums.total_charges IS NULL THEN 0 ELSE UpworkSums.total_charges END AS total_charges FROM GigData_Outreach LEFT JOIN (SELECT userId, name, year, month, activity, sum(totalhours) AS total_hours, sum(totalcharges) AS total_charges FROM UpworkData WHERE activity = "RankingContacts" AND year = ? AND month = ? GROUP BY userId) AS UpworkSums ON (UpworkSums.userId = GigData_Outreach.owner_id) WHERE GigData_Outreach.type = "Gig::CollegeRankingContact" AND GigData_Outreach.submitted_year = ? AND GigData_Outreach.submitted_month = ? GROUP BY GigData_Outreach.oc_name ORDER BY GigData_Outreach.oc_name',
        [upworkYear, upworkMonth, year, month],
        (err, res) => {
            if (err) {
                throw err;
            } else {
                cb(res);
            }
        })
    },

    selectCollegeContactQA: (upworkYear, upworkMonth, year, month, cb) => {
        connection.query('SELECT GigData_Outreach.qa_owner_id AS id, GigData_Outreach.qa_name AS qaer_name, GigData_Outreach.qa_submitted_year, GigData_Outreach.qa_submitted_month, GigData_Outreach.type, UpworkSums.year, UpworkSums.month, UpworkSums.activity, CASE WHEN COUNT(GigData_Outreach.gigs_id) > 0 THEN COUNT(GigData_Outreach.gigs_id) ELSE 0 END AS gig_count, CASE WHEN SUM(GigData_Outreach.college_contacts_count) > 0 THEN SUM(GigData_Outreach.college_contacts_count) ELSE 0 END AS college_contacts_collected, CASE WHEN UpworkSums.total_hours IS NULL THEN 0 ELSE UpworkSums.total_hours END AS total_hours, CASE WHEN UpworkSums.total_charges IS NULL THEN 0 ELSE UpworkSums.total_charges END AS total_charges FROM GigData_Outreach LEFT JOIN (SELECT userId, name, year, month, activity, sum(totalhours) AS total_hours, sum(totalcharges) AS total_charges FROM UpworkData WHERE activity = "RankingContacts" AND year = ? AND month = ? GROUP BY userId) AS UpworkSums ON (UpworkSums.userId = GigData_Outreach.qa_owner_id) WHERE GigData_Outreach.type = "Gig::CollegeRankingContact" AND GigData_Outreach.qa_submitted_year = ? AND GigData_Outreach.qa_submitted_month = ? GROUP BY GigData_Outreach.qa_name ORDER BY GigData_Outreach.qa_name',
        [upworkYear, upworkMonth, year, month],
        (err, res) => {
            if (err) {
                throw err;
            } else {
                cb(res);
            }
        })
    },

        // QUARTER

    selectCollegeContactQuarter: (upworkYear, upworkQuarter, year, quarter, cb) => {
        connection.query('SELECT GigData_Outreach.owner_id AS id, GigData_Outreach.oc_name, GigData_Outreach.submitted_year, GigData_Outreach.submitted_quarter, GigData_Outreach.type, UpworkSums.year, UpworkSums.quarter, UpworkSums.activity, CASE WHEN COUNT(GigData_Outreach.gigs_id) > 0 THEN COUNT(GigData_Outreach.gigs_id) ELSE 0 END AS gig_count, CASE WHEN SUM(GigData_Outreach.college_contacts_count) > 0 THEN SUM(GigData_Outreach.college_contacts_count) ELSE 0 END AS college_contacts_collected, CASE WHEN UpworkSums.total_hours IS NULL THEN 0 ELSE UpworkSums.total_hours END AS total_hours, CASE WHEN UpworkSums.total_charges IS NULL THEN 0 ELSE UpworkSums.total_charges END AS total_charges FROM GigData_Outreach LEFT JOIN (SELECT userId, name, year, quarter, activity, sum(totalhours) AS total_hours, sum(totalcharges) AS total_charges FROM UpworkData WHERE activity = "RankingContacts" AND year = ? AND quarter = ? GROUP BY userId) AS UpworkSums ON (UpworkSums.userId = GigData_Outreach.owner_id) WHERE GigData_Outreach.type = "Gig::CollegeRankingContact" AND GigData_Outreach.submitted_year = ? AND GigData_Outreach.submitted_quarter = ? GROUP BY GigData_Outreach.oc_name ORDER BY GigData_Outreach.oc_name',
        [upworkYear, upworkQuarter, year, quarter],
        (err, res) => {
            if (err) {
                throw err;
            } else {
                cb(res);
            }
        })
    },
    
    selectCollegeContactQAQuarter: (upworkYear, upworkQuarter, year, quarter, cb) => {
        connection.query('SELECT GigData_Outreach.qa_owner_id AS id, GigData_Outreach.qa_name AS qaer_name, GigData_Outreach.qa_submitted_year, GigData_Outreach.qa_submitted_quarter, GigData_Outreach.type, UpworkSums.year, UpworkSums.quarter, UpworkSums.activity, CASE WHEN COUNT(GigData_Outreach.gigs_id) > 0 THEN COUNT(GigData_Outreach.gigs_id) ELSE 0 END AS gig_count, CASE WHEN SUM(GigData_Outreach.college_contacts_count) > 0 THEN SUM(GigData_Outreach.college_contacts_count) ELSE 0 END AS college_contacts_collected, CASE WHEN UpworkSums.total_hours IS NULL THEN 0 ELSE UpworkSums.total_hours END AS total_hours, CASE WHEN UpworkSums.total_charges IS NULL THEN 0 ELSE UpworkSums.total_charges END AS total_charges FROM GigData_Outreach LEFT JOIN (SELECT userId, name, year, quarter, activity, sum(totalhours) AS total_hours, sum(totalcharges) AS total_charges FROM UpworkData WHERE activity = "RankingContacts" AND year = ? AND quarter = ? GROUP BY userId) AS UpworkSums ON (UpworkSums.userId = GigData_Outreach.qa_owner_id) WHERE GigData_Outreach.type = "Gig::CollegeRankingContact" AND GigData_Outreach.qa_submitted_year = ? AND GigData_Outreach.qa_submitted_quarter = ? GROUP BY GigData_Outreach.qa_name ORDER BY GigData_Outreach.qa_name',
        [upworkYear, upworkQuarter, year, quarter],
        (err, res) => {
            if (err) {
                throw err;
            } else {
                cb(res);
            }
        })
    },   

        // ANNUAL

    selectGigDataCollegeContactTotal: (year, cb) => {
        connection.query('SELECT submitted_year, COUNT(gigs_id) AS gig_count, SUM(college_contacts_count) AS college_contacts_collected FROM GigData_Outreach WHERE type = "Gig::CollegeRankingContact" AND submitted_year = ? GROUP BY submitted_year',
        [year],
        (err, res) => {
            if (err) {
                throw err;
            } else {
                cb(res);
            }
        })
    },

    selectGigDataCollegeContactQATotal: (year, cb) => {
        connection.query('SELECT qa_submitted_year, COUNT(gigs_id) AS gig_count, SUM(college_contacts_count) AS college_contacts_collected FROM GigData_Outreach WHERE type = "Gig::CollegeRankingContact" AND qa_submitted_year = ? GROUP BY qa_submitted_year',
        [year],
        (err, res) => {
            if (err) {
                throw err;
            } else {
                cb(res);
            }
        })
    },

    selectUpworkDataCollegeContactYear: (year, cb) => {
        connection.query('SELECT userId, SUM(totalhours) AS totalhours, SUM(totalcharges) AS totalcharges FROM UpworkData WHERE activity = "RankingContacts" AND year = ? GROUP BY year',
        [year],
        (err, res) => {
            if (err) {
                throw err;
            } else {  
                cb(res);
            }
        });
    },

    // INDIVIDUAL CONTRACTOR REPORT

    getName: (contractorid, cb) => {
        connection.query(
            'SELECT id, name FROM Users WHERE id = ?',
            [contractorid],
            (err, res) => {
                if (err) {
                    throw err;
                } else {
                    cb(res);
                }
            }
        )
    },

    // // GETTING DISTINCT GIG TYPES

    getContactGigTypes: (contractorid, cb ) => {
        connection.query(
        'SELECT DISTINCT(type) FROM GigData_Outreach WHERE owner_id = ? OR qa_owner_id = ? '
        +
        'UNION '
        +
        'SELECT DISTINCT(type) FROM GigData WHERE owner_id = ? OR qa_owner_id = ?',
        [contractorid, contractorid, contractorid, contractorid],
        (err, res) => {
            if (err) {
                throw err;
            } else {
                cb(res);
            }
        });
    },

    getIndividualDegree: (contractorid, cb) => {
        connection.query(`
            SELECT 
            f.month, 
            f.year, 
            SUM(f.degrees+f.qadegrees) as degree_sum, 
            total_hours, 
            total_cost

            FROM (
            SELECT 
            a.month, 
            a.year, 
            total_hours, 
            total_cost,
            CASE WHEN oc_degree_sum is NULL then 0 else oc_degree_sum end as degrees,
            CASE WHEN qa_degree_sum is NULL then 0 else qa_degree_sum end as qadegrees
                        
            FROM (
            SELECT 
            g1.submitted_month AS month, 
            g1.submitted_year AS year, 
            g1.type AS type 
            FROM GigData g1 
            WHERE g1.owner_id = ? 
            GROUP BY CONCAT(g1.submitted_month, g1.submitted_year) 

            UNION 

            SELECT g2.qa_submitted_month AS month, 
            g2.qa_submitted_year AS year, 
            g2.type AS type 
            FROM GigData g2 
            WHERE g2.qa_owner_id = ? 
            GROUP BY CONCAT(g2.qa_submitted_month, g2.qa_submitted_year)) AS a 
                        
            LEFT JOIN (
            SELECT 
            month, 
            year, 
            SUM(totalhours + manualhours) AS total_hours, 
            SUM(totalcharges + manualcharges) AS total_cost 
            FROM UpworkData 
            WHERE userId = ? 
            AND activity = "MegaDegreeCollection" 
            GROUP BY CONCAT(year, month)) AS upwork ON CONCAT(upwork.month, upwork.year) = CONCAT(a.month, a.year) 
                        
            LEFT JOIN (
            SELECT 
            g3.submitted_month AS oc_month, 
            g3.submitted_year AS oc_year, 
            SUM(g3.degree_gig_count) AS oc_degree_sum 
            FROM GigData g3 
            WHERE g3.owner_id = ? 
            AND g3.type = "Gig::DegreeCollection" 
            GROUP BY CONCAT(g3.submitted_month, g3.submitted_year)) AS oc_table ON CONCAT(oc_table.oc_month, oc_table.oc_year) = CONCAT(a.month, a.year) 
                        
            LEFT JOIN (
            SELECT 
            g4.qa_submitted_month AS qa_month, 
            g4.qa_submitted_year AS qa_year, 
            SUM(g4.degree_gig_count) AS qa_degree_sum 
            FROM GigData g4 
            WHERE g4.qa_owner_id = ? 
            AND g4.type = "Gig::DegreeCollection" 
            GROUP BY CONCAT(g4.qa_submitted_month, g4.qa_submitted_year)) AS qa_table ON CONCAT(qa_table.qa_month, qa_table.qa_year) = CONCAT(a.month, a.year) 
                        
            WHERE a.type = "Gig::DegreeCollection" 
            ) AS f

            GROUP BY CONCAT(f.month, f.year) 
            ORDER BY f.year,f.month`,
            [contractorid, contractorid, contractorid, contractorid, contractorid],
            (err, res) => {
                if (err) {
                    throw err 
                } else {
                    cb(res);
                }
            }
        )
    },

    getIndividualTuition: (contractorid, cb) => {
        connection.query(`
            SELECT 
            f.month, 
            f.year, 
            SUM(f.tuitions+f.qatuitions) as tuition_sum, 
            total_hours, 
            total_cost
            
            FROM (
            SELECT 
            a.month, 
            a.year, 
            total_hours, 
            total_cost,
            CASE WHEN oc_tuition_sum is NULL then 0 else oc_tuition_sum end as tuitions,
            CASE WHEN qa_tuition_sum is NULL then 0 else qa_tuition_sum end as qatuitions
            
            FROM (
            SELECT 
            g1.submitted_month AS month, 
            g1.submitted_year AS year, 
            g1.type AS type 
            FROM GigData g1 
            WHERE g1.owner_id = ? 
            GROUP BY CONCAT(g1.submitted_month, g1.submitted_year) 
            
            UNION 
            
            SELECT g2.qa_submitted_month AS month, 
            g2.qa_submitted_year AS year, 
            g2.type AS type 
            FROM GigData g2 
            WHERE g2.qa_owner_id = ? 
            GROUP BY CONCAT(g2.qa_submitted_month, g2.qa_submitted_year)) AS a 
                        
            LEFT JOIN (
            SELECT 
            month, 
            year, 
            SUM(totalhours + manualhours) AS total_hours, 
            SUM(totalcharges + manualcharges) AS total_cost 
            FROM UpworkData 
            WHERE userId = ? 
            AND activity = "CollegeTuition" 
            GROUP BY CONCAT(year, month)) AS upwork ON CONCAT(upwork.month, upwork.year) = CONCAT(a.month, a.year) 
                        
            LEFT JOIN (
            SELECT 
            g3.submitted_month AS oc_month, 
            g3.submitted_year AS oc_year, 
            SUM(g3.tuition_degree_count) AS oc_tuition_sum 
            FROM GigData g3 
            WHERE g3.owner_id = ? 
            AND g3.type = "Gig::CollegeTuitionCollection" 
            GROUP BY CONCAT(g3.submitted_month, g3.submitted_year)) AS oc_table ON CONCAT(oc_table.oc_month, oc_table.oc_year) = CONCAT(a.month, a.year) 
                        
            LEFT JOIN (
            SELECT 
            g4.qa_submitted_month AS qa_month, 
            g4.qa_submitted_year AS qa_year, 
            SUM(g4.tuition_degree_count) AS qa_tuition_sum 
            FROM GigData g4 
            WHERE g4.qa_owner_id = ? 
            AND g4.type = "Gig::CollegeTuitionCollection" 
            GROUP BY CONCAT(g4.qa_submitted_month, g4.qa_submitted_year)) AS qa_table ON CONCAT(qa_table.qa_month, qa_table.qa_year) = CONCAT(a.month, a.year) 
                        
            WHERE a.type = "Gig::CollegeTuitionCollection" 
            ) AS f
            
            GROUP BY CONCAT(f.month, f.year) 
            ORDER BY f.year,f.month`,
            [contractorid, contractorid, contractorid, contractorid, contractorid],
            (err, res) => {
                if (err) {
                    throw err 
                } else {
                    cb(res);
                }
            }
        )
    },

    getIndividualCollegeContact: (contractorid, cb) => {
        connection.query(
            'SELECT gig.submitted_month AS month, gig.submitted_year AS year, SUM(gig.college_contacts_count) AS college_contacts_count, upwork.total_hours AS total_hours, upwork.total_cost AS total_cost FROM GigData_Outreach gig '
            +
            'LEFT JOIN (SELECT year,month, SUM(totalhours + manualhours) AS total_hours, SUM(totalcharges + manualcharges) AS total_cost FROM UpworkData WHERE userId = 26847 AND activity = "RankingContacts" GROUP BY CONCAT(year, month)) AS upwork ON CONCAT(upwork.year, upwork.month) = CONCAT(gig.submitted_year, gig.submitted_month) '
            +
            'WHERE gig.owner_id = 26847 AND gig.type = "Gig::CollegeRankingContact" GROUP BY CONCAT(gig.submitted_year, gig.submitted_month) ORDER BY gig.submitted_year, gig.submitted_month',
            [contractorid, contractorid],
            (err, res) => {
                if (err) {
                    throw err
                } else {
                    cb(res);
                }
            }
        )
    },

    getIndividualBestPage: (contractorid, cb) => {
        connection.query(
            'SELECT gig.submitted_month AS month, gig.submitted_year AS year, SUM(gig.best_page_count) AS best_page_count, upwork.total_hours AS total_hours, upwork.total_cost AS total_cost FROM GigData_Outreach gig '
            +
            'LEFT JOIN (SELECT year,month, SUM(totalhours + manualhours) AS total_hours, SUM(totalcharges + manualcharges) AS total_cost FROM UpworkData WHERE userId = 26847 AND activity LIKE "BestPageGigs%%" GROUP BY CONCAT(year, month)) AS upwork ON CONCAT(upwork.year, upwork.month) = CONCAT(gig.submitted_year, gig.submitted_month) '
            +
            'WHERE gig.owner_id = 26847 AND gig.type = "Gig::BestPageContact" GROUP BY CONCAT(gig.submitted_year, gig.submitted_month) ORDER BY gig.submitted_year, gig.submitted_month',
            [contractorid, contractorid],
            (err, res) => {
                if (err) {
                    throw err
                } else {
                    cb(res);
                }
            }
        )
    },

    getAllGigTotal: (cb) => {
        connection.query(
            'SELECT gig.type, SUM(gig.degree_gig_count) AS degree_gig_count, SUM(gig.tuition_degree_count) AS tuition_degree_count, 0 AS college_contact_count, 0 AS best_page_count FROM `GigData` gig WHERE gig.type IN ("Gig::DegreeCollection", "Gig::CollegeTuitionCollection") GROUP BY gig.type ' 
            +
            'UNION ' 
            +
            'SELECT outreach.type, 0, 0, SUM(outreach.college_contacts_count) AS college_contact_count, SUM(outreach.best_page_count) AS best_page_count FROM `GigData_Outreach` outreach WHERE outreach.type IN ("Gig::CollegeRankingContact", "Gig::BestPageContact") GROUP BY outreach.type',
            (err, res) => {
                if (err) {
                    throw err
                } else {
                    cb(res);
                }
            }
        )
    },

    getAllUsers: (cb) => {
        connection.query(
            'SELECT DISTINCT(name) AS name, userId AS id FROM `UpworkData` WHERE userId > 0 AND year > 2017 GROUP BY name ORDER BY name',
            (err, res) => {
                if (err) {
                    throw err
                } else {
                    cb(res);
                }
            }
        )
    }



};

module.exports = orm;

