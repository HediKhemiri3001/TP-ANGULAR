export class Person {
  name: string = '';
  lastname: string = '';
  job: string = '';
  image: string = '';
  citation: string = '';
  description: string = '';
  keywords: string = '';

  constructor(
    name: string,
    lastname: string,
    job: string,
    image: string,
    citation: string,
    description: string,
    keywords: string
  ) {
    this.name = name;
    this.lastname = lastname;
    this.job = job;
    this.image = image;
    this.citation = citation;
    this.description = description;
    this.keywords = keywords;
  }
}
