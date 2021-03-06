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
/* FlatColorPicker messages */

if (kendo.ui.FlatColorPicker) {
kendo.ui.FlatColorPicker.prototype.options.messages =
$.extend(true, kendo.ui.FlatColorPicker.prototype.options.messages,{
  "apply": "Pou??i??",
  "cancel": "Storno"
});
}

/* ColorPicker messages */

if (kendo.ui.ColorPicker) {
kendo.ui.ColorPicker.prototype.options.messages =
$.extend(true, kendo.ui.ColorPicker.prototype.options.messages,{
  "apply": "Pou??i??",
  "cancel": "Storno"
});
}

/* ColumnMenu messages */

if (kendo.ui.ColumnMenu) {
kendo.ui.ColumnMenu.prototype.options.messages =
$.extend(true, kendo.ui.ColumnMenu.prototype.options.messages,{
  "sortAscending": "Usporiada?? vzostupne",
  "sortDescending": "Usporiada?? zostupne",
  "filter": "Filter",
  "columns": "St??pce",
  "done": "Hotovo",
  "settings": "Nastavenia st??pca",
  "lock": "Zamkn????",
  "unlock": "Odomkn????"
});
}

/* Editor messages */

if (kendo.ui.Editor) {
kendo.ui.Editor.prototype.options.messages =
$.extend(true, kendo.ui.Editor.prototype.options.messages,{
  "bold": "Tu??n??",
  "italic": "Kurz??va",
  "underline": "Pod??iarknut??",
  "strikethrough": "Pre??krtnut??",
  "superscript": "Horn?? index",
  "subscript": "Doln?? index",
  "justifyCenter": "Zarovna?? na stred",
  "justifyLeft": "Zarovna?? v??avo",
  "justifyRight": "Zarovna?? vpravo",
  "justifyFull": "Zarovna?? do bloku",
  "insertUnorderedList": "Vlo??i?? odr????kov?? zoznam",
  "insertOrderedList": "Vlo??i?? ????slovan?? zoznam",
  "indent": "Zv??????i?? odsadenie",
  "outdent": "Zmen??i?? odsadenie",
  "createLink": "Vlo??i?? odkaz",
  "unlink": "Odstr??ni?? odkaz",
  "insertImage": "Vlo??i?? obr??zok",
  "insertFile": "Vlo??i?? s??bor",
  "insertHtml": "Vlo??i?? HTML",
  "viewHtml": "View HTML",
  "fontName": "Vyberte p??smo",
  "fontNameInherit": "(predvolen?? p??smo)",
  "fontSize": "Vyberte ve??kos?? p??sma",
  "fontSizeInherit": "(predvolen?? ve??kos??)",
  "formatBlock": "Form??t",
  "formatting": "Form??tovanie",
  "foreColor": "Farba",
  "backColor": "Farba pozadia",
  "style": "??t??ly",
  "emptyFolder": "Pr??zdny prie??inok",
  "uploadFile": "Nahra??",
  "orderBy": "Usporiada?? pod??a:",
  "orderBySize": "Ve??kosti",
  "orderByName": "N??zvu",
  "invalidFileType": "Vybran?? s??bor \"{0}\" nie je podporovan??. Podporovan?? s??bory s?? {1}.",
  "deleteFile": 'Naozaj chcete odstr??ni?? "{0}"?',
  "overwriteFile": 'S??bor s n??zvom "{0}" u?? vo vybratom prie??inku existuje. Chcete ho nahradi???',
  "directoryNotFound": "Prie??inok s t??mto n??zvom sa nena??iel.",
  "imageWebAddress": "Odkaz",
  "imageAltText": "Alt. text",
  "imageWidth": "????rka (px)",
  "imageHeight": "V????ka (px)",
  "fileWebAddress": "Odkaz",
  "fileTitle": "N??zov",
  "linkWebAddress": "Odkaz",
  "linkText": "Text",
  "linkToolTip": "Tip",
  "linkOpenInNewWindow": "Otvori?? odkaz v novom okne",
  "dialogUpdate": "Ulo??i??",
  "dialogInsert": "Vlo??i??",
  "dialogButtonSeparator": "alebo",
  "dialogCancel": "Storno",
  "createTable": "Vlo??i?? tabu??ku",
  "addColumnLeft": "Prida?? st??pec v??avo",
  "addColumnRight": "Prida?? st??pec vpravo",
  "addRowAbove": "Prida?? riadok nad",
  "addRowBelow": "Prida?? riadok pod",
  "deleteRow": "Odstr??ni?? riadok",
  "deleteColumn": "Odstr??ni?? st??pec"
});
}

