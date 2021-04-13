function loadDoc(type) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            if (type == "member") {
                loadMembers(this);
            }
            else if (type == "team") {
                loadContact(this);
            }
            else if (type == "deliverables") {
                loadAllDeliverables(this);
            } 
        }
    };
    if (type == "team" || type == "member") {
        xhttp.open("GET", "../xml/team.xml", true);
    }
    else if (type == "deliverables") {
        xhttp.open("GET", "../xml/responsibilities.xml", true); 
    }
    xhttp.send();
}

function loadMembers(xml) {
    var i;
    var xmlDoc = xml.responseXML;

    var table = "<h2>Members of Team Rocket</h2><br/><table class=\"table table-striped table-bordered\"\
     style=\"table-layout: fixed\">";
    table += "<tr>"
    count = 0;
    var x = xmlDoc.getElementsByTagName("RECORD");
    for (i = 0; i < x.length; i++) {
        count++;
        var name = x[i].getElementsByTagName("NAME")[0].childNodes[0].nodeValue;

        if(count > 4) {
            table += "</tr><tr>"
            count = 1;
        }
        table += "<td>" + name + "</td>"
    }
    table += "</tr></table>"
    document.getElementById("members").innerHTML = table;
}

function loadContact(xml) {
    var i;
    var xmlDoc = xml.responseXML;

    var table = "<h2>Members Contact Info</h2><table class=\"table table-striped table-bordered\"> \
    <thead><tr><th>Name</th><th>Email</th><th>GitHub Username</th></tr></thead>";
    var x = xmlDoc.getElementsByTagName("RECORD");
    for (i = 0; i < x.length; i++) {
        var name = x[i].getElementsByTagName("NAME")[0].childNodes[0].nodeValue;
        var email = x[i].getElementsByTagName("EMAIL")[0].childNodes[0].nodeValue;
        var github = x[i].getElementsByTagName("GITHUB-USER")[0].childNodes[0].nodeValue

        table += "<tr><td>" +
            name +
            "</td><td>" + "<a href=\"mailto:" + email + "\">" +
            email + "</a>" +
            "</td><td>" + "<a href=\"https://www.github.com/" + github + "\">" +
            github + "</a>" +
            "</td></tr>";
    }
    table += "</table>"
    document.getElementById("members").innerHTML = table;
}

function loadAllDeliverables(xml) {
    var i;
    var xmlDoc = xml.responseXML;

    var page = "<h2>Members' Responsibilities</h2><br/>";

    var x = xmlDoc.getElementsByTagName("RECORD");
    for (i = 0; i < x.length; i++) {
        var count = 0;
        var team = x[i].getElementsByTagName("TEAM")[0].childNodes[0].nodeValue;
        page += "<h4>" + team + "</h4>";

        page += "<table style=\"table-layout: fixed\" class=\"table table-striped table-bordered\">";
        var y = x[i].getElementsByTagName("NAME");

        for (j = 0; j < y.length; j++) {
            count++;
            var name = y[j].childNodes[0].nodeValue;
            
            if(count > 4) {
                page += "</tr><tr>";
                count = 1;
            }
            page += "<td>" + name + "</td>";

        }
        page += "</tr></table>" + "<br/><br/>";
    }
    document.getElementById("members").innerHTML = page;
}