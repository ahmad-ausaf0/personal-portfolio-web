export class Tag {

    static readonly ANGULAR = new Tag('Angular', '#748D92');
    static readonly TYPESCRIPT = new Tag('TypeScript', '#748D92');
    static readonly HTML = new Tag('HTML', '#748D92');
    static readonly CSS = new Tag('CSS', '#748D92');
    static readonly JAVASCRIPT = new Tag('JavaScript', '#748D92');
    static readonly NODEJS = new Tag('NodeJs', '#748D92');
    static readonly REACT = new Tag('React', '#748D92');
    static readonly PYTHON = new Tag('Python', '#748D92');
    static readonly CSHARP = new Tag('Csharp', '#748D92');
    static readonly JAVA = new Tag('Java', '#748D92');
    static readonly FIREBASE = new Tag('Firebase', '#748D92');

    private constructor(private readonly key: string, public readonly color: string) {}

    toString(){
        return this.key;
    }
}