/* FileBrowser messages */

if (kendo.ui.FileBrowser) {
kendo.ui.FileBrowser.prototype.options.messages =
$.extend(true, kendo.ui.FileBrowser.prototype.options.messages,{
  "uploadFile": "Odosla??",
  "orderBy": "Usporiada?? pod??a",
  "orderByName": "N??zvu",
  "orderBySize": "Ve??kosti",
  "directoryNotFound": "Prie??inok s t??mto n??zvom sa nena??iel.",
  "emptyFolder": "Pr??zdny prie??inok",
  "deleteFile": 'Naozaj chcete odstr??ni?? "{0}"?',
  "invalidFileType": "Vybran?? s??bor \"{0}\" nie je podporovan??. Podporovan?? s??bory s?? {1}.",
  "overwriteFile": "S??bor s n??zvom \"{0}\" u?? vo vybratom prie??inku existuje. Chcete ho nahradi???",
  "dropFilesHere": "Potiahnite sem s??bory, ktor?? chcete odosla??",
  "search": "H??ada??"
});
}

/* FilterCell messages */

if (kendo.ui.FilterCell) {
kendo.ui.FilterCell.prototype.options.messages =
$.extend(true, kendo.ui.FilterCell.prototype.options.messages,{
  "isTrue": "je pravda",
  "isFalse": "nie je pravda",
  "filter": "Filtrova??",
  "clear": "Vy??isti??",
  "operator": "Oper??tor"
});
}

/* FilterCell operators */

if (kendo.ui.FilterCell) {
kendo.ui.FilterCell.prototype.options.operators =
$.extend(true, kendo.ui.FilterCell.prototype.options.operators,{
  "string": {
    "eq": "Je",
    "neq": "Nie je",
    "startswith": "Za????na s",
    "contains": "Obsahuje",
    "doesnotcontain": "Neobsahuje",
    "endswith": "Kon???? s",
    "isnull": "Je null",
    "isnotnull": "Nie je null",
    "isempty": "Je pr??zdne",
    "isnotempty": "Nie je pr??zdne",
    "isnullorempty": "Nem?? hodnotu",
    "isnotnullorempty": "M?? hodnotu"
  },
  "number": {
    "eq": "Rovn?? sa",
    "neq": "Nerovn?? sa",
    "gte": "Je v??????ie alebo sa rovn??",
    "gt": "Je v??????ie ako",
    "lte": "Je men??ie alebo sa rovn??",
    "lt": "Je men??ie ako",
    "isnull": "Je null",
    "isnotnull": "Nie je null"
  },
  "date": {
    "eq": "Je",
    "neq": "Nie je",
    "gte": "Nasleduje alebo je",
    "gt": "Nasleduje",
    "lte": "Predch??dza alebo je",
    "lt": "Predch??dza",
    "isnull": "Je null",
    "isnotnull": "Nie je null"
  },
  "enums": {
    "eq": "Je",
    "neq": "Nie je",
    "isnull": "Je null",
    "isnotnull": "Nie je null"
  }
});
}

/* FilterMenu messages */

if (kendo.ui.FilterMenu) {
kendo.ui.FilterMenu.prototype.options.messages =
$.extend(true, kendo.ui.FilterMenu.prototype.options.messages,{
  "info": "Zobrazi?? z??znamy s hodnotou, ktor??:",
  "title": "Zobrazi?? z??znamy s hodnotou, ktor??",
  "isTrue": "je pravda",
  "isFalse": "nie je pravda",
  "filter": "Filtrova??",
  "clear": "Vy??isti??",
  "and": "A z??rove??",
  "or": "Alebo",
  "selectValue": "-Vyberte hodnotu-",
  "operator": "Oper??tor",
  "value": "Hodnota",
  "cancel": "Storno"
});
}

/* FilterMenu operator messages */

