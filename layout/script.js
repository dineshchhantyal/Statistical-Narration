window.onload = function () {

    console.log('Attempting Connection...');

    // const socket = new WebSocket('ws://localhost:8080/2579089');


    socket.addEventListener('open', function (event) {
        socket.send('Hello Server!');
    }
    );

    socket.addEventListener('message', function (event) {
        const message = JSON.parse(event.data);
        console.log(message);
        // populate the html
        const messageListDiv = document.getElementsByClassName('update-list');
        const messageDiv = document.createElement('div');
        // <div class="update success">
        //     <p>
        //         <span class="time">10:15:</span> Team A secures Round 10 with a
        //         defuse at Site B.
        //     </p>
        // </div>
        messageDiv.classList.add('update');
        messageDiv.classList.add(message.type);
        const messageParagraph = document.createElement('p');
        const messageTimeSpan = document.createElement('span');
        messageTimeSpan.classList.add('time');
        messageTimeSpan.innerText = message.occurredAt;
        messageParagraph.append(messageTimeSpan);
        messageParagraph.append(message.message);
        messageDiv.append(messageParagraph);

        messageDiv.append(message);
        messageListDiv[0].append(messageDiv);
    }
    );

    socket.addEventListener('close', function (event) {
        console.log('Connection closed');
    }
    );
}






// message event.data typescript interface
// export interface Message {
//     id: string
//     occurredAt: string
//     correlationId: string
//     publishedAt: string
//     seriesId: string
//     sequenceNumber: number
//     sessionSequenceNumber: number
//     events: Event[]
// }

// export interface Event {
//     id: string
//     includesFullState: boolean
//     type: string
//     actor: Actor
//     action: string
//     target: Target
//     seriesStateDelta: SeriesStateDelta
//     seriesState: SeriesState
// }

// export interface Actor {
//     type: string
//     id: string
//     stateDelta: StateDelta
//     state: State
// }

// export interface StateDelta {
//     id: string
//     series: Series
//     game: Game
// }

// export interface Series {
//     id: string
// }

// export interface Game {
//     id: string
//     inventoryValue: number
//     netWorth: number
//     items: Item[]
// }

// export interface Item {
//     id: string
//     statePath: StatePath[]
//     equipped: boolean
//     stashed: boolean
// }

// export interface StatePath {
//     id: string
// }

// export interface State {
//     id: string
//     teamId: string
//     side: string
//     series: Series2
//     game: Game2
//     name: string
// }

// export interface Series2 {
//     id: string
//     statePath: StatePath2[]
//     name: string
//     participationStatus: string
//     kills: number
//     killAssistsReceived: number
//     killAssistsGiven: number
//     killAssistsReceivedFromPlayer: KillAssistsReceivedFromPlayer[]
//     weaponKills: WeaponKills
//     teamkills: number
//     teamkillAssistsReceived: number
//     teamkillAssistsGiven: number
//     teamkillAssistsReceivedFromPlayer: any[]
//     weaponTeamkills: WeaponTeamkills
//     selfkills: number
//     deaths: number
//     structuresDestroyed: number
//     structuresCaptured: number
//     objectives: Objec[]
//     multikills: any[]
//     externalLinks: ExternalLink[]
//     headshots: number
//     teamHeadshots: number
// }

// export interface StatePath2 {
//     id: string
// }

// export interface KillAssistsReceivedFromPlayer {
//     id: string
//     playerId: string
//     killAssistsReceived: number
// }

// export interface WeaponKills {
//     elite: number
//     deagle: number
//     m4a1_silencer: number
//     ak47: number
//     awp: number
//     galilar: number
//     tec9: number
// }

// export interface WeaponTeamkills { }

// export interface Objec {
//     id: string
//     statePath: StatePath3[]
//     type: string
//     completionCount: number
// }

// export interface StatePath3 {
//     id: string
// }

// export interface ExternalLink {
//     dataProvider: DataProvider
//     externalEntity: ExternalEntity
// }

// export interface DataProvider {
//     name: string
// }

// export interface ExternalEntity {
//     id: string
// }

