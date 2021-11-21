export interface TaskBoard {
    expand?: string;
    issues?: Issues[];
    maxResults?: number;
    names?: Names;
    startAt?: number;
    total?: number;
}

export interface Issues {
    expand: string;
    fields: Fields;
    id: string;
    key: string;
    self: string;
    renderedFields: RenderedFields; 
}

export interface Fields {
    aggregateprogress: AggregateProgress;
    aggregatetimeestimate: string;
    aggregatetimeoriginalestimate: number;
    aggregatetimespent: string;
    assignee: string;
    attachment?: Attachment[];
    comment: Comment;
    components?: string[];
    created: string;
    creator: Creator;
    customfield_10000: string;
    customfield_10001: string;
    customfield_10002: string;
    customfield_10003: string;
    customfield_10004: string;
    customfield_10005: string;
    customfield_10006: string;
    customfield_10007: string;
    customfield_10008: string;
    customfield_10009: string;
    customfield_10010: string;
    customfield_10011:  string;
    customfield_10012: CustomField10012;
    customfield_10013: string;
    customfield_10014: string;
    customfield_10015: string;
    customfield_10016: string;
    customfield_10017: string;
    customfield_10018: Customfield10018;
    customfield_10019: string;
    customfield_10020: string;
    customfield_10021: string;
    customfield_10022: string;
    customfield_10023?: string[];
    customfield_10024: string;
    customfield_10027: string;
    customfield_10028: string;
    customfield_10029: string;
    customfield_10030: string;
    description: string;
    duedate: string;
    environment: string;
    fixVersions?: string[]
    issuelinks?: string[]
    issuerestriction: Issuerestriction;
    issuetype: IssueType;
    labels: string[];
    lastViewed: string;
    priority: Priority;
    progress: Progress;
    project: Project;
    reporter: Reporter;
    resolution: string;
    resolutiondate: string;
    security: string;
    status: Status;
    statuscategorychangedate: string;
    subtasks?: string[];
    summary: string;
    timeestimate: string;
    timeoriginalestimate: number;
    timespent: string;
    timetracking: Timetracking;
    updated: string;
    versions?: string[];
    votes: Votes;
    watches: Watches;
    worklog?: Worklog;
    workratio: number;
}

export interface RenderedFields {
    aggregateprogress: string;
    aggregatetimeestimate: string;
    aggregatetimeoriginalestimate: string
    aggregatetimespent: string;
    assignee: string;
    attachment?: Attachment;
    comment: Comment;
    components: string;
    created: string;
    creator: string;
    customfield_10000: string;
    customfield_10001: string;
    customfield_10002: string;
    customfield_10003: string;
    customfield_10004: string;
    customfield_10005: string;
    customfield_10006: string;
    customfield_10007: string;
    customfield_10008: string;
    customfield_10009: string;
    customfield_10010: string;
    customfield_10011: string;
    customfield_10012: string;
    customfield_10013: string;
    customfield_10014: string;
    customfield_10015: string;
    customfield_10016: string;
    customfield_10017: string;
    customfield_10018: string;
    customfield_10019: string;
    customfield_10020: string;
    customfield_10021: string;
    customfield_10022: string;
    customfield_10023: string;
    customfield_10024: string;
    customfield_10027: string;
    customfield_10028: string;
    customfield_10029: string;
    customfield_10030: string;
    description: string;
    duedate: string;
    environment: string;
    fixVersions: string;
    issuelinks: string;
    issuerestriction: string;
    issuetype: string;
    labels: string;
    lastViewed: string;
    priority: string;
    progress: string;
    project: string;
    reporter: string;
    resolution: string;
    resolutiondate: string;
    security: string;
    status: string;
    statuscategorychangedate: string;
    subtasks: string;
    summary: string;
    timeestimate: string;
    timeoriginalestimate: string;
    timespent: string;
    timetracking?: Timetracking;
    updated: string;
    versions: string;
    votes: string;
    watches: string;
    worklog: Worklog
    workratio: string;
}

export interface Comment {
    comments?: string[], 
    self: string; 
    maxResults: number; 
    total: number; 
    startAt: number;
}

export interface Worklog {
    worklogs?: string[], 
    startAt: number; 
    maxResults: number; 
    total: number;
}

