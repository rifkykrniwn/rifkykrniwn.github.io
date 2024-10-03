data = {
    "education": [
          {
              "title": "Bachelor of Information System.",
              "year": "2020 - 2024",
              "academy": "Universitas Mercu Buana Yogyakarta"
          }
      ]
  }
  
  for (var key in data) {
      for (var i = 0; i < data[key].length; i++) {
        var title = data[key][i].title;
        var year = data[key][i].year;
        var academy = data[key][i].academy;
            
        var badge = document.createElement('div');
        badge.className = 'resume-item';
        badge.innerHTML = "<h4>"+title+"</h4> "+
            "<h5>"+year+"</h5>"+
            "<p><em>"+academy+"</em></p>";

        document.getElementById(key).appendChild(badge);
      }
  }