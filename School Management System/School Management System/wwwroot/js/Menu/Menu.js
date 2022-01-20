$(document).ready(function () {
        $("#menu").kendoMenu({
            dataSource: [

                {
                    text: "menu", icon: "k-icon k-i-more-horizontal", items: [
                        { text: "Edit", spriteCssClass: "k-icon k-i-edit" },
                        { text: "Delete", spriteCssClass: "k-icon k-i-delete" },
                    ]
                },
                {
                    text: "Students",
                    value: "Item 1 Value",
                    url: "https://www.google.com/",
                    items: [
                        {
                            text: " MVC 1",
                            value: "Sub Item 1 Value",
                            items: [
                                {
                                    text: "MVC Pattern architecture with WebForm Engine, Runs on .Net 3.5 and with Visual Studio 2008 & Visual Studio 2008 SP1, Html and Ajax helpers, Routing, Unit Testing.",
                                    value: "Sub Sub Item 1 Value"
                                },
                            ]
                        },
                        {
                            text: " MVC 2",
                            value: "Sub Item 2 Value",
                            items: [
                                {
                                    text: "Strongly typed HTML helpers means lambda expression based Html Helpers, Templated and UI helpers with automatic scaffolding & customizable templates, Client-side validation, Asynchronous controllers.",
                                    value: "Sub Sub Item 2 Value"
                                },
                            ]
                        },
                        {
                            text: " MVC 3",
                            value: "Sub Item 3 Value",
                            items: [
                                {
                                    text: "Improved Support for Data Annotations, Remote Validation, Dependency Resolver, Entity Framework Code First support, Good Intellisense support for Razor into Visual Studio, Use of NuGet to deliver software and manage dependencies throughout the platform.",
                                    value: "Sub Sub Item 3 Value"
                                },
                            ]
                        },
                        {
                            text: " MVC 4",
                            value: "Sub Item 4 Value",
                            items: [
                                {
                                    text: "ASP.NET Web API, Runs on .Net 4.0, 4.5 and with Visual Studio 2010SP1 & Visual Studio 2012, Display Modes, Enhancements to default project templates, Mobile project template using jQuery Mobile, Support for the Windows Azure SDK.",
                                    value: "Sub Sub Item 4 Value"
                                },
                            ]
                        },
                        {
                            text: " MVC 5",
                            value: "Sub Item 5 Value",
                            items: [
                                {
                                    text: "Runs on .Net 4.5, 4.5.1 and with Visual Studio 2013, Asp.Net Identity and Scaffolding, Bootstrap in the MVC template, ASP.NET Web API2, Authentication filters - run prior to authorization filters in the ASP.NET MVC pipeline.",
                                    value: "Sub Sub Item 5 Value"
                                },
                            ]
                        },
                    ]
                },
                {
                    text: "Privacy",
                    value: "Item 1 Value",
                    url: "https://localhost:44300/Student/Home/Privacy/",
               
                }]
        });  
});