// export interface Game2 {
//     id: string
//     statePath: StatePath4[]
//     name: string
//     character: Character
//     participationStatus: string
//     money: number
//     inventoryValue: number
//     netWorth: number
//     kills: number
//     killAssistsReceived: number
//     killAssistsGiven: number
//     killAssistsReceivedFromPlayer: KillAssistsReceivedFromPlayer2[]
//     weaponKills: WeaponKills2
//     multikills: any[]
//     teamkills: number
//     teamkillAssistsReceived: number
//     teamkillAssistsGiven: number
//     teamkillAssistsReceivedFromPlayer: any[]
//     weaponTeamkills: WeaponTeamkills2
//     selfkills: number
//     deaths: number
//     structuresDestroyed: number
//     structuresCaptured: number
//     items: Item2[]
//     objectives: Objec2[]
//     abilities: any[]
//     position: any
//     externalLinks: ExternalLink2[]
//     alive: boolean
//     currentArmor: number
//     currentHealth: number
//     damageDealt: number
//     damageTaken: number
//     headshots: number
//     maxHealth: number
//     selfdamageDealt: number
//     selfdamageTaken: number
//     teamdamageDealt: number
//     teamHeadshots: number
//     teamdamageTaken: number
// }

// export interface StatePath4 {
//     id: string
// }

// export interface Character {
//     name: string
//     id: string
// }

// export interface KillAssistsReceivedFromPlayer2 {
//     id: string
//     playerId: string
//     killAssistsReceived: number
// }

// export interface WeaponKills2 {
//     elite: number
//     deagle: number
//     m4a1_silencer: number
//     ak47: number
//     awp: number
//     galilar: number
//     tec9: number
// }

// export interface WeaponTeamkills2 { }

// export interface Item2 {
//     id: string
//     statePath: StatePath5[]
//     equipped: boolean
//     stashed: boolean
// }

// export interface StatePath5 {
//     id: string
// }

// export interface Objec2 {
//     id: string
//     statePath: StatePath6[]
//     type: string
//     completionCount: number
// }

// export interface StatePath6 {
//     id: string
// }

// export interface ExternalLink2 {
//     dataProvider: DataProvider2
//     externalEntity: ExternalEntity2
// }

// export interface DataProvider2 {
//     name: string
// }

// export interface ExternalEntity2 {
//     id: string
// }

// export interface Target {
//     type: string
//     id: string
//     stateDelta: StateDelta2
//     state: State2
// }

// export interface StateDelta2 {
//     id: string
//     statePath: StatePath7[]
//     equipped: boolean
//     stashed: boolean
// }

// export interface StatePath7 {
//     id: string
// }

// export interface State2 {
//     id: string
//     statePath: StatePath8[]
//     equipped: boolean
//     stashed: boolean
// }

// export interface StatePath8 {
//     id: string
// }

// export interface SeriesStateDelta {
//     id: string
//     games: Game3[]
// }

// export interface Game3 {
//     id: string
//     teams: Team[]
// }

// export interface Team {
//     id: string
//     inventoryValue: number
//     netWorth: number
//     players: Player[]
// }

// export interface Player {
//     id: string
//     inventoryValue: number
//     netWorth: number
//     items: Item3[]
// }

// export interface Item3 {
//     id: string
//     statePath: StatePath9[]
//     equipped: boolean
//     stashed: boolean
// }

// export interface StatePath9 {
//     id: string
// }

// export interface SeriesState {
//     id: string
//     title: Title
//     format: string
//     started: boolean
//     startedAt: string
//     finished: boolean
//     valid: boolean
//     teams: Team2[]
//     games: Game4[]
//     draftActions: any[]
// }

// export interface Title {
//     nameShortened: string
// }

// export interface Team2 {
//     id: string
//     statePath: StatePath10[]
//     name: string
//     score: number
//     won: boolean
//     kills: number
//     killAssistsReceived: number
//     killAssistsGiven: number
//     killAssistsReceivedFromPlayer: KillAssistsReceivedFromPlayer3[]
//     weaponKills: WeaponKills3
//     multikills: any[]
//     teamkills: number
//     teamkillAssistsReceived: number
//     teamkillAssistsGiven: number
//     teamkillAssistsReceivedFromPlayer: any[]
//     weaponTeamkills: WeaponTeamkills3
//     selfkills: number
//     deaths: number
//     structuresDestroyed: number
//     structuresCaptured: number
//     objectives: Objec3[]
//     players: Player2[]
//     headshots: number
//     teamHeadshots: number
// }

