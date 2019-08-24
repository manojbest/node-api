
export class TestDetails {

    private _name: string;
    private _key: string;


    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get key(): string {
        return this._key;
    }

    set key(value: string) {
        this._key = value;
    }
}
