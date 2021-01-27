const { selectGigDataType } = require('../config/orm');
const orm = require('../config/orm');

let gigData = {
  
  selectAllGigData: (cb) => {
    orm.selectAll('GigData', res => {
      cb(res);
    })
  },

  // DEGREE COLLECTION
  
    // MONTH

  selectGigDataDegree: (upworkYear, upworkMonth, year, month, cb) => {
    orm.selectGigDataDegree(upworkYear, upworkMonth, year, month, res => {
      cb(res);
    });
  },

  selectGigDataDegreeQA: (upworkYear, upworkMonth, year, month, cb) => {
    orm.selectGigDataDegreeQA(upworkYear, upworkMonth, year, month, res => {
      cb(res);
    });
  },

    // QUARTER

  selectGigDataDegreeQuarter: (upworkYear, upworkQuarter, year, quarter, cb) => {
    orm.selectGigDataDegreeQuarter(upworkYear, upworkQuarter, year, quarter, res => {
      cb(res);
    });
  },

  selectGigDataDegreeQAQuarter: (upworkYear, upworkQuarter, year, quarter, cb) => {
    orm.selectGigDataDegreeQAQuarter(upworkYear, upworkQuarter, year, quarter, res => {
      cb(res);
    });
  },
  

  selectGigDataDegreeTotal: (year, cb) => {
    orm.selectGigDataDegreeTotal(year, res => {
      cb(res);
    })
  },

  selectGigDataDegreeQATotal: (year, cb) => {
    orm.selectGigDataDegreeQATotal(year, res => {
      cb(res);
    })
  },

  // TUITION COLLECTION

    // MONTH

  selectGigDataTuition: (upworkYear, upworkMonth, year, month, cb) => {
    orm.selectGigDataTuition(upworkYear, upworkMonth, year, month, res => {
      cb(res);
    });
  },


  selectGigDataTuitionQA: (upworkYear, upworkMonth, year, month, cb) => {
    orm.selectGigDataTuitionQA(upworkYear, upworkMonth, year, month, res => {
      cb(res);
    });
  },

    // QUARTER

  selectGigDataTuitionQuarter: (upworkYear, upworkQuarter, year, quarter, cb) => {
    orm.selectGigDataTuitionQuarter(upworkYear, upworkQuarter, year, quarter, res => {
      cb(res);
    });
  },

  selectGigDataTuitionQAQuarter: (upworkYear, upworkQuarter, year, quarter, cb) => {
    orm.selectGigDataTuitionQAQuarter(upworkYear, upworkQuarter, year, quarter, res => {
      cb(res);
    });
  },

    // ANNUAL

  selectGigDataTuitionTotal: (year, cb) => {
    orm.selectGigDataTuitionTotal(year, res => {
      cb(res);
    })
  },


  selectGigDataTuitionQATotal: (year, cb) => {
    orm.selectGigDataTuitionQATotal(year, res => {
      cb(res);
    })
  },


  // INDIVIDUAL CONTRACTOR START

  // // GET NAME

  getName: (contractorid, cb) => {
    orm.getName(contractorid, res => {
      cb(res);
    })
  },

  // // GET DISTINT GIG TYPES

  getContactGigTypes: (contractorid, cb) => {
    orm.getContactGigTypes(contractorid, res => {
      cb(res);
    })
  },

  // // GET YEAR-MONTH DEGREE GIG AND UPWORK DATA 

  getIndividualDegree: (contractorid, cb) => {
    orm.getIndividualDegree(contractorid, res => {
      cb(res);
    })
  },

  // // GET YEAR-MONTH TUITION GIG AND UPWORK DATA

  getIndividualTuition: (contractorid, cb) => {
    orm.getIndividualTuition(contractorid, res => {
      cb(res);
    })
  },

  getAllGigTotal: (cb) => {
    orm.getAllGigTotal(res => {
      cb(res);
    })
  },

  getAllUsers: (cb) => {
    orm.getAllUsers(res => {
      cb(res);
    })
  }






};

module.exports = gigData
