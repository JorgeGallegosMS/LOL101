const express = require('express')
const app = express()
const { graphqlHTTP } = require('express-graphql')
const { GraphQLSchema } = require('graphql')
const RootQueryType = require('./graphqlTypes/root')
const cors = require('cors')
const { port, environment } = require('./vars/appVars')
const path = require('path')

app.use(cors())


const schema = new GraphQLSchema({
  query: RootQueryType
})


app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.use(express.static('frontend/build'))
app.get('*', (req, res) => {

})

app.listen(port, () => console.log(`Server started at http://localhost:${port}/graphql`))
