import * as yup from 'yup';

export const createSchema = yup.object().shape({
  description: yup.string().required(),
  completed: yup.boolean().optional().default(false),
});


export const updateSchema = yup.object().shape({
  description: yup.string().optional(),
  completed: yup.boolean().optional(),
})