if (kendo.ui.FilterMenu) {
kendo.ui.FilterMenu.prototype.options.operators =
$.extend(true, kendo.ui.FilterMenu.prototype.options.operators,{
  "string": {
      "eq": "Je",
      "neq": "Nie je",
      "startswith": "Za????na s",
      "contains": "Obsahuje",
      "doesnotcontain": "Neobsahuje",
      "endswith": "Kon???? s",
      "isnull": "Je null",
      "isnotnull": "Nie je null",
      "isempty": "Je pr??zdne",
      "isnotempty": "Nie je pr??zdne",
      "isnullorempty": "Nem?? hodnotu",
      "isnotnullorempty": "M?? hodnotu"
  },
  "number": {
      "eq": "Rovn?? sa",
      "neq": "Nerovn?? sa",
      "gte": "Je v??????ie alebo sa rovn??",
      "gt": "Je v??????ie ako",
      "lte": "Je men??ie alebo sa rovn??",
      "lt": "Je men??ie ako",
      "isnull": "Je null",
      "isnotnull": "Nie je null"
  },
  "date": {
      "eq": "Je",
      "neq": "Nie je",
      "gte": "Nasleduje alebo je",
      "gt": "Nasleduje",
      "lte": "Predch??dza alebo je",
      "lt": "Predch??dza",
      "isnull": "Je null",
      "isnotnull": "Nie je null"
  },
  "enums": {
      "eq": "Je",
      "neq": "Nie je",
      "isnull": "Je null",
      "isnotnull": "Nie je null"
  }
});
}

/* FilterMultiCheck messages */

if (kendo.ui.FilterMultiCheck) {
    kendo.ui.FilterMultiCheck.prototype.options.messages =
    $.extend(true, kendo.ui.FilterMultiCheck.prototype.options.messages,{
        "checkAll": "V??etky",
        "clear": "Vy??isti??",
        "filter": "Filtrova??",
        "search": "H??ada??"
    });
}

/* Gantt messages */

if (kendo.ui.Gantt) {
kendo.ui.Gantt.prototype.options.messages =
$.extend(true, kendo.ui.Gantt.prototype.options.messages,{
  "actions": {
    "addChild": "Prida?? pod??lohu",
    "append": "Prida?? ??lohu",
    "insertAfter": "Vlo??i?? za",
    "insertBefore": "Vlo??i?? pred",
    "pdf": "Exportova?? do PDF"
  },
  "cancel": "Storno",
  "deleteDependencyWindowTitle": "Odstr??nenie z??vislosti",
  "deleteTaskWindowTitle": "Odstr??nenie ??lohy",
  "destroy": "Odstr??ni??",
  "editor": {
    "assingButton": "Priradi??",
    "editorTitle": "??loha",
    "end": "Koniec",
    "percentComplete": "Hotovo",
    "resources": "Zdroje",
    "resourcesEditorTitle": "Zdroje",
    "resourcesHeader": "Zdroje",
    "start": "Za??iatok",
    "title": "N??zov",
    "unitsHeader": "Jednotky"
  },
  "save": "Ulo??i??",
  "views": {
    "day": "De??",
    "end": "Koniec",
    "month": "Mesiac",
    "start": "Za??iatok",
    "week": "T????de??",
    "year": "Rok"
  }
});
}

/* Grid messages */

if (kendo.ui.Grid) {
kendo.ui.Grid.prototype.options.messages =
$.extend(true, kendo.ui.Grid.prototype.options.messages,{
  "commands": {
    "cancel": "Zahodi?? zmeny",
    "canceledit": "Storno",
    "create": "Prida?? nov?? z??znam",
    "destroy": "Odstr??ni??",
    "edit": "Upravi??",
    "excel": "Exportova?? do Excelu",
    "pdf": "Exportova?? do PDF",
    "save": "Ulo??i?? zmeny",
    "select": "Vybra??",
    "update": "Ulo??i??"
  },
  "editable": {
    "cancelDelete": "Storno",
    "confirmation": "Naozaj chcete odstr??ni?? tento z??znam?",
    "confirmDelete": "Odstr??ni??"
  },
  "noRecords": "??iadne z??znamy."
});
}

/* Groupable messages */

if (kendo.ui.Groupable) {
kendo.ui.Groupable.prototype.options.messages =
$.extend(true, kendo.ui.Groupable.prototype.options.messages,{
    "empty": "Potiahnite sem z??hlavie st??pca na zoskupenie pod??a neho"
});
}

/* NumericTextBox messages */

if (kendo.ui.NumericTextBox) {
kendo.ui.NumericTextBox.prototype.options =
$.extend(true, kendo.ui.NumericTextBox.prototype.options,{
  "upArrowText": "Zv????i?? hodnotu",
  "downArrowText": "Zn????i?? hodnotu"
});
}

/* Pager messages */

