var apiKey = require('./../.env').apiKey;

exports.Repo = function(){
}

exports.Repo.prototype.getRepo = function(gitUser) {
  $.get('https://api.github.com/users/' + gitUser + '/repos?access_token=' + apiKey)
  .then(function(response) {
// need to figure out for or forEach loop on this part.
    $('.showRepo').append("Here are 30 of " + gitUser + "'s Public Repositories (in Alphabetical Order): ");
    $('.showRepoName1').append(response[0].name + ": Created on: " + response[0].created_at);
      $('.showRepoDiscription1').append(response[0].description);
      $('.showRepoLink1').append(response[0].svn_url);
    $('.showRepoName2').append(response[1].name + ": Created on: " + response[1].created_at);
      $('.showRepoDiscription2').append(response[1].description);
      $('.showRepoLink2').append(response[1].svn_url);
    $('.showRepoName3').append(response[2].name + ": Created on: " + response[2].created_at);
      $('.showRepoDiscription3').append(response[2].description);
      $('.showRepoLink3').append(response[2].svn_url);
    $('.showRepoName4').append(response[3].name + ": Created on: " + response[3].created_at);
      $('.showRepoDiscription4').append(response[3].description);
      $('.showRepoLink4').append(response[3].svn_url);
    $('.showRepoName5').append(response[4].name + ": Created on: " + response[4].created_at);
      $('.showRepoDiscription5').append(response[4].description);
      $('.showRepoLink5').append(response[4].svn_url);
    $('.showRepoName6').append(response[5].name + ": Created on: " + response[5].created_at);
      $('.showRepoDiscription6').append(response[5].description);
      $('.showRepoLink6').append(response[5].svn_url);
    $('.showRepoName7').append(response[6].name + ": Created on: " + response[6].created_at);
      $('.showRepoDiscription7').append(response[6].description);
      $('.showRepoLink7').append(response[6].svn_url);
    $('.showRepoName8').append(response[7].name + ": Created on: " + response[7].created_at);
      $('.showRepoDiscription8').append(response[7].description);
      $('.showRepoLink8').append(response[7].svn_url);
    $('.showRepoName9').append(response[8].name + ": Created on: " + response[8].created_at);
      $('.showRepoDiscription9').append(response[8].description);
      $('.showRepoLink9').append(response[8].svn_url);
    $('.showRepoName10').append(response[9].name + ": Created on: " + response[9].created_at);
      $('.showRepoDiscription10').append(response[9].description);
      $('.showRepoLink10').append(response[9].svn_url);
    $('.showRepoName11').append(response[10].name + ": Created on: " + response[10].created_at);
      $('.showRepoDiscription11').append(response[10].description);
      $('.showRepoLink11').append(response[10].svn_url);
    $('.showRepoName12').append(response[11].name + ": Created on: " + response[11].created_at);
      $('.showRepoDiscription12').append(response[11].description);
      $('.showRepoLink12').append(response[11].svn_url);
    $('.showRepoName13').append(response[12].name + ": Created on: " + response[12].created_at);
      $('.showRepoDiscription13').append(response[12].description);
      $('.showRepoLink13').append(response[12].svn_url);
    $('.showRepoName14').append(response[13].name + ": Created on: " + response[13].created_at);
      $('.showRepoDiscription14').append(response[13].description);
      $('.showRepoLink14').append(response[13].svn_url);
    $('.showRepoName15').append(response[14].name + ": Created on: " + response[14].created_at);
      $('.showRepoDiscription15').append(response[14].description);
      $('.showRepoLink15').append(response[14].svn_url);
    $('.showRepoName16').append(response[15].name + ": Created on: " + response[15].created_at);
      $('.showRepoDiscription15').append(response[15].description);
      $('.showRepoLink16').append(response[15].svn_url);
    $('.showRepoName17').append(response[16].name + ": Created on: " + response[16].created_at);
      $('.showRepoDiscription17').append(response[16].description);
      $('.showRepoLink17').append(response[16].svn_url);
    $('.showRepoName18').append(response[17].name + ": Created on: " + response[17].created_at);
      $('.showRepoDiscription18').append(response[17].description);
      $('.showRepoLink18').append(response[17].svn_url);
    $('.showRepoName19').append(response[18].name + ": Created on: " + response[18].created_at);
      $('.showRepoDiscription19').append(response[18].description);
      $('.showRepoLink19').append(response[18].svn_url);
    $('.showRepoName20').append(response[19].name + ": Created on: " + response[19].created_at);
      $('.showRepoDiscription20').append(response[19].description);
      $('.showRepoLink20').append(response[19].svn_url);
    $('.showRepoName21').append(response[20].name + ": Created on: " + response[20].created_at);
      $('.showRepoDiscription21').append(response[20].description);
      $('.showRepoLink21').append(response[20].svn_url);
    $('.showRepoName22').append(response[21].name + ": Created on: " + response[21].created_at);
      $('.showRepoDiscription22').append(response[21].description);
      $('.showRepoLink22').append(response[21].svn_url);
    $('.showRepoName23').append(response[22].name + ": Created on: " + response[22].created_at);
      $('.showRepoDiscription23').append(response[22].description);
      $('.showRepoLink23').append(response[22].svn_url);
    $('.showRepoName24').append(response[23].name + ": Created on: " + response[23].created_at);
      $('.showRepoDiscription24').append(response[23].description);
      $('.showRepoLink24').append(response[23].svn_url);
    $('.showRepoName25').append(response[24].name + ": Created on: " + response[24].created_at);
      $('.showRepoDiscription25').append(response[24].description);
      $('.showRepoLink25').append(response[24].svn_url);
    $('.showRepoName26').append(response[25].name + ": Created on: " + response[25].created_at);
      $('.showRepoDiscription26').append(response[25].description);
      $('.showRepoLink26').append(response[25].svn_url);
    $('.showRepoName27').append(response[26].name + ": Created on: " + response[26].created_at);
      $('.showRepoDiscription27').append(response[26].description);
      $('.showRepoLink27').append(response[26].svn_url);
    $('.showRepoName28').append(response[27].name + ": Created on: " + response[27].created_at);
      $('.showRepoDiscription28').append(response[27].description);
      $('.showRepoLink28').append(response[27].svn_url);
    $('.showRepoName29').append(response[28].name + ": Created on: " + response[28].created_at);
      $('.showRepoDiscription29').append(response[28].description);
      $('.showRepoLink29').append(response[28].svn_url);
    $('.showRepoName30').append(response[29].name + ": Created on: " + response[29].created_at);
      $('.showRepoDiscription30').append(response[29].description);
      $('.showRepoLink30').append(response[29].svn_url);
  })
  .fail(function(error) {
    $('.showRepo').text(error.responseJSON.message);
  });
}