//Summary Manager

var PersonalSummaryManager = {

    gridDataSource: function () {
        var gridDataSource = new kendo.data.DataSource({
            type: "json",
            serverPaging: true,

            serverSorting: true,

            serverFiltering: true,

            allowUnsort: true,

            pageSize: 10,

            transport: {
                read: {
                    url: '../Student/Personal/PersonalInfo/',

                    type: "POST",

                    dataType: "json",

                    contentType: "application/json; charset=utf-8"
                },

                parameterMap: function (options, operation) {
                    if (operation !== "read" && options) {
                        return { models: kendo.stringify(options) };
                    }
                    return JSON.stringify(options);
                }
            },
            schema: {
                model: {
                    id: "ID",
                    fields: {
                        DOB: { type: "date" },
                    }
                },

                data: "Items", total: "TotalCount"
            }
        });
        return gridDataSource;
    }

};

//Summary Helper

var PersonalSummaryHelper = {

    GeneratedPersonalSummaryGrid: function () {

        $("#personalGridAll").kendoGrid({

            dataSource: PersonalSummaryManager.gridDataSource(),
            pageable: {
                refresh: true,
                serverPaging: true,
                serverFiltering: true,
                serverSorting: true
            },
            xheight: 300,
            filterable: true,
            sortable: true,
            columns: PersonalSummaryHelper.GeneratedPersonalInfoColumns(),
            editable: "inline",
            navigatable: true,
            selectable: "row"


        });
    },

        GeneratedPersonalInfoColumns: function () {
            return columns = [
                { field: "ID", hidden: true },
                { field: "Name", title: "Name", width: 60 },
                { field: "FathersName", title: "Father's Name", width: 60 },
                { field: "MothersName", title: "Mother's Name", width: 60 },     
                { field: "Age", title: "Age", width: 60, sortable: true },
                { field: "Gender", hidden: false, title: "Gender", width: 60, sortable: false },
                { field: "Address", hidden: false, title: "Address", width: 60, sortable: false },
                { field: "DOB", title: "Date of Birth", width: 60, sortable: true, template: '#= kendo.toString(DOB,"MM/dd/yyyy") #' },
            ];
    },

};