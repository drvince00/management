const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5001;
const cors = require('cors');

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/api/hello', (req, res) => {
  res.send({
    message: 'Hello Express!'
  });
});

app.get('/api/customers', (req, res) => {
  console.log('리퀘스트:');
  // console.log(req);
  console.log(res.contentType);
  res.setHeader('Content-Type', 'application/json');
  res.send([{
      id: 1,
      image: 'https://picsum.photos/60/60',
      // image:
      //   'https://m.media-amazon.com/images/M/MV5BMTQ4NTE3MTYzOF5BMl5BanBnXkFtZTcwNDM4OTcyMg@@._V1_FMjpg_UX1000_.jpg',
      name: '이규영S',
      birthday: '741024',
      gender: '남',
      job: '잡리스!!',
    },
    {
      id: 2,
      image: 'https://picsum.photos/61/61',
      // image:
      //   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX8VrSvHSgFQ25vhiGtnS7med8mKtbkefL1Q&s',
      name: '수산시장S',
      birthday: '831024',
      gender: '여',
      job: '생선초밥',
    },
    {
      id: 3,
      image: 'https://picsum.photos/59/59',
      // image:
      //   'https://m.media-amazon.com/images/I/715R1ZcMxzL._AC_UF1000,1000_QL80_.jpg',
      name: '망원경S',
      birthday: '941024',
      gender: '남',
      job: '멀리보다',
    }
  ]);
})

app.listen(port, () => console.log(`Listening on port ${port}`));
