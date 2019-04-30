import axios from 'axios';

export default axios.create({
   baseURL: 'http://localhost:9999/',
   headers: {
      authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0LyIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3QiLCJpYXQiOjE1NTYzODczNDZ9.EXkrtf4nOaKKO1_xfrdK4co48qzWMXJcnU9Z3sK34kQ'
   }
})
