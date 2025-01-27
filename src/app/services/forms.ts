import api from '../config/api';
import { FormSettings, Category } from '../types';


export interface CategoryResponse extends Category {
  uuid: string;
  icon: string;
}

export const formsService = {
  getYearForm: async () => {
    const { data } = await api.get('/public/forms/year');
    return {
      formSettings: data.formSettings,
      categories: data.YearCaterogies.map((cat: any) => ({
        id: cat.uuid,
        name: cat.name,
        description: cat.description,
        ratingQuestion: cat.ratingQuestion,
        commentQuestion: cat.commentQuestion
      }))
    };
  },

  getCategories: async () => {
    const { data } = await api.get('/public/forms/year');
    return data.YearCaterogies;
  },

  submitFeedback: async (feedback: any) => {
    return api.post('/public/forms/feedback', feedback);
  }
};

export default formsService;
