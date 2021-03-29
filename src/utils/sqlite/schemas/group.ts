export default {
    table: 'groups',
    colums: {
        id: { type: 'INTEGER', primaryKey: true, nullable: false, unique: true },
        name: { type: 'STRING', nullable: false, unique: true },
        position: { type: 'INTEGER', nullable: false }
    }
}