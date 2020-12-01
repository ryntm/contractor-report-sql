/* eslint-disable camelcase */
var fs = require("fs");
var csv = require("csv");
var db = require("../models");

let countErr = 0;

var input = fs.createReadStream("./db/csv/admin-gig-data.csv");
var parser = csv.parse({
  // what to parse by
  delimiter: ",",
  // object literals instead of arrays
  columns: true
});

var transform = csv.transform(function(row) {
  // each row
  const gigdata = {
    gig_id: row.id,
    type: row.type,
    submitted_on: row.submitted_on,
    submitted_month: row.submitted_month,
    submitted_year: row.submitted_year,
    submitted_quarter: row.submitted_quarter,
    submitted_week: row.submitted_week,
    qa_submitted_on: row.qa_submitted_on,
    qa_submitted_month: row.qa_submitted_month,
    qa_submitted_year: row.qa_submitted_year,
    qa_submitted_quarter: row.qa_submitted_quarter,
    qa_submitted_week: row.qa_submitted_week,
    owner_id: row.owner_id,
    oc_name: row.oc_name,
    qa_owner_id: row.qa_owner_id,
    qaer_name: row.qaer_name,
    oc_guide_admin: row.oc_guide_admin,
    qa_guide_admin: row.qa_guide_admin,
    qa_edits: row.qa_edits,
    manager_edits: row.manager_edits,
    college_id: row.college_id,
    word_count_college_description: row.word_count_college_description,
    word_count_rankings: row.word_count_rankings,
    word_count_writings: row.word_count_writings,
    degree_gig_count: row.degree_gig_count,
    tuition_degree_count: row.tuition_degree_count,
    tuition_cert_count: row.tuition_cert_count,
    classname_count: row.classname_count
  };
  // seeds in each row into the Pokemon model
  db.GigData.create(gigdata)
    .then(function() {
      // console.log('Record created')
    })
    .catch(function() {
      countErr++;
      // console.log('Error encountered: ' + err)
    });
});

input.pipe(parser).pipe(transform); // async?
if (countErr > 0) {
  console.log("There is an error or table already exists");
} else {
  console.log("Gig-data table created!");
}
