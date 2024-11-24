import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

@Injectable()
export class ArticleService {
  create(createArticleDto: CreateArticleDto) {
    return 'This action adds a new article';
  }

  findAll() {
    return {
      articles: [
        {
          id: 1 ,
          title: "JavaScript Hoisting",
          description: "JS hoisting rules, pitfalls and uses for let, var, const, and functions",
          image: {
            alt: "Tokenomics article",
            src: "/_next/image?url=%2Fimages%2Fblog%2Ftokenomics.png&w=640&q=75",
            width: 200,
            height: 48
          }
        }
      ]
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} article`;
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return `This action updates a #${id} article`;
  }

  remove(id: number) {
    return `This action removes a #${id} article`;
  }
}