if (kendo.ui.Pager) {
kendo.ui.Pager.prototype.options.messages =
$.extend(true, kendo.ui.Pager.prototype.options.messages,{
  "allPages": "V??etko",
  "display": "{0} - {1} z {2} z??znamov",
  "empty": "??iadny z??znam na zobrazenie",
  "page": "Strana",
  "of": "z {0}",
  "itemsPerPage": "z??znamov na stranu",
  "first": "Prejs?? na prv?? stranu",
  "previous": "Prejs?? na predo??l?? stranu",
  "next": "Prejs?? na ??al??iu stranu",
  "last": "Prejs?? na posledn?? stranu",
  "refresh": "Obnovi??",
  "morePages": "??al??ie strany"
});
}

/* TreeListPager messages */

if (kendo.ui.TreeListPager) {
kendo.ui.TreeListPager.prototype.options.messages =
$.extend(true, kendo.ui.TreeListPager.prototype.options.messages,{
  "allPages": "V??etko",
  "display": "{0} - {1} z {2} z??znamov",
  "empty": "??iadny z??znam na zobrazenie",
  "page": "Strana",
  "of": "z {0}",
  "itemsPerPage": "z??znamov na stranu",
  "first": "Prejs?? na prv?? stranu",
  "previous": "Prejs?? na predo??l?? stranu",
  "next": "Prejs?? na ??al??iu stranu",
  "last": "Prejs?? na posledn?? stranu",
  "refresh": "Obnovi??",
  "morePages": "??al??ie strany"
});
}

/* PivotGrid messages */

if (kendo.ui.PivotGrid) {
kendo.ui.PivotGrid.prototype.options.messages =
$.extend(true, kendo.ui.PivotGrid.prototype.options.messages,{
  "measureFields": "Potiahnite sem polia ??dajov",
  "columnFields": "Potiahnite sem polia st??pcov",
  "rowFields": "Potiahnite sem polia riadkov"
});
}

/* PivotFieldMenu messages */

if (kendo.ui.PivotFieldMenu) {
kendo.ui.PivotFieldMenu.prototype.options.messages =
$.extend(true, kendo.ui.PivotFieldMenu.prototype.options.messages,{
  "info": "Zobrazi?? z??znamy s hodnotou, ktor??:",
  "filterFields": "Filter pol??",
  "filter": "Filter",
  "include": "Zahrn???? polia...",
  "title": "Polia na zahrnutie",
  "clear": "Vy??isti??",
  "ok": "Ok",
  "cancel": "Storno",
  "operators": {
    "contains": "Obsahuje",
    "doesnotcontain": "Neobsahuje",
    "startswith": "Za????na s",
    "endswith": "Kon???? s",
    "eq": "Rovn?? sa",
    "neq": "Nerovn?? sa"
  }
});
}

/* RecurrenceEditor messages */

if (kendo.ui.RecurrenceEditor) {
kendo.ui.RecurrenceEditor.prototype.options.messages =
$.extend(true, kendo.ui.RecurrenceEditor.prototype.options.messages,{
  "frequencies": {
    "never": "Nikdy",
    "hourly": "Ka??d?? hodinu",
    "daily": "Denne",
    "weekly": "T????denne",
    "monthly": "Mesa??ne",
    "yearly": "Ro??ne"
  },
  "hourly": {
    "repeatEvery": "Opakova?? ka??d??: ",
    "interval": " hodinu(hod??n)"
  },
  "daily": {
    "repeatEvery": "Opakova?? ka??d??: ",
    "interval": " de??(dn??)"
  },
  "weekly": {
    "interval": " t????de??(t????d??ov)",
    "repeatEvery": "Opakova?? ka??d??: ",
    "repeatOn": "Opakova??: "
  },
  "monthly": {
    "repeatEvery": "Opakova?? ka??d??: ",
    "repeatOn": "Opakova??: ",
    "interval": " mesiac(mesiacov)",
    "day": "De?? "
  },
  "yearly": {
    "repeatEvery": "Opakova?? ka??d??: ",
    "repeatOn": "Opakova??: ",
    "interval": " rok(rokov)",
    "of": " z "
  },
  "end": {
    "label": "Koniec:",
    "mobileLabel": "Ukon??i??",
    "never": "Nikdy",
    "after": "Po ",
    "occurrence": " opakovan??(-iach)",
    "on": "On "
  },
  "offsetPositions": {
    "first": "prv??",
    "second": "druh??",
    "third": "tret??",
    "fourth": "??tvrt??",
    "last": "posledn??"
  },
  "weekdays": {
    "day": "de??",
    "weekday": "pracovn?? de??",
    "weekend": "v??kend"
  }
});
}

/* Scheduler messages */

