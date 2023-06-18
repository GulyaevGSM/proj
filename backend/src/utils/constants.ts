export enum Routes {
    AUTH = 'auth',
    USERS = 'users',
    USERS_PROFILES = 'users/profiles',
    CONVERSATIONS = 'conversations',
    MESSAGES = 'conversations/:id/messages',
    GROUPS = 'groups',
    GROUP_MESSAGES = 'groups/:id/messages',
    GROUP_RECIPIENTS = 'groups/:id/recipients',
    EXISTS = 'exists',
    FRIENDS = 'friends',
    FRIEND_REQUESTS = 'friends/requests',
    USER_PRESENCE = 'users/presence',
}

export enum Services {
    AUTH = 'AUTH_SERVICE',
    USERS = 'USERS_SERVICE',
    ADS = 'ADS_SERVICE'
}