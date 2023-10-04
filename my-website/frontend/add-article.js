const addArticleForm = document.forms.articleForm;
const articleTitle = addArticleForm.title;
const articleContent = addArticleForm.content;
const url = 'http://localhost:1337/api';

addArticleForm.addEventListener('submit', addArticle);

function addArticle(e) {
  e.preventDefault();
  const title = articleTitle.value.trim();
  const content = articleContent.value;

  const information = {
    title: title,
    description: content,
  };
  console.log(information);

  fetch(`${url}/articles`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },

    body: JSON.stringify({
      data: information,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      articleTitle.value = '';
      articleContent.value = '';
    });
}