if (kendo.ui.Scheduler) {
kendo.ui.Scheduler.prototype.options.messages =
$.extend(true, kendo.ui.Scheduler.prototype.options.messages,{
  "allDay": "cel?? de??",
  "date": "D??tum",
  "event": "Udalos??",
  "time": "??as",
  "showFullDay": "Zobrazi?? cel?? de??",
  "showWorkDay": "Zobrazi?? pracovn?? ??as",
  "today": "Dnes",
  "save": "Ulo??i??",
  "cancel": "Storno",
  "destroy": "Odstr??ni??",
  "deleteWindowTitle": "Odstr??nenie udalosti",
  "ariaSlotLabel": "Vybrat?? od {0:t} do {1:t}",
  "ariaEventLabel": "{0} d??a {1:D} o {2:t}",
  "editable": {
    "confirmation": "Naozaj chcete odstr??ni?? t??to udalos???"
  },
  "views": {
    "day": "De??",
    "week": "T????de??",
    "workWeek": "Pracovn?? t????de??",
    "agenda": "Agenda",
    "month": "Mesiac"
  },
  "recurrenceMessages": {
    "deleteWindowTitle": "Odstr??nenie opakovanej udalosti",
    "deleteWindowOccurrence": "Odstr??ni?? aktu??lnu udalos??",
    "deleteWindowSeries": "Odstr??ni?? v??etko",
    "editWindowTitle": "??prava opakovanej udalosti",
    "editWindowOccurrence": "Upravi?? aktu??lnu udalos??",
    "editWindowSeries": "Upravi?? v??etko",
    "deleteRecurring": "Chcete odstr??ni?? len t??to udalos?? alebo aj v??etky jej opakovania?",
    "editRecurring": "Chcete upravi?? len t??to udalos?? alebo aj v??etky jej opakovania?"
  },
  "editor": {
    "title": "N??zov",
    "start": "Za??iatok",
    "end": "Koniec",
    "allDayEvent": "Celodenn??",
    "description": "Popis",
    "repeat": "Opakova??",
    "timezone": " ",
    "startTimezone": "??asov?? p??smo za??iatku",
    "endTimezone": "??asov?? p??smo konca",
    "separateTimezones": "R??zne ??asov?? p??sma pre za??iatok a koniec",
    "timezoneEditorTitle": "??asov?? p??sma",
    "timezoneEditorButton": "??asov?? p??smo",
    "timezoneTitle": "??asov?? p??sma",
    "noTimezone": "Bez ??asov??ho p??sma",
    "editorTitle": "Udalos??"
  }
});
}

/* Spreadsheet messages */

if (kendo.spreadsheet && kendo.spreadsheet.messages.borderPalette) {
kendo.spreadsheet.messages.borderPalette =
$.extend(true, kendo.spreadsheet.messages.borderPalette, {
    "allBorders": "V??etky or??movania",
    "insideBorders": "Vn??torn?? or??movania",
    "insideHorizontalBorders": "Vn??torn?? vodorovn?? or??movania",
    "insideVerticalBorders": "Vn??torn?? zvisl?? or??movania",
    "outsideBorders": "Vonkaj??ie or??movania",
    "leftBorder": "??av?? or??movanie",
    "topBorder": "Horn?? or??movanie",
    "rightBorder": "Prav?? or??movanie",
    "bottomBorder": "Doln?? or??movanie",
    "noBorders": "Bez or??movania",
    "reset": "Nulova?? farbu",
    "customColor": "Vlastn?? farba...",
    "apply": "Pou??i??",
    "cancel": "Storno"
});
}

