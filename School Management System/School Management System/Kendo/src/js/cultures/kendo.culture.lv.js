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
(function( window, undefined ) {
    kendo.cultures["lv"] = {
        name: "lv",
        numberFormat: {
            pattern: ["-n"],
            decimals: 2,
            ",": "??",
            ".": ",",
            groupSize: [3],
            percent: {
                pattern: ["-n%","n%"],
                decimals: 2,
                ",": "??",
                ".": ",",
                groupSize: [3],
                symbol: "%"
            },
            currency: {
                name: "",
                abbr: "",
                pattern: ["-n $","n $"],
                decimals: 2,
                ",": "??",
                ".": ",",
                groupSize: [3],
                symbol: "???"
            }
        },
        calendars: {
            standard: {
                days: {
                    names: ["sv??tdiena","pirmdiena","otrdiena","tre??diena","ceturtdiena","piektdiena","sestdiena"],
                    namesAbbr: ["sv??td.","pirmd.","otrd.","tre??d.","ceturtd.","piektd.","sestd."],
                    namesShort: ["Sv","Pr","Ot","Tr","Ce","Pk","Se"]
                },
                months: {
                    names: ["janv??ris","febru??ris","marts","apr??lis","maijs","j??nijs","j??lijs","augusts","septembris","oktobris","novembris","decembris"],
                    namesAbbr: ["janv.","febr.","marts","apr.","maijs","j??n.","j??l.","aug.","sept.","okt.","nov.","dec."]
                },
                AM: ["priek??p.","priek??p.","PRIEK??P."],
                PM: ["p??cp.","p??cp.","P??CP."],
                patterns: {
                    d: "dd.MM.yyyy",
                    D: "dddd, yyyy. 'gada' d. MMMM",
                    F: "dddd, yyyy. 'gada' d. MMMM HH:mm:ss",
                    g: "dd.MM.yyyy HH:mm",
                    G: "dd.MM.yyyy HH:mm:ss",
                    m: "d. MMMM",
                    M: "d. MMMM",
                    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
                    t: "HH:mm",
                    T: "HH:mm:ss",
                    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                    y: "yyyy. 'g'. MMMM",
                    Y: "yyyy. 'g'. MMMM"
                },
                "/": ".",
                ":": ":",
                firstDay: 1
            }
        }
    }
})(this);
}));