// export interface StatePath10 {
//     id: string
// }

// export interface KillAssistsReceivedFromPlayer3 {
//     id: string
//     playerId: string
//     killAssistsReceived: number
// }

// export interface WeaponKills3 {
//     usp_silencer: number
//     elite?: number
//     deagle?: number
//     hegrenade?: number
//     m4a1_silencer: number
//     awp: number
//     ak47: number
//     mp9: number
//     famas: number
//     glock: number
//     galilar: number
//     p250?: number
//     mac10: number
//     tec9: number
//     molotov?: number
//     m4a1?: number
// }

// export interface WeaponTeamkills3 { }

// export interface Objec3 {
//     id: string
//     statePath: StatePath11[]
//     type: string
//     completionCount: number
// }

// export interface StatePath11 {
//     id: string
// }

// export interface Player2 {
//     id: string
//     statePath: StatePath12[]
//     name: string
//     participationStatus: string
//     kills: number
//     killAssistsReceived: number
//     killAssistsGiven: number
//     killAssistsReceivedFromPlayer: KillAssistsReceivedFromPlayer4[]
//     weaponKills: WeaponKills4
//     teamkills: number
//     teamkillAssistsReceived: number
//     teamkillAssistsGiven: number
//     teamkillAssistsReceivedFromPlayer: any[]
//     weaponTeamkills: WeaponTeamkills4
//     selfkills: number
//     deaths: number
//     structuresDestroyed: number
//     structuresCaptured: number
//     objectives: Objec4[]
//     multikills: any[]
//     externalLinks: ExternalLink3[]
//     headshots: number
//     teamHeadshots: number
// }

// export interface StatePath12 {
//     id: string
// }

// export interface KillAssistsReceivedFromPlayer4 {
//     id: string
//     playerId: string
//     killAssistsReceived: number
// }

// export interface WeaponKills4 {
//     mp9?: number
//     m4a1_silencer: number
//     ak47: number
//     glock?: number
//     p250?: number
//     mac10?: number
//     galilar?: number
//     tec9?: number
//     usp_silencer?: number
//     hegrenade?: number
//     deagle?: number
//     awp?: number
//     famas?: number
//     m4a1?: number
//     elite?: number
//     molotov?: number
// }

// export interface WeaponTeamkills4 { }

// export interface Objec4 {
//     id: string
//     statePath: StatePath13[]
//     type: string
//     completionCount: number
// }

// export interface StatePath13 {
//     id: string
// }

// export interface ExternalLink3 {
//     dataProvider: DataProvider3
//     externalEntity: ExternalEntity3
// }

// export interface DataProvider3 {
//     name: string
// }

// export interface ExternalEntity3 {
//     id: string
// }

// export interface Game4 {
//     id: string
//     statePath: StatePath14[]
//     sequenceNumber: number
//     map: Map
//     started: boolean
//     finished: boolean
//     paused: boolean
//     clock: Clock
//     structures: any[]
//     nonPlayerCharacters: any[]
//     teams: Team3[]
//     segments: Segment[]
//     draftActions: any[]
// }

// export interface StatePath14 {
//     id: string
// }

// export interface Map {
//     name: string
// }

// export interface Clock {
//     id: string
//     type: string
//     ticking: boolean
//     ticksBackwards: boolean
//     currentSeconds: number
//     updatedAt: string
// }

// export interface Team3 {
//     id: string
//     statePath: StatePath15[]
//     name: string
//     side: string
//     won: boolean
//     score: number
//     money: number
//     inventoryValue: number
//     netWorth: number
//     kills: number
//     killAssistsReceived: number
//     killAssistsGiven: number
//     killAssistsReceivedFromPlayer: KillAssistsReceivedFromPlayer5[]
//     weaponKills: WeaponKills5
//     multikills: any[]
//     teamkills: number
//     teamkillAssistsReceived: number
//     teamkillAssistsGiven: number
//     teamkillAssistsReceivedFromPlayer: any[]
//     weaponTeamkills: WeaponTeamkills5
//     selfkills: number
//     deaths: number
//     structuresDestroyed: number
//     structuresCaptured: number
//     objectives: Objec5[]
//     players: Player3[]
//     damageDealt: number
//     damageTaken: number
//     headshots: number
//     selfdamageDealt: number
//     selfdamageTaken: number
//     teamdamageDealt: number
//     teamHeadshots: number
//     teamdamageTaken: number
// }

