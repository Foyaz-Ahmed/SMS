$(document).ready(function () {

    $("#fabric").kendoComboBox({
        dataTextField: "text",
        dataValueField: "value",
        dataSource: [
            { text: "Cotton", value: "1" },
            { text: "Polyester", value: "2" },
            { text: "Cotton/Polyester", value: "3" },
            { text: "Rib Knit", value: "4" }
        ],
        filter: "contains",
        suggest: true,
        index: 3
    });
});