/** 
 * Copyright 2021 Progress Software Corporation and/or one of its subsidiaries or affiliates. All rights reserved.                                                                                      
 *                                                                                                                                                                                                      
 * Licensed under the Apache License, Version 2.0 (the "License");                                                                                                                                      
 * you may not use this file except in compliance with the License.                                                                                                                                     
 * You may obtain a copy of the License at                                                                                                                                                              
 *                                                                                                                                                                                                      
 *     http://www.apache.org/licenses/LICENSE-2.0                                                                                                                                                       
 *                                                                                                                                                                                                      
 * Unless required by applicable law or agreed to in writing, software                                                                                                                                  
 * distributed under the License is distributed on an "AS IS" BASIS,                                                                                                                                    
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.                                                                                                                             
 * See the License for the specific language governing permissions and                                                                                                                                  
 * limitations under the License.                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       
                                                                                                                                                                                                       

*/

(function(f){
    if (typeof define === 'function' && define.amd) {
        define(["kendo.core"], f);
    } else {
        f();
    }
}(function(){
(function ($, undefined) {
/* Filter cell operator messages */

if (kendo.ui.FilterCell) {
kendo.ui.FilterCell.prototype.options.operators =
$.extend(true, kendo.ui.FilterCell.prototype.options.operators,{
  "date": {
    "eq": "??r lika med",
    "gt": "??r senare ??n",
    "gte": "??r lika eller senare ??n",
    "lt": "??r tidigare ??n",
    "lte": "??r lika eller tidigare ??n",
    "neq": "??r inte lika med"
  },
  "number": {
    "eq": "??r lika med",
    "gt": "??r st??rre ??n",
    "gte": "??r lika eller st??rre ??n",
    "lt": "??r mindre ??n",
    "lte": "??r lika eller mindre ??n",
    "neq": "??r inte lika med"
  },
  "string": {
    "contains": "Inneh??ller",
    "doesnotcontain": "Inneh??ller inte",
    "endswith": "Slutar med",
    "eq": "??r lika med",
    "neq": "??r inte lika med",
    "startswith": "B??rjar med"
  },
  "enums": {
    "eq": "??r lika med",
    "neq": "??r inte lika med"
  }
});
}

/* FilterMultiCheck messages */

if (kendo.ui.FilterMultiCheck) {
  kendo.ui.FilterMultiCheck.prototype.options.messages =
      $.extend(true, kendo.ui.FilterMultiCheck.prototype.options.messages, {
          "checkAll": "Markera alla",
          "clear": "Rensa",
          "filter": "Filtrera",
          "search": "S??k",
          "selectedItemsFormat": "{0} alternativ valt"
      });
}

/* Filter menu operator messages */

if (kendo.ui.FilterMenu) {
kendo.ui.FilterMenu.prototype.options.operators =
$.extend(true, kendo.ui.FilterMenu.prototype.options.operators,{
  "date": {
    "eq": "??r lika med",
    "gt": "??r senare ??n",
    "gte": "??r lika eller senare ??n",
    "lt": "??r tidigare ??n",
    "lte": "??r lika eller tidigare ??n",
    "neq": "??r inte lika med"
  },
  "number": {
    "eq": "??r lika med",
    "gt": "??r st??rre ??n",
    "gte": "??r lika eller st??rre ??n",
    "lt": "??r mindre ??n",
    "lte": "??r lika eller mindre ??n",
    "neq": "??r inte lika med"
  },
  "string": {
    "contains": "Inneh??ller",
    "doesnotcontain": "Inneh??ller inte",
    "endswith": "Slutar med",
    "eq": "??r lika med",
    "neq": "??r inte lika med",
    "startswith": "B??rjar med"
  },
  "enums": {
    "eq": "??r lika med",
    "neq": "??r inte lika med"
  }
});
}

/* ColumnMenu messages */

if (kendo.ui.ColumnMenu) {
kendo.ui.ColumnMenu.prototype.options.messages =
$.extend(true, kendo.ui.ColumnMenu.prototype.options.messages,{
  "columns": "Kolumner",
  "sortAscending": "Sortera stigande",
  "sortDescending": "Sortera fallande",
  "settings": "Kolumninst??llningar",
  "done": "Klar",
  "lock": "L??s",
  "unlock": "L??s upp"
});
}

/* RecurrenceEditor messages */

if (kendo.ui.RecurrenceEditor) {
kendo.ui.RecurrenceEditor.prototype.options.messages =
$.extend(true, kendo.ui.RecurrenceEditor.prototype.options.messages,{
  "daily": {
    "interval": "days(s)",
    "repeatEvery": "Repeat every:"
  },
  "end": {
    "after": "After",
    "occurrence": "occurrence(s)",
    "label": "End:",
    "never": "Never",
    "on": "On",
    "mobileLabel": "Ends"
  },
  "frequencies": {
    "daily": "Daily",
    "monthly": "Monthly",
    "never": "Never",
    "weekly": "Weekly",
    "yearly": "Yearly"
  },
  "monthly": {
    "day": "Day",
    "interval": "month(s)",
    "repeatEvery": "Repeat every:",
    "repeatOn": "Repeat on:"
  },
  "offsetPositions": {
    "first": "first",
    "fourth": "fourth",
    "last": "last",
    "second": "second",
    "third": "third"
  },
  "weekly": {
    "repeatEvery": "Repeat every:",
    "repeatOn": "Repeat on:",
    "interval": "week(s)"
  },
  "yearly": {
    "of": "of",
    "repeatEvery": "Repeat every:",
    "repeatOn": "Repeat on:",
    "interval": "year(s)"
  },
  "weekdays": {
    "day": "day",
    "weekday": "weekday",
    "weekend": "weekend day"
  }
});
}

/* FilterCell messages */

if (kendo.ui.FilterCell) {
kendo.ui.FilterCell.prototype.options.messages =
$.extend(true, kendo.ui.FilterCell.prototype.options.messages,{
  "clear": "Rensa",
  "filter": "Filtrera",
  "isFalse": "??r falskt",
  "isTrue": "??r sant",
  "operator": "Operat??r"
});
}

/* FilterMenu messages */

if (kendo.ui.FilterMenu) {
kendo.ui.FilterMenu.prototype.options.messages =
$.extend(true, kendo.ui.FilterMenu.prototype.options.messages,{
  "and": "Och",
  "clear": "Rensa",
  "filter": "Filtrera",
  "info": "Visa poster med v??rde:",
  "title": "Visa poster med v??rde",
  "isFalse": "??r falskt",
  "isTrue": "??r sant",
  "or": "Eller",
  "selectValue": "-V??lj-",
  "cancel": "Avbryt",
  "operator": "Operat??r",
  "value": "V??rde"
});
}

/* Grid messages */

if (kendo.ui.Grid) {
kendo.ui.Grid.prototype.options.messages =
$.extend(true, kendo.ui.Grid.prototype.options.messages,{
  "commands": {
    "canceledit": "Avbryt",
    "cancel": "Avbryt ??ndringar",
    "create": "L??gg till post",
    "destroy": "Radera",
    "edit": "??ndra",
    "excel": "Export to Excel",
    "pdf": "Export to PDF",
    "save": "Spara ??ndringar",
    "select": "V??lj",
    "update": "Spara"
  },
  "editable": {
    "confirmation": "??r du s??ker p?? att du vill radera denna post?",
    "cancelDelete": "Avbryt",
    "confirmDelete": "Radera"
  }
});
}

/* Groupable messages */

if (kendo.ui.Groupable) {
kendo.ui.Groupable.prototype.options.messages =
$.extend(true, kendo.ui.Groupable.prototype.options.messages,{
  "empty": "Dra en kolumnrubrik hit f??r att sortera p?? den kolumnen"
});
}

/* Pager messages */

if (kendo.ui.Pager) {
kendo.ui.Pager.prototype.options.messages =
$.extend(true, kendo.ui.Pager.prototype.options.messages,{
  "allPages": "Alla",
  "display": "{0} - {1} av {2} poster",
  "empty": "Det finns inga poster",
  "first": "G?? till f??rsta sidan",
  "itemsPerPage": "poster per sida",
  "last": "G?? till sista sidan",
  "next": "G?? till n??sta sida",
  "of": "av {0}",
  "page": "Sida",
  "previous": "G?? till f??reg??ende sida",
  "refresh": "Uppdatera",
  "morePages": "Fler sidor"
});
}

/* TreeListPager messages */

if (kendo.ui.TreeListPager) {
kendo.ui.TreeListPager.prototype.options.messages =
$.extend(true, kendo.ui.TreeListPager.prototype.options.messages,{
  "allPages": "Alla",
  "display": "{0} - {1} av {2} poster",
  "empty": "Det finns inga poster",
  "first": "G?? till f??rsta sidan",
  "itemsPerPage": "poster per sida",
  "last": "G?? till sista sidan",
  "next": "G?? till n??sta sida",
  "of": "av {0}",
  "page": "Sida",
  "previous": "G?? till f??reg??ende sida",
  "refresh": "Uppdatera",
  "morePages": "Fler sidor"
});
}

/* Upload messages */

if (kendo.ui.Upload) {
kendo.ui.Upload.prototype.options.localization =
$.extend(true, kendo.ui.Upload.prototype.options.localization,{
  "cancel": "Avbryt",
  "retry": "F??rs??k igen",
  "select": "V??lj...",
  "remove": "Ta bort",
  "uploadSelectedFiles": "Ladda upp filer",
  "dropFilesHere": "sl??pp filer h??r f??r att ladda upp",
  "statusFailed": "misslyckades",
  "statusUploaded": "uppladdad",
  "statusUploading": "laddar upp",
  "headerStatusUploaded": "Uppladdad",
  "headerStatusUploading": "Laddar upp..."
});
}

/* Editor messages */

if (kendo.ui.Editor) {
kendo.ui.Editor.prototype.options.messages =
$.extend(true, kendo.ui.Editor.prototype.options.messages,{
  "bold": "Fet",
  "createLink": "L??gg till l??nk",
  "fontName": "V??lj typsnitt",
  "fontNameInherit": "(??rvt typsnitt)",
  "fontSize": "V??lj storlek",
  "fontSizeInherit": "(??rvd storlek)",
  "formatBlock": "Formatering",
  "indent": "??ka indrag",
  "insertHtml": "L??gg till HTML",
  "insertImage": "L??gg till bild",
  "insertOrderedList": "L??gg till numrerad lista",
  "insertUnorderedList": "L??gg till punktlista",
  "italic": "Kursiv",
  "justifyCenter": "Centrerad text",
  "justifyFull": "Marginaljusterad text",
  "justifyLeft": "V??nsterjusterad text",
  "justifyRight": "H??gerjusterad text",
  "outdent": "Minska indrag",
  "strikethrough": "Genomstruken",
  "styles": "Stil",
  "subscript": "Neds??nkt",
  "superscript": "Upph??jd",
  "underline": "Understruken",
  "unlink": "Ta bort l??nk",
  "deleteFile": "??r du s??ker p?? att du vill radera \"{0}\"?",
  "directoryNotFound": "En mapp med detta namn hittades ej.",
  "emptyFolder": "Tom mapp",
  "invalidFileType": "Filen \"{0}\" ??r inte giltig. Till??tna filtyper ??r {1}.",
  "orderBy": "Sortera p??:",
  "orderByName": "Namn",
  "orderBySize": "Storlek",
  "overwriteFile": "'En fil med namn \"{0}\" finns redan i aktuell mapp. Vill du skriva ??ver den?",
  "uploadFile": "Ladda upp",
  "backColor": "Bakgrundsf??rg",
  "foreColor": "F??rg",
  "dropFilesHere": "sl??pp filer h??r f??r att ladda upp",
  "dialogButtonSeparator": "eller",
  "dialogCancel": "Avbryt",
  "dialogInsert": "L??gg till",
  "imageAltText": "Alternativ text",
  "imageWebAddress": "Webbadress",
  "linkOpenInNewWindow": "??ppna l??nk i ett nytt f??nster",
  "linkText": "Text",
  "linkToolTip": "Sk??rmtips",
  "linkWebAddress": "Webbadress",
  "search": "S??k",
  "createTable": "Skapa tabell",
  "addColumnLeft": "L??gg till v??nsterkolumn",
  "addColumnRight": "L??gg till h??gerkolumn",
  "addRowAbove": "L??gg till rad ovanf??r",
  "addRowBelow": "L??gg till rad under",
  "deleteColumn": "Ta bort kolumn",
  "deleteRow": "Ta bort rad",
  "formatting": "Format",
  "viewHtml": "Visa HTML",
  "dialogUpdate": "Uppdatera",
  "insertFile": "Ange fil"
});
}

/* Scheduler messages */

if (kendo.ui.Scheduler) {
kendo.ui.Scheduler.prototype.options.messages =
$.extend(true, kendo.ui.Scheduler.prototype.options.messages,{
  "allDay": "Hela dagen",
  "cancel": "Avbryt",
  "editable": {
    "confirmation": "??r du s??ker p?? att du vill ta bort tillf??llet?"
  },
  "date": "Datum",
  "destroy": "Ta bort",
  "editor": {
    "allDayEvent": "Heldagstillf??lle",
    "description": "Beskrivning",
    "editorTitle": "Tillf??lle",
    "end": "Slut",
    "endTimezone": "Sluttidszon",
    "repeat": "Upprepa",
    "separateTimezones":  "Anv??nd separata start och sluttidszoner",
    "start": "Start",
    "startTimezone": "Starttidszon",
    "timezone": " ",
    "timezoneEditorButton": "Tidszon",
    "timezoneEditorTitle": "Tidszoner",
    "title": "Titel",
    "noTimezone": "Ingen tidszon"
  },
  "event": "Tillf??lle",
  "recurrenceMessages": {
    "deleteRecurring": "Vill du ta bort enbart detta tillf??llet eller hela serien?",
    "deleteWindowOccurrence": "Ta bort nuvarande upprepning",
    "deleteWindowSeries": "Ta bort serien",
    "deleteWindowTitle": "Ta bort ??terkommande objekt",
    "editRecurring": "Vill du redigera enbart detta tillf??lle eller hela serien?",
    "editWindowOccurrence": "Redigera ??terkommande tillf??lle",
    "editWindowSeries": "Redigera serie",
    "editWindowTitle": "Redigera ??terkommande objekt"
  },
  "save": "Spara",
  "time": "Tid",
  "today": "Idag",
  "views": {
    "agenda": "Agenda",
    "day": "Dag",
    "month": "M??nad",
    "week": "Vecka",
    "workWeek": "Arbetsvecka"
  },
  "deleteWindowTitle": "Ta bort tillf??lle",
  "showFullDay": "Visa heldag",
  "showWorkDay": "Visa arbetsdag"
});
}

/* Dialog */

if (kendo.ui.Dialog) {
kendo.ui.Dialog.prototype.options.messages =
$.extend(true, kendo.ui.Dialog.prototype.options.localization, {
  "close": "St??ng"
});
}

/* Alert */

if (kendo.ui.Alert) {
kendo.ui.Alert.prototype.options.messages =
$.extend(true, kendo.ui.Alert.prototype.options.localization, {
  "okText": "OK"
});
}

/* Confirm */

if (kendo.ui.Confirm) {
kendo.ui.Confirm.prototype.options.messages =
$.extend(true, kendo.ui.Confirm.prototype.options.localization, {
  "okText": "OK",
  "cancel": "Avbryt"
});
}

/* Prompt */
if (kendo.ui.Prompt) {
kendo.ui.Prompt.prototype.options.messages =
$.extend(true, kendo.ui.Prompt.prototype.options.localization, {
  "okText": "OK",
  "cancel": "Avbryt"
});
}

})(window.kendo.jQuery);
}));