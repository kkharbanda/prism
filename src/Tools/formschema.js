import * as yup from 'yup';


const addArticleSchema = {
    name:yup.string().required('The name is required'),
    title:yup.string()
    .required('The title is required')
    .min(20,'Make the title bigger')
    .max(70,'The title is too long'),
excerpt:yup.string()
    .required('The excerpt is required')
    .min(100,'Make the excerpt bigger')
    .max(320,'The excerpt is too long'),
    editor:yup.string()
    .required('The content is required')
    .min(50,'Make the content bigger'),
rating:yup.string()
    .required('The excerpt is required')
    .notOneOf(['Select a rating'],'You need to select a rating'),
img:yup.string()
    .url('use correct url..')
    .required('The excerpt is required')
}


export {
    addArticleSchema
}