import { TaskBoard } from './models/task.board.interface'
export const mockData: TaskBoard = {
    "expand":"schema,names",
    "startAt":0,
    "maxResults":50,
    "total":15,
    "issues":[
        {
            "expand":"operations,versionedRepresentations,editmeta,changelog,renderedFields",
            "id":"10014",
            "self":"https://pinguintest.atlassian.net/rest/api/2/issue/10014",
            "key":"IN-7",
            "renderedFields":{
               "statuscategorychangedate":"25/Aug/19 11:27 PM",
               "issuetype":'',
               "timespent":'',
               "customfield_10030":'',
               "project":'',
               "fixVersions":'',
               "aggregatetimespent":'',
               "resolution":'',
               "customfield_10027":'',
               "customfield_10028":'',
               "customfield_10029":'',
               "resolutiondate":'',
               "workratio":'',
               "watches":'',
               "lastViewed":"Heute 10:46 AM",
               "issuerestriction":'',
               "created":"25/Aug/19 11:27 PM",
               "customfield_10020":'',
               "customfield_10021":'',
               "customfield_10022":'',
               "customfield_10023":'',
               "priority":'',
               "customfield_10024":'',
               "labels":'',
               "customfield_10016":'',
               "customfield_10017":"",
               "customfield_10018":'',
               "customfield_10019":'',
               "aggregatetimeoriginalestimate":"2 weeks",
               "timeestimate":"2 weeks",
               "versions":'',
               "issuelinks":'',
               "assignee":'',
               "updated":"25/Aug/19 11:28 PM",
               "status":'',
               "components":'',
               "timeoriginalestimate":"2 weeks",
               "description":"",
               "customfield_10010":'',
               "customfield_10011":"Refactor Grid Geometry",
               "customfield_10012":'',
               "customfield_10013":"ghx-label-6",
               "customfield_10014":'',
               "timetracking":{
                  "originalEstimate":"2 Wochen",
                  "remainingEstimate":"2 Wochen",
                  "originalEstimateSeconds":288000,
                  "remainingEstimateSeconds":288000
               },
               "customfield_10015":'',
               "customfield_10005":'',
               "customfield_10006":'',
               "customfield_10007":'',
               "security":'',
               "customfield_10008":'',
               "aggregatetimeestimate":"2 weeks",
               "customfield_10009":'',
               "summary":'',
               "creator":'',
               "subtasks":'',
               "reporter":'',
               "aggregateprogress":'',
               "customfield_10000":'',
               "customfield_10001":'',
               "customfield_10002":'',
               "customfield_10003":'',
               "customfield_10004":'',
               "environment":"",
               "duedate":"02/Sep/19",
               "progress":'',
               "votes":'',
               "comment":{
                  "comments":[
                     
                  ],
                  "self":"https://pinguintest.atlassian.net/rest/api/2/issue/10014/comment",
                  "maxResults":0,
                  "total":0,
                  "startAt":0
               },
               "worklog":{
                  "startAt":0,
                  "maxResults":20,
                  "total":0,
                  "worklogs":[
                     
                  ]
               }
            },
            "fields":{
               "statuscategorychangedate":"2019-08-25T23:27:28.035+0200",
               "issuetype":{
                  "self":"https://pinguintest.atlassian.net/rest/api/2/issuetype/10000",
                  "id":"10000",
                  "description":"Eine Sammlung ähnlicher Bugs, Stories und Tasks.",
                  "iconUrl":"https://pinguintest.atlassian.net/images/icons/issuetypes/epic.svg",
                  "name":"Epic",
                  "subtask":false
               },
               "timespent":'',
               "customfield_10030":'',
               "project":{
                  "self":"https://pinguintest.atlassian.net/rest/api/2/project/10003",
                  "id":"10003",
                  "key":"IN",
                  "name":"Infrastructure",
                  "projectTypeKey":"software",
                  "simplified":false,
                  "avatarUrls":{
                     "48x48":"https://pinguintest.atlassian.net/secure/projectavatar?avatarId=10324",
                     "24x24":"https://pinguintest.atlassian.net/secure/projectavatar?size=small&s=small&avatarId=10324",
                     "16x16":"https://pinguintest.atlassian.net/secure/projectavatar?size=xsmall&s=xsmall&avatarId=10324",
                     "32x32":"https://pinguintest.atlassian.net/secure/projectavatar?size=medium&s=medium&avatarId=10324"
                  }
               },
               "fixVersions":[
                  
               ],
               "aggregatetimespent":'',
               "resolution":'',
               "customfield_10027":'',
               "customfield_10028":'',
               "customfield_10029":'',
               "resolutiondate":'',
               "workratio":0,
               "watches":{
                  "self":"https://pinguintest.atlassian.net/rest/api/2/issue/IN-7/watchers",
                  "watchCount":1,
                  "isWatching":false
               },
               "lastViewed":"2021-02-03T10:46:58.728+0100",
               "issuerestriction":{
                  "issuerestrictions":{
                     "issue": ''
                  },
                  "shouldDisplay":false
               },
               "created":"2019-08-25T23:27:27.881+0200",
               "customfield_10020":'',
               "customfield_10021":'',
               "customfield_10022":"0|i00033:",
               "customfield_10023":[
                  
               ],
               "priority":{
                  "self":"https://pinguintest.atlassian.net/rest/api/2/priority/3",
                  "iconUrl":"https://pinguintest.atlassian.net/images/icons/priorities/medium.svg",
                  "name":"Medium",
                  "id":"3"
               },
               "customfield_10024":'',
               "labels":[
                  "Content-Editing",
                  "Frontend",
                  "Maintenance",
                  "Roadmap"
               ],
               "customfield_10016":'',
               "customfield_10017":'',
               "customfield_10018":{
                  "hasEpicLinkFieldDependency":false,
                  "showField":false,
                  "nonEditableReason":{
                     "reason":"PLUGIN_LICENSE_ERROR",
                     "message":"Die übergeordnete Verknüpfung ist nur für Jira Premium-Benutzer verfügbar."
                  }
               },
               "customfield_10019":'',
               "aggregatetimeoriginalestimate":288000,
               "timeestimate": '288000',
               "versions":[
                  
               ],
               "issuelinks":[
                  
               ],
               "assignee":'',
               "updated":"2019-08-25T23:28:15.580+0200",
               "status":{
                  "self":"https://pinguintest.atlassian.net/rest/api/2/status/10001",
                  "description":"",
                  "iconUrl":"https://pinguintest.atlassian.net/",
                  "name":"Zu erledigen",
                  "id":"10001",
                  "statusCategory":{
                     "self":"https://pinguintest.atlassian.net/rest/api/2/statuscategory/2",
                     "id":2,
                     "key":"new",
                     "colorName":"blue-gray",
                     "name":"Zu erledigen"
                  }
               },
               "components":[
                  
               ],
               "timeoriginalestimate":288000,
               "description":'',
               "customfield_10010":'',
               "customfield_10011":"Refactor Grid Geometry",
               "customfield_10012":{
                  "self":"https://pinguintest.atlassian.net/rest/api/2/customFieldOption/10016",
                  "value":"To Do",
                  "id":"10016"
               },
               "customfield_10013":"ghx-label-6",
               "customfield_10014":'',
               "timetracking":{
                  "originalEstimate":"2w",
                  "remainingEstimate":"2w",
                  "originalEstimateSeconds":288000,
                  "remainingEstimateSeconds":288000
               },
               "customfield_10015":'',
               "customfield_10005":'',
               "customfield_10006":'',
               "customfield_10007":'',
               "security":'',
               "customfield_10008":'',
               "aggregatetimeestimate": '288000',
               "customfield_10009":'',
               "attachment":[
                  
               ],
               "summary":"Refactor Grid Geometry",
               "creator":{
                  "self":"https://pinguintest.atlassian.net/rest/api/2/user?accountId=5cb86298f46847119e1bd2ac",
                  "accountId":"5cb86298f46847119e1bd2ac",
                  "displayName":"Виктория Веросова",
                  "active":false,
                  "timeZone":"Europe/Berlin",
                  "accountType":"atlassian",
                  "emailAddress": "wadudkhandaker@gmail.com"
               },
               "subtasks":[
                  
               ],
               "reporter":{
                  "self":"https://pinguintest.atlassian.net/rest/api/2/user?accountId=5cb86298f46847119e1bd2ac",
                  "accountId":"5cb86298f46847119e1bd2ac",
                  "displayName":"Виктория Веросова",
                  "active":false,
                  "timeZone":"Europe/Berlin",
                  "accountType":"atlassian",
                  "avatarUrls": {}
               },
               "aggregateprogress":{
                  "progress":0,
                  "total":288000
               },
               "customfield_10000":"{}",
               "customfield_10001":'',
               "customfield_10002":'',
               "customfield_10003":'',
               "customfield_10004":'',
               "environment":'',
               "duedate":"2019-09-02",
               "progress":{
                  "progress":0,
                  "total":288000
               },
               "votes":{
                  "self":"https://pinguintest.atlassian.net/rest/api/2/issue/IN-7/votes",
                  "votes":0,
                  "hasVoted":false
               },
               "comment":{
                  "comments":[
                     
                  ],
                  "self":"https://pinguintest.atlassian.net/rest/api/2/issue/10014/comment",
                  "maxResults":0,
                  "total":0,
                  "startAt":0
               },
               "worklog":{
                  "startAt":0,
                  "maxResults":20,
                  "total":0,
                  "worklogs":[
                     
                  ]
               }
            }
         }
    ],
    "names":{
       "statuscategorychangedate":"Statuskategorie geändert",
       "issuetype":"Vorgangstyp",
       "timespent":"Benötigte Zeit",
       "customfield_10030":"Target end",
       "project":"Projekt",
       "fixVersions":"Lösungsversionen",
       "aggregatetimespent":"Σ Benötigte Zeit",
       "resolution":"Lösung",
       "customfield_10027":"Flagged",
       "customfield_10028":"Satisfaction",
       "customfield_10029":"Target start",
       "resolutiondate":"Erledigt",
       "workratio":"Verhältnis tatsächlicher zu geschätzter Arbeit",
       "issuerestriction":"Beschränken auf",
       "watches":"Beobachter",
       "lastViewed":"Zuletzt angezeigt",
       "created":"Erstellt",
       "customfield_10020":"[CHART] Time in Status",
       "customfield_10021":"Sprint",
       "customfield_10022":"Rank",
       "customfield_10023":"Request participants",
       "priority":"Priorität",
       "customfield_10024":"Story Points",
       "labels":"Label",
       "customfield_10016":"Story Point-Schätzung",
       "customfield_10017":"Issue color",
       "customfield_10018":"Parent Link",
       "customfield_10019":"[CHART] Date of First Response",
       "aggregatetimeoriginalestimate":"Σ Ursprüngliche Schätzung",
       "timeestimate":"Restschätzung",
       "versions":"Betrifft Versionen",
       "issuelinks":"Verknüpfte Vorgänge",
       "assignee":"Zugewiesene Person",
       "updated":"Aktualisiert",
       "status":"Status",
       "components":"Komponenten",
       "timeoriginalestimate":"Ursprüngliche Schätzung",
       "description":"Beschreibung",
       "customfield_10010":"Request Type",
       "customfield_10011":"Epic Name",
       "customfield_10012":"Epic Status",
       "customfield_10013":"Epic Color",
       "customfield_10014":"Epic Link",
       "customfield_10015":"Start date",
       "timetracking":"Zeiterfassung",
       "customfield_10005":"Change type",
       "customfield_10006":"Change risk",
       "security":"Sicherheitsstufe",
       "customfield_10007":"Change reason",
       "customfield_10008":"Change start date",
       "aggregatetimeestimate":"Σ Restschätzung",
       "attachment":"Anhang",
       "customfield_10009":"Change completion date",
       "summary":"Zusammenfassung",
       "creator":"Ersteller",
       "subtasks":"Sub-Tasks",
       "reporter":"Autor",
       "customfield_10000":"Entwicklung",
       "aggregateprogress":"Σ Fortschritt",
       "customfield_10001":"Team",
       "customfield_10002":"Organizations",
       "customfield_10003":"Approvers",
       "customfield_10004":"Impact",
       "environment":"Umgebung",
       "duedate":"Fälligkeitsdatum",
       "progress":"Fortschritt",
       "votes":"Stimmen",
       "comment":"Kommentieren",
       "worklog":"Arbeit protokollieren"
    }
 }