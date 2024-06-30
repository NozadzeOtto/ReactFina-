import * as Yup from 'yup';

const taskSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  description: Yup.string().required('Description is required'),
});

export { taskSchema };