// export interface StatePath15 {
//     id: string
// }

// export interface KillAssistsReceivedFromPlayer5 {
//     id: string
//     playerId: string
//     killAssistsReceived: number
// }

// export interface WeaponKills5 {
//     usp_silencer: number
//     elite?: number
//     deagle?: number
//     hegrenade?: number
//     m4a1_silencer: number
//     awp: number
//     ak47: number
//     mp9: number
//     famas: number
//     glock: number
//     galilar: number
//     p250?: number
//     mac10: number
//     tec9: number
//     molotov?: number
//     m4a1?: number
// }

// export interface WeaponTeamkills5 { }

// export interface Objec5 {
//     id: string
//     statePath: StatePath16[]
//     type: string
//     completionCount: number
// }

// export interface StatePath16 {
//     id: string
// }

// export interface Player3 {
//     id: string
//     statePath: StatePath17[]
//     name: string
//     character: Character2
//     participationStatus: string
//     money: number
//     inventoryValue: number
//     netWorth: number
//     kills: number
//     killAssistsReceived: number
//     killAssistsGiven: number
//     killAssistsReceivedFromPlayer: KillAssistsReceivedFromPlayer6[]
//     weaponKills: WeaponKills6
//     multikills: any[]
//     teamkills: number
//     teamkillAssistsReceived: number
//     teamkillAssistsGiven: number
//     teamkillAssistsReceivedFromPlayer: any[]
//     weaponTeamkills: WeaponTeamkills6
//     selfkills: number
//     deaths: number
//     structuresDestroyed: number
//     structuresCaptured: number
//     items: Item4[]
//     objectives: Objec6[]
//     abilities: any[]
//     position: any
//     externalLinks: ExternalLink4[]
//     alive: boolean
//     currentArmor: number
//     currentHealth: number
//     damageDealt: number
//     damageTaken: number
//     headshots: number
//     maxHealth: number
//     selfdamageDealt: number
//     selfdamageTaken: number
//     teamdamageDealt: number
//     teamHeadshots: number
//     teamdamageTaken: number
// }

// export interface StatePath17 {
//     id: string
// }

// export interface Character2 {
//     name: string
//     id: string
// }

// export interface KillAssistsReceivedFromPlayer6 {
//     id: string
//     playerId: string
//     killAssistsReceived: number
// }

// export interface WeaponKills6 {
//     mp9?: number
//     m4a1_silencer: number
//     ak47: number
//     glock?: number
//     p250?: number
//     mac10?: number
//     galilar?: number
//     tec9?: number
//     usp_silencer?: number
//     hegrenade?: number
//     deagle?: number
//     awp?: number
//     famas?: number
//     m4a1?: number
//     elite?: number
//     molotov?: number
// }

// export interface WeaponTeamkills6 { }

// export interface Item4 {
//     id: string
//     statePath: StatePath18[]
//     equipped: boolean
//     stashed: boolean
// }

// export interface StatePath18 {
//     id: string
// }

// export interface Objec6 {
//     id: string
//     statePath: StatePath19[]
//     type: string
//     completionCount: number
// }

// export interface StatePath19 {
//     id: string
// }

// export interface ExternalLink4 {
//     dataProvider: DataProvider4
//     externalEntity: ExternalEntity4
// }

// export interface DataProvider4 {
//     name: string
// }

// export interface ExternalEntity4 {
//     id: string
// }

// export interface Segment {
//     id: string
//     statePath: StatePath20[]
//     type: string
//     sequenceNumber: number
//     started: boolean
//     finished: boolean
//     teams: Team4[]
//     segments: Segment2[]
//     draftActions: any[]
// }

// export interface StatePath20 {
//     id: string
// }

