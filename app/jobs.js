/**
 * This file provide methods to initialize and update the Jobs.
 */

/**
 * Initialize a job to be stored in the database
 *
 * @param {Object} job The job returned from the Jenkins API.
 * @return {Object} The job with the default values for the database
 */
const initializeJob = (job) => {
  job.category = 'others';
  job.priority = 'low';
  job.project = 'others';
  job.sla = '1w';
  return job;
};

/**
 * Setup the jobs in the database
 *
 * @param {Object} jenkins A jenkins-api lib instance
 * @param {Object} db A NeDB instance
 */
const setup = (jenkins, db) => {
  console.log('Initializing Jenkins data');

  db.count({}, (err, count) => {
    if (err) {
      console.error('Error counting the number of elements');
    }

    if (count === 0) {
      console.log('Creating the database...');

      jenkins.all_jobs((err, data) => {
        if (err) {
          console.error(`There was an error contacting your Jenkins instance`);
          return;
        }

        const parsedData = data.map(initializeJob);
        db.insert(parsedData, (err, docs) => {
          if (err) {
            console.error('Error inserting the documents');
          }
          console.log(`Added ${docs.length} Jenkins Jobs to the database`);
        });
      });
    }
  });
};

/**
 * Sync the jobs with the Jenkins database
 *
 * @param {Object} jenkins A jenkins-api lib instance
 * @param {Object} db A NeDB instance
 */
const update = (jenkins, db) => {
  console.log('Updating jobs...');
  jenkins.all_jobs((err, data) => {
    if (err) {
      console.error(`There was an error contacting your Jenkins instance`);
      return;
    }

    // Initialize or udpate.
    data.forEach(function(job) {
      db.find({name: job.name}, (err, docs) => {
        if (!err && !docs) {
          job = initializeJob(job);
          db.insert(job, (err, docs) => {
            if (err) {
              console.error('Error inserting the documents');
            }
            console.log(`Added a new job: ${job.name}`);
          });
        } else {
          // Update the elements
          db.update({name: job.name}, {$set: {color: job.color}});
        }
      });
    }, this);
  });
};

/**
 * Initialize the configuration and return the methods.
 *
 * @param {Object} jenkins A jenkins-api lib instance
 * @param {Object} db A NeDB instance
 * @return {Object} All the methods to setup and update jobs
 */
const jobs = (jenkins, db) => {
  return {
    setup: () => setup(jenkins, db),
    update: () => update(jenkins, db),
  };
};

module.exports = jobs;
