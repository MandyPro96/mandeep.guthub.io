const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');


navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open')
})

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})


am4core.ready(function () {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    var chart = am4core.create("chartdiv", am4plugins_wordCloud.WordCloud);
    chart.fontFamily = "Courier New";
    var series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());
    series.randomness = 0.1;
    series.rotationThreshold = 0.5;

    series.data = [{
        "tag": "javascript",
        "count": "100"
    }, {
        "tag": "java",
        "count": "90"
    }, {
        "tag": "python",
        "count": "40"
    }, {
        "tag": "jquery",
        "count": "25"
    }, {
        "tag": "html",
        "count": "65"
    }, {
        "tag": "c++",
        "count": "70"
    }, {
        "tag": "css",
        "count": "40"
    }, {
        "tag": "mysql",
        "count": "30"
    }, {
        "tag": "c",
        "count": "40"
    }, {
        "tag": "node.js",
        "count": "75"
    }, {
        "tag": "regex",
        "count": "15"
    }, {
        "tag": "excel",
        "count": "10"
    }, {
        "tag": "xml",
        "count": "15"
    }, {
        "tag": "linux",
        "count": "20"
    }, {
        "tag": "database",
        "count": "30"
    }, {
        "tag": "reactjs",
        "count": "77"
    }, {
        "tag": "mongodb",
        "count": "43"
    }, {
        "tag": "git",
        "count": "55"
    }, {
        "tag": "OCI",
        "count": "51"
    }, {
        "tag": "pandas",
        "count": "20"
    }, {
        "tag": "algorithm",
        "count": "50"
    }, {
        "tag": "visual-studio",
        "count": "30"
    }, {
        "tag": "matlab",
        "count": "45"
    }, {
        "tag": "amazon-web-services",
        "count": "28"
    }, {
        "tag": "rest",
        "count": "42"
    }, {
        "tag": "shell",
        "count": "36"
    }, {
        "tag": "api",
        "count": "58"
    }, {
        "tag": "maven",
        "count": "52"
    }, {
        "tag": "unit-testing",
        "count": "61"
    }, {
        "tag": "selenium",
        "count": "48"
    }, {
        "tag": "web-services",
        "count": "69"
    }];

    series.dataFields.word = "tag";
    series.dataFields.value = "count";

    series.heatRules.push({
        "target": series.labels.template,
        "property": "fill",
        "min": am4core.color("#54eed4"),
        "max": am4core.color("#0f9a82"),
        "dataField": "value"
    });


    var hoverState = series.labels.template.states.create("hover");
    hoverState.properties.fill = am4core.color("#303030");

});