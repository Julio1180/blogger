import { Injectable } from '@angular/core';
import { Post } from '../interfaces/postinterface';

@Injectable({
  providedIn: 'root'
})


export class PostService {

  arrServices: Post[];



  constructor() {
    this.arrServices = [
      {
        title: 'SURFER MAGAZINE', body: 'Surfer fue una publicación mensual estadounidense centrada en el surf y la cultura del surf, fundada en 1962 por el conocido surfista, escritor, fotógrafo, artista y humorista John Severson. La revista se cerró en 2020. Surfer comenzó como trimestral y luego se convirtió en mensual', author: 'Jhon Severson', image: 'https://www.surfholidays.com/assets/images/blog/2015-09-15-Surfer_Magazine.jpg', category: 'SURF', createdAt: new Date()
      },
      {
        title: 'TRHASER MAGAZINE', body: 'Thrasher es una revista de skate mensual fundada en 1981, esta revista publica artículos, entrevistas con patinadores profesionales y noticias de grupos musicales, revisiones de skateparks y singularidades mixtas.', author: 'Kevin Thatcher y Fausto Vitello', image: 'https://shop.thrashermagazine.com/media/catalog/product/cache/faa118f302c59bd866e6e724e43dc207/2/0/2021_august_cover_1000.jpg', category: 'SKATE', createdAt: new Date()
      },
      {
        title: 'MOTOCROSS ACTION MAG', body: 'El motocross surgió en sus inicios de la evolución que sufrió el Cross Country. Era una típica carrera que se disputaba a pie o a caballo, atravesando el campo, utilizando senderos o carreteras secundarias. De la unión de Cross Country y moto ha nacido la denominación del Motocross o simplemente, Cross.', author: 'Siegfried Bettmann ', image: 'https://motocrossactionmag.com/wp-content/uploads/2020/09/FCUSA_MXAk20_0.1875-1.jpg', category: 'MOTOCROSS', createdAt: new Date()
      },
    ]
  }

  getAll(): Post[] {
    return this.arrServices
  }

  getByID(postId: number): Post {
    let result: any;

    for (let post of this.arrServices) {
      if (postId == postId) {
        result = post
      }
    }
    return result
  }
  getByWord(text: string): Post[] {
    return this.arrServices.filter(post => post.title.toLowerCase().indexOf(text) !== -1 || post.body.toLowerCase().indexOf(text) !== -1)
  }

  getByCategory(category: string): Post[] {
    return this.arrServices.filter(post => post.category === category)
  }


  create(pPost: Post) {
    this.arrServices.push(pPost);
  }
}