if (kendo.spreadsheet && kendo.spreadsheet.messages.dialogs) {
kendo.spreadsheet.messages.dialogs =
$.extend(true, kendo.spreadsheet.messages.dialogs, {
    "apply": "Pou??i??",
    "save": "Ulo??i??",
    "cancel": "Storno",
    "remove": "Odstr??ni??",
    "okText": "OK",
    "formatCellsDialog": {
        "title": "Form??tovanie",
        "categories": {
            "number": "????slo",
            "currency": "Mena",
            "date": "D??tum"
        }
    },
    "fontFamilyDialog": {
        "title": "P??smo"
    },
    "fontSizeDialog": {
        "title": "Ve??kos?? p??sma"
    },
    "bordersDialog": {
        "title": "Or??movania"
    },
    "alignmentDialog": {
        "title": "Zarovnanie",
        "buttons": {
            "justtifyLeft": "Zarovna?? v??avo",
            "justifyCenter": "Centrova??",
            "justifyRight": "Zarovna?? vpravo",
            "justifyFull": "Zarovna?? do bloku",
            "alignTop": "Zarovna?? nahor",
            "alignMiddle": "Zarovna?? na stred",
            "alignBottom": "Zarovna?? nadol"
        }
    },
    "mergeDialog": {
        "title": "Sp??janie buniek",
        "buttons": {
            "mergeCells": "Spoji?? v??etko",
            "mergeHorizontally": "Spoji?? vodorovne",
            "mergeVertically": "Spoji?? zvisle",
            "unmerge": "Rozpoji??"
        }
    },
    "freezeDialog": {
        "title": "Zmrazenie panelov",
        "buttons": {
            "freezePanes": "Zmrazi?? panely",
            "freezeRows": "Zmrazi?? riadky",
            "freezeColumns": "Zmrazi?? st??pce",
            "unfreeze": "Rozmrazi?? panely"
        }
    },
    "validationDialog": {
        "title": "Overenie ??dajom",
        "hintMessage": "Pros??m zadajte platn?? {0} hodnotu {1}.",
        "hintTitle": "Overenie {0}",
        "criteria": {
            "any": "Ak??ko??vek hodnota",
            "number": "????slo",
            "text": "Text",
            "date": "D??tum",
            "custom": "Vlastn?? vzorec",
            "list": "Zoznam"
        },
        "comparers": {
            "greaterThan": "v??????ie ako",
            "lessThan": "men??ie ako",
            "between": "medzi",
            "notBetween": "nie medzi",
            "equalTo": "rovn?? sa",
            "notEqualTo": "nerovn?? sa",
            "greaterThanOrEqualTo": "v??????ie alebo sa rovn??",
            "lessThanOrEqualTo": "men??ie alebo sa rovn??"
        },
        "comparerMessages": {
            "greaterThan": "v??????ie ako {0}",
            "lessThan": "men??ie ako {0}",
            "between": "medzi {0} a {1}",
            "notBetween": "nie medzi {0} a {1}",
            "equalTo": "rovn?? sa {0}",
            "notEqualTo": "nerovn?? sa {0}",
            "greaterThanOrEqualTo": "v??????ie alebo rovn?? sa {0}",
            "lessThanOrEqualTo": "men??ie alebo rovn?? sa {0}",
            "custom": "ktor?? vyhovuje: {0}"
        },
        "labels": {
            "criteria": "Krit??ri??",
            "comparer": "Porovn??va??",
            "min": "Min",
            "max": "Max",
            "value": "Hodnota",
            "start": "Za??iatok",
            "end": "Koniec",
            "onInvalidData": "Pri platn??ch ??dajoch",
            "rejectInput": "Odmietnu?? vstup",
            "showWarning": "Zobrazi?? varovanie",
            "showHint": "Zobrazi?? pom??cku",
            "hintTitle": "Titulok pom??cky",
            "hintMessage": "Spr??va pom??cky",
            "ignoreBlank": "Ignorova?? pr??zdne"
        },
        "placeholders": {
            "typeTitle": "Titulok typu",
            "typeMessage": "Spr??va typu"
        }
    },
    "exportAsDialog": {
        "title": "Exportova??...",
        "labels": {
            "fileName": "Meno s??boru",
            "saveAsType": "Ulo??i?? ako typ",
            "exportArea": "Exportova??",
            "paperSize": "Ve??kos?? papiera",
            "margins": "Okraje",
            "orientation": "Orient??cia",
            "print": "Tla??i??",
            "guidelines": "Pomocn?? ??iary",
            "center": "Centrova??",
            "horizontally": "Vodorovne",
            "vertically": "Zvisle"
        }
    },
    "modifyMergedDialog": {
        "errorMessage": "Nemo??no zmeni?? ??as?? spojenej bunky."
    },
    "useKeyboardDialog": {
        "title": "Kop??rovanie a vkladanie",
        "errorMessage": "Tieto akcie sa nemo??no ovl??da?? cez menu. Pros??m, pou??ite kl??vesov?? skratky namiesto:",
        "labels": {
            "forCopy": "na kop??rovanie",
            "forCut": "na vystrihnutie",
            "forPaste": "na vlo??enie"
        }
    },
    "unsupportedSelectionDialog": {
        "errorMessage": "T??to akcia nem????e by?? vykonan?? na viacn??sobnom v??bere."
    }
});
}

