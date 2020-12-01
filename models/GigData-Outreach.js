const { selectGigDataType } = require('../config/orm');
const orm = require('../config/orm');

let gigDataOutreach = {
  // OUTREACH

  // BEST PAGE GIGS

    selectAllOutreach: (table, cb) => {
        orm.selectAllOutreach(table, res => {
            cb(res);
        })
    },

    // BEST PAGE

        // MONTH

    selectBestPage: (upworkYear, upworkMonth, year, month, cb) => {
        orm.selectBestPage(upworkYear, upworkMonth, year, month, res => {
        cb(res);
        })
    },


    selectBestPageQA: (upworkYear, upworkMonth, year, month, cb) => {
        orm.selectBestPageQA(upworkYear, upworkMonth, year, month, res => {
        cb(res);
        })
    },

        // QUARTER

    selectBestPageQuarter: (upworkYear, upworkMonth, year, month, cb) => {
        orm.selectBestPageQuarter(upworkYear, upworkMonth, year, month, res => {
        cb(res);
        })
    },

    selectBestPageQAQuarter: (upworkYear, upworkMonth, year, month, cb) => {
        orm.selectBestPageQAQuarter(upworkYear, upworkMonth, year, month, res => {
        cb(res);
        })
    },

        // ANNUAL

    selectGigDataBestPageTotal: (year, cb) => {
        orm.selectGigDataBestPageTotal(year, res => {
            cb(res);
        })
    },

    selectGigDataBestPageQATotal: (year, cb) => {
        orm.selectGigDataBestPageQATotal(year, res => {
            cb(res);
        })
    },

    // COLLEGE CONTACTS

        // MONTH

    selectCollegeContact: (upworkYear, upworkMonth, year, month, cb) => {
        orm.selectCollegeContact(upworkYear, upworkMonth, year, month, res => {
            cb(res);
        })
    },

    selectCollegeContactQA: (upworkYear, upworkMonth, year, month, cb) => {
        orm.selectCollegeContactQA(upworkYear, upworkMonth, year, month, res => {
            cb(res);
        })
    },

        // QUARTER

    selectCollegeContactQuarter: (upworkYear, upworkMonth, year, month, cb) => {
        orm.selectCollegeContactQuarter(upworkYear, upworkMonth, year, month, res => {
            cb(res);
        })
    },

    selectCollegeContactQAQuarter: (upworkYear, upworkMonth, year, month, cb) => {
        orm.selectCollegeContactQAQuarter(upworkYear, upworkMonth, year, month, res => {
            cb(res);
        })
    },

        // ANNUAL

    selectGigDataCollegeContactTotal: (year, cb) => {
        orm.selectGigDataCollegeContactTotal(year, res => {
            cb(res);
        })
    },

    selectGigDataCollegeContactQATotal: (year, cb) => {
        orm.selectGigDataCollegeContactQATotal(year, res => {
            cb(res);
        })
    }


}



module.exports = gigDataOutreach