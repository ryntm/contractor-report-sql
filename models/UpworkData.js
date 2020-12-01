const orm = require('../config/orm')

var upworkData = {

  selectAllUpworkData: (cb) => {
    orm.selectAll('UpworkData', res => {
      cb(res);
    })
  },

  selectUpworkDataDegree: (year, month, cb) => {
    orm.selectUpworkDataDegree(year, month, res => {
      cb(res);
    });
  },

  selectUpworkDataDegreeYear: (year, cb) => {
    orm.selectUpworkDataDegreeYear(year, res => {
      cb(res);
    });
  },

  selectUpworkDataTuition: (year, month, cb) => {
    orm.selectUpworkDataTuition(year, month, res => {
      cb(res);
    })
  },

  selectUpworkDataTuitionYear: (year, cb) => {
    orm.selectUpworkDataTuitionYear(year, res => {
      cb(res);
    })
  },

  selectUpworkDataBestPageYear: (year, cb) => {
    orm.selectUpworkDataBestPageYear(year, res => {
      cb(res);
    })
  },

  selectUpworkDataCollegeContactYear: (year, cb) => {
    orm.selectUpworkDataCollegeContactYear(year, res => {
      cb(res);
    })
  }


}

module.exports = upworkData
// sequelize information
/* eslint-disable camelcase */
// module.exports = function(sequelize, DataTypes) {
//   const UpworkData = sequelize.define(
//     "UpworkData",
//     {
//       date: {
//         type: DataTypes.STRING
//       },
//       year: {
//         type: DataTypes.INTEGER
//       },
//       quarter: {
//         type: DataTypes.INTEGER
//       },
//       month: {
//         type: DataTypes.INTEGER
//       },
//       team: {
//         type: DataTypes.STRING
//       },
//       name: {
//         type: DataTypes.STRING
//       },
//       username: {
//         type: DataTypes.STRING
//       },
//       agency: {
//         type: DataTypes.STRING
//       },
//       contract: {
//         type: DataTypes.STRING
//       },
//       activity: {
//         type: DataTypes.STRING
//       },
//       activitydescription: {
//         type: DataTypes.STRING
//       },
//       type: {
//         type: DataTypes.STRING
//       },
//       totalhours: {
//         type: DataTypes.INTEGER
//       },
//       manualhours: {
//         type: DataTypes.INTEGER
//       },
//       totalcharges: {
//         type: DataTypes.INTEGER
//       },
//       manualcharges: {
//         type: DataTypes.INTEGER
//       },
//       userId: {
//         type: DataTypes.INTEGER
//       }
//     },
//     {
//       freezeTableName: true
//     }
//   );
//   return UpworkData;
// };

