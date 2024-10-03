data = {
	experience: [
		{
			title: "Technician (Internship)",
			year: "Januari 2018 - Maret 2018",
			address: "Dedas Computer Yogyakarta",
			job_desk: [
				"Repairing Laptop and Computer Damage",
				"Reinstalling Operating Systems and Software",
				"Maintenance and Optimization of Computer Performance"
			],
		},
		{
			title: "Frontend Developer (Internship)",
			year: "Maret 2023 - Juli 2023",
			address: "PT. Dua Empat Tujuh Yogyakarta",
			job_desk: [
				"Developing Frontend Components with Vue.js",
				"API Implementation and Data Binding",
				"Web Application Testing and Debugging"
			],
		},
		{
			title: "Digital Marketing (Internship)",
			year: "Juli 2023 - Oktober 2023",
			address: "PT. Dua Empat Tujuh Yogyakarta",
			job_desk: [
				"Video Content Production for Marketing Campaigns",
				"Scripting and Voiceovers for Promotional Materials",
				"Developing Creative Marketing Strategies"
			],
		},
	],
};

for (var key in data) {
    
	for (var i = 0; i < data[key].length; i++) {
		var title = data[key][i].title;
		var year = data[key][i].year;
		var address = data[key][i].address;
		var jobDesks = data[key][i].job_desk;

        var badge = document.createElement("div");
		badge.className = "resume-item";

		var str = "<h4>" + title + "</h4>" +
			"<h5>" + year + "</h5>" +
			"<p><em>" + address + "</em></p>" +
			"<ul>";
				jobDesks.forEach(element => {
					str += "<li>"+element+"</li>";
				});
		str += "</ul>";

        badge.innerHTML = str;

		document.getElementById(key).appendChild(badge);
	}
}
