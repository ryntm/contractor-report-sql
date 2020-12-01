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
  }


};

module.exports = gigData

// /* eslint-disable camelcase */
// module.exports = function(sequelize, DataTypes) {
//   const GigData = sequelize.define(
//     "GigData",
//     {
//       gig_id: {
//         type: DataTypes.INTEGER
//       },
//       type: {
//         type: DataTypes.STRING
//       },
//       submitted_on: {
//         type: DataTypes.STRING
//       },
//       submitted_month: {
//         type: DataTypes.INTEGER
//       },
//       submitted_year: {
//         type: DataTypes.INTEGER
//       },
//       submitted_quarter: {
//         type: DataTypes.INTEGER
//       },
//       submitted_week: {
//         type: DataTypes.INTEGER
//       },
//       qa_submitted_on: {
//         type: DataTypes.STRING
//       },
//       qa_submitted_month: {
//         type: DataTypes.INTEGER
//       },
//       qa_submitted_year: {
//         type: DataTypes.INTEGER
//       },
//       qa_submitted_quarter: {
//         type: DataTypes.INTEGER
//       },
//       qa_submitted_week: {
//         type: DataTypes.INTEGER
//       },
//       owner_id: {
//         type: DataTypes.INTEGER
//       },
//       oc_name: {
//         type: DataTypes.STRING
//       },
//       qa_owner_id: {
//         type: DataTypes.INTEGER
//       },
//       qaer_name: {
//         type: DataTypes.STRING
//       },
//       oc_guide_admin: {
//         type: DataTypes.INTEGER
//       },
//       qa_guide_admin: {
//         type: DataTypes.INTEGER
//       },
//       qa_edits: {
//         type: DataTypes.INTEGER
//       },
//       manager_edits: {
//         type: DataTypes.INTEGER
//       },
//       college_id: {
//         type: DataTypes.INTEGER
//       },
//       word_count_college_description: {
//         type: DataTypes.INTEGER
//       },
//       word_count_rankings: {
//         type: DataTypes.INTEGER
//       },
//       word_count_writings: {
//         type: DataTypes.INTEGER
//       },
//       degree_gig_count: {
//         type: DataTypes.INTEGER
//       },
//       tuition_degree_count: {
//         type: DataTypes.INTEGER
//       },
//       tuition_cert_count: {
//         type: DataTypes.INTEGER
//       },
//       classname_count: {
//         type: DataTypes.INTEGER
//       }
//     },
//     {
//       freezeTableName: true
//     }
//   );
//   return GigData;
// };
