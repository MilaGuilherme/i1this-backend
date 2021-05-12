exports.seed = function (knex) {
  return knex('user_accepted_proposal').del()
    .then(function () {
      return knex('user_accepted_proposal').insert([
        {
          id: 1,
          proposal_id: 1,
          user_id: 1,
          buying_intent: false,
          accepted_at: new Date(),
        }])
    })
};