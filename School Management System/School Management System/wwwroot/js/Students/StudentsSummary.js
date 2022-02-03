//Summary Manager

var StudentSummaryManager = {

    gridDataSource: function () {

        var gridDataSource = new kendo.data.DataSource({
            type: "json",
            pageSize: 10,

            transport: {
                read: {
                    url: '../Student/Student/StudentInfo/',

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

var StudentSummaryHelper = {

    GeneratedStudentSummaryGrid: function () {

        $("#studentGridAll").kendoGrid({

            dataSource: StudentSummaryManager.gridDataSource(),

            xheight: 300,
            columns: StudentSummaryHelper.GeneratedStudentInfoColumns(),
            sortable: true,
            reorderable: true,
            resizable: true,
            filterable: true,
            columnMenu: true,
            pageable: true


        });
    },

    GeneratedStudentInfoColumns: function () {
        return columns = [
            { field: "StudentID", hidden: true },
            { field: "Name", title: "Name", width: 60 },
            { field: "DepartmentId", title: "Department Id", width: 60 },
            { field: "EducationId", title: "Edu Id", width: 60 },
            { field: "ClassId", title: "Class", width: 60, sortable: true },
            { field: "Status", hidden: false, title: "Status", width: 60, sortable: false },
        ];
    },

};
