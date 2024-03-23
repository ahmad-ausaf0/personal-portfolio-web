export class Tag {

    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly TYPESCRIPT = new Tag('TypeScript', 'brown');
    static readonly HTML = new Tag('HTML', 'orange');
    static readonly CSS = new Tag('CSS', 'blue');
    static readonly JAVASCRIPT = new Tag('JavaScript', 'darkcyan');
    static readonly NODEJS = new Tag('NodeJs', 'green');
    static readonly REACT = new Tag('React', 'darkblue');

    private constructor(private readonly key: string, public readonly color: string) {}

    toString(){
        return this.key;
    }
}