export interface Names {
    aggregateprogress: string;
    aggregatetimeestimate: string;
    aggregatetimeoriginalestimate: string;
    aggregatetimespent: string;
    assignee: string;
    attachment: string;
    comment: string;
    components: string;
    created: string;
    creator: string;
    customfield_10000: string;
    customfield_10001: string;
    customfield_10002: string;
    customfield_10003: string;
    customfield_10004: string;
    customfield_10005: string;
    customfield_10006: string;
    customfield_10007: string;
    customfield_10008: string;
    customfield_10009: string;
    customfield_10010: string;
    customfield_10011: string;
    customfield_10012: string;
    customfield_10013: string;
    customfield_10014: string;
    customfield_10015: string;
    customfield_10016: string;
    customfield_10017: string;
    customfield_10018: string;
    customfield_10019: string;
    customfield_10020: string;
    customfield_10021: string;
    customfield_10022: string;
    customfield_10023: string;
    customfield_10024: string;
    customfield_10027: string;
    customfield_10028: string;
    customfield_10029: string;
    customfield_10030: string;
    description: string;
    duedate: string;
    environment: string;
    fixVersions: string;
    issuelinks: string;
    issuerestriction: string;
    issuetype: string;
    labels: string;
    lastViewed: string;
    priority: string;
    progress: string;
    project: string;
    reporter: string;
    resolution: string;
    resolutiondate: string;
    security: string;
    status: string;
    statuscategorychangedate: string;
    subtasks: string;
    summary: string;
    timeestimate: string;
    timeoriginalestimate: string;
    timespent: string;
    timetracking: string;
    updated: string;
    versions: string;
    votes: string;
    watches: string;
    worklog: string;
    workratio: string;  
}

export interface Timetracking {
    originalEstimate: string;
    remainingEstimate: string;
    originalEstimateSeconds: number;
    remainingEstimateSeconds: number;
}

export interface Attachment {
    content: string;
    created: string;
    filename: string;
    id: string;
    mimeType: string;
    self: string;
    size: string;
    thumbnail: string;
}

interface AggregateProgress {
    progress: number; 
    total: number;
}

interface CustomField10012 {
    self: string; 
    value: string;
    id: string;
}

interface Creator {
    self: string;
    accountId:string;
    emailAddress:string;
    avatarUrls?:AvatarUrls;
    displayName:string;
    active: boolean;
    timeZone:string;
    accountType:string;
}

interface AvatarUrls {[key: string]: string}

interface Customfield10018 {
    hasEpicLinkFieldDependency: boolean;
    showField: boolean;
    nonEditableReason: NonEditableReason;
}

interface NonEditableReason {
    reason: string;
    message: string;
}

interface Issuerestriction {
    issuerestrictions: Issuerestrictions;
    shouldDisplay: boolean;
}

interface Issuerestrictions {
   issue: string;
}

interface IssueType {
    self: string;
    id: string;
    description: string;
    iconUrl: string;
    name: string;
    subtask: boolean;
}

interface Priority {
    self: string;
    iconUrl: string;
    name: string;
    id: string;
}

interface Progress {
   progress: number;
   total: number;
}

interface Project {
    self: string;
    id: string;
    key: string;
    name: string;
    projectTypeKey: string;
    simplified: boolean,
    avatarUrls: AvatarUrls;
}

interface Reporter {
    self: string;
    accountId: string;
    avatarUrls: AvatarUrls;
    displayName: string;
    active: boolean;
    timeZone: string;
    accountType: string;
}

interface Status {
    self: string;
    description: string;
    iconUrl: string;
    name: string;
    id: string;
    statusCategory: StatusCategory;
}

interface StatusCategory {
    self: string;
    id: number,
    key: string;
    colorName: string;
    name: string;
}

interface Votes {
    self: string;
    votes: number;
    hasVoted: boolean;
}

interface Watches {
    self: string;
    watchCount: number;
    isWatching: boolean;
}

export interface StartEndDays {
    startDate: string;
    endDate: string;
}

export enum ColorPriority {
    LOW = 'Low',
    MEDIUM = 'Medium',
    LOWEST = 'Lowest'
}

export const Epic = 'Epic';
export const Roadmap = 'Roadmap';