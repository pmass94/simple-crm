export class Organisation {
    name: string;
    todos: any[];
    admins: any[];
    users: any[];

    constructor(obj?: any) {
        this.name = obj ? obj.name : '';
        this.admins = obj ? obj.admins : '';
        this.users = obj ? obj.users : '';
    }

    public toJSON() {
        return {
            name : this.name,
            todos : this.todos,
            admins : this.admins,
            users : this.users
        };
    }
}