// export interface Team4 {
//     id: string
//     statePath: StatePath21[]
//     name: string
//     side: string
//     won: boolean
//     kills: number
//     killAssistsReceived: number
//     killAssistsGiven: number
//     killAssistsReceivedFromPlayer: KillAssistsReceivedFromPlayer7[]
//     weaponKills: WeaponKills7
//     teamkills: number
//     teamkillAssistsReceived: number
//     teamkillAssistsGiven: number
//     teamkillAssistsReceivedFromPlayer: any[]
//     weaponTeamkills: WeaponTeamkills7
//     selfkills: number
//     deaths: number
//     objectives: Objec7[]
//     players: Player4[]
//     damageDealt: number
//     damageTaken: number
//     headshots: number
//     selfdamageDealt: number
//     selfdamageTaken: number
//     teamdamageDealt: number
//     teamHeadshots: number
//     teamdamageTaken: number
//     winType: string
// }

// export interface StatePath21 {
//     id: string
// }

// export interface KillAssistsReceivedFromPlayer7 {
//     id: string
//     playerId: string
//     killAssistsReceived: number
// }

// export interface WeaponKills7 {
//     usp_silencer?: number
//     elite?: number
//     deagle?: number
//     hegrenade?: number
//     m4a1_silencer?: number
//     awp?: number
//     ak47?: number
//     mp9?: number
//     famas?: number
//     glock?: number
//     galilar?: number
//     p250?: number
//     mac10?: number
//     tec9?: number
//     molotov?: number
//     m4a1?: number
// }

// export interface WeaponTeamkills7 { }

// export interface Objec7 {
//     id: string
//     statePath: StatePath22[]
//     type: string
//     completionCount: number
// }

// export interface StatePath22 {
//     id: string
// }

// export interface Player4 {
//     id: string
//     statePath: StatePath23[]
//     segmentType: string
//     name: string
//     kills: number
//     killAssistsReceived: number
//     killAssistsGiven: number
//     killAssistsReceivedFromPlayer: KillAssistsReceivedFromPlayer8[]
//     weaponKills: WeaponKills8
//     teamkills: number
//     teamkillAssistsReceived: number
//     teamkillAssistsGiven: number
//     teamkillAssistsReceivedFromPlayer: any[]
//     weaponTeamkills: WeaponTeamkills8
//     selfkills: number
//     deaths: number
//     objectives: Objec8[]
//     externalLinks: ExternalLink5[]
//     alive: boolean
//     currentArmor: number
//     currentHealth: number
//     damageDealt: number
//     damageTaken: number
//     headshots: number
//     maxHealth: number
//     selfdamageDealt: number
//     selfdamageTaken: number
//     teamdamageDealt: number
//     teamHeadshots: number
//     teamdamageTaken: number
// }

// export interface StatePath23 {
//     id: string
// }

// export interface KillAssistsReceivedFromPlayer8 {
//     id: string
//     playerId: string
//     killAssistsReceived: number
// }

// export interface WeaponKills8 {
//     mp9?: number
//     m4a1_silencer?: number
//     ak47?: number
//     glock?: number
//     p250?: number
//     mac10?: number
//     galilar?: number
//     tec9?: number
//     usp_silencer?: number
//     hegrenade?: number
//     deagle?: number
//     awp?: number
//     famas?: number
//     m4a1?: number
//     elite?: number
//     molotov?: number
// }

// export interface WeaponTeamkills8 { }

// export interface Objec8 {
//     id: string
//     statePath: StatePath24[]
//     type: string
//     completionCount: number
// }

// export interface StatePath24 {
//     id: string
// }

// export interface ExternalLink5 {
//     dataProvider: DataProvider5
//     externalEntity: ExternalEntity5
// }

// export interface DataProvider5 {
//     name: string
// }

// export interface ExternalEntity5 {
//     id: string
// }

// export interface Segment2 {
//     id: string
//     statePath: StatePath25[]
//     type: string
//     sequenceNumber: number
//     started: boolean
//     finished: boolean
//     teams: any[]
//     segments: Segment3[]
//     draftActions: any[]
// }

// export interface StatePath25 {
//     id: string
// }

// export interface Segment3 {
//     id: string
//     statePath: StatePath26[]
//     type: string
//     sequenceNumber: number
//     started: boolean
//     finished: boolean
//     teams: any[]
//     segments: any[]
//     draftActions: any[]
// }

// export interface StatePath26 {
//     id: string
// }