if (kendo.spreadsheet && kendo.spreadsheet.messages.filterMenu) {
kendo.spreadsheet.messages.filterMenu =
$.extend(true, kendo.spreadsheet.messages.filterMenu, {
    "sortAscending": "Usporiada?? v??ber od A do Z",
    "sortDescending": "Usporiada?? v??ber od Z do A",
    "filterByValue": "Filtrova?? pod??a hodnoty",
    "filterByCondition": "Filtrova?? pod??a podmienky",
    "apply": "Pou??i??",
    "search": "H??ada??",
    "addToCurrent": "Prida?? do aktu??lneho v??beru",
    "clear": "Vy??isti??",
    "blanks": "(Pr??zdne)",
    "operatorNone": "??iadne",
    "and": "A",
    "or": "ALEBO",
    "operators": {
        "string": {
            "contains": "Text obsahuje",
            "doesnotcontain": "Text neobsahuje",
            "startswith": "Text za????na s",
            "endswith": "Text kon???? s"
        },
        "date": {
            "eq": "D??tum je",
            "neq": "D??tum nie je",
            "lt": "D??tum je pred",
            "gt": "D??tum je po"
        },
        "number": {
            "eq": "Rovn?? sa",
            "neq": "Nerovn?? sa",
            "gte": "Je v??????ie alebo rovn?? sa",
            "gt": "Je v??????ie ako",
            "lte": "Je men??ie alebo rovn?? sa",
            "lt": "Je men??ie ako"
        }
    }
});
}

if (kendo.spreadsheet && kendo.spreadsheet.messages.toolbar) {
kendo.spreadsheet.messages.toolbar =
$.extend(true, kendo.spreadsheet.messages.toolbar, {
    "addColumnLeft": "Prida?? st??pec v??avo",
    "addColumnRight": "Prida?? st??pec vpravo",
    "addRowAbove": "Prida?? riadok nad",
    "addRowBelow": "Prida?? riadok pod",
    "alignment": "Zarovnanie",
    "alignmentButtons": {
        "justtifyLeft": "Zarovna?? v??avo",
        "justifyCenter": "Centrova??",
        "justifyRight": "Zarovna?? vpravo",
        "justifyFull": "Zarovna?? do bloku",
        "alignTop": "Zarovna?? nahor",
        "alignMiddle": "Zarovna?? na stred",
        "alignBottom": "Zarovna?? nadol"
    },
    "backgroundColor": "Pozadie",
    "bold": "Tu??n??",
    "borders": "Or??movania",
    "colorPicker": {
        "reset": "Nulova?? farbu",
        "customColor": "Vlastn?? farba..."
    },
    "copy": "Kop??rova??",
    "cut": "Vystrihn????",
    "deleteColumn": "Odstr??ni?? st??pec",
    "deleteRow": "Odstr??ni?? riadok",
    "excelImport": "Importova?? z Excelu...",
    "filter": "Filtrova??",
    "fontFamily": "P??smo",
    "fontSize": "Ve??kos?? p??sma",
    "format": "Vlastn?? form??t...",
    "formatTypes": {
        "automatic": "Automatick??",
        "number": "????slo",
        "percent": "Percent??",
        "financial": "Finan??n??",
        "currency": "Mena",
        "date": "D??tum",
        "time": "??as",
        "dateTime": "D??tum a ??as",
        "duration": "??asov?? ??sek",
        "moreFormats": "Viac form??tov..."
    },
    "formatDecreaseDecimal": "Zn????i?? destinn?? miesta",
    "formatIncreaseDecimal": "Zv????i?? desatinn?? miesta",
    "freeze": "Zmrazi?? panely",
    "freezeButtons": {
        "freezePanes": "Zmrazi?? panely",
        "freezeRows": "Zmrazi?? riadky",
        "freezeColumns": "Zmrazi?? st??pce",
        "unfreeze": "Rozmrazi?? panely"
    },
    "italic": "??ikm??",
    "merge": "Spoji?? bunky",
    "mergeButtons": {
        "mergeCells": "Spoji?? v??etko",
        "mergeHorizontally": "Spoji?? vodorovne",
        "mergeVertically": "Spoji?? zvisle",
        "unmerge": "Rozpoji??"
    },
    "open": "Otvori??...",
    "paste": "Vlo??i??",
    "quickAccess": {
        "redo": "Znova",
        "undo": "Sp????"
    },
    "saveAs": "Ulo??i?? Ako...",
    "sortAsc": "Usporiada?? vzostupne",
    "sortDesc": "Usporiada?? zostupne",
    "sortButtons": {
        "sortSheetAsc": "Usporiada?? list od A do Z",
        "sortSheetDesc": "Usporiada?? list od Z do A",
        "sortRangeAsc": "Usporiada?? v??ber od A do Z",
        "sortRangeDesc": "Usporiada?? v??ber od o Z do A"
    },
    "textColor": "Farba Textu",
    "textWrap": "Zalomi?? text",
    "underline": "Pod??iarknut??",
    "validation": "Overenie ??dajov..."
});
}

