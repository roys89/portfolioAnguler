export class Tag {

  static readonly ANGULAR = new Tag('Angular', 'red');
  static readonly TYPESCRIPT = new Tag('Typescript', 'blue');
  static readonly PYTHON = new Tag('Python', 'yellow');
  static readonly HTML = new Tag('HTML', 'orange');
  static readonly CSS = new Tag('CSS', 'blue');
  static readonly JSCRIPT = new Tag('JScript', 'red');
  static readonly BOOTSTRAP = new Tag('Bootstrap', 'purple');
  static readonly PHP = new Tag('PHP', 'purple');
  static readonly SQL = new Tag('MySQL', 'green');
  static readonly REACT = new Tag('React', 'blue');
  static readonly SPRING = new Tag('Spring Framework', 'red');
  static readonly JAVA = new Tag('Java', 'red');
  static readonly ASPNET = new Tag('ASPNET', 'red');
  static readonly NODEJS = new Tag('nodejs', 'red');
  static readonly CSHARP = new Tag('Csharp', 'red');



  private constructor(private readonly key: string, public readonly color: string) {

  }

  toString(){
    return this.key;
  }
}
