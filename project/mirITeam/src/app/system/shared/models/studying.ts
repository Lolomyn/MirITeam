import {ThemesModel} from './themes.model';
export class Studying {
  constructor(
    public course: string,
    public prepod: string,
    public themes: ThemesModel,
    public id?: number
  ) {}
}