if (kendo.spreadsheet && kendo.spreadsheet.messages.view) {
kendo.spreadsheet.messages.view =
$.extend(true, kendo.spreadsheet.messages.view, {
    "errors": {
        "shiftingNonblankCells": "Nemo??no vlo??i?? bunky kv??li mo??nosti straty d??t. Vyberte in?? miesto na vlo??enie alebo odstr????te ??daje z konca listu.",
        "filterRangeContainingMerges": "Nemo??no vytvori?? filter na v??bere, ktor?? obsahuje sp??jania",
        "validationError": "Hodnota, ktor?? ste zadali poru??uje pravidl?? platnosti stanoven?? pre bunku."
    },
    "tabs": {
        "home": "Domov",
        "insert": "Vlo??i??",
        "data": "??daje"
    }
});
}

/* Slider messages */

if (kendo.ui.Slider) {
kendo.ui.Slider.prototype.options =
$.extend(true, kendo.ui.Slider.prototype.options,{
  "increaseButtonTitle": "Zv????i??",
  "decreaseButtonTitle": "Zn????i??"
});
}

/* TreeList messages */

if (kendo.ui.TreeList) {
kendo.ui.TreeList.prototype.options.messages =
$.extend(true, kendo.ui.TreeList.prototype.options.messages, {
    "noRows": "??iadne z??znamy na zobrazenie",
    "loading": "Nahr??vanie...",
    "requestFailed": "Po??iadavka zlyhala.",
    "retry": "Znova",
    "commands": {
        "edit": "Upravi??",
        "update": "Ulo??i??",
        "canceledit": "Storno",
        "create": "Prida?? nov?? z??znam",
        "createchild": "Prida?? podz??znam",
        "destroy": "Odstr??ni??",
        "excel": "Exportova?? do Excelu",
        "pdf": "Exportova?? do PDF"
    }
});
}

/* TreeView messages */

if (kendo.ui.TreeView) {
kendo.ui.TreeView.prototype.options.messages =
$.extend(true, kendo.ui.TreeView.prototype.options.messages,{
  "loading": "Nahr??vanie...",
  "requestFailed": "Po??iadavka zlyhala.",
  "retry": "Znova"
});
}

/* Upload messages */

if (kendo.ui.Upload) {
kendo.ui.Upload.prototype.options.localization=
$.extend(true, kendo.ui.Upload.prototype.options.localization,{
  "select": "Vyberte s??bory...",
  "cancel": "Storno",
  "retry": "Znova",
  "remove": "Odstr??ni??",
  "uploadSelectedFiles": "Odosla?? s??bory",
  "dropFilesHere": "potiahnite sem s??bory, ktor?? chcete odosla??",
  "statusUploading": "odosielanie",
  "statusUploaded": "hotovo",
  "statusWarning": "varovanie",
  "statusFailed": "zlyhanie",
  "headerStatusUploading": "Odosielanie...",
  "headerStatusUploaded": "Hotovo"
});
}

/* Validator messages */

if (kendo.ui.Validator) {
kendo.ui.Validator.prototype.options.messages =
$.extend(true, kendo.ui.Validator.prototype.options.messages,{
  "required": "{0} je po??adovan?? ??daj",
  "pattern": "{0} nie je platn?? ??daj",
  "min": "{0} mus?? by?? aspo?? {1}",
  "max": "{0} m????e by?? najviac {1}",
  "step": "{0} nie je platn?? ??daj",
  "email": "{0} nie je platn?? email",
  "url": "{0} nie je platn?? adresa URL",
  "date": "{0} nie je platn?? d??tum",
  "dateCompare": "Koncov?? d??tum mus?? by?? v???????? alebo rovn?? ako po??iato??n??"
});
}

/* Dialog */

if (kendo.ui.Dialog) {
kendo.ui.Dialog.prototype.options.messages =
$.extend(true, kendo.ui.Dialog.prototype.options.localization, {
  "close": "Zavrie??"
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
  "cancel": "Storno"
});
}

/* Prompt */
if (kendo.ui.Prompt) {
kendo.ui.Prompt.prototype.options.messages =
$.extend(true, kendo.ui.Prompt.prototype.options.localization, {
  "okText": "OK",
  "cancel": "Storno"
});
}

})(window.kendo.jQuery);
}));